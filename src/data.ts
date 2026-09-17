export type Project = {
  title: string
  type: string
  description: string
  stack: string[]
  href?: string
  liveUrl?: string
  status?: string
  featured?: boolean
  problem?: string
  outcome?: string
}

export const skills = [
  { name: 'React', group: 'Core' },
  { name: 'TypeScript', group: 'Core' },
  { name: 'JavaScript', group: 'Core' },
  { name: 'HTML & CSS', group: 'Core' },
  { name: 'Responsive UI', group: 'Frontend' },
  { name: 'UI / UX Design', group: 'Frontend' },
  { name: 'Git & GitHub', group: 'Workflow' },
  { name: 'WordPress', group: 'Workflow' },
]

export const projects: Project[] = [
  {
    title: 'Portfolio Website',
    type: 'Personal Brand',
    description:
      'A responsive developer portfolio focused on clear personal positioning, accessible interactions, polished UI and a fast browsing experience.',
    stack: ['React', 'TypeScript', 'Tailwind'],
    href: 'https://github.com/TEEKAY-alt403/Portfolio-website',
    featured: true,
    problem: 'Create a portfolio that communicates frontend ability quickly while remaining easy to navigate on desktop and mobile.',
    outcome: 'A structured single-page experience with clearer hierarchy, responsive navigation, accessible controls and SEO-ready metadata.',
  },
  {
    title: 'E-commerce Store',
    type: 'Frontend Application',
    description:
      'A responsive storefront concept exploring product discovery, routing, shopping-cart state, forms, authentication and a clean customer journey.',
    stack: ['React', 'JavaScript', 'CSS'],
    status: 'In development',
    featured: true,
    problem: 'Design a practical storefront experience that keeps product discovery and core shopping interactions simple.',
    outcome: 'An evolving application foundation covering responsive layouts, application state and reusable interface patterns.',
  },
]

export const navItems = ['About', 'Skills', 'Projects', 'Experience', 'Contact']
