import React from 'react';
import { Trophy, Users, Lightbulb, MapPin, Calendar, CheckCircle2 } from 'lucide-react';
import { ACTIVITIES, ActivityItem } from '../data/portfolioData';

interface ActivitiesSectionProps {
  onOpenImageModal: (src: string, title: string) => void;
}

export const ActivitiesSection: React.FC<ActivitiesSectionProps> = ({ onOpenImageModal }) => {
  return (
    <section id="activities" className="py-20 border-b border-neutral-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="pb-12 border-b border-neutral-800/80">
          <div className="text-xs font-mono text-purple-400 tracking-wider uppercase mb-1">
            05. Experience & Competitions
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold font-display text-white tracking-tight">
            Activities & Competitions
          </h2>
          <p className="text-sm text-neutral-400 mt-1 max-w-xl font-light">
            ประสบการณ์การลงแข่งขันจริง การทำงานเป็นทีม การเป็นกัปตันทีม และบทเรียนที่ได้รับจากการลงมือปฏิบัติ
          </p>
        </div>

        {/* Activities List */}
        <div className="space-y-12 pt-10">
          {ACTIVITIES.map((act, index) => (
            <div
              key={act.id}
              className="p-6 sm:p-8 rounded-2xl bg-neutral-900/40 border border-neutral-800/80 hover:border-neutral-700/80 transition-colors space-y-6"
            >
              {/* Header Info */}
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-4 border-b border-neutral-800">
                <div className="space-y-1">
                  <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-purple-400">
                    <span>{act.badge}</span>
                    <span>·</span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-neutral-400" />
                      <span>{act.date}</span>
                    </span>
                    {act.location && (
                      <>
                        <span>·</span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3 h-3 text-neutral-400" />
                          <span>{act.location}</span>
                        </span>
                      </>
                    )}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold font-display text-white">
                    {act.title}
                  </h3>
                  <div className="text-xs sm:text-sm text-neutral-300 font-medium">
                    {act.subtitle}
                  </div>
                </div>

                <div className="text-left sm:text-right shrink-0">
                  <span className="text-xs font-mono text-neutral-400 block">บทบาทความรับผิดชอบ</span>
                  <span className="text-xs sm:text-sm font-semibold text-purple-300">
                    {act.role}
                  </span>
                </div>
              </div>

              {/* Organization */}
              <div className="text-xs text-neutral-400 flex items-center gap-2">
                <Users className="w-3.5 h-3.5 text-purple-400" />
                <span>{act.organization}</span>
              </div>

              {/* Photos Gallery */}
              {act.gallery && act.gallery.length > 0 && (
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {act.gallery.map((imgSrc, gIdx) => (
                    <div
                      key={gIdx}
                      onClick={() => onOpenImageModal(imgSrc, `${act.title} (${gIdx + 1})`)}
                      className="rounded-xl overflow-hidden border border-neutral-800 bg-neutral-950 aspect-[16/10] cursor-pointer hover:border-purple-500/50 transition-colors group relative"
                    >
                      <img
                        src={imgSrc}
                        alt={`${act.title} ${gIdx + 1}`}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <span className="absolute bottom-2 right-2 text-[10px] bg-black/70 text-white/90 px-2 py-0.5 rounded font-mono">
                        ขยายภาพ
                      </span>
                    </div>
                  ))}
                </div>
              )}

              {/* Narrative & Learnings */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 text-xs sm:text-sm leading-relaxed">
                <div className="p-4 rounded-xl bg-neutral-950/50 border border-neutral-800/60 space-y-2">
                  <div className="text-xs font-mono text-neutral-400 font-semibold uppercase flex items-center gap-1.5">
                    <Trophy className="w-3.5 h-3.5 text-purple-400" />
                    <span>รายละเอียดการเข้าร่วม & หน้าที่</span>
                  </div>
                  <p className="text-neutral-300">{act.description}</p>
                </div>

                <div className="p-4 rounded-xl bg-purple-950/20 border border-purple-900/30 space-y-2">
                  <div className="text-xs font-mono text-purple-400 font-semibold uppercase flex items-center gap-1.5">
                    <Lightbulb className="w-3.5 h-3.5 text-purple-400" />
                    <span>สิ่งที่ได้เรียนรู้ (Key Takeaway)</span>
                  </div>
                  <p className="text-neutral-200">{act.learnings}</p>
                </div>
              </div>

              {/* Tech Tags */}
              {act.tech && (
                <div className="pt-2 flex flex-wrap items-center gap-2 text-xs font-mono text-neutral-400">
                  <span className="text-neutral-400">เทคโนโลยีที่ใช้:</span>
                  {act.tech.map((t, idx) => (
                    <span key={idx} className="bg-neutral-800/60 text-neutral-300 px-2.5 py-0.5 rounded text-[11px] border border-neutral-700/40">
                      {t}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
