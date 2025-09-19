import React from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Linkedin,
  Github,
  ShieldCheck,
  ExternalLink,
  Layers,
  Package,
  Bot,
  LifeBuoy,
  FileText,
  Database,
  Lock,
  CheckCircle2,
  BadgeCheck,
  PhoneCall,
  ClipboardList,
  Sparkles,
  BookCheck,
  Activity,
  Accessibility,
  ChartLine,
  Info,
  Star,
  ArrowRight,
  Image as ImageIcon,
} from "lucide-react";

/* -----------------------------------------------
   THEME — neutral base + subtle accents
   ----------------------------------------------- */
const THEME = {
  pageBg: "bg-stone-50",
  brand: "text-stone-900",
  brandSubtle: "text-stone-700",
  accentBg: "bg-stone-900",
  accentText: "text-white",
  text: "text-stone-900",
  border: "border-stone-200",
  chipBg: "bg-stone-100",
  chipText: "text-stone-800",
  chipBorder: "border-stone-200",
  // gentle accent chips/section ribbons (earthy + calm)
  accent1: "bg-emerald-50 text-emerald-900 border-emerald-200",
  accent2: "bg-amber-50 text-amber-900 border-amber-200",
  accent3: "bg-sky-50 text-sky-900 border-sky-200",
};

/* -----------------------------------------------
   BRAND / LINKS
   ----------------------------------------------- */
const BRAND = "APK Resources"; // requested brand name
const NAME_FULL = "Amanpreet Kaur (APK)";
const NAME_SHORT = "Aman";
const LOCATION = "Adelaide, Australia";
const TITLE = "Modern RTO Resources Publisher";
const EMAIL = "amann.preet@outlook.com";
const LINKEDIN = "https://www.linkedin.com/in/aman-p-kaur";
const GITHUB = "https://github.com/amanpreetkaur05";
const WEBSITE = ""; // optional
const LOGO_MONO = "APK"; // simple monogram
const CALENDLY = "https://calendly.com/your-link/intro-20"; // ← replace with your real link

/* -----------------------------------------------
   TAGS & SALES COPY
   ----------------------------------------------- */
const TAGS = [
  "Editable & Audit-Ready",
  "SCORM/xAPI eLearning",
  "Traceable Mapping",
  "AI Contextualiser (Beta)",
  "Automated Mapping Validator",
  "Version-Diff Updates",
  "Accessibility (WCAG 2.2 intent)",
];

/* -----------------------------------------------
   OFFER CARDS
   ----------------------------------------------- */
const OFFERS = [
  {
    icon: <Package className="h-4 w-4" />,
    title: "Qualification & Unit Packs",
    bullets: [
      "Learner + Trainer Guides",
      "Assessment Tools + Marking Guides",
      "Traceable Mapping Matrix",
    ],
    footer: "From $350 per unit · $2.5k per qualification",
    tone: "accent1",
  },
  {
    icon: <Layers className="h-4 w-4" />,
    title: "eLearning (SCORM/xAPI)",
    bullets: [
      "Interactive modules & quizzes",
      "LMS-ready (SCORM 1.2/2004)",
      "xAPI analytics option",
    ],
    footer: "Add-on from $800 per unit",
    tone: "accent3",
  },
  {
    icon: <ShieldCheck className="h-4 w-4" />,
    title: "Audit-Readiness Support",
    bullets: [
      "Pre-audit resource review",
      "Rectification guidance",
      "Trainer implementation tips",
    ],
    footer: "Retainers from $3k/year",
    tone: "accent2",
  },
  {
    icon: <Bot className="h-4 w-4" />,
    title: "AI Contextualiser (Beta)",
    bullets: [
      "Faster industry/role contextualising",
      "Guardrails protect competency intent",
      "Mapping gap checks",
    ],
    footer: "Pilot with selected partners",
    tone: "accent1",
  },
  {
    icon: <LifeBuoy className="h-4 w-4" />,
    title: "Updates Subscription",
    bullets: [
      "Monthly change monitoring",
      "Versioned updates + diffs",
      "Priority support",
    ],
    footer: "From $249/month (Pro from $599)",
    tone: "accent3",
  },
];

