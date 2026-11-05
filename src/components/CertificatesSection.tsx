import React, { useState } from 'react';
import { Award, ZoomIn, Calendar, ShieldCheck, ChevronRight, X, ExternalLink, Sparkles } from 'lucide-react';
import { CERTIFICATES, CertificateItem, PROJECTS, ProjectItem } from '../data/portfolioData';

interface CertificatesSectionProps {
  onOpenImageModal: (src: string, title: string) => void;
}

export const CertificatesSection: React.FC<CertificatesSectionProps> = ({ onOpenImageModal }) => {
  const [filter, setFilter] = useState<'all' | 'gamedev' | 'robotics' | 'science' | 'academic'>('all');
  const [selectedCert, setSelectedCert] = useState<CertificateItem | null>(null);

  const filteredCerts = filter === 'all'
    ? CERTIFICATES
    : CERTIFICATES.filter(c => c.category === filter);
  const relatedProjects = selectedCert?.relatedProjectIds
    ?.map((projectId) => PROJECTS.find((project) => project.id === projectId))
    .filter((project): project is ProjectItem => project !== undefined) ?? [];

  return (
    <section id="awards" className="py-20 border-b border-neutral-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pb-12 border-b border-neutral-800/80">
          <div>
            <div className="text-xs font-mono text-purple-400 tracking-wider uppercase mb-1">
              04. Honors, Awards & Certificates
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold font-display text-white tracking-tight">
              Certificates & Achievements
            </h2>
            <p className="text-sm text-neutral-400 mt-1 max-w-xl font-light">
              หลักฐานแสดงความสามารถจากการแข่งขันพัฒนาเกม โครงการ กิจกรรมด้านวิศวกรรม และเวทีระดับชาติ
            </p>
          </div>

          {/* Category Filters (Segmented controls) */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-neutral-900/90 border border-neutral-800 rounded-xl self-start sm:self-auto">
            <button
              onClick={() => setFilter('all')}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
                filter === 'all'
                  ? 'bg-purple-600 text-white shadow-sm'
                  : 'text-neutral-400 hover:text-white hover:bg-neutral-800/50'
              }`}
            >
              ทั้งหมด ({CERTIFICATES.length})
            </button>
            <button
              onClick={() => setFilter('gamedev')}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
                filter === 'gamedev'
                  ? 'bg-purple-600 text-white shadow-sm'
                  : 'text-neutral-400 hover:text-white hover:bg-neutral-800/50'
              }`}
            >
              Game Dev
            </button>
            <button
              onClick={() => setFilter('robotics')}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
                filter === 'robotics'
                  ? 'bg-purple-600 text-white shadow-sm'
                  : 'text-neutral-400 hover:text-white hover:bg-neutral-800/50'
              }`}
            >
              Robotics & AI
            </button>
            <button
              onClick={() => setFilter('science')}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
                filter === 'science'
                  ? 'bg-purple-600 text-white shadow-sm'
                  : 'text-neutral-400 hover:text-white hover:bg-neutral-800/50'
              }`}
            >
              Science & Inventions
            </button>
            <button
              onClick={() => setFilter('academic')}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
                filter === 'academic'
                  ? 'bg-purple-600 text-white shadow-sm'
                  : 'text-neutral-400 hover:text-white hover:bg-neutral-800/50'
              }`}
            >
              Academic
            </button>
          </div>
        </div>

        {/* Certificate Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-10">
          {filteredCerts.map((cert) => (
            <div
              key={cert.id}
              onClick={() => setSelectedCert(cert)}
              className="vfx-card group cursor-pointer rounded-2xl bg-neutral-900/40 border border-neutral-800/80 hover:border-purple-500/50 hover:bg-neutral-900/70 transition-all duration-300 overflow-hidden flex flex-col justify-between"
            >
              <div>
                {/* Certificate Image Frame */}
                <div className="relative aspect-[4/3] bg-neutral-950 overflow-hidden">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-transparent to-transparent" />

                  {/* Top Zoom Icon */}
                  <div className="absolute top-3 right-3 p-1.5 rounded-full bg-neutral-950/80 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                    <ZoomIn className="w-4 h-4 text-purple-400" />
                  </div>

                  {/* Award Level Tag */}
                  {cert.awardLevel && (
                    <div className="absolute bottom-3 left-3 bg-neutral-950/90 border border-neutral-700/80 text-amber-300 text-[11px] font-mono px-2.5 py-1 rounded">
                      {cert.awardLevel}
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-5 space-y-2.5">
                  <h3 className="text-base font-semibold font-display text-white group-hover:text-purple-300 transition-colors line-clamp-2">
                    {cert.title}
                  </h3>
                  <div className="text-xs text-neutral-400 flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                    <span className="truncate">{cert.issuer}</span>
                  </div>
                  <p className="text-xs text-neutral-300 font-light line-clamp-2 leading-relaxed">
                    {cert.description}
                  </p>
                </div>
              </div>

              {/* Date & Action */}
              <div className="px-5 pb-5 pt-2 border-t border-neutral-800/60 flex items-center justify-between text-xs text-neutral-400 font-mono">
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-3 h-3 text-neutral-400" />
                  <span>{cert.date}</span>
                </span>
                <span className="text-purple-400 font-medium group-hover:translate-x-0.5 transition-transform flex items-center gap-0.5">
                  <span>ดูรายละเอียด</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Certificate Detail & Info Pop-up Modal */}
        {selectedCert && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200"
            onClick={() => setSelectedCert(null)}
          >
            <div
              className="relative w-full max-w-2xl my-8 rounded-2xl bg-neutral-900 border border-neutral-800 shadow-2xl p-6 sm:p-8 space-y-5 max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedCert(null)}
                className="absolute top-5 right-5 p-2 rounded-lg bg-neutral-800 text-neutral-400 hover:text-white transition-colors"
                aria-label="Close certificate modal"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Header Badges */}
              <div className="space-y-2 pr-10">
                <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
                  <span className="px-2 py-0.5 rounded bg-purple-950 border border-purple-800/60 text-purple-300">
                    {selectedCert.category.toUpperCase()}
                  </span>
                  {selectedCert.awardLevel && (
                    <span className="px-2 py-0.5 rounded bg-amber-950/60 border border-amber-800/60 text-amber-300 font-semibold">
                      {selectedCert.awardLevel}
                    </span>
                  )}
                  <span className="text-neutral-500">·</span>
                  <span className="text-neutral-400">{selectedCert.date}</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold font-display text-white">
                  {selectedCert.title}
                </h3>
              </div>

              {/* Certificate Image Frame with Click to Zoom */}
              <div
                onClick={() => onOpenImageModal(selectedCert.image, selectedCert.title)}
                className="relative rounded-xl overflow-hidden border border-neutral-800 bg-neutral-950 aspect-[4/3] cursor-pointer group hover:border-purple-500/50 transition-colors"
              >
                <img
                  src={selectedCert.image}
                  alt={selectedCert.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-contain p-2 group-hover:scale-[1.02] transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 px-3 py-1.5 rounded-lg bg-neutral-900/90 border border-neutral-700 text-xs text-white font-mono flex items-center gap-1.5 transition-opacity">
                    <ZoomIn className="w-3.5 h-3.5 text-purple-400" />
                    <span>คลิกเพื่อดูภาพเต็มจอ</span>
                  </div>
                </div>
              </div>

              {/* Meta Details */}
              <div className="p-4 rounded-xl bg-neutral-950/60 border border-neutral-800/80 space-y-2.5 text-xs sm:text-sm">
                <div className="flex items-start gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-neutral-400 block font-mono text-[11px]">หน่วยงานผู้มอบ / สถาบัน:</span>
                    <span className="text-neutral-200 font-medium">{selectedCert.issuer}</span>
                  </div>
                </div>
                <div className="flex items-start gap-2.5 pt-2 border-t border-neutral-800/50">
                  <Calendar className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-neutral-400 block font-mono text-[11px]">วันที่ได้รับ:</span>
                    <span className="text-neutral-200 font-medium">{selectedCert.date}</span>
                  </div>
                </div>
              </div>

              {/* Full Description */}
              <div className="space-y-1.5 text-xs sm:text-sm text-neutral-300 leading-relaxed">
                <h4 className="text-xs font-semibold text-white font-mono uppercase tracking-wider">
                  รายละเอียดผลงาน & ความสำคัญ
                </h4>
                <p className="p-3.5 rounded-xl bg-neutral-900/60 border border-neutral-800/60">
                  {selectedCert.description}
                </p>
              </div>

              {selectedCert.context && selectedCert.context.length > 0 && (
                <div className="space-y-2 text-xs sm:text-sm text-neutral-300 leading-relaxed">
                  <h4 className="text-xs font-semibold text-white font-mono uppercase tracking-wider">
                    บริบทกิจกรรม & ทักษะที่ได้รับ
                  </h4>
                  <ul className="space-y-2 p-4 rounded-xl bg-purple-950/20 border border-purple-900/30 list-disc list-inside">
                    {selectedCert.context.map((item, index) => <li key={index}>{item}</li>)}
                  </ul>
                </div>
              )}

              {relatedProjects.length > 0 && (
                <div className="space-y-3">
                  <h4 className="text-xs font-semibold text-white font-mono uppercase tracking-wider">
                    ผลงานที่เกี่ยวข้อง · Project Context
                  </h4>
                  {relatedProjects.map((project) => (
                    <article key={project.id} className="p-4 sm:p-5 rounded-xl bg-neutral-950/70 border border-neutral-800 space-y-4">
                      <div>
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <h5 className="text-base font-semibold text-white">{project.title}</h5>
                          <span className="text-[11px] text-purple-300 font-mono">{project.year}</span>
                        </div>
                        <p className="mt-1 text-xs text-neutral-400">{project.subtitle}</p>
                      </div>
                      <div className="space-y-2 text-xs sm:text-sm text-neutral-300 leading-relaxed">
                        {project.description.map((paragraph, index) => <p key={index}>{paragraph}</p>)}
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {project.techStack.map((technology) => (
                          <span key={technology} className="px-2 py-1 rounded-md bg-neutral-900 border border-neutral-800 text-[10px] text-neutral-300 font-mono">
                            {technology}
                          </span>
                        ))}
                      </div>
                      {project.keyFeatures && (
                        <ul className="space-y-1.5 text-xs text-neutral-300">
                          {project.keyFeatures.map((feature, index) => <li key={index}>• {feature}</li>)}
                        </ul>
                      )}
                      {project.impact && (
                        <div className="pt-3 border-t border-neutral-800/80 space-y-1">
                          <span className="text-[11px] text-purple-300 font-mono uppercase">ผลลัพธ์ & บทบาท</span>
                          {project.impact.map((item, index) => <p key={index} className="text-xs text-neutral-300">{item}</p>)}
                        </div>
                      )}
                    </article>
                  ))}
                </div>
              )}

              {/* Actions */}
              <div className="flex items-center justify-between pt-3 border-t border-neutral-800">
                <button
                  onClick={() => onOpenImageModal(selectedCert.image, selectedCert.title)}
                  className="flex items-center gap-2 px-4 py-2 text-xs font-medium text-white bg-purple-600 hover:bg-purple-500 rounded-lg transition-colors shadow-sm"
                >
                  <ZoomIn className="w-3.5 h-3.5" />
                  <span>ขยายดูภาพใบประกาศเต็ม</span>
                </button>
                <button
                  onClick={() => setSelectedCert(null)}
                  className="px-4 py-2 text-xs font-medium text-neutral-400 hover:text-white transition-colors"
                >
                  ปิดหน้าต่าง
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
