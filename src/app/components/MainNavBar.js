import Image from "next/image"
import Link from "next/link"
export default function MainNavBar(){
    return(<nav className="display flex  justify-between ">
        <div className="md:w-1/2">
            <Image  src="/images/logo/Reservia.png" width={200} height={100} alt="logo" layout="responsive" />
        </div>
       
        <Link className="text-xl text-blue-600 font-semibold p-3" href={'/'}>S'inscrire</Link>
    </nav>)
}