/* -----------------------------------------------
   CATALOGUE — Nursing (Cert III/IV) & IT (Cert III/IV)
   (sample units are placeholders you can replace)
   ----------------------------------------------- */
const PACKS = [
  {
    id: "nursing-cert-iii",
    category: "Nursing",
    level: "Certificate III",
    code: "HLTxxx (sample)",
    image:
      "https://images.unsplash.com/photo-1584982751601-97dcc096659c?q=80&w=1200&auto=format&fit=crop",
    includes: [
      "Editable Learner & Trainer Guides",
      "Assessment Tools + Marking Guides",
      "Mapping Matrix + Implementation Notes",
      "Optional: SCORM/xAPI eLearning",
    ],
    sampleUnits: ["HLTINF001", "HLTAID011", "HLTWHS002"],
  },
  {
    id: "nursing-cert-iv",
    category: "Nursing",
    level: "Certificate IV",
    code: "HLTxxx (sample)",
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1200&auto=format&fit=crop",
    includes: [
      "Advanced clinical scenarios (simulated)",
      "Assessment evidence plans",
      "Mapping Matrix + validation checklist",
      "Optional: xAPI analytics dashboard",
    ],
    sampleUnits: ["HLTENN001", "HLTENN006", "HLTENN008"],
  },
  {
    id: "it-cert-iii",
    category: "Information Technology",
    level: "Certificate III",
    code: "ICTxxx (sample)",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop",
    includes: [
      "Hands-on labs + task sheets",
      "Assessor guides & marking rubrics",
      "Mapping Matrix with evidence coverage",
      "Optional: SCORM for blended delivery",
    ],
    sampleUnits: ["ICTICT213", "ICTSAS214", "ICTICT214"],
  },
  {
    id: "it-cert-iv",
    category: "Information Technology",
    level: "Certificate IV",
    code: "ICTxxx (sample)",
    image:
      "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1200&auto=format&fit=crop",
    includes: [
      "Project-based tasks + datasets",
      "Security & networking scenarios",
      "Mapping Matrix + assessor moderation forms",
      "Optional: xAPI analytics dashboard",
    ],
    sampleUnits: ["ICTSAS442", "ICTNWK420", "ICTICT451"],
  },
];

/* -----------------------------------------------
   PROOF / TESTIMONIALS
   ----------------------------------------------- */
const CASE_STUDIES = [
  {
    title: "Hospitality RTO — Assessment Refresh",
    result:
      "Mapped & modernised 7 units; zero audit findings on follow-up; first-time LMS pass.",
    proof: "Lead trainer testimonial on mapping traceability.",
  },
  {
    title: "Community Services — eLearning Lift",
    result:
      "Converted workbook delivery to interactive SCORM; +23% completion in 90 days.",
    proof: "LMS analytics + learner feedback excerpts.",
  },
];

const TESTIMONIALS = [
  {
    quote:
      "The assessment mapping was crystal-clear. Our rectification workload dropped dramatically.",
    author: "Academic Manager, SA",
  },
  {
    quote:
      "Learners finally enjoy the modules—clean design, relevant tasks, and easy LMS setup.",
    author: "eLearning Lead, VIC",
  },
];

/* -----------------------------------------------
   FAQS
   ----------------------------------------------- */
const FAQS = [
  {
    q: "Do I need to be an RTO to buy your resources?",
    a: "No. We sell to RTOs and providers. We don’t deliver or assess nationally recognised training ourselves.",
  },
  {
    q: "Are the files editable?",
    a: "Yes. You receive editable source (e.g., DOCX, PPTX) plus SCORM/xAPI packages for eLearning add-ons.",
  },
  {
    q: "How do updates work?",
    a: "Subscribers receive versioned updates with a changelog and mapping diffs when training packages change.",
  },
  {
    q: "Do you guarantee audit outcomes?",
    a: "We provide defensible mapping, validation and support. Final outcomes depend on RTO implementation.",
  },
];

