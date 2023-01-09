import { Link as RouterLink } from 'react-router-dom';
import TextField   from '@mui/material/TextField'
import Typography  from '@mui/material/Typography'
import Grid     from '@mui/material/Grid'
import  Button  from '@mui/material/Button'
import  Link  from '@mui/material/Link'
import  {Google}  from '@mui/icons-material'

export const LoginPage = () => {
    return (
        <Grid 
            container
            spacing={ 0 }
            direction="column"
            alignItems={"center"}
            justifyContent={"center"}
            sx={{minHeight : '100vh' , backgroundColor: 'primary.main' , padding: 4 }}
        >
            
            <Grid 
                item
                className='box-shadow'
                xs={3}
                sx={{backgroundColor:'white' , padding: 3 , borderRadius: 2}}
            >
                <Typography variant='h5' sx={{mb:1}} >Login</Typography>

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

            </Grid>

        </Grid>
    )
}
