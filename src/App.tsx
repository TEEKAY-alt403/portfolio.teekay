import { useEffect, useState } from 'react'
import { navItems, projects, skills } from './data'

const email = 'okorietochukwu51@gmail.com'
const githubUrl = 'https://github.com/TEEKAY-alt403'

type IconProps = { size?: number; className?: string }
const Icon = ({ name, size = 19, className = '' }: IconProps & { name: string }) => {
  const paths: Record<string, string> = {
    arrowDown: 'M12 5v14m0 0 6-6m-6 6-6-6',
    arrowUpRight: 'M7 17 17 7M7 7h10v10',
    briefcase: 'M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2m-9 0h10a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3v-6a3 3 0 0 1 3-3Zm-3 5h14',
    code: 'm8 9-3 3 3 3m8-6 3 3-3 3m-5 3 2-12',
    external: 'M14 5h5v5m0-5-8 8M19 14v4a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h4',
    graduation: 'M3 10 12 5l9 5-9 5-9-5Zm4 2.5V17c3 2 7 2 10 0v-4.5M21 10v6',
    mail: 'M3 6h18v12H3V6Zm0 1 9 7 9-7',
    menu: 'M4 7h16M4 12h16M4 17h16',
    x: 'm6 6 12 12M18 6 6 18',
    sparkles: 'm12 3 1.5 5.5L19 10l-5.5 1.5L12 17l-1.5-5.5L5 10l5.5-1.5L12 3Zm7 12 .7 2.3L22 18l-2.3.7L19 21l-.7-2.3L16 18l2.3-.7L19 15Z',
  }
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true"><path d={paths[name]} /></svg>
}

