import React from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Download,
  Linkedin,
  Globe,
  GraduationCap,
  Briefcase,
  Cpu,
  ShieldCheck,
  Github,
  ExternalLink,
  Star,
  Sparkles,
  Zap,
  HeartHandshake,
  CheckCircle2,
} from "lucide-react";

/* ------------------------------------------------
   THEME & CONTENT
-------------------------------------------------*/
const THEME = {
  bgFrom: "from-slate-50",
  bgTo: "to-indigo-50",
  brand: "indigo-800",
  brandLight: "indigo-600",
  text: "neutral-900",
};

const NAME_FULL = "Amanpreet Kaur";
const NAME_SHORT = "Aman";
const TITLE = "Innovation · Trust · Digital Futures";
const LOCATION = "Adelaide, Australia";
const EMAIL = "amann.preet@outlook.com";
const LINKEDIN = "https://www.linkedin.com/in/aman-p-kaur";
const GITHUB = "https://github.com/amanpreetkaur05";
const WEBSITE = ""; // optional

const TAGS = [
  "Innovation Leadership",
  "Strategic Thinking",
  "Digital Trust",
  "AI",
  "Blockchain",
  "Identity Management",
  "Agri-food SMEs",
  "Cyber Security",
  "Business Intelligence",
  "Data Storytelling",
];

const PROJECTS = [
  {
    title: "AI-Driven Blockchain Identity Management for Agri-food Supply Chains",
    blurb:
      "PhD work exploring how AI + blockchain improve identity assurance, traceability, and compliance for SMEs.",
    tags: ["Research", "Identity", "Supply Chain", "AI", "Blockchain"],
    link:
      "https://www.linkedin.com/pulse/unlocking-supply-chain-efficiency-through-ai-driven-blockchain-kaur-glyzc/?trackingId=YKUyz1d7kUZf73OdJcHITg%3D%3D",
    image:
      "https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=1080&auto=format&fit=crop",
  },
  {
    title: "Lead & Build High-Performance Teams — Whimsical Flow",
    blurb:
      "A visual framework for forming, aligning, and scaling high-performance teams using a concise systems-thinking flow.",
    tags: ["Leadership", "Org Design", "Playbook"],
    link:
      "https://www.linkedin.com/pulse/unlocking-supply-chain-efficiency-through-ai-driven-blockchain-kaur-glyzc/?trackingId=YKUyz1d7kUZf73OdJcHITg%3D%3D",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1080&auto=format&fit=crop",
  },
];

const ARTICLES = [
  {
    title: "Why AI + Blockchain are Complementary in SME Supply Chains",
    outlet: "LinkedIn Articles",
    link: "#",
  },
  {
    title: "From Pilots to Production: Identity Management in Agri-food",
    outlet: "Medium",
    link: "#",
  },
  {
    title:
      "Revolutionizing Supply Chains with AI-Powered Blockchain Identity Management (Agri-food organisations)",
    outlet: "LinkedIn",
    link:
      "https://www.linkedin.com/pulse/unlocking-supply-chain-efficiency-through-ai-driven-blockchain-kaur-glyzc/?trackingId=YKUyz1d7kUZf73OdJcHITg%3D%3D",
  },
];

const TALKS = [
  { title: "Decentralised Identity: Practical Pathways for SMEs", event: "Interactive Session", link: "#" },
  { title: "Design Thinking & Human-Centred Design", event: "Workshop", link: "#" },
  { title: "Cyber Security in a Constantly Changing Environment", event: "Interactive Session", link: "#" },
  { title: "Strategic Innovation and Emerging Tech Futures", event: "Industry Panel", link: "#" },
  { title: "Leadership in Digital Transformation", event: "Keynote Talk", link: "#" },
];

const TESTIMONIALS = [
  {
    quote:
      "I choose to see people not just as they are, but as they are becoming — because growth deserves compassion, not judgment.",
    by: "Personal Principle",
  },
  { quote: "She aims to turn research into action.", by: "Colleague" },
];

const EMPATHY_QUOTES = [
  "Empathy turns information into understanding and decisions into trust.",
  "Design with people, not for them — empathy is our shortest path to impact.",
  "When we feel seen, we move faster together.",
];

/* ------------------------------------------------
   SMALL UI PRIMITIVES
-------------------------------------------------*/
const SocialLink = ({ href, children }) => (
  <a
    href={href}
    target="_blank"
    rel="noreferrer noopener"
    className="inline-flex items-center gap-2 rounded-xl px-4 py-2 border border-neutral-200 hover:border-neutral-300 shadow-sm hover:shadow transition bg-white"
  >
    {children}
  </a>
);

