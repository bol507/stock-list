import { AppSidebar } from "@/components/app-sidebar"
import { SidebarProvider } from "@/components/ui/sidebar"
import { ReactNode } from "react"
import "./app-layout.css"

interface AppLayoutProps  {
  children: ReactNode
}

export const AppLayout = ({children}: AppLayoutProps) => {
  return (
    <SidebarProvider>
      <AppSidebar />
      <div className="app-layout">
        {children}
      </div>
    </SidebarProvider>
  )
}

