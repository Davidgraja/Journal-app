import { createSlice } from '@reduxjs/toolkit'


export const journalSlice = createSlice({
    name: 'journal',
    initialState : {
        isSaving: false,
        message: null ,
        notes : [],
        active : null
        
    },
    reducers: {

        savingNewNote : (state) =>{
            state.isSaving = true;
        },

        addNewEmptyNote : (state , action) => {
            state.notes.push( action.payload );
            state.isSaving = false;
        },

        updateMessageSave : (state , action) => {
            state.message = action.payload
        },


        setActiveNote : (state , action)=>{
            state.active = action.payload;
        },

        setNotes : (state , action)=>{
            state.notes = action.payload;

        },

        setSaving : (state )=>{
            state.isSaving = true;
            // state.message = {};
        },

        updateNote : (state , action)=>{
            state.isSaving = false;

            state.notes = state.notes.map( note => {
                if( note.id == action.payload.id){
                    return action.payload;
                }    
                return note;
            } );

            state.message = { type: 'update' };
        } ,

        setPhotosToActiveNote : (state , action) =>{
            state.active.imageUrl = [...state.active.imageUrl  , ...action.payload];
            state.isSaving = false;
        },

        clearNotes : (state) =>{
            state.isSaving = false;
            state.notes = [];
            state.message = {};
            state.active = null;
        },

        deleteNoteById : (state , action)=>{
            state.active = null;
            state.notes =  state.notes.filter( note => note.id !== action.payload);
            state.message = {type:'delete'}
        },

        clearMessageSave : (state) =>{
            state.message = {}
        }

    }
    

})

// Action creators are generated for each case reducer function
export const { savingNewNote ,addNewEmptyNote , setActiveNote , setNotes , deleteNoteById , setSaving , updateNote , deleteById , setPhotosToActiveNote , clearNotes , clearMessageSave , updateMessageSave} = journalSlice.actions;