// src/pages/Admin.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";

const Admin = () => {
    const { usuario, logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();               
        alert("Sesión cerrada correctamente");
        navigate("/");          
    };

    return (
        <div className="container">
            <h2>Panel de Administrador</h2>
            <p>Bienvenid(a), {usuario?.nombre}</p>
            
        </div>
    );
};

export default Admin;

