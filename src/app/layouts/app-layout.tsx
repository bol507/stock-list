import { AppSidebar } from "@/components/app-sidebar"
import { SidebarProvider } from "@/components/ui/sidebar"
import { ReactNode } from "react"

interface AppLayoutProps  {
  children: ReactNode
}

export const AppLayout = ({children}: AppLayoutProps) => {
  return (
    <SidebarProvider>
      <AppSidebar />
      <div className=" w-full h-dvh grid grid-rows-4 p-3.5 ">
        {children}
      </div>
    </SidebarProvider>
  )
}

