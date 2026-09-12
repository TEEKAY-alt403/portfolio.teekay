export type Project = {
  title: string
  type: string
  description: string
  stack: string[]
  href?: string
  liveUrl?: string
  status?: string
}

export const skills = [
  { name: 'HTML & CSS', group: 'Frontend' },
  { name: 'JavaScript', group: 'Frontend' },
  { name: 'React', group: 'Frontend' },
  { name: 'TypeScript', group: 'Frontend' },
  { name: 'Responsive UI', group: 'Frontend' },
  { name: 'Git & GitHub', group: 'Tools' },
  { name: 'WordPress', group: 'Tools' },
  { name: 'UI / Graphic Design', group: 'Creative' },
]

export const projects: Project[] = [
  {
    title: 'Portfolio Website',
    type: 'Personal Brand',
    description:
      'A recruiter-focused portfolio built to communicate frontend ability, practical project experience, and a clear developer identity.',
    stack: ['React', 'TypeScript', 'Tailwind'],
    href: 'https://github.com/TEEKAY-alt403/Portfolio-website',
  },
  {
    title: 'E-commerce Store',
    type: 'Frontend Application',
    description:
      'A responsive storefront concept focused on product discovery, routing, shopping-cart state, forms, authentication, and a clean customer journey.',
    stack: ['React', 'JavaScript', 'CSS'],
    status: 'In development',
  },
]

export const navItems = ['About', 'Skills', 'Projects', 'Experience', 'Contact']