/* -----------------------------------------------
   PRIMITIVES
   ----------------------------------------------- */
const SocialLink = ({ href, children }) => (
  <a
    href={href}
    target="_blank"
    rel="noreferrer noopener"
    className={`inline-flex items-center gap-2 rounded-lg px-4 py-2 border ${THEME.border} ${THEME.brandSubtle} hover:underline bg-white`}
  >
    {children}
  </a>
);

const Card = ({ className = "", children }) => (
  <div className={`rounded-xl border ${THEME.border} bg-white p-6 ${className}`}>{children}</div>
);

const SectionTitle = ({ eyebrow, title, children }) => (
  <div className="mb-6">
    <div className="text-xs uppercase tracking-widest text-stone-500">{eyebrow}</div>
    <h2 className={`text-2xl md:text-3xl font-semibold mt-1 ${THEME.brand}`}>{title}</h2>
    {children && <p className="mt-2 text-sm text-stone-600">{children}</p>}
  </div>
);

function ThinDivider() {
  return <div className={`h-px w-full border-t ${THEME.border}`} />;
}

function Badge({ icon, text }) {
  return (
    <div className="flex items-center gap-2 border border-stone-200 bg-white rounded-lg px-3 py-2">
      {icon}
      <span className="text-sm text-stone-800">{text}</span>
    </div>
  );
}

/* -----------------------------------------------
   STRIPS
   ----------------------------------------------- */
function CredibilityStrip() {
  const points = [
    { icon: <CheckCircle2 className="h-4 w-4" />, text: "Audit-ready mapping & validation" },
    { icon: <Lock className="h-4 w-4" />, text: "Privacy-aware portal & versioning" },
    { icon: <BadgeCheck className="h-4 w-4" />, text: "Clear licences & implementation guides" },
  ];
  return (
    <div className="w-full bg-stone-100">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="grid md:grid-cols-3 gap-3">
          {points.map((p, i) => (
            <div key={i} className="flex items-center gap-2 text-sm text-stone-800">
              {p.icon}
              <span className="font-medium">{p.text}</span>
            </div>
          ))}
        </div>
      </div>
      <ThinDivider />
    </div>
  );
}

/* -----------------------------------------------
   HERO IMAGE BANNER (subtle imagery)
   ----------------------------------------------- */
function ImageBanner({ src, alt, tone = "accent1" }) {
  const toneClass =
    tone === "accent2"
      ? THEME.accent2
      : tone === "accent3"
      ? THEME.accent3
      : THEME.accent1;
  return (
    <div className={`rounded-xl border ${THEME.border} overflow-hidden`}>
      <div className={`px-4 py-2 text-xs ${toneClass} border-b ${THEME.border} flex items-center gap-2`}>
        <ImageIcon className="h-3.5 w-3.5" />
        Curated imagery to set context (royalty-free).
      </div>
      <img src={src} alt={alt} className="w-full h-48 md:h-64 object-cover" loading="lazy" />
    </div>
  );
}

/* -----------------------------------------------
   OFFER GRID
   ----------------------------------------------- */
function OfferGrid() {
  const container = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.08 } } };
  const item = { hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0, transition: { duration: 0.35, ease: "easeOut" } } };
  return (
    <section id="offers" className="max-w-7xl mx-auto px-6 pb-12">
      <SectionTitle eyebrow="Solutions" title="What We Deliver">
        Editable resources, LMS-ready eLearning, and ongoing updates — designed for Australian VET.
      </SectionTitle>
      <motion.div variants={container} initial="hidden" animate="show" className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {OFFERS.map((o) => (
          <motion.div key={o.title} variants={item}>
            <Card>
              <div
                className={`inline-flex items-center gap-2 text-xs border rounded-full px-2 py-0.5 ${
                  o.tone === "accent2"
                    ? "bg-amber-50 border-amber-200 text-amber-900"
                    : o.tone === "accent3"
                    ? "bg-sky-50 border-sky-200 text-sky-900"
                    : "bg-emerald-50 border-emerald-200 text-emerald-900"
                }`}
              >
                {o.icon} <span>Offer</span>
              </div>
              <h3 className="mt-2 font-semibold text-lg text-stone-900">{o.title}</h3>
              <ul className="mt-2 text-sm text-stone-700 list-disc pl-4 space-y-1">
                {o.bullets.map((b) => <li key={b}>{b}</li>)}
              </ul>
              <div className="mt-3 text-xs text-stone-700">{o.footer}</div>
            </Card>
          </motion.div>
        ))}
      </motion.div>
      <div className="mt-8 text-center">
        <a
          href="#contact"
          className="inline-flex items-center gap-2 rounded-lg px-6 py-3 bg-stone-900 text-white hover:bg-stone-800"
        >
          Request a sample pack <ExternalLink className="h-4 w-4" />
        </a>
      </div>
    </section>
  );
}

