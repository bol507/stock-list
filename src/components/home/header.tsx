import { Dispatch, Fragment } from "react";
import { Breadcrumb, BreadcrumbList } from "../ui/breadcrumb";
import PageTitle from "../sidebar/page-title";
import { MobileSearch } from "./mobile-search";
import { UserControls } from "./user-control";
import { DesktopSearch } from "./desktop-search";

interface HeaderProps {
  isMobile: boolean;
  isTablet: boolean;
  isSearchOpen: boolean;
  setIsSearchOpen: Dispatch<React.SetStateAction<boolean>>;
}

export const Header = ({
  isMobile,
  isTablet,
  isSearchOpen,
  setIsSearchOpen,
}: HeaderProps) => {
  return (
    <Breadcrumb className="w-full h-full">
      <BreadcrumbList className="flex items-center justify-between w-full h-full px-4">
        <h1 className="text-lg font-bold truncate">
          <PageTitle />
        </h1>
        <div className="flex items-center ml-auto">
          {isMobile ? (
            <Fragment>
              <MobileSearch
                isSearchOpen={isSearchOpen}
                setIsSearchOpen={setIsSearchOpen}
              />
              <UserControls compact={isMobile} />
            </Fragment>
          ) : (
            <Fragment>
              <DesktopSearch isTablet={isTablet} />
              <UserControls compact={isTablet} />
            </Fragment>
          )}
        </div>
      </BreadcrumbList>
    </Breadcrumb>
  );
};
