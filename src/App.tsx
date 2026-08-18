import { useState } from 'react'
import { ArrowDown, ArrowUpRight, BriefcaseBusiness, Code2, GraduationCap, Mail, Menu, Sparkles, X } from 'lucide-react'

const GithubIcon = ({ size = 19 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 .7a11.3 11.3 0 0 0-3.58 22.02c.57.1.78-.25.78-.55v-2.02c-3.17.69-3.84-1.34-3.84-1.34-.52-1.32-1.27-1.67-1.27-1.67-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.68 1.25 3.33.96.1-.74.4-1.25.73-1.54-2.53-.29-5.2-1.27-5.2-5.65 0-1.25.45-2.27 1.18-3.07-.12-.29-.51-1.45.11-3.02 0 0 .96-.31 3.13 1.17a10.9 10.9 0 0 1 5.7 0c2.17-1.48 3.13-1.17 3.13-1.17.62 1.57.23 2.73.11 3.02.73.8 1.18 1.82 1.18 3.07 0 4.39-2.68 5.35-5.22 5.64.41.36.78 1.07.78 2.16v3.2c0 .3.2.66.79.55A11.3 11.3 0 0 0 12 .7Z" />
  </svg>
)

const skills = [
  { name: 'HTML & CSS', group: 'Frontend' }, { name: 'JavaScript', group: 'Frontend' },
  { name: 'React', group: 'Frontend' }, { name: 'TypeScript', group: 'Frontend' },
  { name: 'Responsive UI', group: 'Frontend' }, { name: 'Git & GitHub', group: 'Tools' },
  { name: 'WordPress', group: 'Tools' }, { name: 'UI / Graphic Design', group: 'Creative' },
]

const projects = [
  { title: 'Portfolio Website', type: 'Personal Brand', description: 'A recruiter-focused portfolio designed to communicate frontend ability, practical project experience and a clear developer identity.', stack: ['React', 'TypeScript', 'Tailwind'], href: 'https://github.com/TEEKAY-alt403/Portfolio-website' },
  { title: 'E-commerce Store', type: 'Frontend Application', description: 'A responsive storefront concept currently in development, focused on product discovery, routing, shopping-cart state, forms, authentication and a clean customer journey.', stack: ['React', 'JavaScript', 'CSS'], href: '' },
  { title: 'Next Project', type: 'Coming Soon', description: 'A new original project will be added here as I continue building practical frontend applications and expanding my portfolio.', stack: ['Coming Soon'], href: '' },
]

const navItems = ['About', 'Skills', 'Projects', 'Experience', 'Contact']

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const closeMenu = () => setMenuOpen(false)

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#08090c] text-zinc-100">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-[#08090c]/80 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 lg:px-8" aria-label="Main navigation">
          <a href="#home" className="text-lg font-black tracking-tight" onClick={closeMenu}>OTS<span className="text-indigo-400">.</span></a>
          <div className="hidden items-center gap-7 text-sm text-zinc-400 md:flex">{navItems.map((item) => <a key={item} href={`#${item.toLowerCase()}`} className="transition hover:text-white">{item}</a>)}</div>
          <a href="mailto:Okorietochukwu51@gmail.com" className="hidden rounded-full bg-white px-5 py-2 text-sm font-semibold text-black transition hover:bg-zinc-200 md:block">Let's talk</a>
          <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">{menuOpen ? <X size={22} /> : <Menu size={22} />}</button>
        </nav>
        {menuOpen && <div className="border-t border-white/5 px-5 pb-5 md:hidden">{navItems.map((item) => <a key={item} href={`#${item.toLowerCase()}`} onClick={closeMenu} className="block py-3 text-zinc-300">{item}</a>)}</div>}
      </header>

      <main>
        <section id="home" className="grid-bg relative flex min-h-screen items-center px-5 pt-24 lg:px-8">
          <div className="absolute left-1/2 top-1/3 h-80 w-80 -translate-x-1/2 rounded-full bg-indigo-500/10 blur-[120px]" />
          <div className="mx-auto grid w-full max-w-6xl gap-12 py-20 lg:grid-cols-[1.2fr_.8fr] lg:items-center">
            <div><div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[.03] px-4 py-2 text-sm text-zinc-300"><span className="h-2 w-2 rounded-full bg-emerald-400" /> Open to opportunities</div><p className="mb-4 text-sm font-semibold uppercase tracking-[.25em] text-indigo-400">Frontend Developer</p><h1 className="max-w-4xl text-5xl font-black leading-[.95] tracking-[-.05em] sm:text-7xl lg:text-8xl">I'm <span className="text-zinc-500">Okorie Tochukwu Solomon.</span><br />I build digital experiences that feel right.</h1><p className="mt-8 max-w-2xl text-lg leading-8 text-zinc-400">A Computer Science student and frontend developer focused on turning ideas into responsive, accessible and polished web interfaces.</p><div className="mt-10 flex flex-wrap gap-4"><a href="#projects" className="inline-flex items-center gap-2 rounded-full bg-indigo-500 px-6 py-3 font-semibold text-white transition hover:bg-indigo-400">View my work <ArrowDown size={17} /></a><a href="mailto:Okorietochukwu51@gmail.com" className="inline-flex items-center gap-2 rounded-full border border-white/10 px-6 py-3 font-semibold text-zinc-200 transition hover:border-white/25 hover:bg-white/5">Get in touch <ArrowUpRight size={17} /></a></div></div>
            <div className="relative hidden justify-center lg:flex"><div className="animate-float relative flex h-72 w-72 items-center justify-center rounded-[2rem] border border-white/10 bg-white/[.03] shadow-2xl shadow-indigo-950/40"><div className="absolute inset-5 rounded-[1.5rem] border border-indigo-400/20" /><Code2 size={92} strokeWidth={1} className="text-indigo-300" /><span className="absolute bottom-8 text-xs uppercase tracking-[.35em] text-zinc-500">Build • Learn • Ship</span></div></div>
          </div>
        </section>

        <section id="about" className="border-t border-white/5 px-5 py-28 lg:px-8"><div className="mx-auto max-w-6xl"><p className="mb-3 text-sm font-semibold uppercase tracking-[.25em] text-indigo-400">01 — About</p><div className="grid gap-10 lg:grid-cols-2"><h2 className="text-4xl font-bold tracking-tight sm:text-5xl">Curious by nature.<br /><span className="text-zinc-500">Serious about craft.</span></h2><div className="space-y-5 text-lg leading-8 text-zinc-400"><p>I enjoy the space where design and engineering meet — taking a rough idea, understanding the user behind it, and building an interface that is useful, clear and memorable.</p><p>My Computer Science background gives me a strong technical foundation, while hands-on projects keep me learning modern frontend patterns, deployment workflows and practical product development.</p><p>I'm especially interested in opportunities where I can contribute to a real product, learn from experienced developers and keep improving as an engineer.</p></div></div></div></section>

        <section id="skills" className="border-t border-white/5 bg-white/[.015] px-5 py-28 lg:px-8"><div className="mx-auto max-w-6xl"><p className="mb-3 text-sm font-semibold uppercase tracking-[.25em] text-indigo-400">02 — Skills</p><h2 className="mb-10 text-4xl font-bold tracking-tight sm:text-5xl">A practical frontend toolkit.</h2><div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">{skills.map((skill) => <div key={skill.name} className="rounded-2xl border border-white/8 bg-[#0d0f14] p-5 transition hover:-translate-y-1 hover:border-indigo-400/30"><p className="text-xs uppercase tracking-[.18em] text-zinc-600">{skill.group}</p><p className="mt-2 font-medium text-zinc-100">{skill.name}</p></div>)}</div></div></section>

        <section id="projects" className="border-t border-white/5 px-5 py-28 lg:px-8"><div className="mx-auto max-w-6xl"><div className="mb-12 flex items-end justify-between gap-6"><div><p className="mb-3 text-sm font-semibold uppercase tracking-[.25em] text-indigo-400">03 — Projects</p><h2 className="text-4xl font-bold tracking-tight sm:text-5xl">Selected work.</h2></div><Sparkles className="hidden text-indigo-400 sm:block" /></div><div className="grid gap-5 lg:grid-cols-3">{projects.map((project, index) => <article key={project.title} className="group flex min-h-[410px] flex-col rounded-3xl border border-white/8 bg-[#0d0f14] p-7 transition duration-300 hover:-translate-y-2 hover:border-indigo-400/30"><div className="flex items-center justify-between text-xs uppercase tracking-[.2em] text-zinc-500"><span>0{index + 1}</span><span>{project.type}</span></div><div className="mt-12 flex-1"><h3 className="text-2xl font-bold">{project.title}</h3><p className="mt-4 leading-7 text-zinc-400">{project.description}</p></div><div className="flex flex-wrap gap-2">{project.stack.map((item) => <span key={item} className="rounded-full bg-white/5 px-3 py-1 text-xs text-zinc-400">{item}</span>)}</div>{project.href ? <a href={project.href} target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-indigo-300">View on GitHub <ArrowUpRight size={16} /></a> : <span className="mt-6 inline-flex w-fit items-center rounded-full border border-dashed border-white/10 px-4 py-2 text-sm text-zinc-600">Coming soon</span>}</article>)}</div></div></section>

        <section id="experience" className="border-t border-white/5 bg-white/[.015] px-5 py-28 lg:px-8"><div className="mx-auto max-w-6xl"><p className="mb-3 text-sm font-semibold uppercase tracking-[.25em] text-indigo-400">04 — Experience & Education</p><div className="grid gap-5 lg:grid-cols-2"><article className="rounded-3xl border border-white/8 bg-[#0d0f14] p-8"><BriefcaseBusiness className="mb-7 text-indigo-400" /><h3 className="text-2xl font-bold">SIWES — Teebiz Technologies Limited</h3><p className="mt-2 text-sm text-zinc-500">Industrial Training • 2026</p><p className="mt-6 leading-7 text-zinc-400">Hands-on exposure to professional software development workflows, web technologies and practical technology projects as part of my industrial training.</p></article><article className="rounded-3xl border border-white/8 bg-[#0d0f14] p-8"><GraduationCap className="mb-7 text-indigo-400" /><h3 className="text-2xl font-bold">Computer Science</h3><p className="mt-2 text-sm text-zinc-500">Vision University • Undergraduate</p><p className="mt-6 leading-7 text-zinc-400">Building a broad foundation across programming, data structures, software development, computer architecture, databases, networking and modern computing.</p></article></div></div></section>

        <section id="contact" className="border-t border-white/5 px-5 py-28 lg:px-8"><div className="mx-auto max-w-6xl rounded-[2rem] border border-white/8 bg-gradient-to-br from-indigo-500/10 to-transparent p-8 sm:p-14"><p className="mb-3 text-sm font-semibold uppercase tracking-[.25em] text-indigo-400">05 — Contact</p><h2 className="max-w-3xl text-4xl font-bold tracking-tight sm:text-6xl">Have an idea worth building?</h2><p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400">I'm open to internships, freelance opportunities, collaborations and interesting frontend projects.</p><div className="mt-8 flex flex-wrap gap-3"><a href="https://github.com/TEEKAY-alt403" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-black transition hover:bg-zinc-200"><GithubIcon size={17} /> GitHub</a><a href="mailto:Okorietochukwu51@gmail.com" className="inline-flex items-center gap-2 rounded-full border border-white/10 px-6 py-3 font-semibold text-zinc-200 transition hover:border-white/25 hover:bg-white/5"><Mail size={17} /> Okorietochukwu51@gmail.com</a></div></div></section>
      </main>

      <footer className="border-t border-white/5 px-5 py-8 lg:px-8"><div className="mx-auto flex max-w-6xl flex-col justify-between gap-5 text-sm text-zinc-500 sm:flex-row sm:items-center"><p>© {new Date().getFullYear()} Okorie Tochukwu Solomon. Built with React.</p><a href="https://github.com/TEEKAY-alt403" target="_blank" rel="noreferrer" className="transition hover:text-white"><GithubIcon /></a></div></footer>
    </div>
  )
}

export default App
