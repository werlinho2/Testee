const TechnologySection = () => {
  return (
    <section id="tecnologia" className="technology-section">
      <div className="tech-container">
        <h4 className="tech-subtitle">Inovação Continua</h4>
        <h2 className="tech-title">Nossa Tecnologia <br />ao Seu Alcance</h2>
        <div className="tech-content">
          <div className="tech-card">
            <div className="tech-icon">🔬</div>
            <h3>Escaneamento Intraoral 3D</h3>
            <p>Esqueça as moldagens desconfortáveis. Utilizamos scanners de altíssima precisão para criar um modelo digital perfeito do seu sorriso, propiciando diagnósticos rápidos e precisos na primeira consulta.</p>
          </div>
          <div className="tech-card">
            <div className="tech-icon">✨</div>
            <h3>Clareamento a Laser</h3>
            <p>Resultados brilhantes desde a primeira sessão. Nossa tecnologia a laser de luz violeta acelera o processo com máximo conforto, eliminando a sensibilidade e garantindo um branco pristino.</p>
          </div>
          <div className="tech-card">
            <div className="tech-icon">🖥️</div>
            <h3>Planejamento Digital (DSD)</h3>
            <p>Visualize o resultado final antes mesmo de começar. O Digital Smile Design nos permite desenhar e alinhar expectativas com perfeição técnica e harmonia facial absoluta.</p>
          </div>
          <div className="tech-card">
            <div className="tech-icon">🦷</div>
            <h3>Implantes Guiados</h3>
            <p>Cirurgias minimamente invasivas com guias cirúrgicos feitos em impressoras 3D. Precisão milimétrica que garante uma recuperação incrivelmente rápida e indolor para nossos pacientes.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologySection;
