import React from 'react';
import '../css/ModalConfirmacion.css';

const ModalConfirmacion = ({ mostrar, titulo, mensaje, onCancelar, onConfirmar }) => {
    if (!mostrar) return null;

    return (
        <div className="modal-overlay" onClick={onCancelar}>
        <div className="modal-contenido" onClick={e => e.stopPropagation()}>
            <div className="modal-header">
            <h3>{titulo || "Aviso"}</h3>
            {onCancelar && (
                <button className="modal-cerrar" onClick={onCancelar}>×</button>
            )}
            </div>
            <div className="modal-body">
            <p>{mensaje}</p>
            </div>
            <div className="modal-footer">
            {onConfirmar ? (
                <>
                <button className="btn-cancelar" onClick={onCancelar}>Cancelar</button>
                <button className="btn-confirmar" onClick={onConfirmar}>Confirmar</button>
                </>
            ) : (
                <button className="btn-confirmar" onClick={onCancelar}>Aceptar</button>
            )}
            </div>
        </div>
        </div>
    );
};

export default ModalConfirmacion;
