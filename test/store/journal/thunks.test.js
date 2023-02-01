import { async } from "@firebase/util";
import { collection, deleteDoc, doc, getDocs } from "firebase/firestore/lite";
import { FirebaseDB } from "../../../src/firebase/config";
import { loadNotes } from "../../../src/helpers/loadNotes";

import { addNewEmptyNote, savingNewNote, setActiveNote, setNotes } from "../../../src/store/journal/journalSlice";
import { startLoadingNotes, startNewNote } from "../../../src/store/journal/thunks";

jest.mock("../../../src/helpers/loadNotes")

describe('pruebas sobre journal thunks', () => { 


    const dispatch = jest.fn();
    const getState = jest.fn();
    const uid = 'TEST-UID'
    beforeEach ( ()=> jest.clearAllMocks());

    test('startNewNote debe de crear una nueva nota en blanco', async () => { 


        getState.mockReturnValue({auth: { uid }});
        
        await  startNewNote()(dispatch , getState);
    
        expect(dispatch).toHaveBeenCalledWith(savingNewNote());
        expect(dispatch).toHaveBeenCalledWith(addNewEmptyNote({
            title : '',
            body : '',
            imageUrl : expect.any(Array) ,
            date : expect.any(Number),
            id : expect.any(String)
        }))
        
        expect(dispatch).toHaveBeenCalledWith(setActiveNote({
            title : '',
            body : '',
            imageUrl : expect.any(Array) ,
            date : expect.any(Number),
            id : expect.any(String)
        }))
        
        // Borrar de firebase

        const collectionRef =  collection(FirebaseDB , `Journal-app/${uid}/notes`)
        const docs = await getDocs(collectionRef)

        const deletePromises = [];
        docs.forEach( doc =>  deletePromises.push(deleteDoc(doc.ref)) );

        await Promise.all(deletePromises);

    })

    test('startLoadingNotes debe de cargar las notas creadas anteriormente por el usuario', async () => {

        const notesTest = [{id:'123' , title:'nota 1' , body:'cuerpo de la nota1'} , {id:'456' , title:'nota 2' , body:'cuerpo de la nota 2'}]
        getState.mockReturnValue({auth: { uid }});

        await loadNotes.mockReturnValue(notesTest)
        await startLoadingNotes()(dispatch , getState);

        expect(dispatch).toHaveBeenCalledWith(setNotes(notesTest));


    })

    const prueba =  () =>{
            //  await startLoadingNotes()(dispatch , getState)
            throw new Error('el uid del usuario no existe')
        
    }

    test('startLoadingNotes debe de retornar un error si no se encuentra el uid del usuario' , async ()=>{
        getState.mockReturnValue({auth: { }});
        await expect( startLoadingNotes()(dispatch , getState)).rejects.toThrow()
    })
})
