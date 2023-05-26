import { useDispatch } from "react-redux"
import { startLogout } from "../../store/auth/thunks"
import { Li } from "./Li"
import { Link } from "react-router-dom"

export const SubNav = () => {
    const dispatch = useDispatch()
    return (
        <ul className=" absolute p-2 right-0 top-11 rounded bg-white border-2  w-44 flex flex-col gap-y-2">

            <li className="p-2">David grajales</li>
            
            <hr />
            
            <Li eventClick={()=> dispatch(startLogout())}> Logout </Li>
            <Li> Eliminar cuenta </Li>
            
            <hr className=" block md:hidden" />
            
            <Li addClass={'md:hidden'}>
                <Link to='/' > Mis puntes </Link> 
            </Li>
            
            <Li addClass={'md:hidden'}>
                <Link to="addNote" > Crear apunte </Link>
            </Li>

        </ul>
    )
}
