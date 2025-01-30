"use server";

import {
  imageSchema,
  landmarkSchema,
  profileSchema,
  validateWithZod,
} from "@/utils/schemas";
import { clerkClient, currentUser } from "@clerk/nextjs/server";
import db from "@/utils/db";
import { redirect } from "next/navigation";
import { uploadFile } from "@/utils/supabase";
import { revalidatePath } from "next/cache";

const getAuthUser = async () => {
  const user = await currentUser();
  if (!user) {
    throw new Error("You must be logged in!");
  }
  if (!user.privateMetadata.hasProfile) redirect("/profile/create");

  return user;
};

const renderError = (error: unknown): { message: string } => {
  return {
    message: error instanceof Error ? error.message : "An error occurred!",
  };
};

type ProfileFormData = FormData;

type LandmarkFormData = FormData;

type ToggleFavoriteState = {
  favoriteId: string | null;
  landmarkId: string;
  pathname: string;
};

export const createProfileAction = async (
  prevState: string | null,
  formData: ProfileFormData
): Promise<{ message: string }> => {
  try {
    const user = await currentUser();
    if (!user) throw new Error("Please log in!");

    const rawData = Object.fromEntries(formData);
    const validateField = validateWithZod(profileSchema, rawData);

    await db.profile.create({
      data: {
        clerkId: user.id,
        email: user.emailAddresses[0].emailAddress,
        profileImage: user.imageUrl ?? "",
        firstName: validateField.firstName,
        lastName: validateField.lastName,
      },
    });

    const client = await clerkClient();
    await client.users.updateUserMetadata(user.id, {
      privateMetadata: {
        hasProfile: true,
      },
    });
    
  } catch (error) {
    return renderError(error);
  }

  redirect("/");
};

export const createLandmarkAction = async (
  prevState: Record<string, unknown>,
  formData: LandmarkFormData
): Promise<{ message?: string }> => {
  try {
    const user = await currentUser();
    if (!user) throw new Error("Please log in!");

    const rawData = Object.fromEntries(formData);
    const file = formData.get("image") as File;

    const validatedFile = validateWithZod(imageSchema, { image: file });
    const validateField = validateWithZod(landmarkSchema, rawData);

    const fullPath = await uploadFile(validatedFile.image);

    await db.landmark.create({
      data: {
        ...validateField,
        image: fullPath,
        profileId: user.id,
      },
    });
  } catch (error) {
    return renderError(error);
  }

  redirect("/");
};

export const fetchLandmarks = async ({
  search = "",
  category,
}: {
  search?: string;
  category?: string;
}) => {
  return db.landmark.findMany({
    where: {
      category,
      OR: [
        { name: { contains: search, mode: "insensitive" } },
        { description: { contains: search, mode: "insensitive" } },
        { province: { contains: search, mode: "insensitive" } },
      ],
    },
    orderBy: {
      createdAt: "desc",
    },
  });
};

export const fetchLandmarksHero = async () => {
  return db.landmark.findMany({
    orderBy: {
      createdAt: "desc",
    },
    take: 4,
  });
};

export const fetchFavoriteId = async ({ landmarkId }: { landmarkId: string }) => {
  const user = await getAuthUser();
  if (!user || !user.id) {
    throw new Error("User not authenticated");
  }

  const favorite = await db.favorite.findFirst({
    where: {
      landmarkId,
      profileId: user.id,
    },
    select: {
      id: true,
    },
  });
  return favorite?.id || null;
};

export const toggleFavoriteAction = async (prevState: ToggleFavoriteState) => {
  const { favoriteId, landmarkId, pathname } = prevState;
  const user = await getAuthUser();

  try {
    if (favoriteId) {
      await db.favorite.delete({
        where: {
          id: favoriteId,
        },
      });
    } else {
      await db.favorite.create({
        data: {
          landmarkId,
          profileId: user.id,
        },
      });
    }

    revalidatePath(pathname);
    return {
      message: favoriteId ? "Removed from favorites" : "Added to favorites",
    };
  } catch (error) {
    return renderError(error);
  }
};

export const fetchFavorites = async () => {
  const user = await getAuthUser();
  const favorites = await db.favorite.findMany({
    where: {
      profileId: user.id,
    },
    select: {
      landmark: {
        select: {
          id: true,
          name: true,
          description: true,
          image: true,
          price: true,
          province: true,
          lat: true,
          lng: true,
          category: true,
        },
      },
    },
  });

  return favorites.map((favorite) => favorite.landmark);
};

export const fetchLandmarkDetail = async ({ id }: { id: string }) => {
  return db.landmark.findFirst({
    where: { id },
    include: {
      profile: true,
    },
  });
};
