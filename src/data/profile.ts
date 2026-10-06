/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║  PROFILE — the single source of truth for the whole website.        ║
 * ║  Edit text here (even from the GitHub web editor) → commit → the    ║
 * ║  site rebuilds automatically in ~1–2 minutes.                       ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

export const profile = {
  name: 'Swapnil Alase',
  shortName: 'Swapnil',
  initials: 'SA',
  role: 'Senior AI Engineer',
  company: 'Forvia',
  location: 'Pune, India',

  /** Big hero headline + the rotating words under it. */
  headline: 'Engineering AI that works in the real world.',
  rotating: [
    'Machine Learning',
    'Data-driven products',
    'Generative AI',
    'Automotive intelligence',
    'Python · SQL · Statistics',
  ],

  /** One paragraph used in the hero and for SEO/social previews. */
  summary:
    'Senior AI Engineer at Forvia with an unusual edge: years of shipping production automotive embedded software before moving into AI. I combine machine learning and data analysis with a deep understanding of how real hardware, real constraints and real users behave.',

  /** "About" section — each string is a paragraph. */
  about: [
    'I started my career close to the metal — writing Embedded C, bringing up Bluetooth links between car radios and phones, and hardening infotainment systems for OEMs like Volvo, Renault, Mack Trucks and Stellantis.',
    'Along the way I realised the most interesting problems were no longer just about moving bytes reliably, but about making systems that learn. So I moved into Forvia’s AI team and began an MS in Artificial Intelligence & Machine Learning (Scaler Neovarsity · Woolf University).',
    'Today I work on AI while keeping the engineering discipline that embedded taught me: measure everything, respect constraints, and ship things that work in the real world. My focus now is Generative AI and machine learning: building AI systems that are reliable, measurable and useful in the real world.',
  ],

  email: 'swapnilalase07@gmail.com',

  socials: {
    linkedin: 'https://www.linkedin.com/in/swapnilalase/',
    github: 'https://github.com/swapnilalase25',
  },

  /** Put your photo at public/images/profile.jpg and set this to 'images/profile.jpg'. Empty = monogram avatar. */
  photo: '',

  /**
   * Resume PDF download. Keep false until public/resume.pdf matches the site
   * (title, AI role). Then drop the PDF into /public and set this to true.
   */
  showResumePdf: true,
  resumePdf: 'Swapnil_Alase_CV.pdf',

  /** Numbers shown in the stats strip. */
  stats: [
    { value: '3+', label: 'Years in AI' },
    { value: '3', label: 'Years in Embedded' },
    { value: '4', label: 'Automotive OEM programs' },
    { value: 'MS', label: 'AI & ML (in progress)' },
  ],

  /** "The Journey" timeline — stages, intentionally without dates. */
  journey: [
    { stage: 'Foundation', title: 'Electronics & Telecommunication', text: 'Bachelor of Engineering, University of Pune. First published work: an IoT digital signage system on Raspberry Pi.', kind: 'embedded' },
    { stage: 'Specialise', title: 'Embedded Systems Design', text: 'PG-Diploma at CDAC Pune — microcontrollers, RTOS, communication protocols.', kind: 'embedded' },
    { stage: 'Ship', title: 'Automotive Embedded @ Forvia', text: 'Infotainment and Bluetooth software for global OEMs; led a small team on secure phone-to-radio communication.', kind: 'embedded' },
    { stage: 'Transform', title: 'AI Team @ Forvia + MS in AI & ML', text: 'Internal move into AI. Machine learning, statistics and data analysis applied to automotive products.', kind: 'ai' },
    { stage: 'Next', title: 'Generative AI', text: 'Focused on Generative AI and machine learning, bringing embedded-grade engineering discipline to AI systems.', kind: 'next' },
  ],
} as const;

/* ─────────────────────────────── EXPERIENCE ─────────────────────────────── */
/* No dates by design. Most recent / most important first. */

export type Role = { title: string; points: string[] };
export type Job = {
  company: string;
  team?: string;
  location?: string;
  track: 'ai' | 'embedded';
  headline: string;
  roles: Role[];
  tech: string[];
};

