import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";

const RutaProtegida = ({ children }) => {
    const { usuario } = useAuth();

    if (!usuario) {
        return <Navigate to="/Acceso" replace />;
    }

    return children;
};

export default RutaProtegida;
