import type { Params } from "react-router-dom"
import { getPackage } from "../../api/query/getPackage"
import type { packageDetails } from "../../api/types/packageDetails"

interface loadArgs{
    params:Params
}
export interface DetailsLoaderResult{
    details:packageDetails
}
export async function detailsLoader({params}:loadArgs):Promise<DetailsLoaderResult>{
    const {name } =params

    if(!name){
        throw new Error("Name must be provided")
    }

    const details = await getPackage(name)


    return {
        details
    }
}