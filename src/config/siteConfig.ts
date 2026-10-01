import { Product, Service, TechCategory, ProcessStep, PortfolioProject, StudioUpdate, FAQItem } from '../types';

/**
 * =========================================================================
 * VA DEVELOPERS — CENTRAL CONFIGURATION FILE
 * =========================================================================
 * All studio details, contact info, product data, and services can be edited
 * in this single file. No need to touch deep component logic.
 *
 * NOTE: As per guidelines, all details remain strictly truthful:
 * - Independent technology and software development studio.
 * - No fake clients, awards, reviews, registration numbers, or employees.
 * =========================================================================
 */

export const siteConfig = {
  // Brand identity
  brand: {
    name: 'VA DEVELOPERS',
    shortName: 'VA',
    tagline: 'Building Digital Products That Move Ideas Forward.',
    heroDescription:
      'VA Developers creates modern apps, software and AI-powered experiences designed to be useful, fast and beautifully simple.',
    trustLine: 'Built with purpose. Designed for people.',
    aboutBrief:
      'VA Developers is an independent technology and software development brand focused on creating useful mobile applications, AI-powered products, and digital software. We believe good software should solve real problems while remaining simple, fast and enjoyable to use.',
    vision:
      'Our vision is to create technology that feels useful, accessible and thoughtfully designed.',
    mission:
      'Our mission is to turn ideas into reliable digital products that people can actually use.',
    type: 'Independent technology and software development brand',
    establishedYear: 2026,
  },

  // Editable Contact Information
  contact: {
    // Obvious editable email placeholder as instructed
    email: '[contact@vadevelopers.com · Replace with your email]',
    editableEmailPlaceholder: '[contact@vadevelopers.com · Replace with your email]',
    emailRaw: 'contact@vadevelopers.com',
    location: 'India',
    availabilityStatus: 'Available for Select Projects & Collaborations',
    responseCommitment: 'Typically responds within 24–48 hours.',
  },

  // Social Links
  // Set the URL to a valid link when available. If empty or '#', UI safely handles it.
  social: [
    {
      name: 'GitHub',
      url: 'https://github.com',
      handle: '@vadevelopers',
      enabled: true,
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com',
      handle: 'VA Developers',
      enabled: true,
    },
    {
      name: 'YouTube',
      url: 'https://youtube.com',
      handle: '@vadevelopers',
      enabled: true,
    },
    {
      name: 'Instagram',
      url: 'https://instagram.com',
      handle: '@vadevelopers',
      enabled: true,
    },
  ],

  // Focus Domains
  focusAreas: [
    'Android applications',
    'Mobile applications',
    'AI-powered applications',
    'Software products',
    'Developer tools',
    'Creative digital products',
    'UI/UX design',
    'Web applications',
  ],

  // Products Currently in Development
  products: [
    {
      id: 'creator-studio',
      name: 'Creator Studio',
      category: 'AI Creator Tool',
      tagline: 'Intelligent planning and ideation engine for video creators.',
      description:
        'An AI-powered assistant designed to help YouTube creators prepare better video content.',
      longDescription:
        'Creator Studio is crafted specifically for independent video makers and digital creators who want to streamline their pre-production workflow. By integrating smart AI algorithms, it assists creators with high-converting titles, rich audience-tailored descriptions, SEO-relevant tags, visual thumbnail concept planning, and structured scripting outlines.',
      status: 'In Development',
      previewType: 'creator',
      targetAudience: 'YouTube creators, digital educators, and content producers',
      features: [
        'AI content generation',
        'High-impact title ideation',
        'Structured descriptions & chapters',
        'SEO-optimized tags & metadata',
        'Thumbnail visual planning',
        'Streamlined creator workflow',
      ],
      detailedFeatures: [
        {
          title: 'Algorithmic Title Ideation',
          description:
            'Generates engaging, click-worthy titles tailored to your niche without sensationalist spam.',
        },
        {
          title: 'Smart Description & Timestamp Generator',
          description:
            'Automatically structures your video summary, relevant links, chapter timestamps, and call-to-actions.',
        },
        {
          title: 'Targeted Tag & SEO Optimization',
          description:
            'Identifies relevant search queries and semantic tags to improve natural discovery on YouTube.',
        },
        {
          title: 'Thumbnail Concept & Composition Notes',
          description:
            'Provides actionable framing notes, color contrast tips, and visual hooks to pair with your title.',
        },
        {
          title: 'Creator Flow Workspace',
          description:
            'A distraction-free pre-production canvas to organize video ideas from raw thought to filming day.',
        },
      ],
      technologies: ['Android', 'Kotlin', 'Jetpack Compose', 'Gemini AI API', 'Firebase'],
      icon: 'Sparkles',
      faq: [
        {
          question: 'When will Creator Studio be released?',
          answer:
            'Creator Studio is currently under active development. Initial alpha testing will begin on Android, followed by broader availability.',
        },
        {
          question: 'Does it require a paid API key to use?',
          answer:
            'The initial version is designed to provide seamless access with built-in intelligence, with options for creators to connect their own preferences.',
        },
        {
          question: 'Is it mobile-friendly?',
          answer:
            'Yes. Creator Studio is built from the ground up for mobile devices, allowing creators to ideate anywhere, anytime.',
        },
      ],
    },
    {
      id: 'edit-studio',
      name: 'Edit Studio',
      category: 'Mobile Video Editor',
      tagline: 'Precision mobile video editing stripped of complexity.',
      description:
        'A mobile-first video editing experience focused on powerful tools with a simple workflow.',
      longDescription:
        'Edit Studio rethinks the mobile video editing interface. Instead of cluttering the screen with dense desktop-style timelines, Edit Studio introduces fluid tactile controls, rapid multi-track audio-visual trimming, creative color grading, and modern high-resolution export pipelines engineered specifically for modern mobile hardware.',
      status: 'In Development',
      previewType: 'editor',
      targetAudience: 'Mobile videographers, short-form creators, and vloggers',
      features: [
        'Mobile-first video editing',
        'Creative color & visual tools',
        'Fast precision trimming',
        'Modern editing workflow',
        'High-fidelity export presets',
        'Lightweight timeline architecture',
      ],
      detailedFeatures: [
        {
          title: 'Tactile Multi-Track Timeline',
          description:
            'Silky smooth gesture-driven timeline designed specifically for touch screens with haptic feedback.',
        },
        {
          title: 'Rapid Cut & Magnetic Snapping',
          description:
            'Effortlessly trim, rearrange, and sync audio clips with intelligent magnetic track guidance.',
        },
        {
          title: 'Creative Filters & Tone Adjustments',
          description:
            'Real-time color tuning, exposure balancing, and aesthetic grading without heavy latency.',
        },
        {
          title: 'Optimized Export Pipeline',
          description:
            'Harnesses Android hardware acceleration to deliver crisp 1080p and 4K exports with minimal battery drain.',
        },
      ],
      technologies: ['Android', 'Kotlin', 'Jetpack Compose', 'Media3 / ExoPlayer', 'Native Graphics'],
      icon: 'Film',
      faq: [
        {
          question: 'Will Edit Studio support 4K export?',
          answer:
            'Yes, on supported Android hardware with capable media encoders, Edit Studio supports high-bitrate 1080p and 4K export.',
        },
        {
          question: 'Is Edit Studio purely offline?',
          answer:
            'The core video rendering engine operates completely on-device without needing constant cloud uploading, preserving your privacy and bandwidth.',
        },
      ],
    },
  ] as Product[],

  // Six Professional Services
  services: [
    {
      id: 'mobile-dev',
      number: '01',
      title: 'Mobile App Development',
      description:
        'Android and cross-platform applications with modern user experiences, high performance, and robust architecture.',
      icon: 'Smartphone',
      capabilities: [
        'Native Android (Kotlin & Jetpack Compose)',
        'Fluid gestures & adaptive layouts',
        'Offline-first local persistence',
        'Hardware sensor & camera integration',
      ],
    },
    {
      id: 'ai-apps',
      number: '02',
      title: 'AI Applications',
      description:
        'Practical AI features, intelligent workflows, and useful automation integrated directly into daily tasks.',
      icon: 'Bot',
      capabilities: [
        'Gemini & LLM API integration',
        'Contextual generative assistants',
        'Structured prompt engineering',
        'Smart data extraction & synthesis',
      ],
    },
    {
      id: 'software-dev',
      number: '03',
      title: 'Software Development',
      description:
        'Custom software products designed around real requirements, clean modular codebases, and long-term maintainability.',
      icon: 'Terminal',
      capabilities: [
        'Domain-specific utilities & tools',
        'Modern REST & GraphQL APIs',
        'Secure cloud data storage',
        'Scalable component architecture',
      ],
    },
    {
      id: 'ui-ux',
      number: '04',
      title: 'UI/UX',
      description:
        'Clean, intuitive interfaces designed for real users with strong typographic hierarchy and zero unnecessary clutter.',
      icon: 'Layout',
      capabilities: [
        'Design systems & component tokens',
        'Interactive rapid prototyping',
        'Touch-first mobile interaction',
        'WCAG AA accessible contrast & typography',
      ],
    },
    {
      id: 'web-dev',
      number: '05',
      title: 'Web Development',
      description:
        'Fast, responsive and modern websites and web applications built with modern frameworks and strict performance discipline.',
      icon: 'Globe',
      capabilities: [
        'React & TypeScript SPAs',
        'SEO-first semantic markup',
        'Lightning-fast page loading',
        'Modern responsive typography',
      ],
    },
    {
      id: 'product-eng',
      number: '06',
      title: 'Product Engineering',
      description:
        'From initial idea and prototype to testing, deployment, and future improvements based on actual usage patterns.',
      icon: 'Cpu',
      capabilities: [
        'Technical feasibility analysis',
        'Iterative agile development',
        'Unit & integration testing',
        'Continuous refinement & updates',
      ],
    },
  ] as Service[],

  // Why VA Developers — 4 Core Principles
  principles: [
    {
      number: '01',
      title: 'Simple by Design',
      description:
        'We focus on making powerful technology easier to understand and use. Complex machinery behind clean, intuitive controls.',
    },
    {
      number: '02',
      title: 'User First',
      description:
        'Every product begins with the people who will actually use it. We build features that solve real friction rather than chasing hype.',
    },
    {
      number: '03',
      title: 'Built to Evolve',
      description:
        'Our products are designed to improve through continuous development, thoughtful architecture, and clean code that stands the test of time.',
    },
    {
      number: '04',
      title: 'Technology With Purpose',
      description:
        'We use technology because it solves a problem—not simply because it is new. Every line of code serves a genuine purpose.',
    },
  ],

  // Technology We Work With
  technologyGrid: [
    {
      category: 'Mobile',
      description: 'Native mobile platforms and declarative UI frameworks',
      items: [
        { name: 'Android', focus: 'Primary mobile platform', level: 'Core' },
        { name: 'Kotlin', focus: 'Modern language of Android', level: 'Core' },
        { name: 'Jetpack Compose', focus: 'Declarative modern UI toolkit', level: 'Core' },
      ],
    },
    {
      category: 'AI',
      description: 'Intelligent foundation models and cognitive APIs',
      items: [
        { name: 'Gemini', focus: 'Multimodal AI generation & reasoning', level: 'Core' },
        { name: 'Generative AI', focus: 'Contextual workflows & synthesis', level: 'Core' },
        { name: 'AI APIs', focus: 'High-speed structured integration', level: 'Core' },
      ],
    },
    {
      category: 'Web',
      description: 'High-performance web standards and frameworks',
      items: [
        { name: 'HTML & CSS', focus: 'Semantic, accessible foundations', level: 'Core' },
        { name: 'JavaScript', focus: 'Modern asynchronous programming', level: 'Core' },
        { name: 'React', focus: 'Component-driven interactive web apps', level: 'Core' },
      ],
    },
    {
      category: 'Backend',
      description: 'Server architectures, data stores and cloud endpoints',
      items: [
        { name: 'APIs', focus: 'RESTful endpoints & secure transport', level: 'Core' },
        { name: 'Cloud Services', focus: 'Scalable deployment & storage', level: 'Core' },
        { name: 'Databases', focus: 'Structured & document storage engines', level: 'Core' },
      ],
    },
    {
      category: 'Tools',
      description: 'Developer environments, versioning and infrastructure',
      items: [
        { name: 'Git', focus: 'Distributed version control', level: 'Core' },
        { name: 'GitHub', focus: 'Code collaboration & issue tracking', level: 'Core' },
        { name: 'Firebase', focus: 'Real-time database, auth & hosting', level: 'Core' },
      ],
    },
  ] as TechCategory[],

  // 6-Step Build Process
  process: [
    {
      step: '01',
      title: 'Discover',
      description: 'Understand the core problem, user expectations, and functional requirements before touching code.',
      deliverables: ['Problem definition', 'Scope outline', 'User expectations'],
    },
    {
      step: '02',
      title: 'Plan',
      description: 'Define the product structure, technical architecture, feature prioritization, and user journey.',
      deliverables: ['Feature roadmap', 'Tech stack selection', 'Data architecture'],
    },
    {
      step: '03',
      title: 'Design',
      description: 'Create the interface, tactile micro-interactions, and accessible layout with zero fluff.',
      deliverables: ['UI layouts', 'Design components', 'Interactive prototypes'],
    },
    {
      step: '04',
      title: 'Build',
      description: 'Develop the actual product using modern practices, modular patterns, and clean engineering.',
      deliverables: ['Modular codebase', 'API integration', 'Working build'],
    },
    {
      step: '05',
      title: 'Test',
      description: 'Rigorously verify functionality, usability, edge-cases, responsiveness, and performance.',
      deliverables: ['Device testing', 'Performance checks', 'Bug resolution'],
    },
    {
      step: '06',
      title: 'Launch',
      description: 'Deploy the product to real environments and continue improving it through planned updates.',
      deliverables: ['Production deployment', 'Monitoring', 'Iterative updates'],
    },
  ] as ProcessStep[],

  // Portfolio / Selected Work
  portfolioProjects: [
    {
      id: 'proj-creator-studio',
      productId: 'creator-studio',
      name: 'Creator Studio',
      category: 'AI',
      status: 'In Development',
      shortDescription:
        'An AI-powered assistant designed to help YouTube creators prepare better video content, titles, and workflows.',
      technologies: ['Android', 'Kotlin', 'Jetpack Compose', 'Gemini AI API'],
      highlights: [
        'AI Title & Description Generation',
        'Structured YouTube SEO Tags',
        'Thumbnail Concept Framing',
      ],
    },
    {
      id: 'proj-edit-studio',
      productId: 'edit-studio',
      name: 'Edit Studio',
      category: 'Apps',
      status: 'In Development',
      shortDescription:
        'A mobile-first video editing experience focused on powerful creative tools with an intuitive touch workflow.',
      technologies: ['Android', 'Kotlin', 'Media3', 'Jetpack Compose'],
      highlights: [
        'Gesture-Driven Timeline',
        'Hardware Accelerated Export',
        'Creative Color Grading',
      ],
    },
  ] as PortfolioProject[],

  // Studio Updates / Notes (Truthful, genuine development notes)
  updates: [
    {
      id: 'update-1',
      date: 'September 2026',
      title: 'Architecting Creator Studio: Ideation to Release Flow',
      category: 'Product Update',
      summary:
        'Deep dive into how we are tailoring AI prompts to generate high-performing YouTube titles without generic clickbait tropes.',
      content:
        'Creator Studio is entering its core prototype cycle. We have focused on structuring AI responses to provide actionable video blueprints rather than vague advice. Work is ongoing on native Android UI components built with Jetpack Compose.',
    },
    {
      id: 'update-2',
      date: 'August 2026',
      title: 'Touch-First Timeline Design for Edit Studio',
      category: 'Design & Engineering',
      summary:
        'Why mobile video editing interfaces should prioritize magnetic snapping and finger precision over cluttered desktop paradigms.',
      content:
        'Most mobile video editors attempt to replicate desktop software on a 6-inch screen, causing frustration. Edit Studio is being engineered specifically around one-handed trimming, fluid gesture scrubbing, and instant previewing.',
    },
  ] as StudioUpdate[],

  // FAQ
  faq: [
    {
      question: 'What does VA Developers build?',
      answer:
        'VA Developers is an independent technology studio that designs and builds Android applications, mobile applications, AI-powered software, developer tools, and modern web applications.',
    },
    {
      question: 'Are your products available?',
      answer:
        'Our primary products, Creator Studio and Edit Studio, are currently in active development. We share updates on development progress and will announce test releases as milestones are reached.',
    },
    {
      question: 'Can I work with VA Developers?',
      answer:
        'Yes. We collaborate on select client projects, custom mobile applications, AI integrations, and software products that align with our focus on quality and purpose-built software.',
    },
    {
      question: 'Do you build Android apps?',
      answer:
        'Yes, Android development is one of our primary specializations. We build modern, native applications using Kotlin, Jetpack Compose, and modern architecture patterns.',
    },
    {
      question: 'Do you build AI applications?',
      answer:
        'Yes. We specialize in integrating generative AI models (such as Google Gemini) into practical applications that provide real utility, automation, and contextual problem-solving.',
    },
    {
      question: 'How can I contact VA Developers?',
      answer:
        'You can reach out through our contact form below or email us directly at contact@vadevelopers.com. We respond to genuine project inquiries and collaborative discussions.',
    },
  ] as FAQItem[],
};
