import { Globe, LogOutIcon, Moon, Sun } from "lucide-react";
import { useTranslation } from "react-i18next";

import { useAuth } from "@/modules/auth/hooks/use-auth";

import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { useTheme } from "@/app/hooks/theme-context";
import { Button } from "../ui/button";
import { useCurrentUser } from "@/modules/auth/hooks/use-current-user";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

interface UserControlsProps {
  compact: boolean;
}

export const UserControls = ({ compact }: UserControlsProps) => {
  const { t, i18n } = useTranslation();
  const { data: user } = useCurrentUser();
  const { signOut } = useAuth();
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");
  const setLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };
  return (
    <>
      <Button variant="ghost" size="icon" onClick={toggleTheme}>
        {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
      </Button>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="sm">
            <Globe size={16} />
            <span className={compact ? "hidden" : "hidden sm:inline"}>
              {i18n.language}
            </span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem onClick={() => setLanguage("es")}>
            Español
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setLanguage("en")}>
            English
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Avatar>
            <AvatarImage src={user?.image} alt={user?.name} />
            <AvatarFallback>{user?.name?.charAt(0)}</AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>

        <DropdownMenuContent align="end">
          {/*
          <DropdownMenuLabel>{user?.name} - {user?.user_details?.role?.name}</DropdownMenuLabel>
          */}
          <DropdownMenuItem onClick={signOut}>
            <LogOutIcon /> {t("common.logout")}
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};
