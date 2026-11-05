export interface ProjectSpecs {
  projectName: string;
  roles: string[];
  team?: string;
  duration?: string;
  concept: string;
  frameworkOrEngine?: string;
  result?: string;
  status?: string;
}

export interface ProjectItem {
  id: string;
  certificateIds?: string[];
  group?: 'additional';
  title: string;
  subtitle: string;
  tagline: string;
  category: 'game' | 'tool' | 'web' | 'experiment';
  year: string;
  role: string[];
  techStack: string[];
  description: string[];
  keyFeatures?: string[];
  impact?: string[];
  highlightBadge?: string;
  thumbnail: string;
  gallery?: string[];
  specs?: ProjectSpecs;
  links?: {
    label: string;
    url?: string;
    action?: string;
  }[];
}

export interface CertificateItem {
  id: string;
  title: string;
  issuer: string;
  date: string;
  awardLevel?: string;
  category: 'gamedev' | 'robotics' | 'science' | 'academic';
  description: string;
  image: string;
  context?: string[];
  relatedProjectIds?: string[];
  highlight?: boolean;
}

export interface ActivityItem {
  id: string;
  title: string;
  subtitle: string;
  role: string;
  organization: string;
  date: string;
  location?: string;
  description: string;
  learnings: string;
  image?: string;
  gallery?: string[];
  badge?: string;
  tech?: string[];
}

export const PROFILE_DATA = {
  name: "นาย ปัณณวัฒน์ ฝั้นจักสาย",
  nameEn: "Pannawat Funjaksai",
  nickname: "แอนดี้",
  nicknameEn: "Andy",
  tagline: "Game Developer · Software Architect · System Designer",
  bioHeadline: "Architecting modular game systems, visual workflow engines, and scalable digital experiences.",
  targetUniversity: "มหาวิทยาลัยเชียงใหม่ (Chiang Mai University)",
  targetFaculty: "วิทยาลัยศิลปะ สื่อ และเทคโนโลยี (CAMT)",
  targetProgram: "สาขาวิชาดิจิทัลเกม (Digital Games - DG)",
  school: "โรงเรียนอัสสัมชัญลำปาง (Assumption College Lampang)",
  schoolTrack: "วิทยาศาสตร์ - คณิตศาสตร์ (Science - Math)",
  mbti: "INTP",
  birthDate: "28 กรกฎาคม พ.ศ. 2551 (28 July 2008)",
  gpaxSenior: "3.13 (5 ภาคเรียน ม.ปลาย)",
  gpaxJunior: "3.54 (6 ภาคเรียน ม.ต้น)",
  company: "XPR Group Corporation™",
  companyMotto: "Exotic • Passionate • Revolutionize",
  quote: "Nothing beats being proactive. Only incompetents cling to the metaphysical.",
  quoteAuthor: "Tanya von Degurechaff",
  quoteSource: "The Saga of Tanya the Evil, Vol. 1: Deus lo Vult",
  
  languages: [
    { name: "ไทย (Thai)", level: "ภาษาหลัก (Native)" },
    { name: "อังกฤษ (English)", level: "CEFR B2 (Scaled Score 46/50 = 92%)" },
    { name: "เยอรมัน (German)", level: "เริ่มต้น ต่ำกว่า A1 (Beginner)" }
  ],
  
  interests: [
    "พัฒนาซอฟต์แวร์ (Software Development)",
    "พัฒนาเกม & แอป (Game & App Development)",
    "เป็นผู้ประกอบการ (Entrepreneurship)",
    "แนวคิด & นวัตกรรม (Concepts & Innovation)"
  ],
  
  bookInterests: [
    "ธุรกิจ & การบริหาร (Business & Management)",
    "การพัฒนาตนเอง (Personal Growth)",
    "ปรัชญาและจิตวิทยา (Philosophy & Psychology)"
  ],
  
  hobbies: [
    "ฟัง & ร้องเพลง",
    "การ์ตูน ซีรีส์ และภาพยนตร์",
    "เกม (Game Analysis & Playing)",
    "เปียโน (Piano)"
  ],
  
  contacts: {
    email: "pannawat.02551@gmail.com",
    phone: "(+66) 0621812324",
    phoneClean: "0621812324",
    discord: "ac4_xpr_s",
    line: "ac4_xpr_s",
    instagram: "axd_d.rew_s",
    instagramUrl: "https://www.instagram.com/axd_d.rew_s/",
    githubPersonal: "github.com/AC4-XPR",
    githubPersonalUrl: "https://github.com/AC4-XPR",
    githubOrg: "github.com/xprgroupcorporation",
    githubOrgUrl: "https://github.com/xprgroupcorporation",
    xprWeb: "xprgroup.carrd.co/",
    xprWebUrl: "https://xprgroup.carrd.co/"
  }
};

export const ADMISSION_INFO = {
  projectCode: "00412104103010",
  projectName: "การรับนักเรียนที่มีผลการเรียนดี",
  round: "รอบที่ 1 Portfolio (TCAS 1)",
  faculty: "วิทยาลัยศิลปะ สื่อ และเทคโนโลยี (CAMT)",
  program: "สาขาวิชาดิจิทัลเกม (Digital Games · DG)",
  curriculum: "หลักสูตรสองภาษา (Bilingual Program) รูปแบบปกติ",
  quota: "แบบ 1.1: 15 คน",
  tuitionFirstSemester: "38,000 บาท",
  gpaxRequirement: "GPAX 5 เทอม ไม่น้อยกว่า 3.00 (ผู้สมัคร: 3.13 ผ่านเกณฑ์)",
  criteria: "ค่าน้ำหนักแฟ้มสะสมผลงาน 60% และ การสัมภาษณ์ 40%",
  careerProspects: [
    "นักพัฒนาเกม (Game Developer)",
    "นักออกแบบเกม (Game Designer)",
    "ผู้จัดการโครงการเกม (Game Project Manager)",
    "นักทดสอบและวิเคราะห์เกม (Game Tester and Analyser)",
    "นักออกแบบกราฟิกสำหรับเกม (Graphic Game Designer)"
  ]
};

export const SOP_TEXT = {
  title: "Statement of Purpose",
  readingTime: "4 นาที",
  paragraphs: [
    "ผมมีความสนใจด้านการเขียนโปรแกรมและพัฒนาเกมตั้งแต่ชั้นมัธยมศึกษาปีที่ 1 โดยเริ่มจากการทดลองใช้ Roblox Studio และศึกษา Free Models ก่อนนำความรู้มาสร้าง Epic World ซึ่งเป็นหนึ่งในโปรเจกต์แรกที่ผมพัฒนาระบบต่าง ๆ ด้วยตัวเอง เมื่อโปรเจกต์มีขนาดใหญ่ขึ้น ผมพบว่าการเขียนระบบแบบ Hard-code ทำให้แก้ไขและพัฒนาต่อยอดได้ยาก โดยเฉพาะระบบ Inventory ที่มีโค้ดยาวกว่า 3,000 บรรทัด ทำให้ผมเริ่มสนใจการออกแบบโครงสร้างระบบและการพัฒนาเกมในระยะยาว",
    "ต่อมาในช่วงมัธยมปลาย ผมพัฒนา AOT: New Hope โดยสร้างระบบต่อสู้ อุปกรณ์เคลื่อนที่สามมิติ ภารกิจ และระบบความก้าวหน้าของผู้เล่น รวมถึงแก้ปัญหาด้านฟิสิกส์ คณิตศาสตร์ และประสิทธิภาพ จนมีผู้เล่นและชุมชน Discord เป็นของตัวเอง นอกจากนี้ ผมยังเข้าร่วมกิจกรรมและการแข่งขันพัฒนาเกม ทำให้ได้เรียนรู้การนำแนวคิดมาสร้างเป็นผลงานจริง ผมเคยสูญเสียกลุ่มและโปรเจกต์เก่าจากการถูกแฮ็กบัญชี Roblox แต่ยังคงนำประสบการณ์ที่ผ่านมาเริ่มต้นและสร้างผลงานใหม่อีกครั้ง",
    "จากปัญหาที่พบ ผมพัฒนา MAS Framework เพื่อช่วยจัดโครงสร้างระบบในเกมให้เป็นส่วนและดูแลต่อได้ง่ายขึ้น จนถึงเวอร์ชัน 2.1.0 และต่อยอดความรู้ไปสร้าง SnapCursorX โปรแกรมบน Windows ด้วย Python และ C++ อย่างไรก็ตาม การพัฒนาโปรเจกต์ควบคู่กับการเรียนทำให้ผมมีข้อจำกัดด้านเวลาและพลังงาน ส่งผลให้ XPR Studio ยังไม่เติบโตเท่าที่ตั้งใจ ประสบการณ์นี้ทำให้ผมเห็นถึงข้อจำกัดของการทำงานคนเดียว และต้องการพัฒนาทักษะการวางแผน การทำงานเป็นทีม และการร่วมมือกับผู้คนที่มีความถนัดแตกต่างกัน",
    "ผมจึงสนใจศึกษาต่อสาขา Digital Game ณ วิทยาลัยศิลปะ สื่อ และเทคโนโลยี มหาวิทยาลัยเชียงใหม่ เพื่อพัฒนาความรู้ให้ครอบคลุมทั้งการเขียนโปรแกรม การออกแบบเกม และการสร้างประสบการณ์ให้ผู้เล่น รวมถึงเรียนรู้กระบวนการพัฒนาเกมให้เป็นผลิตภัณฑ์ที่ใช้งานได้จริง ผมต้องการใช้โอกาสระหว่างเรียนในการแลกเปลี่ยนความคิด ทำโปรเจกต์ร่วมกับผู้อื่น และสร้างเครือข่ายกับผู้ที่สนใจด้านเดียวกัน เพื่อนำไปต่อยอดในการทำงานจริงในอนาคต",
    "ในระยะยาว ผมต้องการพัฒนา XPR Group Corporation™ 2/4 ส่วนแรกโดยมี Alpha มุ่งเน้นการสร้างเกมและผลิตภัณฑ์ดิจิทัลผ่าน XPR Studio และ Beta มุ่งเน้นการพัฒนาบุคลากรและสร้างความร่วมมือ นอกจากนี้ ผมยังมีเป้าหมายที่จะสร้าง Game Engine และแพลตฟอร์มที่เปิดโอกาสให้ผู้สร้างสามารถพัฒนาและเผยแพร่เกมได้อย่างอิสระ ทั้งบนแพลตฟอร์มของตัวเองหรือส่งออกไปเผยแพร่ที่อื่น สำหรับผม CAMT จึงเป็นก้าวสำคัญในการพัฒนาจากผู้สร้างเกมด้วยตัวเองไปสู่การเป็นนักพัฒนาเกมที่สามารถสร้างผลงานร่วมกับผู้อื่น สร้างทีม และต่อยอดแนวคิดให้เกิดขึ้นจริง ภายใต้แนวคิด Exotic • Passionate • Revolutionize"
  ]
};

