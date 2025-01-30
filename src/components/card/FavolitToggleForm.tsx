"use client";
import React from "react";
import { toggleFavoriteAction } from "@/actions/actions";
import FormContainer from "../form/FormContainer";
import { usePathname } from "next/navigation";
import { CardButton } from "../form/Buttons";

const FavoriteToggleForm = ({
  favoriteId,
  landmarkId,
}: {
  favoriteId: string | null;
  landmarkId: string;
}) => {
  const pathname = usePathname();

  const toggleAction = toggleFavoriteAction.bind(null, {
    favoriteId,
    landmarkId,
    pathname,
  });

  return (
    <FormContainer action={toggleAction}>
            <CardButton isFavorite={favoriteId ? true : false} />
    </FormContainer>
  );
};

export default FavoriteToggleForm;
