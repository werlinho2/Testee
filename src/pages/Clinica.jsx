import React from 'react';
import ClinicSection from '../components/ClinicSection';

const Clinica = () => {
  return (
    <div className="page-wrapper" style={{ paddingTop: '8rem', minHeight: '100vh', backgroundColor: 'var(--off-white)' }}>
      <div className="container" style={{ padding: '0 5% 3rem 5%' }}>
        <h2 className="section-title text-center" style={{ marginBottom: '2rem' }}>A Clínica OdontoFav</h2>
        <p className="text-center" style={{ maxWidth: '800px', margin: '0 auto 2rem', fontSize: '1.2rem', color: '#64748B' }}>
          Conheça nosso espaço pensado 100% para o seu conforto e para a melhor execução dos procedimentos clínicos e estéticos.
        </p>
      </div>
      <ClinicSection />
    </div>
  );
};

export default Clinica;
