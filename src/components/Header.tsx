import { Link } from "react-router-dom"
import SearchInput from "./SearchInput"
import logo from '../assets/icons/logo.svg'

function Header() {
    return (
        <div className="flex flex-wrap items-center justify-between gap-4 px-4 py-1 border-b border-gray-300 h-auto sm:h-18">
        {/* Left: Logo */}
        <div className="flex items-center space-x-3 ml-5 flex-shrink-0">
            <Link to="/" className="text-lg font-bold">
                <img src={logo} alt="Logo" style={{ width: '70px', height: '22px' }} />
            </Link>
        </div>

        {/* Center: Search */}
        <div className="flex-1 min-w-[250px] max-w-[700px] w-full">
            <SearchInput />
        </div>

        {/* Right: Buttons */}
        <div className="flex items-center space-x-3 flex-shrink-0">
            <button className="px-4 py-2 border text-sm font-medium hover:bg-gray-100 cursor-pointer">
                Sign Up
            </button>
            <button className="px-4 py-2 border text-sm font-medium hover:bg-gray-100 cursor-pointer">
                Sign In
            </button>
        </div>
    </div>

    )
}

export default Header