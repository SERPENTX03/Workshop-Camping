import Image from "next/image";
import React from "react";

const ImageContainer = ({
  mainImage,
  name,
}: {
  mainImage: string;
  name: string;
}) => {
  return (
    <section className="h-60  w-full  md:h-[400px] relative">
      <Image
        src={mainImage}
        alt={name}
        priority
        fill
        className="object-cover rounded-lg"
      />
    </section>
  );
};

export default ImageContainer;
