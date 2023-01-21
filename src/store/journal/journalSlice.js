import { createSlice } from '@reduxjs/toolkit'


export const journalSlice = createSlice({
    name: 'journal',
    initialState : {
        isSaving: false,
        massageSaved : '',
        notes : [],
        active : null
        // imageUrl
    },
    reducers: {

        savingNewNote : (state) =>{
            state.isSaving = true
        },

        addNewEmptyNote : (state , action) => {
            state.notes.push( action.payload );
            state.isSaving = false
        },

        setActiveNote : (state , action)=>{
            state.active = action.payload
        },

        setNotes : (state , action)=>{
            state.notes = action.payload

        },

        setSaving : (state )=>{

        },

        updateNote : (state , action)=>{

        } ,

        deleteById : (state , action)=>{

        }

    }
    

})

// Action creators are generated for each case reducer function
export const { savingNewNote ,addNewEmptyNote , setActiveNote , setNotes , setSaving , updateNote , deleteById } = journalSlice.actions