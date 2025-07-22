import { useLoaderData } from "react-router-dom"

import type { SearchLoaderResult } from "./searchLoader"
import PackageListItem from "../../components/PackageListItem"


function SearchPage() {
  const { searchResults } = useLoaderData() as SearchLoaderResult
  console.log(searchResults?.length)
  const renderedResults = searchResults.map((result) => {
    return(
    <PackageListItem pack={result} />
    )
  })
  return (
    <div>

      <div className="px-4 py-3">
        <p className="text-lg sm:text-xl font-semibold text-black">
        {searchResults?.length}+ package{searchResults?.length !== 1 ? "s" : ""} found
        </p>
      </div>

        <div className="border-b "/>


      <div className="m-1">
      {renderedResults}
      </div>


      </div>
  )
}

export default SearchPage