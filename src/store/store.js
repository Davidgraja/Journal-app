import { configureStore } from '@reduxjs/toolkit'
import { authSlice } from './auth'
import { journalSlice } from './journal'
import { themeSlice } from './theme/themeSlice'


export const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        theme:  themeSlice.reducer,
        journal : journalSlice.reducer

    },
})