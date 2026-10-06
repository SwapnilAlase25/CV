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
    'Generative AI',
    'RAG chatbots',
    'AI on Azure',
    'Requirements engineering',
    'Automotive software',
  ],

  /** One paragraph used in the hero and for SEO/social previews. */
  summary:
    'Senior AI Engineer at Forvia with an unusual edge: years of shipping production automotive embedded software before moving into AI. I build AI tools for engineering teams and the wider company, such as a requirements generator and a company-wide RAG chatbot, grounded in a deep understanding of how real hardware, real constraints and real users behave.',

  /** "About" section — each string is a paragraph. */
  about: [
    'I started my career close to the metal — writing Embedded C, bringing up Bluetooth links between car radios and phones, and hardening infotainment systems for OEMs like Volvo, Renault, Mack Trucks and Stellantis.',
    'Along the way I realised the most interesting problems were no longer just about moving bytes reliably, but about building software that can understand and assist. So I moved into Forvia’s AI team and began an MS in Artificial Intelligence & Machine Learning (Scaler Neovarsity · Woolf University).',
    'Today I work on AI while keeping the engineering discipline that embedded taught me: measure everything, respect constraints, and ship things that work in the real world. My focus now is Generative AI: building AI systems that are reliable, measurable and useful in the real world.',
  ],

  email: 'swapnilalase07@gmail.com',

  socials: {
    linkedin: 'https://www.linkedin.com/in/swapnilalase/',
    github: 'https://github.com/swapnilalase25',
  },

  /** Show your photo (src/assets/profile.webp) in the hero and About section. false = hide it (monogram avatar instead). */
  showPhoto: true,
  /**
   * Where things sit inside the photo, as fractions of the image (0–1 / percentages).
   * Change these only if you swap the photo (ask me to re-tune them).
   *  - face: the detection box drawn around the face (% of image width/height)
   *  - focus: the point shown in the centre of the small About avatar, and how far it is zoomed in
   */
  photoFace: { left: 54.5, top: 12, width: 28, height: 39 },
  photoFocus: { x: 0.675, y: 0.26, zoom: 2.0 },

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
    { stage: 'Transform', title: 'AI Team @ Forvia + MS in AI & ML', text: 'Internal move into AI: building a requirements-generation tool (Requirement Forge) and a company-wide RAG chatbot.', kind: 'ai' },
    { stage: 'Next', title: 'Generative AI', text: 'Focused on Generative AI, bringing embedded-grade engineering discipline to AI systems.', kind: 'next' },
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
      'Internal transfer into Forvia’s AI team — building AI tools for engineering teams and for the whole company.',
    roles: [
      {
        title: 'Senior AI Engineer',
        // TODO (Swapnil): add real results when you have them (number of users/teams, time saved, adoption). Only real numbers.
        points: [
          'Built Requirement Forge with the AI team: a tool, built on Azure, that turns stakeholder requirements into system requirements. It generates the corner cases that are easily missed, so developers start from a more complete set of requirements.',
          'Developed a RAG-based chatbot for the entire company on Sinequa, so everyone can use and understand the data held across the company.',
        ],
      },
    ],
    tech: ['Azure', 'Sinequa', 'RAG', 'Generative AI', 'Requirements engineering'],
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
    headline: 'An early-stage startup building industrial IoT hardware and firmware.',
    roles: [
      {
        title: 'Embedded Intern',
        // TODO (Swapnil): add specifics when you remember them (products, boards, sensors, tools, results). Only real details.
        points: [
          'Developed IoT gateways on PIC microcontrollers, implementing Modbus, I²C and UART communication.',
          'Hands-on hardware work, including soldering and assembling circuit boards.',
          'Tested and debugged hardware and firmware together to get devices working.',
          'Worked in a fast-moving startup, picking up a wide range of tasks across hardware, firmware and testing.',
        ],
      },
    ],
    tech: ['PIC', 'Modbus', 'I²C', 'UART', 'IoT', 'Soldering', 'Hardware testing', 'Debugging'],
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
