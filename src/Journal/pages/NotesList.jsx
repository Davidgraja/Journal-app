import { useSelector } from "react-redux";
import { NoteCard } from "../components/NoteCard"

export const NotesList = () => {

    const {notes} = useSelector( state => state.journal );
    
    return (
        <section className=" p-2 w-full justify-center grid grid-cols-noteList md:justify-evenly gap-y-4 ">

            {
                notes.map( note => <NoteCard key={note.id} {...note}/>)
            }
            
        </section>
    )
}
