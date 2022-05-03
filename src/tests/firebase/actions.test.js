// import { async } from '@firebase/util'
// import configureStore from 'redux-mock-store' 
// import thunk from 'redux-thunk'

// import { aggProductsAsync } from '../../redux/actions/actionProducts'
// const middlewares = [thunk] 

// const mockStore = configureStore(middlewares)

// const initState = {
//     login:{
//         id: 'TESTING'
//     }
// }
// let store = mockStore(initState)


// describe('Pruebas con las acciones Productos', ()=>{
//     beforeEach(()=>{
//         store = mockStore(initState)
//     })

//     test('Agregar productos', async() =>{
//         await store.dispatch(aggProductsAsync({
//             codigo: "12345",
//             name: "12345",
//             categoria: "12345",
//             descripcion: "12345",
//             marca: "12345",
//             precio: "12345",
//             image1: "12345",
//             image2: "12345",
//             image3: "12345",
//         }))

        
//     })
//     const actions = store.getActions();
// })