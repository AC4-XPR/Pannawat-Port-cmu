import React from 'react';

export const IntroLoader: React.FC = () => (
  <div className="intro-overlay" aria-hidden="true">
    <div className="intro-seal-frame">
      <img className="intro-seal" src="/portfolio-assets/andrews-seal-watermark.png" alt="" />
      <svg className="intro-trace" viewBox="0 0 100 100" fill="none">
        <path className="trace-path trace-delay-1" pathLength="1" d="M50 50h11V39h12V25h16" />
        <path className="trace-path trace-delay-2" pathLength="1" d="M50 50H39V61H27v14H11" />
        <path className="trace-path trace-delay-3" pathLength="1" d="M50 50V38H40V26H28V10" />
        <path className="trace-path trace-delay-4" pathLength="1" d="M50 50v12h10v12h13v16" />
        <path className="trace-path trace-delay-5" pathLength="1" d="M50 50h17v8h13v8h12" />
        <path className="trace-path trace-delay-6" pathLength="1" d="M50 50H33v-8H20v-8H8" />
        <path className="trace-path trace-delay-7" pathLength="1" d="M50 50v-17h8V20h8V7" />
        <path className="trace-path trace-delay-8" pathLength="1" d="M50 50v17h-8v13h-8v13" />
        <circle className="trace-node trace-delay-2" cx="89" cy="25" r="1" />
        <circle className="trace-node trace-delay-4" cx="11" cy="75" r="1" />
        <circle className="trace-node trace-delay-6" cx="92" cy="66" r="1" />
        <circle className="trace-node trace-delay-8" cx="34" cy="93" r="1" />
      </svg>
    </div>
  </div>
);
