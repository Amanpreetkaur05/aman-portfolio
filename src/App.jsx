import React from "react";
import { motion } from "framer-motion";
import { Mail, Download, Linkedin, Globe, GraduationCap, Briefcase, BookOpen, Cpu, ShieldCheck, Github, ExternalLink, Star, Sparkles } from "lucide-react";

const TAGS = [
  "AI ",
  "Blockchain ",
  "identity management",
  "Digital Trust",
  "Agri‑food SMEs",
  "Business Intelligence",
  "Teaching & Curriculum",
  "Cyber Security (pfSense, Wireshark,nmap)",
  "Research Methods (Qualitative/Quantitative)",
  "Data Storytelling",
];

const PROJECTS = [
  {
    title: "AI‑Driven Blockchain Identity management for Supply Chains in agri-food organisations",
    blurb:
      "Conceptual framework and ongoing PhD research. Explores how AI + blockchain improve identity assurance, traceability, and compliance for SMEs.",
    tags: ["Research", "Identity management", "Supply Chain", "AI", "Blockchain"],
    link: "#",
  }
  
];

const ARTICLES = [
  {
    title: "Why AI + Blockchain are Complementary in SME Supply Chains",
    outlet: "LinkedIn Articles",
    link: "#",
  },

  {
    title: "From Pilots to Production: Identity Management in Agri‑food",
    outlet: "Medium",
    link: "#",
  },
];

const TALKS = [
  {
    title: "Decentralised Identity: Practical Pathways for  SMEs",
    event: "Interactive Session",
    link: "#",
  },
  {
    title: "Design Thinking adn Human centred design",
    event: "Workshop",
    link: "#",
  },
  {
    title: "Cyber security and its constant changing environment",
    event: "Interactive Session",
    link: "#",
  },
];

const testimonials = [
  {
    quote:
      "I choose to see people not just as they are, but as they are becoming — because growth deserves compassion, not judgment",
  },
  {
    quote:
      "She aims to turn research into action",
  
  },
];

const SocialLink = ({ href, children }) => (
  <a
    href={href}
    target="_blank"
    rel="noreferrer noopener"
    className="inline-flex items-center gap-2 rounded-2xl px-4 py-2 border border-neutral-200 hover:border-neutral-300 shadow-sm hover:shadow transition"
  >
    {children}
  </a>
);

const Card = ({ children }) => (
  <div className="rounded-2xl border border-neutral-200 shadow-sm hover:shadow-md transition bg-white/80 backdrop-blur p-6">{children}</div>
);

export default function PortfolioSite() {
  const name = "Amanpreet Kaur (Aman)";
  const title = "AI × Blockchain Identity x Cyber security";
  const location = "Adelaide, Australia";
  const email = "amann.preet@outlook.com"; // TODO: update
  const linkedin = "www.linkedin.com/in/aman-p-kaur"; // update if needed
  const github = "https://github.com/"; // optional
  const website = "https://"; // optional

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 via-white to-rose-50 text-neutral-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name,
            jobTitle: title,
            address: location,
            url: website || linkedin,
            sameAs: [linkedin, github].filter(Boolean),
            email: `mailto:${email}`,
          }),
        }}
      />

      <header className="max-w-7xl mx-auto px-6 pt-10 pb-6">
        <nav className="flex items-center justify-between">
          <div className="font-semibold tracking-tight">Aman Kaur | Guiding Change with Purpose</div>
          <div className="hidden md:flex gap-4 text-sm">
            <a href="#projects" className="hover:underline">Projects</a>
            <a href="#research" className="hover:underline">Research</a>
            <a href="#teaching" className="hover:underline">Teaching</a>
            <a href="#writing" className="hover:underline">Writing</a>
            <a href="#contact" className="hover:underline">Contact</a>
          </div>
        </nav>
      </header>

      <section className="max-w-7xl mx-auto px-6 pb-10">
        <div
          className="grid md:grid-cols-2 gap-10 items-center"
        >
          <div>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight">
              Hi, I’m <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-rose-600">{name}</span>
            </h1>
            <p className="mt-4 text-xl text-neutral-700">{title}</p>
            <p className="mt-3 text-neutral-600">I turn complexity into clarity — helping organisations grow with confidence and purpose.</p>

            <div className="mt-6 flex flex-wrap gap-3">
              <SocialLink href={`mailto:${email}`}>
                <Mail className="h-4 w-4" /> Email me
              </SocialLink>
              <SocialLink href={linkedin}>
                <Linkedin className="h-4 w-4" /> LinkedIn
              </SocialLink>
              {github && (
                <SocialLink href={github}>
                  <Github className="h-4 w-4" /> GitHub
                </SocialLink>
              )}
              {website && website !== "https://" && (
                <SocialLink href={website}>
                  <Globe className="h-4 w-4" /> Website
                </SocialLink>
              )}
              <a
                href="#cv"
                className="inline-flex items-center gap-2 rounded-2xl px-4 py-2 bg-neutral-900 text-white hover:bg-neutral-800 shadow"
              >
                <Download className="h-4 w-4" /> Download CV
              </a>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {TAGS.map((t) => (
                <span key={t} className="text-sm px-3 py-1 rounded-full bg-white border border-neutral-200 shadow-sm">{t}</span>
              ))}
            </div>

            <div className="mt-6 flex items-center gap-2 text-sm text-neutral-600">
              <ShieldCheck className="h-4 w-4" /> Partnering with organisations through consulting, speaking, and strategic collaborations.
            </div>
          </div>

          <Card>
  <div className="flex items-start gap-4">
    <div className="shrink-0 w-20 h-20 rounded-2xl bg-gradient-to-br from-indigo-500 to-rose-500 text-white flex items-center justify-center text-3xl font-bold">
      AK
    </div>
    <div>
      <h3 className="font-semibold text-lg flex items-center gap-2">
        Quick Wins for You <Sparkles className="h-4 w-4 text-rose-500" />
      </h3>

      {/* ✅ Every <li> now has a matching </li> */}
      <ul className="mt-2 text-sm list-disc pl-4 text-neutral-700 space-y-1">
        <li>Audit your identity & data flows; spot gaps impacting compliance and customer trust.</li>
        <li>Design a lightweight, evidence-based UX testing plan your team can run in a week.</li>
        <li>Focus Finder, I’ll help you choose the 2–3 areas that will create the biggest impact.</li>
        <li>Pilot Starter, I’ll turn one idea into a simple, safe pilot you can launch quickly.</li>
      </ul>

      <a href="#contact" className="mt-3 inline-flex items-center gap-2 text-indigo-700 hover:underline">
        Book a 20-min intro <ExternalLink className="h-4 w-4" />
      </a>
    </div>
  </div>
