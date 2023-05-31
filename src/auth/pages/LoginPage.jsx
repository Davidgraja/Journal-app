import { useDispatch, useSelector } from "react-redux"
import { ButtonForm, Form, InputForm, MessageError } from "../components"
import { startEmailAndPasswordSingIn, startGoogleSingIn } from "../../store/auth/thunks";
import { useForm } from "../../hooks/useForm";
import { useState } from "react";

export const LoginPage = () => {

    //* Redux 
    const { errorMessage } = useSelector(state => state.auth );

    const dispatch = useDispatch();

    
    //* hooks 
    const [formData, setFormDate] = useState({
        email : '',
        password : ''
    });
    
    const {email , password , onEventInput} = useForm(formData);

    //* Functions 
    const onGoggleSingIn = () =>{

        dispatch( startGoogleSingIn());

    }

    const  onSubmitForm = (event) => {
        event.preventDefault();
        if(!email || !password) return;
        dispatch(startEmailAndPasswordSingIn({email , password}))
    }

    return (
    <Form formTitle={'Inicio de sesión'} textForLink={'Crear una cuenta'} directionOfLink={'/register'} onClickEvent={ onSubmitForm }>

        <InputForm nameInput={'email'} valueInput={email}  eventChange={ onEventInput } idInput={'email'} typeInput={'email'} placeholderInput={'Correo Electrónico *'}/>
        <InputForm nameInput={'password'}  valueInput={password} eventChange={ onEventInput } idInput={'password'} typeInput={'password'} placeholderInput={'Contraseña *'}/>

        {
            errorMessage && <MessageError message={errorMessage}/>
        }

        <ButtonForm textForButton={'Login'}/>
        <ButtonForm titleForButton={'inicio de sesión con google'} textForButton={'Google'} clickEvent={onGoggleSingIn} />

    </Form>
    )
}
