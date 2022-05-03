import { addDoc, collection, deleteDoc, doc, getDocs, query, updateDoc, where } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";
import { typesCarrito } from "../types/types";



export const addToCarAsync = (selected) => {



        return async (dispatch) => {
            addDoc(collection(db,"carrito"), selected)
            .then(resp => {
                dispatch(addToCarSync(selected))
                // dispatch(listProductsAsync())
                
            })
            .catch(error => {
                console.log(error);
            })
    }
 }

 export const addToCarSync = (selected) => {
    return{

        type: typesCarrito.añadir,
        payload: selected
    }

}

 export const listCarritoSync = (selected) => {
    return {
        type: typesCarrito.listar,
        payload: selected
    }
}

export const listCarritoAsync = () => {
    return async (dispatch) => {

        const querySnapshot = await getDocs(collection(db, "carrito"));
        const selected= [];
        querySnapshot.forEach((doc) => {
            selected.push({
                ...doc.data()
            })
        });
        dispatch(listCarritoSync(selected));
    }
}

export const editarCarritoASync = (codigo, producto) =>{
    return async(dispatch) => {
        const traerColection = collection(db,"carrito");
        const q = query(traerColection,where("codigo","==", codigo))
        const datos = await getDocs(q);
        let id;
        datos.forEach(async(docu) => {
            id = docu.id
        });
       const docRef = doc(db, "carrito", id)
       await updateDoc(docRef, producto).then(()=> listCarritoAsync)
    }
}


export const editarCarritoSync = (codigo, product) => {
    return {
        type: typesCarrito.editar,
        payload: product
    }
}


export const removeCarritoASyn = (codigo) => {
    return async (dispatch) => {
       const traerCollection = collection(db, "carrito");
       const q = query(traerCollection, where("codigo", "==", codigo));
       const datosQ = await getDocs(q);
       datosQ.forEach((docu) => {
          deleteDoc(doc(db, "carrito", docu.id));
       });
       dispatch(removeCarritoSyn(codigo));
    };
 };
export const removeCarritoSyn = (codigo) => {
    return {
       type: typesCarrito.remover,
       payload: codigo,
    };
 };

 



 