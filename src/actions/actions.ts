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

const getAuthUser = async () => {
  const user = await currentUser();
  if (!user) {
    throw new Error("You must Logged!!!");
  }
  if (!user.privateMetadata.hasProfile) redirect("/profile/create");

  return user;
};

const renderError = (error: unknown): { message: string } => {
  return {
    message: error instanceof Error ? error.message : "An Error!!",
  };
};

export const createProfileAction = async (
  prevStete: any,
  formData: FormData
) => {
  try {
    const user = await currentUser();
    if (!user) throw new Error("Please Login!!!");

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
    // return { message: "Create Landmark Success!!" }
  } catch (error) {
    return renderError(error);
  }

  redirect("/");
};

export const createLandmarkAction = async (
  prevState: any,
  formData: FormData
): Promise<{ message: string }> => {
  try {
    const user = await currentUser();
    if (!user) throw new Error("Please Login!!!");

    const rawData = Object.fromEntries(formData); // แปลงข้อมูลฟอร์ม
    const file = formData.get("image") as File; // ดึงไฟล์

    //Step 1 ValidateData
    const validatedFile = validateWithZod(imageSchema, { image: file });
    const validateField = validateWithZod(landmarkSchema, rawData);

    //Step 2 Update Image to Supabase
    const fullPath = await uploadFile(validatedFile.image)
    // console.log(fullPath)

    //Step 3 Inser to DB
    await db.landmark.create({
      data:{
        ...validateField,
        image:fullPath,
        profileId:user.id,
      }
    })

  } catch (error) {
    return renderError(error);
  }

  redirect("/");
};


export const fetchLandmarks = async(
  //Search 
)=> {
  const landmarks = await db.landmark.findMany({
    orderBy: {
      createdAt: 'desc'
    }
  })
  return landmarks;
}