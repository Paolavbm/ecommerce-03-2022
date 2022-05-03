import { typesCarrito, typesProducts } from "../types/types"



const initialState = {
    products: [],
    search: []
}




export const productsReducer = (state = initialState, action) => {
    switch (action.type) {
        case typesProducts.agregar:
            return {
                products: [action.payload]
            }
        case typesProducts.list:
            return {
                products: [...action.payload]
            }

        case typesProducts.search:
            return {
                ...state,
               search:[...action.payload]
            }
        // case typesProducts.delete:
        //     return {
        //         productos: state.productos.filter(emp => emp.correo !== action.payload)
        //     }
        default:
            return state;
    }
}

