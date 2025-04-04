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

    return(<div className="justify-between w-full pb-15 space-y-5 mt-10 ">
        <div className="md:flex space-x-20">
            <h3 className="text-xl">Filters</h3>
            <div className="flex flex-wrap md:space-x-10">
                {tags.map((tag , index) => {
                    return <TagCard key={index} prop={tag}/>
                })}
            </div>
        </div>
        <div className="flex items-center">
            <FontAwesomeIcon className="text-blue-600 text-lg border-1 border-gray-500 py-1 px-2 mr-3  rounded-2xl" icon={faInfo}/>
            <p>Plus de 500 logements sont disponibles dans cette ville</p>
        </div>
    </div>)
}