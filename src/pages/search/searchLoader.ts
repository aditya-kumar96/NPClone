import { searchPackages } from "../../api/query/searchPackages"
import type { packageSummary } from "../../api/types/packageSummary"

export interface SearchLoaderResult{
    searchResults:packageSummary[]
}

export async function searchLoader({request} :{request:Request} ):Promise<SearchLoaderResult>{
    const {searchParams} = new URL(request.url)
    const term = searchParams.get('term')
    if (!term) {
        // throw new Error('Search term must be provided')
        return {
            searchResults : []
        }
    }
        const search = await searchPackages(term)
        return {
           searchResults: search
        };
  }