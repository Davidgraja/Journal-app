import { red } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

export const whiteTheme = createTheme({
    palette:{
        primary : {
            main : '#F4F6F6'
        },
        secondary :{
            main:'#2980B9',
            light: '#5DADE2'
        },
        error : {
            main : red.A400
        },
        success:{
            main:'#2ECC71'
        }
        
    }
})