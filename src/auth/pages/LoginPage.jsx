import { useMemo } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { checkingAuthentication, startGoogleSingIn } from '../../store/auth';

import { Link as RouterLink } from 'react-router-dom';

import { TextField , Typography , Grid , Button , Link} from '@mui/material';
import  {Google}  from '@mui/icons-material';


import { AuthLayout } from '../layout/AuthLayout';
import { useForm } from '../../hooks';



export const LoginPage = () => {

    const {status} = useSelector( state => state.auth )
    const dispatch = useDispatch();

    const isAuthenticated = useMemo(()=> status === 'checking' , [status] )

    const {email , password , onEventInput , onResetForm} = useForm({
        email : '',
        password :'' 
    })

    const onSubmitForm = (event)=>{
        event.preventDefault()
        // if(!email || !password ) return;
        
        console.log({email , password})
        // onResetForm()

        dispatch(checkingAuthentication(email , password))
    }

    const onGoogleSingIn = () =>{
        console.log('onGoogleSingIn');
        dispatch(startGoogleSingIn());
    }

    return (

        <AuthLayout title='Login' >

                <form onSubmit={ onSubmitForm } >

                    <Grid container >

                        <Grid item  xs={12} sx={{mt:2}}  >
                            <TextField
                                label="Correo" 
                                placeholder="example@gmail.com" 
                                type="email"  
                                fullWidth
                                autoComplete="off"
                                name='email'
                                value={ email }
                                onChange={ onEventInput }
                                />
                        </Grid>

                        <Grid item  xs={12} sx={{mt:2}} >
                            <TextField
                                label="Contraseña" 
                                placeholder="Tu contraseña" 
                                type="password"  
                                fullWidth
                                autoComplete="off"
                                name='password'
                                value={ password }
                                onChange={ onEventInput }
                                />
                        </Grid>

                        <Grid container spacing={2} sx={{mt:1 , mb: 1}}>

                            <Grid item xs={12} sm={6} >
                                <Button variant="contained" fullWidth type='submit' disabled={ isAuthenticated } >
                                    <Typography>Login</Typography>
                                </Button>
                            </Grid>

                            <Grid item xs={12} sm={6} >
                                <Button variant="contained" fullWidth onClick={ onGoogleSingIn } disabled={ isAuthenticated } >
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
