
export const Li = ({children ,addClass}) => {
    return (
        <li className={`${addClass} p-2 hover:bg-indigo-600 rounded hover:text-white hover:cursor-pointer`}>
            {
                children
            }
        </li>
    )
}
