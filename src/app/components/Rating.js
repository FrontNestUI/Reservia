'use client'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as faRegularStar } from "@fortawesome/free-regular-svg-icons";


export default function Rating({prop}){
    const emptyStars = [...Array(5-prop)]
    return(<div className="display flex inline-flex w-auto h-auto mt-6">
        {([...Array(prop)]).map((star, index) => {
            return <FontAwesomeIcon key={index} icon={faStar} className="text-lg w-6 h-6"/>
        })}
        {
           emptyStars.map((star, index) => {
            return <FontAwesomeIcon key={index} icon={faRegularStar} className="text-lg w-6 h-6"/>
        }) 
        }
    </div>)

}