export const experience: Job[] = [
  {
    company: 'Forvia',
    team: 'AI Team',
    location: 'Pune, India',
    track: 'ai',
    headline:
      'Internal transfer into Forvia’s AI team — applying machine learning and data analysis to automotive software products.',
    roles: [
      {
        title: 'Senior AI Engineer',
        // TODO (Swapnil): replace these with 3–4 REAL impact bullets from your AI work.
        // Formula: <action verb> + <what you built> + <tech> + <measurable result>.
        // e.g. 'Built a Python pipeline that classifies X from vehicle logs, cutting triage time by 40%.'
        points: [
          'Applying machine learning and statistical analysis to automotive and infotainment data.',
          'Bringing production-engineering discipline from automotive software to AI development.',
        ],
      },
    ],
    tech: ['Python', 'SQL', 'Pandas', 'NumPy', 'Scikit-learn', 'Statistics', 'Data Visualization'],
  },
  {
    company: 'Forvia (formerly Faurecia)',
    team: 'Infotainment & Connectivity',
    location: 'Pune, India',
    track: 'embedded',
    headline: 'Automotive infotainment software for global OEMs — Volvo, Renault, Mack Trucks and Stellantis.',
    roles: [
      {
        title: 'Senior Software Engineer',
        points: [
          'Led the CEA team (3 engineers) establishing Bluetooth communication between the car radio and a mobile app using the CEA protocol.',
          'Integrated cybersecurity mechanisms for secure data exchange between infotainment and IVI modules.',
          'Worked with cross-functional teams to meet Stellantis infotainment standards.',
        ],
      },
      {
        title: 'Software Engineer',
        points: [
          'Developed and validated infotainment modules for Volvo, Renault and Mack Trucks.',
          'Implemented voice-recognition contexts and middleware test benches (FC7100, NIS).',
        ],
      },
      {
        title: 'Graduate Engineering Trainee',
        points: ['Feature validation and testing for infotainment systems.'],
      },
    ],
    tech: ['C', 'C++', 'Embedded C', 'Bluetooth', 'Cybersecurity', 'Linux', 'Git', 'Jenkins'],
  },
  {
    company: 'Axonet Emsys Pvt. Ltd.',
    location: 'Pune, India',
    track: 'embedded',
    headline: 'Industrial IoT hardware and firmware.',
    roles: [
      {
        title: 'Embedded Intern',
        points: ['Developed IoT gateways on PIC microcontrollers with Modbus, I²C and UART communication.'],
      },
    ],
    tech: ['PIC', 'Modbus', 'I²C', 'UART', 'IoT'],
  },
];

/* ──────────────────────────────── SKILLS ────────────────────────────────── */

export const skills = {
  ai: {
    title: 'AI · ML · Data',
    // TODO (Swapnil): add the Generative AI tools/frameworks you actually use (only real ones).
    items: ['Python', 'SQL', 'NumPy', 'Pandas', 'Scikit-learn', 'Matplotlib', 'Seaborn', 'Jupyter', 'Statistics', 'Hypothesis Testing', 'EDA', 'Data Visualization', 'Generative AI'],
  },
  bridge: {
    title: 'Engineering foundations',
    items: ['Reliability engineering', 'Working within constraints', 'Measure everything', 'Secure by design', 'Cross-team delivery'],
  },
  embedded: {
    title: 'Embedded · Automotive',
    items: ['C', 'C++', 'Embedded C', 'Bluetooth', 'Infotainment / IVI', 'Cybersecurity', 'Linux', 'Git', 'Jenkins', 'Modbus', 'I²C', 'UART'],
  },
};

/* ─────────────────────────────── EDUCATION ──────────────────────────────── */

export const education = [
  { degree: 'MS in Artificial Intelligence & Machine Learning', school: 'Scaler Neovarsity · Woolf University', note: 'In progress — Python, SQL, statistics, data analytics, machine learning.' },
  { degree: 'PG-Diploma in Embedded Systems Design', school: 'CDAC, Pune', note: '' },
  { degree: 'B.E. Electronics & Telecommunication', school: 'SCOE, University of Pune', note: '' },
];

export const certifications = [
  'Scrum Fundamentals Certified (SFC)',
  'What is Generative AI? — LinkedIn Learning',
  'Generative AI: The Evolution of Thoughtful Search — LinkedIn Learning',
];

export const publications = [
  { title: 'IoT Based Digital Signage Board using Raspberry Pi 3', venue: 'IRJET', year: '2017' },
];