const GithubIcon = ({ size = 19 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 .7a11.3 11.3 0 0 0-3.58 22.02c.57.1.78-.25.78-.55v-2.02c-3.17.69-3.84-1.34-3.84-1.34-.52-1.32-1.27-1.67-1.27-1.67-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.68 1.25 3.33.96.1-.74.4-1.25.73-1.54-2.53-.29-5.2-1.27-5.2-5.65 0-1.25.45-2.27 1.18-3.07-.12-.29-.51-1.45.11-3.02 0 0 .96-.31 3.13 1.17a10.9 10.9 0 0 1 5.7 0c2.17-1.48 3.13-1.17 3.13-1.17.62 1.57.23 2.73.11 3.02.73.8 1.18 1.82 1.18 3.07 0 4.39-2.68 5.35-5.22 5.64.41.36.78 1.07.78 2.16v3.2c0 .3.2.66.79.55A11.3 11.3 0 0 0 12 .7Z" />
  </svg>
)

function Heading({ n, label, title, text }: { n: string; label: string; title: string; text?: string }) {
  return <div className="mb-12 max-w-3xl"><p className="mb-3 text-xs font-bold uppercase tracking-[.25em] text-indigo-400">{n} — {label}</p><h2 className="text-4xl font-black tracking-tight sm:text-5xl">{title}</h2>{text && <p className="mt-5 text-lg leading-8 text-zinc-400">{text}</p>}</div>
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  useEffect(() => { document.body.classList.toggle('menu-open', menuOpen); return () => document.body.classList.remove('menu-open') }, [menuOpen])
  useEffect(() => { const f = (e: KeyboardEvent) => e.key === 'Escape' && setMenuOpen(false); window.addEventListener('keydown', f); return () => window.removeEventListener('keydown', f) }, [])
  const close = () => setMenuOpen(false)
  const focus = 'rounded-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-indigo-400'

  return <div className="min-h-screen overflow-x-hidden bg-[#08090c] text-zinc-100">
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-[#08090c]/80 backdrop-blur-xl"><nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 lg:px-8" aria-label="Main navigation">
      <a href="#home" onClick={close} className={`${focus} text-lg font-black tracking-tight`}>OTS<span className="text-indigo-400">.</span></a>
      <div className="hidden items-center gap-7 text-sm text-zinc-400 md:flex">{navItems.map((item) => <a key={item} href={`#${item.toLowerCase()}`} className={`${focus} transition hover:text-white`}>{item}</a>)}</div>
      <a href={`mailto:${email}`} className={`${focus} hidden rounded-full bg-white px-5 py-2 text-sm font-semibold text-black transition hover:bg-zinc-200 md:block`}>Let's talk</a>
      <button className={`${focus} md:hidden`} onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation" aria-expanded={menuOpen} aria-controls="mobile-navigation">{menuOpen ? <Icon name="x" size={22} /> : <Icon name="menu" size={22} />}</button>
    </nav>
    {menuOpen && <div id="mobile-navigation" className="border-t border-white/5 px-5 pb-5 md:hidden">{navItems.map((item) => <a key={item} href={`#${item.toLowerCase()}`} onClick={close} className={`${focus} block py-3 text-zinc-300`}>{item}</a>)}</div>}
    </header>

    <main>
      <section id="home" className="grid-bg relative flex min-h-screen items-center px-5 pt-24 lg:px-8"><div className="absolute left-1/2 top-1/3 h-80 w-80 -translate-x-1/2 rounded-full bg-indigo-500/10 blur-[120px]" /><div className="mx-auto grid w-full max-w-6xl gap-12 py-20 lg:grid-cols-[1.2fr_.8fr] lg:items-center"><div><div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[.03] px-4 py-2 text-sm text-zinc-300"><span className="h-2 w-2 rounded-full bg-emerald-400" /> Open to opportunities</div><p className="mb-4 text-sm font-semibold uppercase tracking-[.25em] text-indigo-400">Frontend Developer</p><h1 className="max-w-4xl text-5xl font-black leading-[.95] tracking-[-.05em] sm:text-7xl lg:text-8xl">I'm <span className="text-zinc-500">Okorie Tochukwu Solomon.</span><br />I build digital experiences that feel right.</h1><p className="mt-8 max-w-2xl text-lg leading-8 text-zinc-400">A Computer Science student and frontend developer focused on turning ideas into responsive, accessible and polished web interfaces.</p><div className="mt-10 flex flex-wrap gap-4"><a href="#projects" className={`${focus} inline-flex items-center gap-2 rounded-full bg-indigo-500 px-6 py-3 font-semibold text-white transition hover:bg-indigo-400`}>View my work <Icon name="arrowDown" size={17} /></a><a href={`mailto:${email}`} className={`${focus} inline-flex items-center gap-2 rounded-full border border-white/10 px-6 py-3 font-semibold text-zinc-200 transition hover:border-white/25 hover:bg-white/5`}>Get in touch <Icon name="arrowUpRight" size={17} /></a></div></div><div className="relative hidden justify-center lg:flex"><div className="animate-float relative flex h-72 w-72 items-center justify-center rounded-[2rem] border border-white/10 bg-white/[.03] shadow-2xl shadow-indigo-950/40"><div className="absolute inset-5 rounded-[1.5rem] border border-indigo-400/20" /><Icon name="code" size={92} className="text-indigo-300" /><span className="absolute bottom-8 text-xs uppercase tracking-[.35em] text-zinc-500">Build • Learn • Ship</span></div></div></div></section>

      <section id="about" className="border-t border-white/5 px-5 py-28 lg:px-8"><div className="mx-auto max-w-6xl"><Heading n="01" label="About" title="Curious by nature. Serious about craft." text="I enjoy the space where design and engineering meet — taking a rough idea, understanding the user behind it, and building an interface that is useful, clear and memorable." /><div className="grid gap-6 sm:grid-cols-3"><div className="rounded-2xl border border-white/8 bg-white/[.02] p-6"><p className="text-2xl font-bold">Frontend</p><p className="mt-2 text-sm leading-6 text-zinc-500">Responsive interfaces and practical React applications.</p></div><div className="rounded-2xl border border-white/8 bg-white/[.02] p-6"><p className="text-2xl font-bold">User-focused</p><p className="mt-2 text-sm leading-6 text-zinc-500">Clear flows, accessible interactions and thoughtful details.</p></div><div className="rounded-2xl border border-white/8 bg-white/[.02] p-6"><p className="text-2xl font-bold">Always learning</p><p className="mt-2 text-sm leading-6 text-zinc-500">Building practical projects and improving engineering craft.</p></div></div></div></section>

      <section id="skills" className="border-t border-white/5 bg-white/[.015] px-5 py-28 lg:px-8"><div className="mx-auto max-w-6xl"><Heading n="02" label="Skills" title="A practical frontend toolkit." /><div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">{skills.map((skill) => <div key={skill.name} className="rounded-2xl border border-white/8 bg-[#0d0f14] p-5 transition hover:-translate-y-1 hover:border-indigo-400/30"><p className="text-xs uppercase tracking-[.18em] text-zinc-600">{skill.group}</p><p className="mt-2 font-medium text-zinc-100">{skill.name}</p></div>)}</div></div></section>

      <section id="projects" className="border-t border-white/5 px-5 py-28 lg:px-8"><div className="mx-auto max-w-6xl"><div className="mb-12 flex items-end justify-between gap-6"><Heading n="03" label="Projects" title="Selected work." /><Icon name="sparkles" size={24} className="mb-1 hidden text-indigo-400 sm:block" /></div><div className="grid gap-5 lg:grid-cols-2">{projects.map((project, index) => <article key={project.title} className="group flex min-h-[360px] flex-col rounded-3xl border border-white/8 bg-[#0d0f14] p-7 transition duration-300 hover:-translate-y-2 hover:border-indigo-400/30"><div className="flex items-center justify-between text-xs uppercase tracking-[.2em] text-zinc-500"><span>0{index + 1}</span><span>{project.type}</span></div><div className="mt-10 flex-1"><h3 className="text-2xl font-bold">{project.title}</h3><p className="mt-4 leading-7 text-zinc-400">{project.description}</p></div><div className="flex flex-wrap gap-2">{project.stack.map((item) => <span key={item} className="rounded-full bg-white/5 px-3 py-1 text-xs text-zinc-400">{item}</span>)}</div>{project.href ? <a href={project.href} target="_blank" rel="noopener noreferrer" className={`${focus} mt-6 inline-flex w-fit items-center gap-2 text-sm font-semibold text-indigo-300`}>View on GitHub <Icon name="external" size={16} /></a> : <span className="mt-6 inline-flex w-fit items-center rounded-full border border-dashed border-white/10 px-4 py-2 text-sm text-zinc-600">{project.status ?? 'Coming soon'}</span>}</article>)}</div></div></section>

      <section id="experience" className="border-t border-white/5 bg-white/[.015] px-5 py-28 lg:px-8"><div className="mx-auto max-w-6xl"><Heading n="04" label="Experience & Education" title="Building the foundation." /><div className="grid gap-5 lg:grid-cols-2"><article className="rounded-3xl border border-white/8 bg-[#0d0f14] p-8"><Icon name="briefcase" size={24} className="mb-7 text-indigo-400" /><h3 className="text-2xl font-bold">SIWES — Teebiz Technologies Limited</h3><p className="mt-2 text-sm text-zinc-500">Industrial Training • 2026</p><p className="mt-6 leading-7 text-zinc-400">Hands-on exposure to professional software development workflows, web technologies and practical technology projects as part of my industrial training.</p></article><article className="rounded-3xl border border-white/8 bg-[#0d0f14] p-8"><Icon name="graduation" size={24} className="mb-7 text-indigo-400" /><h3 className="text-2xl font-bold">Computer Science</h3><p className="mt-2 text-sm text-zinc-500">Vision University • Undergraduate</p><p className="mt-6 leading-7 text-zinc-400">Building a broad foundation across programming, data structures, software development, computer architecture, databases, networking and modern computing.</p></article></div></div></section>

      <section id="contact" className="border-t border-white/5 px-5 py-28 lg:px-8"><div className="mx-auto max-w-6xl rounded-[2rem] border border-white/8 bg-gradient-to-br from-indigo-500/10 to-transparent p-8 sm:p-14"><p className="mb-3 text-sm font-semibold uppercase tracking-[.25em] text-indigo-400">05 — Contact</p><h2 className="max-w-3xl text-4xl font-bold tracking-tight sm:text-6xl">Have an idea worth building?</h2><p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400">I'm open to internships, freelance opportunities, collaborations and interesting frontend projects.</p><div className="mt-8 flex flex-wrap gap-3"><a href={githubUrl} target="_blank" rel="noopener noreferrer" className={`${focus} inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-black transition hover:bg-zinc-200`}><GithubIcon /> GitHub</a><a href={`mailto:${email}`} className={`${focus} inline-flex items-center gap-2 rounded-full border border-white/10 px-6 py-3 font-semibold text-zinc-200 transition hover:border-white/25 hover:bg-white/5`}><Icon name="mail" size={17} /> {email}</a></div></div></section>
    </main>

    <footer className="border-t border-white/5 px-5 py-8 lg:px-8"><div className="mx-auto flex max-w-6xl flex-col justify-between gap-5 text-sm text-zinc-500 sm:flex-row sm:items-center"><p>© {new Date().getFullYear()} Okorie Tochukwu Solomon. Built with React.</p><a href={githubUrl} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className={`${focus} transition hover:text-white`}><GithubIcon /></a></div></footer>
  </div>
}

export default App