/* -----------------------------------------------
   WHY US — sell the whitespace
   ----------------------------------------------- */
function WhyUs() {
  const points = [
    {
      icon: <Bot className="h-5 w-5" />,
      title: "AI Contextualiser + Mapping Validator",
      desc: "Accelerate contextualisation and spot coverage gaps against unit requirements.",
      tone: THEME.accent1,
    },
    {
      icon: <Activity className="h-5 w-5" />,
      title: "xAPI Analytics, Not Just SCORM",
      desc: "See learning signals and completion trends with optional xAPI dashboards.",
      tone: THEME.accent3,
    },
    {
      icon: <FileText className="h-5 w-5" />,
      title: "Version-Diff Changelogs",
      desc: "Transparent updates when packages change — what changed, where, and why.",
      tone: THEME.accent2,
    },
    {
      icon: <Accessibility className="h-5 w-5" />,
      title: "Accessibility Pledge (WCAG 2.2 intent)",
      desc: "Design for all learners with accessible content and UI conventions.",
      tone: THEME.accent1,
    },
    {
      icon: <ClipboardList className="h-5 w-5" />,
      title: "Trainer Onboarding Micro-Course",
      desc: "Short, practical modules so trainers implement consistently.",
      tone: THEME.accent3,
    },
    {
      icon: <ChartLine className="h-5 w-5" />,
      title: "LMS Compatibility Matrix",
      desc: "We test common LMSs and document any quirks up-front.",
      tone: THEME.accent2,
    },
  ];
  return (
    <section id="why-us" className="max-w-7xl mx-auto px-6 pb-12">
      <SectionTitle eyebrow="Differentiators" title="Why Choose APK Resources">
        We go beyond “editable and compliant” to reduce audit risk and lift delivery quality.
      </SectionTitle>
      <div className="grid md:grid-cols-3 gap-6">
        {points.map((p) => (
          <Card key={p.title}>
            <div className={`inline-flex items-center gap-2 text-xs px-2 py-0.5 rounded-full border ${p.tone}`}>
              {p.icon} <span>Edge</span>
            </div>
            <h3 className="mt-2 font-semibold text-lg">{p.title}</h3>
            <p className="mt-2 text-sm text-stone-700">{p.desc}</p>
          </Card>
        ))}
      </div>
    </section>
  );
}

/* -----------------------------------------------
   PROCESS
   ----------------------------------------------- */
function Process() {
  const steps = [
    { k: "01", t: "Discovery", d: "Clarify quals/units, delivery context, and audit priorities." },
    { k: "02", t: "Design", d: "Draft learner/assessment with traceable mapping." },
    { k: "03", t: "Validate", d: "Peer review + compliance checks + pilot feedback." },
    { k: "04", t: "Deliver", d: "Editable files & SCORM/xAPI; implementation guidance." },
    { k: "05", t: "Update", d: "Monitor changes; versioned updates with diffs for subscribers." },
  ];
  return (
    <section id="process" className="max-w-7xl mx-auto px-6 pb-12">
      <SectionTitle eyebrow="How It Works" title="A Clean, Defensible Workflow">
        Designed to minimise audit risk and accelerate delivery.
      </SectionTitle>
      <div className="grid md:grid-cols-5 gap-4">
        {steps.map((s) => (
          <Card key={s.k} className="flex flex-col">
            <div className="text-xs text-stone-500">{s.k}</div>
            <div className="text-lg font-semibold mt-1">{s.t}</div>
            <p className="text-sm text-stone-700 mt-2">{s.d}</p>
          </Card>
        ))}
      </div>
    </section>
  );
}

