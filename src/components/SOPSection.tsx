import React from 'react';
import { Quote, GraduationCap, ZoomIn, School, User } from 'lucide-react';
import { PROFILE_DATA, SOP_TEXT, EDUCATION_DATA } from '../data/portfolioData';

interface SOPSectionProps {
  onOpenImageModal: (src: string, title: string) => void;
}

export const SOPSection: React.FC<SOPSectionProps> = ({ onOpenImageModal }) => {
  return (
    <section id="sop" className="py-16 sm:py-20 border-b border-neutral-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="pb-8 border-b border-neutral-800/80">
          <div className="text-xs font-mono text-purple-400 tracking-wider uppercase mb-1">
            01. Personal Statement & Academic Background
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold font-display text-white tracking-tight">
            Statement of Purpose
          </h2>
          <div className="flex items-center gap-2 text-xs text-neutral-400 font-mono mt-1">
            <span>คำแถลงแสดงเจตจำนงในการเข้าศึกษา</span>
            <span aria-hidden="true">·</span>
            <span>หลักสูตรดิจิทัลเกม (Digital Games · DG) CAMT มหาวิทยาลัยเชียงใหม่</span>
          </div>
        </div>

        {/* Content Layout: 12-column grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 pt-8">
          {/* The full statement stays in one card; the motto remains separate below. */}
          <div className="lg:col-span-7 p-5 sm:p-6 rounded-2xl bg-neutral-900/40 border border-neutral-800/60 text-neutral-200 text-xs sm:text-sm leading-relaxed">
            <div className="space-y-4">
              {SOP_TEXT.paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>

          {/* Right: Profile & Education Data Cards */}
          <div className="lg:col-span-5 space-y-6">

            {/* Student Personal Profile Card */}
            <div className="p-5 rounded-xl bg-neutral-900/50 border border-neutral-800 space-y-3.5">
              <div className="flex items-center justify-between pb-2.5 border-b border-neutral-800">
                <h3 className="text-xs font-semibold text-white uppercase tracking-wider font-mono flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5 text-purple-400" />
                  <span>ข้อมูลประวัติส่วนตัว</span>
                </h3>
                <span className="text-[11px] font-mono text-neutral-400">Personal Profile</span>
              </div>

              <div className="space-y-2 text-xs">
                <div className="flex justify-between py-1 border-b border-neutral-800/40">
                  <span className="text-neutral-400">ชื่อ & สกุล:</span>
                  <span className="text-neutral-200 font-medium text-right">{PROFILE_DATA.name}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-neutral-800/40">
                  <span className="text-neutral-400">ชื่อเล่น:</span>
                  <span className="text-purple-300 font-medium">{PROFILE_DATA.nickname} ({PROFILE_DATA.nicknameEn})</span>
                </div>
                <div className="flex justify-between py-1 border-b border-neutral-800/40">
                  <span className="text-neutral-400">วันเกิด:</span>
                  <span className="text-neutral-200">{PROFILE_DATA.birthDate}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-neutral-800/40">
                  <span className="text-neutral-400">โรงเรียน:</span>
                  <span className="text-neutral-200 text-right">{PROFILE_DATA.school}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-neutral-800/40">
                  <span className="text-neutral-400">แผนการเรียน:</span>
                  <span className="text-neutral-200">{PROFILE_DATA.schoolTrack}</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-neutral-400">บุคลิกภาพ (MBTI):</span>
                  <span className="text-purple-400 font-mono font-semibold">{PROFILE_DATA.mbti}</span>
                </div>
              </div>
            </div>

            {/* Education History Card */}
            <div className="p-5 rounded-xl bg-neutral-900/50 border border-neutral-800 space-y-3.5">
              <div className="flex items-center justify-between pb-2.5 border-b border-neutral-800">
                <h3 className="text-xs font-semibold text-white uppercase tracking-wider font-mono flex items-center gap-1.5">
                  <GraduationCap className="w-4 h-4 text-purple-400" />
                  <span>ประวัติการศึกษา</span>
                </h3>
                <span className="text-[11px] font-mono text-neutral-400">Education History</span>
              </div>

              <div className="space-y-3 text-xs">
                <div className="p-3 rounded-lg bg-neutral-950/60 border border-neutral-800/80 space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-neutral-200">{EDUCATION_DATA.seniorHigh.level}</span>
                    <span className="font-mono text-purple-400 font-bold">GPAX {EDUCATION_DATA.seniorHigh.gpax}</span>
                  </div>
                  <div className="text-[11px] text-neutral-400 flex items-center gap-2">
                    <span>{EDUCATION_DATA.seniorHigh.school}</span>
                    <span>·</span>
                    <span>{EDUCATION_DATA.seniorHigh.semesters}</span>
                  </div>
                </div>

                <div className="p-3 rounded-lg bg-neutral-950/60 border border-neutral-800/80 space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-neutral-200">{EDUCATION_DATA.juniorHigh.level}</span>
                    <span className="font-mono text-neutral-300 font-bold">GPAX {EDUCATION_DATA.juniorHigh.gpax}</span>
                  </div>
                  <div className="text-[11px] text-neutral-400 flex items-center gap-2">
                    <span>{EDUCATION_DATA.juniorHigh.school}</span>
                    <span>·</span>
                    <span>{EDUCATION_DATA.juniorHigh.semesters}</span>
                  </div>
                </div>

                <div className="p-2.5 rounded-lg bg-neutral-950/40 border border-neutral-800/40 space-y-0.5">
                  <div className="font-semibold text-neutral-300 text-[11px]">{EDUCATION_DATA.primary.level}</div>
                  <div className="text-[11px] text-neutral-400">{EDUCATION_DATA.primary.school}</div>
                </div>
              </div>

              {/* Official Transcript Documents (ปพ.1) Preview */}
              <div className="pt-3 border-t border-neutral-800">
                <div className="text-xs text-neutral-400 font-mono mb-2 flex items-center justify-between">
                  <span>ใบระเบียนแสดงผลการเรียน (ปพ.1 ฉบับจริง 5 เทอม)</span>
                  <span className="text-[11px] text-purple-400">คลิกเพื่อดูภาพเต็ม</span>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={() => onOpenImageModal('/portfolio-assets/transcript-p1.jpg', 'ใบระเบียนแสดงผลการเรียน ปพ.1 (หน้า 1 - ข้อมูลรายวิชาและเกรดเฉลี่ยสะสม GPAX 3.13)')}
                    className="group relative rounded-lg overflow-hidden border border-neutral-800 bg-neutral-950 aspect-[3/4] flex items-center justify-center hover:border-purple-500/50 transition-colors"
                  >
                    <img
                      src="/portfolio-assets/transcript-p1.jpg"
                      alt="ใบระเบียนแสดงผลการเรียน ปพ.1 หน้า 1"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-top opacity-90 group-hover:opacity-100 transition-opacity"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 flex items-center justify-center transition-colors">
                      <div className="p-1.5 rounded-full bg-neutral-900/80 border border-neutral-700 text-white">
                        <ZoomIn className="w-3.5 h-3.5" />
                      </div>
                    </div>
                    <span className="absolute bottom-1 left-2 text-[10px] font-mono text-white/90 bg-black/70 px-1 rounded">
                      ปพ.1 ด้านหน้า
                    </span>
                  </button>

                  <button
                    onClick={() => onOpenImageModal('/portfolio-assets/transcript-p2.jpg', 'ใบระเบียนแสดงผลการเรียน ปพ.1 (หน้า 2 - ผลการประเมินกิจกรรมและตราประทับโรงเรียน)')}
                    className="group relative rounded-lg overflow-hidden border border-neutral-800 bg-neutral-950 aspect-[3/4] flex items-center justify-center hover:border-purple-500/50 transition-colors"
                  >
                    <img
                      src="/portfolio-assets/transcript-p2.jpg"
                      alt="ใบระเบียนแสดงผลการเรียน ปพ.1 หน้า 2"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-top opacity-90 group-hover:opacity-100 transition-opacity"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 flex items-center justify-center transition-colors">
                      <div className="p-1.5 rounded-full bg-neutral-900/80 border border-neutral-700 text-white">
                        <ZoomIn className="w-3.5 h-3.5" />
                      </div>
                    </div>
                    <span className="absolute bottom-1 left-2 text-[10px] font-mono text-white/90 bg-black/70 px-1 rounded">
                      ปพ.1 ด้านหลัง
                    </span>
                  </button>
                </div>
              </div>
            </div>

            {/* School Campus Photo */}
            <div className="rounded-xl overflow-hidden border border-neutral-800 bg-neutral-900/50">
              <div className="aspect-[16/9] overflow-hidden relative">
                <img
                  src="/portfolio-assets/campus-acl.png"
                  alt="โรงเรียนอัสสัมชัญลำปาง Assumption College Lampang"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent" />
                <div className="absolute bottom-2.5 left-3 right-3 text-xs text-white/95 font-medium flex items-center gap-1.5">
                  <School className="w-3.5 h-3.5 text-purple-400" />
                  <span>โรงเรียนอัสสัมชัญลำปาง (Assumption College Lampang)</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Full-Width Favorite Motto / คำคมประจำใจ Banner (Covers both halves of section, ~50% larger typography) */}
        <div className="mt-8 sm:mt-10 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-neutral-900/90 via-purple-950/25 to-neutral-900/90 border border-neutral-800/80 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4 sm:gap-6 relative z-10">
            <div className="p-3.5 sm:p-4 rounded-xl bg-purple-950/70 border border-purple-800/50 text-purple-400 shrink-0 shadow-inner shadow-purple-900/40">
              <Quote className="w-7 h-7 sm:w-8 sm:h-8" />
            </div>
            <div className="space-y-2.5 flex-1">
              <div className="text-xs font-mono text-purple-400 uppercase tracking-widest font-semibold flex items-center gap-2">
                <span>คำคมประจำใจ · Favorite Motto</span>
                <span className="h-px bg-purple-900/60 flex-1 max-w-[120px]" />
              </div>
              <blockquote className="text-lg sm:text-xl lg:text-2xl text-neutral-100 font-display italic font-medium leading-snug tracking-tight">
                “{PROFILE_DATA.quote}”
              </blockquote>
              <div className="text-xs sm:text-sm text-neutral-400 font-mono flex flex-wrap items-center gap-x-2 gap-y-1">
                <span>— <strong className="text-neutral-200 font-medium">{PROFILE_DATA.quoteAuthor}</strong></span>
                <span className="text-neutral-600">·</span>
                <span className="text-neutral-500">{PROFILE_DATA.quoteSource}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
