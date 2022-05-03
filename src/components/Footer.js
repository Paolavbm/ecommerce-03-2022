import React from 'react'
import { DivFooter, DivContCol, DivCols } from '../styles/styled'
import "../styles/styles.css"
const Footer = () => {
    return (
        <DivFooter>

            <DivContCol>


                <DivCols>
                    <h6>Conócenos</h6>
                    <p>Trabajar en Amazon</p>
                    <p>Información corporativa</p>
                    <p>Departamento de prensa</p>
                </DivCols>

            <DivCols>
                <h6>Gana dinero con nosotros</h6>
                <p>Vender en Amazon</p>
                <p>Vender en Amazon Handmade</p>
                <p>Pública tu libro en Kindle</p>
                <p>Programa de afiliados</p>
                <p>Anuncia tús productos</p>
            </DivCols>


            <DivCols>
                <h6>Podemos ayudarte</h6>
                <p>Amazon y COVID-19</p>
                <p>Devolver o reemplazar productos</p>
                <p>Gestionar contenido y dispositivos</p>
                <p>Ayuda</p>
            </DivCols>


            <DivCols>
                <h6>Metódos de pago</h6>
                <p>Tarjetas de crédito y débito</p>
                <p>Tarjetas de regalo</p>
                <p>Meses sin intereses</p>
                <p>Amazon Cash</p>
                <p>Amazon Recargable</p>
            </DivCols>
 
 

            </DivContCol>


<div className='divlogo'>
<img className="imgFooter" src='https://res.cloudinary.com/paolavbm/image/upload/v1646940750/Spring3-proyecto/logo-amazon_1_u4zu6d.png' alt=''/>
</div>

         
        </DivFooter>
    )
}

export default Footer