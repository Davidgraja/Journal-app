import { useMemo } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { startGoogleSingIn, startLoginWithEmailAndPassword } from '../../store/auth';

import { Link as RouterLink } from 'react-router-dom';

import { TextField , Typography , Grid , Button , Link, Alert} from '@mui/material';
import  {Google}  from '@mui/icons-material';


import { AuthLayout } from '../layout/AuthLayout';
import { useForm } from '../../hooks';

const formData = {
    email : '',
    password :'' 
}

export const LoginPage = () => {

    const {status , errorMessage} = useSelector( state => state.auth )
    const dispatch = useDispatch();

    const isAuthenticated = useMemo(()=> status === 'checking' , [status] )

    const { email , password , onEventInput } = useForm(formData)

    const onSubmitForm = (event)=>{
        event.preventDefault()
        if(!email || !password ) return;
        
        dispatch(startLoginWithEmailAndPassword({email , password}));   
    
    }

    const onGoogleSingIn = () =>{
        dispatch(startGoogleSingIn());
    }

    return (

        <AuthLayout title='Login' >

                <form 
                    onSubmit={ onSubmitForm } 
                    className="animate__animated animate__fadeIn animate__faster"
                >

                    <Grid container >

                        <Grid item  xs={12} sx={{mt:2}}  >
                            <TextField
                                label="Correo" 
                                placeholder="example@gmail.com" 
                                type="email"  
                                fullWidth
                                name='email'
                                value={ email }
                                onChange={ onEventInput }
                                color='secondary'
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
                                color='secondary'
                                />
                        </Grid>

                        <Grid container spacing={2} sx={{mt:1 , mb: 1}}>

                            <Grid item xs={12} sm={12} sx = {{ display : !!errorMessage ?  '' : 'none' }} >
                                <Alert severity='error'  >{ errorMessage }</Alert>
                            </Grid>

                            <Grid item xs={12} sm={6} >
                                <Button variant="contained" fullWidth type='submit' disabled={ isAuthenticated } color='secondary' >
                                    <Typography color='secondary.light'>Login</Typography>
                                </Button>
                            </Grid>

                            <Grid item xs={12} sm={6} >
                                <Button variant="contained" fullWidth onClick={ onGoogleSingIn } disabled={ isAuthenticated } color='secondary'>
                                    <Google htmlColor='white'/>
                                    <Typography sx={{ml:1}} color='secondary.light' >Google</Typography>
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