</Card>

        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 pb-4">
        <div className="grid md:grid-cols-3 gap-6">
          <Card>
            <div className="flex items-center gap-3 mb-2"><Cpu className="h-5 w-5" /><h3 className="font-semibold">Advisory & Research</h3></div>
            <p className="text-sm text-neutral-700">Evidence‑based guidance on AI + blockchain identity, data governance, and digital trust—tailored for SMEs and education.</p>
          </Card>
          <Card>
            <div className="flex items-center gap-3 mb-2"><Briefcase className="h-5 w-5" /><h3 className="font-semibold">Design & Delivery</h3></div>
            <p className="text-sm text-neutral-700">Workshops, roadmaps, and rapid prototypes that turn strategy into usable products and measurable outcomes.</p>
          </Card>
          <Card>
            <div className="flex items-center gap-3 mb-2"><GraduationCap className="h-5 w-5" /><h3 className="font-semibold">Teaching & Speaking</h3></div>
            <p className="text-sm text-neutral-700">Engaging lectures and talks on UX, identity, and responsible AI—built for students, execs, and cross‑functional teams.</p>
          </Card>
        </div>
      </section>

      <section id="projects" className="max-w-7xl mx-auto px-6 py-10">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold">Featured Projects</h2>
          <a className="text-sm text-indigo-700 hover:underline" href="#">View all</a>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {PROJECTS.map((p) => (
            <Card key={p.title}>
              <h3 className="font-semibold text-lg">{p.title}</h3>
              <p className="mt-2 text-neutral-700 text-sm">{p.blurb}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="text-xs px-2 py-1 rounded-full bg-indigo-50 border border-indigo-100">{t}</span>
                ))}
              </div>
              <a href={p.link} className="mt-3 inline-flex items-center gap-2 text-sm text-neutral-800 hover:underline">
                Explore <ExternalLink className="h-4 w-4" />
              </a>
            </Card>
          ))}
        </div>
      </section>

      <section id="research" className="max-w-7xl mx-auto px-6 pb-6">
        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <h3 className="font-semibold text-lg">Research Focus</h3>
            <p className="mt-2 text-sm text-neutral-700">
              My PhD explores how <strong>AI + blockchain</strong> can strengthen identity management, traceability, and compliance in <strong>agri‑food SME</strong> supply chains.
              I use a mixed‑methods approach, pairing qualitative insights with practical prototypes.
            </p>
            <ul className="mt-3 space-y-1 text-sm text-neutral-700 list-disc pl-4">
              <li>AIBA‑SME framework (capabilities, governance, ROI pathways)</li>
              <li>Verifiable credentials for products & workforce</li>
              <li>Usability & adoption challenges in SMEs</li>
            </ul>
          </Card>
          <Card id="teaching">
            <h3 className="font-semibold text-lg">Teaching & Curriculum</h3>
            <p className="mt-2 text-sm text-neutral-700">I empower learners through UX & Design Thinking, Cyber Security, and Business Intelligence - building future-ready skills through innovation and real-world practice.</p>
            <ul className="mt-3 space-y-1 text-sm text-neutral-700 list-disc pl-4">
