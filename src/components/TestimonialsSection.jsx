const TestimonialsSection = () => {
  return (
    <section id="depoimentos" className="testimonials-section">
      <div className="container">
        <h4 className="section-subtitle text-center">Depoimentos</h4>
        <h2 className="section-title text-center">O que dizem nossos pacientes</h2>
        <div className="testimonials-grid">
          <div className="testimonial-card">
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
              <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80" alt="Maria Oliveira" style={{ width: '50px', height: '50px', borderRadius: '50%', objectFit: 'cover' }} />
              <div className="stars" style={{ marginBottom: 0 }}>★★★★★</div>
            </div>
            <p>"A melhor decisão que tomei. O processo foi impecável, sem dor e o resultado superou absoluto todas as minhas expectativas. O Dr. tem mãos de ouro."</p>
            <span className="author">- Maria Oliveira</span>
          </div>
          <div className="testimonial-card">
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
              <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80" alt="João Santos" style={{ width: '50px', height: '50px', borderRadius: '50%', objectFit: 'cover' }} />
              <div className="stars" style={{ marginBottom: 0 }}>★★★★★</div>
            </div>
            <p>"Toda a equipe é fantástica. A tecnologia utilizada na clínica me passou muita segurança e clareza do que estava sendo feito a cada etapa."</p>
            <span className="author">- João Santos</span>
          </div>
          <div className="testimonial-card">
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
              <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80" alt="Ana Beatriz" style={{ width: '50px', height: '50px', borderRadius: '50%', objectFit: 'cover' }} />
              <div className="stars" style={{ marginBottom: 0 }}>★★★★★</div>
            </div>
            <p>"Sempre tive um pouco de fobia, mas a OdontoFav mudou essa visão completamente. Ambiente relaxante, atendimento focado e humanizado."</p>
            <span className="author">- Ana Beatriz</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
