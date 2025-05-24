import React from 'react'

const FeatureTestimonio = () => {
  return (
    <div>
         {/* Features Section */}
            <section className="features-section">
            <div className="container">
                <div className="features-grid">
                <div className="feature-card">
                    <div className="feature-icon">
                    <i className="icon-shipping"></i>
                    </div>
                    <h3 className="feature-title">Envío Rápido</h3>
                    <p className="feature-text">Entrega en 24-48h en toda la península</p>
                </div>
                
                <div className="feature-card">
                    <div className="feature-icon">
                    <i className="icon-guarantee"></i>
                    </div>
                    <h3 className="feature-title">Garantía de 30 días</h3>
                    <p className="feature-text">Si tu planta no prospera, te la reemplazamos</p>
                </div>
                
                <div className="feature-card">
                    <div className="feature-icon">
                    <i className="icon-support"></i>
                    </div>
                    <h3 className="feature-title">Soporte Experto</h3>
                    <p className="feature-text">Asesoramiento personalizado para tus plantas</p>
                </div>
                
                <div className="feature-card">
                    <div className="feature-icon">
                    <i className="icon-eco"></i>
                    </div>
                    <h3 className="feature-title">Eco-Friendly</h3>
                    <p className="feature-text">Embalaje sostenible y prácticas responsables</p>
                </div>
                </div>
            </div>
            </section>
            
            {/* Testimonials Section */}
            <section className="testimonials-section">
            <div className="container">
                <h2 className="section-title">Lo que dicen nuestros clientes</h2>
                <div className="testimonials-grid">
                <div className="testimonial-card">
                    <div className="testimonial-rating">★★★★★</div>
                    <p className="testimonial-text">
                    "Las plantas llegaron en perfecto estado y la atención al cliente fue excelente. Sin duda volveré a comprar aquí."
                    </p>
                    <div className="testimonial-author">
                    <div className="author-avatar">
                        <img src="/src/assets/avatar-ana.png" alt="Ana M." />
                    </div>
                    <div className="author-info">
                        <h4>Ana M.</h4>
                        <p>Cliente Verificado</p>
                    </div>
                    </div>
                </div>
                
                <div className="testimonial-card">
                    <div className="testimonial-rating">★★★★★</div>
                    <p className="testimonial-text">
                    "Increíble variedad de plantas. Los consejos de cuidado que incluyen con cada compra son muy útiles. Recomiendo al 100%."
                    </p>
                    <div className="testimonial-author">
                    <div className="author-avatar">
                        <img src="/src/assets/avatar-carlos.png" alt="Carlos R." />
                    </div>
                    <div className="author-info">
                        <h4>Carlos R.</h4>
                        <p>Cliente Verificado</p>
                    </div>
                    </div>
                </div>
                
                <div className="testimonial-card">
                    <div className="testimonial-rating">★★★★★</div>
                    <p className="testimonial-text">
                    "La monstera que compré hace tres meses ha crecido muchísimo siguiendo sus consejos. Gracias por el seguimiento post-venta."
                    </p>
                    <div className="testimonial-author">
                    <div className="author-avatar">
                        <img src="/src/assets/avatar-laura.png" alt="Laura S." />
                    </div>
                    <div className="author-info">
                        <h4>Laura S.</h4>
                        <p>Cliente Verificado</p>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </section>
    </div>
  )
}

export default FeatureTestimonio