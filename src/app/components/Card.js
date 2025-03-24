import Image from "next/image"
import Rating from "./Rating";

export default function Card({prop, catg}){

    return(<div className="h-[300px] border-2 border-black hover:border-blue-600 rounded-2xl cursor-pointer">
        <div className="w-full h-35 aspect-square overflow-hidden">
         <Image className="border rounded-t-xl " src={prop.img} alt="photo" width={600} height={200} quality={75} priority={prop.img === '/images/hebergements/hotel_le_soleil.webp' ? true : false}/>
        </div>
        <div className="p-4">
            <h3 className="text-lg font-semibold">{prop.title}</h3>  
            <p className={`${catg === 'activite' ? 'hidden' : 'block'}`}>Nuit à partir de {prop.price} {prop.currency}</p>
            <Rating  prop={prop.rating}/>
        </div>
       
    </div>)
}