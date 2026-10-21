export interface StatMetric {
  id: string
  label: string
  value: number
  suffix?: string
  description: string
  category: 'experience' | 'education' | 'coding' | 'certifications'
}

export const METRICS: StatMetric[] = [
  {
    id: 'internships',
    label: 'Internships Completed',
    value: 2,
    suffix: '',
    description: 'KernelIntern Technologies (Laravel/Livewire) & Apex Planet (Full-Stack)',
    category: 'experience',
  },
  {
    id: 'problems',
    label: 'Problems Solved',
    value: 100,
    suffix: '+',
    description: 'Data Structures & Algorithms across LeetCode, CodeChef & HackerRank',
    category: 'coding',
  },
  {
    id: 'cgpa',
    label: 'B.Tech CGPA',
    value: 8.2,
    suffix: ' / 10',
    description: 'Computer Science Engineering (AI & ML) @ Mohan Babu University',
    category: 'education',
  },
  {
    id: 'certifications',
    label: 'Verified Certifications',
    value: 2,
    suffix: '',
    description: 'Oracle Generative AI Professional & Google Cyber Security',
    category: 'certifications',
  },
]

export const DOMAIN_CHART_DATA = [
  { domain: 'Manual & QA Testing', score: 90, benchmark: 'Core Focus' },
  { domain: 'API & Integration Testing', score: 88, benchmark: 'Postman / REST' },
  { domain: 'Frontend (React/Next.js)', score: 85, benchmark: 'TypeScript / Tailwind' },
  { domain: 'Backend (Node / Laravel)', score: 82, benchmark: 'Express / PostgreSQL' },
  { domain: 'Database & SQL', score: 84, benchmark: 'PostgreSQL / MySQL' },
  { domain: 'Dev Tools & Git', score: 88, benchmark: 'Git / Docker / CI' },
]

export const FOCUS_AREAS = [
  {
    title: 'Software Quality Assurance & Testing',
    detail: 'Functional validation, boundary testing, API verification via Postman, and end-to-end user journey auditing.',
    status: 'Primary Focus',
    icon: 'ShieldCheck',
  },
  {
    title: 'Full-Stack Web Engineering',
    detail: 'Modern React/Next.js client architectures paired with resilient Express/PostgreSQL and Laravel backends.',
    status: 'Active Stack',
    icon: 'Layers',
  },
  {
    title: 'Artificial Intelligence & Machine Learning',
    detail: 'B.Tech specialization in AI/ML, NLP text analysis, and OCI Certified Generative AI implementations.',
    status: 'Specialization',
    icon: 'Cpu',
  },
]
