/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
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

export default function App() {
  const [modalImage, setModalImage] = useState<{ src: string; title: string } | null>(null);

  const handleOpenImageModal = (src: string, title: string) => {
    setModalImage({ src, title });
  };

  const handleCloseImageModal = () => {
    setModalImage(null);
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 flex flex-col font-sans selection:bg-purple-600/30 selection:text-purple-200">
      {/* Top Navbar */}
      <Navbar />

      {/* Main Content Area */}
      <main className="flex-1">
        <Hero />
        <SOPSection onOpenImageModal={handleOpenImageModal} />
        <SkillsSection />
        <ProjectsSection onOpenImageModal={handleOpenImageModal} />
        <CertificatesSection onOpenImageModal={handleOpenImageModal} />
        <ActivitiesSection onOpenImageModal={handleOpenImageModal} />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Lightbox Image Inspection Modal */}
      <ImageModal
        src={modalImage?.src || null}
        title={modalImage?.title || null}
        onClose={handleCloseImageModal}
      />
    </div>
  );
}
