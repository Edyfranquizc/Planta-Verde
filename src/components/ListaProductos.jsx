import React, { useEffect, useState, useContext, useCallback } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { CarritoContext } from "../Context/CarritoContext.jsx";
import { IoMdHeartEmpty } from "react-icons/io";
import { AiOutlineShoppingCart, AiOutlineLike } from "react-icons/ai";
import { PiPottedPlant } from "react-icons/pi";
import '../css/ListaProductos.css';

const Estrellas = ({ puntuacion }) => {
  const estrellas = Math.round(puntuacion);
  return (
    <div className="estrellas">
      {'★'.repeat(estrellas)}{'☆'.repeat(5 - estrellas)}
    </div>
  );
};

const ProductoCard = ({
  producto,
  handleAgregarAlCarrito,
  handleVerDetalle,
  productoAgregadoId,
  handleAgregarFavorito
}) => {
  const esAgregado = productoAgregadoId === producto.id;

  return (
    <div className="producto-card" key={producto.id}>
      {producto.destacado && <span className="etiqueta-destacado">Destacado</span>}
      {producto.descuento > 0 && <span className="etiqueta-descuento">-{producto.descuento}%</span>}
      <div className="producto-imagen">
        <img src={producto.imagen} alt={producto.nombre} />
        <div className="producto-acciones">
          <button
            className="accion-btn accion-favorito"
            aria-label="Añadir a favoritos"
            onClick={(e) => {
              e.stopPropagation();
              handleAgregarFavorito(producto);
            }}
          >
            <IoMdHeartEmpty size={21} />
            {producto.favorito && <span className="badge-favorito">❤</span>}
          </button>
          <button
            className="accion-btn accion-carrito"
            onClick={(e) => handleAgregarAlCarrito(producto, e)}
            aria-label="Añadir al carrito"
          >
            {esAgregado ? <AiOutlineLike size={21} /> : <AiOutlineShoppingCart size={21} />}
          </button>
          <button
            className="accion-btn accion-ver"
            onClick={(e) => handleVerDetalle(producto.id, e)}
            aria-label="Ver detalle"
          >
            Ver
          </button>
        </div>
      </div>
      <div className="producto-info">
        <h3 className="producto-nombre">{producto.nombre}</h3>
        <div className="producto-puntuacion">
          <Estrellas puntuacion={producto.puntuacion} />
          <span>{producto.puntuacion.toFixed(1)}</span>
        </div>
        <div className="producto-precio">
          {producto.descuento > 0 ? (
            <>
              <span className="precio-anterior">{producto.precio.toLocaleString('es-AR')}</span>
              <span className="precio-actual">
                {(producto.precio * (1 - producto.descuento / 100)).toLocaleString('es-AR')}
              </span>
            </>
          ) : (
            <span className="precio-actual">{producto.precio.toLocaleString('es-AR')}</span>
          )}
          <span className="moneda"> ARS</span>
        </div>
      </div>
    </div>
  );
};

const ListaProductos = () => {
  const { categoria } = useParams();
  const [productos, setProductos] = useState([]);
  const [filtroCategoria, setFiltroCategoria] = useState(categoria || 'todos');
  const { agregarProducto } = useContext(CarritoContext);
  const [productoAgregado, setProductoAgregado] = useState(null);
  const [mostrarNotificacion, setMostrarNotificacion] = useState(false);
  const [favoritos, setFavoritos] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('/data/productos.json')
      .then(res => res.json())
      .then(data => setProductos(data))
      .catch(err => console.error("Error al cargar productos:", err));
  }, []);

  useEffect(() => {
    setFiltroCategoria(categoria || 'todos');
  }, [categoria]);

  const productosFiltrados = filtroCategoria === 'todos'
    ? productos
    : productos.filter(producto => producto.categoria === filtroCategoria);

  const handleAgregarAlCarrito = useCallback((producto, e) => {
    e.stopPropagation();
    agregarProducto(producto);
    setProductoAgregado(producto);
    setMostrarNotificacion(true);
  }, [agregarProducto]);

  const handleVerDetalle = useCallback((productoId, e) => {
    e.stopPropagation();
    navigate(`/producto/${productoId}`);
  }, [navigate]);

  const handleAgregarFavorito = (producto) => {
    const yaEsta = favoritos.find(p => p.id === producto.id);
    if (!yaEsta) {
      setFavoritos([...favoritos, producto]);
    } else {
      setFavoritos(favoritos.filter(p => p.id !== producto.id));
    }

    setProductos(prev =>
      prev.map(p => p.id === producto.id ? { ...p, favorito: !p.favorito } : p)
    );
  };

  useEffect(() => {
    if (mostrarNotificacion) {
      const timer = setTimeout(() => {
        setMostrarNotificacion(false);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [mostrarNotificacion]);

  return (
    <section className="productos-section">
      <div className="container">
        <div className="productos-header">
          <h2 className="productos-titulo">Nuestras Plantas</h2>
          <div className="filtros-categorias">
            {['todos', 'interior', 'exterior', 'suculentas'].map(cat => (
              <button
                key={cat}
                className={`filtro-btn ${filtroCategoria === cat ? 'activo' : ''}`}
                onClick={() => setFiltroCategoria(cat)}
              >
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </button>
            ))}
          </div>
        </div>

        <div className="productos-grid">
          {productosFiltrados.length > 0 ? (
            productosFiltrados.map(producto => (
              <ProductoCard
                key={producto.id}
                producto={producto}
                handleAgregarAlCarrito={handleAgregarAlCarrito}
                handleVerDetalle={handleVerDetalle}
                handleAgregarFavorito={handleAgregarFavorito}
                productoAgregadoId={productoAgregado?.id}
              />
            ))
          ) : (
            <p>No hay productos disponibles en esta categoría.</p>
          )}
        </div>
      </div>

      {/* Notificación al agregar producto */}
      {mostrarNotificacion && productoAgregado && (
        <div className="toast-notificacion">
          <PiPottedPlant size={24} />
          <span><strong>{productoAgregado.nombre}</strong> agregado al carrito 🌿</span>
        </div>
      )}
    </section>
  );
};

export default ListaProductos;





