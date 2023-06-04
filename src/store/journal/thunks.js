import { FirebaseDB } from "../../firebase/config";
import { deletePhoto } from "../../helpers/deletePhoto";
import { fileUpload } from "../../helpers/fileUpload";
import { loadNotes } from "../../helpers/loadNotes";
import { addNewEmptyNote, deleteNoteById, savingNewNote, setActiveNote, setNotes, setPhotosToActiveNote, updateMessageSave, updateNote } from "./journalSlice";
import {doc ,  collection , setDoc, deleteDoc} from 'firebase/firestore/lite'

export const startNewNote = () =>{
    
    return async (dispatch , getState) =>{

        //* redux
        dispatch(savingNewNote());

        const { uid } = getState().auth;
        const { active : activeNote } = getState().journal;

        //* hooks
        
        //?  body of the Note
        const newNote = {...activeNote}

        // punto en el cual quiero insertar mi nota , dentro  la coleción , añadimos la configuacion de la base de datos y la ruta de donde quiro que se almacene tal informacion
        
        //? hacemos referencia al documento , junto a su funcion de colletion( firebaseDb , path )
        const refDoc = doc( collection(FirebaseDB , `Journal-app/${uid}/notes`));
        
        //? insertando la nota
        await  setDoc(refDoc , newNote);

        //? añadiendo id a a la nota creada  
        newNote.id = refDoc.id;

        dispatch(setActiveNote(newNote));
        dispatch(addNewEmptyNote(newNote));
        
    }
}

export const startUploadingFiles = ( files = [] ) =>{
    return async (dispatch) =>{        
        const filesUploadPromises = [];
        for (const file of files) {
            filesUploadPromises.push(fileUpload(file));
        }
        
        const photosUrl =  await Promise.all(filesUploadPromises);
        dispatch( setPhotosToActiveNote(photosUrl) );
    }
}

export const startUpdateNote = () => {
    return async ( dispatch , getState ) => {
        dispatch(savingNewNote());

        const { uid } = getState().auth;
        const { active : activeNote } = getState().journal;

        const noteToFireStore = { ...activeNote };
        delete noteToFireStore.id;

        const refDoc = doc(FirebaseDB,`Journal-app/${ uid }/notes/${ activeNote.id }`)
        await setDoc(refDoc,noteToFireStore,{merge:true});

        dispatch(updateNote(activeNote))
    }
}

export const startLoadingNotes = () =>{

    return async (dispatch , getState) =>{

        const {uid} = getState().auth;
        if(!uid) throw new Error('el uid del usuario no existe');
        
        const notes =  await  loadNotes(uid)
        dispatch(setNotes(notes));

    }

}


export const startDeletingNote = () =>{
    return async ( dispatch , getState ) =>{
        const {uid} = getState().auth;
        const {active : activeNote} = getState().journal;

        const notesIds = [];
        activeNote.imageUrl.forEach( img => {
            const separator  = img.split('/');
            const  indexId = separator[separator.length - 1].split('.'); 
            const id = indexId[0];
            notesIds.push(deletePhoto(id))
        })

        await Promise.all(notesIds)

        const docRef = doc(FirebaseDB , `/Journal-app/${uid}/notes/${activeNote.id}`);
        await deleteDoc(docRef);     

        dispatch(deleteNoteById(activeNote.id));
    }
}

// ? implementar la peticion de eliminacion de la imagen
export const startDeletePhoto = ( id ) =>{
    return async (dispatch) => {    
        const { ok , message} = await  deletePhoto(id);
        
        if(!ok){
            dispatch(updateMessageSave(`Ha ocurrido un error , ${message} `))
        }

        dispatch(updateMessageSave(message))
        
    }
}