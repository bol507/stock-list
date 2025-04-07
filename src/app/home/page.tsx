import { SidebarTrigger } from "@/components/ui/sidebar"
import { AppLayout } from "../layouts/app-layout"



const HomePage =() => {
  return(
    <AppLayout>
      <header className="bg-[rgba(103,93,241,0.2)] text-white flex">
        <SidebarTrigger />
        <h1>Home Page</h1>
      </header>
      <section className="bg-[rgba(229,67,26,0.2)] text-white flex">
        <h2>Section 1</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, voluptatibus.</p>
      </section>
      <section className="bg-[rgba(77,237,106,0.2)] text-white flex">
        <h2>Section 2</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, voluptatibus.</p>
      </section>
      <main className="bg-[rgba(179,46,241,0.2)] text-white flex">
        <h2>Main</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, voluptatibus.</p>
      </main>
    </AppLayout>
   
  )
}

export default HomePage