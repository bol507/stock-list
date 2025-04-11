import { SidebarTrigger } from "@/components/ui/sidebar"
import { AppLayout } from "../layouts/app-layout"
import "./page.css"
import { Header } from "@/components/home/header"
import { useState } from "react"


const HomePage =() => {
  const [state, setState] = useState(false)
  return(
    <AppLayout>
      <header className="header">
        <SidebarTrigger />
        <Header state={state} setState={setState} />
      </header>
      <section className="section-1">
        <h2>Section 1</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, voluptatibus.</p>
      </section>
      <section className="section-2">
        <h2>Section 2</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, voluptatibus.</p>
      </section>
      <main className="main">
        <h2>Main</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, voluptatibus.</p>
      </main>
    </AppLayout>
   
  )
}

export default HomePage