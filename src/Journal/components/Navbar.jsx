import { useState } from "react"
import { SubNav } from "./SubNav"
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import { IconUserCircle } from '@tabler/icons-react';

export const Navbar = () => {
    // Redux
    const {photoURL} = useSelector( state => state.auth );
    const {message} = useSelector( state => state.journal );
    const [showSubNavbar, setShowSubNavbar] = useState(false);

    return (
        <header className="relative">

            <nav className=" h-20 flex justify-end items-center px-5  border-b-2 md:justify-between">

                {
                    message &&  <p className="bg-green-400 text-white rounded absolute  left-3 p-2 m-2 md:left-1/2" > {message}</p>
                }
                
                <div className="hidden md:flex gap-x-4 items-center">
                    <Link to={'/'} className=" px-1 sm:leading-none md:leading-[80px] hover:border-b hover:border-b-indigo-600">Mis apuntes</Link>
                    <Link to={'/addNote'} className="px-1 sm:leading-none md:leading-[80px] hover:border-b hover:border-b-indigo-600"> Crear apunte</Link>
                </div>

                <div className="flex gap-x-4 relative">

                    <span className=" w-12 hover:cursor-pointer" onClick={ ()=> setShowSubNavbar( !showSubNavbar ) }>
                        {
                            photoURL ? 
                            <img className="rounded"  src={photoURL} alt=" imagen de google "  width={'100%'} height={'100%'}/> 
                            :
                            <IconUserCircle className="text-gray-400 rounded" stroke={2} size={40} />
                        }
                    </span>

                    {
                        showSubNavbar && <SubNav/> 
                    }
                </div>
            </nav>
        </header>
    )

}
