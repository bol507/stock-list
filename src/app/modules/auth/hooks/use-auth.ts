
import { useMutation } from "@tanstack/react-query"

export const useAuth = () => {

  const signInMutation = useMutation({
    mutationFn: async () => {},
    onSuccess: () => {},
    onError: () => {},
    onSettled: () => {},
  })

  const signIn = async (user: any) => {
    await signInMutation.mutate(user)
  }

  return {
    signIn,
  }
}//end useAuth