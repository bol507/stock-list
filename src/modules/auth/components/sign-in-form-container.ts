import { useState, useTransition } from "react";

import { useAuth } from "@/modules/auth/hooks/use-auth";
import { DEFAULT_LOGIN_REDIRECT } from "@/app/router/routes";
import { SignInSchema } from "../schemas/schemas";
import { useSearchParams } from "react-router";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

export const SignInFormContainer = () => {
  const [searchParams] = useSearchParams();
  const urlError =
    searchParams.get("error") === "OAuthAccountNotLinkedException"
      ? "Email already in use with different provider!"
      : "";
  const [showPassword, setShowPassword] = useState(false);
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const form = useForm<SignInSchema>({
    resolver: zodResolver(SignInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const { signIn } = useAuth();



  const onSubmit = (values: SignInSchema) => {
    setSuccess("");
    setError("");

    const { email, password } = values;
    startTransition(() => {
      signIn("credentials", {
        email,
        password,
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

  

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  /*
  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };*/

  return {
    form,
    isPending,
    error,
    urlError,
    success,
    showPassword,
    onSubmit,
    handleClickShowPassword,
  };
};
