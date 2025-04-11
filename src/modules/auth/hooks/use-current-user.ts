import { useAuthStore } from "../store/auth-store";

export const useCurrentUser = () => {
  const data = useAuthStore((state) => state.user);
  const isLoading = data === undefined;
	return { data, isLoading };
};