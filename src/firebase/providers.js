
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, updateProfile } from "firebase/auth";
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


export const registerUserWithEmailPassword = async ({email , password , displayName}) =>{
    try {   

        console.log({email , password , displayName});
        
        const response = await createUserWithEmailAndPassword(FirebaseAuth ,  email ,  password);
        const {uid , photoURL} = response.user;

        //TODO : Actualizar el displayName Firebase

         await updateProfile(FirebaseAuth.currentUser , { displayName }) // forma de saber  cual es el usuario actual cuando se autentica un usuario usando Firebase
        
        return {
            ok : true ,
            uid , photoURL , email , displayName

        }

    } catch (error) {
        if(error.message.includes('auth/email-already-in-use')) return { ok : false , errorMessage : 'El correo enviado ya se encuentra en uso'}
        return { ok : false , errorMessage : error.message}
    }
}