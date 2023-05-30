import { useDispatch, useSelector } from "react-redux";
import { NoNotes } from "../components/views/NoNotes"
import { useEffect } from "react";
import { startLoadingNotes } from "../../store/journal/thunks";
import { NotesList } from "./NotesList";

export const Notes = () => {
    //* Redux 
    const { notes } = useSelector( state => state.journal)
    const dispatch = useDispatch();

    //* Hooks 
    useEffect(() => {
        dispatch( startLoadingNotes());
    }, [])
    
    return (
        <>      
            {
                notes.length > 0  ? <NotesList/> : <NoNotes/>
            }
            
        </>

    )
}
