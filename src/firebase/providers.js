import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
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