import React, { useState } from 'react';
import { Mail, Phone, MessageSquare, Instagram, Github, Globe, MapPin, Copy, Check, ArrowUpRight } from 'lucide-react';
import { PROFILE_DATA } from '../data/portfolioData';

export const ContactSection: React.FC = () => {
  const [copiedItem, setCopiedItem] = useState<string | null>(null);

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedItem(id);
    setTimeout(() => setCopiedItem(null), 2000);
  };

  return (
    <section id="contact" className="py-20 border-b border-neutral-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Heading & Call to Action */}
          <div className="lg:col-span-5 space-y-4">
            <div className="text-xs font-mono text-purple-400 tracking-wider uppercase mb-1">
              06. Contacts & Communication
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-white tracking-tight">
              Get in Touch
            </h2>
            <p className="text-sm sm:text-base text-neutral-300 leading-relaxed font-light">
              ติดต่อเรื่องผลงาน แฟ้มสะสมงาน การพัฒนาเกม หรือการสัมภาษณ์สำหรับการเข้าศึกษาต่อสาขาวิชาดิจิทัลเกม วิทยาลัยศิลปะ สื่อ และเทคโนโลยี (CAMT) มหาวิทยาลัยเชียงใหม่
            </p>

            <div className="pt-4 space-y-2 text-xs font-mono text-neutral-400">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-purple-400" />
                <span>Lampang, Thailand · {PROFILE_DATA.school}</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-purple-400" />
                <span>{PROFILE_DATA.company}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Cards Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Email Card */}
            <div className="p-5 rounded-2xl bg-neutral-900/50 border border-neutral-800 space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-mono text-neutral-400">
                  <Mail className="w-4 h-4 text-purple-400" />
                  <span>Email</span>
                </div>
                <button
                  onClick={() => handleCopy(PROFILE_DATA.contacts.email, 'email')}
                  className="p-1.5 rounded-lg bg-neutral-800 text-neutral-400 hover:text-white transition-colors"
                  title="คัดลอกอีเมล"
                >
                  {copiedItem === 'email' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>
              <a
                href={`mailto:${PROFILE_DATA.contacts.email}`}
                className="block text-sm font-medium text-white hover:text-purple-300 transition-colors truncate"
              >
                {PROFILE_DATA.contacts.email}
              </a>
              <div className="text-[11px] text-neutral-400">
                {copiedItem === 'email' ? 'คัดลอกแล้ว!' : 'คลิกเพื่อส่งอีเมล'}
              </div>
            </div>

            {/* Phone Card */}
            <div className="p-5 rounded-2xl bg-neutral-900/50 border border-neutral-800 space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-mono text-neutral-400">
                  <Phone className="w-4 h-4 text-purple-400" />
                  <span>Phone Number</span>
                </div>
                <button
                  onClick={() => handleCopy(PROFILE_DATA.contacts.phoneClean, 'phone')}
                  className="p-1.5 rounded-lg bg-neutral-800 text-neutral-400 hover:text-white transition-colors"
                  title="คัดลอกเบอร์โทรศัพท์"
                >
                  {copiedItem === 'phone' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>
              <a
                href={`tel:${PROFILE_DATA.contacts.phoneClean}`}
                className="block text-sm font-medium text-white hover:text-purple-300 transition-colors"
              >
                {PROFILE_DATA.contacts.phone}
              </a>
              <div className="text-[11px] text-neutral-400">
                {copiedItem === 'phone' ? 'คัดลอกแล้ว!' : 'ติดต่อโดยตรง'}
              </div>
            </div>

            {/* Discord & Line */}
            <div className="p-5 rounded-2xl bg-neutral-900/50 border border-neutral-800 space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-mono text-neutral-400">
                  <MessageSquare className="w-4 h-4 text-purple-400" />
                  <span>Discord & Line</span>
                </div>
                <button
                  onClick={() => handleCopy(PROFILE_DATA.contacts.discord, 'discord')}
                  className="p-1.5 rounded-lg bg-neutral-800 text-neutral-400 hover:text-white transition-colors"
                  title="คัดลอกไอดี"
                >
                  {copiedItem === 'discord' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>
              <div className="text-sm font-mono font-medium text-white">
                {PROFILE_DATA.contacts.discord}
              </div>
              <div className="text-[11px] text-neutral-400">
                {copiedItem === 'discord' ? 'คัดลอกแล้ว!' : 'ไอดีสำหรับติดต่อพูดคุย'}
              </div>
            </div>

            {/* Instagram */}
            <div className="p-5 rounded-2xl bg-neutral-900/50 border border-neutral-800 space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-mono text-neutral-400">
                  <Instagram className="w-4 h-4 text-purple-400" />
                  <span>Instagram</span>
                </div>
                <a
                  href={PROFILE_DATA.contacts.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 rounded-lg bg-neutral-800 text-neutral-400 hover:text-white transition-colors"
                >
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
              <a
                href={PROFILE_DATA.contacts.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-sm font-medium text-white hover:text-purple-300 transition-colors"
              >
                @{PROFILE_DATA.contacts.instagram}
              </a>
              <div className="text-[11px] text-neutral-400">
                ช่องทางโซเชียลมีเดียส่วนตัว
              </div>
            </div>

            {/* GitHub Personal & Org (Full row on sm) */}
            <div className="sm:col-span-2 p-5 rounded-2xl bg-neutral-900/50 border border-neutral-800 space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-mono text-neutral-400">
                  <Github className="w-4 h-4 text-purple-400" />
                  <span>GitHub Repositories & Organization</span>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                <a
                  href={PROFILE_DATA.contacts.githubPersonalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-neutral-950 border border-neutral-800 hover:border-purple-500/50 flex items-center justify-between group transition-colors"
                >
                  <div>
                    <div className="text-xs text-neutral-400 font-mono">Personal Profile</div>
                    <div className="text-sm font-medium text-white group-hover:text-purple-300">
                      {PROFILE_DATA.contacts.githubPersonal}
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-neutral-400 group-hover:text-white" />
                </a>

                <a
                  href={PROFILE_DATA.contacts.githubOrgUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-neutral-950 border border-neutral-800 hover:border-purple-500/50 flex items-center justify-between group transition-colors"
                >
                  <div>
                    <div className="text-xs text-neutral-400 font-mono">Organization (XPR Corp)</div>
                    <div className="text-sm font-medium text-white group-hover:text-purple-300">
                      {PROFILE_DATA.contacts.githubOrg}
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-neutral-400 group-hover:text-white" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
