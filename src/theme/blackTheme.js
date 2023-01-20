import { red } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

export const blackTheme = createTheme({
    palette: {
        primary : {
            main : '#17202A'
        },
        secondary : {
            main : '#85929E',
            light:'#FDFEFE' 
        },
        error : {
            main : red.A400
        },
        success:{
            main:'#2ECC71'
        }  

    }
}) 