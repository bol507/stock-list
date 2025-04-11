import { UserStore, User } from "@/modules/user/interfaces/user.inteface";
import { StateCreator, create } from "zustand";
import { createJSONStorage, devtools, persist } from "zustand/middleware";

const initialState: User = {
	id: '',
	email: "",
	password: "",
	name: "",
};

const UsersApi: StateCreator<UserStore, [["zustand/devtools", never]]> = (
	set,
) => ({
	user: initialState,
	setUser: (value: User) =>
		set(
			{
				user: value,
			},
			false,
			"SET_USER",
		),
});

export const useUserStore = create<UserStore>()(
	devtools(
		persist(UsersApi, {
			name: "user-store",
			storage: createJSONStorage(() => sessionStorage),
		}),
	),
);
