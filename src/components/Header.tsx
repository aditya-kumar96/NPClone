import { Link } from "react-router-dom"
import SearchInput from "./SearchInput"
import logo from '../assets/icons/logo.svg'

function Header() {
  return (
    <div className="flex items-center justify-start px-4 border-b h-14 "> 
        <div className="flex items-center space-x-2 text-sm font-medium">
        <Link to={'/'} className="text-lg font-bold bg-yellow">
        <img src={logo} alt="Logo" style={{ width: '60px', height: 'auto' }} />
        </Link>
        </div>
        <div className="w-full max-w-xl ml-4">
            <SearchInput/>
        </div>
    </div>
  )
}

export default Header