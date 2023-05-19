import { useState } from "react"
import { SubNav } from "./SubNav"

export const Navbar = () => {
    
    const [showSubNavbar, setShowSubNavbar] = useState(false);

    return (
        <header>
            <nav className=" h-20 flex justify-end items-center px-5  border-b-2 md:justify-between">
                <div className="hidden md:flex gap-x-4 items-center">
                    <a href="" className=" px-1 sm:leading-none md:leading-[80px] hover:border-b hover:border-b-indigo-600">Mis apuntes</a>
                    <a href="" className="px-1 sm:leading-none md:leading-[80px] hover:border-b hover:border-b-indigo-600"> Crear apunte</a>
                </div>

                <div className="flex gap-x-4 relative">

                    <span className=" w-16 hover:cursor-pointer" onClick={ ()=> setShowSubNavbar( !showSubNavbar ) }>
                        <img  src="https://cdn.dribbble.com/users/2522374/screenshots/7911727/google-logo.png" alt=" imagen de google"  width={'100%'}height={'100%'}/>
                    </span>

                    {
                        showSubNavbar && <SubNav/> 
                    }
                </div>
            </nav>
        </header>
    )

}
