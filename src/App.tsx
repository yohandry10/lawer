import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import RegistroSolicitud from './components/RegistroSolicitud';
import IconDetails from './components/iconDetails';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/registro-solicitud" element={<RegistroSolicitud />} />
        <Route path="/icon-details" element={<IconDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
