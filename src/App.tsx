/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SOPSection } from './components/SOPSection';
import { SkillsSection } from './components/SkillsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { CertificatesSection } from './components/CertificatesSection';
import { ActivitiesSection } from './components/ActivitiesSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ImageModal } from './components/ImageModal';
import { BackgroundEffects } from './components/BackgroundEffects';
import { IntroLoader } from './components/IntroLoader';

export default function App() {
  const [modalImage, setModalImage] = useState<{ src: string; title: string } | null>(null);
  const [introActive, setIntroActive] = useState(() => !window.matchMedia('(prefers-reduced-motion: reduce)').matches);

  useEffect(() => {
    if (!introActive) return;
    const root = document.documentElement;
    const body = document.body;
    const previousRootOverflow = root.style.overflow;
    const previousBodyOverflow = body.style.overflow;
    root.style.overflow = 'hidden';
    body.style.overflow = 'hidden';
    const timer = window.setTimeout(() => setIntroActive(false), 3000);
    return () => {
      window.clearTimeout(timer);
      root.style.overflow = previousRootOverflow;
      body.style.overflow = previousBodyOverflow;
    };
  }, [introActive]);

  useEffect(() => {
    const root = document.documentElement;
    const previousRestoration = window.history.scrollRestoration;
    window.history.scrollRestoration = 'manual';

    const returnToTop = () => {
      const previousBehavior = root.style.scrollBehavior;
      root.style.scrollBehavior = 'auto';
      window.scrollTo(0, 0);
      root.style.scrollBehavior = previousBehavior;
    };
    const handleVisibility = () => {
      if (document.visibilityState === 'visible') returnToTop();
    };

    window.addEventListener('pageshow', returnToTop);
    window.addEventListener('popstate', returnToTop);
    document.addEventListener('visibilitychange', handleVisibility);
    return () => {
      window.history.scrollRestoration = previousRestoration;
      window.removeEventListener('pageshow', returnToTop);
      window.removeEventListener('popstate', returnToTop);
      document.removeEventListener('visibilitychange', handleVisibility);
    };
  }, []);

  const handleOpenImageModal = (src: string, title: string) => {
    setModalImage({ src, title });
  };

  const handleCloseImageModal = () => {
    setModalImage(null);
  };

  return (
    <div className="min-h-screen relative isolate bg-neutral-950 text-neutral-100 font-sans selection:bg-purple-600/30 selection:text-purple-200">
      <BackgroundEffects />
      <div className={`relative z-10 min-h-screen flex flex-col ${introActive ? 'site-content-hidden' : 'site-content-enter'}`} aria-hidden={introActive} inert={introActive}>
        {/* Top Navbar */}
        <Navbar />

        {/* Main Content Area */}
        <main className="flex-1">
          <Hero />
          <SOPSection />
          <SkillsSection />
          <ProjectsSection onOpenImageModal={handleOpenImageModal} />
          <CertificatesSection onOpenImageModal={handleOpenImageModal} />
          <ActivitiesSection onOpenImageModal={handleOpenImageModal} />
          <ContactSection />
        </main>

        {/* Footer */}
        <Footer />
      </div>

      {introActive && <IntroLoader />}

      {/* Lightbox Image Inspection Modal */}
      <ImageModal
        src={modalImage?.src || null}
        title={modalImage?.title || null}
        onClose={handleCloseImageModal}
      />
    </div>
  );
}
