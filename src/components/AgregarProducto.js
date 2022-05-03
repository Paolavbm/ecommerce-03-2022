import { useFormik } from 'formik';
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { fileUpload } from '../helpers/FileUpload';
import { aggProductsAsync, listProductsAsync } from '../redux/actions/actionProducts'
;
import {DivInicio, SubDiv3, ButtonInicio } from '../styles/styled'
import "../styles/styles.css"
const AgregarProducto = () => {
    const dispatch = useDispatch();
    
   
     const formik = useFormik({
        initialValues: {
            codigo: Date.now(),
            name: "",
            categoria: "",
            descripcion: "",
            marca: "",
            precio: "",
            image1: "",
            image2: "",
            image3: "",
        },
        onSubmit: (data) => {
            dispatch(aggProductsAsync(data))
        },


        

    })

    const handleFileChanged = (e) => {
        const file = e.target.files[0];
        fileUpload(file)
            .then(response => {
                formik.initialValues.image1 = response
                console.log(response);
            })
            .catch(error => {
                console.log(error.message);
            })
    }


    const handleFileChanged2 = (e) => {
        const file = e.target.files[0];
        fileUpload(file)
            .then(response => {
                formik.initialValues.image2 = response
                console.log(response);
            })
            .catch(error => {
                console.log(error.message);
            })
    }


    const handleFileChanged3 = (e) => {
        const file = e.target.files[0];
        fileUpload(file)
            .then(response => {
                formik.initialValues.image3 = response
                console.log(response);
            })
            .catch(error => {
                console.log(error.message);
            })
    }



  return (


    <div>
    <DivInicio>
   <img src='https://res.cloudinary.com/paolavbm/image/upload/v1646944163/Spring3-proyecto/logo-amazon_2_uxvst1.png' alt=''/>
<SubDiv3>
<h3>Incluir Producto</h3>

<form onSubmit={formik.handleSubmit} className="form">

<label for="nombre">Nombre</label>
<input className="correo" name='name' onChange={formik.handleChange}/>

<select id='categorias' name='categoria' onChange={formik.handleChange}>
<option value="" disabled selected hidden>Seleccione una categoria</option>
<option value="electronicos">Electronicos</option>
<option value="hogar">Hogar</option>
<option value="belleza">Belleza</option>
<option value="artesanias">Artesanias</option>
<option value="modas">Moda</option>

</select >
<label >Marca</label>
<input  className="correo" name='marca' onChange={formik.handleChange}/>


<label for="precio"> Precio</label>
<input  className="correo" name='precio' onChange={formik.handleChange}/>

<label for="descripcion">Descripción</label>
<input  className="correo" name='descripcion' onChange={formik.handleChange}/>

<div className='file'>
<label  className='file'  for="image1">Image1</label>
<input className='file' type="file" name='image1' onChange={handleFileChanged}/>
</div>

<div className='file'>
<label for="image2">Image2</label>
<input  type="file" name='image2' onChange={handleFileChanged2}/>
</div>

<div className='file'>
<label for="image3">Image3</label>
<input type="file" name='image3' onChange={handleFileChanged3}/>
</div>
<ButtonInicio type="submit" >Agregar</ButtonInicio>


</form>


</SubDiv3>

</DivInicio>
</div>
  )
}

export default AgregarProducto