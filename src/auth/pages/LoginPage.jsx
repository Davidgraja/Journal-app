import { Link as RouterLink } from 'react-router-dom';
import TextField   from '@mui/material/TextField'
import Typography  from '@mui/material/Typography'
import Grid     from '@mui/material/Grid'
import  Button  from '@mui/material/Button'
import  Link  from '@mui/material/Link'
import  {Google}  from '@mui/icons-material'
import { AuthLayout } from '../layout/AuthLayout';

export const LoginPage = () => {
    return (

        <AuthLayout title='Login' >

                <form>

                    <Grid container >

                        <Grid item  xs={12} sx={{mt:2}}  >
                            <TextField
                                label="Correo" 
                                placeholder="correo@gmail.com" 
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

                            <Grid item xs={12} sm={6} >
                                <Button variant="contained" fullWidth >
                                    <Typography>Login</Typography>
                                </Button>
                            </Grid>

                            <Grid item xs={12} sm={6} >
                                <Button variant="contained" fullWidth >
                                    <Google/>
                                    <Typography sx={{ml:1}}>Google</Typography>
                                </Button>
                            </Grid>

                        </Grid>

                    </Grid>

                    <Grid container direction="row" justifyContent="end">
                        
                        <Link  component={ RouterLink } color="inherit" to="/auth/register">
                            Crear una cuenta
                        </Link>

                    </Grid>
                </form>
                
        </AuthLayout>
        
    )
}
