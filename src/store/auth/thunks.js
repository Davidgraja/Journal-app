import { registerUserWithEmailPassword, singInWidthGoogle } from "../../firebase/providers"
import { checkingCredentials, login, logout } from "./authSlice"

export const checkingAuthentication = (email , password) =>{
    
    return async (dispatch) => {

        dispatch(checkingCredentials())

    }
}

export const startGoogleSingIn = () =>{
    
    return async (dispatch) =>{
        dispatch(checkingCredentials());

        const result =  await singInWidthGoogle();

        if(!result.ok) return dispatch(logout({errorMessage}));

        dispatch(login( result ));
    }
}

export const startCreatingUserEmailPassword = ({email , password , displayName}) =>{

    return async (dispatch) => {
        dispatch(checkingCredentials());

        const {ok , uid , photoURL , errorMessage}= await registerUserWithEmailPassword({email , password , displayName});
        
        if( !ok ) return dispatch( logout({errorMessage}));

        dispatch(login({uid , photoURL , email , displayName}))

    }

}