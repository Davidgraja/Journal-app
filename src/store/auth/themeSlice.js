import { createSlice } from '@reduxjs/toolkit'


export const themeSlice = createSlice({
    name: 'theme',
    initialState : {
        darkMode : false
    },
    reducers: {
        onChangeDarkMode : ( state ) =>{
            state.darkMode = !state.darkMode
        }
    }
    

})

export const { onChangeDarkMode } = themeSlice.actions