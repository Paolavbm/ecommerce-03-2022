import { addDoc, collection, getDocs, query, where } from "firebase/firestore";
import { ContainerDimensions } from "react-image-magnify/dist/prop-types/EnlargedImage";
import { db } from "../../firebase/firebaseConfig";
import { typesCarrito, typesProducts } from "../types/types";

export const searchAsyn = (searchText) => {

    return async(dispatch) => {
       
        const productosCollections = collection(db, "products");
        const q = query(productosCollections, where("name","==", searchText))
        //   const q = query(productosCollections, where("name", 'array-contains', searchText))
        // const q = query(productosCollections, where("name", 'array-contains', [searchText]))
        // const q = query(productosCollections, where('name', '>=', searchText, '<',  searchText + 'z'))
        
        console.log(productosCollections)
        const datos = await getDocs(q);
       
        const products = [];
        datos.forEach((docu) => {
            products.push(docu.data())
        }) 
        
        dispatch(searchSync(products))
    }
}


export const searchSync = (products) => {
    return{
        type: typesProducts.search,
        payload: products
    }
}

export const listProductsAsync = () => {
    return async (dispatch) => {

        const querySnapshot = await getDocs(collection(db, "products"));
        const productos = [];
        querySnapshot.forEach((doc) => {
            productos.push({
                ...doc.data()
            })
        });
        dispatch(listSync(productos));
    }
}

export const listSync = (productos) => {
    return {
        type: typesProducts.list,
        payload: productos
    }
}


export const aggProductsAsync = (newProduct) => {

    return(dispatch) => {

        addDoc(collection(db,"products"), newProduct)
        .then(resp => {
            dispatch(aggProductSync(newProduct))
            dispatch(listProductsAsync())
            console.log(newProduct)
        })
        .catch(error => {
            console.log(error);
        })
    }
 }
export const aggProductSync = (products) => {
    return{
        type: typesProducts.agregar,
        payload: products
    }

}


