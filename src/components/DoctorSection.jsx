const DoctorSection = () => {
  return (
    <section id="especialista" className="doctor-section">
      <div className="container doctor-container">
        <div className="doctor-image" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=800&q=80')`, backgroundSize: 'cover', backgroundPosition: 'center', borderRadius: '20px', height: '100%', minHeight: '400px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}></div>
        <div className="doctor-info">
          <h4 className="section-subtitle">A Especialista</h4>
          <h2 className="section-title">Dr. Rogéria Lima Becalli</h2>
          <p className="doctor-bio">
            Com mais de 15 anos de experiência e milhares de sorrisos transformados, 
            a Dra. Rogéria é referência nacional em Odontologia Estética e Reabilitação Oral.
            Sua abordagem única une arte, ciência e a mais alta tecnologia para entregar 
            resultados imprevisivelmente perfeitos.
          </p>
          <ul className="doctor-credentials">
            <li>✓ Especialista em Implantodontia Avançada</li>
            <li>✓ Mestre em Clínica Odontológica</li>
            <li>✓ Professor Titular de Odontologia Digital</li>
            <li>✓ Membro das principais academias internacionais</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default DoctorSection;
