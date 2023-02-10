import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { JournalPage } from '../pages/JournalPage'
import {MenuUser} from '../pages/Menu'
import { Notes } from '../views'

export const JournalRoutes = () => {
    return (
        <Routes>
            <Route path='/prueba' element={ <MenuUser/> } />

            <Route path='/' element={ <JournalPage/> } />
            <Route path='/notes' element={ <Notes/> } />

            <Route path='/*' element={ <Navigate to={'/'}/> } />
        </Routes>
    )
}
