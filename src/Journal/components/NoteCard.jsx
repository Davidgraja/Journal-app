
export const NoteCard = ({date , title}) => {
    return (
        <article className=" border shadow-md rounded-md" >
                <h2 className="p-2  text-lg">{title}</h2>
                <p className="p-2">{date}</p>
                <div className=" border-t  border-indigo-300  flex justify-between ">
                    <button className=" text-red-500 w-full p-2 border-r   border-indigo-300 rounded-bl-[3px] hover:bg-red-400 hover:text-white">Eliminar</button>
                    <button className=" text-blue-500 w-full p-2 border-l  border-indigo-300  hover:bg-blue-400 rounded-br-[3px] hover:text-white">Ver mas</button>
                </div>
        </article>
    
    )
}
