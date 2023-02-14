import { deleteUser, getAuth } from "firebase/auth";
import { loginWithEmailAndPassword, logoutFirebase, registerUserWithEmailPassword, singInWidthGoogle } from "../../firebase/providers"
import { firebaseClearDB } from "../../helpers/firebaseClearDB";
import { clearNotes } from "../journal";
import { checkingCredentials, login, logout } from "./authSlice"


deleteUser

export const checkingAuthentication = () =>{
    
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


export const startLogout = () =>{
    return async (dispatch) =>{

        await logoutFirebase();
        dispatch(clearNotes())
        dispatch(logout());

    }
}

export const startDeleteUser =()=>{

    return async (dispatch)=>{
        const auth = getAuth();

        await firebaseClearDB(auth.currentUser.uid);
        await deleteUser(auth.currentUser);
        dispatch(clearNotes());
    }
    
}