import { useEffect, useState, useTransition } from "react";
import { toast } from "sonner";

import { useAuth } from "@/modules/auth/hooks/use-auth";
import { DEFAULT_LOGIN_REDIRECT } from "@/app/router/routes";
import { SignInSchema } from "../schemas/schemas";
import { useSearchParams } from "react-router";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { url } from "inspector";

export const SignInFormContainer = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const urlError =
    searchParams.get("error") === "OAuthAccountNotLinkedException"
      ? "Email already in use with different provider!"
      : "";
  //const [form, setForm] = useState<SignIn>({ email: "", password: "" });
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

  /*const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };*/

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

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  return {
    form,
    isPending,
    error,
    urlError,
    success,
    showPassword,
    onSubmit,
    handleClickShowPassword,
    handleMouseDownPassword,
  };
};
