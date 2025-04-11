export interface Credentials {
  email: string;
  password: string;
  redirectTo: string;
}

export interface OAuth {
  redirectTo: string;
}

export type SignInParams = Credentials | OAuth;