/* -----------------------------------------------
   PRICING
   ----------------------------------------------- */
function Pricing() {
  const plans = [
    {
      name: "Per-Unit",
      price: "from $350",
      includes: ["Editable source files", "Mapping matrix", "Email support"],
      tone: THEME.accent1,
    },
    {
      name: "Qualification Pack",
      price: "from $2,500",
      includes: ["All unit materials", "Trainer & marking guides", "Mapping + implementation notes"],
      tone: THEME.accent2,
    },
    {
      name: "Updates (Pro)",
      price: "$599 / month",
      includes: ["Monthly change monitoring", "Versioned updates + diffs", "Priority support"],
      tone: THEME.accent3,
    },
  ];
  return (
    <section id="pricing" className="max-w-7xl mx-auto px-6 pb-12">
      <SectionTitle eyebrow="Simple & Clear" title="Pricing Anchors" />
      <div className="grid md:grid-cols-3 gap-6">
        {plans.map((p) => (
          <Card key={p.name}>
            <div className={`text-xs uppercase tracking-widest px-2 py-0.5 rounded-full inline-block border ${p.tone.replace(" text-", " border-")}`}>
              {p.name}
            </div>
            <div className="text-2xl font-semibold mt-2">{p.price}</div>
            <ul className="mt-3 text-sm text-stone-700 list-disc pl-4 space-y-1">
              {p.includes.map((x) => <li key={x}>{x}</li>)}
            </ul>
          </Card>
        ))}
      </div>
    </section>
  );
}

/* -----------------------------------------------
   PROOF
   ----------------------------------------------- */
function CaseStudies() {
  return (
    <section id="work" className="max-w-7xl mx-auto px-6 pb-8">
      <SectionTitle eyebrow="Outcomes" title="Selected Results">
        Small samples of how we reduce audit risk and lift learner outcomes.
      </SectionTitle>
      <div className="grid md:grid-cols-2 gap-6">
        {CASE_STUDIES.map((c) => (
          <Card key={c.title}>
            <h3 className="font-semibold text-lg">{c.title}</h3>
            <p className="mt-2 text-sm text-stone-700"><strong>Result:</strong> {c.result}</p>
            <p className="mt-2 text-xs text-stone-600"><strong>Proof:</strong> {c.proof}</p>
          </Card>
        ))}
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="max-w-7xl mx-auto px-6 pb-12">
      <div className="grid md:grid-cols-2 gap-6">
        {TESTIMONIALS.map((t, i) => (
          <Card key={i}>
            <blockquote className="text-stone-800">“{t.quote}”</blockquote>
            <div className="text-xs text-stone-600 mt-2">— {t.author}</div>
          </Card>
        ))}
      </div>
    </section>
  );
}

/* -----------------------------------------------
   FAQ
   ----------------------------------------------- */
function FAQ() {
  return (
    <section id="faq" className="max-w-7xl mx-auto px-6 pb-12">
      <SectionTitle eyebrow="Clarity" title="Frequently Asked Questions" />
      <div className="grid md:grid-cols-2 gap-6">
        {FAQS.map((f) => (
          <Card key={f.q}>
            <h3 className="font-semibold">{f.q}</h3>
            <p className="mt-2 text-sm text-stone-700">{f.a}</p>
          </Card>
        ))}
      </div>
    </section>
  );
}

/* -----------------------------------------------
   ABOUT — your bio as a founder
   ----------------------------------------------- */
