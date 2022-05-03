import { List } from '@mui/material';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import React, { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AgregarProducto from '../components/AgregarProducto';
import Carrito from '../components/Carrito';

import DetalleProducto from '../components/DetalleProducto';
import Header from '../components/Header';
import Inicio from '../components/Inicio';
import Registro from '../components/Registro';
import App from '../containers/App';
import PrivateRoutes from './PrivateRoutes';
import PublicRoutes from './PublicRoutes';
const AppRouter = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user?.uid) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
      setChecking(false);
    });
  }, []);
  if (checking) {
    return <h1>Espere...</h1>;
  }

  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route
            path="/login"
            element={
              <PublicRoutes isAuthenticated={isLoggedIn}>
                <Inicio/>
              </PublicRoutes>
            }
          />


          <Route
            path="/registro"
            element={
              <PublicRoutes isAuthenticated={isLoggedIn}>
                <Registro />
              </PublicRoutes>
            }
          />

          <Route
            path="/carrito"
            element={
              <PrivateRoutes isAuthenticated={isLoggedIn}>
                <Carrito />
              </PrivateRoutes>
            }
          />

          <Route path="/" element={<App />} />
          <Route path="/detalle/:product" element={<DetalleProducto />} />
          {/* <Route path="/carrito" element={<Carrito />} /> */}
          <Route path="/agregar" element={<AgregarProducto />} />
          {/* <Route path="/registro" element={<Registro/>}/> */}
          {/* <Route path="/login" element={<Inicio/>}/> */}
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default AppRouter