export const SKILL_CATEGORIES = [
  {
    category: "Game Development",
    skills: [
      { name: "Roblox Studio & Luau", level: "Advanced", desc: "Modular architecture, client-server replication, 3D physics" },
      { name: "Game System Architecture", level: "Advanced", desc: "Component-Oriented Programming (COP) & OOP design patterns" },
      { name: "Combat & Movement Mechanics", level: "Intermediate", desc: "3D maneuver grappling, hitboxes, projectile & camera Tween" },
      { name: "Gameplay Balancing & Progression", level: "Intermediate", desc: "Itemization, stats balancing, inventory and quest states" },
      { name: "Audio & VFX Implementation", level: "Intermediate", desc: "Implementing ready-made VFX particles, screen shakes, sound triggers, and camera tweens into gameplay systems" }
    ]
  },
  {
    category: "Programming & Software Engineering",
    skills: [
      { name: "Luau (Roblox)", level: "Advanced", desc: "Type checking, OOP metamethods, performance optimization" },
      { name: "Python", level: "Intermediate", desc: "Desktop application development, automation scripts, GUI" },
      { name: "C / C++", level: "Beginner", desc: "High-performance routines, native input hook engines, algorithms" },
      { name: "TypeScript / JavaScript", level: "Beginner", desc: "Web applications, micro:bit physical computing, Node.js" },
      { name: "Git & GitHub", level: "Beginner", desc: "Version control, release distribution, collaborative workflows" }
    ]
  },
  {
    category: "Tools & Frameworks",
    skills: [
      { name: "MAS Framework v2.1.0", level: "Author / Core", desc: "Self-authored modular architecture standard for multi-place games" },
      { name: "MAS Super Tool+ (Plugin)", level: "Author / Core", desc: "Roblox Studio plugin with automated template creation & AI exports" },
      { name: "VS Code", level: "Intermediate", desc: "Primary code editing environment with Git and plugin integration" },
      { name: "REV Robotic Control Hub", level: "Intermediate", desc: "Robot motor, servo, and sensor automation pipeline in Java" },
      { name: "micro:bit", level: "Proficient", desc: "Physical computing, wearable accelerometer sensors and radio" }
    ]
  },
  {
    category: "AI & Innovation Workflows",
    skills: [
      { name: "Claude (Web) & Vibe Coding", level: "Advanced", desc: "AI-assisted Luau scripting, refactoring, and structured context processing via MAS Super Tool+ export" },
      { name: "Codex & LLM Developer Tools", level: "Intermediate", desc: "Fast logic scaffolding, algorithm prototyping, and bug diagnosis" },
      { name: "Human + AI Collaboration", level: "Advanced", desc: "Using AI for rapid prototyping, architecture verification, token-efficient Luau context" },
      { name: "Open Source Local LLMs", level: "Certified (KMITL)", desc: "Workshop training in self-hosted open-source language models" },
      { name: "Google AI Studio", level: "Proficient", desc: "Rapid web application prototyping and Gemini prompt engineering" }
    ]
  }
];

