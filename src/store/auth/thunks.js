import { loginWithEmailAndPassword, registerUserWithEmailPassword, singInWidthGoogle } from "../../firebase/providers"
import { checkingCredentials, login, logout } from "./authSlice"

export const checkingAuthentication = (email , password) =>{
    
    return async (dispatch) => {

        dispatch(checkingCredentials());

    }
}

export const startGoogleSingIn = () =>{
    
    return async (dispatch) =>{
        dispatch(checkingCredentials());

        const result =  await singInWidthGoogle();

        if(!result.ok) return dispatch(logout( result));

        dispatch(login( result ));
    }
}

export const startCreatingUserEmailPassword = ({email , password , displayName}) =>{

    return async (dispatch) => {

        dispatch(checkingCredentials());

        const result = await registerUserWithEmailPassword({email , password , displayName});
        
        if( !result.ok ) return dispatch( logout(result));

        dispatch(login(result));

    }

}

export const startLoginWithEmailAndPassword = ({email , password}) =>{
    
    return async (dispatch) => {

        dispatch(checkingCredentials());

        const result  = await  loginWithEmailAndPassword({email , password});

        if( !result.ok ) return dispatch(logout( result ));

        dispatch(login( result ));

    }
}