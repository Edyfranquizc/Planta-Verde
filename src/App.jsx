import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './pages/Header';
import Galeria from './components/Galeria';
import ListaProductos from './components/ListaProductos';
import FeatureTestimonio from './components/FeatureTestimonio';
import Footer from './components/Footer';
import DetalleProducto from './components/DetalleProducto';
import Carrito from './components/Carrito';
import SobreNosotros from './pages/SobreNosotros';
import ScrollToTop from "./components/ScrollToTop";
import WhatsappButton from './components/WhatsappButton';
import Admin from './pages/Admin';
import Acceso from './pages/Acceso'; 
import RutaProtegida from './components/RutaProtegida';

import './App.css';
import './css/ModalConfirmacion.css';
import NotFound from './pages/NotFound';

const App = () => {
  return (
    <>
      <ScrollToTop />
      <WhatsappButton />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Galeria />} />
          <Route path="/productos" element={<ListaProductos />} />
          <Route path="/categoria/:categoria" element={<ListaProductos />} />
          <Route path="/producto/:id" element={<DetalleProducto />} />
          <Route path="/sobrenosotros" element={<SobreNosotros />} />
          <Route path="/cuidados" element={<NotFound />} />
          <Route path="/contacto" element={<NotFound />} />

          {/* Nueva ruta pública para acceso */}
          <Route path="/acceso" element={<Acceso />} />

          {/* Ruta protegida */}
          <Route
            path="/admin"
            element={
              <RutaProtegida>
                <Admin />
              </RutaProtegida>
            }
          />

          {/* rutas no existentes */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <FeatureTestimonio />
      <Footer />
      <Carrito />
    </>
  );
};

export default App;


