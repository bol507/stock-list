import { useMutation } from "@tanstack/react-query";
import AuthService from "../service/auth-service";
import { Credentials, OAuth, SignInParams } from "../interfaces/auth-interface";
import { useNavigate } from "react-router";
import { useAuthStore } from "@/modules/auth/store/auth-store";

export const useAuth = () => {
  const navigate = useNavigate();
  const setUser = useAuthStore((state) => state.setUser);


  const credentialsMutation = useMutation({
    mutationFn: async (variables: Credentials) => {
      const { email, password } = variables;
      const response = await AuthService.signIn({ email, password });
      return response;
    },
    onSuccess: (data, variables) => {
      localStorage.setItem("token", data.token);
      setUser(data.user);
      navigate(variables.redirectTo);
    },
    onError: (error: unknown) => {
      console.log(error);
    },
    onSettled: () => {},
  });

  const signIn = async (
    type: "credentials" | "github" | "google",
    params: SignInParams
  ) => {
    let requestData: Credentials | OAuth;

    switch (type) {
      case "credentials":
        requestData = {
          email: (params as Credentials).email,
          password: (params as Credentials).password,
          redirectTo: (params as Credentials).redirectTo,
        };
        credentialsMutation.mutate(requestData);
        break;

      case "github":
        requestData = {
          redirectTo: (params as OAuth).redirectTo,
        };
        break;
      case "google":
        requestData = {
          redirectTo: (params as OAuth).redirectTo,
        };
        break;

      default:
        throw new Error("Invalid sign-in type");
    }
  };

  const signOut = async () => {
    setUser(null);
    localStorage.removeItem("token");
  };

  return {
    signIn,
    signOut,
  };
}; //end useAuth
