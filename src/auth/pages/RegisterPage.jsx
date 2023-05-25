import { useDispatch, useSelector } from "react-redux";
import { useForm } from "../../hooks/useForm"
import { ButtonForm, Form, InputForm, MessageError } from "../components"
import { startCreatingUserEmailAndPasword } from "../../store/auth/thunks";

export const RegisterPage = () => {
    //* Redux  
    const dispatch = useDispatch();
    const { errorMessage } = useSelector(state => state.auth);


    //* Hooks
    const formData = {
        name : '',
        email : '',
        password : '',
    };

    const formValidations = {
        email:  [(value)=> value.includes('@') , 'El email debe de contener un @' ],
        password : [(value)=> value.length >= 6 , 'La contraseña debe de tener al menos 6 caracteres' ],
        name :  [(value)=> value.trim().length >= 1 , 'el nombre es obligatorio' ]
    }

    const {name , email , password , onEventInput , formState, passwordValid , emailValid , nameValid , isFormValid} = useForm(formData , formValidations);

    //* Functions 
    const onSubmitForm = (event) => {
        event.preventDefault();
        if(!isFormValid) return;
        console.log('event')
        dispatch(startCreatingUserEmailAndPasword(formState))
    }

    return (

        <Form formTitle={'Creación de cuenta'} textForLink={'Iniciar sesión'} directionOfLink={'/login'} onClickEvent={onSubmitForm}>

            <InputForm valueInput={name} eventChange={ onEventInput } nameInput={'name'} idInput={'name'} placeholderInput={'Nombre completo *'}  typeInput={'text'} textForLabel={nameValid}/>

            <InputForm valueInput={email} eventChange={ onEventInput } nameInput={'email'} idInput={'email'} placeholderInput={'Correo electrónico *'}  typeInput={'email'} textForLabel={emailValid}/>

            <InputForm valueInput={password} eventChange={ onEventInput } nameInput={'password'} idInput={'password'} placeholderInput={'Contraseña *'}  typeInput={'password'} textForLabel={passwordValid}/>
            
            {
            
                errorMessage && <MessageError message={errorMessage}/>

            }

            <ButtonForm textForButton={'Crear cuenta'}/>

        </Form>

    )
}
