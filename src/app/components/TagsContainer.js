import { faChildReaching, faDog, faHeart, faIcicles, faInfo, faMoneyBill1Wave } from "@fortawesome/free-solid-svg-icons";
import TagCard from "./tagCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function TagsContainer(){
 
    const tags = [
        {
            icon: faMoneyBill1Wave,
            title: "Économique"
        },
        {
            icon: faChildReaching,
            title: "Familial"
        },
        {
            icon: faHeart,
            title: "Romantique"
        },
        {
            icon: faDog,
            title: "Animaux domestique"
        }
    ]

    return(<div className="justify-between w-full pb-15 space-y-5 mt-10">
        <h3 className="text-xl">Filters</h3>
        <div className="flex flex-wrap ">
            {tags.map((tag , index) => {
                return <TagCard key={index} prop={tag}/>
            })}
        </div>
        <span className="w-full h-11 min-h[20px]"><FontAwesomeIcon className="text-blue-600 text-lg border-1 border-gray-500 py-1 px-2 rounded-xl" icon={faInfo}/>Plus de 500 logements sont disponibles dans cette ville</span>
    </div>)
}