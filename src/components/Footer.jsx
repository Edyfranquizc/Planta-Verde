import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaTiktok,FaYoutube  } from 'react-icons/fa';
import '../css/Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
        <div className="container footer-container">
            <div className="footer-section">
            <h1 className="heading-logo">
                Planta<span>Verde</span>
            </h1>
            <p className="footer-text">
                Tu tienda especializada en plantas de interior y exterior.
                Asesoramiento experto para el cuidado de tus plantas.
            </p>
            <div className="social-links">
                <a href="#" className="social-link">
                <FaFacebook size={21} />
                </a>
                <a href="#" className="social-link">
                <FaInstagram size={21} />
                </a>
                <a href="#" className="social-link">
                <FaTiktok size={21} />
                </a>
                <a href="#" className="social-link">
                <FaYoutube  size={21} />
                </a>
            </div>
            <br />
                <img src="/assets/medios-de-pagos-img.avif" alt="medios de pago" />
            </div>

            <div className="footer-section">
            <h3 className="footer-heading">Enlaces Rápidos</h3>
            <ul className="footer-links">
                <li><Link to="/">Inicio</Link></li>
                <li><Link to="/Cuidados">Catálogo</Link></li>
                <li><Link to="/SobreNosotros">Sobre Nosotros</Link></li>
                <li><Link to="/Cuidados">Plantas</Link></li>
                <li><Link to="/Contacto">Contacto</Link></li>
            </ul>
            </div>

            <div className="footer-section">
            <h3 className="footer-heading">Categorías</h3>
            <ul className="footer-links">
                <li><Link to="/categoria/interior">Plantas de Interior</Link></li>
                <li><Link to="/categoria/exterior">Plantas de Exterior</Link></li>
                <li><Link to="/categoria/suculentas">Suculentas</Link></li>
                <li><Link to="/categoria/macetas">Macetas</Link></li>
                <li><Link to="/categoria/accesorios">Accesorios</Link></li>
            </ul>
            </div>

            <div className="footer-section">
            <h3 className="footer-heading">Contacto</h3>
            <address className="contact-info">
                <p><i className="icon-location"></i> Av. de las Plantas 123</p>
                <p><i className="icon-phone"></i> (+54) 911 345 678</p>
                <p><i className="icon-mail"></i> info@plantaverde.com</p>
            </address>
            <form className="newsletter-form">
                <input
                type="email"
                placeholder="Tu correo electrónico"
                className="newsletter-input"
                />
                <button type="submit" className="newsletter-button">
                Suscribirse
                </button>
            </form>
            </div>
        </div>

        <div className="footer-bottom">
            <div className="container">
            <p className="copyright">
                &copy; {new Date().getFullYear()} PlantaVerde, diseño por Edygar Franquiz. Todos los derechos reservados.
            </p>
            <div className="footer-legal">
                <Link to="/privacidad">Política de Privacidad</Link>
                <Link to="/terminos">Términos y Condiciones</Link>
            </div>
            </div>
        </div>
        </footer>
    );
};

export default Footer;
