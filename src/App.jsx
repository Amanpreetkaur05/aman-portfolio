import React from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Download,
  Linkedin,
  Globe,
  GraduationCap,
  Briefcase,
  BookOpen,
  Cpu,
  ShieldCheck,
  Github,
  ExternalLink,
  Star,
  Sparkles
} from "lucide-react";

// ----------------------
// THEME & CONTENT
// ----------------------
const THEME = {
  bgFrom: "from-slate-50",
  bgTo: "to-indigo-50",
  brand: "indigo-800",
  brandLight: "indigo-600",
  text: "neutral-900",
  subtext: "neutral-600",
  card: "white/90",
};

const NAME_FULL = "Amanpreet Kaur";
const NAME_SHORT = "Aman";
const TITLE = "Innovation · Trust · Digital Futures";
const LOCATION = "Adelaide, Australia";
const EMAIL = "amann.preet@outlook.com";
const LINKEDIN = "https://www.linkedin.com/in/aman-p-kaur";
const GITHUB = "https://github.com/amanpreetkaur05";
const WEBSITE = "";

const TAGS = [
  "Innovation Leadership",
  "Strategic Thinking",
  "Digital Trust",
  "AI",
  "Blockchain",
  "Identity Management",
  "Agri‑food SMEs",
  "Cyber Security",
  "Business Intelligence",
  "Data Storytelling",
];

const PROJECTS = [
  {
    title: "AI‑Driven Blockchain Identity Management for Agri‑food Supply Chains",
    blurb: "PhD work exploring how AI + blockchain improve identity assurance, traceability, and compliance for SMEs.",
    tags: ["Research", "Identity", "Supply Chain", "AI", "Blockchain"],
    link: "#",
    image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=1080&auto=format&fit=crop",
  },
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
    title: "Decentralised Identity: Practical Pathways for SMEs",
    event: "Interactive Session",
    link: "#",
  },
  {
    title: "Design Thinking & Human‑Centred Design",
    event: "Workshop",
    link: "#",
  },
  {
    title: "Cyber Security in a Constantly Changing Environment",
    event: "Interactive Session",
    link: "#",
  },
  {
    title: "Strategic Innovation and Emerging Tech Futures",
    event: "Industry Panel",
    link: "#",
  },
  {
    title: "Leadership in Digital Transformation",
    event: "Keynote Talk",
    link: "#",
  },
];

const TESTIMONIALS = [
  {
    quote: "I choose to see people not just as they are, but as they are becoming — because growth deserves compassion, not judgment.",
    by: "Personal Principle",
  },
  { quote: "She aims to turn research into action.", by: "Colleague" },
];

// ----------------------
// SMALL UI PRIMITIVES
// ----------------------
const SocialLink = ({ href, children }) => (
  <a
    href={href}
    target="_blank"
    rel="noreferrer noopener"
    className="inline-flex items-center gap-2 rounded-xl px-4 py-2 border border-neutral-200 hover:border-neutral-300 shadow-sm hover:shadow transition"
  >
    {children}
  </a>
);

const Card = ({ className = "", children }) => (
  <div className={`rounded-2xl border border-neutral-200 shadow-sm hover:shadow-md transition bg-${THEME.card} backdrop-blur p-6 ${className}`}>
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

const Ribbon = () => (
  <div className="absolute -top-3 left-6 rounded-full bg-white shadow px-3 py-1 text-xs font-semibold text-neutral-700 flex items-center gap-1">
    <ShieldCheck className="h-3.5 w-3.5 text-indigo-800" /> {NAME_SHORT} · Trusted & Available
  </div>
);

const Monogram = () => (
  <div className="shrink-0 w-20 h-20 rounded-2xl bg-gradient-to-br from-slate-700 to-indigo-800 text-white flex items-center justify-center text-3xl font-bold">
    AK
  </div>
);

// ----------------------
// PAGE
// ----------------------
export default function PortfolioSite() {
  return (
    <div className={`min-h-screen bg-gradient-to-b ${THEME.bgFrom} ${THEME.bgTo} text-${THEME.text}`}>
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
              Hi, I’m <span className="bg-clip-text text-transparent bg-gradient-to-r from-slate-700 to-indigo-800">{NAME_FULL}</span>
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

          <Card className="relative overflow-hidden p-0">
            <Ribbon />
            <img src="https://images.unsplash.com/photo-1551281044-8d8eec5f2313?q=80&w=1200&auto=format&fit=crop" alt="Abstract technology pattern" className="w-full h-64 md:h-[22rem] object-cover" />
          </Card>
        </motion.div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="max-w-7xl mx-auto px-6 pb-16">
        <SectionTitle eyebrow="Next Step" title={`Work with ${NAME_SHORT}`}>
          Consulting, research collaborations, guest lectures, workshops, or product sprints.
        </SectionTitle>
        <Card>
          <div className="grid md:grid-cols-2 gap-6 items-start">
            <div>
              <div className="text-lg font-semibold">Let’s talk</div>
              <p className="mt-2 text-sm text-neutral-700">I respond within 24–48 hours.</p>
              <div className="mt-4 flex flex-wrap gap-3">
                <SocialLink href={`mailto:${EMAIL}`}>
                  <Mail className="h-4 w-4" /> {EMAIL}
                </SocialLink>
                <SocialLink href={LINKEDIN}>
                  <Linkedin className="h-4 w-4" /> LinkedIn Profile
                </SocialLink>
              </div>
            </div>

            <form action={`mailto:${EMAIL}`} method="POST" className="bg-neutral-50 rounded-2xl p-4 border border-neutral-200">
              <div className="grid gap-3">
                <input className="px-3 py-2 rounded-xl border border-neutral-300 focus:outline-none" placeholder="Your name" name="name" />
                <input className="px-3 py-2 rounded-xl border border-neutral-300 focus:outline-none" placeholder="Your email" name="email" />
                <textarea rows={4} className="px-3 py-2 rounded-xl border border-neutral-300 focus:outline-none" placeholder="What would you like to achieve?" name="message" />
                <button className="rounded-xl px-4 py-2 bg-indigo-800 text-white hover:bg-indigo-700">Send enquiry</button>
              </div>
            </form>
          </div>
        </Card>
      </section>
    </div>
  );
}
