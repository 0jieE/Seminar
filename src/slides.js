// Generated from the seminar deck (slide alt text). Speaker notes intentionally excluded.
export const slides = [
  {
    "n": 1,
    "title": "Software Frameworks and AI Agents",
    "section": "intro",
    "text": "Vue · React · Next.js Django · FastAPI · Express PostgreSQL · MySQL Seminar · Morning Software Frameworks and AI Agents in Modern Development From Choosing the Right Framework to Building with Claude Code NOVEMBER 10, 2026 PART 1: FRAMEWORKS 8:00 AM – 12:00 PM"
  },
  {
    "n": 2,
    "title": "The big idea",
    "section": "intro",
    "text": "The big idea One question guides this morning 8:00–8:30  How do we choose the right development tool for the problem?  01 Understand Explain what frameworks provide and where they fit.  02 Compare Recognize strengths and boundaries across languages.  03 Choose Defend a tool choice using the project’s needs.  Goal: make informed decisions — not memorize a list of trendy technologies."
  },
  {
    "n": 3,
    "title": "Morning roadmap",
    "section": "intro",
    "text": "Program Morning roadmap A guided journey from foundations to practical decisions 8:00–12:00  08:00–08:30 01 Why frameworks matter  08:30–09:30 02 Frameworks, libraries, and architecture  09:30–10:30 03 Framework tour across languages  10:30–10:45 — Break  10:45–12:00 04 Selecting a framework + activity"
  },
  {
    "n": 4,
    "title": "Quick audience check",
    "section": "intro",
    "text": "Warm-up · Show of hands Quick audience check Which of these have you already tried? 8:00–8:30  01 HTML/CSS/JavaScrip t  02 Python or Java  03 Built a website  04 Built a mobile app  05 Used a framework  06 Used AI for coding"
  },
  {
    "n": 5,
    "title": "What exactly is a framework?",
    "section": "foundations",
    "text": "01 Section 01 What exactly is a framework? Start with the problem before the tool. 01 · Foundations 02 · Framework tour 03 · Choosing well"
  },
  {
    "n": 6,
    "title": "A framework gives your project structure",
    "section": "foundations",
    "text": "Core concept A framework gives your project structure Like a building framework: you still design and construct the actual product. 8:30–9:30  Without framework Decide the folder structure Wire request handling Choose and connect modules Invent many conventions  With framework  Known project conventions  Reusable building blocks  Established integration patterns  Spend more time on your features"
  },
  {
    "n": 7,
    "title": "Why teams use frameworks",
    "section": "foundations",
    "text": "Reasoning Why teams use frameworks Most projects repeatedly solve the same kinds of problems. 8:30–9:30  ROUTING Where should a URL lead?  DATABASE How do we store and query data?  AUTH Who is allowed to do what?  VALIDATION Is the incoming data valid?  TESTING How do we verify behavior?  UI How do we compose screens?"
  },
  {
    "n": 8,
    "title": "Framework ≠ library ≠ runtime ≠ language",
    "section": "foundations",
    "text": "Important distinction Framework ≠ library ≠ runtime ≠ language These terms are related, but they solve different levels of the problem. 8:30–9:30  LANGUAGE The syntax you write Python JavaScript Java PHP Dart  RUNTIME The environment executing your code Node.js JVM Python interpreter  LIBRARY Reusable functionality you call React NumPy Axios  FRAMEWORK Conventions / structure shaping the application Django Vue Spring Boot Flutter"
  },
  {
    "n": 9,
    "title": "Where does each framework fit?",
    "section": "foundations",
    "text": "Application anatomy Where does each framework fit? A common web system has a user interface, application logic, and persistent data. 8:30–9:30  FRONTEND What people see and interact with Vue • React • Next.js UI  BACKEND / API Rules, authentication, integrations Django • Express • FastAPI  DATABASE Stores application data PostgreSQL • MySQL • SQLite  Real applications may combine or collapse these layers; this is a teaching model."
  },
  {
    "n": 10,
    "title": "Not every project needs the same shape",
    "section": "foundations",
    "text": "Architecture decisions Not every project needs the same shape Compare three valid starting architectures. 8:30–9:30 A MONOLITH UI Logic Data UI + business logic + database integration in one application Django • Laravel B SEPARATED WEB Frontend HTTP API Frontend application talks to an API over HTTP Vue/React + FastAPI/Django C MOBILE + API App Mobile app communicates with a server API Flutter + Django/Express  Choose architecture complexity based on the project, not what looks impressive."
  },
  {
    "n": 11,
    "title": "A framework has benefits — and costs",
    "section": "foundations",
    "text": "Trade-offs A framework has benefits — and costs Good engineering considers both sides of the decision. 8:30–9:30  WHAT YOU GAIN  Faster start with conventions  Reusable components and tooling  Community examples and ecosystem  More consistent team code vs  WHAT YOU ACCEPT  Learning curve and conventions  Dependencies and upgrades  Architecture constraints  Possible overhead for very small tasks"
  },
  {
    "n": 12,
    "title": "What “opinionated” means",
    "section": "foundations",
    "text": "Conventions What “opinionated” means Some frameworks make more architectural choices for you than others. 8:30–9:30 MORE FLEXIBLE MORE CONVENTIONS More choices to make e.g. Express e.g. Django More decisions provided upfront  Open kitchen Basic equipment; your team designs the workflow. More flexible — but more decisions and possible inconsistency.  Structured kitchen Defined stations and standards. Faster to coordinate — but you follow their methods. Illustrative continuum only — specific trade-offs depend on project design."
  },
  {
    "n": 13,
    "title": "Mini challenge: explain the difference",
    "section": "foundations",
    "text": "Audience check Mini challenge: explain the difference Tell your neighbor what each label means—in one sentence. 8:30–9:30  Pairs · 1–2 min Python Language Node.js Runtime React UI library Django Web framework"
  },
  {
    "n": 14,
    "title": "A tour of major frameworks",
    "section": "tour",
    "text": "02 JavaScript Python Java Dart PHP Section 02 A tour of major frameworks Different languages. Different strengths. Different contexts. 01 · Foundations 02 · Framework tour 03 · Choosing well"
  },
  {
    "n": 15,
    "title": "Framework atlas",
    "section": "tour",
    "text": "Overview Framework atlas An introduction to representative tools—not an exhaustive ranking. 9:30–10:30 Vu Vue JavaScript Frontend Nx Next.js JavaScript / TypeScript React full-stack Ex Express JavaScript / Node.js Backend / API Dj Django Python Web application FA FastAPI Python API services SB Spring Boot Java Backend services Lv Laravel PHP Web applications Fl Flutter Dart Mobile + multi-platform"
  },
  {
    "n": 16,
    "title": "The JavaScript family, untangled",
    "section": "tour",
    "text": "JavaScript ecosystem The JavaScript family, untangled One language can run in the browser and on the server. 9:30–10:30  IN THE BROWSER Vue UI framework React UI library  ON THE SERVER / FULL STACK Node.js Runtime (not a framework) Express Backend framework Next.js React full-stack framework"
  },
  {
    "n": 17,
    "title": "Vue.js",
    "section": "tour",
    "text": "JavaScript · Frontend framework Vue.js Interactive web interfaces 9:30–10:30  BEST FIT Interactive web interfaces  Approachable component model  Reactive data and templates  Can enhance existing web pages Selection depends on team + requirements ILLUSTRATIVE CODE · NOT A FULL APP <script setup> import { ref } from 'vue' const count = ref (0) </script> <template> <button @click= \"count++\" > {{ count }} </button> </template>"
  },
  {
    "n": 18,
    "title": "Next.js",
    "section": "tour",
    "text": "JavaScript / TypeScript · React framework Next.js Full-stack React web apps 9:30–10:30  BEST FIT Full-stack React web apps  Routing and rendering features  React-based UI components  Useful for sites needing server capabilities Selection depends on team + requirements ILLUSTRATIVE CODE · NOT A FULL APP // app/page.tsx export default function Home () { return ( <main> <h1> School Portal </h1> </main> ) }"
  },
  {
    "n": 19,
    "title": "Express.js",
    "section": "tour",
    "text": "JavaScript / Node.js · Backend web framework Express.js Lightweight HTTP APIs 9:30–10:30  BEST FIT Lightweight HTTP APIs  Routing and middleware  Flexible architecture choices  Good for small services and API backends Selection depends on team + requirements ILLUSTRATIVE CODE · NOT A FULL APP import express from 'express' const app = express () app. get ( '/api/tasks' , (req, res) => { res. json ([{ title: 'Study' }]) }) app. listen (3000)"
  },
  {
    "n": 20,
    "title": "Two approaches in Python",
    "section": "tour",
    "text": "Python ecosystem Two approaches in Python A more integrated web framework and an API-focused framework. 9:30–10:30  WEB APPLICATIONS Django Common built-ins for models, administration, authentication, forms, and templates. Useful when the system has many standard web- app requirements. Models Admin Auth Forms Templates vs  API-FIRST SERVICES FastAPI API framework built around Python type hints, validation, and automatic API documentation. Common for API services and model- serving endpoints. Type hints Validation Auto API docs  Both can expose APIs. The distinction is their defaults and design emphasis."
  },
  {
    "n": 21,
    "title": "Django",
    "section": "tour",
    "text": "Python · Web framework Django Database-driven web systems 9:30–10:30  BEST FIT Database-driven web systems  ORM + migrations for data  Built-in admin, auth, and more  Great for portals and business systems Selection depends on team + requirements ILLUSTRATIVE CODE · NOT A FULL APP # models.py from django.db import models class Task (models.Model): title = models. CharField ( max_length= 120 )"
  },
  {
    "n": 22,
    "title": "FastAPI",
    "section": "tour",
    "text": "Python · API framework FastAPI REST APIs and model-serving services 9:30–10:30  BEST FIT REST APIs and model-serving services  Type hints + data validation  Automatic interactive API docs  Lean API-first development Selection depends on team + requirements ILLUSTRATIVE CODE · NOT A FULL APP from fastapi import FastAPI app = FastAPI () @app.get ( '/tasks' ) def list_tasks (): return [{ 'title' : 'Study' }]"
  },
  {
    "n": 23,
    "title": "Same task, different defaults",
    "section": "tour",
    "text": "Compare Same task, different defaults Suppose we need a backend for a task-management application. 9:30–10:30 FRAMEWORK STARTING SHAPE WHAT YOU GET WHAT YOU TAKE ON Dj Django Integrated web system  Admin, ORM, auth, templating and ecosystem  More conventions to learn FA FastAPI API-centric Python service  Validation and generated API docs  Add more infrastructure as needed Ex Express Flexible Node.js service  Minimal HTTP layer and middleware  Select patterns and packages yourself  Not a performance ranking or prescription: team knowledge and real requirements matter."
  },
  {
    "n": 24,
    "title": "Spring Boot",
    "section": "tour",
    "text": "Java · Application framework Spring Boot Enterprise and large backend services 9:30–10:30  BEST FIT Enterprise and large backend services  Production-oriented integrations  Strong dependency injection ecosystem  Useful for structured Java services Selection depends on team + requirements ILLUSTRATIVE CODE · NOT A FULL APP @RestController class HelloController { @GetMapping ( \"/hello\" ) String hello () { return \"Hello!\" ; } }"
  },
  {
    "n": 25,
    "title": "Laravel",
    "section": "tour",
    "text": "PHP · Web framework Laravel Business web applications 9:30–10:30  BEST FIT Business web applications  Expressive routing + MVC conventions  ORM, migrations, auth ecosystem  Productive for websites and systems Selection depends on team + requirements ILLUSTRATIVE CODE · NOT A FULL APP use Illuminate\\Support\\Facades\\Route; Route :: get ( '/tasks' , function () { return [ 'title' => 'Study' ]; });"
  },
  {
    "n": 26,
    "title": "Flutter",
    "section": "tour",
    "text": "Dart · UI framework Flutter Cross-platform apps 9:30–10:30  BEST FIT Cross-platform apps  One UI codebase for mobile targets  Widget-based interface composition  Useful for rich device-focused interfaces Selection depends on team + requirements ILLUSTRATIVE CODE · NOT A FULL APP Scaffold ( appBar: AppBar ( title: Text ( 'Attendance' ), ), body: Center ( child: Text ( 'Welcome' ), ), )"
  },
  {
    "n": 27,
    "title": "Quick match: what would you consider?",
    "section": "tour",
    "text": "Active recall Quick match: what would you consider? Shout out at least one reasonable framework for each project. 9:30–10:30  Student grading portal Django or Laravel  AI model prediction API FastAPI (or another API framework)  Interactive admin dashboard Vue / React + backend  Cross-platform attendance app Flutter + API"
  },
  {
    "n": 28,
    "title": "15-minute break",
    "section": "tour",
    "text": "15 min Break 15-minute break  10:30–10:45 AM After the break: deciding which framework fits your project."
  },
  {
    "n": 29,
    "title": "How to choose the right framework",
    "section": "choosing",
    "text": "03 Requirements first Section 03 How to choose the right framework Technology decisions start with requirements, not hype. 01 · Foundations 02 · Framework tour 03 · Choosing well"
  },
  {
    "n": 30,
    "title": "Ask five questions before choosing",
    "section": "choosing",
    "text": "Decision method Ask five questions before choosing Frame the problem before comparing tools. 10:45–12:00 01  What are we building? Website, admin system, API, mobile app? 02  Who will use it? Users, devices, accessibility, connectivity? 03  What must it do? Auth, records, payments, realtime, offline? 04  What can our team sustain? Skills, documentation, time, hiring? 05  How will it run? Hosting, cost, security, maintenance?"
  },
  {
    "n": 31,
    "title": "A framework-selection checklist",
    "section": "choosing",
    "text": "Decision worksheet A useful framework-selection checklist Score candidates against your project—not against one another in the abstract. 10:45–12:00  Project requirements 25%  Team experience 20%  Ecosystem & support 20%  Deployment / cost 15%  Maintenance & security 20%  Weights are an illustrative teaching example; adjust them for each organization."
  },
  {
    "n": 32,
    "title": "Case study: public information website",
    "section": "choosing",
    "text": "Case study · Scenario 4 Public information website Requirements: pages, search visibility, quick content updates, and hosting. 10:45–12:00 ASK BEFORE CHOOSING ? Mostly static pages? ? Does content change frequently? ? Is SEO / search indexing important? ? Does the project need accounts or transactions?  OPTIONS DEPEND ON THE ANSWERS Next.js or a static-site solution Avoid unnecessary backend complexity for a simple informational website."
  },
  {
    "n": 33,
    "title": "Group activity: you are the tech lead",
    "section": "choosing",
    "text": "10 MIN Group activity · 10 minutes You are the tech lead. A small community clinic wants:  CHOOSE A STACK. EXPLAIN 3 REASONS + 1 TRADE-OFF.  A patient appointment website  Staff accounts and scheduling  A mobile-friendly interface  Low-cost hosting and easy maintenance"
  },
  {
    "n": 34,
    "title": "Common framework-selection mistakes",
    "section": "choosing",
    "text": "Avoid these Common framework-selection mistakes A popular technology is not automatically the right technology. 10:45–12:00  Choosing by hype “It is trending, so it must be best.”  Overengineering Building several services for a tiny project.  Ignoring team skills A tool nobody can maintain later.  Forgetting deployment A stack too expensive or difficult to host.  Treating AI output as truth Generated architecture still needs review."
  },
  {
    "n": 35,
    "title": "Takeaway: match the tool to the task",
    "section": "choosing",
    "text": "Morning recap Takeaway: match the tool to the task Remember these five principles. 11:50–12:00  01 Start with requirements.  02 Separate language, runtime, library, framework.  03 Know frontend, backend, and mobile responsibilities.  04 Evaluate skills, hosting, and maintenance.  05 Explain your trade-offs."
  },
  {
    "n": 36,
    "title": "Coming up after lunch",
    "section": "choosing",
    "text": "Coming up after lunch From choosing tools to building with Claude Code You decide the architecture. The AI agent helps implement— and you verify.  YOU Decide the architecture  AI AGENT Helps implement  YOU Verify the result"
  },
  {
    "n": 37,
    "title": "Sources & further reading",
    "section": "choosing",
    "text": "Official documentation Sources & further reading Use official docs when technology names and features change.  Vue vuejs.org/guide/introduction  Next.js nextjs.org/docs  Express expressjs.com  Django docs.djangoproject.com  FastAPI fastapi.tiangolo.com  Spring Boot docs.spring.io/spring-boot  Laravel laravel.com/docs  Flutter docs.flutter.dev Framework recommendations are illustrative. Re-check project constraints, maintained versions, security advisories, and documentation before implementation."
  },
  {
    "n": 38,
    "title": "Building the App with Claude Code",
    "section": "afternoon",
    "text": "Seminar · Afternoon Building the App with Claude Code From requirements to a working app — you lead, the AI agent builds, you verify.  Plan  Build  Test  Verify NOVEMBER 10, 2026 PART 2: BUILDING WITH CLAUDE"
  }
]
