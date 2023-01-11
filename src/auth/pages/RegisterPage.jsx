import { Link as RouterLink } from 'react-router-dom';
import TextField   from '@mui/material/TextField'
import Typography  from '@mui/material/Typography'
import Grid     from '@mui/material/Grid'
import  Button  from '@mui/material/Button'
import  Link  from '@mui/material/Link'
import  {Google}  from '@mui/icons-material'
import { AuthLayout } from '../layout/AuthLayout';

export const RegisterPage = () => {
    return (

        <AuthLayout title='Crear cuenta' >

                <form>

                    <Grid container >

                        <Grid item  xs={12} sx={{mt:2}}  >
                            <TextField
                                label="Nombre completo" 
                                placeholder='Tu nombre'
                                type="text"  
                                fullWidth
                                autoComplete="off"
                                
                                />
                        </Grid>

                        <Grid item  xs={12} sx={{mt:2}}  >
                            <TextField
                                label="Correo" 
                                placeholder='Tu correo electrónico'
                                type="email"  
                                fullWidth
                                autoComplete="off"
                                
                                />
                        </Grid>

                        <Grid item  xs={12} sx={{mt:2}} >
                            <TextField
                                label="Contraseña" 
                                placeholder="Tu contraseña" 
                                type="password"  
                                fullWidth
                                autoComplete="off"

                                />
                        </Grid>

                        <Grid container spacing={2} sx={{mt:1 , mb: 1}}>

                            <Grid item xs={12} >
                                <Button variant="contained"  fullWidth >
                                    <Typography>Crear cuenta</Typography>
                                </Button>
                            </Grid>

                        </Grid>

                    </Grid>

                    <Grid container direction="row" justifyContent="end">
                        <Typography sx={{mr:1}}>¿Ya tiene una cuenta?</Typography>

                        <Link  component={ RouterLink } color="inherit" to="/auth/login">
                            Ingesar
                        </Link>

                    </Grid>
                </form>
                
        </AuthLayout>
        
    )
}