const Card = ({ className = "", children }) => (
  <div className={`rounded-2xl border border-neutral-200 shadow-sm hover:shadow-md transition bg-white/90 backdrop-blur p-6 ${className}`}>
    {children}
  </div>
);

const SectionTitle = ({ eyebrow, title, children }) => (
  <div className="mb-6">
    <div className="text-xs uppercase tracking-widest text-neutral-500">{eyebrow}</div>
    <h2 className="text-2xl md:text-3xl font-bold mt-1">{title}</h2>
    {children && <p className="mt-2 text-sm text-neutral-600">{children}</p>}
  </div>
);

const Monogram = ({ size = "w-28 h-28 md:w-40 md:h-40 text-5xl md:text-6xl" }) => (
  <div className={`shrink-0 ${size} rounded-2xl bg-gradient-to-br from-slate-700 to-indigo-800 text-white flex items-center justify-center font-extrabold tracking-tight`}>
    AK
  </div>
);

/* ------------------------------------------------
   QUICK WINS (component)
-------------------------------------------------*/
function QuickWins() {
  const items = [
    {
      title: "Page Speed Boost",
      bullets: ["Compress images & lazy-load", "Minify CSS/JS", "Core Web Vitals ≥ 90"],
      impact: "High",
      time: "1–2 days",
    },
    {
      title: "UX Polish",
      bullets: ["Hierarchy & spacing", "Clear CTAs, microcopy", "Accessible color contrast"],
      impact: "Med–High",
      time: "1–2 days",
    },
    {
      title: "SEO Essentials",
      bullets: ["Meta & Open Graph", "Semantic headings", "Sitemap & robots.txt"],
      impact: "Medium",
      time: "0.5–1 day",
    },
    {
      title: "Analytics Setup",
      bullets: ["GA4 events", "Heatmaps/session replay", "Goal tracking"],
      impact: "High (insights)",
      time: "0.5–1 day",
    },
  ];

  return (
    <section id="wins" className="max-w-7xl mx-auto px-6 pb-10">
      <SectionTitle eyebrow="Fast Value" title="Quick Wins I Deliver">
        Small, high-impact improvements — perfect for tight timelines and visible results.
      </SectionTitle>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {items.map((it) => (
          <Card key={it.title} className="relative">
            <div className="absolute -top-3 left-6 rounded-full bg-white shadow px-3 py-1 text-xs font-semibold text-neutral-700 flex items-center gap-1">
              <Zap className="h-3.5 w-3.5 text-indigo-800" /> {NAME_SHORT}
            </div>

            <h3 className="font-semibold">{it.title}</h3>
            <ul className="mt-2 text-sm text-neutral-700 list-disc pl-4 space-y-1">
              {it.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>

            <div className="mt-3 flex items-center justify-between text-xs text-neutral-600">
              <span>Impact: <strong>{it.impact}</strong></span>
              <span>Time: <strong>{it.time}</strong></span>
            </div>
          </Card>
        ))}
      </div>

      <div className="mt-6">
        <a
          href="#contact"
          className="inline-flex items-center gap-2 rounded-xl px-4 py-2 bg-neutral-900 text-white hover:bg-neutral-800 shadow"
        >
          Book a 20-min consult <ExternalLink className="h-4 w-4" />
        </a>
      </div>
    </section>
  );
}

/* ------------------------------------------------
   VALUE STRIP (bonus)
-------------------------------------------------*/
function ValueStrip() {
  const points = [
    { icon: <CheckCircle2 className="h-5 w-5" />, text: "Research depth → shipped outcomes" },
    { icon: <HeartHandshake className="h-5 w-5" />, text: "Empathy-led, evidence-based" },
    { icon: <ShieldCheck className="h-5 w-5" />, text: "Trust, identity & compliance" },
  ];
  return (
    <div className="bg-gradient-to-r from-indigo-600 to-violet-500 text-white">
      <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row gap-3 md:gap-6 items-center justify-center">
        {points.map((p, i) => (
          <div key={i} className="flex items-center gap-2 text-sm">
            {p.icon}
            <span className="font-medium">{p.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ------------------------------------------------
   PAGE
-------------------------------------------------*/
export default function PortfolioSite() {
  return (
    <div className={`min-h-screen bg-gradient-to-b ${THEME.bgFrom} ${THEME.bgTo} text-${THEME.text}`}>
      {/* SEO / Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: NAME_FULL,
            jobTitle: TITLE,
            address: LOCATION,
            url: WEBSITE || LINKEDIN,
            sameAs: [LINKEDIN, GITHUB].filter(Boolean),
            email: `mailto:${EMAIL}`,
          }),
        }}
      />

      {/* NAV */}
      <header className="max-w-7xl mx-auto px-6 pt-8 pb-4">
        <nav className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-slate-700 to-indigo-800 text-white flex items-center justify-center text-sm font-bold">AK</div>
            <div className="leading-tight">
              <div className="font-semibold tracking-tight">
                {NAME_FULL} <span className="text-neutral-500">({NAME_SHORT})</span>
              </div>
              <div className="text-xs text-neutral-500">{TITLE}</div>
            </div>
          </div>
          <div className="hidden md:flex gap-4 text-sm">
            <a href="#wins" className="hover:underline">Quick Wins</a>
            <a href="#projects" className="hover:underline">Projects</a>
            <a href="#research" className="hover:underline">Research</a>
            <a href="#teaching" className="hover:underline">Teaching</a>
            <a href="#writing" className="hover:underline">Writing</a>
            <a href="#contact" className="hover:underline">Contact</a>
          </div>
        </nav>
      </header>

      {/* HERO */}
      <section className="max-w-7xl mx-auto px-6 pb-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 gap-10 items-center"
        >
          <div>
            <p className="text-xs uppercase tracking-widest text-neutral-500">{LOCATION}</p>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight mt-2">
              Hi, I’m{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-slate-700 to-indigo-800">
                {NAME_FULL}
              </span>
            </h1>
            <p className="mt-3 text-xl text-neutral-700">{TITLE}</p>
            <p className="mt-3 text-neutral-600">
              Envisioning future-ready ecosystems — transforming innovation into strategy and impact.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <SocialLink href={`mailto:${EMAIL}`}>
                <Mail className="h-4 w-4" /> Email
              </SocialLink>
              <SocialLink href={LINKEDIN}>
                <Linkedin className="h-4 w-4" /> LinkedIn
              </SocialLink>
              {GITHUB && (
                <SocialLink href={GITHUB}>
                  <Github className="h-4 w-4" /> GitHub
                </SocialLink>
              )}
              {WEBSITE && (
                <SocialLink href={WEBSITE}>
                  <Globe className="h-4 w-4" /> Website
                </SocialLink>
              )}
              <a
                href="#cv"
                className="inline-flex items-center gap-2 rounded-xl px-4 py-2 bg-neutral-900 text-white hover:bg-neutral-800 shadow"
              >
                <Download className="h-4 w-4" /> Download CV
              </a>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {TAGS.map((t) => (
                <span key={t} className="text-sm px-3 py-1 rounded-full bg-white border border-neutral-200 shadow-sm">{t}</span>
              ))}
            </div>
          </div>

          <Card className="relative overflow-hidden p-0 flex items-center justify-center h-64 md:h-[22rem]">
            <div className="absolute -top-3 left-6 rounded-full bg-white shadow px-3 py-1 text-xs font-semibold text-neutral-700 flex items-center gap-1">
              <ShieldCheck className="h-3.5 w-3.5 text-indigo-800" /> {NAME_SHORT} · Trusted & Available
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-slate-200 to-indigo-100" />
            <div className="relative z-10">
              <Monogram />
            </div>
          </Card>
        </motion.div>
      </section>

      {/* VALUE STRIP (bonus) */}
      <ValueStrip />

      {/* QUICK WINS */}
      <QuickWins />

      {/* PROJECTS */}
      <section id="projects" className="max-w-7xl mx-auto px-6 py-10">
        <SectionTitle eyebrow="Selected Work" title="Featured Projects" />
        <div className="grid md:grid-cols-2 gap-6">
          {PROJECTS.map((p) => (
            <a key={p.title} href={p.link} target="_blank" rel="noreferrer noopener" className="group block">
              <Card className="overflow-hidden transition-transform group-hover:-translate-y-0.5">
                {p.image && (
                  <img
                    src={p.image}
                    alt="Project visual"
                    className="w-full h-40 object-cover rounded-xl mb-4"
                    loading="lazy"
                  />
                )}
                <h3 className="font-semibold text-lg">{p.title}</h3>
                <p className="mt-2 text-neutral-700 text-sm">{p.blurb}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="text-xs px-2 py-1 rounded-full bg-indigo-50 border border-indigo-100">{t}</span>
                  ))}
                </div>
                <div className="mt-3 inline-flex items-center gap-2 text-sm text-neutral-800">
                  Explore <ExternalLink className="h-4 w-4" />
                </div>
              </Card>
            </a>
          ))}
        </div>
      </section>

      {/* RESEARCH */}
      <section id="research" className="max-w-7xl mx-auto px-6 pb-6">
        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <SectionTitle eyebrow="Focus" title="Research">
              Mixed-methods work pairing qualitative insights with practical prototypes.
            </SectionTitle>
            <ul className="space-y-1 text-sm text-neutral-700 list-disc pl-4">
              <li>AIBA-SME framework (capabilities, governance, ROI pathways)</li>
              <li>Verifiable credentials for products & workforce</li>
              <li>Usability & adoption challenges in SMEs</li>
            </ul>
          </Card>

          <Card>
            <SectionTitle eyebrow="Practice" title="Teaching & Curriculum">
              Empowering learners across UX, Cyber Security, and Business Intelligence.
            </SectionTitle>
            <ul className="space-y-1 text-sm text-neutral-700 list-disc pl-4">
              <li><strong>Business & Data Strategy</strong> — Analysis, requirements, SQL, Power BI/Tableau, Excel</li>
              <li><strong>Cybersecurity & Networks</strong> — pfSense, Wireshark, VPNs, secure networking</li>
              <li><strong>Systems & Tools</strong> — Linux, Windows Server, VMs, Python</li>
              <li><strong>Collaboration</strong> — Jira, Confluence, GitHub, Microsoft 365, Canvas/Moodle</li>
              <li><strong>Analytics & Insights</strong> — Visualisation, dashboards, data ethics</li>
              <li><strong>Teaching & Learning Design</strong> — Online LMS, rubric design</li>
              <li><strong>Creative & Coaching</strong> — Design thinking, workshops, mentoring, storytelling</li>
            </ul>
          </Card>
        </div>
      </section>

      {/* WRITING */}
      <section id="writing" className="max-w-7xl mx-auto px-6 pb-6">
        <SectionTitle eyebrow="Notes" title="Articles & Posts">
          I also create tailored learning resources — guides, slides, and exercises — matching your team’s context.
        </SectionTitle>
        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <ul className="space-y-3">
              {ARTICLES.map((a) => (
                <li key={a.title} className="flex items-start gap-3">
                  <Star className="h-4 w-4 mt-1 text-amber-500" />
                  <div>
                    <a href={a.link} target="_blank" rel="noreferrer noopener" className="font-medium hover:underline">
                      {a.title}
                    </a>
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
                    <a href={t.link} className="font-medium hover:underline">
                      {t.title}
                    </a>
                    <div className="text-xs text-neutral-600">{t.event}</div>
                  </div>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </section>

      {/* EMPATHY QUOTES (bonus) */}
      <section className="max-w-7xl mx-auto px-6 pb-8">
        <SectionTitle eyebrow="Principles" title="Empathy in Practice">
          Clear communication, active listening, and shared outcomes.
        </SectionTitle>
        <div className="grid md:grid-cols-3 gap-6">
          {EMPATHY_QUOTES.map((q) => (
            <Card key={q}>
              <blockquote className="text-neutral-800">“{q}”</blockquote>
            </Card>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="max-w-7xl mx-auto px-6 pb-16">
        <SectionTitle eyebrow="Next Step" title={`Work with ${NAME_SHORT}`}>
          Consulting, collaborations, or speaking.
        </SectionTitle>
        <Card>
          <div className="rounded-2xl overflow-hidden border border-neutral-200">
            <iframe
              className="w-full h-[720px] md:h-[760px]"
              src="https://docs.google.com/forms/d/e/1FAIpQLSdLxHpw0tQPLQeYWhJkaJXhFz_P0iK6Vhcnn7xX5nB2rZ7bxg/viewform?embedded=true"
              frameBorder="0"
              marginHeight="0"
              marginWidth="0"
              title="Contact Amanpreet Kaur"
            />
          </div>
          <div className="mt-3 text-xs text-neutral-500">
            Don’t see the form?{" "}
            <a
              className="underline"
              href="https://docs.google.com/forms/d/e/1FAIpQLSdLxHpw0tQPLQeYWhJkaJXhFz_P0iK6Vhcnn7xX5nB2rZ7bxg/viewform"
              target="_blank"
              rel="noreferrer noopener"
            >
              Open it in a new tab
            </a>.
          </div>
        </Card>
      </section>

      {/* FOOTER */}
      <footer className="max-w-7xl mx-auto px-6 pb-10 text-sm text-neutral-600">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-slate-700 to-indigo-800 text-white flex items-center justify-center text-sm font-bold">AK</div>
            <div>
              <div className="font-semibold">{NAME_FULL} ({NAME_SHORT})</div>
              <div className="text-xs text-neutral-500">{TITLE}</div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <a href={LINKEDIN} className="inline-flex items-center gap-1 hover:underline">
              <Linkedin className="h-4 w-4" /> LinkedIn
            </a>
            {GITHUB && (
              <a href={GITHUB} className="inline-flex items-center gap-1 hover:underline">
                <Github className="h-4 w-4" /> GitHub
              </a>
            )}
          </div>
        </div>
        <div className="mt-4">© {new Date().getFullYear()} {NAME_FULL}. All rights reserved.</div>
      </footer>
    </div>
  );
}
