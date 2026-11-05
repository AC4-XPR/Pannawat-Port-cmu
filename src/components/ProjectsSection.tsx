import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { ExternalLink, X, ArrowUpRight, Code, Layers, Sparkles, CheckCircle2 } from 'lucide-react';
import { PROJECTS, ProjectItem } from '../data/portfolioData';
import { XprGroupFlowDiagram } from './XprGroupFlowDiagram';

interface ProjectsSectionProps {
  onOpenImageModal: (src: string, title: string) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onOpenImageModal }) => {
  const [filter, setFilter] = useState<'all' | 'game' | 'tool' | 'web' | 'experiment'>('all');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const personalProjects = PROJECTS.filter((project) => !project.certificateIds?.length);
  const filteredProjects = filter === 'all'
    ? personalProjects
    : personalProjects.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-20 border-b border-neutral-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pb-12 border-b border-neutral-800/80">
          <div>
            <div className="text-xs font-mono text-purple-400 tracking-wider uppercase mb-1">
              03. Featured (Personal) Works & Engineering
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold font-display text-white tracking-tight">
              Projects & Game Creations
            </h2>
            <p className="text-sm text-neutral-400 mt-1 max-w-xl font-light">
              ผลงานส่วนตัวด้านการพัฒนาเกมและผลิตภัณฑ์ดิจิทัล ตั้งแต่แนวคิดและระบบเกม ไปจนถึงสถาปัตยกรรมซอฟต์แวร์และเครื่องมือที่ใช้งานได้จริง
            </p>
          </div>

          {/* Interactive Filter Controls (Segmented buttons adhering to Section 1.A) */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-neutral-900/90 border border-neutral-800 rounded-xl self-start sm:self-auto">
            <button
              onClick={() => setFilter('all')}
              aria-pressed={filter === 'all'}
              className={`selection-filter px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
                filter === 'all'
                  ? 'bg-purple-600 text-white shadow-sm'
                  : 'text-neutral-400 hover:text-white hover:bg-neutral-800/50'
              }`}
            >
              All Works ({personalProjects.length})
            </button>
            <button
              onClick={() => setFilter('game')}
              aria-pressed={filter === 'game'}
              className={`selection-filter px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
                filter === 'game'
                  ? 'bg-purple-600 text-white shadow-sm'
                  : 'text-neutral-400 hover:text-white hover:bg-neutral-800/50'
              }`}
            >
              Games
            </button>
            <button
              onClick={() => setFilter('tool')}
              aria-pressed={filter === 'tool'}
              className={`selection-filter px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
                filter === 'tool'
                  ? 'bg-purple-600 text-white shadow-sm'
                  : 'text-neutral-400 hover:text-white hover:bg-neutral-800/50'
              }`}
            >
              Tools & Architecture
            </button>
            <button
              onClick={() => setFilter('web')}
              aria-pressed={filter === 'web'}
              className={`selection-filter px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
                filter === 'web'
                  ? 'bg-purple-600 text-white shadow-sm'
                  : 'text-neutral-400 hover:text-white hover:bg-neutral-800/50'
              }`}
            >
              Web App
            </button>
            <button
              onClick={() => setFilter('experiment')}
              aria-pressed={filter === 'experiment'}
              className={`selection-filter px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
                filter === 'experiment'
                  ? 'bg-purple-600 text-white shadow-sm'
                  : 'text-neutral-400 hover:text-white hover:bg-neutral-800/50'
              }`}
            >
              Security
            </button>
          </div>
        </div>

        {/* Dynamic Bento Box Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-10">
          {filteredProjects.map((project, index) => {
            const isWide = index === 0 || index === 2; // Bento emphasis
            return (
              <React.Fragment key={project.id}>
                {project.group === 'additional' && filteredProjects[index - 1]?.group !== 'additional' && (
                  <div className="md:col-span-2 lg:col-span-3 pt-5">
                    <h3 className="text-lg sm:text-xl font-bold font-display text-white">Additional Projects</h3>
                    <p className="mt-1 text-xs text-neutral-400">ผลงานส่วนตัวเพิ่มเติมจากโปรเจกต์หลัก</p>
                  </div>
                )}
                <div
                  onClick={() => setSelectedProject(project)}
                  onKeyDown={(event) => {
                    if (event.key === 'Enter' || event.key === ' ') {
                      event.preventDefault();
                      setSelectedProject(project);
                    }
                  }}
                  role="button"
                  tabIndex={0}
                  aria-label={`Select ${project.title}`}
                  className={`vfx-card selection-target group cursor-pointer rounded-2xl bg-neutral-900/40 border border-neutral-800/80 hover:border-purple-500/50 hover:bg-neutral-900/70 transition-all duration-300 overflow-hidden flex flex-col justify-between ${
                    isWide ? 'md:col-span-2' : 'col-span-1'
                  }`}
                >
                  <span className="select-stamp" aria-hidden="true">SELECT</span>
                <div>
                  {/* Thumbnail / Image container */}
                  {project.diagram === 'xpr-group' ? (
                    <XprGroupFlowDiagram compact />
                  ) : (
                    <div className={`overflow-hidden relative bg-neutral-950 ${isWide ? 'aspect-[21/9]' : 'aspect-[16/10]'}`}>
                      <img
                        src={project.thumbnail}
                        alt={project.title}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent" />

                      {project.highlightBadge && (
                        <div className="absolute top-3 left-3 bg-neutral-950/80 backdrop-blur-md border border-neutral-700/80 text-purple-300 text-[11px] font-mono px-2.5 py-1 rounded">
                          {project.highlightBadge}
                        </div>
                      )}

                      <div className="absolute top-3 right-3 p-1.5 rounded-full bg-neutral-950/70 text-neutral-300 opacity-0 group-hover:opacity-100 transition-opacity">
                        <ArrowUpRight className="w-4 h-4 text-purple-400" />
                      </div>

                      <div className="absolute bottom-3 left-3 right-3">
                        <div className="text-xs font-mono text-neutral-400">{project.subtitle}</div>
                      </div>
                    </div>
                  )}

                  {/* Card Content */}
                  <div className="p-6 space-y-3">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="text-lg sm:text-xl font-bold font-display text-white group-hover:text-purple-300 transition-colors">
                        {project.title}
                      </h3>
                      <span className="text-xs font-mono text-neutral-400 shrink-0">
                        {project.year}
                      </span>
                    </div>

                    <p className="text-xs sm:text-sm text-neutral-300 line-clamp-2 leading-relaxed font-light">
                      {project.tagline}
                    </p>
                  </div>
                </div>

                {/* Footer Metadata (Zero-pill text separators) */}
                <div className="px-6 pb-6 pt-2 border-t border-neutral-800/60 flex flex-wrap items-center justify-between gap-2 text-xs text-neutral-400">
                  <div className="flex flex-wrap items-center gap-1.5 font-mono text-[11px]">
                    {project.techStack.slice(0, 3).map((tech, tIdx) => (
                      <span key={tIdx} className="text-neutral-400">
                        {tech}
                        {tIdx < Math.min(project.techStack.length, 3) - 1 ? ' ·' : ''}
                      </span>
                    ))}
                  </div>

                  <span className="text-purple-400 font-medium group-hover:translate-x-0.5 transition-transform flex items-center gap-1">
                    <span>ดูรายละเอียด</span>
                    <span>→</span>
                  </span>
                </div>
                </div>
              </React.Fragment>
            );
          })}
        </div>

        {/* Project Detail Modal */}
        {selectedProject && createPortal((
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200"
            onClick={() => setSelectedProject(null)}
          >
            <div
              className="relative w-full max-w-3xl my-8 rounded-2xl bg-neutral-900 border border-neutral-800 shadow-2xl p-6 sm:p-8 space-y-6 max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-5 right-5 p-2 rounded-lg bg-neutral-800 text-neutral-400 hover:text-white transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Header */}
              <div className="space-y-2 pr-10">
                <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-purple-400">
                  <span>{selectedProject.year}</span>
                  <span>·</span>
                  <span>{selectedProject.category.toUpperCase()}</span>
                  {selectedProject.highlightBadge && (
                    <>
                      <span>·</span>
                      <span className="text-purple-300">{selectedProject.highlightBadge}</span>
                    </>
                  )}
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold font-display text-white">
                  {selectedProject.title}
                </h3>
                <p className="text-sm text-neutral-300 font-medium">
                  {selectedProject.subtitle}
                </p>
              </div>

              {selectedProject.diagram === 'xpr-group' && <XprGroupFlowDiagram />}

              {/* Gallery Images */}
              {selectedProject.gallery && selectedProject.gallery.length > 0 && (
                <div className="space-y-2">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {selectedProject.gallery.map((imgSrc, gIdx) => (
                      <div
                        key={gIdx}
                        onClick={() => onOpenImageModal(imgSrc, `${selectedProject.title} screenshot`)}
                        className="rounded-xl overflow-hidden border border-neutral-800 bg-neutral-950 aspect-[16/10] cursor-pointer hover:border-purple-500/50 transition-colors relative group"
                      >
                        <img
                          src={imgSrc}
                          alt={`${selectedProject.title} ${gIdx + 1}`}
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <span className="absolute bottom-2 right-2 text-[10px] bg-black/70 text-white/90 px-2 py-0.5 rounded font-mono">
                          คลิกดูภาพใหญ่
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Role & Tech Stack */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 rounded-xl bg-neutral-950/60 border border-neutral-800/80 text-xs sm:text-sm">
                <div>
                  <span className="text-neutral-400 block mb-1 font-mono text-xs">บทบาทหน้าที่ (Roles):</span>
                  <div className="text-neutral-200 font-medium">
                    {selectedProject.role.join(' · ')}
                  </div>
                </div>
                <div>
                  <span className="text-neutral-400 block mb-1 font-mono text-xs">Tech Stack:</span>
                  <div className="text-purple-300 font-mono text-xs">
                    {selectedProject.techStack.join(' · ')}
                  </div>
                </div>
              </div>

              {/* Description Prose */}
              <div className="space-y-3 text-xs sm:text-sm text-neutral-300 leading-relaxed">
                <h4 className="text-sm font-semibold text-white font-mono uppercase tracking-wider">
                  Origin & Concept · ความเป็นมาและแนวคิด
                </h4>
                {selectedProject.description.map((p, pIdx) => (
                  <p key={pIdx}>{p}</p>
                ))}
              </div>

              {/* Key Features */}
              {selectedProject.keyFeatures && (
                <div className="space-y-3 text-xs sm:text-sm">
                  <h4 className="text-sm font-semibold text-white font-mono uppercase tracking-wider">
                    Key Features · ฟังก์ชันและระบบเด่น
                  </h4>
                  <ul className="space-y-2">
                    {selectedProject.keyFeatures.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2 text-neutral-300">
                        <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Project Specification & Architecture Web Component */}
              {selectedProject.specs && (
                <div className="rounded-xl bg-neutral-950 border border-neutral-800 p-4 sm:p-5 space-y-3.5">
                  <div className="flex items-center justify-between pb-2.5 border-b border-neutral-800/80">
                    <div className="flex items-center gap-2 text-xs font-mono text-purple-400 font-semibold uppercase tracking-wider">
                      <Layers className="w-4 h-4 text-purple-400" />
                      <span>Project System Architecture · สรุปข้อมูลโครงการ</span>
                    </div>
                    {selectedProject.specs.status && (
                      <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-purple-950/60 border border-purple-800/60 text-purple-300">
                        {selectedProject.specs.status}
                      </span>
                    )}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                    <div className="space-y-1">
                      <span className="text-neutral-400 font-mono text-[11px]">ชื่อผลงาน (Project):</span>
                      <div className="font-semibold text-white">{selectedProject.specs.projectName}</div>
                    </div>

                    {selectedProject.specs.team && (
                      <div className="space-y-1">
                        <span className="text-neutral-400 font-mono text-[11px]">ทีมผู้พัฒนา (Team):</span>
                        <div className="text-neutral-200">{selectedProject.specs.team}</div>
                      </div>
                    )}

                    {selectedProject.specs.duration && (
                      <div className="space-y-1">
                        <span className="text-neutral-400 font-mono text-[11px]">ระยะเวลาพัฒนา (Duration):</span>
                        <div className="text-neutral-200">{selectedProject.specs.duration}</div>
                      </div>
                    )}

                    {selectedProject.specs.frameworkOrEngine && (
                      <div className="space-y-1">
                        <span className="text-neutral-400 font-mono text-[11px]">เอนจิน / สถาปัตยกรรม (Architecture):</span>
                        <div className="text-purple-300 font-mono">{selectedProject.specs.frameworkOrEngine}</div>
                      </div>
                    )}

                    <div className="sm:col-span-2 space-y-1 pt-1 border-t border-neutral-800/50">
                      <span className="text-neutral-400 font-mono text-[11px]">แนวคิดหลัก (Concept):</span>
                      <div className="text-neutral-200 leading-relaxed">{selectedProject.specs.concept}</div>
                    </div>

                    {selectedProject.specs.result && (
                      <div className="sm:col-span-2 space-y-1 pt-1 border-t border-neutral-800/50">
                        <span className="text-neutral-400 font-mono text-[11px]">ผลลัพธ์ / รางวัล (Result & Achievement):</span>
                        <div className="text-emerald-400 font-medium flex items-center gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                          <span>{selectedProject.specs.result}</span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Impact */}
              {selectedProject.impact && (
                <div className="space-y-2 text-xs sm:text-sm p-4 rounded-xl bg-purple-950/20 border border-purple-900/30">
                  <span className="text-xs font-mono text-purple-400 font-semibold uppercase">
                    Impact & Outcomes · ผลกระทบและการนำไปใช้จริง
                  </span>
                  <ul className="space-y-1 text-neutral-200 list-disc list-inside">
                    {selectedProject.impact.map((imp, iIdx) => (
                      <li key={iIdx}>{imp}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Modal Footer Links */}
              {selectedProject.links && selectedProject.links.length > 0 && (
                <nav aria-label={`${selectedProject.title} project links`} className="flex flex-wrap items-center gap-3 pt-4 border-t border-neutral-800">
                  {selectedProject.links.map((link, lIdx) => (
                    <a
                      key={lIdx}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${link.label} (opens in a new tab)`}
                      className="inline-flex min-h-10 items-center gap-2 rounded-lg border border-purple-400/30 bg-purple-950/30 px-4 py-2 text-sm font-medium text-purple-100 transition-colors hover:border-purple-300/70 hover:bg-purple-900/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-300 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-900"
                    >
                      <span>{link.label}</span>
                      <ExternalLink aria-hidden="true" className="w-4 h-4 shrink-0" />
                    </a>
                  ))}
                </nav>
              )}
            </div>
          </div>
        ), document.body)}
      </div>
    </section>
  );
};
