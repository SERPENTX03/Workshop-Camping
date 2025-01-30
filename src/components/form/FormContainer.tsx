"use client";

import React, { useEffect } from "react";
import { useActionState } from "react";
import { useToast } from "@/hooks/use-toast";
import { ActionFunction, FormState } from "@/utils/Types"; 

const initialState: FormState = {
  message: "",
};

const FormContainer = ({
  action,
  children,
}: {
  action: ActionFunction;
  children: React.ReactNode;
}) => {
  const { toast } = useToast();
  const [state, formAction] = useActionState<FormState, FormData>(
    action,
    initialState
  );

  useEffect(() => {
    if (state?.message?.trim()) {
      toast({ description: state.message });
    }
  }, [state?.message, toast]);

  return <form action={formAction}>{children}</form>;
};

export default FormContainer;
