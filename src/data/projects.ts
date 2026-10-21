export interface Project {
  id: string
  title: string
  subtitle: string
  category: 'Full-Stack' | 'AI & ML'
  tech: string[]
  description: string
  highlights: string[]
  qaFocus: string[]
  liveUrl?: string
  githubUrl?: string
  status: 'Production Live' | 'Completed Research & Prototype'
  featured: boolean
}

export const PROJECTS: Project[] = [
  {
    id: 'codemaster',
    title: 'CodeMaster — Online Coding Platform',
    subtitle: 'Full-Stack Problem Solving & Code Execution Platform',
    category: 'Full-Stack',
    tech: ['Next.js', 'TypeScript', 'Node.js', 'Express.js', 'PostgreSQL', 'REST APIs', 'Drizzle ORM'],
    description:
      'A comprehensive full-stack coding platform featuring problem listings, algorithmic challenges, secure user authentication, and real-time code submission workflows with backend evaluation.',
    highlights: [
      'Built modular backend REST APIs with robust PostgreSQL integration.',
      'Implemented an idiomatic type-safe database layer using Drizzle ORM.',
      'Structured responsive Next.js frontend with clean authentication state management.',
      'Validated end-to-end coding workflows, from problem loading to submission evaluation.',
    ],
    qaFocus: [
      'Tested UI behavior across diverse screen sizes and input boundaries.',
      'Validated REST API responses, HTTP error codes, and edge-case payloads.',
      'Conducted database interaction testing, schema constraint checks, and foreign key integrity checks.',
      'Investigated and verified fixes for edge cases involving malformed inputs and submission timeouts.',
    ],
    liveUrl: 'https://code-master-coding-platform.vercel.app/',
    githubUrl: 'https://github.com/Bavaji12/CodeMaster-Coding-Platform',
    status: 'Production Live',
    featured: true,
  },
  {
    id: 'ai-ats-analyzer',
    title: 'AI ATS Resume Analyzer',
    subtitle: 'Intelligent Resume Parsing & Skill-Gap Evaluation System',
    category: 'AI & ML',
    tech: ['Python', 'NLP', 'AI/ML', 'HTML', 'CSS', 'JavaScript'],
    description:
      'An intelligent Natural Language Processing pipeline that extracts key candidate qualifications, compares them against target job descriptions, detects critical skill gaps, and recommends actionable keyword enhancements.',
    highlights: [
      'Engineered automated resume text extraction and structural semantic parsing.',
      'Built cosine similarity and TF-IDF / embedding comparison algorithms for job description alignment.',
      'Designed automated skill-gap classification and missing competency reports.',
      'Delivered structured recommendation summaries to improve applicant visibility.',
    ],
    qaFocus: [
      'Performed input validation on irregular PDF/Word formatting and corrupted text streams.',
      'Conducted boundary testing on empty text blocks, large documents, and unusual character encodings.',
      'Validated recommendation workflow accuracy and algorithmic scoring stability.',
      'Audited false-positive rate on keyword synonym matching.',
    ],
    status: 'Completed Research & Prototype',
    featured: true,
  },
]
