import React, { useState, useEffect, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { CarritoContext } from "../Context/CarritoContext";
import { IoMdHeartEmpty } from "react-icons/io";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { IoIosArrowRoundBack } from "react-icons/io";
import { PiPottedPlant } from "react-icons/pi";
import ModalConfirmacion from '../components/ModalConfirmacion';
import '../css/DetalleProducto.css';

const Estrellas = ({ puntuacion }) => {
    const estrellas = Math.round(puntuacion);
    return (
        <div className="estrellas">
            {'★'.repeat(estrellas)}{'☆'.repeat(5 - estrellas)}
        </div>
    );
};

const DetalleProducto = () => {
    const { id } = useParams();
    const [producto, setProducto] = useState(null);
    const [loading, setLoading] = useState(true);
    const [cantidad, setCantidad] = useState(1);
    const [mostrarModal, setMostrarModal] = useState(false);
    const { agregarProducto } = useContext(CarritoContext);
    const navigate = useNavigate();

    useEffect(() => {
        setLoading(true);
        fetch('/data/productos.json')
            .then(res => res.json())
            .then(data => {
                const productoEncontrado = data.find(p => p.id === parseInt(id));
                if (productoEncontrado) {
                    setProducto(productoEncontrado);
                } else {
                    console.error("Producto no encontrado");
                }
                setLoading(false);
            })
            .catch(err => {
                console.error("Error al cargar el producto:", err);
                setLoading(false);
            });
    }, [id]);

    const handleVolver = () => {
        navigate(-1);
    };

    const handleCantidadChange = (e) => {
        const valor = parseInt(e.target.value);
        if (valor > 0) {
            setCantidad(valor);
        }
    };

    const incrementarCantidad = () => {
        setCantidad(prev => prev + 1);
    };

    const decrementarCantidad = () => {
        if (cantidad > 1) {
            setCantidad(prev => prev - 1);
        }
    };

    const handleAgregarAlCarrito = () => {
        setMostrarModal(true);
    };

    const confirmarAgregarAlCarrito = () => {
        if (producto) {
            for (let i = 0; i < cantidad; i++) {
                agregarProducto(producto);
            }
        }
        setMostrarModal(false);
    };

    const cancelarAgregar = () => {
        setMostrarModal(false);
    };

    if (loading) {
        return (
            <div className="cargando-detalle">
                <div className="loader"></div>
                <p>Cargando producto...</p>
            </div>
        );
    }

    if (!producto) {
        return (
            <div className="error-detalle">
                <h2>Producto no encontrado</h2>
                <button className="btn-volver" onClick={handleVolver}>Volver a la tienda</button>
            </div>
        );
    }

    const precioFinal = producto.descuento > 0
        ? producto.precio * (1 - producto.descuento / 100)
        : producto.precio;

    return (
        <section className="detalle-producto">
            <div className="container">
                <button className="btn-volver" onClick={handleVolver}>
                    <IoIosArrowRoundBack size={24} /> Volver
                </button>

                <div className="detalle-contenedor">
                    <div className="detalle-imagen">
                        <img src={producto.imagen} alt={producto.nombre} />
                        {producto.destacado && <span className="etiqueta-destacado">Destacado</span>}
                        {producto.descuento > 0 && <span className="etiqueta-descuento">-{producto.descuento}%</span>}
                    </div>

                    <div className="detalle-info">
                        <h1 className="detalle-nombre">{producto.nombre}</h1>

                        <div className="detalle-puntuacion">
                            <Estrellas puntuacion={producto.puntuacion} />
                            <span>{producto.puntuacion.toFixed(1)}</span>
                        </div>

                        <div className="detalle-precio">
                            {producto.descuento > 0 ? (
                                <>
                                    <span className="precio-anterior">{producto.precio.toLocaleString('es-AR')}</span>
                                    <span className="precio-actual">
                                        {precioFinal.toLocaleString('es-AR')}
                                    </span>
                                </>
                            ) : (
                                <span className="precio-actual">{producto.precio.toLocaleString('es-AR')}</span>
                            )}
                            <span className="moneda"> ARS</span>
                        </div>

                        <div className="detalle-categoria">
                            <span>Categoría:</span> {producto.categoria.charAt(0).toUpperCase() + producto.categoria.slice(1)}
                        </div>

                        <div className="detalle-descripcion">
                            <h3>Descripción</h3>
                            <p>{producto.descripcion || "Esta planta es perfecta para decorar tu hogar y mejorar la calidad del aire. Fácil de cuidar y muy resistente."}</p>
                        </div>

                        <div className="detalle-cuidados">
                            <h3>Cuidados</h3>
                            <ul>
                                <li><strong>Luz:</strong> {producto.cuidados?.luz || "Luz indirecta"}</li>
                                <li><strong>Riego:</strong> {producto.cuidados?.riego || "Moderado, cuando la tierra esté seca"}</li>
                                <li><strong>Temperatura:</strong> {producto.cuidados?.temperatura || "18-24°C"}</li>
                            </ul>
                        </div>

                        <div className="detalle-acciones">
                            <div className="cantidad-selector">
                                <button className="cantidad-btn" onClick={decrementarCantidad}>-</button>
                                <input
                                    type="number"
                                    min="1"
                                    value={cantidad}
                                    onChange={handleCantidadChange}
                                    className="cantidad-input"
                                />
                                <button className="cantidad-btn" onClick={incrementarCantidad}>+</button>
                            </div>

                            <div className="botones-accion">
                                <button className="btn-favorito">
                                    <IoMdHeartEmpty size={21} />
                                    <span>Favorito</span>
                                </button>
                                <button className="btn-agregar" onClick={handleAgregarAlCarrito}>
                                    <AiOutlineShoppingCart size={21} />
                                    <span>Agregar al carrito</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* MODAL DE CONFIRMACIÓN */}
            <ModalConfirmacion
            mostrar={mostrarModal}
            titulo={
            <span className="modal-titulo-icono">
            <PiPottedPlant size={28} style={{ marginRight: '8px' }} />
            Confirmar Agregado
            </span>
            }
            mensaje={`🌿 ¡Vas a sumar ${cantidad} ${cantidad === 1 ? 'unidad' : 'unidades'} de "${producto?.nombre}" a tu jungla personal! ¿Estás seguro?`}
            onCancelar={cancelarAgregar}
            onConfirmar={confirmarAgregarAlCarrito}
        />
        </section>
    );
};

export default DetalleProducto;
