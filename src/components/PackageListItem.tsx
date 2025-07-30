import { Link } from "react-router-dom";
import type { packageSummary } from "../api/types/packageSummary";
import dependent from '../assets/icons/dependent.svg'
import avatar2 from '../assets/images/avatar2.png';
import law from '../assets/icons/law.svg'
import downloads from '../assets/icons/downloads.svg'
interface PackageListItemProps {
    pack: packageSummary
}

export default function PackageListItem({ pack }: PackageListItemProps) {
    
    const renderedKeywords = (pack.keywords || []).map((keyword) => {
        return <div key={keyword} className="border-0.1 py-1.5 m-0.5 px-1 text-xs bg-slate-100 rounded">
            {keyword}
        </div>
    })
    
    return (
        
        <div className="border-b-1 border-gray-300 w-[90%] mx-auto  p-4  flex flex-col sm:flex-row justify-between gap-x-4 gap-y-2 m-2 ">
            <div className="flex flex-col gap-2 flex-1">
                <Link to={`/packages/${pack.name}`} className="text-xl font-medium break-words ">
                    {pack.name}
                </Link>
                <p className="text-sm text-gray-500 break-words">
                    {pack.description}
                </p>
                <div className="flex gap-1 flex-wrap">
                    {renderedKeywords}
                </div>
                <div className="flex flex-wrap items-center gap-2 text-sm text-gray-700">
                <img src={avatar2} alt="dependents" className="w-4 h-4 " />
                    <span className="text-black">{pack.username}</span>
                    <span>•</span>

                    <div className="flex flex-wrap items-center gap-2 px-2 text-gray-500">
                        <span>{pack.version}</span>
                        <span>•</span>

                        <img src={dependent} alt="dependents" className="w-4 h-4 " />
                        <span>{Number(pack.dependents).toLocaleString('en-IN') } dependents</span>
                        <span>•</span>

                        <img src={law} alt="license" className="w-4 h-4" />
                        <span>{pack.license}</span>
                    </div>
                </div>


            </div>
            <div className="sm:ml-6 mt-4 sm:mt-0 sm:flex gap-2  sm:items-center">
                {/* <Link to={`/packages/${pack.name}`} className="py-2 px-3 rounded bg-black text-white text-sm sm:text-base whitespace-nowrap">
                    View
                </Link> */}
                <img src={downloads} alt="downloads"/>
                    {pack.monthly.toLocaleString('en-IN')}

            </div>
        </div>
    )
}