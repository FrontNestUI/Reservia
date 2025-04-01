import Image from "next/image"
import Rating from "./Rating";

export default function Card({prop, catg, isPopular}){

   console.log(catg, prop);
    
    return(<div className={`hover:shadow-xl hover:border-blue-200 hover:border-3 bg-white mb-10 rounded-2xl shadow-lg cursor-pointer  
                            md:w-75 md:mr-5
                            ${isPopular === true ? "md:flex md:w-80 md:h-40":""}
                            `}
            >
        <div className={`w-full aspect-square overflow-hidden 
                        ${isPopular === true ? "md:w-1/3 md:h-[100%]":""}
                       `}
        >
         <Image className={`h-full w-full object-cover border rounded-t-xl 
                            ${isPopular === true ? "md:rounded-none md:rounded-l-xl":""}
                          `} 
                src={prop.img} alt="photo" 
                width={600} 
                height={200} 
                quality={75} 
                priority={prop.img === '/images/hebergements/hotel_le_soleil.webp' ? true : false}/>
        </div>
        <div className="p-4 flex-1">
            <h3 className="text-lg font-semibold">{prop.title}</h3>  
            <p>Nuit à partir de {prop.price} {prop.currency}</p>
            <Rating  prop={prop.rating}/>
        </div>
       
    </div>)
}