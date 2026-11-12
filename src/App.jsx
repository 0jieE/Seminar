import { useEffect, useState } from 'react'
import SlideViewer from './components/SlideViewer.jsx'
import CommandReference from './components/CommandReference.jsx'
import CopyButton from './components/CopyButton.jsx'
import {
  meta, schedule, terms, layers, architectures, frameworks, fiveQuestions, checklist,
  quickMatch, activity, mistakes, recap, install, downloads, claudeDocs,
} from './content.js'

const NAV = [
  ['schedule', 'Schedule'],
  ['slides', 'Slides'],
  ['ideas', 'Key ideas'],
  ['setup', 'Setup'],
  ['commands', 'Commands'],
  ['resources', 'Resources'],
]

function useTheme() {
  const [theme, setTheme] = useState(() => {
    try { return localStorage.getItem('theme') || '' } catch { return '' }
  })
  useEffect(() => {
    const root = document.documentElement
    if (theme) root.setAttribute('data-theme', theme)
    else root.removeAttribute('data-theme')
    try { theme ? localStorage.setItem('theme', theme) : localStorage.removeItem('theme') } catch { /* ignore */ }
  }, [theme])
  const toggle = () => {
    const isDark = theme
      ? theme === 'dark'
      : window.matchMedia('(prefers-color-scheme: dark)').matches
    setTheme(isDark ? 'light' : 'dark')
  }
  return toggle
}

function Section({ id, eyebrow, title, lead, children }) {
  return (
    <section id={id} className="section">
      <div className="wrap">
        <header className="section-head">
          {eyebrow && <p className="eyebrow">{eyebrow}</p>}
          <h2>{title}</h2>
          {lead && <p className="lead">{lead}</p>}
        </header>
        {children}
      </div>
    </section>
  )
}

function Layers() {
  return (
    <svg className="hero-art" viewBox="0 0 360 380" aria-hidden="true">
      <defs>
        <linearGradient id="lyr" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#fff" stopOpacity=".28" />
          <stop offset="1" stopColor="#fff" stopOpacity=".08" />
        </linearGradient>
      </defs>
      <g stroke="#fff" strokeOpacity=".55" strokeWidth="1.2" fill="url(#lyr)">
        <path d="M180 270 320 320 180 370 40 320Z" />
        <path d="M180 160 320 210 180 260 40 210Z" />
        <path d="M180 50 320 100 180 150 40 100Z" />
      </g>
      <path d="M40 100v220M320 100v220" stroke="#fff" strokeOpacity=".35" strokeDasharray="4 5" />
      <path d="M120 96 180 75 240 96 180 117Z" fill="#ffc86b" fillOpacity=".75" />
      <g stroke="#5eead4" strokeWidth="6" strokeLinecap="round"><path d="M110 205l40-14M130 215l48-17M150 226l36-13" /></g>
      <path d="M120 320 180 299 240 320 180 341Z" fill="none" stroke="#f9a8d4" strokeWidth="1.5" />
      <path d="M150 309l60 22M150 331l60-22" stroke="#f9a8d4" strokeOpacity=".7" />
      <g fontFamily="Inter Variable, Inter, sans-serif" fontSize="13" fontWeight="600" fill="#fff">
        <text x="250" y="40">Frontend</text>
        <text x="270" y="158">Backend / API</text>
        <text x="260" y="268">Database</text>
      </g>
    </svg>
  )
}