export const PROJECTS: ProjectItem[] = [
  {
    id: "mas-framework",
    title: "MAS Framework",
    subtitle: "Modular Architecture Standard · v2.1.0",
    tagline: "Build modular, build scalable: Framework มาตรฐานสถาปัตยกรรมซอฟต์แวร์สำหรับเกม Roblox",
    category: "tool",
    year: "2024–2026",
    highlightBadge: "Self-Authored Framework",
    role: ["Software Architect", "Lead Developer", "Plugin Developer", "Documentation Author"],
    techStack: ["Luau", "Roblox Studio", "OOP / COP Architecture", "AI Skills", "JSON"],
    thumbnail: "/portfolio-assets/mas-framework-overview.png",
    gallery: [
      "/portfolio-assets/mas-framework-overview.png",
      "/portfolio-assets/xpr-roblox-starter.png"
    ],
    description: [
      "MAS Framework เริ่มต้นจากความสนใจในการออกแบบ Software Architecture แบบ Component-Oriented Programming (COP) และ Object-Oriented Programming (OOP) เพื่อแก้ปัญหาโค้ดสปาเก็ตตีและ hard-code ในเกมขนาดใหญ่",
      "การแบ่งระบบออกเป็นส่วนย่อยที่มีหน้าที่ชัดเจนช่วยให้โค้ดเป็นระเบียบ นำกลับมาใช้ซ้ำ (reusable) และพัฒนาต่อได้ง่ายขึ้น จึงนำแนวคิดเหล่านี้มาประยุกต์เป็นโครงสร้างสำหรับการพัฒนาเกมใน Roblox ที่รองรับระบบหลาย Place",
      "พัฒนาต่อเนื่องควบคู่กับ MAS Super Tool+ ซึ่งเป็น Plugin บน Roblox Studio เพื่อช่วยติดตั้ง อัปเดต ตรวจสอบโครงสร้างโปรเจกต์ และ Export โค้ดสำหรับส่งต่อให้ Claude และ AI วิเคราะห์อย่างแม่นยำและประหยัด Token"
    ],
    keyFeatures: [
      "Component-Oriented & Modular: แยกโมดูลการทำงาน Service / Controller ชัดเจน",
      "MAS Super Tool+ Plugin: เครื่องมือติดตั้ง ตรวจสอบ Asset และ Export โค้ด",
      "AI-Assisted Development: ออกแบบ Documentation และ AI Skills เพื่อให้ Claude/AI ช่วยเขียนระบบได้อย่างถูกต้อง",
      "Multi-Place Support: รองรับโปรเจกต์ขนาดใหญ่ที่มีหลายแมพ / หลายสถานที่เชื่อมโยงกัน",
      "Business Model: Free Core (MAS Lite) ควบคู่กับ Paid Extensions (Super Tool+) ในระยะยาว"
    ],
    impact: [
      "ลดความซับซ้อนในการพัฒนาเกม และรองรับการขยายโปรเจกต์ในระยะยาว",
      "นำไปใช้จริงในทุกโปรเจกต์หลักของ XPR Studio (AOT: New Hope, The Freedom War of Siam, Shattered Memories)",
      "พัฒนาต่อเนื่องจากปัญหาจริงจนถึงเวอร์ชัน v2.1.0 (Test Release)"
    ],
    specs: {
      projectName: "MAS Framework",
      roles: ["Software Architect", "Lead Developer", "Plugin Developer", "Documentation Author"],
      team: "XPR Group Corporation™",
      duration: "2024–ปัจจุบัน (ต่อเนื่อง)",
      concept: "Framework มาตรฐานสถาปัตยกรรมซอฟต์แวร์ (COP & OOP) สำหรับพัฒนาเกม Roblox ระดับ Production",
      frameworkOrEngine: "Luau · Roblox Studio · Plugin · Claude Web Export",
      result: "v2.1.0 (Test Release) ใช้งานจริงในทุกโปรเจกต์หลัก",
      status: "Active Production"
    },
    links: [
      { label: "XPR Corporation", url: "https://xprgroup.carrd.co/" },
      { label: "GitHub Org", url: "https://github.com/xprgroupcorporation" }
    ]
  },
  {
    id: "snapcursorx",
    title: "SnapCursorX",
    subtitle: "A Cursor Workflow Engine · Windows Desktop App",
    tagline: "โปรแกรม Desktop ควบคุม Input และสร้าง Workflow แบบ Visual ที่ยืดหยุ่นและน้ำหนักเบา",
    category: "tool",
    year: "2025–2026",
    highlightBadge: "Windows Desktop Utility",
    role: ["Creator", "Core Engine Developer", "UI/UX Designer"],
    techStack: ["Python", "C++", "Windows Native API", "JSON", "Git/GitHub"],
    thumbnail: "/portfolio-assets/snapcursorx-evolution.png",
    gallery: [
      "/portfolio-assets/snapcursorx-evolution.png"
    ],
    description: [
      "โปรแกรม Desktop สำหรับสร้าง Workflow ควบคุม Input แบบ Visual สร้างจากปัญหาที่เจอจริงตอนเล่น PVZ Fusion ซึ่งต้องคอยขยับเมาส์ไปเลือกช่องเมล็ดพืชซ้ำ ๆ",
      "เครื่องมือที่มีอยู่ในตลาดส่วนใหญ่เป็นเพียง Auto-clicker ธรรมดา หรือ Macro Recorder ที่ต้องเขียน Script หนัก จึงพัฒนา SnapCursorX ขึ้นมาเพื่อเน้นความยืดหยุ่น ควบคุมได้ และใช้งานง่าย จากไอเดียเล็ก ๆ สู่ซอฟต์แวร์จริงที่ปล่อยให้คนอื่นใช้งาน",
      "เป็นการประยุกต์ความรู้ข้ามสายจากการพัฒนาเกม มาสร้างซอฟต์แวร์ Desktop บน Windows ตัวแรกด้วย Python และ C++ พร้อมทั้งฝึกฝนการใช้ Git/GitHub สำหรับจัดการ source code และ release ให้ผู้ใช้จริง"
    ],
    keyFeatures: [
      "Single Mode: สำหรับงานง่าย ๆ ทำงานสะดวกรวดเร็ว",
      "Sandbox Mode: ต่อ Workflow ได้เองแบบ Visual โดยใช้ Drag, Keyboard, Scroll และ Wheel Marker",
      "Flexible Config: ตั้ง Record Input, Delay, จำนวนรอบ และพิกัด Cursor ของแต่ละ Action ได้อิสระ",
      "Profile Save/Load: บันทึก Setup ไว้เป็น JSON แล้วโหลดกลับมาใช้ใหม่ได้ทันที",
      "Modern Compact UI: หน้าต่างกะทัดรัด พร้อมโหมด Always-on-Top ใช้งานคู่กับโปรแกรมอื่นได้ลื่นไหล"
    ],
    impact: [
      "เปิดให้สาธารณะดาวน์โหลดใช้งานจริงตั้งแต่ v0.8.0 SE จนถึงปัจจุบัน v0.9.2 SE",
      "ผสานการทำงาน Human + AI Collaboration โดยผู้พัฒนาคุม Architecture, Workflow, Design, Testing และ Debugging ทั้งหมด",
      "เป็นก้าวแรกที่สำคัญในการสร้างซอฟต์แวร์ Desktop อิสระนอกเหนือจาก Roblox"
    ],
    specs: {
      projectName: "SnapCursorX",
      roles: ["Creator", "Core Engine Developer", "UI/UX Designer"],
      team: "Solo Project (XPR Group)",
      duration: "2025–ปัจจุบัน (v0.0 สู่ v0.9.2 SE)",
      concept: "โปรแกรม Desktop ควบคุม Input และสร้าง Workflow อัตโนมัติแบบ Visual สำหรับ Windows",
      frameworkOrEngine: "Python · C++ · Windows Native API · JSON",
      result: "v0.9.2 SE (Stable Edition) เผยแพร่บน GitHub",
      status: "Released & Maintained"
    },
    links: [
      { label: "Personal GitHub", url: "https://github.com/AC4-XPR" },
      { label: "XPR Group GitHub", url: "https://github.com/xprgroupcorporation" }
    ]
  },
  {
    id: "aot-new-hope",
    title: "AOT: NEW HOPE",
    subtitle: "Action · Adventure · High-Speed Combat · RPG",
    tagline: "เกมแอ็กชันผจญภัยความเร็วสูงและระบบเคลื่อนย้าย 3 มิติ ที่สร้างใหม่ด้วย MAS Framework",
    category: "game",
    year: "2023–2026",
    highlightBadge: "1.0M+ Visits (V1 Legacy)",
    role: ["Lead Developer", "Combat & System Programmer", "World Builder"],
    techStack: ["Roblox Studio", "Luau", "MAS Framework v1.4.0–2.1.0", "3D Physics", "Discord Community"],
    thumbnail: "/portfolio-assets/aot-v1-old-game-page.png",
    gallery: [
      "/portfolio-assets/aot-v1-old-game-page.png",
      "/portfolio-assets/aot-v1-player-count.png",
      "/portfolio-assets/aot-v1-stats-visits.png",
      "/portfolio-assets/aot-v1-pv.png",
      "/portfolio-assets/aot-in-game-action.png",
      "/portfolio-assets/aot-v3-gamepage.png",
      "/portfolio-assets/aot-thalverra-island.jpg",
      "/portfolio-assets/aot-v1-badges.png"
    ],
    description: [
      "NEW HOPE เป็นโปรเจกต์เกม Roblox ของ XPR Studio ที่นำกลับมาพัฒนาใหม่เป็นเวอร์ชันที่ 3 (V3) หลังจากเกมต้นฉบับ V1 เคยได้รับความนิยมอย่างสูง มีผู้เล่นจำนวนมาก และยอดเข้าชมกว่า 1,000,000+ ครั้ง ก่อนที่บัญชีเดิมจะถูกแฮ็กจนไม่สามารถพัฒนาต่อได้",
      "แทนที่จะยอมแพ้ ผมนำบทเรียนและความรู้ทั้งหมดมาตั้งต้นใหม่ พัฒนาเวอร์ชัน V3 ให้เป็นเอกลักษณ์ของตัวเอง โดยยังคงเสน่ห์ของระบบ MDME (Multi Directional Manvauer Equipment) ที่ยิงตะขอเกี่ยวและเหวี่ยงตัวผ่านอากาศด้วยความเร็วสูง",
      "วางระบบต่อสู้ที่เน้นการโจมตีจุดอ่อนศัตรู อัปเกรดชิ้นส่วนอุปกรณ์ที่มีค่าสเตตัสและความหายาก พร้อมโลก The Thalverra Island ที่เขียนเนื้อเรื่องและ Lore ของตนเอง"
    ],
    keyFeatures: [
      "MDME High-Speed Traversal: ระบบโหนสลิงสามมิติคำนวณเวกเตอร์ฟิสิกส์ลื่นไหล",
      "Weak-Point Combat: ระบบเล็งโจมตีจุดอ่อนศัตรูพร้อมเอฟเฟกต์และกล้องแบบไดนามิก",
      "Modular Equipment System: ประกอบชุดอุปกรณ์จากชิ้นส่วน อัปเกรดระดับความหายากและสเตตัส",
      "Dynamic Quests: ภารกิจกำจัดศัตรู ป้องกันกำแพง และช่วยเหลือชาวบ้านพร้อมระดับความยากปรับได้",
      "The Thalverra Island: โลกขนาดใหญ่ที่รองรับการสำรวจและเนื้อเรื่องเฉพาะตัว"
    ],
    impact: [
      "V1 มียอดผู้เล่นรวมกว่า 1.0M+ ครั้ง พร้อมกลุ่มคอมมูนิตี้ Discord ที่เหนียวแน่น",
      "พิสูจน์ความทนทานทางจิตวิทยา (Resilience): เมื่อเผชิญการถูกแฮ็ก กลับใช้เป็นโอกาสในการ Refactor ระบบใหม่หมดด้วย MAS Framework",
      "เป็นเกมแกนนำที่ใช้ทดสอบสถาปัตยกรรม MAS Framework v1.4.0–2.1.0 ในสถานการณ์โหลดจริง"
    ],
    specs: {
      projectName: "AOT: NEW HOPE (V3)",
      roles: ["Lead Developer", "Combat & System Programmer", "World Builder"],
      team: "XPR Studio",
      duration: "2023–ปัจจุบัน",
      concept: "High-Speed Action RPG ผจญภัยและโหนสลิง 3 มิติ MDME บนเกาะ The Thalverra Island",
      frameworkOrEngine: "Roblox Studio · Luau · MAS Framework v2.1.0 · 3D Physics",
      result: "V1 มียอดเข้าชม 1.0M+ / ปัจจุบันพัฒนา V3 บนสถาปัตยกรรม MAS",
      status: "Alpha in Active Development"
    }
  },
  {
    id: "shattered-memories",
    title: "Shattered Memories",
    subtitle: "Horror · Puzzle · Point-and-Click · 3D · Colorless Dark",
    tagline: "เกมสยองขวัญและไขปริศนาบรรยากาศไร้สี ที่ผู้เล่นต้องเผชิญหน้ากับอดีตของตนเอง",
    category: "game",
    year: "2025–2026",
    highlightBadge: "Atmospheric 3D Horror",
    role: ["Game Designer", "Solo Programmer", "Atmosphere & Audio Director"],
    techStack: ["Roblox Studio", "Luau", "MAS Framework v2.1.0", "3D Lighting", "Puzzle Engine"],
    thumbnail: "/portfolio-assets/shattered-memories-gameplay.png",
    gallery: [
      "/portfolio-assets/shattered-memories-gameplay.png"
    ],
    description: [
      "เกมสยองขวัญและไขปริศนาในมุมมองบุคคลที่หนึ่งแบบ Point-and-Click นำกลับมาพัฒนาใหม่จาก Map สำรองหลังจากเหตุการณ์ถูกแฮ็กบัญชี",
      "ผู้เล่นตื่นขึ้นมาในสถานที่ร้างอันมืดมิดและไร้สี ควบคุมไฟฉายด้วยเมาส์ คลิกเพื่อเคลื่อนที่ โต้ตอบกับวัตถุ และค้นหาไอเทมเพื่อปลดล็อกพื้นที่ใหม่ พร้อมรับมือกับศัตรูที่ต้องอาศัยการสังเกตและจังหวะใช้ไฟฉายเพื่อเอาตัวรอด",
      "เนื้อเรื่องแบ่งเป็นหลายช่วงที่เรียกว่า Memory พร้อมเรื่องราวย่อยและความลับที่ส่งผลต่อตอนจบของเกม โดยได้รับแรงบันดาลใจจาก Five Nights at Freddy’s ในด้านบรรยากาศและความตึงเครียด"
    ],
    keyFeatures: [
      "Colorless Dark Aesthetic: งานภาพโทนขาวดำและไร้สีเพื่อเน้นบรรยากาศหลอนลึก",
      "Point-and-Click 3D Controls: ผสมผสานเกมไขปริศนาแบบคลาสสิกเข้ากับมิติสามมิติ",
      "Flashlight Mechanic: แหล่งกำเนิดแสงชิ้นเดียวที่ใช้ทั้งสำรวจปริศนาและป้องกันตัว",
      "Multi-Ending Memory System: ทางเลือกและเบาะแสที่ค้นพบจะนำไปสู่ฉากจบที่ต่างกัน"
    ],
    impact: [
      "พัฒนาด้วย MAS Framework v2.1.0 เต็มรูปแบบ เพื่อแยกตรรกะปริศนา สเตตแสง และระบบเสียงออกจากกัน",
      "แสดงความสามารถในการดีไซน์เกมแนวสืบสวนระทึกขวัญและกำกับบรรยากาศ (Atmospheric Direction)"
    ],
    specs: {
      projectName: "Shattered Memories",
      roles: ["Game Designer", "Solo Programmer", "Atmosphere & Audio Director"],
      team: "XPR Studio (Solo)",
      duration: "2025–2026",
      concept: "เกมสยองขวัญและไขปริศนามุมมองบุคคลที่หนึ่ง บรรยากาศไร้สี (Colorless Dark)",
      frameworkOrEngine: "Roblox Studio · Luau · MAS Framework v2.1.0 · 3D Lighting",
      result: "ระบบ Puzzle Engine & Flashlight Mechanics แบบแยกโมดูลสมบูรณ์",
      status: "In Active Development"
    }
  },
  {
    id: "moradok-morana",
    certificateIds: ["rst-gamejam-2024"],
    title: "มรดกมรณะ",
    subtitle: "RST Game Jam 2024 · 1st Runner-Up Award (อันดับ 2)",
    tagline: "เกมสยองขวัญสไตล์ไทยโบราณ สร้างเสร็จสมบูรณ์ภายใน 4 วัน คว้ารางวัลรองชนะเลิศอันดับที่ 1",
    category: "game",
    year: "2024",
    highlightBadge: "🥈 1st Runner-Up (RST Game Jam 2024)",
    role: ["Lead Programmer", "Team Manager", "Developer & Tester"],
    techStack: ["Roblox Studio", "Luau", "Horror Mechanics", "Audio Design"],
    thumbnail: "/portfolio-assets/cert-rst-gamejam-2024.jpg",
    gallery: [
      "/portfolio-assets/cert-rst-gamejam-2024.jpg",
      "/portfolio-assets/award-rst-winnerboard.jpg"
    ],
    description: [
      "ผลงานเกมเข้าแข่งขันในรายการ RST Game Jam 2024 จัดขึ้นโดย ศรีวิสา กรุ๊ป ภายใต้ระยะเวลาจำกัดเพียง 4 วัน",
      "ทีม XPR Studio สมาชิก 3 คน ผมรับหน้าที่เป็นโปรแกรมเมอร์หลักและผู้จัดการทีม ควบคุมการพัฒนา ทดสอบระบบ และส่งมอบงานให้ทันเดดไลน์",
      "ผลงานประสบความสำเร็จอย่างสูง ได้รับรางวัลรองชนะเลิศอันดับที่ 1 (อันดับ 2 ของการแข่งขัน) จากผลการตัดสินของกรรมการ Roblox Studio Thailand"
    ],
    keyFeatures: [
      "Thai Cultural Horror: ผสานความเชื่อและบรรยากาศบ้านผีไทยโบราณเข้ากับเกมเพลย์",
      "Fast 4-Day Jam Turnaround: วางขอบเขตระบบ (Scope) อย่างกระชับเพื่อให้เกมเสร็จสมบูรณ์ 100%",
      "Team Coordination: ประสานงานฝ่ายโปรแกรม ศิลป์ และเสียงอย่างมีระบบ"
    ],
    impact: [
      "ได้รับรางวัลรองชนะเลิศอันดับที่ 1 (ประกาศนียบัตรเชิดชูเกียรติอย่างเป็นทางการ)",
      "ยืนยันศักยภาพการสร้างเกมภายใต้ความกดดันและเวลาที่จำกัดอย่างมีประสิทธิภาพ"
    ],
    specs: {
      projectName: "มรดกมรณะ",
      roles: ["โปรแกรมเมอร์หลัก", "จัดการทีม", "พัฒนาและทดสอบเกม"],
      team: "XPR Studio (3 คน)",
      duration: "4 วัน (Game Jam)",
      concept: "เกมผีแบบไทยๆ บรรยากาศสยองขวัญโบราณ",
      frameworkOrEngine: "Roblox Studio · Luau · Horror Mechanics",
      result: "รางวัลรองชนะเลิศอันดับที่ 1 (RST Game Jam 2024)",
      status: "Completed & Award-Winning"
    }
  },
  {
    id: "freedom-war-siam",
    certificateIds: ["dpu-softpower-festival"],
    title: "The Freedom War of Siam",
    subtitle: "Thailand’s Soft Power Roblox Game Creation Festival (DPU)",
    tagline: "เกมต่อสู้มัลติเพลเยอร์ 3D อิงประวัติศาสตร์ไทยโบราณและพลังยันต์ จัดแสดงผลงาน ณ ห้างสรรพสินค้าชั้นนำ",
    category: "game",
    year: "2026",
    highlightBadge: "Exhibition Showcase (DPU / ANT)",
    role: ["Game Developer", "Lead Programmer", "Team Management & Planning", "QA Tester"],
    techStack: ["Roblox Studio", "Luau", "MAS Framework v2.0.0", "Multiplayer Combat", "Class System"],
    thumbnail: "/portfolio-assets/cert-dpu-softpower.png",
    gallery: [
      "/portfolio-assets/cert-dpu-softpower.png",
      "/portfolio-assets/dpu-showcase.jpg"
    ],
    description: [
      "เข้าร่วมการแข่งขัน Thailand’s Soft Power Roblox Game Creation Festival จัดโดยวิทยาลัยครีเอทีฟดีไซน์ แอนด์ เอ็นเตอร์เทนเมนต์เทคโนโลยี (ANT) มหาวิทยาลัยธุรกิจบัณฑิตย์ (DPU) ร่วมกับกรมส่งเสริมวัฒนธรรม กระทรวงวัฒนธรรม",
      "ทีม Ayutthaya.exe สมาชิก 3 คน ใช้เวลาพัฒนา 8 สัปดาห์ พร้อมเข้ารับการอบรม DPU Lecture",
      "เกมจำลองสมรภูมิรบประวัติศาสตร์ไทยโบราณระหว่างฝ่ายอยุธยาและอังวะ ผู้เล่นเลือกคลาสอาวุธเฉพาะตัว เช่น กระบี่ หอก ง้าว ปืนคาบศิลา และผ้าพันแผล ใช้พลังยันต์เข้ายึดจุดยุทธศาสตร์ 4 จุดบนสนามรบ"
    ],
    keyFeatures: [
      "Thai Soft Power Theme: ถ่ายทอดศิลปะการต่อสู้ วัฒนธรรมอาวุธโบราณ และพลังยันต์ไทย",
      "Tactical 3D Multiplayer: แบ่งฝ่ายรุก-รับ ชิงพื้นที่จุดยุทธศาสตร์แบบ Real-time",
      "Distinct Class System: สเตตัสและสกิลของแต่ละคลาสสมดุลและส่งเสริมการเล่นเป็นทีม",
      "MAS Framework v2.0.0: ใช้จัดการโครงสร้างการสื่อสารระหว่าง Client-Server อย่างมีระเบียบ"
    ],
    impact: [
      "ได้รับคัดเลือกนำไปจัดแสดงในงาน Exhibition Showcase ณ MCC Hall ต่อหน้าผู้เข้าชมและสื่อมวลชน",
      "ได้รับใบประกาศนียบัตรเข้าร่วมการแข่งขันระดับมัธยมศึกษา/ปวช. จากกระทรวงวัฒนธรรมและ DPU"
    ],
    specs: {
      projectName: "The Freedom War of Siam",
      roles: ["Game Developer", "Lead Programmer", "Team Management & Planning", "QA Tester"],
      team: "Ayutthaya.exe (3 คน)",
      duration: "8 สัปดาห์",
      concept: "เกมต่อสู้มัลติเพลเยอร์ 3D อิงประวัติศาสตร์ไทยโบราณและพลังยันต์ไทย",
      frameworkOrEngine: "Roblox Studio · Luau · MAS Framework v2.0.0 · Multiplayer Combat",
      result: "Exhibition Showcase Finalist ณ MCC Hall (DPU / กระทรวงวัฒนธรรม)",
      status: "Exhibited Showcase"
    }
  },
  {
    id: "real-in-lair",
    certificateIds: ["global-game-jam-2026"],
    title: "REAL IN LAIR",
    subtitle: "Global Game Jam 2026 (On-site Bangkok)",
    tagline: "เกม 3D Rhythm Runner บนธีม 'Mask' สร้างเสร็จภายใน 48 ชั่วโมง ณ สนาม On-site กรุงเทพฯ",
    category: "game",
    year: "2026",
    highlightBadge: "Global Game Jam 2026 On-Site",
    role: ["Game Developer", "Lead Programmer", "Team Management", "Tester"],
    techStack: ["Roblox Studio", "Luau", "MAS Framework v1.8.1", "Rhythm Engine", "Audio Sync"],
    thumbnail: "/portfolio-assets/cert-ggj-2026.png",
    gallery: [
      "/portfolio-assets/cert-ggj-2026.png",
      "/portfolio-assets/ggj-team-stage.png",
      "/portfolio-assets/ggj-gameplay.png"
    ],
    description: [
      "เข้าร่วมการแข่งขัน Global Game Jam 2026 สนาม On-site ณ กรุงเทพฯ ภายใต้โจทย์ประจำปี 'Theme of the Mask'",
      "ทีม XPR Studio สมาชิก 6 คน พัฒนาเกมจนจบภายใน 48 ชั่วโมง",
      "ผู้เล่นรับบทคนที่ชีวิตเคยไร้สีสัน ก้าวออกจากพื้นที่ปลอดภัย ระหว่างการเดินทางวิ่งไปข้างหน้าบนเส้นทางที่สุ่มต่อกันตามจังหวะเพลง กด A, S, D เพื่อโต้ตอบกับออร์บหลากสีตามจังหวะ Perfect, OK หรือ Miss โดยแต่ละเพลงจะพาไปสู่ตอนจบที่แตกต่างกัน"
    ],
    keyFeatures: [
      "Rhythm Engine in 3D: ตรวจจับจังหวะเพลงและคำนวณคอมโบกับความแม่นยำแบบไดนามิก",
      "Procedural Track Generation: สุ่มต่อเส้นทางวิ่งข้างหน้าให้ท้าทายทุกรอบการเล่น",
      "Narrative Through Music: ทุกบทเพลงถ่ายทอดการเปลี่ยนมุมมองที่ตัวละครมีต่อโลกภายนอก"
    ],
    impact: [
      "สร้างเกมจนเสร็จและเปิดให้เล่นบน Itch.io พร้อมสไลด์นำเสนอต่อหน้าผู้จัดงานและนักพัฒนาในอุตสาหกรรม",
      "ได้รับ Certificate of Participation สนับสนุนโดย TGA, GCA x TGS และ depa"
    ],
    specs: {
      projectName: "REAL IN LAIR",
      roles: ["Lead Programmer", "Game Developer", "Team Management", "Tester"],
      team: "XPR Studio (6 คน)",
      duration: "48 ชั่วโมง (Global Game Jam)",
      concept: "3D Rhythm Runner บนธีม Mask ก้าวออกจาก Comfort Zone ตามจังหวะเพลง",
      frameworkOrEngine: "Roblox Studio · Luau · MAS Framework v1.8.1 · Procedural Track",
      result: "สร้างเสร็จสมบูรณ์และนำเสนอในงาน Global Game Jam 2026 On-site กรุงเทพฯ",
      status: "Completed (Itch.io)"
    }
  },
  {
    id: "tcas-command-center",
    title: "TCAS Command Center",
    subtitle: "Web Application · PassionSeed SHIFT[1] Camp",
    tagline: "เว็บแอปพลิเคชันสำหรับค้นหา วางแผน และเปรียบเทียบหลักสูตรเข้ามหาวิทยาลัยอย่างเป็นระบบ",
    category: "web",
    year: "2026",
    highlightBadge: "Camp Web Project",
    role: ["Full-Stack Developer", "System Designer"],
    techStack: ["Google AI Studio", "TypeScript", "Modern CSS", "GitHub", "Vercel"],
    thumbnail: "/portfolio-assets/tcas-command-center-app.png",
    gallery: [
      "/portfolio-assets/tcas-command-center-app.png"
    ],
    description: [
      "พัฒนาขึ้นในค่าย PassionSeed SHIFT[1] Camp เพื่อแก้ปัญหาข้อมูล myTCAS ที่กระจายอยู่หลายหน้าและขาดเครื่องมือบันทึกหลักสูตรที่ผู้เรียนสนใจ",
      "พัฒนา TCAS Command Center ให้ผู้ใช้สามารถค้นหา กรอง บันทึก และเปรียบเทียบหลักสูตรจากหลายมหาวิทยาลัยได้ในที่เดียว พร้อมปรับแต่งการใช้งานตามความต้องการของตนเอง",
      "ได้เรียนรู้กระบวนการวิเคราะห์ปัญหา พัฒนาจนเป็นผลิตภัณฑ์ การใช้ AI ช่วยเขียนโค้ดและ Debug รวมถึงการ Deploy สู่สาธารณะผ่าน Vercel"
    ],
    keyFeatures: [
      "Curriculum Filtering & Search: ค้นหาหลักสูตรตามคณะ มหาวิทยาลัย และรอบรับสมัคร",
      "Comparative Dashboard: เปรียบเทียบเกณฑ์คะแนนและจำนวนรับได้ในหน้าเดียว",
      "Bookmark System: บันทึกหลักสูตรเป้าหมายเพื่อวางแผนเส้นทางสอบ"
    ],
    impact: [
      "ฝึกฝนกระบวนการคิดแบบ Product-Minded ที่มองความต้องการของผู้ใช้เป็นหัวใจสำคัญ",
      "แสดงทักษะการสร้างเว็บแอปพลิเคชันที่ใช้งานได้จริงนอกเหนือจากการพัฒนาเกม"
    ],
    specs: {
      projectName: "TCAS Command Center",
      roles: ["Full-Stack Developer", "System Designer"],
      team: "Solo / PassionSeed SHIFT[1] Camp",
      duration: "2026",
      concept: "เว็บแอปพลิเคชันรวมศูนย์ข้อมูลและวางแผนเปรียบเทียบหลักสูตร TCAS สำหรับนักเรียน",
      frameworkOrEngine: "Google AI Studio · TypeScript · Modern CSS · Vercel",
      result: "พัฒนาเสร็จและ Deploy สู่สาธารณะ ใช้งานวางแผนสอบเข้ามหาวิทยาลัยจริง",
      status: "Deployed Web App"
    }
  },
  {
    id: "thera-time",
    certificateIds: ["science-fair-northern-gold", "arts-crafts-gold", "lampang-rajabhat-science-week"],
    title: "THERA TIME (นาฬิกาเวลาแห่งการบำบัด)",
    subtitle: "Invention & Science Project · Micro:bit Physical Computing",
    tagline: "โครงงานวิทยาศาสตร์สิ่งประดิษฐ์นาฬิกาอัจฉริยะส่งเสริมการทำกายภาพบำบัดและตรวจจับการล้มในผู้สูงอายุ",
    category: "tool",
    year: "2025–2026",
    highlightBadge: "🥇 Gold Medal Award (Northern Regional)",
    role: ["Lead Programmer", "Hardware Tester", "Stage Demonstrator"],
    techStack: ["micro:bit v2", "JavaScript / Block Programming", "Wearable Sensors", "Accelerometer"],
    thumbnail: "/portfolio-assets/thera-microbit-device.png",
    gallery: [
      "/portfolio-assets/thera-microbit-device.png",
      "/portfolio-assets/thera-coding-editor.png",
      "/portfolio-assets/cert-science-fair-northern.jpg",
      "/portfolio-assets/cert-arts-crafts-gold.jpg",
      "/portfolio-assets/lampang-rajabhat-stage.jpg"
    ],
    description: [
      "โครงงานวิทยาศาสตร์สิ่งประดิษฐ์ที่พัฒนาขึ้นเพื่อช่วยส่งเสริมการทำกายภาพบำบัดและเพิ่มความปลอดภัยให้กับผู้สูงอายุ",
      "ใช้งานร่วมกับบอร์ด micro:bit ตัวอุปกรณ์สามารถตรวจจับการเคลื่อนไหวเพื่อนับจำนวนครั้งในการยกแขน และตรวจจับแรงสั่นสะเทือนในกรณีที่ผู้ใช้งานลื่นหรือหกล้ม พร้อมส่งสัญญาณเตือนไปยังผู้ดูแล",
      "ผมรับผิดชอบด้าน Programming เป็นหลัก พัฒนาตรรกะตรวจจับการเคลื่อนไหว ทดสอบการทำงานร่วมกับฮาร์ดแวร์จริง และนำเสนอสาธิตชิ้นงานต่อคณะกรรมการผู้ทรงคุณวุฒิ"
    ],
    keyFeatures: [
      "Arm Lift Motion Tracking: นับรอบการยกแขนทำกายภาพบำบัดด้วย Accelerometer อย่างแม่นยำ",
      "Fall & Impact Detection: ตรวจจับแรงกระแทกจากการล้มฉับพลันและส่งเสียง/สัญญาณเตือน",
      "Simple Wearable Form-Factor: สายรัดข้อมือขนาดกะทัดรัด น้ำหนักเบา เหมาะกับผู้สูงวัย"
    ],
    impact: [
      "รางวัลระดับเหรียญทอง รองชนะเลิศอันดับที่ 1 งานวันการศึกษาเอกชนภาคเหนือครั้งที่ 12 จังหวัดพิจิตร ปี 2569",
      "รางวัลระดับเหรียญทอง รองชนะเลิศอันดับ 2 งานศิลปหัตถกรรมนักเรียน ระดับเขตพื้นที่การศึกษา ครั้งที่ 73 ปี 2568",
      "รางวัลรองชนะเลิศอันดับ 2 การประกวดโครงงานคอมพิวเตอร์ งานสัปดาห์วิทยาศาสตร์นิทรรศน์ราชภัฏลำปาง '69"
    ],
    specs: {
      projectName: "THERA TIME (นาฬิกาเวลาแห่งการบำบัด)",
      roles: ["นักพัฒนาโปรแกรมหลัก (Lead Programmer)", "ทดสอบฮาร์ดแวร์", "สาธิตชิ้นงาน"],
      team: "ทีมโครงงานอัสสัมชัญลำปาง",
      duration: "2568–2569",
      concept: "สิ่งประดิษฐ์นาฬิกาอัจฉริยะส่งเสริมการทำกายภาพบำบัดและตรวจจับการล้มในผู้สูงอายุ",
      frameworkOrEngine: "micro:bit v2 · JavaScript / Block · Accelerometer Sensor",
      result: "เหรียญทอง รองชนะเลิศอันดับ 1 (งานวันการศึกษาเอกชนภาคเหนือ)",
      status: "Award-Winning Invention"
    }
  },
  {
    id: "cybersec-experiments",
    title: "Client-Side & Cyber Security Experiments",
    subtitle: "Security Research on Game Client Mechanics",
    tagline: "การทดลองเจาะลึกความปลอดภัยฝั่ง Client และข้อจำกัดทางสถาปัตยกรรมเกมออนไลน์",
    category: "experiment",
    year: "2024–2025",
    highlightBadge: "Security Case Study",
    role: ["Security Researcher", "Client-Side Script Investigator"],
    techStack: ["XENO", "Lua / Luau", "BillboardGui", "Memory getgc() Inspection"],
    thumbnail: "/portfolio-assets/cybersec-xeno-experiment.png",
    gallery: [
      "/portfolio-assets/cybersec-xeno-experiment.png"
    ],
    description: [
      "การศึกษาทดลองทาง Cyber Security และการทำงานของฝั่ง Client ผ่านเครื่องมือสำรวจข้อมูลภายใน เพื่อทำความเข้าใจช่องโหว่ทางสถาปัตยกรรม",
      "การทดลองที่ 1 (AOT-Freedom-War): สำรวจข้อมูลภายใน Client นำข้อมูลที่เข้าถึงได้มาแสดงตำแหน่งผู้เล่นและไททันผ่าน BillboardGui และตรวจสอบ log ผู้แฝงตัวใน Workspace พบว่าข้อมูลสำคัญที่ไม่ควรเปิดเผยถูกเก็บไว้ในที่ที่ Client เข้าถึงได้ จึงสรุปได้ว่าข้อมูลความปลอดภัยต้องย้ายไปคำนวณและเก็บรักษาฝั่ง Server เสมอ",
      "การทดลองที่ 2 (AOT-Last-Breath): ทดลองตรรกะ 1 Click = 1 Kill ด้วยการเคลื่อนย้ายจุดอ่อนผ่าน Tween แทนการเทเลพอร์ตฉับพลัน และทดสอบระบบตรวจจับ MaybeHacker ผ่าน getgc() ในหน่วยความจำ เพื่อเรียนรู้วิธีการเขียน Anti-Cheat ป้องกันระบบเกมของตนเองในอนาคต"
    ],
    keyFeatures: [
      "Server-Authoritative Understanding: เข้าใจว่าทำไมการไม่เชื่อใจ Client จึงเป็นหัวใจของเกมออนไลน์",
      "Memory & Anti-Cheat Analysis: ศึกษากลไกการทำงานของ Anti-Cheat และจุดอ่อนของ Client-Side Detection"
    ],
    impact: [
      "นำองค์ความรู้ความปลอดภัยไปประยุกต์ใช้ในการออกแบบ MAS Framework ให้มี Server Validation ป้องกันการโกง",
      "เข้าใจหลักการ Information Security และ Data Protection เชิงลึกจากการลงมือทดสอบจริง"
    ],
    specs: {
      projectName: "Client-Side Security Research",
      roles: ["Security Researcher", "Client-Side Script Investigator"],
      team: "Independent Research",
      duration: "2024–2025",
      concept: "ศึกษาช่องโหว่หน่วยความจำฝั่ง Client และการสร้าง Anti-Cheat บน Server-Authoritative Architecture",
      frameworkOrEngine: "XENO · Luau · BillboardGui · getgc() Memory Inspection",
      result: "นำความรู้ไปใช้ออกแบบ Server Validation ป้องกันการดัดแปลงใน MAS Framework",
      status: "Research Completed"
    }
  },
  {
    id: "epic-world",
    group: "additional",
    title: "Epic World",
    subtitle: "RPG · Open World · Adventure",
    tagline: "หนึ่งในโปรเจกต์เกมแรกที่เริ่มสร้างระบบด้วยตัวเอง จากการทดลองใช้ Roblox Studio และศึกษา Free Models",
    category: "game",
    year: "Early Personal Project",
    highlightBadge: "Additional Personal Project",
    role: ["Game Developer", "Systems Programmer"],
    techStack: ["Roblox Studio", "Luau", "Open-World RPG Design"],
    thumbnail: "/portfolio-assets/epic-world-cover.png",
    gallery: ["/portfolio-assets/epic-world-cover.png"],
    description: [
      "Epic World เป็นหนึ่งในโปรเจกต์แรกที่ผมพัฒนาระบบเกมด้วยตัวเอง หลังจากเริ่มทดลองใช้ Roblox Studio และเรียนรู้จาก Free Models",
      "เมื่อเกมมีขนาดใหญ่ขึ้น การเขียนระบบแบบ Hard-code โดยเฉพาะ Inventory ที่มีโค้ดยาวกว่า 3,000 บรรทัด ทำให้แก้ไขและต่อยอดได้ยาก ประสบการณ์นี้เป็นจุดเริ่มต้นที่ทำให้ผมสนใจการออกแบบสถาปัตยกรรมซอฟต์แวร์และระบบเกมที่ดูแลต่อได้",
      "โปรเจกต์และกลุ่มเดิมสูญหายหลังบัญชี Roblox ถูกแฮ็ก"
    ],
    keyFeatures: [
      "แนวเกม RPG ผจญภัยในโลกเปิด",
      "ทดลองสร้างระบบเกมและ Inventory ด้วยตนเอง",
      "เป็นจุดเริ่มต้นของความสนใจด้านโครงสร้างระบบและการพัฒนาเกมระยะยาว"
    ],
    impact: ["บทเรียนจากการดูแลระบบขนาดใหญ่ส่งต่อไปสู่การพัฒนา MAS Framework" ]
  },
  {
    id: "furloughed-memories",
    group: "additional",
    title: "Furloughed Memories",
    subtitle: "Asymmetrical Horror Survival · 5v1",
    tagline: "เกมเอาชีวิตรอดสยองขวัญแบบไม่สมมาตร ที่ผู้เล่นแบ่งเป็นสองฝ่ายในรูปแบบ 5 ต่อ 1",
    category: "game",
    year: "Personal Project",
    highlightBadge: "Additional Personal Project",
    role: ["Lead Developer"],
    techStack: ["Roblox Studio", "Luau", "MAS Framework v1.6.0"],
    thumbnail: "/portfolio-assets/furloughed-memories-cover.png",
    gallery: ["/portfolio-assets/furloughed-memories-cover.png"],
    description: [
      "โปรเจกต์เกมสยองขวัญเอาชีวิตรอดแบบ Asymmetrical Horror ที่วางรูปแบบการแข่งขันระหว่างผู้เล่น 5 คนกับอีก 1 คน",
      "ผมรับหน้าที่ Lead Developer และดูแลการพัฒนาระบบด้วย MAS Framework v1.6.0",
      "ยุติโครงการเนื่องจากทิศทางการพัฒนายังไม่ชัดเจน"
    ],
    keyFeatures: [
      "รูปแบบเอาชีวิตรอดแบบ 5v1",
      "วางโครงสร้างระบบโดยใช้ MAS Framework v1.6.0"
    ],
    impact: ["ได้ฝึกวางระบบและประเมินทิศทางของโปรเจกต์เกมก่อนขยายขอบเขตงาน"]
  }
];

