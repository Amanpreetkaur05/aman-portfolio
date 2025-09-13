import React from "react";
import { motion } from "framer-motion";
import {
  Mail,
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
   THEME & BRAND
-------------------------------------------------*/
const THEME = {
  // subtle, modern, soft neutrals
  bgFrom: "from-zinc-50",
  bgTo: "to-slate-100",
  brand: "indigo-900",
  brandLight: "indigo-600",
  text: "neutral-900",
};

const BUSINESS_NAME = "APK Advisory";

const NAME_FULL = "Amanpreet Kaur";
const NAME_SHORT = "Aman";
const TITLE = "Innovation · Trust · Digital Futures";
const LOCATION = "Adelaide, Australia";
const EMAIL = "amann.preet@outlook.com";
const LINKEDIN = "https://www.linkedin.com/in/aman-p-kaur";
const GITHUB = "https://github.com/amanpreetkaur05";
const WEBSITE = ""; // optional

// Place the whimsical image as /public/whimsical-hpt.png
const WHIMSICAL_IMAGE = "/whimsical-hpt.png";

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
    image:
      "https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=1080&auto=format&fit=crop",
  },
  {
    title: "Lead & Build High-Performance Teams — Whimsical Flow",
    blurb:
      "A visual framework for forming, aligning, and scaling high-performance teams using a concise systems-thinking flow.",
    tags: ["Leadership", "Org Design", "Playbook"],
    image: WHIMSICAL_IMAGE,
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
      "https://www.linkedin.com/pulse/unlocking-supply-chain-efficiency-through-ai-driven-blockchain-kaur-glyzc/?trackingId=x50ddaqTBAaQ9rbKNV%2FW6A%3D%3D",
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
   PRIMITIVES
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
  <div
    className={`rounded-2xl border border-neutral-200 shadow-sm hover:shadow-md transition bg-white/90 backdrop-blur p-6 ${className}`}
  >
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

/* ------------------------------------------------
   QUICK WINS (tabs + framer-motion + pro colors)
   Hash preselect: #wins, #wins:students, #wins:organisations, #wins:beginners
-------------------------------------------------*/
function QuickWins() {
  const items = [
    // Students / Early Researchers
    {
      title: "Assignment Clarity Call",
      audience: "Students",
      audienceKey: "students",
      audienceStyle: "bg-sky-50 border-sky-200 text-sky-800",
      icon: "🎓",
      bullets: [
        "Understand the brief and marking guide",
        "3 clear steps to start, progress, and finish",
        "Mini checklist to self-review before submission",
      ],
      impact: "Confidence to start",
      time: "45 mins",
    },
    {
      title: "Study Strategy Blueprint",
      audience: "Students",
      audienceKey: "students",
      audienceStyle: "bg-sky-50 border-sky-200 text-sky-800",
      icon: "🎓",
      bullets: [
        "Weekly plan that fits real life",
        "Focus techniques that reduce stress",
        "Template you can reuse every term",
      ],
      impact: "Less stress, more progress",
      time: "1 hour",
    },

    // Organisations / Teams
    {
      title: "Strategy Sketch Session",
      audience: "Organisations",
      audienceKey: "organisations",
      audienceStyle: "bg-indigo-50 border-indigo-200 text-indigo-800",
      icon: "🏢",
      bullets: [
        "One-page plan: goals, metrics, risks",
        "Live 1-hour workshop to align the team",
        "Priorities board: what’s in vs out",
      ],
      impact: "Fast alignment",
      time: "1.5 hours",
    },
    {
      title: "Learning Launch Kit",
      audience: "Organisations",
      audienceKey: "organisations",
      audienceStyle: "bg-indigo-50 border-indigo-200 text-indigo-800",
      icon: "🏢",
      bullets: [
        "1-page cheat sheet on one topic",
        "3-min video or script + mini quiz",
        "Simple tracker to see adoption",
      ],
      impact: "Skills that stick",
      time: "1 day",
    },

    // Digital Beginners (any individual)
    {
      title: "Digital Confidence Starter",
      audience: "Beginners",
      audienceKey: "beginners",
      audienceStyle: "bg-emerald-50 border-emerald-200 text-emerald-800",
      icon: "🌱",
      bullets: [
        "Explore interests and map 2–3 directions",
        "Set up basic tools and habits",
        "Personal starter kit to begin today",
      ],
      impact: "Clarity to begin",
      time: "1 hour",
    },
  ];

  const tabs = [
    { key: "all", label: "All" },
    { key: "students", label: "Students" },
    { key: "organisations", label: "Organisations" },
    { key: "beginners", label: "Beginners" },
  ];

  const [activeTab, setActiveTab] = React.useState("all");

  // Preselect tab from hash (#wins:students etc.)
  React.useEffect(() => {
    const pickFromHash = () => {
      const hash = window.location.hash || "";
      if (hash.startsWith("#wins")) {
        const part = hash.split(":")[1]?.toLowerCase();
        if (["students", "organisations", "beginners"].includes(part)) {
          setActiveTab(part);
        } else {
          setActiveTab("all");
        }
      }
    };
    pickFromHash();
    window.addEventListener("hashchange", pickFromHash);
    return () => window.removeEventListener("hashchange", pickFromHash);
  }, []);

  const filtered =
    activeTab === "all" ? items : items.filter((it) => it.audienceKey === activeTab);

  // Framer Motion variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.08 },
    },
  };
  const item = {
    hidden: { opacity: 0, y: 12 },
    show: { opacity: 1, y: 0, transition: { duration: 0.35, ease: "easeOut" } },
  };

  // Tab styles
  const baseTab =
    "px-3 py-1.5 rounded-full text-sm border transition inline-flex items-center gap-2";
  const activeStyles = "bg-neutral-900 text-white border-neutral-900 shadow";
  const inactiveStyles = "bg-white text-neutral-700 border-neutral-200 hover:border-neutral-300";

  return (
    <section id="wins" className="max-w-7xl mx-auto px-6 pb-14">
      <SectionTitle eyebrow="Fast Value" title="Quick Wins I Deliver">
        For students, organisations, and anyone starting fresh in the digital world — clear, supportive, and fast.
      </SectionTitle>

      {/* Tabs */}
      <div className="mb-6 flex flex-wrap gap-2">
        {tabs.map((t) => (
          <a
            key={t.key}
            href={t.key === "all" ? "#wins" : `#wins:${t.key}`}
            onClick={(e) => {
              e.preventDefault();
              window.location.hash = t.key === "all" ? "#wins" : `#wins:${t.key}`;
            }}
            className={`${baseTab} ${activeTab === t.key ? activeStyles : inactiveStyles}`}
          >
            {t.label}
          </a>
        ))}
      </div>

      {/* Cards */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {filtered.map((it) => (
          <motion.div key={it.title} variants={item}>
            <Card className="relative hover:shadow-lg transition-shadow bg-white">
              {/* Ribbon */}
              <div className="absolute -top-3 left-6 rounded-full bg-white shadow px-3 py-1 text-xs font-semibold text-neutral-700 flex items-center gap-1">
                <Zap className="h-3.5 w-3.5 text-indigo-800" /> {NAME_SHORT}
              </div>

              {/* Audience Tag */}
              <div className={`inline-flex items-center gap-1 text-xs border rounded-full px-2 py-0.5 ${it.audienceStyle}`}>
                <span>{it.icon}</span> {it.audience}
              </div>

              <h3 className="mt-2 font-semibold text-lg">{it.title}</h3>
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
          </motion.div>
        ))}
      </motion.div>

      <div className="mt-8 text-center">
        <a
          href="#contact"
          className="inline-flex items-center gap-2 rounded-xl px-6 py-3 bg-gradient-to-r from-indigo-700 to-violet-500 text-white font-semibold hover:from-indigo-800 hover:to-violet-600 shadow-md"
        >
          Not sure where to start? Book a 20-min fit call <ExternalLink className="h-4 w-4" />
        </a>
      </div>
    </section>
  );
}

