
import { Navigate, Route, Routes } from 'react-router-dom';

import { AuthRoutes } from '../auth/routes/AuthRoutes';
import { JournalRoutes } from '../journal/routes/JournalRoutes';
import { CheckingAuth } from '../ui/components';
import { useCheckAuth } from '../hooks/useCheckAuth';

export const AppRouter = () => {

    const status = useCheckAuth();
    

    if(status == 'checking') return <CheckingAuth/>

    return (
        <Routes>

            {
                (status == 'authenticated') 
                ? <Route path='/*' element={<JournalRoutes/>} ></Route>
                : <Route path='/auth/*'  element={<AuthRoutes/>}></Route>

            }
            
            <Route path='/*'  element={<Navigate to={'/auth/login'}/>}></Route> 


            {/* login y registro */}
            {/* <Route path='/auth/*'  element={<AuthRoutes/>}></Route> */}

            {/* journalApp */}
            {/* <Route path='/*' element={<JournalRoutes/>} ></Route> */}

        </Routes>
    )
}
