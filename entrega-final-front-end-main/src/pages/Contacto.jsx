import React, { useState } from 'react';
import TarjetaIntegrante from '../components/Equipo/TarjetaIntegrante';

const Contacto = () => {
  // Datos del equipo 
  const equipo = [
    { id: 1, nombre: "Antonella Chambroni", rol: "Fundadora & Diseñadora UI", foto: "images/cliente1.png", descripcion: "Especialista en experiencia de usuario y cuidado animal." },
    { id: 2, nombre: "Laura Benett", rol: "Asesora de Nutrición", foto: "images/cliente3.png", descripcion: "Experta en dietas premium para perros de alta competencia." },
    { id: 3, nombre: "David Mitchell", rol: "Atención Veterinaria", foto: "images/cliente2.png", descripcion: "Coordinador de soporte y bienestar online 24/7." }
  ];

  const [formData, setFormData] = useState({ nombre: '', email: '', telefono: '', mensaje: '' });
  const [statusMessage, setStatusMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.nombre || !formData.email || !formData.mensaje) {
      setStatusMessage('Por favor, completa los campos obligatorios.');
      return;
    }
    
    setStatusMessage('¡Mensaje enviado con éxito! Nos contactaremos a la brevedad.');
    setFormData({ nombre: '', email: '', telefono: '', mensaje: '' });
  };

  return (
    <main>
      <div className="titulo-container">
        <div className="titulo-tienda" style={{ margin: '-30px' }}>
          <h2>Contacto</h2>
        </div>
      </div>

      {/* Formulario  */}
      <div className="contacto">
        <div className="formulario">
          <form onSubmit={handleSubmit}>
            <div className="formulario-nombre">
              <input type="text" name="nombre" placeholder="Nombre" required value={formData.nombre} onChange={handleChange} />
            </div>
            <div className="formulario-email">
              <input type="email" name="email" placeholder="Tu Email" required value={formData.email} onChange={handleChange} />
            </div>
            <div className="formulario-telefono">
              <input type="text" name="telefono" placeholder="Teléfono" value={formData.telefono} onChange={handleChange} />
            </div>
            <div className="formulario-mensaje">
              <textarea name="mensaje" cols="30" rows="10" placeholder="Mensaje" required value={formData.mensaje} onChange={handleChange}></textarea>
            </div>
            <input type="submit" className="btn-contacto" value="Enviar Mensaje" />
            {statusMessage && <p style={{ marginTop: '10px', color: 'green', fontWeight: '500' }}>{statusMessage}</p>}
          </form>
        </div>

        <div className="iconos-contacto">
          <h4>Hablemos!</h4>
          <a href="#"><i className="fa-brands fa-whatsapp"></i> Whatsapp</a>
          <a href="#"><i className="fa-brands fa-instagram"></i> Instagram</a>
          <a href="#"><i className="fa-brands fa-facebook"></i> Facebook</a>
        </div>
      </div>

      {/* Sección de Integrantes de Equipo  */}
      <div className="encabezado" style={{ marginTop: '50px' }}>
        <h2>Nuestro Equipo Profesional</h2>
      </div>
      <section className="clientes" style={{ marginBottom: '40px' }}>
        {equipo.map((persona) => (
          <TarjetaIntegrante 
            key={persona.id}
            nombre={persona.nombre}
            rol={persona.rol}
            foto={persona.foto}
            descripcion={persona.descripcion}
          />
        ))}
      </section>
    </main>
  );
};

export default Contacto;