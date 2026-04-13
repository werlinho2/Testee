import React from 'react';
import LocationSection from '../components/LocationSection';

const Unidades = () => {
  return (
    <div className="page-wrapper" style={{ paddingTop: '8rem', minHeight: '100vh', backgroundColor: 'var(--pristine-white)' }}>
      <div className="container" style={{ padding: '0 5% 2rem 5%' }}>
        <h2 className="section-title text-center" style={{ marginBottom: '2rem' }}>Detalhes das Nossas Unidades</h2>
        <p className="text-center" style={{ maxWidth: '800px', margin: '0 auto', fontSize: '1.2rem', color: '#64748B' }}>
          Ambas as clínicas mantêm os mais altos padrões de higiene, infraestrutura e equipamentos digitais de última geração para exames como escaneamento 3D e radiografia panorâmica on-site. Abaixo você confere os endereços e como chegar com comodidade.
        </p>
      </div>
      
      {/* Componente base que lista os mapas agora é compartilhado perfeitamente */}
      <LocationSection />
      
      {/* Informações adicionais na página interna */}
      <div className="container" style={{ marginTop: '2rem', padding: '0 5% 6rem 5%' }}>
        <h3 style={{ color: 'var(--sapphire-blue)', fontSize: '2rem', marginBottom: '2rem', textAlign: 'center' }}>Mais Informações Locais</h3>
        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center', textAlign: 'center', color: '#475569' }}>
          <li>✓ Estacionamento Privativo Subterrâneo em ambas as unidades</li>
          <li>✓ Elevador exclusivo na Unidade Paulista (acesso direto do subsolo)</li>
          <li>✓ Horário de Funcionamento flexível para tratamento intensivo (sob consulta)</li>
        </ul>
      </div>
    </div>
  );
};

export default Unidades;
