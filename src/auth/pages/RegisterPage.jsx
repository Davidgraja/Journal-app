import { Link as RouterLink } from 'react-router-dom';
import { TextField , Typography , Grid , Button , Link } from '@mui/material';
import  {Google}  from '@mui/icons-material'
import { AuthLayout } from '../layout/AuthLayout';
import { useForm } from '../../hooks';
import { useState } from 'react';

const formData = {
    email : '',
    password : '',
    displayName : ''
}

export const formValidations = {

    email : [(value)=> value.includes('@') , 'El correo  debe de tener un @' ],
    password : [ (value) => value.length >= 6 , 'La contraseña debe de tener más de 6 de digitos.'],
    displayName : [ ( value )=> value.length >= 1 , 'El nombre es obligarorio.' ]

}

export const RegisterPage = () => {

    const [formSubmitted, setFormSubmitted] = useState(false)

    const {
        formState , email , password , displayName, onEventInput , onResetForm , isFormValid,
        emailValid , passwordValid , displayNameValid  
    
    } = useForm( formData  , formValidations );




    const onSumitRegister = (event) =>{
        event.preventDefault();
        setFormSubmitted(true)
        if(!email || !password || !displayName) return;
        else if (password.length < 6) return;
        console.log({email , password , displayName})
    }

    return (

        <AuthLayout title='Crear cuenta' >
                <form onSubmit={ onSumitRegister } >

                    <Grid container >

                        <Grid item  xs={12} sx={{mt:2}}  >
                            <TextField
                                label="Nombre completo" 
                                placeholder='Tu nombre'
                                type="text"  
                                fullWidth
                                autoComplete="off"
                                name ='displayName'
                                value={ displayName }
                                onChange = {onEventInput}
                                error={!!displayNameValid  && formSubmitted}
                                helperText={displayNameValid}
                                />
                        </Grid>

                        <Grid item  xs={12} sx={{mt:2}}  >
                            <TextField
                                label="Correo" 
                                placeholder='Tu correo electrónico'
                                type="email"  
                                fullWidth
                                autoComplete="off"
                                name = 'email'
                                value={email}
                                onChange={onEventInput}
                                error={!!emailValid  && formSubmitted}
                                helperText={emailValid}
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
                                value={password}
                                onChange={onEventInput}
                                error={!!passwordValid && formSubmitted}
                                helperText={passwordValid}

                                />
                        </Grid>

                        <Grid container spacing={2} sx={{mt:1 , mb: 1}}>

                            <Grid item xs={12} >
                                <Button variant="contained"  fullWidth  type='submit' >
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
