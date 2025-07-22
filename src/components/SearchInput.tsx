import React, { useState } from 'react'
import { VscSearch } from 'react-icons/vsc';
import { useNavigate } from 'react-router-dom';


function SearchInput() {
    const [term,setTerm] = useState('');
    const navigate = useNavigate()
    const handleSubmit=(event: React.FormEvent<HTMLFormElement>)=>{
        event.preventDefault()
            navigate(`/search?term=${term}`)
    }   
  return (
    <form onSubmit={handleSubmit}>
        <div className="relative">
            <div className='absolute inset-y-0 flex items-center pl-3'>
                <VscSearch className='h-5 w-5 text-gray-500'/>
            </div>
        <div className='flex'>
        <input
            value={term}
            onChange={(e)=>setTerm(e.target.value)}
            className='pl-10 py-2 min-w-3xl border-0 shadow-none bg-gray-200'
            placeholder='Search Package'
        />
        <button className='bg-black-900 w-xl h-full border-1 p-4'>
            Search
            </button>
        </div>
        </div>
    </form>
  )
}

export default SearchInput