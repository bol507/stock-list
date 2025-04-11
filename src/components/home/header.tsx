import { Dispatch } from "react"

interface HeaderProps {
  state: boolean
  setState: Dispatch<React.SetStateAction<boolean>>
}

export const Header = ({state, setState}: HeaderProps) => {
  //const {} = useAuthStore()
  //const {user} = userAuth()


  return (
    <header className="bg-[rgba(103,93,241,0.2)] text-white flex">
      <h1>Home Page</h1>
    </header>
  )
} 