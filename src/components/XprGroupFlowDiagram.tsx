import React from 'react';

interface FlowNode {
  id: string;
  title: string;
  category: string;
  detail: string;
  tone: string;
  status?: string;
}

const branches: FlowNode[] = [
  {
    id: 'alpha',
    title: 'Alpha Digital',
    category: 'สร้างสรรค์',
    detail: 'มุ่งเน้นการสร้างเกมและผลิตภัณฑ์ดิจิทัลผ่าน XPR Studio',
    tone: 'xpr-flow-alpha',
    status: 'โฟกัสปัจจุบัน'
  },
  {
    id: 'beta',
    title: 'Beta Management',
    category: 'พัฒนาคน',
    detail: 'มุ่งเน้นการพัฒนาบุคลากร การให้คำแนะนำ และการสร้างความร่วมมือ',
    tone: 'xpr-flow-beta',
    status: 'กำลังพัฒนา'
  },
  {
    id: 'omega',
    title: 'Omega Capital',
    category: 'การลงทุน',
    detail: 'SOON',
    tone: 'xpr-flow-future',
    status: 'วางแผนไว้'
  },
  {
    id: 'delta',
    title: 'Delta Ventures',
    category: 'ธุรกิจใหม่',
    detail: 'SOON',
    tone: 'xpr-flow-future',
    status: 'วางแผนไว้'
  }
];

const branchesAndStudios: FlowNode[] = [
  {
    id: 'nest-camp',
    title: 'Nest Camp',
    category: 'เรียนรู้ร่วมกัน',
    detail: 'เครือข่ายทดลองขนาดเล็กสำหรับการเรียนรู้และทำงานร่วมกัน โดยมีแผนปรับแบรนด์ในอนาคต',
    tone: 'xpr-flow-camp',
    status: 'โครงการทดลอง'
  },
  {
    id: 'xpr-studio',
    title: 'XPR Studio',
    category: 'เกม · ซอฟต์แวร์ · สื่อ',
    detail: 'สตูดิโอสร้างสรรค์ที่ก่อตั้งเมื่อ 4 กันยายน 2020 พัฒนาผลิตภัณฑ์ออนไลน์ ซอฟต์แวร์ เกม และสื่อ',
    tone: 'xpr-flow-studio',
    status: 'ก่อตั้งปี 2020'
  }
];

const outputs: FlowNode[] = [
  {
    id: 'mas',
    title: 'MAS Framework',
    category: 'สถาปัตยกรรมเกม',
    detail: 'เฟรมเวิร์กสถาปัตยกรรมซอฟต์แวร์แบบโมดูลาร์ สำหรับจัดโครงสร้างระบบเกม Roblox',
    tone: 'xpr-flow-output'
  },
  {
    id: 'snapcursorx',
    title: 'SnapCursorX',
    category: 'ซอฟต์แวร์ Windows',
    detail: 'โปรแกรมเดสก์ท็อปสำหรับสร้างเวิร์กโฟลว์แบบภาพ พัฒนาด้วย Python และ C++',
    tone: 'xpr-flow-output'
  },
  {
    id: 'aot',
    title: 'AOT: New Hope',
    category: 'พัฒนาเกม',
    detail: 'โปรเจกต์เกมแอ็กชัน RPG ที่ XPR Studio พัฒนาต่อเนื่องหลายเวอร์ชัน',
    tone: 'xpr-flow-output'
  }
];

const FlowCard: React.FC<{ node: FlowNode; compact?: boolean }> = ({ node, compact = false }) => {
  return (
    <div
      role="group"
      tabIndex={0}
      aria-label={`${node.title}: ${node.detail}`}
      className={`xpr-flow-node group ${node.tone} ${compact ? 'xpr-flow-node-compact' : ''}`}
    >
      <span className="xpr-flow-node-topline">
        <span>{node.category}</span>
        {node.status && <span className="xpr-flow-status">{node.status}</span>}
      </span>
      <span className="xpr-flow-node-title">{node.title}</span>
      <span className="xpr-flow-tooltip" aria-hidden="true">{node.detail}</span>
    </div>
  );
};

export const XprGroupFlowDiagram: React.FC<{ compact?: boolean }> = ({ compact = false }) => (
  <div className={`xpr-flow ${compact ? 'xpr-flow-compact' : ''}`} aria-label="แผนผังองค์กรและผลงานของ XPR Group">
    <svg className="xpr-flow-lines" viewBox="0 0 1000 660" preserveAspectRatio="none" aria-hidden="true">
      <defs>
        <linearGradient id={compact ? 'xpr-flow-gradient-card' : 'xpr-flow-gradient-detail'} x1="0" x2="1">
          <stop offset="0" stopColor="#a855f7" />
          <stop offset="0.52" stopColor="#8b5cf6" />
          <stop offset="1" stopColor="#38bdf8" />
        </linearGradient>
      </defs>
      <g fill="none" stroke={`url(#${compact ? 'xpr-flow-gradient-card' : 'xpr-flow-gradient-detail'})`} strokeWidth="2" strokeOpacity=".65" vectorEffect="non-scaling-stroke">
        <path d="M500 102 V139 H125 V166 M500 139 H375 V166 M500 139 H625 V166 M500 139 H875 V166" />
        <path d="M125 236 V283 H315 V315 M375 236 V267 H315 V315" />
        <path d="M125 236 V271 H685 V315" />
        <path d="M685 391 V425 H185 V465 M685 425 H500 V465 M685 425 H815 V465" />
      </g>
      <g fill="#c4b5fd" stroke="#09090b" strokeWidth="4">
        <circle cx="500" cy="139" r="5" />
        <circle cx="315" cy="283" r="5" />
        <circle cx="685" cy="425" r="5" />
      </g>
    </svg>

    <div className="xpr-flow-parent">
      <span className="xpr-flow-kicker">แผนผังองค์กร · ก่อตั้ง 28 กรกฎาคม 2567</span>
      <strong>XPR Group Corporation™</strong>
      <span>Exotic <i>•</i> Passionate <i>•</i> Revolutionize</span>
    </div>

    <div className="xpr-flow-branches">
      {branches.map((branch) => <FlowCard key={branch.id} node={branch} compact={compact} />)}
    </div>

    <div className="xpr-flow-midrow">
      <FlowCard node={branchesAndStudios[0]} compact={compact} />
      <FlowCard node={branchesAndStudios[1]} compact={compact} />
    </div>

    <div className="xpr-flow-outputs">
      {outputs.map((node) => <FlowCard key={node.id} node={node} compact={compact} />)}
    </div>

    <p className="xpr-flow-footnote">ชี้เมาส์หรือโฟกัสที่หัวข้อเพื่อดูข้อมูล · ระบุส่วนที่วางแผนไว้ชัดเจน</p>
  </div>
);