<li><strong>Business & Data Strategy</strong> — Business analysis, functional requirements, SQL, Power BI/ Tableau, Excel</li>
    <li><strong>Cybersecurity & Networks</strong> — pfSense, Wireshark, VPNs, secure networking, troubleshooting</li>
    <li><strong>Systems & Tools</strong> — Linux, Windows Server, virtual machines, Python, remote support tools</li>
    <li><strong>Collaboration & Dev Platforms</strong> — Jira, Confluence, GitHub, Microsoft 365, Canvas, Moodle</li>
    <li><strong>Analytics & Insights</strong> — Tableau, Power BI, data visualisation, dashboards</li>
    <li><strong>Teaching & Learning Design</strong> — Online LMS, Zoom, Teams, Turnitin, rubric design</li>
    <li><strong>Creative & Coaching Skills</strong> — Design thinking, innovation workshops, mentoring, public speaking, storytelling, curriculum design</li>
    <li><strong>Professional Capabilities</strong> — Agile, SDLC, documentation, leadership, communication, strategic planning, content creation</li>

            </ul>
          </Card>
        </div>
      </section>

      <section id="writing" className="max-w-7xl mx-auto px-6 pb-6">
        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <h3 className="font-semibold text-lg flex items-center gap-2"><BookOpen className="h-5 w-5" /> Articles & Notes</h3>
            <ul className="mt-3 space-y-3">
              {ARTICLES.map((a) => (
                <li key={a.title} className="flex items-start gap-3">
                  <Star className="h-4 w-4 mt-1 text-amber-500" />
                  <div>
                    <a href={a.link} className="font-medium hover:underline">{a.title}</a>
                    <div className="text-xs text-neutral-600">{a.outlet}</div>
                  </div>
                </li>
              ))}
            </ul>
          </Card>

          <Card>
            <h3 className="font-semibold text-lg">Talks & Workshops</h3>
            <ul className="mt-3 space-y-3">
              {TALKS.map((t) => (
                <li key={t.title} className="flex items-start gap-3">
                  <Briefcase className="h-4 w-4 mt-1" />
                  <div>
                    <a href={t.link} className="font-medium hover:underline">{t.title}</a>
                    <div className="text-xs text-neutral-600">{t.event}</div>
                  </div>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 pb-10">
        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <Card key={i}>
              <blockquote className="text-neutral-800">“{t.quote}”</blockquote>
              <div className="mt-2 text-sm text-neutral-600">— {t.by}</div>
            </Card>
          ))}
        </div>
      </section>

      <section id="contact" className="max-w-7xl mx-auto px-6 pb-16">
        <Card>
          <div className="grid md:grid-cols-2 gap-6 items-start">
            <div>
              <h3 className="font-semibold text-lg">Let’s work together</h3>
              <p className="mt-2 text-sm text-neutral-700">Consulting, research collaborations, guest lectures, workshops, or product design sprints. I respond within 24–48 hours.</p>
              <div className="mt-4 flex flex-wrap gap-3">
                <SocialLink href={`mailto:${email}`}>
                  <Mail className="h-4 w-4" /> {email}
                </SocialLink>
                <SocialLink href={linkedin}>
                  <Linkedin className="h-4 w-4" /> LinkedIn Profile
                </SocialLink>
              </div>
            </div>

            <form onSubmit={(e) => e.preventDefault()} className="bg-neutral-50 rounded-2xl p-4 border border-neutral-200">
              <div className="grid gap-3">
                <input className="px-3 py-2 rounded-xl border border-neutral-300 focus:outline-none" placeholder="Your name" />
                <input className="px-3 py-2 rounded-xl border border-neutral-300 focus:outline-none" placeholder="Your email" />
                <textarea rows={4} className="px-3 py-2 rounded-xl border border-neutral-300 focus:outline-none" placeholder="What would you like to achieve?" />
                <button className="rounded-xl px-4 py-2 bg-indigo-600 text-white hover:bg-indigo-500">
                  Send enquiry
                </button>
              </div>
              <p className="mt-2 text-xs text-neutral-500">(Demo only — connects to your email provider or form backend when deployed.)</p>
            </form>
          </div>
        </Card>
      </section>

      <footer className="max-w-7xl mx-auto px-6 pb-10 text-sm text-neutral-600">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
          <div>© {new Date().getFullYear()} {name}. All rights reserved.</div>
          <div className="flex items-center gap-3">
            <a href={linkedin} className="inline-flex items-center gap-1 hover:underline"><Linkedin className="h-4 w-4" /> LinkedIn</a>
            {github && <a href={github} className="inline-flex items-center gap-1 hover:underline"><Github className="h-4 w-4" /> GitHub</a>}
          </div>
        </div>
      </footer>
    </div>
  );
}
