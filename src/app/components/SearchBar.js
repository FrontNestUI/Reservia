'use client'
import { faLocationDot, faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function SearchBar(){
    function handleSearch(value){
        console.log(value);
    }

    return(<div className="flex w-full h-11 justify-between border-2 border-gray-500 rounded-2xl mt-5">
        <FontAwesomeIcon className="text-xl py-2 px-3 w-1/8" icon={faLocationDot}/>
        <input onChange={(e) => handleSearch(e.target.value)} value="Marseille, France" className="text-lg text-left font-semibold w-3/4 pl-1 focus:outline-none focus:ring-0 focus:border-transparent" placeholder="enter city"/>
        <button aria-label="search_button" title="search" className="bg-blue-600 py-2 px-3 rounded-xl w-1/8 cursor-pointer "><FontAwesomeIcon style={'font-size: 1em'} size="lg" className="text-white" icon={faMagnifyingGlass}/></button>
    </div>)
}