function About() {
  return (
    <section id="about" className="max-w-7xl mx-auto px-6 pb-12">
      <SectionTitle eyebrow="About" title="Meet APK Resources">
        Founded by {NAME_FULL} — lecturer in IT and researcher in digital identity & trust — we turn rigorous practice into practical, audit-aware learning resources.
      </SectionTitle>

      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <h3 className="font-semibold text-lg">Who we are</h3>
          <p className="mt-2 text-sm text-stone-700">
            APK Resources designs **editable, audit-ready** training and assessment materials with a modern learner
            experience. We blend instructional design, compliance know-how, and practical delivery (LMS, SCORM/xAPI).
          </p>
          <ul className="mt-3 text-sm text-stone-700 list-disc pl-4 space-y-1">
            <li>Based in {LOCATION}; serving RTOs across Australia</li>
            <li>Special focus: Nursing (HLT), IT (ICT) — Cert III & IV</li>
            <li>Research-informed: identity, trust, analytics</li>
          </ul>
        </Card>

        <div className="space-y-4">
          <ImageBanner
            src="https://images.unsplash.com/photo-1600959907703-125ba1374a12?q=80&w=1200&auto=format&fit=crop"
            alt="Healthcare training scene"
            tone="accent2"
          />
          <ImageBanner
            src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop"
            alt="Technology training scene"
            tone="accent3"
          />
        </div>
      </div>
    </section>
  );
}

/* -----------------------------------------------
   CATALOGUE — interactive filter
   ----------------------------------------------- */
