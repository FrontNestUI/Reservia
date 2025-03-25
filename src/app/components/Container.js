'use client'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { listings } from "./Api/api";
import Card from "./Card";
import { faFire } from "@fortawesome/free-solid-svg-icons";

export default function Container({title, category, isPopular, id}){
    console.log(id);
    
    const filteredData = listings.filter(item => item.most_Popular === isPopular && item.category === category)

    return(<div id={id} className="space-y-5 mb-15 min-h-[300px]">
        <div className={`${isPopular === true ? "flex justify-between" : ""} `}>
            <h2 className="text-2xl">{title}</h2>
            <p  className={`${isPopular === true ? "block" : "hidden"} `} ><FontAwesomeIcon icon={faFire} size="xl"/></p>
        </div>
        
        <div className={`md:flex ${isPopular === true ? "md:flex-col" : "md:flex-wrap"}`}>
            {filteredData.map((item,index) => {
                return <Card key={index} prop={item} catg={category} isPopular={isPopular}/>
            })}
        </div>
        
    </div>)
}
//{`space-y-5 mb-15 min-h-[300px] ${(isPopular === false && category === "hebergement") ? "": "md:order-1"}`}