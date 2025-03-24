'use client'
import { useState } from "react";

export default function NavCatg(){
    const [active, setActive] = useState(null);
    const categories = [{title:'Hébergements', id:'hebergements'}, {title:'Activités', id:'activites'}]
 
    return(<div className="display flex justify-between mt-5 mb-10 cursor-pointer ">
        {categories.map((category, index) => {
    return <a key={index} href={`#${category.id}`} onClick={()=>setActive(index)} className={`text-base text-center w-1/2 ${active === index? 'border-b-2 border-blue-600 text-blue-600':'border-b-none text-gray-300'}`}>{category.title}</a>
        })}
    </div>)
}