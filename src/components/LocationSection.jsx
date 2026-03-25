const LocationSection = () => {
  return (
    <section id="localizacao" className="location-section" style={{ padding: '10rem 5%', backgroundColor: 'var(--off-white)' }}>
      <div className="container">
        <h4 className="section-subtitle text-center">Onde Estamos</h4>
        <h2 className="section-title text-center">Nossas Unidades OdontoFav</h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '4rem', marginTop: '4rem' }}>
          
          {/* Unidade Serra */}
          <div className="unidade-bloco" style={{ background: 'var(--pristine-white)', padding: '2rem', borderRadius: '20px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
            <h3 style={{ fontSize: '2rem', color: 'var(--sapphire-blue)', marginBottom: '1rem' }}>Unidade Serra</h3>
            <p style={{ color: '#475569', marginBottom: '1rem' }}>
              Av. Jones dos Santos Neves, 429 - Caçaroca (Próximo à UPA) | CEP: 29176-437 - Serra/ES
            </p>
            <p style={{ color: '#475569', marginBottom: '2rem', fontWeight: '500' }}>
              ⏰ Seg a Sex: 08h às 18h | Sáb: 08h às 12h
            </p>
            <div className="map-container" style={{ borderRadius: '15px', overflow: 'hidden' }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7492.3301105941055!2d-40.312131660330365!3d-20.127160499583514!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xb81f0030acd295%3A0x44c48624826978a7!2sOdonto%20Fav!5e0!3m2!1spt-BR!2sbr!4v1774023400814!5m2!1spt-BR!2sbr"
                width="100%"
                height="350"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <a href="https://api.whatsapp.com/send/?phone=5527998654698&text=Ol%C3%A1%2C+vim+pelo+site%2C+quero+agendar+uma+consulta+na+Serra%21" target="_blank" rel="noreferrer" className="btn-primary" style={{ display: 'block', textAlign: 'center', marginTop: '2rem' }}>Agendar nesta unidade</a>
          </div>

          {/* Unidade Vitória */}
          <div className="unidade-bloco" style={{ background: 'var(--pristine-white)', padding: '2rem', borderRadius: '20px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
            <h3 style={{ fontSize: '2rem', color: 'var(--sapphire-blue)', marginBottom: '1rem' }}>Unidade Vitória</h3>
            <p style={{ color: '#475569', marginBottom: '1rem' }}>
              Rua Cândido Portinari, 27, 5º Andar / Sala 507 - Ed. River Center | Santa Luíza, CEP: 29045-415 - Vitória/ES
            </p>
            <p style={{ color: '#475569', marginBottom: '2rem', fontWeight: '500' }}>
              ⏰ Seg a Sex: 08h às 18h | Sáb: 08h às 12h
            </p>
            <div className="map-container" style={{ borderRadius: '15px', overflow: 'hidden' }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7484.423881185257!2d-40.3109273064209!3d-20.291492699999992!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xb8170054fd579b%3A0x87837a66ea0af76c!2sOdonto%20Fav%20Vit%C3%B3ria!5e0!3m2!1spt-BR!2sbr!4v1774023475356!5m2!1spt-BR!2sbr"
                width="100%"
                height="350"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <a href="https://api.whatsapp.com/send/?phone=5527998654698&text=Ol%C3%A1%2C+vim+pelo+site%2C+quero+agendar+uma+consulta+em+Vit%C3%B3ria%21" target="_blank" rel="noreferrer" className="btn-primary" style={{ display: 'block', textAlign: 'center', marginTop: '2rem' }}>Agendar nesta unidade</a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default LocationSection;
