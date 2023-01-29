import {authSlice, checkingCredentials, login, logout} from '../../../src/store/auth/authSlice';
import {demoUser, initialState, authenticatedState, notAuthenticatedState} from '../../fixtures/authFixtures';

describe('pruebas sobre authSlice', () => { 

    test('debe de regresar el estado inicial y debe de tener por nombre "auth" ', () => { 
        
        // obtener y configurar el estado inicial 
        const state = authSlice.reducer(initialState , {})

        expect(authSlice.name).toBe("auth");

        expect(state).toEqual(initialState);

        
    })

    test( ' debe de realizar la autenticacion del usuario ' , ()=>{

        const state = authSlice.reducer(initialState , login(demoUser))

       expect( state ).toEqual({
            status : 'authenticated',
            uid : demoUser.uid ,
            email : demoUser.email ,
            displayName : demoUser.displayName  ,
            photoURL : demoUser.photoURL,
            errorMessage : null
        })

    })


    test('deebe de realizar la accion de logout sin argumentos' , ()=>{

        const state = authSlice.reducer(authenticatedState , logout());
        expect(state).toEqual({
            status : 'not-authenticated',
            uid : null,
            email : null,
            displayName : null,
            photoURL : null ,
            errorMessage: null
        });
    })


    test('deebe de realizar la accion de logout y mostrar un mensaje de error' , ()=>{

        const errorMessage = 'las credenciales no son correctas'
        const state = authSlice.reducer(authenticatedState , logout({errorMessage}));

        expect(state).toEqual({
            status : 'not-authenticated',
            uid : null,
            email : null,
            displayName : null,
            photoURL : null ,
            errorMessage
        });

    })


    test( 'debe de cambiar el estado a checking' , () =>{

        const state = authSlice.reducer(authenticatedState , checkingCredentials());

        expect(state.status).toBe('checking');

    })

})

