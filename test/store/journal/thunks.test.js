import { collection, deleteDoc, doc, getDocs, setDoc } from "firebase/firestore/lite";
import { FirebaseDB } from "../../../src/firebase/config";
import { fileUpload } from "../../../src/helpers/fileUpload";
import { firebaseClearDB } from "../../../src/helpers/firebaseClearDB";
import { loadNotes } from "../../../src/helpers/loadNotes";

import { addNewEmptyNote, deleteNoteById, savingNewNote, setActiveNote, setNotes, setPhotosToActiveNote, setSaving } from "../../../src/store/journal/journalSlice";
import { startDeletingNote, startLoadingNotes, startNewNote, startUploadingFiles } from "../../../src/store/journal/thunks";

jest.mock("../../../src/helpers/loadNotes");
jest.mock("../../../src/helpers/fileUpload");

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

        await firebaseClearDB(uid);

    },10000)

    test('startLoadingNotes debe de cargar las notas creadas anteriormente por el usuario', async () => {

        const notesTest = [{id:'123' , title:'nota 1' , body:'cuerpo de la nota1'} , {id:'456' , title:'nota 2' , body:'cuerpo de la nota 2'}]
        getState.mockReturnValue({auth: { uid }});

        await loadNotes.mockReturnValue(notesTest)
        await startLoadingNotes()(dispatch , getState);

        expect(dispatch).toHaveBeenCalledWith(setNotes(notesTest));


    })

    test('startLoadingNotes debe de retornar un error si no se encuentra el uid del usuario' , async ()=>{
        getState.mockReturnValue({auth: { }});
        await expect( startLoadingNotes()(dispatch , getState)).rejects.toThrow()
    },10000)


    test('startUploadingFiles debe de llamar la accion setSaving y setPhotosToActiveNote', async () => { 
        const imageTest = 'https://image1.jpg'
        await fileUpload.mockResolvedValue( imageTest)
        await  startUploadingFiles(['fileTest 1'])(dispatch);

        expect(dispatch).toHaveBeenCalledWith(setSaving());
        expect(dispatch).toHaveBeenCalledWith(setPhotosToActiveNote( [ 'https://image1.jpg' ]));


    },10000)

    test('startDeletingNote debe de eliminar  una nota creada por el usuario en Firebase y debe de llamar la accion  deleteNoteById', async () => { 
        // ? creacion de la nota:
        const noteTest = { title:'nota 1' , body:'cuerpo de la nota1'}; 

        // ref a la collection en Firebase
        const newDoc = doc( collection(FirebaseDB , `Journal-app/${uid}/notes`));
        
        // insertar la nota
        await  setDoc(newDoc , noteTest);
        
        noteTest.id = newDoc.id;
        
        // ? retorno del store
        getState.mockReturnValue({auth: uid , journal : {active: noteTest}});

        // ? sujeto de pruebas 
        await startDeletingNote()(dispatch , getState);

        expect(dispatch).toHaveBeenCalledWith(deleteNoteById( noteTest.id ));
        
        // limpiando la base de datos de firebase 
        await firebaseClearDB(uid);
    },10000)
})
