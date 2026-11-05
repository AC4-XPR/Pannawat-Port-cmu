import React from 'react';
import { ArrowUp } from 'lucide-react';
import { PROFILE_DATA } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-10 bg-neutral-950 text-neutral-400 text-xs border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-1 text-center sm:text-left">
            <div className="text-sm font-semibold text-neutral-200 font-display">
              {PROFILE_DATA.name} · {PROFILE_DATA.nameEn}
            </div>
            <div className="text-xs text-neutral-400 font-mono">
              Portfolio for Admission to CMU CAMT · สาขาวิชาดิจิทัลเกม (Digital Games · DG)
            </div>
          </div>

          <div className="flex items-center gap-4 text-xs font-mono">
            <a
              href={PROFILE_DATA.contacts.xprWebUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              XPR Corporation
            </a>
            <span className="text-neutral-700">·</span>
            <a
              href={PROFILE_DATA.contacts.githubPersonalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              GitHub ({PROFILE_DATA.contacts.githubPersonal})
            </a>
            <span className="text-neutral-700">·</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 hover:text-white transition-colors cursor-pointer"
              aria-label="Scroll to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        <div className="mt-6 pt-5 border-t border-neutral-900/80 text-center text-[11px] text-neutral-400">
          © 2026 {PROFILE_DATA.nameEn}. All rights reserved. Web Portfolio for Admission to Chiang Mai University (CMU CAMT DG).
        </div>
      </div>
    </footer>
  );
};