/* ------------------------------------------------
   VALUE STRIP (soft dividers)
-------------------------------------------------*/
function ValueStrip() {
  const points = [
    { icon: <CheckCircle2 className="h-5 w-5" />, text: "Research depth → shipped outcomes" },
    { icon: <HeartHandshake className="h-5 w-5" />, text: "Empathy-led, evidence-based" },
    { icon: <ShieldCheck className="h-5 w-5" />, text: "Trust, identity & compliance" },
  ];
  return (
    <div className="bg-gradient-to-r from-indigo-700 to-violet-600 text-white">
      <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row gap-3 md:gap-0 items-stretch justify-center">
        {points.map((p, i) => (
          <div
            key={i}
            className={`flex items-center gap-2 text-sm px-4 py-2 ${i < points.length - 1 ? "md:border-r md:border-white/30" : ""}`}
          >
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
            "@type": "Organization",
            name: BUSINESS_NAME,
            founder: NAME_FULL,
            address: LOCATION,
            url: WEBSITE || LINKEDIN,
            sameAs: [LINKEDIN, GITHUB].filter(Boolean),
            contactPoint: [{ "@type": "ContactPoint", email: EMAIL, contactType: "business" }],
          }),
        }}
      />

      {/* NAV (brand-forward, seamless name placement) */}
      <header className="max-w-7xl mx-auto px-6 pt-8 pb-4">
        <nav className="flex items-center justify-between">
          <a href="#top" className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-800 to-indigo-600 text-white flex items-center justify-center text-sm font-bold">
              APK
            </div>
            <div className="leading-tight">
              <div className="font-semibold tracking-tight">{BUSINESS_NAME}</div>
              <div className="text-xs text-neutral-500">by {NAME_FULL}</div>
            </div>
          </a>
          <div className="hidden md:flex gap-4 text-sm">
            <a href="#wins" className="hover:underline">Quick Wins</a>
            <a href="#projects" className="hover:underline">Projects</a>
            <a href="#research" className="hover:underline">Research</a>
            <a href="#teaching" className="hover:underline">Teaching</a>
            <a href="#writing" className="hover:underline">Writing</a>
            <a href="#ask" className="hover:underline">Ask a Question</a>
            <a href="#contact" className="hover:underline">Contact</a>
          </div>
        </nav>
      </header>

      {/* HERO */}
      <section id="top" className="max-w-7xl mx-auto px-6 pb-10">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 gap-10 items-center"
        >
          <div>
            <p className="text-xs uppercase tracking-widest text-neutral-500">{LOCATION}</p>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight mt-2">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-800 to-violet-600">
                {BUSINESS_NAME}
              </span>
            </h1>
            <p className="mt-2 text-neutral-700">
              by <span className="font-semibold">{NAME_FULL}</span>
            </p>
            <p className="mt-3 text-lg text-neutral-700">{TITLE}</p>
            <p className="mt-3 text-neutral-600">
              Envisioning future-ready ecosystems — transforming innovation into strategy and impact.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <SocialLink href={`mailto:${EMAIL}`}><Mail className="h-4 w-4" /> Email</SocialLink>
              <SocialLink href={LINKEDIN}><Linkedin className="h-4 w-4" /> LinkedIn</SocialLink>
              {GITHUB && <SocialLink href={GITHUB}><Github className="h-4 w-4" /> GitHub</SocialLink>}
              {WEBSITE && <SocialLink href={WEBSITE}><Globe className="h-4 w-4" /> Website</SocialLink>}
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {TAGS.map((t) => (
                <span key={t} className="text-sm px-3 py-1 rounded-full bg-white border border-neutral-200 shadow-sm">
                  {t}
                </span>
              ))}
            </div>
          </div>

          <Card className="relative overflow-hidden p-0 flex items-center justify-center h-64 md:h-[22rem]">
            <div className="absolute -top-3 left-6 rounded-full bg-white shadow px-3 py-1 text-xs font-semibold text-neutral-700 flex items-center gap-1">
              <ShieldCheck className="h-3.5 w-3.5 text-indigo-800" /> Trusted & Available
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-slate-200 to-indigo-100" />
            <div className="relative z-10">
              <div className="shrink-0 w-28 h-28 md:w-40 md:h-40 rounded-2xl bg-gradient-to-br from-indigo-800 to-violet-600 text-white flex items-center justify-center text-5xl md:text-6xl font-extrabold tracking-tight">
                APK
              </div>
            </div>
          </Card>
        </motion.div>
      </section>

      {/* VALUE STRIP */}
      <ValueStrip />

      {/* QUICK WINS (tabs) */}
      <QuickWins />

      {/* PROJECTS */}
      <section id="projects" className="max-w-7xl mx-auto px-6 py-10">
        <SectionTitle eyebrow="Selected Work" title="Featured Projects" />
        <div className="grid md:grid-cols-2 gap-6">
          {PROJECTS.map((p) => (
            <Card key={p.title} className="overflow-hidden">
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
                  <span key={t} className="text-xs px-2 py-1 rounded-full bg-indigo-50 border border-indigo-100">
                    {t}
                  </span>
                ))}
              </div>
              {/* Explore: image only as requested; no external link */}
            </Card>
          ))}
        </div>
      </section>

      {/* RESEARCH & TEACHING */}
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

          <Card id="teaching">
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

      {/* EMPATHY QUOTES */}
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

      {/* ASK A QUESTION (Free) */}
      <section id="ask" className="max-w-7xl mx-auto px-6 pb-12">
        <SectionTitle eyebrow="Free Service" title="Ask a Public Question">
          Have a question about UX, identity, AI or teaching? Ask — I’ll answer publicly to help more people.
        </SectionTitle>
        <Card>
          <form className="grid gap-4" action={`mailto:${EMAIL}`} method="POST" encType="text/plain">
            <div>
              <label className="block text-sm text-neutral-700 mb-1">Your Name</label>
              <input className="w-full border border-neutral-300 rounded-lg px-3 py-2" name="name" placeholder="Your name" required />
            </div>
            <div>
              <label className="block text-sm text-neutral-700 mb-1">Your Question</label>
              <textarea className="w-full border border-neutral-300 rounded-lg px-3 py-2 h-28" name="question" placeholder="Ask anything…" required />
            </div>
            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-xl px-4 py-2 bg-neutral-900 text-white hover:bg-neutral-800 shadow"
              title="Send via email"
            >
              Submit Question
            </button>
          </form>
        </Card>
        <p className="mt-3 text-xs text-neutral-500">
          By submitting, you’re happy for a summarized version of your question and my answer to appear on my site (no personal details shared).
        </p>
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
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-800 to-violet-600 text-white flex items-center justify-center text-sm font-bold">
              APK
            </div>
            <div>
              <div className="font-semibold">{BUSINESS_NAME}</div>
              <div className="text-xs text-neutral-500">by {NAME_FULL}</div>
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
        <div className="mt-4">© {new Date().getFullYear()} {BUSINESS_NAME}. All rights reserved.</div>
      </footer>
    </div>
  );
}
