import { Email } from '@mui/icons-material';
import { configureStore } from '@reduxjs/toolkit';
import { fireEvent, render, screen } from '@testing-library/react';
import { Provider, useDispatch } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { LoginPage } from '../../../src/auth/pages/LoginPage';
import { authSlice } from '../../../src/store/auth';
import { startGoogleSingIn , startLoginWithEmailAndPassword} from '../../../src/store/auth/thunks';
import { themeSlice } from '../../../src/store/theme/themeSlice';
import { notAuthenticatedState } from '../../fixtures/authFixtures';

const mockStartGoogleSingIn = jest.fn();
const mockStartLoginWithEmailAndPassword  = jest.fn();

jest.mock('../../../src/store/auth/thunks' , ()=>({
    startGoogleSingIn : () => mockStartGoogleSingIn,
    startLoginWithEmailAndPassword: ({email , password}) =>{
        return () => mockStartLoginWithEmailAndPassword({email , password});

    } 
}))


jest.mock('react-redux' , ()=>(
    {
        ...jest.requireActual('react-redux'),
        useDispatch : () => (fn) => fn()
    }
))
const store = configureStore({
    reducer:{
        auth :  authSlice.reducer,
        theme : themeSlice.reducer
    },
    preloadedState:{
        auth : notAuthenticatedState
    }
})

describe('pruebas sobre el <LoginPage/>' , () => {
    
    beforeEach(()=> jest.clearAllMocks())

    test('debe de mostrar el componente correctamente' , ()=>{

        render(
            <Provider store={store} >
                <MemoryRouter>
                    <LoginPage/>
                </MemoryRouter>
            </Provider>
        )

        expect(screen.getAllByText('Login').length).toBeGreaterThanOrEqual(1)
        

    })

    test('boton de autenticacion con Google debe de llamar el thunk  de startGoogleSingIn', () => {

        render(
            <Provider store={store} >
                <MemoryRouter>
                    <LoginPage/>
                </MemoryRouter>
            </Provider>
        )

        
        const btn_google = screen.getByLabelText('google-btn');
        
        fireEvent.click(btn_google);

        expect(mockStartGoogleSingIn).toHaveBeenCalled()
    })


    test('submit debe de llamar el thunk startLoginWithEmailAndPassword' , () =>{

        const email = 'testEmail@gmail.com';
        const password = '123456';

        render(
            <Provider store={store} >
                <MemoryRouter>
                    <LoginPage/>
                </MemoryRouter>
            </Provider>
        )

        const emailField = screen.getByRole('textbox', {name:'Correo'});
        fireEvent.change(emailField , {target : { name : 'email'  , value : email}});

        const passwordField = screen.getByTestId('password');
        fireEvent.change(passwordField , {target : { name : 'password'  , value : password}});
        
        // console.log(passwordField.value)

        const loginFormTest = screen.getByLabelText('submit-form')

        fireEvent.submit(loginFormTest)

        expect(mockStartLoginWithEmailAndPassword).toHaveBeenCalledWith({email , password})
    })
})     