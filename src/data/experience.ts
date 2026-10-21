export interface ExperienceItem {
  id: string
  company: string
  role: string
  type: 'Internship' | 'Full-Time'
  period: string
  location: string
  responsibilities: string[]
  skills: string[]
}

export interface EducationItem {
  institution: string
  degree: string
  field: string
  period: string
  grade?: string
  location?: string
  highlights: string[]
}

export interface CertificationItem {
  title: string
  issuer: string
  year: string
  badgeText: string
  description: string
}

export interface AchievementItem {
  title: string
  organization: string
  description: string
  badge: string
}

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: 'kernel-intern',
    company: 'KernelIntern Technologies',
    role: 'Full-Stack Laravel & Livewire Masterclass Intern',
    type: 'Internship',
    period: 'Internship Duration',
    location: 'Remote',
    responsibilities: [
      'Worked on web application development using Laravel MVC framework and dynamic Livewire components.',
      'Validated application functionality and critical user workflows across authentication and data management.',
      'Identified implementation issues, tracked inconsistencies, and proposed corrective logic.',
      'Debugged application problems and verified behavior after code remediation.',
      'Utilized Git and GitHub for version control, collaborative branch management, and pull request reviews.',
    ],
    skills: ['Laravel', 'Livewire', 'PHP', 'MySQL', 'Git', 'GitHub', 'Workflow Validation', 'Debugging'],
  },
  {
    id: 'apex-planet',
    company: 'Apex Planet Pvt. Limited',
    role: 'Full-Stack Web Development Intern',
    type: 'Internship',
    period: 'Internship Duration',
    location: 'Remote',
    responsibilities: [
      'Developed responsive, cross-device web applications with seamless client-side user experiences.',
      'Validated pages and data-driven workflows against functional specifications.',
      'Identified application bugs, analyzed edge-case anomalies, and reported structured reproduction details.',
      'Verified expected system behavior after fixes were deployed.',
      'Collaborated across frontend, backend API, and database-integrated components.',
    ],
    skills: ['Web Development', 'JavaScript', 'HTML/CSS', 'Database Integration', 'Functional Testing', 'Bug Identification'],
  },
]

export const EDUCATION_LIST: EducationItem[] = [
  {
    institution: 'Mohan Babu University',
    degree: 'Bachelor of Technology (B.Tech)',
    field: 'Computer Science Engineering (AI & ML)',
    period: '2023 – 2027',
    grade: 'CGPA: 8.2 / 10',
    location: 'Tirupati, India',
    highlights: [
      'Specializing in Artificial Intelligence and Machine Learning along with core Computer Science engineering.',
      'Studied Data Structures & Algorithms, Database Management Systems, Operating Systems, and Software Engineering.',
      'Active participant in coding challenges and technical workshops.',
    ],
  },
  {
    institution: 'NxtWave Academy',
    degree: 'CCBP 4.0 Fellow',
    field: 'Full-Stack Engineering & Industry Readiness',
    period: '2023 – 2027',
    highlights: [
      'Intensive hands-on training in Full-Stack Web Development, Node.js, Express, React, and Python.',
      'Practical software design patterns, database normalization, and structured programming methodologies.',
      'Focus on real-world engineering project building and industrial best practices.',
    ],
  },
]

export const CERTIFICATIONS_LIST: CertificationItem[] = [
  {
    title: 'Oracle Cloud Infrastructure 2025 Certified Generative AI Professional',
    issuer: 'Oracle',
    year: '2025',
    badgeText: 'Generative AI',
    description: 'Validated expertise in large language model architectures, generative AI services, embeddings, prompt engineering, and OCI AI infrastructure.',
  },
  {
    title: 'Foundation of Cybersecurity',
    issuer: 'Google',
    year: '2024',
    badgeText: 'Cybersecurity',
    description: 'Foundations of security principles, network defenses, threat modeling, vulnerability identification, and compliance frameworks.',
  },
]

export const ACHIEVEMENTS_LIST: AchievementItem[] = [
  {
    title: 'Open-Source Contribution through Google Summer of Code (GSoC)',
    organization: 'Google Open Source',
    description: 'Engaged with open-source repositories through GSoC programs, submitting code enhancements and collaborating with global developer communities.',
    badge: 'Open Source',
  },
  {
    title: 'Open-Source GitHub Contributions',
    organization: 'GitHub Ecosystem',
    description: 'Authored commits involving project documentation enhancements, bug fixes, test improvements, and functional refinements.',
    badge: 'Collaboration',
  },
  {
    title: 'Solved 100+ Coding Problems',
    organization: 'LeetCode, CodeChef & HackerRank',
    description: 'Demonstrated algorithmic proficiency and strong analytical problem-solving in data structures, arrays, strings, and searching algorithms.',
    badge: 'Problem Solving',
  },
]
