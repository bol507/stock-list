import { t } from "i18next";
import { EyeClosedIcon, EyeIcon } from "lucide-react";
import { SignInFormContainer } from "./sign-in-form-container";
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { Input } from "@/components/ui/input";

export const SignInForm = () => {
	const { form, isPending, showPassword, handleClickShowPassword, onSubmit } =
		SignInFormContainer();

	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className="flex flex-col gap-4 w-full"
			>
				<div>
					<FormField
						control={form.control}
						name="email"
						render={({ field }) => (
							<FormItem>
								<FormLabel>{t("auth.email")}</FormLabel>
								<FormControl>
									<Input
										{...field}
										disabled={isPending}
										type="email"
										placeholder={t("auth.email")}
										required
									/>
								</FormControl>
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="password"
						render={({ field }) => (
							<FormItem>
								<FormLabel>{t("auth.password")}</FormLabel>
								<FormControl>
									<Input
										{...field}
										disabled={isPending}
										type={showPassword ? "text" : "password"}
										placeholder={t("auth.password")}
										required
									/>
									<button
										type="button"
										className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-500"
										onClick={handleClickShowPassword}
										disabled={isPending}
									>
										{showPassword ? (
											<EyeIcon className="h-5 w-5" />
										) : (
											<EyeClosedIcon className="h-5 w-5" />
										)}
									</button>
								</FormControl>
							</FormItem>
						)}
					/>
					<FormError />
					<FormSuccess />
					<button
						type="submit"
						className={`w-full py-2 mt-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-hidden focus:ring-3 focus:ring-blue-300 ${isPending ? "opacity-50 cursor-not-allowed" : ""
							}`}
						disabled={isPending}
					>
						{isPending ? (
							<div className="flex justify-center">
								<div className="animate-spin h-5 w-5 border-4 border-white border-t-transparent rounded-full"></div>
							</div>
						) : (
							t("auth.submit")
						)}
					</button>
				</div>
			</form>
		</Form>
	);
};
