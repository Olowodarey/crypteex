import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"

const MainLayout = () => {
  return (
    <div>
        <main className=" px-[4px] bg-bblack">
        <Navbar />    
        <Outlet />
        </main>
    </div>
  )
}

export default MainLayout