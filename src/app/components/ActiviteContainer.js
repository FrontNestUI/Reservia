import ActiviteCard from "./ActiviteCard";
import { activiteListings } from "./Api/api";

export default function ActiviteContainer(){

    return (<div className="flex md:flex-row flex-col gap-4 w-full md:h-[800px] p-4">
            <ActiviteCard prop={activiteListings[0]} size={'big'} style="md:w-1/4 w-full h-full rounded-lg shadow-lg"/>

            <div className="flex flex-col  md:w-1/4 w-full">
                <ActiviteCard prop={activiteListings[1]} size={'small'} style="w-full md:h-1/2 h-full  md:mb-1 rounded-lg shadow-lg"/>
                <ActiviteCard prop={activiteListings[2]} size={'small'} style="w-full md:h-1/2 h-full  rounded-lg shadow-lg"/>
            </div>

            <ActiviteCard prop={activiteListings[3]} size={'big'} style=" md:w-1/4 w-full h-full rounded-lg shadow-lg"/>

            <div className="flex flex-col  md:w-1/4 w-full">
                <ActiviteCard prop={activiteListings[4]} size={'small'} style="w-full md:h-1/2 h-full md:mb-1  rounded-lg shadow-lg"/>
                <ActiviteCard prop={activiteListings[5]} size={'small'} style="w-full md:h-1/2 h-full rounded-lg shadow-lg"/>
            </div>

    </div>)
}
