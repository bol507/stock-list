import { User } from "@/modules/user/interfaces/user-inteface";

export interface Credentials {
  email: string;
  password: string;
  redirectTo: string;
  name?: string;
}

export interface OAuth {
  redirectTo: string;
}

export type SignInParams = Credentials | OAuth;

export interface AuthStore {
	user: User | null;	
	setUser: (value: User | null) => void;
}

export type SignInFlow = "signUp" | "signIn";
