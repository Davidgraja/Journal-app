import { JournalRoutes } from "../Journal/router/JournalRoutes"
import { AuthRouter } from "../auth/router/AuthRouter"
import { useCheckAuth } from "../hooks/useCheckAuth"

export const AppRouter = () => {
    const status = useCheckAuth()
    return (
        <>
            {
                status == 'checking' ? <div className="w-full h-full flex justify-center items-center">Verificando sus credenciales...</div> :
                status != 'authenticated'? <AuthRouter/> : <JournalRoutes/>
            }
        </>
    )
}
