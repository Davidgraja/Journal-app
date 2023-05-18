export const Navbar = () => {

    return (
        <header>
            <nav className=" h-20 flex justify-between items-center px-5  border-b-2">
                <div className="hidden md:flex gap-x-4 items-center">
                    <a href="" className=" px-1 sm:leading-none md:leading-[80px] hover:border-b-2 hover:border-indigo-600">Mis notas</a>
                    <a href="" className="px-1 sm:leading-none md:leading-[80px] hover:border-b-2 hover:border-indigo-600"> Crear nota</a>
                </div>

                <ul className="flex gap-x-4">
                    <li>nombre</li>
                    <li>imagen</li>
                </ul>
            </nav>
        </header>
    )

}
