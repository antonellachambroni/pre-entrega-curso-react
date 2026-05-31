import React from 'react';

 const TarjetaIntegrante = ({ foto, nombre, rol, descripcion }) => {
  return (
    <div className="testimonios" style={{ border: '1px solid #ddd', padding: '20px', borderRadius: '8px' }}>
      <img src={foto} alt={nombre} style={{ width: '80px', height: '80px', borderRadius: '50%', objectFit: 'cover' }} />
      <h6 style={{ marginTop: '10px', fontSize: '1.1rem' }}>{nombre}</h6>
      <span style={{ fontSize: '0.85rem', color: '#888', display: 'block', marginBottom: '10px' }}>{rol}</span>
      <p>{descripcion}</p>
    </div>
  );
};

export default TarjetaIntegrante;