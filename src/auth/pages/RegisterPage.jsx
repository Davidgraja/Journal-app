import { ButtonForm, Form, InputForm } from "../components"

export const RegisterPage = () => {
    return (

        <Form formTitle={'Creación de cuenta'} textForLink={'Iniciar sesión'} directionOfLink={'/login'}>

            <InputForm nameInput={'nombre'} idInput={'nombre'} placeholderInput={'Nombre completo *'}  typeInput={'text'}/>

            <InputForm nameInput={'email'} idInput={'email'} placeholderInput={'Correo electrónico *'}  typeInput={'email'}/>

            <InputForm nameInput={'password'} idInput={'password'} placeholderInput={'Contraseña *'}  typeInput={'password'}/>
            
            <ButtonForm textForButton={'Crear cuenta'}/>

        </Form>

    )
}
