import { useAuth } from "@/modules/auth/hooks/use-auth";
import { Dispatch } from "react";
import { SidebarTrigger } from "../ui/sidebar";
import { Breadcrumb, BreadcrumbList } from "../ui/breadcrumb";
import { Separator } from "../ui/separator";
import PageTitle from "../sidebar/page-title";

interface HeaderProps {
  state: boolean;
  setState: Dispatch<React.SetStateAction<boolean>>;
}

export const Header = ({ state, setState }: HeaderProps) => {
  //const {signOut} = useUserStore()
  const { signOut } = useAuth();

  const handleLogout = async () => {
    await signOut();
  };

  return (
    <header className="flex items-center gap-2 border-b ">
      <div className="flex items-center gap-2 px-4 w-full">
        <SidebarTrigger />
        <Separator orientation="vertical" />
        <Breadcrumb className="w=full">
          <BreadcrumbList className="flex items-center justify-between w-full">
            <h1 className="text-lg font-bold truncate">
              <PageTitle />
            </h1>
            <div className="flex items-center gap-2">
              <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
                Dashboard
              </button>
              <button className="bg-red-500 text-white px-4 py-2 rounded-md">
                Logout
              </button>
            </div>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
    </header>
  );
};
