import { red } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

export const whiteTheme = createTheme({
    palette:{
        primary : {
            main : '#F4F6F6'
        },
        secondary :{
            main:'#2980B9',
            light: '#F2F8F5',
            switch : '#2980B9',
            // notes: '#2980B9'

        },
        error : {
            main : red.A400
        },
        info:{
            main : '#181818' ,
        }
        
    }
})