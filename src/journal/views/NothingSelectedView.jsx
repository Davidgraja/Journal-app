import { StarOutline } from "@mui/icons-material"
import { Grid, Typography } from "@mui/material"
import { useEffect } from "react";
import { useSelector } from "react-redux"
import Swal from "sweetalert2";

export const NothingSelectedView = () => {

    const {messageSaved} = useSelector( (state)=> state.journal );
    
    useEffect(() => {
        
        if (messageSaved?.type == 'delete') {
                Swal.fire({
                    position: 'center',
                    icon:'warning',
                    title: 'Nota eliminada',
                    showConfirmButton: false,
                    timer: 1500
                });
        }
    
    }, [messageSaved])
    

    return (
        <Grid 
            container
            spacing={ 0 }
            direction="column"
            alignItems={"center"}
            justifyContent={"center"}
            sx={{minHeight : 'calc(100vh - 110px)' , backgroundColor: 'primary.main' , borderRadius: 3 }}
            className="animate__animated animate__fadeIn animate__faster"
        >

            <Grid 
                item
                xs={12}
            >
                <StarOutline sx={{fontSize: 100 , color:'secondary.main'}}/>
            </Grid>

            <Grid item>
                <Typography sx={{color: 'secondary.main' }} variant='h6'> Selecciona o crea una entrada</Typography>
            </Grid>

        </Grid>
    )
}
