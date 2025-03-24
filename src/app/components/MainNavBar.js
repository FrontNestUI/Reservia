import Image from "next/image"
import Link from "next/link"

export default function MainNavBar(){
    return(<nav className="w-full flex justify-between px-10 py-5">
        <div className="w-1/2">
            <Image className="hidden md:block w-32 cursor-pointer "  src="/images/logo/Reservia.webp" width={385} height={180} alt="logo"/>
            <Image className="md:hidden w-28 cursor-pointer "  src="/images/logo/Reservia.webp" width={385} height={180} alt="logo"/>
        </div>
       
        <Link className="text-xl text-blue-600 font-semibold p-3 cursor-pointer " href={'/'}>S&apos;inscrire</Link>
    </nav>)
}