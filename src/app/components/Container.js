'use client'
import { listings } from "./Api/api";
import Card from "./Card";

export default function Container({title, category, isPopular, id}){
    console.log(id);
    
    const filteredData = listings.filter(item => item.most_Popular === isPopular && item.category === category)

    return(<div id={id} className="space-y-5 mb-15 min-h-[300px]" >
        <h2 className="text-2xl">{title}</h2>
        {filteredData.map((item,index) => {
            return <Card key={index} prop={item} catg={category}/>
        })}
    </div>)
}