function Catalogue() {
  const tabs = [
    { key: "all", label: "All" },
    { key: "Nursing", label: "Nursing" },
    { key: "Information Technology", label: "IT" },
  ];
  const [active, setActive] = React.useState("all");
  const items = active === "all" ? PACKS : PACKS.filter((p) => p.category === active);

  return (
    <section id="catalogue" className="max-w-7xl mx-auto px-6 pb-12">
      <SectionTitle eyebrow="Catalogue" title="Nursing & IT — Certificate III and IV">
        Choose a pack to request a sample and implementation notes.
      </SectionTitle>

      {/* Tabs */}
      <div className="mb-6 flex flex-wrap gap-2">
        {tabs.map((t) => (
          <button
            key={t.key}
            onClick={() => setActive(t.key)}
            className={`px-3 py-1.5 rounded-full text-sm border ${
              active === t.key ? "bg-stone-900 text-white border-stone-900" : "bg-white text-stone-700 border-stone-200 hover:border-stone-300"
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      {/* Cards */}
      <div className="grid md:grid-cols-2 gap-6">
        {items.map((p) => (
          <Card key={p.id} className="overflow-hidden">
            <img src={p.image} alt={`${p.category} ${p.level}`} className="w-full h-40 object-cover rounded-lg mb-4" loading="lazy" />
            <div className="flex items-center gap-2 text-xs">
              <span className="px-2 py-0.5 rounded-full border bg-emerald-50 border-emerald-200 text-emerald-900">{p.category}</span>
              <span className="px-2 py-0.5 rounded-full border bg-sky-50 border-sky-200 text-sky-900">{p.level}</span>
              <span className="px-2 py-0.5 rounded-full border bg-amber-50 border-amber-200 text-amber-900">{p.code}</span>
            </div>
            <h3 className="mt-2 font-semibold text-lg">{p.category} — {p.level}</h3>
            <ul className="mt-2 text-sm text-stone-700 list-disc pl-4 space-y-1">
              {p.includes.map((b) => <li key={b}>{b}</li>)}
            </ul>
            <div className="mt-2 text-xs text-stone-600">
              Sample units: {p.sampleUnits.join(", ")}
            </div>
            <div className="mt-4 flex gap-3">
              <a href="#contact" className="inline-flex items-center gap-2 rounded-lg px-4 py-2 bg-stone-900 text-white hover:bg-stone-800">
                Request Sample <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#why-us" className="inline-flex items-center gap-2 rounded-lg px-4 py-2 border border-stone-300 text-stone-800">
                See Why Us
              </a>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}

/* -----------------------------------------------
   CTA BAR
   ----------------------------------------------- */
function CtaBar() {
  return (
    <div className="w-full bg-stone-900">
      <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="text-white">
          <div className="text-sm uppercase tracking-widest opacity-80">Next step</div>
          <div className="text-2xl font-semibold mt-1">Request a sample pack or book a 20-min fit call</div>
        </div>
        <div className="flex gap-3">
          <a href="#contact" className="inline-flex items-center gap-2 rounded-lg px-5 py-3 bg-white text-stone-900">
            Request Sample <FileText className="h-4 w-4" />
          </a>
          <a href={CALENDLY} target="_blank" rel="noreferrer noopener" className="inline-flex items-center gap-2 rounded-lg px-5 py-3 border border-stone-300 bg-stone-900 text-white">
            Book 20-min Call <PhoneCall className="h-4 w-4" />
          </a>
        </div>
      </div>
      <ThinDivider />
    </div>
  );
}

/* -----------------------------------------------
   PAGE
   ----------------------------------------------- */
export default function PortfolioSite() {
  return (
    <div className={`min-h-screen ${THEME.pageBg} ${THEME.text}`}>
      {/* Schema.org Organization */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: `${BRAND} — RTO Resources Publisher`,
            founder: NAME_FULL,
            address: LOCATION,
            url: WEBSITE || LINKEDIN,
            sameAs: [LINKEDIN, GITHUB].filter(Boolean),
            contactPoint: [{ "@type": "ContactPoint", email: EMAIL, contactType: "sales" }],
          }),
        }}
      />

      {/* NAV */}
      <header className="max-w-7xl mx-auto px-6 pt-8 pb-4">
        <nav className="flex items-center justify-between">
          <a href="#top" className="flex items-center gap-3">
            <div className={`w-9 h-9 rounded-lg ${THEME.accentBg} ${THEME.accentText} flex items-center justify-center text-sm font-semibold`}>{LOGO_MONO}</div>
            <div className="leading-tight">
              <div className={`font-semibold tracking-tight ${THEME.brand}`}>{BRAND}</div>
              <div className="text-xs text-stone-500">Editable. LMS-ready. Audit-aware.</div>
            </div>
          </a>
          <div className="hidden md:flex gap-4 text-sm">
            <a href="#about" className={`hover:underline ${THEME.brandSubtle}`}>About</a>
            <a href="#catalogue" className={`hover:underline ${THEME.brandSubtle}`}>Catalogue</a>
            <a href="#offers" className={`hover:underline ${THEME.brandSubtle}`}>Solutions</a>
            <a href="#why-us" className={`hover:underline ${THEME.brandSubtle}`}>Why Us</a>
            <a href="#process" className={`hover:underline ${THEME.brandSubtle}`}>Process</a>
            <a href="#pricing" className={`hover:underline ${THEME.brandSubtle}`}>Pricing</a>
            <a href="#work" className={`hover:underline ${THEME.brandSubtle}`}>Results</a>
            <a href="#faq" className={`hover:underline ${THEME.brandSubtle}`}>FAQ</a>
            <a href="#contact" className={`hover:underline ${THEME.brandSubtle}`}>Contact</a>
          </div>
        </nav>
      </header>

      {/* HERO */}
      <section id="top" className="max-w-7xl mx-auto px-6 pb-10">
        <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-xs uppercase tracking-widest text-stone-500">{LOCATION}</p>
            <h1 className={`text-4xl md:text-6xl font-semibold leading-tight tracking-tight mt-2 ${THEME.brand}`}>
              {BRAND}
            </h1>
            <p className="mt-3 text-lg text-stone-700">{TITLE}</p>
            <p className="mt-3 text-stone-600">
              We create <strong>editable, audit-ready VET resources</strong> and <strong>LMS-ready eLearning</strong>,
              with transparent mapping, version control, and optional AI tools to speed up contextualisation.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <SocialLink href={`mailto:${EMAIL}`}><Mail className="h-4 w-4" /> Email</SocialLink>
              <SocialLink href={LINKEDIN}><Linkedin className="h-4 w-4" /> LinkedIn</SocialLink>
              {GITHUB && <SocialLink href={GITHUB}><Github className="h-4 w-4" /> GitHub</SocialLink>}
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {TAGS.map((t) => (
                <span key={t} className={`text-sm px-3 py-1 rounded-full ${THEME.chipBg} ${THEME.chipText} border ${THEME.chipBorder}`}>
                  {t}
                </span>
              ))}
            </div>

            <div className="mt-8 flex gap-3">
              <a href="#contact" className="inline-flex items-center gap-2 rounded-lg px-6 py-3 bg-stone-900 text-white hover:bg-stone-800">
                Request Sample Pack <ExternalLink className="h-4 w-4" />
              </a>
              <a href={CALENDLY} target="_blank" rel="noreferrer noopener" className="inline-flex items-center gap-2 rounded-lg px-6 py-3 border border-stone-300 text-stone-800">
                Book 20-min Call <PhoneCall className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <ImageBanner
              src="https://images.unsplash.com/photo-1576765608527-c737a7e65507?q=80&w=1200&auto=format&fit=crop"
              alt="Learners in a modern training environment"
              tone="accent1"
            />
            <div className="grid grid-cols-2 gap-3">
              <Badge icon={<FileText className="h-3.5 w-3.5" />} text="Editable Guides" />
              <Badge icon={<Layers className="h-3.5 w-3.5" />} text="SCORM / xAPI" />
              <Badge icon={<Database className="h-3.5 w-3.5" />} text="Traceable Mapping" />
              <Badge icon={<Bot className="h-3.5 w-3.5" />} text="AI Contextualiser" />
            </div>
          </div>
        </motion.div>
      </section>

      {/* CREDIBILITY */}
      <CredibilityStrip />

      {/* ABOUT */}
      <About />

      {/* CATALOGUE */}
      <Catalogue />

      {/* OFFERS */}
      <OfferGrid />

      {/* WHY US */}
      <WhyUs />

      {/* PROCESS */}
      <Process />

      {/* PRICING */}
      <Pricing />

      {/* PROOF */}
      <CaseStudies />
      <Testimonials />

      {/* CTA BAR */}
      <CtaBar />

      {/* CONTACT */}
      <section id="contact" className="max-w-7xl mx-auto px-6 pb-16">
        <SectionTitle eyebrow="Next Step" title={`Work with ${NAME_SHORT}`}>
          Request a sample pack, book a 20-min fit call, or ask something specific.
        </SectionTitle>
        <Card>
          <div className={`rounded-xl overflow-hidden border ${THEME.border}`}>
            {/* Google Form embed – neutral, full-width */}
            <iframe
              className="w-full h-[900px] md:h-[1000px]"
              src="https://docs.google.com/forms/d/e/1FAIpQLSd0Lr0lRCdfSJeYEplBbO8eokAWYFTYfitfrFNeW5tjPvFT7g/viewform?embedded=true"
              title="Contact Enquiry"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              sandbox="allow-forms allow-scripts allow-same-origin allow-popups"
            />
          </div>
          <div className="mt-3 text-xs text-stone-500">
            Prefer email? <a className="underline" href={`mailto:${EMAIL}`}>Write to us</a>. For privacy, the form never displays your address publicly.
          </div>
        </Card>
      </section>

      {/* FOOTER */}
      <footer className="max-w-7xl mx-auto px-6 pb-10 text-sm text-stone-600">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className={`w-8 h-8 rounded-lg ${THEME.accentBg} ${THEME.accentText} flex items-center justify-center text-sm font-semibold`}>
              {LOGO_MONO}
            </div>
            <div>
              <div className={`font-semibold ${THEME.brand}`}>{BRAND}</div>
              <div className="text-xs text-stone-500">Editable. LMS-ready. Audit-aware.</div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <a href={LINKEDIN} className={`inline-flex items-center gap-1 hover:underline ${THEME.brandSubtle}`}>
              <Linkedin className="h-4 w-4" /> LinkedIn
            </a>
            {GITHUB && (
              <a href={GITHUB} className={`inline-flex items-center gap-1 hover:underline ${THEME.brandSubtle}`}>
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
