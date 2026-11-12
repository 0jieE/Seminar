import { useMemo, useState } from 'react'
import { cli } from '../content.js'
import CopyButton from './CopyButton.jsx'

export default function CommandReference() {
  const [q, setQ] = useState('')
  const groups = useMemo(() => {
    const needle = q.trim().toLowerCase()
    return cli.map((g) => ({
      ...g,
      rows: needle ? g.rows.filter(([c, d]) => `${c} ${d}`.toLowerCase().includes(needle)) : g.rows,
    }))
  }, [q])
  const count = groups.reduce((n, g) => n + g.rows.length, 0)

  return (
    <div className="cmdref">
      <div className="search">
        <input
          type="search"
          placeholder="Search commands, e.g. resume, plan, model"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          aria-label="Search commands"
        />
        <span className="search-count">{count} {count === 1 ? 'command' : 'commands'}</span>
      </div>

      <div className="cmd-groups">
        {groups.map((g) => g.rows.length > 0 && (
          <section key={g.id} className="cmd-group">
            <header>
              <h3>{g.title}</h3>
              <p>{g.blurb}</p>
            </header>
            <ul>
              {g.rows.map(([cmd, desc, danger]) => (
                <li key={cmd} className={danger ? 'danger' : ''}>
                  <code>{cmd}</code>
                  <span className="desc">{desc}</span>
                  <CopyButton text={cmd.replace(/\s+\(or .*\)$/, '').trim()} />
                </li>
              ))}
            </ul>
            {g.id === 'permissions' && (
              <div className="callout warn">
                <strong>Warning:</strong> with <code>--dangerously-skip-permissions</code>, Claude can delete files, install
                packages, or push to git without asking. Use it only in a git-committed project folder or a sandbox.
              </div>
            )}
          </section>
        ))}
        {count === 0 && <p className="empty">No commands match “{q}”.</p>}
      </div>

      <p className="hint">
        Tips: type <code>/</code> inside a session to see the full menu. <kbd>Shift</kbd>+<kbd>Tab</kbd> cycles permission modes.
      </p>
    </div>
  )
}
