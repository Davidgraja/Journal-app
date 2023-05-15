import { ButtonForm, Form, InputForm } from "../components"

export const LoginPage = () => {
    return (
        
    <Form formTitle={'Inicio de sesión'} textForLink={'Crear una cuenta'} directionOfLink={'/register'}>

        <InputForm nameInput={'email'}  idInput={'email'} typeInput={'email'} placeholderInput={'Correo Electrónico *'}/>
        <InputForm nameInput={'password'}  idInput={'password'} typeInput={'password'} placeholderInput={'Contraseña *'}/>

        <ButtonForm textForButton={'Login'}/>
        <ButtonForm titleForButton={'inicio de sesión con google'} textForButton={'Google'}/>

    </Form>
    )
}
