const ResultsSection = () => {
  return (
    <section id="resultados" className="results-section">
      <div className="container">
        <h4 className="section-subtitle">Casos de Sucesso</h4>
        <h2 className="section-title">Resultados que Transformam Vidas</h2>
        <div className="results-grid">
          <div className="result-card">
            <div className="before-after" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=800&q=80')`, backgroundSize: 'cover', backgroundPosition: 'center', height: '250px', borderRadius: '15px', marginBottom: '1.5rem' }}></div>
            <h3>Alinhamento Invisível</h3>
            <p>Tratamento completo em 6 meses com alinhadores transparentes de última geração.</p>
          </div>
          <div className="result-card">
            <div className="before-after" style={{ backgroundImage: `url('https://luisgustavoleite.com.br/blog/wp-content/uploads/2019/09/faceta-de-resina-ou-lente-de-contato-dental-diferen%C3%A7a-qual-%C3%A9-melhor-1038x576.jpg')`, backgroundSize: 'cover', backgroundPosition: 'center', height: '250px', borderRadius: '15px', marginBottom: '1.5rem' }}></div>
            <h3>Lentes de Contato Dental</h3>
            <p>Sorriso harmonizado milimetricamente com 10 lentes de porcelana ultraleves.</p>
          </div>
          <div className="result-card">
            <div className="before-after" style={{ backgroundImage: `url('https://fatarelli.com.br/wp-content/uploads/2020/08/Tratamento-Odontol%C3%B3gico-Cl%C3%ADnica-Fatarelli-Odontologia-Integrada-no-Jardins-Est%C3%A9tica-2.jpeg')`, backgroundSize: 'cover', backgroundPosition: 'center', height: '250px', borderRadius: '15px', marginBottom: '1.5rem' }}></div>
            <h3>Reabilitação Completa</h3>
            <p>Implantes guiados com cirurgia minimamente invasiva e carga imediata.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
