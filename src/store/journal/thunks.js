import { collection, doc, setDoc } from "firebase/firestore/lite";
import { FirebaseDB } from "../../firebase/config";
import { loadNotes } from "../../helpers";
import { addNewEmptyNote, savingNewNote, setActiveNote, setNotes, setSaving, updateNote } from "./journalSlice";

export const startNewNote = () =>{

    return async (dispatch , getState) =>{

        dispatch(savingNewNote());

        const { uid } =getState().auth;


        //?  body of the Note
        const newNote = {
            title : '',
            body : '',
            date : new Date().getTime()
        }
        
        
        // punto en el cual quiero insertar mi nota , dentro  la coleción , añadimos la configuacion de la base de datos y la ruta de     donde quiro que se almacene tal informacion
        // hacemos referencia al documento , junto a su funcion de colletion( firebaseDb , path )
        
        const newDoc = doc( collection(FirebaseDB , `Journal-app/${uid}/notes`));

        // insertar la nota
        await  setDoc(newDoc , newNote);

        newNote.id = newDoc.id;

        //? dispatchs
        dispatch(addNewEmptyNote(newNote));
        dispatch(setActiveNote(newNote));
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

export const startSaveNote = () =>{
    return async ( dispatch , getState )=>{
        dispatch(setSaving())

        const {uid} = getState().auth; 
        const {active : activeNote} = getState().journal;

        const noteToFirestore = { ...activeNote };
        delete noteToFirestore.id;

        const docRef = doc( FirebaseDB ,`Journal-app/${ uid }/notes/${ activeNote.id }`);
        await setDoc(docRef , noteToFirestore , { merge : true } );

        dispatch( updateNote(activeNote) );
    }
}