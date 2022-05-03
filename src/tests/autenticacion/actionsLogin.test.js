import '@testing-library/jest-dom'
import { loginSincrono, logoutSincrono } from '../../redux/actions/actions';

import { types } from '../../redux/types/types'

describe('Verificar acciones de Login', ()=>{
   test('Validar login sincrono', () =>{
       const id = '1234';
       const displayname = 'Paola';

       const loginAction = loginSincrono(id, displayname);
       expect(loginAction).toEqual({
           type: types.login,
           payload:{
               id,
               displayname
           }
       })
   })

   test('Cerrar sesión', () =>{
    const id = '1234';
    const displayname = 'Paola';

    const logoutAction = logoutSincrono();
    expect(logoutAction).toEqual({
        type: types.logout,
    })
})
})