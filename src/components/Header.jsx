import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50 || !isHome || menuOpen);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHome, menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={`header ${(scrolled || !isHome || menuOpen) ? 'scrolled' : ''}`}>
      <Link to="/" className="logo" style={{ display: 'flex', alignItems: 'center', gap: '4px', zIndex: 1001 }} onClick={closeMenu}>
        <img 
          src={(scrolled || !isHome || menuOpen) ? '/logo.png' : '/logo_branco.png'} 
          alt="OdontoFav Logo" 
          style={{ height: '42px', width: 'auto' }} 
        />
        <span style={{ color: (scrolled || !isHome || menuOpen) ? 'var(--sapphire-blue)' : '#ffffffff', fontWeight: '800' }}>OdontoFav</span>
      </Link>
      
      <div className={`hamburger ${menuOpen ? 'active' : ''}`} onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <nav className={`nav-links ${menuOpen ? 'open' : ''}`}>
        <Link to="/" onClick={closeMenu}>Início</Link>
        <Link to="/servicos" onClick={closeMenu}>Serviços</Link>
        <Link to="/clinica" onClick={closeMenu}>A Clínica</Link>
        <Link to="/unidades" onClick={closeMenu}>Nossas Unidades</Link>
        <a href="https://api.whatsapp.com/send/?phone=5527998654698&text=Ol%C3%A1%2C+vim+pelo+site%2C+quero+agendar+uma+consulta%21" target="_blank" rel="noreferrer" className="btn-primary" onClick={closeMenu}>Agendar Avaliação</a>
      </nav>
    </header>
  );
};

export default Header;
