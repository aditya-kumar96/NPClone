import { useLoaderData } from "react-router-dom"

import type { SearchLoaderResult } from "./searchLoader"
import PackageListItem from "../../components/PackageListItem"


function SearchPage() {
  const { searchResults } = useLoaderData() as SearchLoaderResult
  
  const renderedResults = searchResults.map((result) => {
    return(
    <PackageListItem pack={result} key={result.name}/>
    )
  })

  return (
    <div>
      <div className="px-4 py-3 w-[90%] mx-auto" >
        <p className="text-lg sm:text-lg font-medium text-black">
        {searchResults?.length}+ package{searchResults?.length !== 1 ? "s" : ""} found
        </p>
      </div>
        <div className="border-b border-gray-300 w-[90%] mx-auto "/>
      <div className="m-1">
      {renderedResults}
      </div>
      </div>
  )
}

export default SearchPage