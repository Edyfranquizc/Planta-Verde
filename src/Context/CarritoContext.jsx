import React, { createContext, useState, useContext, useMemo } from 'react';

export const CarritoContext = createContext();

export const CarritoProvider = ({ children }) => {
    const [carrito, setCarrito] = useState([]);
    const [mostrarCarrito, setMostrarCarrito] = useState(false);

    // Toggle visibilidad del carrito
    const toggleCarrito = () => {
        setMostrarCarrito(!mostrarCarrito);
    };

    // Agregar producto al carrito (aumentar cantidad si ya está)
    const agregarProducto = (producto) => {
        setCarrito(prevCarrito => {
            const productoExistente = prevCarrito.find(item => item.id === producto.id);
            if (productoExistente) {
                return prevCarrito.map(item =>
                    item.id === producto.id
                        ? { ...item, cantidad: item.cantidad + 1 }
                        : item
                );
            } else {
                return [...prevCarrito, { ...producto, cantidad: 1 }];
            }
        });
    };

    // Decrementar cantidad o eliminar si llega a 1
    const decrementarProducto = (productoId) => {
        setCarrito(prevCarrito =>
            prevCarrito
                .map(item =>
                    item.id === productoId
                        ? { ...item, cantidad: item.cantidad - 1 }
                        : item
                )
                .filter(item => item.cantidad > 0)
        );
    };

    // Eliminar directamente
    const eliminarProducto = (productoId) => {
        setCarrito(prevCarrito => prevCarrito.filter(item => item.id !== productoId));
    };

    // Vaciar el carrito
    const vaciarCarrito = () => {
        setCarrito([]);
    };

    // Total calculado con descuento
    const total = useMemo(() => {
        return carrito.reduce((acc, item) => {
            const precioFinal = item.descuento > 0
                ? item.precio * (1 - item.descuento / 100)
                : item.precio;
            return acc + precioFinal * item.cantidad;
        }, 0);
    }, [carrito]);

    // Simular pago
    const procederAlPago = () => {
    vaciarCarrito();
};

    return (
        <CarritoContext.Provider value={{
            carrito,
            mostrarCarrito,
            toggleCarrito,
            agregarProducto,
            decrementarProducto,
            eliminarProducto,
            vaciarCarrito,
            procederAlPago,
            total
        }}>
            {children}
        </CarritoContext.Provider>
    );
};

export const useCarrito = () => useContext(CarritoContext);
