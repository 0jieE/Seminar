// All content below comes from the seminar deck, the Claude Code CLI commands sheet,
// and the installation notes. Edit here to update the site.

export const meta = {
  title: 'Software Frameworks and AI Agents in Modern Development',
  tagline: 'From Choosing the Right Framework to Building with Claude Code',
  date: 'November 12, 2026',
}

export const schedule = {
  morning: [
    { time: '08:00–08:30', label: 'Why frameworks matter', note: 'The big idea · warm-up', slide: 2 },
    { time: '08:30–09:30', label: 'Frameworks, libraries, and architecture', note: 'Foundations', slide: 5 },
    { time: '09:30–10:30', label: 'Framework tour across languages', note: 'JavaScript · Python · Java · PHP · Dart', slide: 14 },
    { time: '10:30–10:45', label: 'Break', note: '15 minutes', slide: 28, isBreak: true },
    { time: '10:45–12:00', label: 'Selecting a framework + activity', note: 'Requirements first', slide: 29 },
  ],
  afternoon: [
    { step: 'Plan', text: 'Describe the requirements clearly and let Claude help plan.' },
    { step: 'Build', text: 'The agent scaffolds files and implements features.' },
    { step: 'Test', text: 'Run the app and the tests.' },
    { step: 'Verify', text: 'Review what was built. You are still the tech lead.' },
  ],
}

export const terms = [
  { kind: 'Language', def: 'The syntax you write', ex: ['Python', 'JavaScript', 'Java', 'PHP', 'Dart'] },
  { kind: 'Runtime', def: 'The environment executing your code', ex: ['Node.js', 'JVM', 'Python interpreter'] },
  { kind: 'Library', def: 'Reusable functionality you call', ex: ['React', 'NumPy', 'Axios'] },
  { kind: 'Framework', def: 'Conventions and structure shaping the application', ex: ['Django', 'Vue', 'Spring Boot', 'Flutter'] },
]

export const layers = [
  { name: 'Frontend', role: 'What people see and interact with', tools: 'Vue · React · Next.js UI' },
  { name: 'Backend / API', role: 'Rules, authentication, integrations', tools: 'Django · Express · FastAPI' },
  { name: 'Database', role: 'Stores application data', tools: 'PostgreSQL · MySQL · SQLite' },
]

export const architectures = [
  { id: 'A', name: 'Monolith', text: 'UI, business logic and database integration in one application.', stack: 'Django · Laravel' },
  { id: 'B', name: 'Separated web', text: 'A frontend application talks to an API over HTTP.', stack: 'Vue/React + FastAPI/Django' },
  { id: 'C', name: 'Mobile + API', text: 'A mobile app communicates with a server API.', stack: 'Flutter + Django/Express' },
]

export const frameworks = [
  { abbr: 'Vu', name: 'Vue', lang: 'JavaScript', role: 'Frontend', fit: 'Interactive web interfaces', slide: 17, url: 'https://vuejs.org/guide/introduction', host: 'vuejs.org' },
  { abbr: 'Nx', name: 'Next.js', lang: 'JavaScript / TypeScript', role: 'React full-stack', fit: 'Full-stack React web apps', slide: 18, url: 'https://nextjs.org/docs', host: 'nextjs.org/docs' },
  { abbr: 'Ex', name: 'Express', lang: 'JavaScript / Node.js', role: 'Backend / API', fit: 'Lightweight HTTP APIs', slide: 19, url: 'https://expressjs.com', host: 'expressjs.com' },
  { abbr: 'Dj', name: 'Django', lang: 'Python', role: 'Web application', fit: 'Database-driven web systems', slide: 21, url: 'https://docs.djangoproject.com', host: 'docs.djangoproject.com' },
  { abbr: 'FA', name: 'FastAPI', lang: 'Python', role: 'API services', fit: 'REST APIs and model-serving services', slide: 22, url: 'https://fastapi.tiangolo.com', host: 'fastapi.tiangolo.com' },
  { abbr: 'SB', name: 'Spring Boot', lang: 'Java', role: 'Backend services', fit: 'Enterprise and large backend services', slide: 24, url: 'https://docs.spring.io/spring-boot', host: 'docs.spring.io/spring-boot' },
  { abbr: 'Lv', name: 'Laravel', lang: 'PHP', role: 'Web applications', fit: 'Business web applications', slide: 25, url: 'https://laravel.com/docs', host: 'laravel.com/docs' },
  { abbr: 'Fl', name: 'Flutter', lang: 'Dart', role: 'Mobile + multi-platform', fit: 'Cross-platform apps', slide: 26, url: 'https://docs.flutter.dev', host: 'docs.flutter.dev' },
]

