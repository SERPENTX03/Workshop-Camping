"use client";

import { SignInButton } from "@clerk/nextjs";
import { Button } from "../ui/button";
import { HeartIcon, Loader } from "lucide-react";
import { useFormStatus } from "react-dom";

type SubmitProps = {
  name?: string;
  className?: string;
};

export const SubmitButton = (props: SubmitProps) => {
  const { pending } = useFormStatus();
  const { name, className } = props;
  return (
    <Button disabled={pending} className={`${className}`}>
      {pending ? (
        <>
          <Loader className="animate-spin" size={30} /> Loading
        </>
      ) : (
        <p>{name}</p>
      )}
    </Button>
  );
};

export const SingInCardButton = (props: SubmitProps) => {
  const { pending } = useFormStatus();
  const { name, className } = props;
  return (
    <SignInButton mode="modal">
      <Button
        disabled={pending}
        className={`${className}`}
        variant="outline"
        size="icon"
      >
        {" "}
        <HeartIcon />
      </Button>
    </SignInButton>
  );
};

export const CardButton = ({ isFavorite }: { isFavorite: boolean }) => {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} variant="outline" size="icon">
      {pending ? (
        <Loader className="animate-spin" />
      ) : isFavorite ? (
        <HeartIcon fill="orange" />
      ) : (
        <HeartIcon />
      )}
    </Button>
  );
};
