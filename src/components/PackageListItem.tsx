import { Link } from "react-router-dom";
import type { packageSummary } from "../api/types/packageSummary";
import dependent from '../assets/icons/dependent.svg'
import law from '../assets/icons/law.svg'
interface PackageListItemProps{
    pack:packageSummary
}

export default function PackageListItem({pack}:PackageListItemProps){
    const renderedKeywords = (pack.keywords || []).map((keyword)=>{
        return <div key={keyword} className="border-0.1 py-1.5 m-0.5 px-1 text-xs bg-slate-100 rounded">
                {keyword}
        </div>
    })
    return(
        <div className="border p-4 rounded flex flex-col sm:flex-row justify-between gap-x-4 gap-y-2 m-2 w-full">
            <div className="flex flex-col gap-2 flex-1">
                    <Link to={`/packages/${pack.name}`} className="text-xl font-bold break-words ">
                            {pack.name}
                    </Link>
                    <p className="text-sm text-gray-500 break-words">
                        {pack.description}
                    </p>
                    <div className="flex gap-1 flex-wrap">
                        {renderedKeywords}
                    </div>
                    <div className="flex gap-1 flex-wrap">
                        <span>
                        {pack.username}
                        </span>
                          •
                          <span className="flex gap-1 flex-wrap ">
                          {pack.version}
                          •
                        <img src={dependent}  alt="dependent" />
                            {pack.dependents} dependents
                            •
                        <img src={law} alt="license" className="w-5 h-5"/>
                            {pack.license}
                        </span>
                    </div>
                    
            </div>
            <div className="sm:ml-6 mt-4 sm:mt-0">
                <Link to={`/packages/${pack.name}`} className="py-2 px-3 rounded bg-black text-white text-sm sm:text-base whitespace-nowrap">
                    View
                </Link>

            </div>
        </div>
    )
}