export const fiveQuestions = [
  { q: 'What are we building?', hint: 'Website, admin system, API, mobile app?' },
  { q: 'Who will use it?', hint: 'Users, devices, accessibility, connectivity?' },
  { q: 'What must it do?', hint: 'Auth, records, payments, realtime, offline?' },
  { q: 'What can our team sustain?', hint: 'Skills, documentation, time, hiring?' },
  { q: 'How will it run?', hint: 'Hosting, cost, security, maintenance?' },
]

export const checklist = [
  { label: 'Project requirements', weight: 25 },
  { label: 'Team experience', weight: 20 },
  { label: 'Ecosystem & support', weight: 20 },
  { label: 'Maintenance & security', weight: 20 },
  { label: 'Deployment / cost', weight: 15 },
]

export const quickMatch = [
  { project: 'Student grading portal', answer: 'Django or Laravel' },
  { project: 'AI model prediction API', answer: 'FastAPI (or another API framework)' },
  { project: 'Interactive admin dashboard', answer: 'Vue / React + backend' },
  { project: 'Cross-platform attendance app', answer: 'Flutter + API' },
]

export const activity = {
  brief: 'You are the tech lead. A small community clinic wants:',
  needs: [
    'A patient appointment website',
    'Staff accounts and scheduling',
    'A mobile-friendly interface',
    'Low-cost hosting and easy maintenance',
  ],
  task: 'Choose a stack. Explain 3 reasons + 1 trade-off.',
}

export const mistakes = [
  { name: 'Choosing by hype', text: '“It is trending, so it must be best.”' },
  { name: 'Overengineering', text: 'Building several services for a tiny project.' },
  { name: 'Ignoring team skills', text: 'A tool nobody can maintain later.' },
  { name: 'Forgetting deployment', text: 'A stack too expensive or difficult to host.' },
  { name: 'Treating AI output as truth', text: 'Generated architecture still needs review.' },
]

export const recap = [
  'Start with requirements.',
  'Separate language, runtime, library, framework.',
  'Know frontend, backend, and mobile responsibilities.',
  'Evaluate skills, hosting, and maintenance.',
  'Explain your trade-offs.',
]

export const install = {
  platforms: [
    { id: 'win', label: 'Windows (PowerShell)', cmd: 'irm https://claude.ai/install.ps1 | iex' },
    { id: 'unix', label: 'macOS / Linux / WSL', cmd: 'curl -fsSL https://claude.ai/install.sh | bash' },
  ],
  verify: [
    { cmd: 'claude --version', text: 'Confirm it installed and see the version' },
    { cmd: 'claude doctor', text: 'Check your installation for problems' },
  ],
  firstRun: [
    { cmd: 'cd my-project', text: 'Open a terminal in your project folder' },
    { cmd: 'claude', text: 'Start a session (sign in when asked)' },
    { cmd: '/init', text: 'Create a CLAUDE.md that describes the project' },
  ],
}

