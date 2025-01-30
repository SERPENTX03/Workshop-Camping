import React from "react";
import Image from "next/image";
import { LandmarkCardProps } from "@/utils/Types";
import LandmarkRating from "./LandmarkRating";
import ToggleButton from "./ToggleButton";
import Link from "next/link";

const LandmarkCard = ({ landmark }: { landmark: LandmarkCardProps }) => {
  const { name, image, id, province,  description, price } =
    landmark;
  return (
    <article className="group relative">
      <Link href={`/landmark/${id}`}>
      <div className="relative w-full md:h-80 h-60">
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
      <p className="font-thin text-xs md:text-sm lg:text-base">
        {description.substring(0, 60)}
      </p>

      <div className="flex justify-between">
        <span className="font-semibold text-sm md:text-lg">{price} THB</span>
        <p>{province}</p>
      </div>
      </Link>
      <div className="absolute top-0 right-0 m-2 z-50">
        <ToggleButton landmarkId={id}/>
      </div>
     
    </article>
  );
};

export default LandmarkCard;
