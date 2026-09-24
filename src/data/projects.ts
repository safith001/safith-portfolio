import { Project } from '@/types';

/**
 * Static Data Store: Mohammed Safith's Flagship Showcase Projects
 *
 * Socratic Design Note:
 * Decoupling project data from UI components ensures that updating project
 * links, descriptions, or interview notes never risks breaking JSX layout styling.
 */
export const PROJECTS: Project[] = [
  {
    slug: 'peerconnect',
    title: 'PeerConnect',
    subtitle: 'University Peer Collaboration & Real-Time Campus Platform',
    category: 'Full-Stack Web',
    featured: true,
    status: 'Live on Vercel',
    statusColor: 'emerald',
    description:
      'Full-stack campus collaboration platform connecting university students for peer mentoring, academic feeds, lecture slide sharing, and real-time private messaging. Originally developed with PHP Laravel as university Final Year Project (FYP), then re-architected in 2026 into modern Next.js/JavaScript & Firebase and deployed live on Vercel.',
    problemStatement:
      'University students frequently struggle with fragmented communication across disconnected chat groups, unorganized lecture slide distribution, and lack of verified academic peer support.',
    architectureDetails: [
      'Next.js 16 App Router with hybrid Server & Client Component separation for instant initial loads',
      'Firebase Authentication enforcing university email domain validation and route guards',
      'Cloud Firestore with real-time snapshots (onSnapshot) and compound query indexing',
      'Cloudinary media pipeline for direct lecture slide and document asset delivery',
      'Tailwind CSS design system providing responsive mobile-first layouts',
    ],
    keyFeatures: [
      'Real-time peer-to-peer messaging with deterministic conversation channel IDs',
      'Live academic feed with real-time like counters and discussion comment streams',
      'Lecture slide upload center with Cloudinary asset transformation and fast previewing',
      'Unread message badge counters and student profile customization',
    ],
    techStack: [
      'Next.js 16',
      'TypeScript',
      'Tailwind CSS',
      'Firebase Auth',
      'Cloud Firestore',
      'Cloudinary',
    ],
    liveUrl: 'https://peer-connect-node.vercel.app/',
    githubUrl: 'https://github.com/safith001/peer-connect-node',
    mockupImage: '/images/projects/peerconnect-mockup.png',
    interviewDefenseNotes: {
      architecturalChoice:
        'Originally built with PHP Laravel as my university Final Year Project; subsequently re-engineered into Next.js App Router and Firebase to achieve zero-cost serverless hosting on Vercel, reactive state, and low-latency real-time chat.',
      tradeoffConsidered:
        'Firestore charges per document read/write; mitigated costs by designing deterministic conversation IDs and batching message listeners.',
      failureHandling:
        'Implemented optimistic UI updates for chat messages with automatic retry queues if the client loses network connectivity.',
    },
  },
  {
    slug: 'daily-books',
    title: 'Daily Books',
    subtitle: 'Offline-First Tamil Islamic PDF Reader & Habit Tracker',
    category: 'Mobile / Cross-Platform',
    featured: true,
    status: 'Play Store Bundle',
    statusColor: 'indigo',
    description:
      'Mobile reading platform delivering 100+ curated Tamil Islamic literature books with offline storage, habit streak tracking, and smooth multi-touch pinch-to-zoom.',
    problemStatement:
      'Access to traditional regional literature is hindered by scarce digital archives, unreliable network coverage in rural areas, and poor PDF rendering performance on budget mobile hardware.',
    architectureDetails: [
      'Flutter & Dart native mobile architecture compiled for Android (Gradle SDK)',
      'Decoupled Node.js and Express REST API backend for book metadata distribution',
      'Capacitor hybrid bridge integration for cross-platform asset bundling',
      'Optimized native PDF rendering engine with low-memory page rasterization',
    ],
    keyFeatures: [
      '100% offline access to 100+ curated Tamil books bundled directly in local assets',
      'Smooth multi-touch pinch-to-zoom and double-tap magnification gestures',
      '7-day reading habit streak tracker with persistent local timestamps',
      'Categorized directory with instant search, bookmarking, and resume reading',
    ],
    techStack: [
      'Flutter',
      'Dart',
      'Node.js',
      'Express',
      'Android SDK',
      'Capacitor',
    ],
    githubUrl: 'https://github.com/safith001/-tamil-islamic-books',
    mockupImage: '/images/projects/dailybooks-mockup.png',
    interviewDefenseNotes: {
      architecturalChoice:
        'Built offline-first by embedding core literature in the app bundle so readers have instant access even in remote regions with zero cellular reception.',
      tradeoffConsidered:
        'Bundling books increased initial APK size to ~45 MB; mitigated by implementing on-demand streaming for supplementary catalog expansions.',
      failureHandling:
        'Custom PDF view cache prevents memory leaks (OOM) on devices with less than 2 GB RAM by releasing off-screen rendered pages.',
    },
  },
  {
    slug: 'medexpense',
    title: 'MedExpense',
    subtitle: 'MBBS Expense Tracker with Scheduled Cloud Sync & Gemini AI',
    category: 'Mobile / Cross-Platform',
    featured: true,
    status: 'Production Ready',
    statusColor: 'amber',
    description:
      'Targeted mobile financial tracking application built for an international MBBS student in Belarus to track multi-currency expenses offline and receive AI-powered monthly budget advice.',
    problemStatement:
      'Managing foreign student living expenses across multiple currencies without internet reliability often leads to untracked spending, manual spreadsheet headaches, and budget overruns.',
    architectureDetails: [
      'Flutter mobile client using SQLite for instant, zero-latency local transaction logging',
      'Google Apps Script Webhook endpoint (Code.gs) orchestrating headless spreadsheet updates',
      'Android WorkManager scheduling resilient background sync at month-end',
      'Google Gemini 2.5 Flash REST integration delivering personalized financial mentoring',
    ],
    keyFeatures: [
      '100% offline logging for daily food, tuition, rent, and medical supplies in SQLite',
      'Automated background cloud sync formatting entries directly into Google Sheets',
      'Gemini AI financial advisor summarizing spending trends and flagging runaway expense categories',
      'Multi-currency balance summaries with categorized monthly spend analytics',
    ],
    techStack: [
      'Flutter',
      'Dart',
      'SQLite',
      'Google Apps Script',
      'Google Gemini AI',
      'Android WorkManager',
    ],
    githubUrl: 'https://github.com/safith001/expense-tracker',
    mockupImage: '/images/projects/medexpense-mockup.png',
    interviewDefenseNotes: {
      architecturalChoice:
        'Used SQLite as the single source of truth on the device, treating the Google Sheets webhook as an asynchronous backup sink rather than a blocking dependency.',
      tradeoffConsidered:
        'WorkManager background tasks can be deferred by Android battery optimization; solved by using expedited tasks with backoff retry policies.',
      failureHandling:
        'If the cloud webhook fails or network drops, transactions remain marked as un-synced in SQLite and automatically re-queue on next connectivity.',
    },
  },
  {
    slug: 'todo-list',
    title: 'Todo List',
    subtitle: 'Task Management Engine with Automated QA & Integration Testing Suite',
    category: 'QA & Backend',
    featured: false,
    status: 'Testing Suite',
    statusColor: 'blue',
    description:
      'Clean RESTful task management service engineered to demonstrate rigorous backend testing, automated database migrations, and schema constraint verification.',
    problemStatement:
      'Many junior backend projects lack automated testing, leaving APIs prone to regressions, data corruption under edge cases, and unexpected 500 crashes.',
    architectureDetails: [
      'Python Flask REST API with structured blueprint routing',
      'SQLite relational database with foreign key constraints and transactional integrity',
      'Automated test suite covering unit, integration, and database rollback behaviors',
      'Parametrized test cases verifying edge cases, invalid payloads, and HTTP status codes',
    ],
    keyFeatures: [
      'Full CRUD REST API endpoints (GET, POST, PUT, DELETE /api/todos)',
      'Automated test runner verifying 100% endpoint pass rate before deployment',
      'Priority tags, completion states, and due date validation filters',
      'Database isolation during testing using in-memory SQLite fixtures',
    ],
    techStack: [
      'Python',
      'Flask',
      'SQLite',
      'PyTest / Unit Testing',
      'Postman',
    ],
    githubUrl: 'https://github.com/safith001/to-do-list',
    mockupImage: '/images/projects/todo-mockup.png',
    interviewDefenseNotes: {
      architecturalChoice:
        'Separated test fixtures into isolated in-memory databases (sqlite3.connect(":memory:")) to ensure unit tests run in milliseconds without dirtying production data.',
      tradeoffConsidered:
        'In-memory testing does not test concurrency locks of disk databases; mitigated with separate end-to-end file integration tests.',
      failureHandling:
        'All API routes wrap database transactions in try/except blocks with explicit db.rollback() to prevent partial state corruption on failure.',
    },
  },
  {
    slug: 'flight-bot',
    title: 'Flight Bot',
    subtitle: 'AI-Powered Flight Search & Price Alert Automation Bot',
    category: 'Automation & AI',
    featured: false,
    status: 'Active',
    statusColor: 'sky',
    description:
      'Automated bot that searches for flight deals, tracks price changes, and sends real-time alerts to reduce manual fare monitoring to zero.',
    problemStatement:
      'Manually tracking flight prices across multiple airlines and date combinations is time-consuming and error-prone, causing users to miss limited-time deals.',
    architectureDetails: [
      'Python automation script with scheduled polling using cron-style intervals',
      'Web scraping or API integration layer to aggregate live flight data',
      'Notification service delivering price alerts via Telegram or email',
      'Configurable threshold rules for price drop detection and seat availability triggers',
    ],
    keyFeatures: [
      'Automated flight price polling at configurable intervals',
      'Intelligent price-drop detection using baseline comparison logic',
      'Real-time Telegram / email push notifications for matched deals',
      'Multi-route support with customizable origin, destination, and date windows',
    ],
    techStack: [
      'Python',
      'Requests / BeautifulSoup',
      'Telegram Bot API',
      'Cron Scheduling',
    ],
    githubUrl: 'https://github.com/safith001/flight-bot',
    mockupImage: '/images/projects/flightbot-mockup.png',
    interviewDefenseNotes: {
      architecturalChoice:
        'Used a stateless polling architecture so the bot can be restarted at any time without losing state; baseline prices are persisted to a lightweight JSON file.',
      tradeoffConsidered:
        'Web scraping is fragile against site layout changes; mitigated by abstracting the data-fetch layer so scrapers can be swapped for official API adapters.',
      failureHandling:
        'All network requests include exponential back-off retry logic and the bot silently skips a cycle on non-critical failures to avoid alert spam.',
    },
  },
];

/**
 * Helper to fetch a single project by its unique slug identifier
 */
export function getProjectBySlug(slug: string): Project | undefined {
  return PROJECTS.find((p) => p.slug === slug);
}

/**
 * Helper to retrieve only featured flagship projects for the homepage showcase
 */
export function getFeaturedProjects(): Project[] {
  return PROJECTS.filter((p) => p.featured);
}
