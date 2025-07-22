import React, { useState } from 'react'
import { VscSearch } from 'react-icons/vsc';
import { useNavigate } from 'react-router-dom';


function SearchInput() {
    const [term, setTerm] = useState('');
    const navigate = useNavigate()
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        navigate(`/search?term=${term}`)
    }
    return (
        <form onSubmit={handleSubmit} className="w-full max-w-[700px]">
        <div className="relative flex border border-black rounded-md overflow-hidden h-[42px]">
      
          {/* Search Icon */}
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <VscSearch className="h-5 w-5 text-gray-500" />
          </div>
      
          {/* Input Field */}
          <input
            value={term}
            onChange={(e) => setTerm(e.target.value)}
            placeholder="Search packages"
            className="pl-10 pr-4 w-full text-sm outline-none bg-white"
          />
      
          {/* Search Button */}
          <button
            type="submit"
            className="bg-black text-white px-6 text-sm font-semibold hover:bg-gray-900 cursor-pointer"
          >
            Search
          </button>
        </div>
      </form>
      
    )
}

export default SearchInput