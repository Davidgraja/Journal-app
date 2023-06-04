import { Navigate, Route, Routes } from "react-router-dom"
import { Journal } from "../pages/Journal"
import { AddNotes } from "../pages/AddNotes"

export const JournalRoutes = () => {

    return (
        
        <Routes>
            <Route path="/" element={ <Journal/> } ></Route>
            <Route path="/addNote" element={ <AddNotes/>} ></Route>
            
            <Route path="/*" element={<Navigate to={'/'}/>} ></Route>
        </Routes>
    )
}
