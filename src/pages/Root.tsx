import { Outlet } from "react-router-dom"
import Header from "../components/Header"


function Root() {
  return (
        <div>
         <div className="w-full h-3 border-black bg-gradient-to-r from-orange-400 via-red-500 to-blue-400" />

            <Header/>
            <Outlet/>
        </div>
  )
}

export default Root