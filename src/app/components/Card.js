import Image from "next/image"
import Rating from "./Rating";

export default function Card({prop}){

    return(<div className="border-2 border-black rounded-lg">
        <div className="w-full h-40 aspect-square overflow-hidden">
         <Image className="object-cover w-full h-full" src={prop.img} alt="photo" width={500} height={500}/>
        </div>
        <div className="p-4">
            <h3 className="text-lg">{prop.title}</h3>  
            <p>Nuit à partir de {prop.price} {prop.currency}</p>
            <Rating prop={prop.rating} />
        </div>
       
    </div>)
}