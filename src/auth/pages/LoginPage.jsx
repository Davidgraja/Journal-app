import { useDispatch } from "react-redux"
import { ButtonForm, Form, InputForm } from "../components"
import { startGoogleSingIn } from "../../store/auth/thunks";

export const LoginPage = () => {

    const dispatch = useDispatch();

    const onGoggleSingIn = () =>{

        dispatch( startGoogleSingIn());

    }

    return (
    <Form formTitle={'Inicio de sesión'} textForLink={'Crear una cuenta'} directionOfLink={'/register'}>

        <InputForm nameInput={'email'}  idInput={'email'} typeInput={'email'} placeholderInput={'Correo Electrónico *'}/>
        <InputForm nameInput={'password'}  idInput={'password'} typeInput={'password'} placeholderInput={'Contraseña *'}/>

        <ButtonForm textForButton={'Login'}/>
        <ButtonForm titleForButton={'inicio de sesión con google'} textForButton={'Google'} clickEvent={onGoggleSingIn} />

    </Form>
    )
}
