import { Navbar } from "../components";
import { Notes } from "./Notes";
// import { AddNotes } from "./AddNotes"

export const Journal = () => {
    return (
        <>
            <Navbar/>
            {/* <AddNotes/> */}
            <Notes/>
        </>
    )
}
