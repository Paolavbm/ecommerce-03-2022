import React from 'react'
import { useDispatch } from 'react-redux'

import {DivInicio, SubDiv2, ButtonInicio } from '../styles/styled'
import "../styles/styles.css"
import * as Yup from "yup";
import { useFormik } from 'formik'

import { registroEmailPasswordNombre } from '../redux/actions/actionRegister'
const Registro = () => {
    const dispatch = useDispatch();

   const formik = useFormik({
      initialValues: {
         name: "",
         email: "",
         password1: "",
         password2: "",
      },
      validationSchema: Yup.object({
         name: Yup.string().required(),
         email: Yup.string().email().required(),
         password1: Yup.string().required(),
         password2: Yup.string().required(),
      }),
      onSubmit: (data) => {
         const { name, email, password1, password2 } = data;
         dispatch(registroEmailPasswordNombre(email, password1, name));
      },
   });
  return (
    <div>
         <DivInicio>
        <img src='https://res.cloudinary.com/paolavbm/image/upload/v1646944163/Spring3-proyecto/logo-amazon_2_uxvst1.png' alt=''/>
   <SubDiv2>
    <h3>Crea tu cuenta</h3>

    <form  onSubmit={formik.handleSubmit}>

    <label for="name">Tu nombre</label>
    <input  onChange={formik.handleChange} className="correo" name='name'/>
  

    <label for="email">Dirección de correo electrónico</label>
    <input  onChange={formik.handleChange} className="correo" name='email'/>
  

    <label for="password1">Contraseña</label>
    <input   onChange={formik.handleChange} type="password" className="password" name='password1' placeholder='Como mínimo 6 carácteres'/>

    <label for="password2">Vuelva a escribir contraseña</label>
    <input  onChange={formik.handleChange} type="password" className="password2" name='password2'/>


    <ButtonInicio type="submit" >Continuar</ButtonInicio>

    <span className='terminos'>Al continuar, aceptas las Condiciones de uso y el Aviso de privacidad de Amazonas.</span>
    </form>


   </SubDiv2>

<p className='Ya tienes'>¿Ya tienes cuenta?</p> 
<span className='chitito'>Iniciar sesión</span>
    </DivInicio>
    </div>
  )
}

export default Registro