export const CERTIFICATES: CertificateItem[] = [
  {
    id: "rst-gamejam-2024",
    title: "รางวัลรองชนะเลิศอันดับที่ 1 (1st Runner-Up) RST Game Jam 2024",
    issuer: "ศรีวิสา กรุ๊ป (Sriwisa Group) & Roblox Studio Thailand",
    date: "7–11 ตุลาคม 2024",
    awardLevel: "รองชนะเลิศอันดับที่ 1",
    category: "gamedev",
    description: "ประกาศนียบัตรมอบให้เพื่อยกย่องความพยายามและความสำเร็จในการได้รับรางวัลรองชนะเลิศอันดับที่ 1 ในการแข่งขันสร้างเกม Roblox 'RST Game Jam 2024' กับผลงาน มรดกมรณะ",
    image: "/portfolio-assets/cert-rst-gamejam-2024.jpg",
    relatedProjectIds: ["moradok-morana"],
    highlight: true
  },
  {
    id: "ftc-thailand-2025",
    title: "Certificate of Participation & Outstanding Activity · FIRST Tech Challenge (Thailand) 2025",
    issuer: "คณะวิศวกรรมศาสตร์ มหาวิทยาลัยเชียงใหม่ (CMU) & FIRST Global",
    date: "9–11 ธันวาคม 2025",
    awardLevel: "กัปตันทีม & กิจกรรมดีเด่น",
    category: "robotics",
    description: "การแข่งขันหุ่นยนต์และปัญญาประดิษฐ์ระดับชาติ หัวข้อ DECODE จัด ณ The Prince Royal's College ในฐานะกัปตันทีม NEOHARDDRIVE#26575 ดูแลระบบ Programming และการควบคุมหุ่นยนต์อัตโนมัติด้วย Java",
    image: "/portfolio-assets/cert-ftc-2025.jpg",
    highlight: true
  },
  {
    id: "science-fair-northern-gold",
    title: "รางวัลระดับเหรียญทอง รองชนะเลิศอันดับที่ 1 โครงงานวิทยาศาสตร์สิ่งประดิษฐ์ ม.4–ม.6",
    issuer: "สำนักงานคณะกรรมการส่งเสริมการศึกษาเอกชน",
    date: "15 กุมภาพันธ์ 2569",
    awardLevel: "เหรียญทอง รองชนะเลิศอันดับ 1",
    category: "science",
    description: "งานวันการศึกษาเอกชนภาคเหนือครั้งที่ 12 จังหวัดพิจิตร ประจำปีพุทธศักราช 2569 กับโครงงาน THERA TIME (นาฬิกาเวลาแห่งการบำบัด)",
    image: "/portfolio-assets/cert-science-fair-northern.jpg",
    relatedProjectIds: ["thera-time"],
    highlight: true
  },
  {
    id: "arts-crafts-gold",
    title: "รางวัลรองชนะเลิศอันดับ 2 ระดับเหรียญทอง โครงงานวิทยาศาสตร์ประเภทสิ่งประดิษฐ์ ม.4–ม.6",
    issuer: "สำนักงานเขตพื้นที่การศึกษามัธยมศึกษาลำปาง ลำพูน",
    date: "11–12 กันยายน 2568",
    awardLevel: "เหรียญทอง รองชนะเลิศอันดับ 2",
    category: "science",
    description: "งานศิลปหัตถกรรมนักเรียน ระดับเขตพื้นที่การศึกษา ครั้งที่ 73 ประจำปีการศึกษา 2568",
    image: "/portfolio-assets/cert-arts-crafts-gold.jpg",
    relatedProjectIds: ["thera-time"],
    highlight: true
  },
  {
    id: "lampang-rajabhat-science-week",
    title: "รางวัลรองชนะเลิศอันดับ 2 การประกวดโครงงานคอมพิวเตอร์ ระดับมัธยมศึกษาตอนปลาย",
    issuer: "คณะวิทยาศาสตร์ มหาวิทยาลัยราชภัฏลำปาง",
    date: "18–20 สิงหาคม 2569",
    awardLevel: "รองชนะเลิศอันดับ 2",
    category: "science",
    description: "เนื่องในงานสัปดาห์วิทยาศาสตร์นิทรรศน์ราชภัฏลำปาง '69 ณ หอประชุมใหญ่ มหาวิทยาลัยราชภัฏลำปาง",
    image: "/portfolio-assets/cert-lampang-rajabhat.jpg",
    relatedProjectIds: ["thera-time"],
    highlight: true
  },
  {
    id: "acl-outstanding-robotics",
    title: "นักเรียนดีเด่นด้านกิจกรรม ประเภท การแข่งขันทักษะ (หุ่นยนต์) ประจำปีการศึกษา 2568",
    issuer: "โรงเรียนอัสสัมชัญลำปาง (Assumption College Lampang)",
    date: "13 มิถุนายน 2569",
    awardLevel: "นักเรียนดีเด่นด้านกิจกรรม",
    category: "academic",
    description: "พิธียกย่องเชิดชูเกียรตินักเรียน เรียนดี กิจกรรมเด่น ประจำปีการศึกษา 2568 มอบโดยภราดา ดร.วิทยา เทพกอม ผู้อำนวยการโรงเรียนอัสสัมชัญลำปาง",
    image: "/portfolio-assets/cert-acl-outstanding-robotics.jpg",
    highlight: true
  },
  {
    id: "dpu-softpower-festival",
    title: "ประกาศนียบัตรเข้าร่วมการแข่งขัน Thailand's Soft Power Roblox Game Creation Festival",
    issuer: "วิทยาลัยครีเอทีฟดีไซน์ แอนด์ เอ็นเตอร์เทนเมนต์เทคโนโลยี (ANT) มหาวิทยาลัยธุรกิจบัณฑิตย์ และกรมส่งเสริมวัฒนธรรม",
    date: "30 สิงหาคม 2569",
    awardLevel: "Exhibition Showcase Finalist",
    category: "gamedev",
    description: "ระดับมัธยมศึกษา/ปวช. กับผลงานเกมประวัติศาสตร์ไทย 'The Freedom War of Siam' โดยทีม Ayutthaya.exe พร้อมจัดแสดงในงาน Exhibition Showcase",
    image: "/portfolio-assets/cert-dpu-softpower.png",
    relatedProjectIds: ["freedom-war-siam"],
    highlight: true
  },
  {
    id: "global-game-jam-2026",
    title: "Certificate of Participation · Global Game Jam 2026: Game Dev Hub",
    issuer: "Global Game Jam, TGA, depa & gamescom asia",
    date: "มกราคม 2026",
    awardLevel: "Completed 48-Hour Jam",
    category: "gamedev",
    description: "เข้าร่วมการแข่งขันสร้างเกม 48 ชั่วโมงระดับโลก On-site กรุงเทพฯ กับผลงานเกม Rhythm 3D 'REAL IN LAIR' ภายใต้แนวคิด Theme of the Mask",
    image: "/portfolio-assets/cert-ggj-2026.png",
    relatedProjectIds: ["real-in-lair"],
    highlight: true
  },
  {
    id: "hamster-hub-gugame",
    title: "Certificate of Participation · “อยากลองทำเกมมือถือบ้างได้ไหม?” Hamster Hub GuGame",
    issuer: "Hamster Hub",
    date: "19–21 ธันวาคม 2025",
    awardLevel: "Completed Game Jam",
    category: "gamedev",
    description: "การแข่งขันพัฒนาเกม 3 วัน กับผลงาน 'Last Flame' (Visual Novel ผสมแอ็กชัน 3D บนธีม Hell Paradise)",
    image: "/portfolio-assets/cert-gugame-hamster.png"
  },
  {
    id: "kmutt-bangmod-hackathon",
    title: "Certificate of Participation · Bangmod Hackathon 2025: WHAT’S YOUR DREAM?",
    issuer: "ภาควิชาวิศวกรรมคอมพิวเตอร์ คณะวิศวกรรมศาสตร์ มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี (KMUTT)",
    date: "2025",
    awardLevel: "Participant",
    category: "academic",
    description: "การแข่งขันเขียนโปรแกรมแก้โจทย์ปัญหาด้วยภาษา C/C++ ภายใต้เวลาจำกัดสำหรับนักเรียนระดับมัธยมศึกษาตอนปลาย ในนามทีม 'แว่นมานี่มา'",
    image: "/portfolio-assets/cert-kmutt-bangmod.png"
  },
  {
    id: "kmitl-local-llm",
    title: "Workshop: เริ่มต้นใช้งาน Open Source LLM แบบ Local [EE, Computing]",
    issuer: "คณะวิศวกรรมศาสตร์ สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง (KMITL)",
    date: "5 กรกฎาคม 2569",
    awardLevel: "Completed Workshop",
    category: "robotics",
    description: "ในงาน K-ENGINEERING WORLD TOUR AND COMPETENCY CHALLENGE 2026 เรียนรู้การ Deploy และประยุกต์ใช้โมเดลภาษาขนาดใหญ่แบบ On-device",
    image: "/portfolio-assets/cert-kmitl-llm.png"
  },
  {
    id: "kmitl-mini-startup",
    title: "Workshop: Mini Startup Camp [Non-EE]",
    issuer: "คณะวิศวกรรมศาสตร์ สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง (KMITL)",
    date: "5 กรกฎาคม 2569",
    awardLevel: "Completed Workshop",
    category: "academic",
    description: "ในงาน K-ENGINEERING WORLD TOUR AND COMPETENCY CHALLENGE 2026 ฝึกฝนแนวคิดการสร้างผลิตภัณฑ์ การวางโมเดลธุรกิจ และกระบวนการสตาร์ทอัพ",
    image: "/portfolio-assets/cert-kmitl-startup.png"
  },
  {
    id: "acl-leadership",
    title: "กิจกรรมพัฒนาบุคลิกภาพและศิลปะการพูดเพื่อความเป็นผู้นำ หัวข้อ 'ผู้นำสำคัญไฉน'",
    issuer: "โรงเรียนอัสสัมชัญลำปาง (Assumption College Lampang)",
    date: "12 พฤศจิกายน 2567",
    awardLevel: "Completed Seminar",
    category: "academic",
    description: "กิจกรรมแนะแนว ระดับชั้นมัธยมศึกษาตอนปลาย เพื่อเสริมสร้างทักษะการสื่อสาร ภาวะผู้นำ และการทำงานเป็นทีม",
    image: "/portfolio-assets/cert-acl-leadership.jpg"
  },
  {
    id: "istudy-english-proficiency",
    title: "English Proficiency Score Report · CEFR B2 (Score 46/50 = 92%)",
    issuer: "iStudy Education Language School (Bangkok, Thailand)",
    date: "28 พฤศจิกายน 2025",
    awardLevel: "CEFR B2 Level (92%)",
    category: "academic",
    description: "การทดสอบทักษะภาษาอังกฤษมาตรฐานสากล Listening: 24/24 (100%), Reading: 22/26, คะแนนรวม 46/50 คิดเป็น 92% เทียบเท่าระดับ CEFR B2",
    image: "/portfolio-assets/report-istudy-english.png",
    highlight: true
  },
  {
    id: "cmu-open-house-2025",
    title: "CMU Open House 2025 Onsite · CAMT",
    issuer: "มหาวิทยาลัยเชียงใหม่ · วิทยาลัยศิลปะ สื่อ และเทคโนโลยี",
    date: "13 พฤศจิกายน 2568 (2025)",
    awardLevel: "เข้าร่วมกิจกรรม",
    category: "academic",
    description: "ประกาศนียบัตรรับรองการเข้าร่วมกิจกรรม CMU Open House 2025 Onsite ที่วิทยาลัยศิลปะ สื่อ และเทคโนโลยี มหาวิทยาลัยเชียงใหม่",
    image: "/portfolio-assets/cert-cmu-open-house-2025.png",
    context: [
      "เข้าร่วมกิจกรรม ณ วิทยาลัยศิลปะ สื่อ และเทคโนโลยี มหาวิทยาลัยเชียงใหม่",
      "ได้เรียนรู้เกี่ยวกับสภาพแวดล้อมและแนวทางการศึกษาของ CAMT จากกิจกรรม Open House"
    ],
    highlight: true
  },
  {
    id: "sice-fes-2025-opencv-hand",
    title: "SICE FES 2025 · Artificial Hand Controlled by OpenCV",
    issuer: "SICE FES · Robotics Engineering & AI, Chiang Mai University · IEEE",
    date: "13 กันยายน 2025",
    awardLevel: "Completed Post-Event Workshop",
    category: "robotics",
    description: "ประกาศนียบัตรรับรองการสำเร็จกิจกรรม Post Event หัวข้อ Artificial hand controlled by OpenCV-based programming ณ คณะวิศวกรรมศาสตร์ มหาวิทยาลัยเชียงใหม่",
    image: "/portfolio-assets/cert-sice-fes-2025-opencv.png",
    context: [
      "เรียนรู้การควบคุมมือกลด้วยโปรแกรมประมวลผลภาพ OpenCV",
      "เชื่อมโยงแนวคิดด้าน Computer Vision การเขียนโปรแกรม และระบบหุ่นยนต์ในกิจกรรมเชิงปฏิบัติ"
    ],
    highlight: true
  }
];

