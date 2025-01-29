"use client";

import { Button } from "../ui/button";
import { Loader } from "lucide-react";
import { useFormStatus } from "react-dom";

type SubmitProps = {
  name: string;
  className: string;
};

export const SubmitButton = (props: SubmitProps) => {
  const { pending } = useFormStatus();
  const { name, className } = props;
  return (
    <Button disabled={pending} className={`${className}`}>
      {pending ? (
        <>
          <Loader size={30} /> Loading
        </>
      ) : (
        <p>{name}</p>
      )}
    </Button>
  );
};
