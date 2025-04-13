import { useState, useTransition } from "react";
import { SignUpSchema } from "../schemas/schemas";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { DEFAULT_LOGIN_REDIRECT } from "@/app/router/routes";


export const SignUpFormContainer = () => {
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const form = useForm<SignUpSchema>({
    resolver: zodResolver(SignUpSchema),
    defaultValues: {
      email: "",
      password: "",
      name: "",
    },
  });

  const onSubmit = (values: SignUpSchema) => {
    setSuccess("");
    setError("");

    const { email, password, name } = values;
    startTransition(() => {
      SignUp("credentials", {
        email,
        password,
        name,
        redirectTo: DEFAULT_LOGIN_REDIRECT,
      })
        .then(() => {
          setSuccess("Successfully signed in!");
        })
        .catch((error) => {
          setError(error.message);
        });
    });
  };
  
  return {
    form,
    isPending,
    error,
    success,
    onSubmit,
  };
};



}//end sign up form container