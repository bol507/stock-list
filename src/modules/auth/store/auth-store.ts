
import { StateCreator, create } from "zustand";
import { createJSONStorage, devtools, persist } from "zustand/middleware";
import { AuthStore } from "../interfaces/auth-interface";
import { User } from "@/modules/user/interfaces/user-inteface";

const AuthApi: StateCreator<AuthStore, [["zustand/devtools", never]]> = (
	set,
) => ({
	
	user: null,
	setUser: (value: User | null) => set({ user: value }, false, "SET_USER"),

});

export const useAuthStore = create<AuthStore>()(
	devtools(
		persist(AuthApi, {
			name: "auth-store",
			storage: createJSONStorage(() => sessionStorage),
		}),
	),
);
