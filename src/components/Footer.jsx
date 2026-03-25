import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <div className="logo" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <img src="/logo_branco.png" alt="OdontoFav Logo" style={{ height: '40px' }} />
            <span style={{ color: '#fff' }}>OdontoFav</span>
          </div>
          <p>A transformação do seu sorriso em cada movimento. Especialistas certificados em Reabilitação Oral e Odontologia Estética Digital.</p>
        </div>
        <div className="footer-links">
          <h3>Navegação Rápida</h3>
          <Link to="/">Início</Link>
          <Link to="/servicos">Serviços</Link>
          <Link to="/clinica">A Clínica</Link>
          <Link to="/unidades">Nossas Unidades</Link>
        </div>
        <div className="footer-contact">
          <h3>Atendimento</h3>
          <p>📞 (27) 99865-4698</p>
          <p>🕒 Seg a Sex: 08:00 às 18:00</p>
          <p>🕒 Sábado: 08:00 às 12:00</p>
          <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
            <a href="https://wa.me/5527998654698" target="_blank" rel="noreferrer" style={{ color: '#fff', fontSize: '1.8rem', textDecoration: 'none' }}>📱</a>
            <a href="https://www.instagram.com/favodonto/" target="_blank" rel="noreferrer" style={{ color: '#fff', fontSize: '1.8rem', textDecoration: 'none' }}>📷</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} OdontoFav. Todos os direitos reservados. | Responsável Técnico: Dra. Rogéria Lima Becalli - CRO/ES []</p>
      </div>
    </footer>
  );
};

export default Footer;
