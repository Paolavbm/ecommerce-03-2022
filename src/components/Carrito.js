import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { editarCarritoASync, listCarritoAsync, removeCarritoASyn } from '../redux/actions/actionCarrito'
import Header from './Header'
import "../styles/styles.scss"
const Carrito = () => {

  const { productsCar } = useSelector((store) => store.carrito)
  const { products } = useSelector((store) => store.product)

  const [total, setTotal] = useState("")
  const dispatch = useDispatch();
  console.log(productsCar)
  console.log(products)


  const sumar = (element) => {
    const [producFilter] = products.filter((p) => p.codigo === element.codigo)
    const precioEntrada = Number(producFilter.precio).toFixed(2)

    const cantidadModificada = element;
    console.log(cantidadModificada.cant)
    cantidadModificada.cant = cantidadModificada.cant + 1;
    cantidadModificada.precio = precioEntrada * cantidadModificada.cant
    console.log(producFilter)
    dispatch(editarCarritoASync(cantidadModificada.codigo, cantidadModificada))
  }

  const disminuir = (element) => {
    const [producFilter] = products.filter((p) => p.codigo === element.codigo)
    const precioEntrada = Number(producFilter.precio)

    const cantidadModificada = element;

    if
      (cantidadModificada.cant > 1) {
      cantidadModificada.cant = cantidadModificada.cant - 1
      cantidadModificada.precio = precioEntrada * cantidadModificada.cant
    }

    dispatch(editarCarritoASync(cantidadModificada.codigo, cantidadModificada))
  }

  const totalAPagar = () => {
    let i = 0;

    productsCar.forEach((item) => {
      i = Number(i) + Number(item.precio);
    });

    setTotal(i);
  };

  useEffect(() => {
    dispatch(listCarritoAsync());
    totalAPagar();

  }, [sumar, disminuir]);

  console.log(total)
  return (
    <div>
      <Header />

      {
        productsCar.map((e, i) => (
          <div key={i} className='carrito' >
            <div className='tablita'>
              <div className='img' ><img src={e.image} width={200} height={200} /> </div>
              <h5 className='name'>{e.name}</h5>
              <div className='flex'>
              
                  <button className='cuenta' onClick={() => disminuir(e)} >-</button> <span className='jux'>{e.cant}</span><button className='suma' onClick={() => sumar(e)}>+</button>
              

                <span>${e.precio}</span>


                <div><button className='delete' onClick={(event) => {
                  event.preventDefault();
                  dispatch(removeCarritoASyn(e.codigo));
                }}>Delete</button></div>
              </div>
            </div>
          </div>
        ))
      }
      <div className='pagar'>
        <hr />
        <h4>Total a pagar:</h4> <span>${total}</span><br />
        <button className='btn-pagar' >Pagar</button>
      </div>


    </div>
  )
}

export default Carrito