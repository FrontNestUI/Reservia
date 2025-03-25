'use client'
import { useState } from "react";
import Link from "next/link";

export default function NavCatg(){
    const [active, setActive] = useState(null);
    const categories = [{title:'Hébergements', id:'hebergements'}, {title:'Activités', id:'activites'}]
 
    return(<div className="flex justify-between cursor-pointer mb-10">
                <div className="flex">
                {categories.map((category, index) => {
                    return <a 
                            key={index} 
                            href={`#${category.id}`} 
                            onClick={()=>setActive(index)} 
                            className={`text-base text-center w-1/2 mt-9 items-center 
                                ${(active === index && active !== 2 )? 'border-b-2 border-blue-600 text-blue-600 md:border-t-3 md:pt-8 md:mt-0 md:border-b-0':'border-b-none text-gray-[#0a0a0a]'} 
                                md:w-[200px] md:text-xl `}>{category.title}</a>
                 })}

                <Link  onClick={()=>setActive(2)} className="text-xl text-blue-600 font-semibold mt-9 cursor-pointer hidden  md:block  " href={'/'}>S&apos;inscrire</Link>
                </div>
       
    </div>)
}