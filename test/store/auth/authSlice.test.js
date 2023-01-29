import { authSlice } from '../../../src/store/auth/authSlice';
import { initialState } from '../../fixtures/authFixtures';

describe('pruebas sobre authSlice', () => { 

    test('debe de regresar el estado inicial y debe de tener por nombre "auth" ', () => { 
        
        // obtener y configurar el estado inicial 
        const state = authSlice.reducer(initialState , {})

        expect(authSlice.name).toBe("auth");

        expect(state).toEqual(initialState);

        
    })

})