import { useEffect, useRef, useState } from 'react'
import { slides } from '../slides.js'

const SECTIONS = [
  { id: 'intro', label: 'Welcome' },
  { id: 'foundations', label: '01 Foundations' },
  { id: 'tour', label: '02 Framework tour' },
  { id: 'choosing', label: '03 Choosing well' },
  { id: 'afternoon', label: 'Part 2 · Claude Code' },
]

const full = (n) => `./slides/full/slide-${String(n).padStart(2, '0')}.webp`
const thumb = (n) => `./slides/thumb/slide-${String(n).padStart(2, '0')}.webp`

export default function SlideViewer({ index, setIndex }) {
  const frameRef = useRef(null)
  const stripRef = useRef(null)
  const [showText, setShowText] = useState(false)
  const slide = slides[index]
  const total = slides.length

  const go = (i) => setIndex(Math.max(0, Math.min(total - 1, i)))

  // Arrow keys work anywhere on the page unless the user is typing.
  useEffect(() => {
    const onKey = (e) => {
      const tag = (e.target.tagName || '').toLowerCase()
      if (tag === 'input' || tag === 'textarea' || e.target.isContentEditable) return
      if (e.altKey || e.ctrlKey || e.metaKey) return
      if (e.key === 'ArrowRight' || e.key === 'PageDown') { e.preventDefault(); setIndex((i) => Math.min(total - 1, i + 1)) }
      if (e.key === 'ArrowLeft' || e.key === 'PageUp') { e.preventDefault(); setIndex((i) => Math.max(0, i - 1)) }
      if (e.key === 'f' || e.key === 'F') toggleFullscreen()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [setIndex, total])

  // Keep the active thumbnail visible without scrolling the page itself.
  useEffect(() => {
    const strip = stripRef.current
    const el = strip?.querySelector(`[data-n="${slide.n}"]`)
    if (strip && el) {
      const left = el.offsetLeft - strip.clientWidth / 2 + el.clientWidth / 2
      strip.scrollTo({ left, behavior: 'smooth' })
    }
    // Preload neighbours for instant navigation.
    ;[index - 1, index + 1].forEach((i) => {
      if (i >= 0 && i < total) { const img = new Image(); img.src = full(slides[i].n) }
    })
  }, [index, slide.n, total])

  const toggleFullscreen = () => {
    const el = frameRef.current
    if (!el) return
    if (document.fullscreenElement) document.exitFullscreen?.()
    else el.requestFullscreen?.()
  }

  return (
    <div className="viewer">
      <div className="chips" role="tablist" aria-label="Jump to section">
        {SECTIONS.map((s) => {
          const first = slides.findIndex((x) => x.section === s.id)
          return (
            <button
              key={s.id}
              type="button"
              role="tab"
              aria-selected={slide.section === s.id}
              className={`chip ${slide.section === s.id ? 'active' : ''}`}
              onClick={() => go(first)}
            >
              {s.label}
            </button>
          )
        })}
      </div>

      <div className="frame" ref={frameRef}>
        <img src={full(slide.n)} alt={slide.text} width="1920" height="1080" />
        <button type="button" className="nav-btn prev" onClick={() => go(index - 1)} disabled={index === 0} aria-label="Previous slide">‹</button>
        <button type="button" className="nav-btn next" onClick={() => go(index + 1)} disabled={index === total - 1} aria-label="Next slide">›</button>
      </div>

      <div className="viewer-bar">
        <div className="viewer-title">
          <span className="count">{String(slide.n).padStart(2, '0')} / {total}</span>
          <strong>{slide.title}</strong>
        </div>
        <div className="viewer-actions">
          <button type="button" className="ghost-btn" onClick={() => setShowText((v) => !v)} aria-expanded={showText}>
            {showText ? 'Hide slide text' : 'Slide text'}
          </button>
          <button type="button" className="ghost-btn" onClick={toggleFullscreen}>Fullscreen</button>
        </div>
      </div>
      {showText && <p className="slide-text">{slide.text}</p>}

      <div className="strip" ref={stripRef} aria-label="All slides">
        {slides.map((s, i) => (
          <button
            key={s.n}
            type="button"
            data-n={s.n}
            className={`thumb ${i === index ? 'active' : ''}`}
            onClick={() => go(i)}
            aria-label={`Slide ${s.n}: ${s.title}`}
            aria-current={i === index ? 'true' : undefined}
          >
            <img src={thumb(s.n)} alt="" loading="lazy" width="384" height="216" />
            <span>{s.n}</span>
          </button>
        ))}
      </div>
      <p className="hint">Tip: use ← → to move between slides, F for fullscreen.</p>
    </div>
  )
}
