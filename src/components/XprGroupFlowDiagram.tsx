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
    category: 'MAKE',
    detail: 'Games and digital products created through XPR Studio.',
    tone: 'xpr-flow-alpha',
    status: 'ACTIVE FOCUS'
  },
  {
    id: 'beta',
    title: 'Beta Management',
    category: 'GROW',
    detail: 'People development, mentorship, and partnership building.',
    tone: 'xpr-flow-beta',
    status: 'DEVELOPING'
  },
  {
    id: 'omega',
    title: 'Omega Capital',
    category: 'INVEST',
    detail: 'A future initiative for supporting the ventures as they grow.',
    tone: 'xpr-flow-future',
    status: 'PLANNED'
  },
  {
    id: 'delta',
    title: 'Delta Ventures',
    category: 'BUILD',
    detail: 'A future venture branch for new opportunities and experiments.',
    tone: 'xpr-flow-future',
    status: 'PLANNED'
  }
];

const branchesAndStudios: FlowNode[] = [
  {
    id: 'nest-camp',
    title: 'Nest Camp',
    category: 'LEARN TOGETHER',
    detail: 'A small experimental learning and collaboration network, planned for a future rebrand.',
    tone: 'xpr-flow-camp',
    status: 'EXPERIMENT'
  },
  {
    id: 'xpr-studio',
    title: 'XPR Studio',
    category: 'GAMES · SOFTWARE · MEDIA',
    detail: 'The active creative studio, founded 4 September 2020, building online products, software, games, and media.',
    tone: 'xpr-flow-studio',
    status: 'FOUNDED 2020'
  }
];

const outputs: FlowNode[] = [
  {
    id: 'mas',
    title: 'MAS Framework',
    category: 'GAME ARCHITECTURE',
    detail: 'A modular software architecture framework for organizing Roblox game systems.',
    tone: 'xpr-flow-output'
  },
  {
    id: 'snapcursorx',
    title: 'SnapCursorX',
    category: 'WINDOWS SOFTWARE',
    detail: 'A visual desktop workflow utility built with Python and C++.',
    tone: 'xpr-flow-output'
  },
  {
    id: 'aot',
    title: 'AOT: New Hope',
    category: 'GAME DEVELOPMENT',
    detail: 'An action RPG project developed by XPR Studio across multiple versions.',
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
  <div className={`xpr-flow ${compact ? 'xpr-flow-compact' : ''}`} aria-label="Interactive XPR Group organization and project flow diagram">
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
      <span className="xpr-flow-kicker">VENTURE MAP · FOUNDED 28 JULY 2024</span>
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

    <p className="xpr-flow-footnote">Hover or focus a node to explore · Planned branches are marked clearly</p>
  </div>
);
