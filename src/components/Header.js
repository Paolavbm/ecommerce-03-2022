import React, { useEffect, useState } from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import "../styles/styles.css"
import logoAmazon from "../assets/images/logo-amazon.svg"
import { useDispatch, useSelector } from 'react-redux'
import { listProductsAsync, searchAsyn } from '../redux/actions/actionProducts'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'
import * as Yup from 'yup';
import { listCarritoAsync } from '../redux/actions/actionCarrito'
import { ClickAwayListener } from '@mui/material'
import { Box } from '@mui/system'
import { logoutAsync } from '../redux/actions/actions'

const Header = () => {
 
    const dispatch = useDispatch();

    const user = useSelector((store) => store.login);
   
    const [usuario, setUsuario] = useState("identificate");
    const [alertToLogin, setAlertToLogin] = useState("go-login");
    const [logout, setLogout] = useState("hidden");
 
    const formik = useFormik({
        initialValues:{
            search: ''
        },
        validationSchema: Yup.object({
          search: Yup.string().required()
        }),
        onSubmit: ({search}) => {
            dispatch(searchAsyn(search))
        
        }
    })


    const [open, setOpen] = useState(false);

   const handleClick = () => {
      setOpen((prev) => !prev);
   };

   const handleClickAway = () => {
      setOpen(false);
   };


   const styles = {
    position: "absolute",
    top: 30,
    right: 0,
    left: -110,
    zIndex: 1,
    width: "350px",
    border: "1px solid lightgray",
    borderRadius: "15px",
    color: "black",
    p: 1,
   
    bgcolor: "white",
 };

 
 const handleLogout = () => {
    dispatch(logoutAsync());
 };

 useEffect(() => {

    dispatch(listProductsAsync())
    dispatch(listCarritoAsync())


    const verificarUsuario = () => {
        if (Object.keys(user).length !== 0) {
           setUsuario(user.name);
           setAlertToLogin("hidden");
           setLogout("go-login");
        } else {
           setUsuario("Identificate");
           setAlertToLogin("go-login");
           setLogout("hidden");
        }
     };
     verificarUsuario();
}, [user])



 

    return (
        <div>
            <Navbar collapseOnSelect expand="lg" className='nav' variant="dark">
                <Container fluid>
                    <Navbar.Brand href="#home"><img src="https://res.cloudinary.com/paolavbm/image/upload/v1646921394/Spring3-proyecto/logo-amazon_uvt00l.png" alt='logoamazonia' /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link className='white' ><span className='spi white'>Hola</span><img src='https://res.cloudinary.com/paolavbm/image/upload/v1646920488/Spring3-proyecto/icon/gps_ntpqxk.svg' alt='gps' />Elige tu dirección</Nav.Link>

                            <Nav.Link href="#deets">

                                <div className="header__search">
                                    <select name="select">
                                    <option default>Todos los departamentos</option>
                                        <option>Electronicos</option>
                                        <option>Hogar</option>
                                        <option>Belleza</option>

                                    </select>
                                    

                                    <form onSubmit={formik.handleSubmit} className="buscador">
                                        <div>
                                    <input className="header__searchInput" type="text" autoComplete='off' name="search"  onChange={formik.handleChange}  />
                                    </div>
                                  <div className='jeje'><img className='header__searchIcon' type="submit" src='https://res.cloudinary.com/paolavbm/image/upload/v1646929999/Spring3-proyecto/icon/search_wtwe2f.svg'/></div>
                                  </form>
                                </div>
                                


                            </Nav.Link>



                           {/* <Nav.Link > <Link to="/agregar" className='white'><span className='spi white'>Hola, identificate</span>
                                <select id='cuentas'>
                                    <option>Cuentas y listas</option>
                                </select></Link></Nav.Link> 
 */}

 
<ClickAwayListener onClickAway={handleClickAway}>
               <Box sx={{ position: "relative" }}>
                  <div onClick={handleClick}>
                     <span className='spi white bobx'>Hola, {usuario}</span>
                     <select id='cuentas'>
                                    <option>Cuentas y listas</option>
                                </select>
                  </div>
                  {open ? (
                     <Box sx={styles}>
                        <div className={alertToLogin}>
                           <Link to="/login">
                              <button className='identificate'>Identificate</button>
                           </Link>

                           <p>
                              Eres un cliente nuevo? <Link to="/registro">Registrate</Link>
                           </p>
                        </div>

                        <div className={logout}>
                           <button className="handleLogout" onClick={handleLogout}>Salir</button>
                        </div>
                     </Box>
                  ) : null}
               </Box>
            </ClickAwayListener>

                           
                                <Nav.Link ><Link to="/agregar" className='white' > <span className='spia'>Devoluciones</span><p className='white'> Pedidos </p> </Link></Nav.Link>

                    <Link to="/carrito">  <div className='car'>  <Nav.Link href="#features"><img src='https://res.cloudinary.com/paolavbm/image/upload/v1646920576/Spring3-proyecto/icon/ico/shopping-cart_n2e7sd.svg' alt='carrito' /><span className=''>Carrito</span></Nav.Link></div> </Link> 
                        </Nav>





                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <Nav id='tabs'
                activeKey="/home"
                onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
            >
                <Nav.Item>
                    <Nav.Link className='white'><img src="https://res.cloudinary.com/paolavbm/image/upload/v1646936896/Spring3-proyecto/menu_vw5uu4.svg" alt='' /><span>Todo</span></Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link className='white' eventKey="link-1">Tarjeta de regalo</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link className='white' eventKey="link-2">Prime</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link className='white'>
                        Los más vendidos
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link className='white'>
                        AmazonBasics
                    </Nav.Link>
                </Nav.Item>

                <Nav.Item>
                    <Nav.Link className='white'>
                        Cómputo y tabletas
                    </Nav.Link>
                </Nav.Item>

                <Nav.Item>
                    <Nav.Link className='white' onClick={handleLogout}>
                        Los más Regalados
                    </Nav.Link>
                </Nav.Item>
            </Nav>
        </div>
    )
}

export default Header