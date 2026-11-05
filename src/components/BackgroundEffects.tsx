import React from 'react';

const PARTICLES = Array.from({ length: 14 }, (_, index) => index);

export const BackgroundEffects: React.FC = () => (
  <div className="site-atmosphere" aria-hidden="true">
    <div className="ambient-orb ambient-orb-primary" />
    <div className="ambient-orb ambient-orb-secondary" />
    <div className="particle-field">
      {PARTICLES.map((particle) => <i key={particle} className={`ambient-particle particle-${particle + 1}`} />)}
    </div>
    <img className="seal-watermark" src="/portfolio-assets/andrews-seal-watermark.png" alt="" />
    <div className="grid-haze" />
  </div>
);
