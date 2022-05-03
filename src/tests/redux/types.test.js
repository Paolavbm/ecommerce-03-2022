import '@testing-library/jest-dom'
import { types } from '../../redux/types/types'

describe('Verificar types', () => {
    test('comparar objetos', () => {
        expect(types).toEqual({
            login: 'login',
            logout: 'logout',
            register: 'register'
        })
    })
})