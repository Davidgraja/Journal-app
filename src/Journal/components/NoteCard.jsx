import { useDispatch } from "react-redux"
import { setActiveNote } from "../../store/journal";
import { useNavigate } from "react-router-dom";

export const NoteCard = ({...note}) => {
    const navigate = useNavigate()
    const dispatch = useDispatch();
    
    const onActiveNote = () =>{
        dispatch(setActiveNote(note))
        navigate('/addNote');
    }

    return (
        <article className=" border shadow-md rounded-md" >
                <h2 className="p-2  text-lg">{note.title}</h2>
                <p className="p-2">{note.date}</p>
                <div className=" border-t  border-indigo-300  flex justify-between ">
                    <button className=" text-red-500 w-full p-2 border-r   border-indigo-300 rounded-bl-[3px] hover:bg-red-400 hover:text-white">Eliminar</button>
                    <button className=" text-blue-500 w-full p-2 border-l  border-indigo-300  hover:bg-blue-400 rounded-br-[3px] hover:text-white" onClick={onActiveNote}>Ver mas</button>
                </div>
        </article>
    
    )
}
