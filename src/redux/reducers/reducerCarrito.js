import { typesCarrito } from "../types/types";

const initialState = {
    productsCar: [],

}



export const carritoReducer = (state = initialState, action) => {
    switch (action.type) {
        case typesCarrito.añadir:
            return {
                productsCar: [action.payload]
            }
        case typesCarrito.listar:
            return {
                productsCar: [...action.payload]
            }
        case typesCarrito.editar:
            return {
               ...state,
            }

            case typesCarrito.remover:
                return {
                   productsCar: state.productsCar.filter((p) => p.codigo !== action.payload),
                };
       
        default:
            return state;
    }
}

