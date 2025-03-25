'use client'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

export default function TagCard({prop}){
    const [isSelected, setIsSelected] = useState(false)

    useEffect(() => {  

        if(JSON.parse(localStorage.getItem('selectedTags'))){
            let arrayTags = JSON.parse(localStorage.getItem('selectedTags'))
            const filterArray =arrayTags.find((item) => {return item === prop.title})  
            if(filterArray){
                setIsSelected(true)
            }else{
                setIsSelected(false)
            } 
        }else {
            localStorage.setItem('selectedTags', JSON.stringify([]))
        }
        
        
    },[prop.title, isSelected])

    function addTagToArray(tag) {
        let array = JSON.parse(localStorage.getItem('selectedTags'))
        const filterArray = array.find(item => {return item === tag})
        
        
        if(!filterArray) {
            array.push(tag)
            setIsSelected(true)
            
        }else{
            array = array.filter(item => item !== tag);
            setIsSelected(false)
        }   

        localStorage.setItem('selectedTags', JSON.stringify(array))
    }



    return(<div onClick={() => addTagToArray(prop.title)} className={`flex shadow-md h-11 mb-3 items-center text-black font-semibold rounded-4xl cursor-pointer  ${isSelected === true ? 'bg-gray-200 ' : 'bg-white'}`}>
        <FontAwesomeIcon 
            className={`text-blue-500 text-lg bg-blue-100 rounded-3xl mr-1 ${(prop.icon.iconName === 'child-reaching' ? 'px-3.5 py-3' : 'p-3')}`} 
            icon={prop.icon} 
        />

        <p className="mr-3 ml-2">{prop.title}</p>
    </div>)
}