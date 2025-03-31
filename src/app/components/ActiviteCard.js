import Image from "next/image"
import Rating from "./Rating";

export default function ActiviteCard({prop, style, size}){
    
    return(<div className={` ${style}`}>
        <div className={`w-full h-3/4 ${size === 'big' ? 'md:h-[88%]':'md:h-3/4'}  aspect-square overflow-hidden `}>
            <Image className={`h-full w-full object-cover border rounded-t-xl `} 
                    src={prop.img} alt="photo" 
                    width={600} 
                    height={200} 
                    quality={75} 
            />
        </div>
        <div className="p-4 flex-1">
            <h3 className="text-lg font-semibold">{prop.title}</h3>  
            <p>Nuit à partir de {prop.price} {prop.currency}</p>
            <Rating  prop={prop.rating}/>
        </div>
       
    </div>)
}