import { Li } from "./Li"

export const SubNav = () => {
    return (
        <ul className=" absolute p-2 right-0 top-11 rounded bg-white border-2  w-44 flex flex-col gap-y-2">

            <li className="p-2">David grajales</li>
            
            <hr />
            
            <Li> Logout </Li>
            <Li> Eliminar cuenta </Li>
            
            <hr className=" block md:hidden" />
            
            <Li addClass={'md:hidden'}>
                <a href="#"> Mis apuntes </a> 
            </Li>
            
            <Li addClass={'md:hidden'}>
                <a href="#"> Crear apunte </a>
            </Li>

        </ul>
    )
}
