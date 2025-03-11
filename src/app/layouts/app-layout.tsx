import { AppSidebar } from "@/components/app-sidebar"
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { ReactNode } from "react"

interface AppLayoutProps  {
  children: ReactNode
}

export const AppLayout = ({children}: AppLayoutProps) => {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className=" w-full ">
        <SidebarTrigger />
        {children}
      </main>
    </SidebarProvider>
  )
}

