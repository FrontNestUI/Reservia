import { listings } from "./Api/api";
import Card from "./Card";

export default function Container(){

    return(<div id="hebergements" className="display flex flex-col space-y-5">
        <h2>Hébergements a Marseil</h2>
        {listings.map((item,index) => {
            return <Card key={index} prop={item}/>
        })}
    </div>)
}