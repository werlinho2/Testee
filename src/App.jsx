import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Servicos from './pages/Servicos';
import Clinica from './pages/Clinica';
import Unidades from './pages/Unidades';
import './index.css';
import useGlobalAnimations from './hooks/useGlobalAnimations';

const AppContent = () => {
  useGlobalAnimations();
  return (
    <div className="app-container">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/servicos" element={<Servicos />} />
        <Route path="/clinica" element={<Clinica />} />
        <Route path="/unidades" element={<Unidades />} />
      </Routes>
      <Footer />
    </div>
  );
};

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
