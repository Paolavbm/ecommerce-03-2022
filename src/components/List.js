import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link, useLocation } from 'react-router-dom'
import Header from './Header'
import "../styles/styles.css"


const List = () => {
  
 const location = useLocation()
    const {products} = useSelector((store)=> store.product)
    const [data, setData]= useState([])
   
    console.log(location.key)
  return (
    <div className='list'> 

        <Header/>
        <div className='cont-card'>
   
                    {
                        products.map((e, i) => (
                      <div key={i} className='' >
                    <div className='card'>
                    <div className='img' ><img src={e.image1} width={200} height={200}/> </div>
                    <Link  className="aja" to={"/detalle/" + e.codigo}>
                    <h5>{e.name}</h5></Link>
                    <span>${e.precio}</span>

                    
                    </div>
                      </div>
                        ))
                    }
             </div>
    </div>
  )
}

export default List