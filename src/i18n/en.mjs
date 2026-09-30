export const en = {
  // Nav
  nav: {
    brand: 'TALK-TECH',
    problem: 'Problem',
    solution: 'Solution',
    adaptive: 'Adaptive AI',
    avatars: 'Avatars',
    innovation: 'Innovation',
    team: 'Team',
    partners: 'Partners',
    lang: 'DE',
    langUrl: '/talktech/de/',
  },

  // Hero
  hero: {
    badge: 'PHZH × afca.ag',
    title: 'TALK-TECH',
    subtitle: 'AI-Powered Conversation Simulation for<br class="hidden md:block" /> <span class="font-semibold text-white">Technical English Education</span>',
    description: 'An immersive, adaptive learning prototype combining generative AI and XR to enable every student in a vocational class to simultaneously practice realistic, one-to-one technical conversations in English.',
    ctaPrimary: 'Explore the Concept',
    ctaSecondary: 'Meet the Team',
  },

  // Problem
  problem: {
    badge: 'The Challenge',
    title: 'Why Technical English Training Needs Reinvention',
    cards: [
      {
        title: '1 Teacher · 24 Students',
        text: 'Vocational classes of up to 24 learners with a single teacher make individual speaking practice nearly impossible. Time for one-to-one conversation coaching is severely limited.',
      },
      {
        title: 'Double Hurdle: Language & Engineering',
        text: 'Learners must simultaneously master complex mechanical engineering concepts <em>and</em> explain them precisely in a foreign language — requiring intensive, authentic practice that traditional formats cannot deliver.',
      },
    ],
  },

  // Solution
  solution: {
    badge: 'The Solution',
    title: 'Three-Phase Adaptive Learning Simulation',
    subtitle: 'A process-oriented structure that guides every learner from preparation through active conversation to reflective self-assessment.',
    phases: [
      {
        step: '01',
        title: 'Briefing',
        time: '~2 min',
        lang: 'German',
        text: 'Learners start in German with mentor Ms. Goodwill who explains the scenario: an international business partner wants to purchase the assembly shown on the technical drawing — but requires a precise, professional explanation in English.',
      },
      {
        step: '02',
        title: 'Technical Conversation',
        time: '~10 min',
        lang: 'English',
        text: 'The core simulation. Learners converse with customer Mr. Barker in English, explaining components, functions, and engineering concepts. The AI adapts difficulty in real-time using Bloom\'s taxonomy (K1–K3).',
      },
      {
        step: '03',
        title: 'Reflection & Coaching',
        time: '~3 min',
        lang: 'Bilingual',
        text: 'The conversation transcript is analyzed. Ms. Goodwill returns for bilingual coaching — guidance in German, technical corrections in English — guiding learners through systematic self-assessment.',
      },
    ],
    platformTitle: 'Built on Xara — No-Code Configuration',
    platformText: 'The entire simulation runs on the Xara XR platform, powered by Azure OpenAI GPT-4o for conversational intelligence and Azure Speech Services for low-latency voice processing. Hosted entirely in the Microsoft Azure cloud, ensuring compliance with Swiss data protection requirements for education.',
  },

  // Adaptive AI
  adaptive: {
    badge: 'Adaptive AI Dialogue',
    title: "Real-Time Adaptation via Bloom's Taxonomy",
    text: 'The conversation engine dynamically adjusts difficulty in real-time based on learner responses. Starting at knowledge level, the AI escalates or de-escalates across three cognitive tiers — ensuring each student is challenged at their individual performance edge without being overwhelmed or under-stimulated.',
    levels: [
      { id: 'K1', name: 'Knowledge', desc: 'Identify and name technical components on the engineering drawing' },
      { id: 'K2', name: 'Understanding', desc: 'Explain mechanical functions, material properties, and why specific components are used' },
      { id: 'K3', name: 'Application', desc: 'Solve realistic troubleshooting scenarios — diagnose faults and propose engineering solutions' },
    ],
    footnote: 'After two introductory K1 questions, every response determines the next difficulty level. Each conversation randomly selects components from the drawing pool, ensuring no two sessions are identical.',
    flowTitle: 'Adaptive Flow',
    flowExamples: [
      { level: 'K1', label: 'Component Identification', quote: '"Which component is located at position number 3?"' },
      { level: 'K2', label: 'Functional Understanding', quote: '"Why do we use a radial shaft seal at this specific position?"' },
      { level: 'K3', label: 'Troubleshooting', quote: '"The gearbox is overheating. Based on the drawing, what could be the technical cause?"' },
    ],
    flowNote: 'Each simulation ends after exactly 10 questions, then transitions to reflection',
  },

  // Avatars
  avatars: {
    badge: 'AI Avatars',
    title: 'Two Avatars, Complementary Roles',
    subtitle: 'Distinct AI personalities scaffold the learning journey — from guided preparation through challenging dialogue to reflective coaching.',
    goodwill: {
      initials: 'MG',
      name: 'Ms. Goodwill',
      role: 'Mentor & Coach',
      briefing: { title: 'Briefing Phase', text: 'Instructs in German, sets the scenario, ensures every learner understands the context and vocabulary requirements before starting.' },
      reflection: { title: 'Reflection Phase', text: "Analyzes the conversation transcript using B2 criteria (vocabulary, grammar, fluency). Coaching in German, technical corrections in English. Guides self-assessment through targeted questions." },
    },
    barker: {
      initials: 'MB',
      name: 'Mr. Barker',
      role: 'International Business Partner',
      conversation: { title: 'Conversation Phase', text: 'English-only dialogue partner. Acts as an experienced, technically savvy sales partner who wants to fully understand the engineering assembly.' },
      interaction: { title: 'Adaptive Interaction', text: 'No explicit correction or grading — instead, responds with realistic follow-up questions when explanations are imprecise (<span class="italic text-emerald-200">"I see the part, but could you clarify its exact function?"</span>), forcing spontaneous, action-oriented replies.' },
    },
  },

  // Innovation
  innovation: {
    badge: 'What Makes It Different',
    title: 'Innovation Value',
    subtitle: 'TALK-TECH transforms language instruction from a broadcast model into a personalized, immersive experience — without requiring custom software development.',
    items: [
      {
        icon: 'M13 10V3L4 14h7v7l9-11h-7z',
        title: 'Scalable 1:1 Speaking Practice',
        desc: 'Enables all 24 students in a class to simultaneously engage in individual, adaptive technical conversations — multiplying active speaking time vs. traditional settings.',
      },
      {
        icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
        title: 'Didactically Controlled AI',
        desc: "Bloom's taxonomy-guided adaptive dialogue prevents free-roaming LLM hallucinations while preserving natural conversational spontaneity and curriculum alignment.",
      },
      {
        icon: 'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
        title: 'Cross-Platform & XR',
        desc: 'Deployable via web browser, smartphone, or VR headset (Meta Quest 3, Apple Vision Pro) — flexible for classroom, remote, or immersive learning scenarios.',
      },
      {
        icon: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4',
        title: 'No-Code / Low-Code',
        desc: 'Entirely prompt-configured on the Xara platform — new scenarios, assemblies, or professions can be added without programming, ensuring rapid scalability and cost efficiency.',
      },
    ],
    cta: 'In May 2026, initial exploratory talks began with <strong class="text-white">Swissmem</strong> (the Swiss MEM industry association) regarding integration of the TALK-TECH simulation into the new FutureMEM teaching materials. Post-summer 2026, a follow-up meeting will define the roadmap for nationwide implementation across Swiss vocational education.',
  },

  // Team
  team: {
    badge: 'The Team',
    title: 'Built by Educators & Engineers',
    subtitle: 'A multidisciplinary team from the Zurich University of Teacher Education (PHZH) combining pedagogical expertise, AI engineering, and industry knowledge.',
    members: [
      { name: 'Oliver Schulthess', role: 'Project Lead & Didactic Concept', initials: 'OS', gradient: 'from-blue-400 to-cyan-300' },
      { name: 'Jonas Schubnell', role: 'AI Prompt Engineering & Prototyping', initials: 'JS', gradient: 'from-emerald-400 to-teal-300' },
      { name: 'Aaron Schmid', role: 'Technical Architecture & XR Integration', initials: 'AS', gradient: 'from-violet-400 to-purple-300' },
      { name: 'Colin Schmid', role: 'Interaction Design', initials: 'CS', gradient: 'from-amber-400 to-orange-300' },
    ],
  },

  // Partners
  partners: {
    badge: 'Collaborators',
    title: 'Partners & Ecosystem',
    subtitle: 'TALK-TECH was developed within the IMMERSE innovation structure, funded by the Digitalization Initiative of the Zurich Universities (DIZH).',
    list: [
      { name: 'PHZH — Pädagogische Hochschule Zürich', url: 'https://phzh.ch', desc: 'Academic Partner' },
      { name: 'afca. ag', url: 'https://afca.ch', desc: 'Technology Partner' },
      { name: 'IMMERSE', url: 'https://phzh.ch/de/ueber-die-phzh/themen-und-taetigkeiten/projekte/immerse/', desc: 'Innovation Structure' },
      { name: 'FutureMEM', url: 'https://futuremem.swiss', desc: 'Curriculum Reform' },
    ],
  },

  // Footer
  footer: {
    credit: 'A hackAstone project by the Zurich University of Teacher Education (PHZH)',
    rights: 'All rights reserved.',
  },
};