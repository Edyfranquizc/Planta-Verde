import React from 'react';
import '../css/WhatsappButton.css';
import whatsappIcon from '../assets/whatsapp-icono.png'; 

const WhatsappButton = () => {
    return (
        <a
            href="https://web.whatsapp.com/"
            className="whatsapp-float"
            target="_blank"
            rel="noopener noreferrer"
        >
            <img src={whatsappIcon} alt="WhatsApp" />
        </a>
    );
};

export default WhatsappButton;