export const cli = [
  {
    id: 'terminal',
    title: 'Terminal commands',
    blurb: 'Typed in your shell, before Claude starts.',
    rows: [
      ['claude', 'Start a new session'],
      ['claude "explain this project"', 'Start a new session with a first prompt'],
      ['claude -c', 'Continue your most recent session in this folder'],
      ['claude -r', 'Pick an old session to resume'],
      ['claude -r "name"', 'Resume a session by name or ID'],
      ['claude -n "my-task"', 'Start a session with a name (easier to resume later)'],
      ['claude -p "query"', 'Answer once and exit (no chat)'],
      ['claude --model opus', 'Start with a specific model'],
      ['claude update', 'Update to the latest version'],
      ['claude install', 'Install or switch to the native version'],
      ['claude doctor', 'Check your installation'],
      ['claude -v', 'Show version'],
      ['claude auth login', 'Sign in'],
      ['claude auth logout', 'Sign out'],
    ],
  },
  {
    id: 'slash',
    title: 'Slash commands',
    blurb: 'Typed inside a Claude Code session.',
    rows: [
      ['/clear  (or /new)', 'Start a fresh conversation without leaving'],
      ['/resume', 'Switch to an earlier conversation'],
      ['/rename', 'Name the current session'],
      ['/compact', 'Summarize the chat to free up context'],
      ['/context', 'See how full the context window is'],
      ['/model', 'Switch model'],
      ['/effort', 'Set reasoning level (low to max)'],
      ['/plan', 'Enter plan mode before big changes'],
      ['/init', 'Create a CLAUDE.md for the project'],
      ['/memory', 'Edit CLAUDE.md'],
      ['/diff', 'See what changed'],
      ['/rewind', 'Undo code/chat back to a checkpoint'],
      ['/code-review', 'Review your current changes for bugs'],
      ['/skills', 'List your skills'],
      ['/plugin', 'Manage plugins'],
      ['/mcp', 'Manage MCP servers'],
      ['/permissions', 'Set what Claude can do without asking'],
      ['/usage', 'See cost and plan limits'],
      ['/status', 'Version, model, account'],
      ['/doctor', 'Run a setup checkup that can apply fixes'],
      ['/help', 'Show all commands'],
      ['/exit', 'Quit'],
    ],
  },
  {
    id: 'permissions',
    title: 'Permission modes',
    blurb: 'Control how much Claude may do without asking.',
    rows: [
      ['claude --permission-mode plan', 'Start in plan mode (read and plan only, no edits)'],
      ['claude --permission-mode acceptEdits', 'Auto-accepts file edits, still asks before shell commands'],
      ['claude --permission-mode auto', 'Safer middle ground: Claude decides what is safe to run, still blocks risky actions'],
      ['claude --allow-dangerously-skip-permissions', 'Start normally, but add bypass mode to Shift+Tab so you can switch into it later'],
      ['claude --dangerously-skip-permissions', 'Start with all permission prompts skipped (same as --permission-mode bypassPermissions)', true],
      ['claude -c --dangerously-skip-permissions', 'Continue last session with prompts skipped', true],
    ],
  },
]

export const downloads = [
  {
    file: 'resources/Software-Frameworks-and-AI-Agents.pptx',
    name: 'Seminar slide deck',
    detail: 'PowerPoint · 38 slides · 14.9 MB',
    kind: 'PPTX',
  },
  {
    file: 'resources/Claude-Code-CLI-Commands.docx',
    name: 'Claude Code CLI commands',
    detail: 'Word · quick reference sheet',
    kind: 'DOCX',
  },
  {
    file: 'resources/claude-installation.txt',
    name: 'Claude Code installation notes',
    detail: 'Plain text · install + verify commands',
    kind: 'TXT',
  },
]

export const claudeDocs = [
  { name: 'CLI reference', url: 'https://code.claude.com/docs/en/cli-reference', host: 'code.claude.com/docs/en/cli-reference' },
  { name: 'Commands', url: 'https://code.claude.com/docs/en/commands', host: 'code.claude.com/docs/en/commands' },
]
