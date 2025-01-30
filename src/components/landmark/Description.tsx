import React from "react";

const Description = ({ description }: { description: string }) => {
  return (
    <article className="my-4">
      <p className="text-base md:text-xl font-extralight ">{description}</p>
    </article>
  );
};

export default Description;
