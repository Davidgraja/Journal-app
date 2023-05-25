import { useSelector } from "react-redux"
import { JournalRoutes } from "../Journal/router/JournalRoutes"
import { AuthRouter } from "../auth/router/AuthRouter"

export const AppRouter = () => {
    const {status} = useSelector(state => state.auth  )

    // if(status == 'checking'){
    //     return <p> app en checking</p>
    // }
    return (
        <>
            {
                status != 'authenticated'? <AuthRouter/> : <JournalRoutes/>
            }
        </>
    )
}
