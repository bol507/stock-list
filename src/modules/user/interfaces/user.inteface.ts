export interface SignIn extends Record<string, unknown> {
  email: string;
  password: string;
}

export interface SignUp extends Record<string, unknown> {
  email: string;
  password: string;
  name: string;
}

export interface User {
  id: string;
  email?: string;
  password?: string;
  name?: string;
}

export interface UserStore {
  user: User | null;
  setUser: (value: User | null) => void;
}