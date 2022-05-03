import '@testing-library/jest-dom'
import { loginReducer } from '../../redux/reducers/loginReducer'
import { types } from '../../redux/types/types'


describe('Pruebas en LoginReducer', () => {

    test('debe de realizar el login', () => {
        const initState = {};
        const action = {
            type: types.login,
            payload:{
                id: 'abc',
                displayname: 'Paola'

            }
        };
        const state = loginReducer(initState, action);
        expect(state).toEqual({
            id: 'abc',
            name: 'Paola'
        })
    })

    test('Cerrar sesión - logout', () => {
        const initState = {
            id: 'abc',
            name: 'Paola'
        };
        const action = {
            type: types.logout,
           
        };
        const state = loginReducer(initState, action);
        expect(state).toEqual({})
    })

    test('State por default', () => {
        const initState = {
            id: 'abc',
            name: 'Paola'
        };
        const action = {
            type: types.Hola,
           
        };
        const state = loginReducer(initState, action);
        expect(state).toEqual(initState)
    })
})

