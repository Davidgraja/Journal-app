import { FirebaseDB } from "../../firebase/config";
import { addNewEmptyNote, savingNewNote, updateMessageSave } from "./journalSlice";
import {doc ,  collection , setDoc} from 'firebase/firestore/lite'

export const startNewNote = ({ title , body , imagesUrl , date}) =>{
    
    return async (dispatch , getState) =>{

        //* redux
        dispatch(savingNewNote());

        const { uid } = getState().auth;

        //* hooks
        

        //?  body of the Note
        const newNote = {
            title ,
            body ,
            imagesUrl ,
            date 
        }
        
        
        // punto en el cual quiero insertar mi nota , dentro  la coleción , añadimos la configuacion de la base de datos y la ruta de donde quiro que se almacene tal informacion
        
        //? hacemos referencia al documento , junto a su funcion de colletion( firebaseDb , path )
        const refDoc = doc( collection(FirebaseDB , `Journal-app/${uid}/notes`));
        
        //? insertando la nota
        await  setDoc(refDoc , newNote);

        //? añadiendo id a a la nota creada  
        newNote.id = refDoc.id;

        
        dispatch(addNewEmptyNote(newNote));
        dispatch(updateMessageSave('Apunte añadido con exito'));
    }
}