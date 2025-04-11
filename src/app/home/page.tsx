import { SidebarTrigger } from "@/components/ui/sidebar";
import { useIsMobile } from "../hooks/use-mobile";
import { AppLayout } from "../layouts/app-layout";
import "./page.css";
import { Header } from "@/components/home/header";
import { useEffect, useState } from "react";
import { Separator } from "@/components/ui/separator";

const HomePage = () => {
  const isMobile = useIsMobile();
  const [isTablet, setIsTablet] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsTablet(window.innerWidth >= 768 && window.innerWidth < 1024);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <AppLayout>
      <header className="header border-b ">
      <SidebarTrigger />
      <Separator orientation="vertical" />
        <Header
          isMobile={isMobile}
          isTablet={isTablet}
          isSearchOpen={isSearchOpen}
          setIsSearchOpen={setIsSearchOpen}
        />
      </header>
      <section className="section-1">
        <h2>Section 1</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem,
          voluptatibus.
        </p>
      </section>
      <section className="section-2">
        <h2>Section 2</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem,
          voluptatibus.
        </p>
      </section>
      <main className="main">
        <h2>Main</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem,
          voluptatibus.
        </p>
      </main>
    </AppLayout>
  );
};

export default HomePage;
