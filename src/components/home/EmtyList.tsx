import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

const EmtyList = ({
  heading = "No items",
  message = "Please try again",
  btnText = "Back home",
}: {
  heading?: string;
  message?: string;
  btnText?: string;
}) => {
  return (
    <div className="capitalize max-w-6xl mx-auto p-4">
      <h1 className="text-2xl font-semibold">{heading}</h1>
      <p>{message}</p>

      <Link href="/">
        <Button className="mt-4">{btnText}</Button>
      </Link>
    </div>
  );
};

export default EmtyList;
