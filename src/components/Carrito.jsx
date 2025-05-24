import React, { useContext, useState } from 'react';
import { CarritoContext } from '../Context/CarritoContext';
import ModalConfirmacion from "./ModalConfirmacion";
import { AiOutlineDelete } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";
import { PiPottedPlant } from "react-icons/pi";
import '../css/Carrito.css';

const Carrito = () => {
    // Obtenemos el contexto del carrito de forma segura
    const contexto = useContext(CarritoContext);
    
    // Verificamos que el contexto exista y extraemos sus valores
    const { 
        carrito = [], 
        mostrarCarrito = false, 
        total = 0, 
        toggleCarrito = () => {}, 
        agregarProducto = () => {}, 
        decrementarProducto = () => {}, 
        eliminarProducto = () => {}, 
        vaciarCarrito = () => {},
        procederAlPago = () => {}
    } = contexto || {};
    
    const [mostrarModalVaciar, setMostrarModalVaciar] = useState(false);
    const [mostrarModalEliminar, setMostrarModalEliminar] = useState(false);
    const [productoAEliminar, setProductoAEliminar] = useState(null);
    const [mostrarModalGracias, setMostrarModalGracias] = useState(false);

    // Si el carrito no está visible, no renderizar nada
    if (!mostrarCarrito) return null;
    
    const handleEliminarProducto = (producto) => {
        setProductoAEliminar(producto);
        setMostrarModalEliminar(true);
    };
    
    const confirmarEliminarProducto = () => {
        if (productoAEliminar) {
            eliminarProducto(productoAEliminar.id);
            setMostrarModalEliminar(false);
            setProductoAEliminar(null);
        }
    };
    
    const handleVaciarCarrito = () => {
        setMostrarModalVaciar(true);
    };
    
    const confirmarVaciarCarrito = () => {
        vaciarCarrito();
        setMostrarModalVaciar(false);
    };

    // Función de manejo para proceder al pago
    const handleProcederAlPago = () => {
        if (typeof procederAlPago === 'function') {
            procederAlPago();
        }
        setMostrarModalGracias(true);
    };

    // Función para cerrar el modal de agradecimiento
    const cerrarModalGracias = () => {
        setMostrarModalGracias(false);
        toggleCarrito();
    };

    // Función segura para formatear números
    const formatearPrecio = (precio) => {
        if (typeof precio !== 'number') return '0';
        return precio.toLocaleString('es-AR');
    };

    return (
        <div className="carrito-overlay" onClick={toggleCarrito}>
            <div className="carrito-contenedor" onClick={(e) => e.stopPropagation()}>
                <div className="carrito-header">
                    <h2>Tu Carrito</h2>
                    <button className="cerrar-carrito" onClick={toggleCarrito}>
                        <IoMdClose size={24} />
                    </button>
                </div>

                <div className="carrito-items">
                    {carrito.length === 0 ? (
                        <div className="carrito-vacio">
                            <p>Tu carrito está vacío</p>
                            <button className="btn-continuar-comprando" onClick={toggleCarrito}>
                                Continuar Comprando
                            </button>
                        </div>
                    ) : (
                <>
                {carrito.map(item => {
                    if (!item) return null;
                                
                    const precio = typeof item.precio === 'number' ? item.precio : 0;
                            const descuento = typeof item.descuento === 'number' ? item.descuento : 0;
                                const cantidad = typeof item.cantidad === 'number' ? item.cantidad : 1;
                                
                                const precioFinal = descuento > 0 
                                    ? precio * (1 - descuento / 100)
                                    : precio;
                                const subtotal = precioFinal * cantidad;

                return (
                        <div className="carrito-item" key={item.id}>
                            <div className="item-imagen">
                                {item.imagen && <img src={item.imagen} alt={item.nombre || 'Producto'} />}
                            </div>
                        <div className="item-detalles">
                            <h3 className="item-nombre">{item.nombre || 'Producto sin nombre'}</h3>
                            <div className="item-precio">
                                {descuento > 0 ? (
                                <>
                                <span className="precio-anterior">{formatearPrecio(precio)}</span>
                                <span className="precio-actual">{formatearPrecio(precioFinal)}</span>
                                </>
                                ) : (
                                <span className="precio-actual">{formatearPrecio(precioFinal)}</span>
                                )}
                                <span className="moneda"> ARS</span>
                                </div>
                                <div className="item-cantidad">
                                    <button 
                                    className="cantidad-btn" onClick={() => decrementarProducto(item.id)}
                                    >
                                        -
                                    </button>
                                        <span className="cantidad-numero">{cantidad}</span>
                                            <button 
                                            className="cantidad-btn" onClick={() => agregarProducto(item)}
                                            >
                                                +
                                                </button>
                                            </div>
                                        </div>
                                        <div className="item-acciones">
                                            <div className="item-subtotal">
                                                <span>{formatearPrecio(subtotal)} ARS</span>
                                            </div>
                                            <button 
                                                className="eliminar-btn" 
                                                onClick={() => handleEliminarProducto(item)}
                                                title="Eliminar producto"
                                            >
                                                <AiOutlineDelete size={18} />
                                            </button>
                                        </div>
                                    </div>
                                );
                            })}

            <div className="carrito-footer">
            <div className="carrito-total">
                <span>Total:</span>
                <span className="total-valor">{formatearPrecio(total)} ARS</span>
            </div>
            <div className="carrito-acciones">
                <button className="btn-vaciar" onClick={handleVaciarCarrito}>
                Vaciar Carrito
                </button>
                <button className="btn-checkout" onClick={handleProcederAlPago}>
                Proceder al Pago
                    </button>
                </div>
                    <button className="btn-continuar-comprando" onClick={toggleCarrito}>
                            Continuar Comprando
                                </button>
                            </div>
                        </>
                    )}
                </div>
            </div>
            
            {/* Modal para confirmar vaciar carrito */}
            <ModalConfirmacion 
                mostrar={mostrarModalVaciar}
                titulo="Vaciar Carrito"
                mensaje="¿Estás seguro de que deseas vaciar el carrito?"
                onConfirmar={confirmarVaciarCarrito}
                onCancelar={() => setMostrarModalVaciar(false)}
            />
            
            {/* Modal para confirmar eliminar producto */}
            <ModalConfirmacion 
                mostrar={mostrarModalEliminar}
                titulo="Eliminar Producto"
                mensaje={productoAEliminar ? `¿Eliminar ${productoAEliminar.nombre || 'el producto'} del carrito?` : ""}
                onConfirmar={confirmarEliminarProducto}
                onCancelar={() => setMostrarModalEliminar(false)}
            />

            {/* Modal de agradecimiento por la compra */}
            <ModalConfirmacion 
            mostrar={mostrarModalGracias}
            titulo={
                <span className="modal-titulo-icono">
                <PiPottedPlant size={28} style={{ marginRight: '8px' }} />
                ¡Gracias por tu compra!
                </span>
            }
            mensaje="🌿 Tu pedido en Planta Verde fue procesado con éxito. ¡Gracias por hacer crecer tu jungla urbana con nosotros!"
            onConfirmar={cerrarModalGracias}
            onCancelar={null}
            />
        </div>
    );
};

export default Carrito;