import Image from "next/image";
import MainNavBar from "./MainNavBar";
import NavCatg from "./NavCatg";
import Link from "next/link";

export default function DesktopNavBar(){
    return (<nav className="flex justify-between items-center mx-10">
            <Image className="hidden md:block w-32 cursor-pointer "  src="/images/logo/Reservia.webp" width={385} height={180} alt="logo"/>
            <NavCatg/>
           
    </nav>)
}