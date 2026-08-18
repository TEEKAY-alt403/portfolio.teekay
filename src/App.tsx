import { useState } from 'react'
import {
  ArrowDown,
  ArrowUpRight,
  Code2,
  Github,
  Linkedin,
  Mail,
  Menu,
  Sparkles,
  X,
} from 'lucide-react'

const skills = ['HTML', 'CSS', 'JavaScript', 'React', 'TypeScript', 'Git & GitHub', 'Responsive Design', 'WordPress']

const projects = [
  {
    title: 'UnlockHub',
    type: 'SaaS Dashboard',
    description: 'A polished account-management dashboard concept with authentication flows, access states, tools, activity tracking and premium features.',
    stack: ['React', 'TypeScript', 'Tailwind'],
  },
  {
    title: 'E-commerce Store',
    type: 'Frontend Application',
    description: 'A responsive storefront focused on product discovery, routing, shopping-cart interactions, forms and a clean customer experience.',
    stack: ['React', 'JavaScript', 'CSS'],
  },
  {
    title: 'Portfolio Website',
    type: 'Personal Brand',
    description: 'This portfolio — built to showcase practical frontend engineering, thoughtful UI decisions and real project work.',
    stack: ['React', 'TypeScript', 'Tailwind'],
  },
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#08090c] text-zinc-100">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-[#08090c]/80 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 lg:px-8" aria-label="Main navigation">
          <a href="#home" className="text-lg font-black tracking-tight" onClick={closeMenu}>
            T<span className="text-indigo-400">.</span>
          </a>
          <div className="hidden items-center gap-8 text-sm text-zinc-400 md:flex">
            {['About', 'Skills', 'Projects', 'Contact'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="transition hover:text-white">{item}</a>
            ))}
          </div>
          <a href="#contact" className="hidden rounded-full bg-white px-5 py-2 text-sm font-semibold text-black transition hover:bg-zinc-200 md:block">Let's talk</a>
          <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>
        {menuOpen && (
          <div className="border-t border-white/5 px-5 pb-5 md:hidden">
            {['About', 'Skills', 'Projects', 'Contact'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} onClick={closeMenu} className="block py-3 text-zinc-300">{item}</a>
            ))}
          </div>
        )}
      </header>

      <main>
        <section id="home" className="grid-bg relative flex min-h-screen items-center px-5 pt-24 lg:px-8">
          <div className="absolute left-1/2 top-1/3 h-80 w-80 -translate-x-1/2 rounded-full bg-indigo-500/10 blur-[120px]" />
          <div className="mx-auto grid w-full max-w-6xl gap-12 py-20 lg:grid-cols-[1.2fr_.8fr] lg:items-center">
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[.03] px-4 py-2 text-sm text-zinc-300">
                <span className="h-2 w-2 rounded-full bg-emerald-400" /> Available for opportunities
              </div>
              <p className="mb-4 text-sm font-semibold uppercase tracking-[.25em] text-indigo-400">Frontend Developer</p>
              <h1 className="max-w-4xl text-5xl font-black leading-[.95] tracking-[-.05em] sm:text-7xl lg:text-8xl">
                I build digital experiences that <span className="text-zinc-500">feel right.</span>
              </h1>
              <p className="mt-8 max-w-2xl text-lg leading-8 text-zinc-400">
                I'm Teekay, a Computer Science student and frontend developer focused on turning ideas into responsive, accessible and polished web interfaces.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <a href="#projects" className="inline-flex items-center gap-2 rounded-full bg-indigo-500 px-6 py-3 font-semibold text-white transition hover:bg-indigo-400">View my work <ArrowDown size={17} /></a>
                <a href="#contact" className="inline-flex items-center gap-2 rounded-full border border-white/10 px-6 py-3 font-semibold text-zinc-200 transition hover:border-white/25 hover:bg-white/5">Get in touch <ArrowUpRight size={17} /></a>
              </div>
            </div>
            <div className="relative hidden justify-center lg:flex">
              <div className="animate-float relative flex h-72 w-72 items-center justify-center rounded-[2rem] border border-white/10 bg-white/[.03] shadow-2xl shadow-indigo-950/40">
                <div className="absolute inset-5 rounded-[1.5rem] border border-indigo-400/20" />
                <Code2 size={92} strokeWidth={1} className="text-indigo-300" />
                <span className="absolute bottom-8 text-xs uppercase tracking-[.35em] text-zinc-500">Build • Learn • Ship</span>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="border-t border-white/5 px-5 py-28 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[.25em] text-indigo-400">01 — About</p>
            <div className="grid gap-10 lg:grid-cols-2">
              <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">Curious by nature.<br /><span className="text-zinc-500">Serious about craft.</span></h2>
              <div className="space-y-5 text-lg leading-8 text-zinc-400">
                <p>I enjoy the space where design and engineering meet — taking a rough idea, understanding the user behind it, and building an interface that is both useful and memorable.</p>
                <p>My Computer Science background gives me a strong foundation while hands-on projects keep me learning modern frontend patterns, deployment workflows and practical product development.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="border-t border-white/5 bg-white/[.015] px-5 py-28 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[.25em] text-indigo-400">02 — Skills</p>
            <h2 className="mb-10 text-4xl font-bold tracking-tight sm:text-5xl">Tools I use to bring ideas to life.</h2>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {skills.map((skill) => <div key={skill} className="rounded-2xl border border-white/8 bg-[#0d0f14] p-5 text-zinc-200 transition hover:-translate-y-1 hover:border-indigo-400/30">{skill}</div>)}
            </div>
          </div>
        </section>

        <section id="projects" className="border-t border-white/5 px-5 py-28 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="mb-12 flex items-end justify-between gap-6">
              <div><p className="mb-3 text-sm font-semibold uppercase tracking-[.25em] text-indigo-400">03 — Projects</p><h2 className="text-4xl font-bold tracking-tight sm:text-5xl">Selected work.</h2></div>
              <Sparkles className="hidden text-indigo-400 sm:block" />
            </div>
            <div className="grid gap-5 lg:grid-cols-3">
              {projects.map((project, index) => (
                <article key={project.title} className="group flex min-h-[390px] flex-col rounded-3xl border border-white/8 bg-[#0d0f14] p-7 transition duration-300 hover:-translate-y-2 hover:border-indigo-400/30">
                  <div className="flex items-center justify-between text-xs uppercase tracking-[.2em] text-zinc-500"><span>0{index + 1}</span><span>{project.type}</span></div>
                  <div className="mt-12 flex-1"><h3 className="text-2xl font-bold">{project.title}</h3><p className="mt-4 leading-7 text-zinc-400">{project.description}</p></div>
                  <div className="flex flex-wrap gap-2">{project.stack.map((item) => <span key={item} className="rounded-full bg-white/5 px-3 py-1 text-xs text-zinc-400">{item}</span>)}</div>
                  <button className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-indigo-300">View project <ArrowUpRight size={16} /></button>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="border-t border-white/5 px-5 py-28 lg:px-8">
          <div className="mx-auto max-w-6xl rounded-[2rem] border border-white/8 bg-gradient-to-br from-indigo-500/10 to-transparent p-8 sm:p-14">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[.25em] text-indigo-400">04 — Contact</p>
            <h2 className="max-w-3xl text-4xl font-bold tracking-tight sm:text-6xl">Have an idea worth building?</h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400">I'm open to internships, freelance opportunities, collaborations and interesting frontend projects.</p>
            <a href="mailto:hello@teekay.dev" className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-black transition hover:bg-zinc-200"><Mail size={17} /> Say hello</a>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/5 px-5 py-8 lg:px-8">
        <div className="mx-auto flex max-w-6xl flex-col justify-between gap-5 text-sm text-zinc-500 sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} Teekay. Built with React.</p>
          <div className="flex gap-4"><a href="https://github.com/TEEKAY-alt403" aria-label="GitHub" className="transition hover:text-white"><Github size={19} /></a><a href="#contact" aria-label="LinkedIn" className="transition hover:text-white"><Linkedin size={19} /></a></div>
        </div>
      </footer>
    </div>
  )
}

export default App
