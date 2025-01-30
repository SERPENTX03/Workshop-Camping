import React from "react";
import { auth } from "@clerk/nextjs/server";
import { SingInCardButton } from "../form/Buttons";
import { fetchFavoriteId } from "@/actions/actions";
import FavoriteToggleForm from "./FavolitToggleForm"; 

const ToggleButton = async ({ landmarkId }: { landmarkId: string }) => {
  const { userId } = await auth();
  if (!userId) return <SingInCardButton />;
  const favoriteId = await fetchFavoriteId({ landmarkId });

  return <FavoriteToggleForm favoriteId={favoriteId} landmarkId={landmarkId} />;
};

export default ToggleButton;
