import { useLoaderData } from "react-router-dom"
import type { DetailsLoaderResult } from "./detailsLoader"

function DetailPage() {
  const {details} = useLoaderData() as DetailsLoaderResult
  console.log(details)
  return (
    <div>DetailPage</div>
  )
}

export default DetailPage