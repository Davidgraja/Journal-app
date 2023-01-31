import { collection, deleteDoc, doc, getDocs } from "firebase/firestore/lite";
import { FirebaseDB } from "../../../src/firebase/config";
import { addNewEmptyNote, savingNewNote, setActiveNote } from "../../../src/store/journal/journalSlice";
import { startNewNote } from "../../../src/store/journal/thunks";

describe('pruebas sobre journal thunks', () => { 

    const dispatch = jest.fn();
    const getState = jest.fn();
    beforeEach ( ()=> jest.clearAllMocks());

    test('startNewNote debe de crear una nueva nota en blanco', async () => { 

        const uid = 'TEST-UID'

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
})
