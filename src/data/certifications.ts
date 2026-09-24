import { Certification } from '@/types';

/**
 * Static Data Store: Mohammed Safith's Verified Certifications, Awards & Credentials
 *
 * Grounded in official physical certificates, government agency statements (ICTA, Dept of Exams),
 * university challenge certificates (DSA / MDEC), and executive director recommendations.
 */
export const CERTIFICATIONS: Certification[] = [
  {
    id: 'top-coders-2025',
    title: 'Top Coders: Coding Challenge 2025 (University Level)',
    issuer: 'Data Science Association (DSA) & MDEC Malaysia 🇲🇾',
    issueDate: 'July 2025',
    category: 'Coding & Algorithms',
    description:
      'Successfully participated in the national-level competitive programming challenge representing City University Malaysia, solving complex algorithmic problems under time constraints.',
    skillsAcquired: ['Python', 'Competitive Programming', 'Algorithm Design', 'Time Complexity'],
    badgeLabel: 'National Challenge',
  },
  {
    id: 'top-coders-python-workshop',
    title: 'Top Coders Malaysia: Python Programming Fundamentals',
    issuer: 'eBOX & Data Science Association (DSA) 🇲🇾',
    issueDate: '2025',
    category: 'Coding & Algorithms',
    description:
      'Completed the intensive pre-competition technical workshop focusing on core Python data structures, algorithms, and computational problem-solving paradigms.',
    skillsAcquired: ['Python Fundamentals', 'Data Structures', 'Computational Problem Solving'],
    badgeLabel: 'Technical Workshop',
  },
  {
    id: 'guildford-recommendation',
    title: 'Industrial Project Engineering Recommendation Letter',
    issuer: 'Guildford Integrated Systems Sdn. Bhd. (Director Jonathan Ross) 🇲🇾',
    issueDate: 'August 2026',
    category: 'Transit & QA Systems',
    description:
      'Official executive reference letter commending engineering contributions to the LRT3 Passenger Information System (PIDS), Car Park entry systems (CPMS), and multi-railway projects in the Klang Valley & Johor Bahru.',
    skillsAcquired: [
      'FAT / SAT Testing',
      'ASL Vipedia Server Racks',
      'CPMS HIL Test Bench',
      'Transit System Commissioning',
    ],
    credentialFile: '/cv/Mohammed_Safith_CV.pdf',
    badgeLabel: 'Executive Reference',
  },
  {
    id: 'mern-stack-webinar',
    title: 'Open Brackets: MERN Stack Architecture Workshop',
    issuer: 'FOSS & Mozilla Community & Gapstars 🇱🇰',
    issueDate: '2023',
    category: 'Web & Emerging Tech',
    description:
      'Participated in the consecutive two-day intensive full-stack web workshop covering MongoDB schema design, Express REST APIs, React component lifecycles, and Node.js server architectures.',
    skillsAcquired: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'REST APIs'],
    badgeLabel: 'Full-Stack Web',
  },
  {
    id: 'interstellar-2022',
    title: 'Interstellar 2022: Emerging Tech & Innovation',
    issuer: 'Shield Technologies (Pvt) Ltd & ICTA Sri Lanka 🇱🇰',
    issueDate: 'November 2022',
    category: 'Web & Emerging Tech',
    description:
      'Participated in the national technology workshop celebrating Global Entrepreneurship Week Sri Lanka, exploring modern software systems, entrepreneurial tech pipelines, and digital innovation.',
    skillsAcquired: ['Emerging Tech', 'Software Systems Architecture', 'Digital Innovation'],
    badgeLabel: 'Tech Conference',
  },
  {
    id: 'icta-knowledge-agent',
    title: 'SMART Social Circle Knowledge Agent Certification',
    issuer: 'Information and Communication Technology Agency (ICTA) of Sri Lanka 🇱🇰',
    issueDate: '2021',
    category: 'Leadership & Community',
    description:
      'Certified as an IDIMAN SMART Social Circle Knowledge Agent by the apex national ICT development and policy agency of the Government of Sri Lanka.',
    skillsAcquired: ['Digital Literacy', 'Community Technology Training', 'Public Engagement'],
    badgeLabel: 'Government Accredited',
  },
  {
    id: 'al-rowla-vice-president',
    title: 'Executive Vice President (3-Year Tenure Certification)',
    issuer: 'Al-Rowla Youth Club (Reg No: E/TM/KI/08) 🇱🇰',
    issueDate: 'January 2020 - January 2023',
    category: 'Leadership & Community',
    description:
      'Certified 3-year executive service leading grassroots community labor (Shramadana), public space maintenance, youth engagement, and village welfare project administration.',
    skillsAcquired: ['Executive Leadership', 'Project Coordination', 'Community Welfare', 'Public Speaking'],
    badgeLabel: 'Executive Leadership',
  },
  {
    id: 'zonal-maths-olympiad',
    title: 'Zonal Maths Olympiad Provincial Qualifier (Grade 8)',
    issuer: 'Zonal Education Office Kinniya 🇱🇰',
    issueDate: 'January 2014',
    category: 'Coding & Algorithms',
    description:
      'Selected to the Provincial Level in the Kinniya Zonal Level Mathematics Olympiad Competition, demonstrating strong analytical and mathematical problem-solving talent.',
    skillsAcquired: ['Mathematical Logic', 'Analytical Reasoning', 'Algorithmic Thinking'],
    badgeLabel: 'Provincial Selection',
  },
];
