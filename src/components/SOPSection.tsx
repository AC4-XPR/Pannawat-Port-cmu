import React from 'react';
import { Quote, GraduationCap, School, User } from 'lucide-react';
import { PROFILE_DATA, SOP_TEXT, EDUCATION_DATA } from '../data/portfolioData';

const SOP_HIGHLIGHTS: Record<string, 'purple' | 'white'> = {
  'มัธยมศึกษาปีที่ 1': 'purple',
  'Epic World': 'purple',
  'Hard-code': 'purple',
  'Inventory': 'purple',
  '3,000 บรรทัด': 'purple',
  'AOT: New Hope': 'purple',
  'ระบบต่อสู้': 'purple',
  'อุปกรณ์เคลื่อนที่สามมิติ': 'purple',
  'ชุมชน Discord': 'purple',
  'เริ่มต้นและสร้างผลงานใหม่อีกครั้ง': 'white',
  'MAS Framework': 'purple',
  'เวอร์ชัน 2.1.0': 'purple',
  'SnapCursorX': 'purple',
  'Python และ C++': 'purple',
  'การทำงานเป็นทีม': 'white',
  'Digital Game': 'purple',
  'มหาวิทยาลัยเชียงใหม่': 'purple',
  'การออกแบบเกม': 'purple',
  'ประสบการณ์ให้ผู้เล่น': 'white',
  'ทำโปรเจกต์ร่วมกับผู้อื่น': 'white',
  'XPR Group Corporation™': 'purple',
  'Alpha': 'purple',
  'Beta': 'purple',
  'Game Engine': 'purple',
  'แพลตฟอร์มที่เปิดโอกาสให้ผู้สร้างสามารถพัฒนาและเผยแพร่เกมได้อย่างอิสระ': 'purple',
  'Exotic • Passionate • Revolutionize': 'purple',
};

const renderHighlightedParagraph = (paragraph: string, paragraphIndex: number) => {
  const highlights = Object.entries(SOP_HIGHLIGHTS);
  const parts: React.ReactNode[] = [];
  let cursor = 0;
  let key = 0;

  while (cursor < paragraph.length) {
    let next: { phrase: string; tone: 'purple' | 'white'; index: number } | undefined;
    for (const [phrase, tone] of highlights) {
      const index = paragraph.indexOf(phrase, cursor);
      if (index !== -1 && (!next || index < next.index || (index === next.index && phrase.length > next.phrase.length))) {
        next = { phrase, tone, index };
      }
    }

    if (!next) {
      parts.push(paragraph.slice(cursor));
      break;
    }
    if (next.index > cursor) parts.push(paragraph.slice(cursor, next.index));
    parts.push(
      <strong key={`${paragraphIndex}-${key++}`} className={next.tone === 'purple' ? 'font-semibold text-purple-300' : 'font-semibold text-white'}>
        {next.phrase}
      </strong>,
    );
    cursor = next.index + next.phrase.length;
  }

  return parts;
};

export const SOPSection: React.FC = () => {
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
          <div className="sop-content-panel lg:col-span-12 p-5 sm:p-6 rounded-2xl text-neutral-200 text-xs sm:text-sm leading-relaxed">
            <div className="space-y-4">
              {SOP_TEXT.paragraphs.map((paragraph, index) => (
                <p key={index}>{renderHighlightedParagraph(paragraph, index)}</p>
              ))}
            </div>
          </div>

          {/* Right: Profile & Education Data Cards */}
          <div className="lg:col-span-12 grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">

            {/* Student Personal Profile Card */}
            <div className="h-full p-5 rounded-xl bg-neutral-900/50 border border-neutral-800 space-y-3.5">
              <div className="flex items-center justify-between pb-2.5 border-b border-neutral-800">
                <h3 className="text-xs font-semibold text-white uppercase tracking-wider font-mono flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5 text-purple-400" />
                  <span>ข้อมูลประวัติส่วนตัว</span>
                </h3>
                <span className="text-[11px] font-mono text-neutral-400">Personal Profile</span>
              </div>

              <div className="flex items-start gap-3">
                <div className="image-caption-frame group relative w-16 h-20 shrink-0 overflow-hidden rounded-lg border border-purple-400/40 shadow-md shadow-purple-950/30">
                  <img
                    src="/portfolio-assets/andy-studio-portrait.jpg"
                    alt="ภาพถ่ายประจำตัวของปัณณวัฒน์ ฝั้นจักสาย"
                    className="w-full h-full object-cover object-top"
                  />
                  <span className="image-caption-pop">ภาพถ่ายประจำตัว</span>
                </div>
                <div className="min-w-0 flex-1 space-y-2 text-xs">
                  <div className="flex justify-between gap-2 py-1 border-b border-neutral-800/40">
                    <span className="text-neutral-400">ชื่อ & สกุล:</span>
                    <span className="text-neutral-200 font-medium text-right">{PROFILE_DATA.name}</span>
                  </div>
                  <div className="flex justify-between gap-2 py-1 border-b border-neutral-800/40">
                    <span className="text-neutral-400">ชื่อเล่น:</span>
                    <span className="text-purple-300 font-medium">{PROFILE_DATA.nickname} ({PROFILE_DATA.nicknameEn})</span>
                  </div>
                  <div className="flex justify-between gap-2 py-1 border-b border-neutral-800/40">
                    <span className="text-neutral-400">วันเกิด:</span>
                    <span className="text-neutral-200">{PROFILE_DATA.birthDate}</span>
                  </div>
                  <div className="flex justify-between gap-2 py-1 border-b border-neutral-800/40">
                    <span className="text-neutral-400">โรงเรียน:</span>
                    <span className="text-neutral-200 text-right">{PROFILE_DATA.school}</span>
                  </div>
                  <div className="flex justify-between gap-2 py-1 border-b border-neutral-800/40">
                    <span className="text-neutral-400">แผนการเรียน:</span>
                    <span className="text-neutral-200">{PROFILE_DATA.schoolTrack}</span>
                  </div>
                  <div className="flex justify-between gap-2 py-1">
                    <span className="text-neutral-400">บุคลิกภาพ (MBTI):</span>
                    <span className="text-purple-400 font-mono font-semibold">{PROFILE_DATA.mbti}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Education History Card */}
            <div className="h-full p-5 rounded-xl bg-neutral-900/50 border border-neutral-800 space-y-3.5">
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

            </div>

            {/* School Campus Photo */}
            <div className="h-full rounded-xl overflow-hidden border border-neutral-800 bg-neutral-900/50 flex flex-col">
              <div className="image-caption-frame group relative flex-1 min-h-36 sm:min-h-40 overflow-hidden">
                <img
                  src="/portfolio-assets/campus-acl.png"
                  alt="โรงเรียนอัสสัมชัญลำปาง"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent" />
                <div className="campus-photo-caption absolute bottom-2.5 left-3 right-3 text-xs text-white/95 font-medium flex items-center gap-1.5">
                  <School className="w-3.5 h-3.5 text-purple-400" />
                  <span>โรงเรียนอัสสัมชัญลำปาง</span>
                </div>
                <span className="image-caption-pop">โรงเรียนอัสสัมชัญลำปาง · ภาพสถานศึกษา</span>
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
              <blockquote className="motto-quote text-neutral-100 tracking-tight">
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
