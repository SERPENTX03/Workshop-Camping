import React from "react";
import Image from "next/image";
import { LandmarkCardProps } from "@/utils/Types";
import LandmarkRating from "./LandmarkRating";

const LandmarkCard = ({ landmark }:{landmark:LandmarkCardProps}) => {
  const { name, image,id,province,lat,lng,category,description,price } = landmark;
  return (
    <article className="group relative">
      <div className="relative w-full md:h-80 h-60 z-0">
         
        <Image
          src={image}
         fill
          alt={name}
          
          className="object-cover rounded-xl gap-4 group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="flex mt-2 justify-between text-black ">
        <h1 className="text-sm md:text-xl font-medium">{name}</h1>
        <LandmarkRating />
      </div>
      <p className="text-xs md:text-sm lg:text-base">
        {description.substring(0,60)}
      </p>

      <div className="flex justify-between">
        <span className="font-semibold text-sm md:text-lg">{price}</span>
        <p>{province}</p>
      </div>
    </article>
  );
};

export default LandmarkCard;
