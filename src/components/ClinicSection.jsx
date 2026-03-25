const ClinicSection = () => {
  return (
    <section id="clinica" className="clinic-section">
      <div className="container">
        <div className="clinic-content">
          <div className="clinic-text">
            <h4 className="section-subtitle">A Clínica</h4>
            <h2 className="section-title">Ambiente Projetado para o Seu Conforto</h2>
            <p>
              Nossa clínica prime foi arquitetada pensando em cada detalhe da sua experiência sensorial. 
              Ambientes climatizados, aromaterapia relaxante, controle acústico e cadeiras odontológicas com massagem terapêutica embutida.
            </p>
            <p className="mt-4">
              Da recepção ao consultório, você se sentirá em um verdadeiro spa, em um ambiente de alto padrão, livre do aspecto frio e ansioso de uma clínica convencional.
            </p>
          </div>
          <div className="clinic-gallery">
            <div className="gallery-img" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80')`, backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '300px', borderRadius: '20px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}></div>
            <div className="gallery-img" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?auto=format&fit=crop&w=800&q=80')`, backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '300px', borderRadius: '20px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClinicSection;
