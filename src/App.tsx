import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import RegistroSolicitud from './components/RegistroSolicitud';

function App() {
  return (
    <Router>
      <Routes>
        {/* Ruta principal con todas tus secciones */}
        <Route path="/" element={<Home />} />

        {/* Nueva ruta para el formulario de Registro */}
        <Route path="/registro-solicitud" element={<RegistroSolicitud />} />
      </Routes>
    </Router>
  );
}

export default App;
