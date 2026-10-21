export interface SkillItem {
  name: string
  category: 'Testing' | 'Programming' | 'Web Development' | 'Database & API' | 'Tools' | 'Core Concepts'
  description: string
  badge?: string
}

export const SKILL_CATEGORIES = [
  'All',
  'Testing',
  'Programming',
  'Web Development',
  'Database & API',
  'Tools',
  'Core Concepts',
] as const

export const SKILLS: SkillItem[] = [
  // TESTING
  { name: 'Manual Testing', category: 'Testing', description: 'Systematic exploratory testing, requirement mapping, and user story verification.', badge: 'Core' },
  { name: 'Functional Testing', category: 'Testing', description: 'Validation of business rules, inputs, expected states, and boundary conditions.', badge: 'Core' },
  { name: 'UI Testing', category: 'Testing', description: 'Cross-browser rendering, responsive layout checks, and usability validation.' },
  { name: 'API Testing', category: 'Testing', description: 'REST endpoint testing, payload assertion, status codes, and error responses via Postman.', badge: 'Core' },
  { name: 'Test Case Design', category: 'Testing', description: 'Formulating structured test suites with IDs, preconditions, steps, and expected outcomes.', badge: 'Core' },
  { name: 'Workflow Validation', category: 'Testing', description: 'End-to-end user scenario testing across auth, database commits, and transactions.' },
  { name: 'Edge-Case Testing', category: 'Testing', description: 'Null checks, stress boundaries, malformed inputs, and concurrency anomalies.' },
  { name: 'Bug Identification', category: 'Testing', description: 'Root-cause tracking, logging defect reproduction logs with environment context.' },
  { name: 'Bug Reproduction', category: 'Testing', description: 'Precise step-by-step reproduction scripts for developer remediation.' },
  { name: 'Debugging', category: 'Testing', description: 'Inspecting browser network payloads, DOM console errors, and backend stack traces.' },

  // PROGRAMMING
  { name: 'Python', category: 'Programming', description: 'NLP scripts, AI/ML models, automated validation scripts, and data parsing.', badge: 'Language' },
  { name: 'JavaScript', category: 'Programming', description: 'Modern ES6+ syntax, asynchronous programming, DOM lifecycle manipulation.', badge: 'Language' },
  { name: 'TypeScript', category: 'Programming', description: 'Strict type safety, custom interfaces, generic constraints for resilient apps.', badge: 'Language' },
  { name: 'Java', category: 'Programming', description: 'Object-oriented programming, data structures, and algorithmic logic.', badge: 'Language' },
  { name: 'C++', category: 'Programming', description: 'Core problem solving, memory concepts, and algorithmic challenges.', badge: 'Language' },

  // WEB DEVELOPMENT
  { name: 'React.js', category: 'Web Development', description: 'Component architecture, custom hooks, state management, and performance optimization.', badge: 'Frontend' },
  { name: 'Next.js', category: 'Web Development', description: 'Full-stack SSR/SSG apps, API routes, App Router, and server actions.', badge: 'Full-Stack' },
  { name: 'Node.js', category: 'Web Development', description: 'Runtime server environment, event loop, and asynchronous stream handling.', badge: 'Backend' },
  { name: 'Express.js', category: 'Web Development', description: 'Modular routing, middleware chains, RESTful services, error-handling middleware.', badge: 'Backend' },
  { name: 'HTML', category: 'Web Development', description: 'Semantic HTML5 structure, accessible markup, and SEO-optimized documents.' },
  { name: 'CSS', category: 'Web Development', description: 'Modern CSS3, Flexbox, Grid, custom properties, animations, and responsive design.' },
  { name: 'Laravel', category: 'Web Development', description: 'PHP MVC framework, Eloquent ORM, Blade templating, authentication scaffolding.', badge: 'Internship Stack' },
  { name: 'Livewire', category: 'Web Development', description: 'Dynamic, reactive full-stack interfaces in Laravel without heavy JS layers.', badge: 'Internship Stack' },

  // DATABASE & API
  { name: 'PostgreSQL', category: 'Database & API', description: 'Relational schema design, ACID transactions, foreign keys, and indexed queries.', badge: 'Database' },
  { name: 'MySQL', category: 'Database & API', description: 'Relational data modeling, normalization, constraints, and query tuning.' },
  { name: 'MongoDB', category: 'Database & API', description: 'Document-oriented NoSQL storage, schema validation, aggregation pipelines.' },
  { name: 'REST APIs', category: 'Database & API', description: 'RESTful architecture, CRUD conventions, HTTP verbs, JSON payloads, and idempotency.', badge: 'API' },
  { name: 'Postman', category: 'Database & API', description: 'API test collections, environment variables, automated pre-request scripts, assertions.', badge: 'Tool' },
  { name: 'SQL', category: 'Database & API', description: 'Complex joins, aggregations, data integrity constraints, and query analysis.' },

  // TOOLS
  { name: 'Git', category: 'Tools', description: 'Version control, branch management, merge conflict resolution, and commit hygiene.', badge: 'Tool' },
  { name: 'GitHub', category: 'Tools', description: 'Pull requests, code review collaboration, issue tracking, and repository workflows.' },
  { name: 'VS Code', category: 'Tools', description: 'Primary IDE, debugging configurations, linting integrations, and terminal workflow.' },
  { name: 'Docker', category: 'Tools', description: 'Containerization basics, Dockerfile creation, and reproducible environments.' },
  { name: 'Vercel', category: 'Tools', description: 'Cloud deployment, edge network distribution, and continuous deployment workflows.' },
  { name: 'Render', category: 'Tools', description: 'Backend web service hosting, environment configuration, and database management.' },

  // CORE CONCEPTS
  { name: 'SDLC', category: 'Core Concepts', description: 'Software Development Life Cycle: Agile sprints, requirements, implementation, deployment.', badge: 'Process' },
  { name: 'STLC', category: 'Core Concepts', description: 'Software Testing Life Cycle: Test planning, design, execution, bug reporting, and closure.', badge: 'Process' },
  { name: 'Object-Oriented Programming', category: 'Core Concepts', description: 'Encapsulation, inheritance, polymorphism, abstraction, and clean architecture.' },
  { name: 'Data Structures and Algorithms', category: 'Core Concepts', description: 'Arrays, linked lists, trees, graphs, sorting, searching, time & space complexity analysis.' },
  { name: 'Problem Solving', category: 'Core Concepts', description: 'Algorithmic reasoning, analytical debugging, root cause deduction, and edge-case prevention.' },
]
