import { TimelineEntry } from '@/types';

/**
 * Static Data Store: Mohammed Safith's Verified Career & Academic Timeline
 *
 * ✅ Accuracy Verified Against: Mohammed_Safith_Standard_Referral_CV_Clean.pdf
 * - Jan 2021 - 2022       : NVQ Level 4 Web Development (VTA Kinniya, Sri Lanka)
 * - Sep 2022 - Dec 2022   : Web Developer Intern (Xgen Groups, Colombo, Sri Lanka)
 * - May 2023 - June 2026  : B.IT (Honours) City University Malaysia (CGPA 3.47/4.00)
 * - Jan 2026 - July 2026  : Project Engineer Intern (Guildford Integrated Systems Sdn. Bhd.)
 * - 2025 - Present        : Independent Full-Stack & Cross-Platform Projects
 *
 * Contact Email (CV):     safithmuslim@gmail.com
 * Contact Email (Public): safithscientist@gmail.com
 */
export const TIMELINE: TimelineEntry[] = [
  {
    period: '2025 - Present',
    title: 'Full-Stack & Cross-Platform Software Engineering',
    institution: 'Independent Projects & Open Source',
    location: 'Sri Lanka 🇱🇰',
    type: 'Project Milestone',
    highlights: [
      'Architected and deployed PeerConnect: campus peer collaboration platform (Next.js 16 + Firebase Auth + Cloud Firestore) live on Vercel.',
      'Built Daily Books: offline-first Tamil Islamic literature mobile app using Capacitor, Android SDK, and Node.js/Express REST API backend.',
      'Engineered MedExpense finance tracker with SQLite offline ledger, Google Apps Script webhook cloud sync, and Gemini 2.5 AI financial mentoring.',
      'Developed Flight Bot: Python Telegram bot for real-time flight price tracking and automated deal alerts.',
    ],
  },
  {
    period: 'January 2026 - July 2026',
    title: 'Project Engineer Intern',
    // Guildford Integrated Systems Sdn. Bhd. | https://www.guildfordsys.com/
    // Passenger Information Systems for Malaysia's LRT/MRT smart city networks (100+ stations)
    institution: 'Guildford Integrated Systems Sdn. Bhd.',
    location: 'Subang Jaya, Selangor, Malaysia 🇲🇾',
    type: 'Internship',
    highlights: [
      'Executed Factory Acceptance Testing (FAT) and Site Acceptance Testing (SAT) for RTS Johor Bahru - Singapore and LRT3 Shah Alam Line, validating Passenger Information Display Systems (PIDS) and Public Address (PA) software against client Outstanding Issues Lists (OILs).',
      'Managed end-to-end defect lifecycle: identified bugs, logged issue reports with video/screenshot evidence on PCS Vision tracker, collaborated with developers on fixes, and performed regression testing for client sign-off.',
      'Conducted High-Availability (HA) and redundancy failover testing on industrial ASL Vipedia broadcast server racks, verifying active-standby automatic switchover, alarm handling, and disaster recovery during simulated network outages.',
      'Assembled and maintained a Hardware-in-the-Loop (HIL) test bench for Car Park Management Systems (CPMS) integrating Raspberry Pi microcontrollers, relay modules, RFID/card reader terminals, and managed PoE switches over 4+ months of continuous stability testing.',
      'Performed System Administration and user provisioning: configuring role-based access control (RBAC) and OS settings across distributed station workstations.',
      'Supported on-site field commissioning at live LRT3 station facilities adhering to PPE safety standards (hard hat, vest), performing hardware troubleshooting, cabling, and display controller normalization.',
    ],
    credentialFile: '/cv/Mohammed_Safith_CV.pdf',
  },
  {
    period: 'May 2023 - June 2026',
    title: 'B.IT (Honours) in Information Technology',
    institution: 'City University Malaysia',
    location: 'Petaling Jaya, Selangor, Malaysia 🇲🇾',
    type: 'Education',
    highlights: [
      'Achieved cumulative CGPA of 3.47 / 4.00 (High Distinction / Second Class Upper).',
      'Relevant coursework: Systems Analysis & Design, Database Systems, Computer Networks, Software Engineering, DevOps, Cloud Architecture, Artificial Intelligence, and Data Structures.',
      'Final Year Project: PeerConnect: campus collaboration platform originally built with PHP Laravel for FYP, then re-architected in 2026 into modern Next.js/JavaScript & Firebase and hosted on Vercel.',
    ],
    credentialFile: '/cv/Mohammed_Safith_CV.pdf',
  },
  {
    period: 'September 2022 - December 2022',
    title: 'Web Developer Intern',
    institution: 'Xgen Groups (Pvt) Ltd.',
    location: 'Colombo, Sri Lanka 🇱🇰',
    type: 'Internship',
    highlights: [
      'Developed web application features and relational database schemas using PHP Laravel framework and MySQL.',
      'Implemented and standardized RESTful API endpoints ensuring consistent data integration between front-end and back-end services.',
      'Created and maintained comprehensive REST API technical documentation for developer reference and cross-team collaboration.',
      'Participated in Agile/Scrum workflows, sprint planning sessions, and peer code reviews.',
    ],
  },
  {
    period: 'January 2021 - 2022',
    title: 'NVQ Level 4 in Web Development',
    institution: 'Vocational Training Authority (VTA)',
    location: 'Kinniya, Sri Lanka 🇱🇰',
    type: 'Education',
    highlights: [
      'Mastered core web fundamentals: Semantic HTML5, CSS3 layouts, JavaScript programming, and basic relational database design.',
      'Built interactive responsive websites and gained hands-on experience in client-server architecture.',
      'Earned National Vocational Qualification (NVQ Level 4) accreditation in Web Development from the Vocational Training Authority of Sri Lanka.',
    ],
  },
  {
    period: '2017 - 2020',
    title: 'G.C.E. Advanced Level (A/L) & Ordinary Level (O/L)',
    institution: 'T/Kinniya Central College (National School)',
    location: 'Kinniya, Sri Lanka 🇱🇰',
    type: 'Education',
    highlights: [
      '2018 - 2020: G.C.E. Advanced Level (A/L) in Engineering Technology (E-Tech) stream, District/Island Rank 98.',
      '2017: Finished G.C.E. Ordinary Level (O/L).',
    ],
  },
];

