import {
    checkingAuthentication,
    checkingCredentials,
    login,
    startGoogleSingIn,
    logout,
    startLoginWithEmailAndPassword, startLogout, startCreatingUserEmailPassword
} from "../../../src/store/auth/index.js";
import {demoUser} from "../../fixtures/authFixtures.js";
import {
    loginWithEmailAndPassword,
    logoutFirebase,
    registerUserWithEmailPassword,
    singInWidthGoogle
} from "../../../src/firebase/providers.js";
import {clearNotesLogout} from "../../../src/store/journal/index.js";
/**cuando trabajamos con firebase , jest tratara de ejecutar aquellos modulos qde firebase , pero esti requiere que traigamos los modulos repectivos que se estan usando dentro del archivo,
para solucionar esto podemos hacer un mock de los modulos y dentro del jest.config añadimos transformIgnorePatterns : [] el cual lo que hace es ignorar completamente los modelos de firebase*/

jest.mock('../../../src/firebase/providers.js')

describe('pruebas sobre thunks.js' , ()=>{

    const dispatch = jest.fn();

    beforeEach(()=> jest.clearAllMocks());

    test( 'debe de invocar el checkingCredencial' , async ()=>{

        await  checkingAuthentication()( dispatch );
        expect(dispatch).toHaveBeenCalledWith( checkingCredentials() )
    })


    test( 'startGoogleSingIn debe de llamar checkingCredentials y login - Exito' , async ()=>{

        const  loginData = { ok : true ,...demoUser };
        await  singInWidthGoogle.mockResolvedValue(loginData);
        await  startGoogleSingIn()( dispatch );

        expect(dispatch).toHaveBeenCalledWith(checkingCredentials());
        expect(dispatch).toHaveBeenCalledWith(login(loginData));

    })

    test( 'startGoogleSingIn debe de llamar checkingCredentials y logout - Error' , async ()=>{

        const  loginData = { ok : false ,errorMessage : 'error en Google'};
        await  singInWidthGoogle.mockResolvedValue(loginData);
        await  startGoogleSingIn()( dispatch );

        expect(dispatch).toHaveBeenCalledWith(checkingCredentials());
        expect(dispatch).toHaveBeenCalledWith(logout(loginData));

    })


    test('startCreatingUserEmailPassword  debe de llamar a checkingCredentials  y login-Exito ',async   () =>{

        const loginData = { ok : true , ...demoUser };
        const formData = { email: demoUser.email , password : 'chan123' , displayName:demoUser.displayName};

        await registerUserWithEmailPassword.mockResolvedValue( loginData );
        await startCreatingUserEmailPassword( formData ) ( dispatch );

        expect(dispatch).toHaveBeenCalledWith(login(loginData))

    })

    test('startCreatingUserEmailPassword  debe de llamar a checkingCredentials  y logout-Error ',async   () =>{

        const loginData = { ok : false , errorMessage: 'usuario no encontrado' };
        const formData = { email: demoUser.email , password : 'chan123' , displayName:demoUser.displayName};

        await registerUserWithEmailPassword.mockResolvedValue( loginData );
        await startCreatingUserEmailPassword( formData ) ( dispatch );

        expect(dispatch).toHaveBeenCalledWith(logout(loginData))

    })



    test('startLoginWithEmailAndPassword debe de llamar a checkingCredentials y login-Exito' , async () =>{
        const loginData = { ok : true , ...demoUser };

        const formData = {email:demoUser.email , password: 'chan123'};

        await loginWithEmailAndPassword.mockResolvedValue(loginData);

        await startLoginWithEmailAndPassword(formData)(dispatch);

        expect( dispatch ).toHaveBeenCalledWith(checkingCredentials())

        expect( dispatch ).toHaveBeenCalledWith(login(loginData))

    })



    test('startLoginWithEmailAndPassword debe de llamar a checkingCredentials y logout-Error' , async () =>{
        const loginData = { ok :false , errorMessage:'email or password is not found '  };

        const formData = {email:demoUser.email , password: 'chan123'};

        await loginWithEmailAndPassword.mockResolvedValue(loginData);

        await startLoginWithEmailAndPassword(formData)(dispatch);

        expect( dispatch ).toHaveBeenCalledWith(checkingCredentials())

        expect( dispatch ).toHaveBeenCalledWith(logout( loginData ))

    })

    test('startLogout debe de llamar logoutFirebase , clearNotesLogout , logout' , async () =>{

        await startLogout()(dispatch);

        expect(logoutFirebase).toHaveBeenCalled();
        expect(dispatch).toHaveBeenCalledWith(clearNotesLogout());
        expect(dispatch).toHaveBeenCalledWith(logout());

    })

})