'use client'
import { faChildReaching, faDog, faHeart, faMoneyBill1Wave } from "@fortawesome/free-solid-svg-icons";
import TagCard from "./tagCard";
import { useEffect, useState } from "react";

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

    return(<div className="flex flex-wrap justify-between w-full">
        {tags.map((tag , index) => {
            return <TagCard key={index} prop={tag}/>
        })}
        <button>Submit</button>
        
    </div>)
}