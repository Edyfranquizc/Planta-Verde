import React from 'react';
import '../css/WhatsappButton.css';


const WhatsappButton = () => {
    return (
        <a 
            href="https://web.whatsapp.com/"
            className="whatsapp-float"
            target="_blank"
            rel="noopener noreferrer"
        >
            <img src="/public/assets/whatsapp-icono.png" alt="WhatsApp" />
        </a>
    );
};

export default WhatsappButton;

