import type { packageSummary } from "../types/packageSummary";

interface SearchResponse {
    objects: {
        dependents:string,
        package: {
            name: string,
            description: string,
            version: string,
            license:string,
            keywords?: string[],
            publisher:{
                username:string,
            }
        }
    }[]
}
export async function searchPackages(term: string): Promise<packageSummary[]> {
    const res = await fetch(
        `https://registry.npmjs.org/-/v1/search?text=${term}`
    )
    const data: SearchResponse = await res.json()
    console.log(data)
    return data.objects.map(({dependents ,package: { name, description, version, keywords , license , publisher:{username} } }) => {
        return {
            dependents,
            name,
            description,
            version,
            keywords,
            license,
            username
        }
    })
}