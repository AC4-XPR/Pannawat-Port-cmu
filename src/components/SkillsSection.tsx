import React from 'react';
import { Code, Cpu, Wrench, Sparkles, Languages, Compass, Bookmark, Music } from 'lucide-react';
import { SKILL_CATEGORIES, PROFILE_DATA } from '../data/portfolioData';

export const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="py-20 border-b border-neutral-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="pb-12 border-b border-neutral-800/80">
          <div className="text-xs font-mono text-purple-400 tracking-wider uppercase mb-1">
            02. Technical Arsenal & Skills
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold font-display text-white tracking-tight">
            Skills & Software Engineering
          </h2>
          <p className="text-sm text-neutral-400 mt-1 max-w-2xl font-light">
            ทักษะความสามารถทางเทคนิค สถาปัตยกรรมเกม และเครื่องมือที่ใช้ในการพัฒนาซอฟต์แวร์และฮาร์ดแวร์
          </p>
        </div>

        {/* 4 Skill Category Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-10">
          {SKILL_CATEGORIES.map((cat, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-neutral-900/40 border border-neutral-800/80 hover:border-neutral-700/80 transition-colors space-y-4"
            >
              <div className="flex items-center justify-between pb-3 border-b border-neutral-800">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-lg bg-neutral-800 text-purple-400">
                    {idx === 0 ? (
                      <Code className="w-4 h-4" />
                    ) : idx === 1 ? (
                      <Cpu className="w-4 h-4" />
                    ) : idx === 2 ? (
                      <Wrench className="w-4 h-4" />
                    ) : (
                      <Sparkles className="w-4 h-4" />
                    )}
                  </div>
                  <h3 className="text-base font-semibold text-white font-display">
                    {cat.category}
                  </h3>
                </div>
                <span className="text-xs font-mono text-neutral-400">0{cat.skills.length}</span>
              </div>

              <div className="flex flex-wrap gap-2.5">
                {cat.skills.map((skill, sIdx) => (
                  <button
                    key={sIdx}
                    type="button"
                    className="skill-chip"
                    aria-describedby={`skill-detail-${idx}-${sIdx}`}
                  >
                    <span>{skill.name}</span>
                    <span className="skill-chip-mark" aria-hidden="true">+</span>
                    <span id={`skill-detail-${idx}-${sIdx}`} role="tooltip" className="skill-chip-detail">
                      <span className="skill-chip-level">{skill.level}</span>
                      <span className="block mt-1 text-xs font-sans font-normal leading-relaxed text-neutral-300">{skill.desc}</span>
                    </span>
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Lower Grid: Languages & Personal Profile Attributes */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 pt-8">
          {/* Languages */}
          <div className="p-6 rounded-2xl bg-neutral-900/30 border border-neutral-800 space-y-4">
            <div className="flex items-center gap-2 pb-2 border-b border-neutral-800 text-sm font-semibold text-white">
              <Languages className="w-4 h-4 text-purple-400" />
              <span>Languages · ด้านภาษา</span>
            </div>
            <div className="space-y-3">
              {PROFILE_DATA.languages.map((lang, lIdx) => (
                <div key={lIdx} className="space-y-0.5">
                  <div className="text-xs font-medium text-neutral-200">{lang.name}</div>
                  <div className="text-xs text-purple-400 font-mono">{lang.level}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Interests & Reading */}
          <div className="p-6 rounded-2xl bg-neutral-900/30 border border-neutral-800 space-y-4">
            <div className="flex items-center gap-2 pb-2 border-b border-neutral-800 text-sm font-semibold text-white">
              <Bookmark className="w-4 h-4 text-purple-400" />
              <span>Interests & Reading · ความสนใจ</span>
            </div>
            <div className="space-y-3 text-xs">
              <div>
                <span className="text-neutral-400 block mb-1">ความสนใจหลัก:</span>
                <div className="text-neutral-200 space-y-0.5">
                  {PROFILE_DATA.interests.map((item, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <span className="text-purple-400 font-bold">›</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="pt-2 border-t border-neutral-800/60">
                <span className="text-neutral-400 block mb-1">แนวหนังสือที่สนใจ:</span>
                <div className="text-neutral-300">
                  {PROFILE_DATA.bookInterests.join(' · ')}
                </div>
              </div>
            </div>
          </div>

          {/* Hobbies & Creative Outlets */}
          <div className="p-6 rounded-2xl bg-neutral-900/30 border border-neutral-800 space-y-4">
            <div className="flex items-center gap-2 pb-2 border-b border-neutral-800 text-sm font-semibold text-white">
              <Music className="w-4 h-4 text-purple-400" />
              <span>Hobbies · งานอดิเรก</span>
            </div>
            <div className="flex flex-wrap gap-2 text-xs font-mono pt-1">
              {PROFILE_DATA.hobbies.map((h, hIdx) => (
                <div
                  key={hIdx}
                  className="px-3 py-1.5 rounded-lg bg-neutral-950/70 border border-neutral-800 text-neutral-200 text-xs flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                  <span>{h}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
