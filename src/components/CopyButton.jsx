import { useState } from 'react'

async function copyText(text) {
  try {
    await navigator.clipboard.writeText(text)
    return true
  } catch {
    // Fallback for non-secure contexts (e.g. opened from file:// or plain http on a LAN).
    const ta = document.createElement('textarea')
    ta.value = text
    ta.setAttribute('readonly', '')
    ta.style.position = 'fixed'
    ta.style.opacity = '0'
    document.body.appendChild(ta)
    ta.select()
    let ok = false
    try { ok = document.execCommand('copy') } catch { ok = false }
    document.body.removeChild(ta)
    return ok
  }
}

export default function CopyButton({ text, label = 'Copy' }) {
  const [state, setState] = useState('idle')
  const onClick = async () => {
    const ok = await copyText(text)
    setState(ok ? 'done' : 'fail')
    setTimeout(() => setState('idle'), 1600)
  }
  return (
    <button type="button" className={`copy-btn ${state}`} onClick={onClick} aria-label={`${label}: ${text}`}>
      {state === 'done' ? 'Copied' : state === 'fail' ? 'Select & copy' : label}
    </button>
  )
}
