import { logoutFirebase, registerUserWithEmailPassword, singInWidthEmailAndPassword, singInWidthGoogle } from "../../firebase/providers";
import { checkingCredentials, login, logout } from "./authSlice";

/**  
 *  funcion que inicia la authenticacion con google
 */
export const startGoogleSingIn = () =>{
    
    return async (dispatch) =>{
        
        dispatch(checkingCredentials());

        const result =  await singInWidthGoogle();
        if(!result.ok) return dispatch(logout( result));
        dispatch(login( result ));
    
    }

}


/**  
 *  funcion que inicia la authenticación  email y password
 */
export const startCreatingUserEmailAndPasword = ({email , password , name}) => {
    return async (dispatch) =>{
        
        dispatch(checkingCredentials());

        const result = await registerUserWithEmailPassword({email , password ,name});
        if(!result.ok) return dispatch(logout(result));
        
        dispatch(login(result));

    }
}

export const startEmailAndPasswordSingIn = ({email , password}) => {
    return async ( dispatch ) => {
        dispatch(checkingCredentials());

        const result = await singInWidthEmailAndPassword({email , password});
        if(!result.ok) return dispatch(logout(result));
        
        dispatch(login(result))
    }
}

export const startLogout = () => {
    return async ( dispatch ) => {
        
        await logoutFirebase();
        dispatch( logout())


    }
}