export default function App() {
  const [slideIndex, setSlideIndex] = useState(0)
  const toggleTheme = useTheme()

  const openSlide = (n) => {
    setSlideIndex(n - 1)
    document.getElementById('slides')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <a className="skip" href="#main">Skip to content</a>
      <nav className="topnav" aria-label="Sections">
        <div className="wrap topnav-inner">
          <a href="#top" className="brand">
            <img src="./favicon.svg" alt="" width="24" height="24" />
            <span>Frameworks &amp; AI Agents</span>
          </a>
          <div className="nav-links">
            {NAV.map(([id, label]) => <a key={id} href={`#${id}`}>{label}</a>)}
          </div>
          <button type="button" className="theme-btn" onClick={toggleTheme} aria-label="Toggle dark mode">
            <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><path fill="currentColor" d="M12 3a9 9 0 1 0 9 9 7 7 0 0 1-9-9Z" /></svg>
          </button>
        </div>
      </nav>

      <header id="top" className="hero">
        <div className="wrap hero-inner">
          <div className="hero-copy">
            <p className="pill">Seminar · {meta.date}</p>
            <h1>Software Frameworks and <em>AI Agents</em> in Modern Development</h1>
            <p className="hero-sub">{meta.tagline}</p>
            <div className="hero-parts">
              <a href="#schedule" className="part">
                <span className="part-tag">Part 1 · Morning</span>
                <strong>Frameworks</strong>
                <span>8:00 AM – 12:00 PM</span>
              </a>
              <a href="#setup" className="part">
                <span className="part-tag">Part 2 · Afternoon</span>
                <strong>Building with Claude Code</strong>
                <span>Plan · Build · Test · Verify</span>
              </a>
            </div>
            <div className="hero-cta">
              <a className="btn primary" href="#slides">View the slides</a>
              <a className="btn" href="#resources">Download resources</a>
            </div>
          </div>
          <Layers />
        </div>
      </header>

      <main id="main">
        <div className="bigq">
          <div className="wrap">
            <p className="eyebrow">The one question guiding the morning</p>
            <p className="bigq-text">How do we choose the right development tool for the problem?</p>
            <p className="bigq-goal">Goal: make informed decisions, not memorize a list of trendy technologies.</p>
          </div>
        </div>

        <Section id="schedule" eyebrow="Program" title="Today’s schedule" lead="A guided journey from foundations to practical decisions, then hands-on building with an AI agent.">
          <div className="schedule">
            <div className="card">
              <h3 className="card-title">Part 1 · Frameworks <span className="muted">8:00–12:00</span></h3>
              <ol className="timeline">
                {schedule.morning.map((s) => (
                  <li key={s.time} className={s.isBreak ? 'is-break' : ''}>
                    <span className="t">{s.time}</span>
                    <div>
                      <strong>{s.label}</strong>
                      <span className="muted">{s.note}</span>
                    </div>
                    <button type="button" className="link-btn" onClick={() => openSlide(s.slide)}>Slide {s.slide} →</button>
                  </li>
                ))}
              </ol>
            </div>
            <div className="card afternoon">
              <h3 className="card-title">Part 2 · Building the app with Claude Code <span className="muted">After lunch</span></h3>
              <p className="muted small">From requirements to a working app. You lead, the AI agent builds, you verify.</p>
              <ol className="steps">
                {schedule.afternoon.map((s, i) => (
                  <li key={s.step}>
                    <span className="step-n">{i + 1}</span>
                    <strong>{s.step}</strong>
                    <span>{s.text}</span>
                  </li>
                ))}
              </ol>
              <div className="roles">
                <span><b>You</b> decide the architecture</span>
                <span className="arrow">→</span>
                <span><b>AI agent</b> helps implement</span>
                <span className="arrow">→</span>
                <span><b>You</b> verify the result</span>
              </div>
            </div>
          </div>
        </Section>

        <Section id="slides" eyebrow="Deck" title="Slides" lead="All 38 slides from today’s session. Download the original deck under Resources.">
          <SlideViewer index={slideIndex} setIndex={setSlideIndex} />
        </Section>

        <Section id="ideas" eyebrow="Study notes" title="Key ideas" lead="The core concepts from the morning, in one place for review.">
          <h3 className="sub">Framework ≠ library ≠ runtime ≠ language</h3>
          <div className="grid4">
            {terms.map((t) => (
              <div key={t.kind} className="card term">
                <p className="term-kind">{t.kind}</p>
                <p className="term-def">{t.def}</p>
                <div className="tags">{t.ex.map((e) => <span key={e} className="tag">{e}</span>)}</div>
              </div>
            ))}
          </div>
          <p className="note">Quick check: <b>Python</b> is a language, <b>Node.js</b> a runtime, <b>React</b> a UI library, <b>Django</b> a web framework.</p>

          <h3 className="sub">Where does each framework fit?</h3>
          <div className="layers">
            {layers.map((l, i) => (
              <div key={l.name} className={`card layer layer-${i}`}>
                <p className="term-kind">{l.name}</p>
                <p className="term-def">{l.role}</p>
                <p className="layer-tools">{l.tools}</p>
              </div>
            ))}
          </div>
          <div className="grid3 arch">
            {architectures.map((a) => (
              <div key={a.id} className="card">
                <p className="arch-id">{a.id}</p>
                <strong>{a.name}</strong>
                <p className="muted small">{a.text}</p>
                <p className="mono small">{a.stack}</p>
              </div>
            ))}
          </div>
          <p className="note">Choose architecture complexity based on the project, not what looks impressive.</p>

          <h3 className="sub">Framework atlas</h3>
          <div className="atlas">
            {frameworks.map((f) => (
              <div key={f.name} className="card fw">
                <div className="fw-head">
                  <span className="fw-abbr" aria-hidden="true">{f.abbr}</span>
                  <div>
                    <strong>{f.name}</strong>
                    <span className="muted small">{f.lang}</span>
                  </div>
                </div>
                <p className="fw-role">{f.role}</p>
                <p className="small">Best fit: {f.fit}</p>
                <div className="fw-links">
                  <button type="button" className="link-btn" onClick={() => openSlide(f.slide)}>Slide {f.slide}</button>
                  <a href={f.url} target="_blank" rel="noreferrer">Docs ↗</a>
                </div>
              </div>
            ))}
          </div>
          <p className="note">An introduction to representative tools, not an exhaustive ranking. Selection depends on team and requirements.</p>

          <div className="two-col">
            <div>
              <h3 className="sub">Ask five questions before choosing</h3>
              <ol className="questions">
                {fiveQuestions.map((q) => (
                  <li key={q.q}><strong>{q.q}</strong><span className="muted">{q.hint}</span></li>
                ))}
              </ol>
            </div>
            <div>
              <h3 className="sub">Framework-selection checklist</h3>
              <ul className="weights">
                {checklist.map((c) => (
                  <li key={c.label}>
                    <div className="weight-row"><span>{c.label}</span><b>{c.weight}%</b></div>
                    <div className="bar"><span style={{ width: `${c.weight * 4}%` }} /></div>
                  </li>
                ))}
              </ul>
              <p className="note">Weights are an illustrative teaching example. Adjust them for each organization.</p>
            </div>
          </div>

          <h3 className="sub">Quick match: what would you consider?</h3>
          <div className="grid4">
            {quickMatch.map((m) => (
              <details key={m.project} className="card reveal">
                <summary>{m.project}<span className="muted small">Tap to reveal</span></summary>
                <p>{m.answer}</p>
              </details>
            ))}
          </div>

          <div className="activity">
            <p className="eyebrow light">Group activity · 10 minutes</p>
            <h3>{activity.brief}</h3>
            <ul>{activity.needs.map((n) => <li key={n}>{n}</li>)}</ul>
            <p className="activity-task">{activity.task}</p>
          </div>

          <div className="two-col">
            <div>
              <h3 className="sub">Common mistakes to avoid</h3>
              <ul className="mistakes">
                {mistakes.map((m) => <li key={m.name}><strong>{m.name}</strong><span className="muted">{m.text}</span></li>)}
              </ul>
            </div>
            <div>
              <h3 className="sub">Takeaway: match the tool to the task</h3>
              <ol className="recap">{recap.map((r) => <li key={r}>{r}</li>)}</ol>
            </div>
          </div>
        </Section>

        <Section id="setup" eyebrow="Part 2 prep" title="Install Claude Code" lead="Run the installer for your system, then check that everything works before the afternoon build.">
          <div className="setup">
            <ol className="setup-steps">
              <li>
                <h3>1 · Install</h3>
                {install.platforms.map((p) => (
                  <div key={p.id} className="cmd-block">
                    <p className="cmd-label">{p.label}</p>
                    <div className="cmd-line"><code>{p.cmd}</code><CopyButton text={p.cmd} /></div>
                  </div>
                ))}
              </li>
              <li>
                <h3>2 · Verify</h3>
                {install.verify.map((v) => (
                  <div key={v.cmd} className="cmd-block">
                    <p className="cmd-label">{v.text}</p>
                    <div className="cmd-line"><code>{v.cmd}</code><CopyButton text={v.cmd} /></div>
                  </div>
                ))}
              </li>
              <li>
                <h3>3 · First session</h3>
                {install.firstRun.map((v) => (
                  <div key={v.cmd} className="cmd-block">
                    <p className="cmd-label">{v.text}</p>
                    <div className="cmd-line"><code>{v.cmd}</code><CopyButton text={v.cmd} /></div>
                  </div>
                ))}
              </li>
            </ol>
            <p className="note">Remember: the AI agent speeds up the work, but you decide what the system must do and check that it actually does it.</p>
          </div>
        </Section>

        <Section id="commands" eyebrow="Cheat sheet" title="Claude Code CLI commands" lead="Terminal commands are typed before Claude starts; slash commands are typed inside a session.">
          <CommandReference />
        </Section>

        <Section id="resources" eyebrow="Take-home" title="Resources" lead="Everything from today’s session, plus official documentation to keep learning.">
          <div className="downloads">
            {downloads.map((d) => (
              <a key={d.file} className="card download" href={d.file} download>
                <span className={`file-kind k-${d.kind.toLowerCase()}`}>{d.kind}</span>
                <span className="dl-text"><strong>{d.name}</strong><span className="muted small">{d.detail}</span></span>
                <span className="dl-icon" aria-hidden="true">↓</span>
              </a>
            ))}
          </div>

          <div className="two-col">
            <div>
              <h3 className="sub">Framework documentation</h3>
              <ul className="links">
                {frameworks.map((f) => (
                  <li key={f.name}><a href={f.url} target="_blank" rel="noreferrer"><strong>{f.name}</strong><span className="mono small">{f.host}</span></a></li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="sub">Claude Code documentation</h3>
              <ul className="links">
                {claudeDocs.map((d) => (
                  <li key={d.url}><a href={d.url} target="_blank" rel="noreferrer"><strong>{d.name}</strong><span className="mono small">{d.host}</span></a></li>
                ))}
              </ul>
              <p className="note">Framework recommendations are illustrative. Re-check project constraints, maintained versions, security advisories, and documentation before implementation.</p>
            </div>
          </div>
        </Section>
      </main>

      <footer className="footer">
        <div className="wrap">
          <p><strong>{meta.title}</strong></p>
          <p className="muted small">{meta.tagline}</p>
        </div>
      </footer>
    </>
  )
}
