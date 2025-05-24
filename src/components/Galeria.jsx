import React from 'react';
import { Link } from 'react-router-dom';  
import '../css/Galeria.css';


const Galeria = () => {
    return (
        
        <section className="galeria-section">
        <div className="galeria-hero">
            <div className="container">
            <div className="hero-content">
                <h1 className="hero-title">Naturaleza en tu hogar</h1>
                <p className="hero-subtitle">Descubre nuestra colección de plantas que transformarán tu espacio</p>
                <div className="hero-buttons">
                <Link to='/productos' className="btn btn-light">Ver Catálogo</Link>
                <Link to='/sobrenosotros'className="btn btn-outline">Sobre Nosotros</Link>
                </div>
            </div>
            </div>
        </div>
        
        <div className="container">
            <div className="categorias-grid">
            <div className="categoria-card grande">
                <div className="categoria-imagen">
                <img src="/assets/calathea-orbifolia.png" alt="Plantas de Interior" />
                </div>
                <div className="categoria-info">
                <h3>Plantas de Interior</h3>
                <p>Perfectas para dar vida a cualquier espacio de tu hogar</p>
                <Link to='/categoria/interior' className="btn btn-outline">
                Explorar <i className="icon-arrow-right"></i>
                </Link>
                </div>
            </div>
            
            <div className="categoria-card">
                <div className="categoria-imagen">
                <img src="/assets/salvia.png" alt="Plantas de Exterior" />
                </div>
                <div className="categoria-info">
                <h3>Plantas de Exterior</h3>
                <Link to='/categoria/exterior' className="btn btn-outline">
                Explorar <i className="icon-arrow-right"></i>
                </Link>
                </div>
            </div>
            
            <div className="categoria-card">
                <div className="categoria-imagen">
                <img src="/assets/suculenta-echeveria.png" alt="Suculentas" />
                </div>
                <div className="categoria-info">
                <h3>Suculentas</h3>
                <Link to='/categoria/suculentas' className="btn btn-outline">
                Explorar <i className="icon-arrow-right"></i>
                </Link>
                </div>
            </div>
            
            <div className="categoria-card">
                <div className="categoria-imagen">
                <img src="/public/assets/lavanda.png" alt="Aromáticas" />
                </div>
                <div className="categoria-info">
                <h3>Aromáticas</h3>
                <Link to="/aromaticas" className="btn btn-primary">Explorar <i className="icon-arrow-right"></i></Link>
                </div>
            </div>
            
            <div className="categoria-card">
                <div className="categoria-imagen">
                <img src="/assets/categorias/accesorios.jpg" alt="Accesorios" />
                </div>
                <div className="categoria-info">
                <h3>Accesorios</h3>
                <a href="#" className="categoria-link">Explorar <i className="icon-arrow-right"></i></a>
                </div>
            </div>
            </div>
            
            <div className="banner-section">
            <div className="banner">
                <div className="banner-content">
                <h2 className="banner-title">Envío gratuito en pedidos superiores a 60.000 pesos</h2>
                <p className="banner-text">En toda la península. ¡Haz tu pedido ahora!</p>
            <Link to='/productos' className="btn btn-light">Comprar Ahora</Link>
                </div>
            </div>
            </div>
        </div>
        </section>
    );
    };

export default Galeria;