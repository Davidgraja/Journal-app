import { red } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

export const blackTheme = createTheme({
    palette: {
        primary : {
            main : '#17202A'
        },
        secondary : {
            main : '#20D870',
            light: '#F2F8F5',
            switch : '#20D870'
        },
        error : {
            main : red.A400
        },
        

    }
}) 