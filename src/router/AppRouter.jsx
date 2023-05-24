import { JournalRoutes } from "../Journal/router/JournalRoutes"
import { AuthRouter } from "../auth/router/AuthRouter"

export const AppRouter = () => {
    const prueba = true;
    return (
        <>
            {
                prueba  ? <AuthRouter/> : <JournalRoutes/>
            }
        </>
    )
}
