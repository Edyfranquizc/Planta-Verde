// src/pages/NotFound.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import cactusImg from '../assets/imagen404.png'; 

const NotFound = () => (
    <div style={{ textAlign: 'center', padding: '100px' }}>
        <img
        src={cactusImg}
        alt="Cactus 404"
        style={{ maxWidth: '400px', width: '90%', marginBottom: '2rem' }}
        />
        <h1 style={{ fontSize: '2.5rem', color: 'var(--color-primary)' }}>Oops! 404</h1>
        <p style={{ fontSize: '1.2rem', color: 'var(--color-secondary)', marginBottom: '1.5rem' }}>
        Página no encontrada.
        </p>
        <Link
        to="/"
        style={{
            backgroundColor: 'var(--color-primary)',
            color: 'var( --color-light)',
            padding: '0.75rem 1.5rem',
            borderRadius: 'var(--border-radius)',
            textDecoration: 'none',
            transition: 'background-color 0.3s',
        }}
        >
        Volver al inicio
        </Link>
    </div>
);

export default NotFound;
