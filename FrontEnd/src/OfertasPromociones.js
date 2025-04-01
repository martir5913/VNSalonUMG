import React from "react";
import "./OfertasPromociones.css"; // Importa el archivo de estilos específico para esta vista

function OfertasPromociones() {
  return (
    <div className="ofertas-container">
      <h2>🔥 Ofertas y Promociones 🔥</h2>
      <p>Aprovecha nuestras increíbles promociones y descuentos exclusivos.</p>
      
      <div className="ofertas-grid">
        <div className="oferta-card">
          <h3>💇‍♀️ Corte + Tratamiento</h3>
          <p>50% de descuento en tu primer corte con tratamiento hidratante.</p>
        </div>

        <div className="oferta-card">
          <h3>💅 Manicura y Pedicura</h3>
          <p>Combo especial por solo $25.</p>
        </div>

        <div className="oferta-card">
          <h3>🎀 Peinados para eventos</h3>
          <p>Reserva tu peinado para bodas y fiestas con un 20% de descuento.</p>
        </div>
      </div>
    </div>
  );
}

export default OfertasPromociones;