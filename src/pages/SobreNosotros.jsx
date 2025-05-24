import React from 'react';
import '../css/SobreNosotros.css';
import { FaLeaf, FaHandHoldingHeart, FaSeedling, FaRecycle } from 'react-icons/fa';

const SobreNosotros = () => {
    return (
        <div className="sobre-nosotros">
        {/* Sección Hero */}
        <div className="nosotros-hero">
            <div className="container">
            <h1>Sobre Nosotros</h1>
            <p>Conectando personas con la naturaleza desde 2018</p>
            </div>
        </div>

        {/* Sección Historia */}
        <div className="nosotros-historia">
            <div className="container">
            <div className="nosotros-contenido">
                <div className="nosotros-imagen">
                <img src="/src/assets/Ficus-Lyrata.png" alt="Equipo PlantaVerde" />
                </div>
                <div className="nosotros-texto">
                <h2>Nuestra Historia</h2>
                <p>
                    PlantaVerde nació de la pasión por las plantas y el deseo de acercar la naturaleza a los hogares urbanos. 
                    Fundada en 2018 por un grupo de entusiastas de la botánica, hemos crecido hasta convertirnos en un referente 
                    en el mercado de plantas de interior y exterior.
                </p>
                <p>
                    Nos especializamos en la selección de especies que no solo embellecen los espacios, sino que también 
                    contribuyen a crear ambientes más saludables y en armonía con la naturaleza. Cada planta que ofrecemos 
                    es cuidadosamente cultivada y seleccionada para garantizar su calidad y belleza.
                </p>
                </div>
            </div>
            </div>
        </div>

        {/* Sección Valores */}
        <div className="seccion-valores">
            <div className="container">
            <h2 className="titulo-seccion">Nuestros Valores</h2>
            <div className="valores-grid">
                <div className="tarjeta-valor">
                <div className="icono-valor">
                    <FaLeaf />
                </div>
                <h3>Compromiso Ambiental</h3>
                <p>Promovemos prácticas sostenibles en todo nuestro proceso, desde el cultivo hasta el empaque de nuestros productos.</p>
                </div>
                <div className="tarjeta-valor">
                <div className="icono-valor">
                    <FaHandHoldingHeart />
                </div>
                <h3>Calidad y Cuidado</h3>
                <p>Cada planta recibe atención personalizada para asegurar que llegue a tu hogar en óptimas condiciones.</p>
                </div>
                <div className="tarjeta-valor">
                <div className="icono-valor">
                    <FaSeedling />
                </div>
                <h3>Educación Botánica</h3>
                <p>Creemos en compartir conocimiento para que puedas disfrutar y cuidar tus plantas de la mejor manera.</p>
                </div>
                <div className="tarjeta-valor">
                <div className="icono-valor">
                    <FaRecycle />
                </div>
                <h3>Sostenibilidad</h3>
                <p>Utilizamos materiales reciclables y biodegradables en nuestros envíos y embalajes.</p>
                </div>
            </div>
            </div>
        </div>

        {/* Sección Equipo */}
        <div className="seccion-equipo">
            <div className="container">
            <h2 className="titulo-seccion">Nuestro Equipo</h2>
            <div className="equipo-grid">
                <div className="miembro-equipo">
                <div className="imagen-miembro">
                    <img src="/src/assets/avatar-patricia.png" alt="Miembro del equipo" />
                </div>
                <h3>Patricia Gutiérrez</h3>
                <p>Fundadora & Botánica</p>
                </div>
                <div className="miembro-equipo">
                <div className="imagen-miembro">
                    <img src="/src/assets/avatar-gabriela.png" alt="Miembro del equipo" />
                </div>
                <h3>Gabriela Fernandez</h3>
                <p>Especialista en Plantas</p>
                </div>
                <div className="miembro-equipo">
                <div className="imagen-miembro">
                    <img src="/src/assets/avatar-fabian.png" alt="Miembro del equipo" />
                </div>
                <h3>Fabian Rodríguez</h3>
                <p>Diseño & Atención al Cliente</p>
                </div>
            </div>
            </div>
        </div>

        {/* Sección Únete */}
        <div className="seccion-unete">
            <div className="container">
            <div className="unete-contenido">
                <h2>Únete a Nuestra Comunidad Verde</h2>
                <p>
                Suscríbete a nuestro boletín para recibir consejos de cuidado de plantas, 
                novedades sobre nuestros productos y ofertas exclusivas.
                </p>
                <form className="formulario-suscripcion">
                <input type="email" placeholder="Tu correo electrónico" required />
                <button type="submit" className="btn btn-primary">Suscribirse</button>
                </form>
            </div>
            </div>
        </div>
        </div>
    );
};

export default SobreNosotros;