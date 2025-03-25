import { footer } from "./Api/api"

export default function Footer(){
    
    return (<footer className="my-20 px-10 md:flex md:justify-between">
        {footer.map((element, index) =>{
            return <div className="mb-5" key={index}>
                <h4 className="text-xl font-semibold py-5">{element.title}</h4>
                <ul className="text-base space-y-2">
                    {element.links.map((link, index) => {
                        return <li key={index}>{link}</li>
                    })}
                </ul>
            </div>
        })}
    </footer>)
}