import api from "@/app/config/axiosConfig";
import { handleError } from "@/lib/handleError";
import { SignIn, SignUp, User } from "../../user/interfaces/user-inteface";

interface AuthResponse {
  user: User;
  token: string;
}

export const AuthService = {
  signIn: async (payload: SignIn): Promise<AuthResponse> => {
    try {
      const response = await api.post<AuthResponse>("/auth/signin", payload);
      return response.data;
    } catch (error) {
      throw new Error(handleError(error));
    }
  },
  signUp: async (payload: SignUp): Promise<AuthResponse> => {
    try {
      const response = await api.post<AuthResponse>("/auth/signup", payload);
      return response.data;
    } catch (error) {
      throw new Error(handleError(error));
    }
  },
};

export default AuthService;
