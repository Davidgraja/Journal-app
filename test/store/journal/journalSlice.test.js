import { addNewEmptyNote, clearNotesLogout, deleteNoteById, journalSlice, savingNewNote, setActiveNote, setNotes, setPhotosToActiveNote, updateNote } from "../../../src/store/journal/journalSlice"

describe('pruebas sobre  store/journal/journalSlice.js ', () => { 
    
    const initialState =  {
        isSaving: false,
        messageSaved: {} ,
        notes : [],
        active : null
        
    }

    const notesTest = [{id : '123' , title: 'note 1' , body:'body the note 1'}, {id : '456' , title: 'note 2' , body:'body the note 2'}];

    const noteActive = {id : '123' , title: 'note 1' , body:'body the note 1' , imageUrl: ['imagen1.jpg' , 'imagen2.jpg']};

    test('debe de retornar el estado inicial y debe de tener por nombre : journal', () => { 

        const state  = journalSlice.reducer(initialState , {});
    
        expect(state).toEqual(initialState);
        expect(journalSlice.name).toBe('journal')
    })


    test('debe de realizar la accion de savingNewNote y  debe de establecer la propiedad isSaving en true ', () => { 

        const state  = journalSlice.reducer(initialState , savingNewNote());
        expect(state.isSaving).toBeTruthy()

    })   


    test('debe de realizar la accion de addNewEmptyNote y  debe de  añadir a la propiedad notes la nota enviada ', () => { 
        
        const initialState2 ={
                isSaving: false,
                messageSaved: {} ,
                notes : [{ id : 'chan123' ,  body : 'nota de prueba ' , title: 'testing a journal app' , date : 12235435456 , imageUrl : [] }],
                active : null
                
        }

        const noteData = { id : 'lili' ,  body : 'prueba sobre addNewEmptyNote  2 ' , title: 'testing a journal app' , date : 46567787 , imageUrl : [] };
        const state  = journalSlice.reducer(initialState2 , addNewEmptyNote(noteData));

        expect(state.notes.length).toBe(2);
        expect(state.notes).toContain(noteData);
        
    }) 
    

    
    test('debe de realizar la accion de setActiveNote y  debe de  establecer a la propiedad active toda la informacion de la nota enviada', () => {
        
        const noteData = { id : 'lili' ,  body : 'prueba sobre addNewEmptyNote  2 ' , title: 'testing a journal app' , date : 46567787 , imageUrl : [] };
        const state  = journalSlice.reducer(initialState , setActiveNote(noteData));

        expect(state.active).toEqual(noteData);
        
    }) 


    test('debe de realizar la accion de setNotes y  debe de  establecer en la propiedad notes toda la informacion enviada en el  payload', () => {
        
        const notesTest = [{id : '123' , title: 'note 1' , body:'body the note 1'}, {id : '456' , title: 'note 2' , body:'body the note 2'}];
        const state  = journalSlice.reducer(initialState , setNotes(notesTest));

        expect(state.notes).toEqual(notesTest);
        expect(state.active).toBe(null);

    }) 

    test('debe de realizar la accion de updateNote y  debe de  establecer actualizar una  nota por su id , ademas de estar la propieda isSaving en false y messageSaved en "type : update" ', () => {
        
        const stateByUpdate  = {
            isSaving: false,
            messageSaved: {} ,
            notes : notesTest,
            active : null
            
    }

        const note2Update = {id : '456' , title: 'note 2 update' , body:'esta la actualizacion de la nota 2'}
        const state  = journalSlice.reducer(stateByUpdate ,  updateNote(note2Update) );

        expect(state.notes[1]).toEqual(note2Update);
        expect(state.isSaving).toBeFalsy();
        expect(state.messageSaved).toEqual({type:'update'});

    }) 

    test('debe de realizar la accion de setPhotosToActiveNote y debe de establecer en active.imageUrl las imagenes anteriores y las enviadas por el payload, ademas de estar la propieda isSaving en false ', () => {
        
        const photosByUpdate = ['imagen3.jpg' , 'imagen4.jpg'];
        const stateByUpdate  = {
            isSaving: false,
            messageSaved: {} ,
            notes : [],
            active : noteActive
            
        }

        const state  = journalSlice.reducer(stateByUpdate ,  setPhotosToActiveNote(photosByUpdate) );
        expect(state.active.imageUrl).toContain( ...photosByUpdate);
        expect(state.isSaving).toBeFalsy();  

    }) 

    test('debe  realizar la accion clearNotesLogout  y  reestablecer todas las propiedades del slice a su valores iniciales ', () => {
        
        const currentState  = {
            isSaving: false,
            messageSaved: {} ,
            notes : notesTest,
            active : noteActive
            
        };

        const state  = journalSlice.reducer( currentState ,clearNotesLogout() );

        expect(state).toEqual(initialState);
    }) 


    test('debe  realizar la accion deleteNoteById y debe de eliminar una nota por su id , active :false  y messageSaved : {type:"delete"}', () => {
        
        const currentState  = {
            isSaving: false,
            messageSaved: {} ,
            notes : notesTest,
            active : noteActive
            
        };

        const state  = journalSlice.reducer( currentState , deleteNoteById('123') );

        expect(state.notes).not.toContain(notesTest[0]);
        expect(state.notes).toContain(notesTest[1]);
        expect(state.notes.length).toBe(1);


        expect(state.active).toBe(null);

        expect(state.messageSaved).toStrictEqual({type:'delete'});

    }) 

})