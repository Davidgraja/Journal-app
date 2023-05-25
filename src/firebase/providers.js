import { GoogleAuthProvider, createUserWithEmailAndPassword, signInWithPopup, updateProfile } from 'firebase/auth'
import { FirebaseAuth } from './config';

const googleProvider = new  GoogleAuthProvider(); 

/**
 * Implementacion  para la autenticación con google
 */
export const singInWidthGoogle = async () =>{

    try {
        
        const result =  await  signInWithPopup(FirebaseAuth , googleProvider);

        //? const credentials =  GoogleAuthProvider.credentialFromResult(result); // obtener credenciales si las llegamos a necesitar 

        const {displayName , email , photoURL , uid} = result.user
        return{
            ok : true,
            displayName , email , photoURL , uid
        }

    } catch (error) {

        let errorMessage; 
        
        if(error.message.includes('auth/popup-closed-by-user')) errorMessage = 'Se ha cancelado la autenticación con Google';
        else errorMessage = 'Lo sentimos a ocurrido un error , intentelo mas tarde';

        return {
            ok : false ,
            errorMessage
        }

    }

}


export const registerUserWithEmailPassword = async ({email , password , name: displayName }) =>{
    try {   
        
        const response = await createUserWithEmailAndPassword(FirebaseAuth ,  email ,  password);
        const {uid , photoURL} = response.user;

        //? : forma de Actualizar el displayName o la photoURL en Firebase

        await updateProfile(FirebaseAuth.currentUser , { displayName }) //? forma de saber  cual es el usuario actual cuando se autentica un usuario usando Firebase
        
        return {
            ok : true ,
            uid , photoURL , email , displayName
        }

    } catch (error) {
        if(error.message.includes('auth/email-already-in-use')) return { ok : false , errorMessage : 'El correo ingresado ya se encuentra en uso'}
        return { ok : false , errorMessage : error.message}
    }
}