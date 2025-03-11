import { ReactNode } from "react"
import { BrowserRouter, Route, Routes} from "react-router"
import PrivateRoutes from "./private-routes"

interface AppRouterProps{
  children: ReactNode
}

const AppRouter = ({children}: AppRouterProps) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<PrivateRoutes />} />
      </Routes>
      {children}
    </BrowserRouter>
  )
}

export default AppRouter