// src/components/Header.jsx
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCarrito } from '../Context/CarritoContext';
import { useAuth } from '../Context/AuthContext';
import { AiOutlineSearch, AiOutlineShoppingCart, AiOutlineUser, AiOutlineLogout } from "react-icons/ai";
import Navbar from "../components/Navbar";
import ModalConfirmacion from '../components/ModalConfirmacion'; 
import '../css/Header.css';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);

    const { carrito, toggleCarrito } = useCarrito(); 
    const { usuario, logout } = useAuth();
    const navigate = useNavigate();

    const toggleMenu = () => setMenuOpen(!menuOpen);

    const totalItems = carrito.reduce((acc, producto) => acc + producto.cantidad, 0);

    const confirmarLogout = () => {
        logout();
        setModalVisible(false);
        navigate("/");
    };

    return (
        <header className="header">
            <div className="container header-container">
                <div className="logo">
                    <Link to='/'><h1>Planta<span>Verde</span></h1></Link>
                </div>

                <button className="menu-toggle" onClick={toggleMenu}>
                    <span className={`hamburger ${menuOpen ? 'open' : ''}`}></span>
                </button>

                <Navbar menuOpen={menuOpen} />

                <div className="header-actions">
                    <button className="action-button"><AiOutlineSearch size={21} /></button>

                    {usuario ? (
                        <div className="user-logged">
                            <span className="user-name"><AiOutlineUser size={21} /> {usuario.nombre}</span>
                            <button
                                className="logout-button"
                                onClick={() => setModalVisible(true)}
                                title="Cerrar sesión"
                            >
                                <AiOutlineLogout size={21} />
                            </button>
                        </div>
                    ) : (
                        <Link to="/acceso" className="action-button">
                            <AiOutlineUser size={21} />
                        </Link>
                    )}

                    <button className="action-button cart-button" onClick={toggleCarrito}>
                        <AiOutlineShoppingCart size={21} />
                        <span className="cart-count">{totalItems}</span>
                    </button>
                </div>
            </div>

            {/* Modal de confirmación */}
            <ModalConfirmacion
                mostrar={modalVisible}
                titulo="¿Cerrar sesión?"
                mensaje="¡Un momento! ¿Seguro que querés salir? Tu jungla digital te va a extrañar."
                onCancelar={() => setModalVisible(false)}
                onConfirmar={confirmarLogout}
            />
        </header>
    );
};

export default Header;


