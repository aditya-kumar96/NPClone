import { searchPackages } from "../../api/query/searchPackages"

export async function searchLoader({request} :{request:Request} ){
    const {searchParams} = new URL(request.url)
    const term = searchParams.get('term')
    if (!term) {
        throw new Error('Search term must be provided')
    }
        const search = await searchPackages(term)
        return {
           searchResults: search
        };
  }