import React, { useState, useEffect } from 'react';

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
     fetch('/productos.json')
      .then((response) => response.json())
      .then((data) => {
        setProductos(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error cargando productos:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="encabezado"><h2>Cargando productos...</h2></div>;
  }

  return (
    <section className="productos" id="productos-container">
      {productos.map((prod) => (
        <div className="cajas-productos" key={prod.id}>
          {/* Enlace simulado o hacia el detalle de producto */}
          <a href={`/producto/${prod.id}`}>
            <div className="foto-productos">
              <img src={prod.img} alt={prod.title} />
            </div>
          </a>
          <h5 className="encabezado-categorias">{prod.categoria}</h5>
          <h4 className="descripcion">{prod.title}</h4>

          <div className="estrellas">
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
          </div>
          
          <div className="precio" style={{ fontWeight: '600', margin: '10px 0' }}>
            ${prod.precio.toLocaleString('es-AR')}
          </div>

          <div className="btn" style={{ cursor: 'pointer' }}>
            Agregar Carrito
          </div>
        </div>
      ))}
    </section>
  );
};

export default ItemListContainer;