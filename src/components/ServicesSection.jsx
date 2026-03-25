const ServicesSection = () => {
  const servicos = [
    { title: 'Clínico Geral', icon: '🦷', desc: 'Prevenção e cuidados essenciais para manter a saúde do seu sorriso em dia.', image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=500&q=80' },
    { title: 'Clareamento', icon: '✨', desc: 'Conquiste um sorriso mais branco e iluminado com segurança.', image: 'https://images.unsplash.com/photo-1684607633080-df59e6874367?w=500&q=80' },
    { title: 'Ortodontia (Aparelho)', icon: '😁', desc: 'Alinhamento perfeito para a estética e funcionalidade da sua mordida.', image: 'https://images.unsplash.com/photo-1656514894252-fb336a3ad6a6?w=500&q=80' },
    { title: 'Implante', icon: '🔩', desc: 'Recupere a confiança para sorrir e mastigar com dentes fixos e naturais.', image: 'https://images.unsplash.com/photo-1660737217649-e3bd4ef2888a?w=500&q=80' },
    { title: 'Prótese Dentária', icon: '👄', desc: 'Reabilitação oral personalizada para devolver a harmonia do seu rosto.', image: 'https://images.unsplash.com/photo-1612283105859-6e2585710acd?w=500&q=80' },
    { title: 'Prótese Sobre Implante', icon: '🧊', desc: 'Estabilidade máxima e conforto definitivo para o seu sorriso.', image: 'https://images.unsplash.com/photo-1660732205543-dfef1a8761f7?w=500&q=80' },
    { title: 'Harmonização Facial', icon: '💆‍♀️', desc: 'Realce sua beleza natural com procedimentos estéticos modernos.', image: 'https://images.prismic.io/albufeira/4e43b1e5-566c-47c9-b923-162197e23212_what-is-a-botox-lip-flip.png?auto=compress%2Cformat&fit=max&q=50' },
    { title: 'Cirurgia', icon: '⚕️', desc: 'Procedimentos cirúrgicos seguros e humanizados para o seu bem-estar.', image: 'https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=500&q=80' },
    { title: 'Endodontia (Canal)', icon: '🩺', desc: 'Tratamento especializado para eliminar a dor e salvar o seu dente.', image: 'https://cdsodontodigital.com.br/wp-content/uploads/2022/02/07.jpg' },
    { title: 'Dentística (Restauração)', icon: '💎', desc: 'Devolva a forma e a função dos dentes afetados por cáries ou traumas.', image: 'https://images.unsplash.com/photo-1600170311833-c2cf5280ce49?w=500&q=80' },
  ];

  return (
    <section id="servicos" className="services-section" style={{ backgroundColor: 'var(--pristine-white)' }}>
      <div className="container" style={{ paddingBottom: '2rem' }}>
        <h4 className="section-subtitle">Nossas Áreas de Atuação</h4>
        <h2 className="section-title">Especialidades OdontoFav</h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
          {servicos.map((s, index) => (
            <div key={index} className="flip-card result-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>{s.icon}</div>
                  <h3 style={{ color: 'var(--sapphire-blue)', marginBottom: '1rem', fontSize: '1.4rem' }}>{s.title}</h3>
                  <p style={{ color: '#475569', lineHeight: '1.6' }}>{s.desc}</p>
                </div>
                <div className="flip-card-back" style={{ backgroundImage: `url(${s.image})` }}>
                  <div className="flip-card-back-content">
                    <h3 style={{ color: 'var(--pristine-white)', marginBottom: '1rem', fontSize: '1.4rem' }}>{s.title}</h3>
                    <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '0.95rem', lineHeight: '1.5' }}>Conheça nossos diferenciais em {s.title.toLowerCase()}.</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
