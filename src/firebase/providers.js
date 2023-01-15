
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { FirebaseAuth } from "./config";


const googleProvider =   new  GoogleAuthProvider ();
export const singInWidthGoogle = async () =>{

    try {
        
        const result =  await  signInWithPopup(FirebaseAuth , googleProvider);
        // const credentials =  GoogleAuthProvider.credentialFromResult(result); // obtener credenciales si las llegamos a necesitar 

        const {displayName , email , photoURL , uid} = result.user

        return{
            ok : true,
            displayName , email , photoURL , uid
        }

    } catch (error) {


        const errorCode = error.code;
        const errorMessage = error.message;
    
        return {
            ok : false ,
            errorMessage

        }
    }

}