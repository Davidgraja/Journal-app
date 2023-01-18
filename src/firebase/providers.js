
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, updateProfile } from "firebase/auth";
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

        let errorMessage; 
        
        if(error.message.includes('auth/popup-closed-by-user')) errorMessage = 'Se ha cancelado la autenticación con Google'
        else errorMessage = 'Lo sentimos a ocurrido un error , intentelo mas tarde'
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
        if(error.message.includes('auth/email-already-in-use')) return { ok : false , errorMessage : 'El correo ingresado ya se encuentra en uso'}
        return { ok : false , errorMessage : error.message}
    }
}


export const loginWithEmailAndPassword = async ({email , password}) =>{

    try {
        const response  = await  signInWithEmailAndPassword( FirebaseAuth , email , password)
        
        const { uid , displayName , photoURL } = response.user;

        return {
            ok : true,
            uid , displayName , email , photoURL
        }
    }
    catch (error) {

        let errorMessage ; 

        if(error.message.includes('auth/wrong-password')) errorMessage = 'La contraseña ingresada no ha sido encontrada , por favor veriquela'
        else if (error.message.includes('auth/user-not-found')) errorMessage = 'El correo  ingresado no ha sido encontrado, por favor verifiquelo'
        else errorMessage = error.message

        return {
            ok: false ,
            errorMessage 
        }

    }

}