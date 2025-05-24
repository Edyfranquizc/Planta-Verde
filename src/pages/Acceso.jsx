import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import "../css/Acceso.css";

const Acceso = () => {
    const { login } = useAuth();
    const navigate = useNavigate();
    const [nombre, setNombre] = useState("");
    const [password, setPassword] = useState("");
    const [mostrarPassword, setMostrarPassword] = useState(false);
    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validación del nombre: solo letras y símbolos especiales, sin números
        const regexNombre = /^[A-Za-z!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?áéíóúüñÁÉÍÓÚÜÑ\s]+$/;

        if (!regexNombre.test(nombre)) {
            setError("El nombre solo debe contener letras y/o caracteres especiales, sin números.");
            return;
        }

        if (password !== "1234") {
            setError("Contraseña incorrecta");
            return;
        }

        login({ nombre });
        navigate("/admin");
    };

    return (
        <div className="login-container">
            <form className="login-form" onSubmit={handleSubmit}>
                <h2 className="login-title">Iniciar sesión</h2>

                <input
                    type="text"
                    placeholder="Nombre de usuario"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                    required
                />

                <div className="password-container">
                    <input
                        type={mostrarPassword ? "text" : "password"}
                        placeholder="Contraseña"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <span
                        className="toggle-password"
                        onClick={() => setMostrarPassword(!mostrarPassword)}
                    >
                        {mostrarPassword ? <FaEye /> : <FaEyeSlash /> }
                    </span>
                </div>

                {error && <p className="login-error">{error}</p>}

                <button type="submit" className="login-button">
                    Entrar
                </button>
            </form>
        </div>
    );
};

export default Acceso;

