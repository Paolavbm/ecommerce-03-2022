import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { listProductsAsync } from '../redux/actions/actionProducts'
import AgregarProducto from './AgregarProducto'
import Header from './Header'
import "../styles/styles.css"
import ReactImageMagnify from 'react-image-magnify'
import Footer from './Footer'
import { addToCarAsync } from '../redux/actions/actionCarrito'


const DetalleProducto = () => {
  const { products } = useSelector((store) => store.product)
  const { product } = useParams()
  const currentOne = products.find((p) => p.codigo === Number(product))
  const [mostrarImg, setMostrarImg] = useState(currentOne.image1)


  const similarProducts = products.filter((p) => p.categoria === currentOne.categoria)
  
  
  const dispatch = useDispatch();

  const addCar = () => {
    
      const selected = {
          codigo: currentOne.codigo,
          name: currentOne.name,
          precio: currentOne.precio,
          image: currentOne.image1,
          cant: 1
      }

      dispatch(addToCarAsync(selected))
      console.log(selected)
  }




  console.log(similarProducts)
  return (
    <div>
      <Header />
      <div className='cont-detalle'>

        <div className='contImgDetalle'>

          <div className='ind-product' onClick={() => setMostrarImg(currentOne.image1)}>
            <img width={60} height={100} src={currentOne.image1} alt='img1' />

          </div>
          <div onClick={() => setMostrarImg(currentOne.image2)}>
            <img width={60} height={100} src={currentOne.image2} alt='img2' />
          </div>
          <div onClick={() => setMostrarImg(currentOne.image3)}>
            <img width={60} height={100} src={currentOne.image3} alt='img3' />
          </div>
        </div>

        <div className='cont-img-principal'>
          <ReactImageMagnify {...{
            smallImage: {
              alt: 'Wristwatch by Ted Baker London',

              src: mostrarImg,
              height: 500,
              width: 500,
              className: "imgP"
            },
            largeImage: {
              src: mostrarImg,
              width: 1200,
              height: 1800,
              className: "imgP"
            }
          }} />
        </div>

        <div className='info'>

          <h4><b>{currentOne.name}</b></h4>
          <span className='marca'>Marca: {currentOne.marca}</span>
          <hr />
          <span className='precio'>Precio:</span> <span className='precio-cant'> ${currentOne.precio}</span> <span className='envio'>Envio GRATIS</span> <span className='detalles'>Detalles</span>
          <p className='intereses'>Hasta <b>18 meses sin intereses</b> <span className='mensualidades'>Ver mensualidades</span></p>
          <p className='tarjeta'><span className='blue'>Solicita tu tarjeta de amazon recargable </span> y obtén $100 de descuento en tu primera compra mayor a $550</p>
          <h5 className='precio-negro'>Precio: <span className='negro'>Negro </span></h5>


          <h5 className='about'>Acerca de este artículo</h5>
          <p className='info-about'>{currentOne.descripcion}</p>
        </div>

        <div>
          <div className='comprar'>
            <h5 className='precio-p'> ${currentOne.precio}</h5>
            <span className='envio-gratis'>Envio GRATIS. </span> <span className='detalles-car'>Detalles</span><br />
            <span className='llega'>Llega: <span className='fecha'>dic 15-28</span></span><br />
            <span className='navidad'>Puede que lo recibas después de navidad</span><br />
            <button className='btn-carrito' onClick={addCar} ><img className='carrito-foto' src='https://res.cloudinary.com/paolavbm/image/upload/v1647112247/Spring3-proyecto/shopping-cart_z7k9ks.png' alt='' />Agregar al carrito</button>
            <button className='btn-comprar-ahora'><img src='https://res.cloudinary.com/paolavbm/image/upload/v1647112363/Spring3-proyecto/play_hwboz8.png' alt='' />Comprar ahora</button>
            <div className='transaccion'>
              <span>Transacción segura</span>
            </div>
          </div>
        </div>


      </div>
      <div className='similar-cont'>
        <h2>Productos relacionados con este articulo</h2>
        <div className='similar'>
          {
            similarProducts.map((e, i) => (
              <div key={i} className='' >
                <div className='card'>
                  <div className='img' ><img src={e.image1} width={200} height={200} /> </div>
                  <Link className="aja" to={"/detalle/" + e.codigo}>
                    <h5>{e.name}</h5></Link>
                  <span>${e.precio}</span>
                </div>
              </div>
            ))
          }
        </div>
      </div>


      <div className='similar-cont'>
        <h2>Basados en tu historial de búsqueda</h2>
        <div className='similar'>
          {
            similarProducts.map((e, i) => (
              <div key={i} className='' >
                <div className='card'>
                  <div className='img' ><img src={e.image1} width={200} height={200} /> </div>
                  <Link className="aja" to={"/detalle/" + e.codigo}>
                    <h5>{e.name}</h5></Link>
                  <span>${e.precio}</span>
                </div>
              </div>
            ))
          }
        </div>
      </div>

      <div>


        <div className='comentario'>
          <h2 >Opiniones de clientes</h2>
          <div className='encabezado-coment'>
            <img src='https://res.cloudinary.com/paolavbm/image/upload/v1647128794/Ellipse_15_ijeadr.png' alt='' />
            <h5>Amazon Customer</h5>
          </div>
          <p>Electronic view finder is supposed to be the best, but from 5 minutes of playing with the camera, EVF is very disappointing - despite 120Hz refresh rate, the image is very choppy and laggy, almost like watching a retro video game - nauseating. That, and the build quality compared to 5D Mark III feels very cheap - too much plastic. There are some good features though, like auto-focus, high quality video, etc.</p>

          <p> UPDATE: The EVF appears to be definitely glitchy. Stuttering aside, 2-3 times, when it was supposed to turn on by face proximity, it flashed a white thick line on its upper edge, and then remained dark. Maybe I got a defective unit.</p>
          <p className='p'>A 45 personas les resultó útil</p>
          <p className='p'>  Informar de un abuso</p>
        </div>


        <div className='comentario'>
         
          <div className='encabezado-coment'>
            <img src='https://res.cloudinary.com/paolavbm/image/upload/v1647128789/Ellipse_15_1_y78slu.png' alt='' />
            <h5>Amazon Customer</h5>
          </div>
          <p>Long-time Canon DSLR user finally made the switch to mirrorless and now won't look back. Amazing piece of technology - focus system and low-light performance are astounding. Love that I can use my EF lenses with adapter and 24-105 f4 L "kit lens" is a worthy successor to its EF counterpart.

            My biggest quandary, like many, was whether I needed the extra pixels of the R5. Coming from a 20 MP original Canon 6D I'm comfortable with this sensor size. For my uses hits the sweet spot between image quality and speed/disk space. For birds-in-flight I do miss the extra crop room, but have a hard time justifying the extra $1,500 just for that.</p>
            <p className='p'>A 45 personas les resultó útil</p>
          <p className='p'>  Informar de un abuso</p>
        </div>



      </div>


<Footer/>
    </div>
  )
}

export default DetalleProducto