export const ACTIVITIES: ActivityItem[] = [
  {
    id: "ftc-2025-activity",
    title: "FIRST Tech Challenge (Thailand) 2025 · DECODE",
    subtitle: "การแข่งขันหุ่นยนต์และปัญญาประดิษฐ์ระดับชาติ",
    role: "กัปตันทีม (Team Captain) & ฝ่าย Programming",
    organization: "จัดโดยคณะวิศวกรรมศาสตร์ มหาวิทยาลัยเชียงใหม่ (CMU) ณ The Prince Royal’s College",
    date: "9–11 ธันวาคม 2025",
    location: "เชียงใหม่ (Chiang Mai)",
    badge: "National Competition",
    tech: ["Java", "VS Code", "REV Robotic Control Hub", "Autonomous Sensors"],
    description: "ผมเข้าร่วมการแข่งขันในทีม NEOHARDDRIVE#26575 โดยรับหน้าที่เป็นกัปตันทีม รับผิดชอบด้าน Programming และช่วยพัฒนาหุ่นยนต์ ตั้งแต่การเขียนระบบควบคุมหุ่นยนต์ การทำงานแบบอัตโนมัติ การเชื่อมต่อและใช้งานเซนเซอร์ ไปจนถึงการทดสอบและแก้ไขปัญหาที่เกิดขึ้นระหว่างการพัฒนาและการแข่งขัน",
    learnings: "การแข่งขันครั้งนี้ทำให้ผมได้เรียนรู้ว่าการพัฒนาหุ่นยนต์ไม่ได้มีเพียงการเขียนโปรแกรมให้ทำงานได้ แต่ต้องออกแบบระบบให้ทำงานร่วมกับกลไกของหุ่นยนต์และสถานการณ์จริงในสนาม รวมถึงต้องปรับแก้ปัญหาอย่างรวดเร็วเมื่อระบบไม่เป็นไปตามที่คาดไว้",
    image: "/portfolio-assets/ftc-team-stage.png",
    gallery: [
      "/portfolio-assets/ftc-team-stage.png",
      "/portfolio-assets/ftc-robot-dev.png",
      "/portfolio-assets/ftc-team-coding.png"
    ]
  },
  {
    id: "ggj-2026-activity",
    title: "Global Game Jam 2026 (On-site Bangkok)",
    subtitle: "การแข่งขันสร้างเกมระดับโลก 48 ชั่วโมง ธีม 'Theme of the Mask'",
    role: "Lead Programmer & Team Coordinator (ทีม XPR Studio, 6 คน)",
    organization: "Global Game Jam, TGA, gamescom asia, depa",
    date: "มกราคม 2026",
    location: "กรุงเทพฯ (Bangkok)",
    badge: "International Game Jam",
    tech: ["Roblox Studio", "Luau", "MAS Framework v1.8.1", "Rhythm Engine"],
    description: "ร่วมทีม XPR Studio เข้าแข่งขันเกมแจมระดับโลกแบบ On-site ในกรุงเทพฯ โดยนำเสนอผลงาน 'REAL IN LAIR' เกมแนว 3D Rhythm Runner ที่ผู้เล่นต้องจับจังหวะเพลงและก้าวออกจากพื้นที่ปลอดภัย พัฒนาระบบการคำนวณจังหวะเพลงแบบไดนามิกและการสร้างเส้นทางแบบ Procedural ภายในเวลา 48 ชั่วโมง",
    learnings: "ได้เรียนรู้การบริหารเวลาและพลังงานของทีมภายใต้เดดไลน์ 48 ชั่วโมง การประสานงานระหว่างฝ่ายโค้ด อาร์ต และดนตรีอย่างฉับไว ตลอดจนการเปิดรับฟัง Feedback จากเมนเทอร์และนักพัฒนาในอุตสาหกรรมเกมจริง",
    image: "/portfolio-assets/ggj-team-stage.png",
    gallery: [
      "/portfolio-assets/ggj-team-stage.png",
      "/portfolio-assets/ggj-gameplay.png"
    ]
  },
  {
    id: "bangmod-hackathon-activity",
    title: "Bangmod Hackathon 2025",
    subtitle: "WHAT’S YOUR DREAM? · การแข่งขันเขียนโปรแกรมและแก้โจทย์ปัญหา C/C++",
    role: "ตัวแทนทีม 'แว่นมานี่มา'",
    organization: "ภาควิชาวิศวกรรมคอมพิวเตอร์ คณะวิศวกรรมศาสตร์ มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี (KMUTT)",
    date: "2025",
    location: "KMUTT (บางมด)",
    badge: "Competitive Programming",
    tech: ["C++", "Dev-C++", "Algorithms", "Problem Solving"],
    description: "การแข่งขันเขียนโปรแกรมและแก้โจทย์ปัญหาโดยใช้ภาษา C/C++ สำหรับนักเรียนระดับมัธยมศึกษาตอนปลายภายใต้เวลาที่จำกัด เป็นครั้งแรกที่ได้นำ C++ มาใช้แก้โจทย์แข่งขันจริงนอกเหนือจากการเรียนในห้องเรียน",
    learnings: "แม้ผลการแข่งขันของผมจะออกมาไม่ดีนัก แต่การแข่งขันครั้งนี้กลับเป็นหนึ่งในประสบการณ์ที่ทำให้ผมเห็นข้อจำกัดของตัวเองได้ชัดเจนที่สุด เพราะเมื่อเจอโจทย์ที่ไม่คุ้นเคยและมีเวลาจำกัด ผมพบว่าความสามารถในการเขียนโปรแกรมเพียงอย่างเดียวไม่ได้แปลว่าจะสามารถแก้ปัญหาได้ดีเสมอไป และเป็นแรงผลักดันให้ศึกษาด้าน Computer Science และ Architecture อย่างลึกซึ้งยิ่งขึ้น",
    image: "/portfolio-assets/cert-kmutt-bangmod.png"
  },
  {
    id: "thera-time-competitions",
    title: "การประกวดโครงงานนวัตกรรมสิ่งประดิษฐ์ THERA TIME",
    subtitle: "กวาด 3 รางวัลจากการประกวดในระดับภูมิภาคและระดับจังหวัด",
    role: "นักพัฒนาโปรแกรมหลัก (Lead Programmer) & ผู้สาธิตชิ้นงาน",
    organization: "สำนักงานคณะกรรมการส่งเสริมการศึกษาเอกชน, สพม. ลำปาง-ลำพูน, มรภ. ลำปาง",
    date: "2568–2569",
    location: "ลำปาง & พิจิตร",
    badge: "Triple Award Winner",
    tech: ["micro:bit", "JavaScript Block", "Accelerometer", "Hardware Integration"],
    description: "นำเสนอผลงานสิ่งประดิษฐ์นาฬิกาเวลาแห่งการบำบัดผ่านการแข่งขัน 3 เวทีใหญ่ ได้แก่ งานวันการศึกษาเอกชนภาคเหนือครั้งที่ 12, งานศิลปหัตถกรรมนักเรียนครั้งที่ 73 และงานสัปดาห์วิทยาศาสตร์ มหาวิทยาลัยราชภัฏลำปาง",
    learnings: "การทำโครงงานนี้ทำให้ผมได้เรียนรู้การนำการเขียนโปรแกรมไปทำงานร่วมกับอุปกรณ์จริง เพราะการทำให้โค้ดทำงานได้เพียงอย่างเดียวไม่เพียงพอ แต่ต้องนำไปทดสอบ ตรวจสอบข้อผิดพลาดกับผู้ใช้งานจริง และปรับปรุงระบบจากผลลัพธ์ที่ได้",
    image: "/portfolio-assets/lampang-rajabhat-stage.jpg",
    gallery: [
      "/portfolio-assets/lampang-rajabhat-stage.jpg",
      "/portfolio-assets/acl-stage-award.jpg",
      "/portfolio-assets/thera-microbit-device.png"
    ]
  }
];

export const EDUCATION_DATA = {
  primary: {
    level: "ชั้นประถมศึกษาปีที่ 1-6",
    school: "โรงเรียนอัสสัมชัญลำปาง (Assumption College Lampang)",
    years: "2555–2561"
  },
  juniorHigh: {
    level: "ชั้นมัธยมศึกษาปีที่ 1-3 (ศิลป์-ภาษา)",
    school: "โรงเรียนอัสสัมชัญลำปาง (Assumption College Lampang)",
    gpax: "3.54",
    semesters: "6 ภาคเรียน",
    years: "2561–2564"
  },
  seniorHigh: {
    level: "ชั้นมัธยมศึกษาปีที่ 4-6 (วิทยาศาสตร์-คณิตศาสตร์)",
    school: "โรงเรียนอัสสัมชัญลำปาง (Assumption College Lampang)",
    gpax: "3.13",
    semesters: "5 ภาคเรียน",
    years: "2564–2567"
  }
};
