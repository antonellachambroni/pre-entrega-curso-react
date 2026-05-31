import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ItemListContainer from './components/ItemList/ItemListContainer';
import Contacto from './pages/Contacto';

const HomePlaceholder = () => (
  <main style={{ padding: '20px' }}>
    <div className="encabezado"><h2>Bienvenidos a la Tienda de Mascotas</h2></div>
    <p style={{ textAlign: 'center' }}>Selecciona "Tienda" en el menú para ver nuestros productos dinámicos.</p>
  </main>
);

const DetallePlaceholder = () => <div className="encabezado"><h2>Detalle del Producto (Próximamente)</h2></div>;
const CarritoPlaceholder = () => <div className="encabezado"><h2>Tu Carrito de Compras (Próximamente)</h2></div>;

function App() {
  return (
    <Router>
      {/* Estructura Header */}
      <header>
        <div className="header-2">
          <div className="logo-header">
            <Link to="/"><i className="fa-solid fa-dog"></i> <span>Tienda de Mascotas</span></Link>
          </div>
          <div className="iconos-shop">
            <Link to="/carrito"><i className="fa-solid fa-cart-shopping"></i> (0)</Link>
          </div>
        </div>

        <div className="header-3">
          <nav className="navegador">
            <ul className="ul">
              <li className="li"><Link to="/"><i className="fa-solid fa-house-chimney"></i> Home</Link></li>
              <li className="li"><Link to="/productos"><i className="fa-solid fa-bag-shopping"></i> Tienda</Link></li>
              <li className="li"><Link to="/contacto"><i className="fa-solid fa-envelope"></i> Contacto</Link></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Rutas Dinámicas  */}
      <Routes>
        <Route path="/" element={<HomePlaceholder />} />
        <Route path="/productos" element={<ItemListContainer />} />
        <Route path="/producto/:id" element={<DetallePlaceholder />} />
        <Route path="/carrito" element={<CarritoPlaceholder />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>

      <div className="creditos" style={{ marginTop: '40px' }}>
        © Copyright 2026 | Diseñado por <strong>Antonella Chambroni</strong>
      </div>
    </Router>
  );
}

export default App;