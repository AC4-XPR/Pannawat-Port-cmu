import React from 'react';
import { ArrowDown, Code2, Gamepad2, Sparkles, Terminal, ExternalLink } from 'lucide-react';
import { PROFILE_DATA } from '../data/portfolioData';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative pt-16 sm:pt-20 pb-6 sm:pb-8 overflow-hidden border-b border-neutral-900">
      {/* Background radial glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-purple-900/15 blur-[100px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[350px] h-[250px] bg-blue-900/10 blur-[90px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Split Screen Hero: 2-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
          {/* Left Column: Typographic Hierarchy */}
          <div className="lg:col-span-7 space-y-3.5 sm:space-y-4">
            {/* Target Admission Banner */}
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-[11px] font-mono text-purple-400 tracking-wider uppercase">
                <span className="w-2 h-2 rounded-sm bg-purple-500 inline-block" />
                <span>Portfolio for Admission · รอบที่ 1 Portfolio</span>
              </div>
              <div className="text-xs sm:text-sm font-medium text-neutral-300">
                วิทยาลัยศิลปะ สื่อ และเทคโนโลยี · สาขาวิชาดิจิทัลเกม · มหาวิทยาลัยเชียงใหม่
              </div>
            </div>

            {/* Main Headline */}
            <div className="space-y-1">
              <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white font-display leading-[1.1]">
                PANNAWAT <br className="hidden sm:inline" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-violet-300 to-indigo-300">
                  FUNJAKSAI
                </span>
              </h1>
              <p className="text-base sm:text-lg font-medium text-neutral-200">
                นาย ปัณณวัฒน์ ฝั้นจักสาย
              </p>
            </div>

            {/* Lead Copy */}
            <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed max-w-2xl font-light">
              {PROFILE_DATA.bioHeadline}
            </p>

            {/* Unboxed Metadata (Zero-pill discipline) */}
            <div className="flex flex-wrap items-center gap-y-1 gap-x-2.5 text-xs text-neutral-400 font-mono">
              <span>{PROFILE_DATA.school}</span>
              <span aria-hidden="true" className="text-neutral-600">·</span>
              <span>ม.6 แผนวิทย์–คณิต</span>
              <span aria-hidden="true" className="text-neutral-600">·</span>
              <span className="text-neutral-200 font-medium">GPAX 3.13 (5 เทอม)</span>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-2.5 pt-1">
              <a
                href="#sop"
                className="px-4 py-2 text-xs font-semibold text-white bg-purple-600 hover:bg-purple-500 rounded-lg transition-colors whitespace-nowrap shadow-sm shadow-purple-900/50"
              >
                อ่าน Statement of Purpose
              </a>
              <a
                href="#projects"
                className="px-4 py-2 text-xs font-medium text-neutral-200 bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 hover:border-neutral-700 rounded-lg transition-colors whitespace-nowrap"
              >
                สำรวจผลงานเกม & เครื่องมือ
              </a>
            </div>
          </div>

          {/* Right Column: Visual Container */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="w-full max-w-[270px] sm:max-w-[310px] rounded-xl overflow-hidden border border-neutral-800 bg-neutral-900/60 shadow-xl shadow-purple-950/20 group">
              {/* Profile Image with subtle framing */}
              <div className="aspect-[4/3] overflow-hidden bg-neutral-950 relative">
                <img
                  src="/portfolio-assets/profile-photo.jpg"
                  alt="ปัณณวัฒน์ ฝั้นจักสาย (Auto) ขณะแข่งขัน Global Game Jam 2026"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent pointer-events-none" />

                {/* Sub-label inside photo */}
                <div className="absolute bottom-2.5 left-3 right-3 text-left">
                  <div className="text-[11px] font-mono text-purple-300">
                    Global Game Jam 2026 On-site
                  </div>
                  <div className="text-[11px] text-neutral-400">
                    Lead Programmer · XPR Studio
                  </div>
                </div>
              </div>

              {/* Bottom Info Card Strip */}
              <div className="p-3 border-t border-neutral-800/80 bg-neutral-900/90 space-y-1">
                <div className="flex items-center justify-between text-xs text-neutral-400">
                  <span>Founder:</span>
                  <span className="font-semibold text-neutral-200">{PROFILE_DATA.company}</span>
                </div>
                <div className="text-[11px] text-neutral-400 italic truncate">
                  “{PROFILE_DATA.companyMotto}”
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Full-width KPI Strip below the split */}
        <div className="mt-6 sm:mt-7 pt-4 sm:pt-5 border-t border-neutral-900 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
          <div className="space-y-0.5">
            <div className="text-xl sm:text-2xl font-bold font-mono text-white">
              INTP
            </div>
            <div className="text-[11px] sm:text-xs text-neutral-400">
              บุคลิกภาพ (Logician / Thinker)
            </div>
          </div>
          <div className="space-y-0.5">
            <div className="text-xl sm:text-2xl font-bold font-mono text-purple-400 tabular-nums">
              14+
            </div>
            <div className="text-[11px] sm:text-xs text-neutral-400">
              เกียรติบัตรและหลักฐานผลงาน
            </div>
          </div>
          <div className="space-y-0.5">
            <div className="text-xl sm:text-2xl font-bold font-mono text-white tabular-nums">
              v2.1.0
            </div>
            <div className="text-[11px] sm:text-xs text-neutral-400">
              MAS Framework สถาปัตยกรรมเกม
            </div>
          </div>
          <div className="space-y-0.5">
            <div className="text-xl sm:text-2xl font-bold font-mono text-purple-400 tabular-nums">
              CEFR B2
            </div>
            <div className="text-[11px] sm:text-xs text-neutral-400">
              ภาษาอังกฤษ iStudy (92%)
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
