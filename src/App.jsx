import React from "react";
import { motion, AnimatePresence } from "framer-motion";
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
  Activity,
  Accessibility,
  ArrowRight,
  ChevronDown,
  ChevronUp,
  LineChart,
} from "lucide-react";

/* -------------------------------------------------
   INLINE BRAND STYLES (earthy palette) — single file
   ------------------------------------------------- */
const BrandStyles = () => (
  <style>{`
    :root{
      --bg:#F6F1E7; --bg-2:#EFE7D9;
      --accent:#065F46; --accent-hover:#047857; --accent-strong:#064E3B;
      --on-accent:#fff;
      --chip-bg:#f5f5f4; --chip-text:#1f2937; --chip-border:#e5e7eb;

      /* supporting accents for variety (earthy) */
      --sage-50:#ecfdf5; --sage-200:#a7f3d0; --sage-900:#065f46;
      --clay-50:#fff7ed; --clay-200:#fed7aa; --clay-900:#7c2d12;
      --sky-50:#f0f9ff;  --sky-200:#bae6fd;  --sky-900:#075985;
    }
    .brand-bg{ background-color:var(--bg); }
    .brand-bg-2{ background-color:var(--bg-2); }
    .brand-logo{ background-color:var(--accent); color:var(--on-accent); }
    .brand-cta-bar{ background-color:var(--accent-strong); }
    .brand-btn{ background-color:var(--accent); color:var(--on-accent); }
    .brand-btn:hover{ background-color:var(--accent-hover); }
    .brand-outline-btn{ border:1px solid var(--accent); color:#1f2937; background:transparent; }
    .brand-outline-btn:hover{ background:rgba(6,95,70,.06); }
    .brand-chip{ background-color:var(--chip-bg); color:var(--chip-text); border:1px solid var(--chip-border); }

    /* soft gradient helpers */
    .soft-sage { background: linear-gradient(180deg, var(--sage-50), #fff); }
    .soft-clay { background: linear-gradient(180deg, var(--clay-50), #fff); }
    .soft-sky  { background: linear-gradient(180deg, var(--sky-50),  #fff); }

    /* golden ratio hero columns on md+ */
    @media (min-width: 768px){
      .golden-grid{
        display:grid;
        grid-template-columns: 1.618fr 1fr; /* 61.8% / 38.2% */
        gap: 2.5rem;
        align-items: center;
      }
    }

    /* simple focus ring */
    a, button { outline-color: var(--accent); outline-offset: 2px; }
  `}</style>
);

/* -----------------------------------------------
   THEME — EARTHY palette (uses the classes above)
   ----------------------------------------------- */
const THEME = {
  pageBg: "brand-bg",
  text: "text-stone-900",
  brand: "text-stone-900",
  brandSubtle: "text-stone-700",
  border: "border-stone-200",
  accentBg: "brand-logo",
  accentText: "text-white",
  chipBg: "brand-chip",
  chipText: "",
  chipBorder: "",
  sage: { bg: "bg-emerald-50", text: "text-emerald-900", border: "border-emerald-200" },
  clay: { bg: "bg-orange-50",  text: "text-orange-900",  border: "border-orange-200" },
  sky:  { bg: "bg-sky-50",     text: "text-sky-900",     border: "border-sky-200" },
};

/* -----------------------------------------------
   BRAND / LINKS
   ----------------------------------------------- */
const BRAND = "APK Resources";
const NAME_FULL = "Amanpreet Kaur (APK)";
const NAME_SHORT = "Aman";
const LOCATION = "Adelaide, Australia";
const TITLE = "Modern RTO Resources Publisher";
const EMAIL = "amann.preet@outlook.com";
const LINKEDIN = "https://www.linkedin.com/in/aman-p-kaur";
const GITHUB = "https://github.com/amanpreetkaur05";
const WEBSITE = "";
const LOGO_MONO = "APK";
const CALENDLY = "https://calendly.com/amanpeace52/30min";

/* -----------------------------------------------
   TAGS (value props)
   ----------------------------------------------- */
const TAGS = [
  "Editable & audit-ready",
  "SCORM/xAPI eLearning",
  "Traceable mapping",
  "AI contextualiser (beta)",
  "Version-diff updates",
  "Trainer micro-onboarding",
];

/* -----------------------------------------------
   OFFERS (Solutions)
   ----------------------------------------------- */
const OFFERS = [
  {
    tone: "sage",
    icon: <Package className="h-4 w-4" />,
    title: "Qualification & Unit Packs",
    bullets: ["Learner + Trainer Guides", "Assessment & Marking Guides", "Traceable Mapping Matrix"],
    footer: "From $350 per unit · $2.5k per qualification",
  },
  {
    tone: "sky",
    icon: <Layers className="h-4 w-4" />,
    title: "eLearning (SCORM/xAPI)",
    bullets: ["Interactive modules & quizzes", "LMS-ready (SCORM 1.2/2004)", "xAPI analytics option"],
    footer: "Add-on from $800 per unit",
  },
  {
    tone: "clay",
    icon: <ShieldCheck className="h-4 w-4" />,
    title: "Audit-Readiness Support",
    bullets: ["Pre-audit resource review", "Rectification guidance", "Trainer implementation tips"],
    footer: "Retainers from $3k/year",
  },
  {
    tone: "sage",
    icon: <Bot className="h-4 w-4" />,
    title: "AI Contextualiser (Beta)",
    bullets: ["Faster contextualising", "Guardrails for competency intent", "Mapping gap checks"],
    footer: "Pilot with selected partners",
  },
  {
    tone: "sky",
    icon: <LifeBuoy className="h-4 w-4" />,
    title: "Updates Subscription",
    bullets: ["Monthly change monitoring", "Versioned updates + diffs", "Priority support"],
    footer: "From $249/month (Pro from $599)",
  },
];

/* -----------------------------------------------
   CATALOGUE — UPDATED to your request
   Categories: Individual Support, Disability Support,
   Community Services, IT, Cyber Security, Business, Project Management
   ----------------------------------------------- */
const PACKS = [
  /* Care & Community */
  {
    id: "indiv-support-iii",
    category: "Individual Support",
    level: "Certificate III",
    code: "CHC3xx (sample)",
    image: "https://images.unsplash.com/photo-1551829142-5f4d36d63c6e?q=80&w=1200&auto=format&fit=crop",
    includes: [
      "Editable Learner & Trainer Guides",
      "Assessment Tools + Marking Guides",
      "Mapping Matrix + Implementation Notes",
      "Optional: SCORM/xAPI eLearning",
    ],
    sampleUnits: ["CHCCCS015", "CHCDIV001", "HLTWHS002"],
  },
  {
    id: "disability-support-iv",
    category: "Disability Support",
    level: "Certificate IV",
    code: "CHC4xx (sample)",
    image: "https://images.unsplash.com/photo-1519494080410-f9aa76cb4283?q=80&w=1200&auto=format&fit=crop",
    includes: [
      "Complex scenarios & simulations",
      "Evidence plans & assessor rubrics",
      "Mapping Matrix + validation checklist",
      "Optional: xAPI analytics dashboard",
    ],
    sampleUnits: ["CHCDIS019", "CHCDIS011", "CHCADV001"],
  },
  {
    id: "community-services-iii",
    category: "Community Services",
    level: "Certificate III",
    code: "CHC3xx (sample)",
    image: "https://images.unsplash.com/photo-1544531584-0f6fd07fe6c0?q=80&w=1200&auto=format&fit=crop",
    includes: [
      "Workplace tasks + role-play scripts",
      "Assessor guides & moderation forms",
      "Mapping Matrix with evidence coverage",
      "Optional: SCORM modules",
    ],
    sampleUnits: ["CHCCOM005", "CHCLEG001", "CHCCCS016"],
  },

  /* IT & Cyber */
  {
    id: "it-iii",
    category: "Information Technology",
    level: "Certificate III",
    code: "ICT3xx (sample)",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop",
    includes: [
      "Hands-on labs + task sheets",
      "Assessor guides & rubrics",
      "Mapping Matrix with evidence coverage",
      "Optional: SCORM for blended delivery",
    ],
    sampleUnits: ["ICTICT213", "ICTSAS214", "ICTICT214"],
  },
  {
    id: "it-iv",
    category: "Information Technology",
    level: "Certificate IV",
    code: "ICT4xx (sample)",
    image: "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1200&auto=format&fit=crop",
    includes: [
      "Project-based tasks + datasets",
      "Networking & admin scenarios",
      "Mapping Matrix + moderation forms",
      "Optional: xAPI analytics dashboard",
    ],
    sampleUnits: ["ICTSAS442", "ICTNWK420", "ICTICT451"],
  },
  {
    id: "cyber-iv",
    category: "Cyber Security",
    level: "Certificate IV",
    code: "ICT4cyb (sample)",
    image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1200&auto=format&fit=crop",
    includes: [
      "Threat modelling & incident labs",
      "Secure config and analysis tasks",
      "Evidence plans & validation checklist",
      "Optional: xAPI telemetry",
    ],
    sampleUnits: ["ICTSAS432", "ICTPRG431", "ICTNWK421"],
  },

  /* Business & PM */
  {
    id: "business-iii",
    category: "Business",
    level: "Certificate III",
    code: "BSB301 (sample)",
    image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?q=80&w=1200&auto=format&fit=crop",
    includes: [
      "Practical admin projects",
      "Communication templates & checklists",
      "Mapping Matrix + trainer notes",
      "Optional: SCORM onboarding modules",
    ],
    sampleUnits: ["BSBWHS311", "BSBXCM301", "BSBTEC301"],
  },
  {
    id: "pm-essentials",
    category: "Project Management",
    level: "Skill Set / Kit",
    code: "BSBPMG (kit)",
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=1200&auto=format&fit=crop",
    includes: [
      "Scope, plan, risk & report pack",
      "Simulated project with milestones",
      "Assessor rubrics + mapping",
      "Optional: xAPI dashboards",
    ],
    sampleUnits: ["BSBPMG430", "BSBPMG431", "BSBPMG434"],
  },
];

/* -----------------------------------------------
   CASE STUDIES / TESTIMONIALS
   ----------------------------------------------- */
const CASE_STUDIES = [
  {
    title: "Hospitality RTO — Assessment Refresh",
    result: "Mapped & modernised 7 units; zero audit findings on follow-up; first-time LMS pass.",
    proof: "Lead trainer testimonial on mapping traceability.",
  },
  {
    title: "Community Services — eLearning Lift",
    result: "Converted workbook delivery to interactive SCORM; +23% completion in 90 days.",
    proof: "LMS analytics + learner feedback excerpts.",
  },
];

const TESTIMONIALS = [
  { quote: "The mapping was crystal clear. Our rectification workload dropped fast.", author: "Academic Manager, SA" },
  { quote: "Learners finally enjoy the modules—clean design and easy LMS setup.", author: "eLearning Lead, VIC" },
];

/* -----------------------------------------------
   FAQ (human-centred)
   ----------------------------------------------- */
const FAQS = [
  { q: "What exactly do you sell?", a: "Editable training and assessment resources for RTOs—plus optional eLearning and support." },
  { q: "Can I edit everything?", a: "Yes. You get source files (DOCX/PPTX) so you can brand and contextualise." },
  { q: "Is it compliant?", a: "We provide mapping and validation. Your audit outcome still depends on how you deliver and assess." },
  { q: "Do I need to be an RTO?", a: "No. We sell to RTOs and providers. We don’t deliver nationally recognised training ourselves." },
  { q: "How do updates work?", a: "Subscribers get version-diff updates when training packages change, with a short note on what changed and why." },
  { q: "Can you customise for us?", a: "Yes. We can tailor units, build eLearning, and run a quick trainer onboarding." },
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
    <div className="text-xs uppercase tracking-widest text-stone-600">{eyebrow}</div>
    <h2 className={`text-2xl md:text-3xl font-semibold mt-1 ${THEME.brand}`}>{title}</h2>
    {children && <p className="mt-2 text-sm text-stone-700">{children}</p>}
  </div>
);

function ThinDivider() {
  return <div className={`h-px w-full border-t ${THEME.border}`} />;
}

function TonePill({ tone = "sage", children }) {
  const t =
    tone === "clay" ? THEME.clay : tone === "sky" ? THEME.sky : THEME.sage;
  return (
    <span className={`px-2 py-0.5 rounded-full border ${t.bg} ${t.text} ${t.border} text-xs`}>
      {children}
    </span>
  );
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
   HERO MONOGRAM (APK tile) — golden ratio layout
   ----------------------------------------------- */
function HeroMonogram() {
  return (
    <Card className="relative overflow-hidden p-0">
      <div className="p-6">
        <div className="flex items-center gap-2 mb-3">
          <TonePill tone="sage">Audit-aware by design</TonePill>
          <TonePill tone="sky">LMS-ready</TonePill>
        </div>
        <div className="relative rounded-xl border border-stone-200 soft-sage">
          {/* soft layered shapes */}
          <div className="absolute -top-12 -left-12 w-40 h-40 rounded-full" style={{ background: "rgba(167,243,208,.6)" }} />
          <div className="absolute -bottom-10 -right-10 w-48 h-48 rounded-full" style={{ background: "rgba(254,215,170,.6)" }} />
          <div className="p-10 md:p-12 relative">
            <div className="text-5xl md:text-7xl font-extrabold tracking-tight text-stone-900">
              {LOGO_MONO}
            </div>
            <div className="mt-2 text-stone-700">Editable • LMS-ready • Audit-aware</div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3 mt-4">
          <Badge icon={<FileText className="h-4 w-4" />} text="Editable guides" />
          <Badge icon={<Layers className="h-4 w-4" />} text="SCORM / xAPI" />
          <Badge icon={<Database className="h-4 w-4" />} text="Traceable mapping" />
          <Badge icon={<Bot className="h-4 w-4" />} text="AI contextualiser" />
        </div>
      </div>
    </Card>
  );
}

/* -----------------------------------------------
   STRIPS
   ----------------------------------------------- */
function CredibilityStrip() {
  const points = [
    { icon: <CheckCircle2 className="h-4 w-4" />, text: "Audit-ready mapping & validation" },
    { icon: <Lock className="h-4 w-4" />, text: "Privacy-aware portal & versioning" },
    { icon: <BadgeCheck className="h-4 w-4" />, text: "Clear licences & trainer guides" },
  ];
  return (
    <div className="w-full brand-bg-2">
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
   OFFER GRID (Solutions)
   ----------------------------------------------- */
function OfferGrid() {
  const container = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.08 } } };
  const item = { hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0, transition: { duration: 0.35, ease: "easeOut" } } };
  return (
    <section className="max-w-7xl mx-auto px-6 pb-12">
      <SectionTitle eyebrow="Solutions" title="What We Deliver">
        Editable resources, LMS-ready eLearning, and ongoing updates — designed for Australian VET.
      </SectionTitle>
      <motion.div variants={container} initial="hidden" animate="show" className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {OFFERS.map((o) => (
          <motion.div key={o.title} variants={item}>
            <Card>
              <div
                className="inline-flex items-center gap-2 text-xs rounded-full px-2 py-0.5 border"
                style={{
                  backgroundColor: o.tone === "clay" ? "var(--clay-50)" : o.tone === "sky" ? "var(--sky-50)" : "var(--sage-50)",
                  borderColor:     o.tone === "clay" ? "var(--clay-200)" : o.tone === "sky" ? "var(--sky-200)" : "var(--sage-200)",
                  color:           o.tone === "clay" ? "var(--clay-900)" : o.tone === "sky" ? "var(--sky-900)" : "var(--sage-900)"
                }}
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
        <a href="#/contact" className="brand-btn inline-flex items-center gap-2 rounded-lg px-6 py-3">
          Request a sample pack <ExternalLink className="h-4 w-4" />
        </a>
      </div>
    </section>
  );
}

/* -----------------------------------------------
   WHY US — competitive edges (what others lack)
   ----------------------------------------------- */
function WhyUs() {
  const points = [
    { icon: <Bot className="h-5 w-5" />, title: "AI contextualiser + mapping checks", desc: "Speed up contextualising and catch coverage gaps early.", tone: "sage" },
    { icon: <Activity className="h-5 w-5" />, title: "xAPI analytics (not just SCORM)", desc: "See learning signals and completion trends.", tone: "sky" },
    { icon: <FileText className="h-5 w-5" />, title: "Version-diff changelogs", desc: "Know exactly what changed when a package updates.", tone: "clay" },
    { icon: <Accessibility className="h-5 w-5" />, title: "Accessibility mindset", desc: "WCAG-minded layouts and writing patterns.", tone: "sage" },
    { icon: <ClipboardList className="h-5 w-5" />, title: "Trainer micro-onboarding", desc: "Short modules so trainers implement consistently.", tone: "sky" },
    { icon: <ShieldCheck className="h-5 w-5" />, title: "Audit-aware by default", desc: "Clear mapping and validation trails.", tone: "clay" },
  ];
  const toneToClass = (t) =>
    t === "clay" ? `${THEME.clay.bg} ${THEME.clay.text} ${THEME.clay.border}` :
    t === "sky"  ? `${THEME.sky.bg}  ${THEME.sky.text}  ${THEME.sky.border}`  :
                   `${THEME.sage.bg} ${THEME.sage.text} ${THEME.sage.border}`;

  return (
    <section className="max-w-7xl mx-auto px-6 pb-12">
      <SectionTitle eyebrow="Differentiators" title="Why Choose APK Resources">
        Focused on real audit defensibility and delivery quality — areas many providers underinvest in.
      </SectionTitle>
      <div className="grid md:grid-cols-3 gap-6">
        {points.map((p) => (
          <Card key={p.title}>
            <div className={`inline-flex items-center gap-2 text-xs px-2 py-0.5 rounded-full border ${toneToClass(p.tone)}`}>
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
    { k: "01", t: "Discover", d: "Confirm quals/units, delivery context, and audit priorities." },
    { k: "02", t: "Design", d: "Draft learner + assessment with traceable mapping." },
    { k: "03", t: "Validate", d: "Peer review, compliance checks, pilot feedback." },
    { k: "04", t: "Deliver", d: "Editable files & SCORM/xAPI; trainer guidance." },
    { k: "05", t: "Update", d: "Monitor changes; version-diff updates for subscribers." },
  ];
  return (
    <section className="max-w-7xl mx-auto px-6 pb-12">
      <SectionTitle eyebrow="How It Works" title="A Simple, Defensible Workflow">
        Clear steps. Clear responsibilities. Fewer surprises.
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
    { name: "Per-Unit", price: "from $350", includes: ["Editable source files", "Mapping matrix", "Email support"], tone: "sage" },
    { name: "Qualification Pack", price: "from $2,500", includes: ["All unit materials", "Trainer & marking guides", "Mapping + notes"], tone: "clay" },
    { name: "Updates (Pro)", price: "$599 / month", includes: ["Monthly monitoring", "Version-diff updates", "Priority support"], tone: "sky" },
  ];
  const toneToInline = (t) =>
    t === "clay"
      ? { backgroundColor: "var(--clay-50)", borderColor: "var(--clay-200)", color: "var(--clay-900)" }
      : t === "sky"
      ? { backgroundColor: "var(--sky-50)", borderColor: "var(--sky-200)", color: "var(--sky-900)" }
      : { backgroundColor: "var(--sage-50)", borderColor: "var(--sage-200)", color: "var(--sage-900)" };

  return (
    <section className="max-w-7xl mx-auto px-6 pb-12">
      <SectionTitle eyebrow="Simple & Clear" title="Pricing Anchors" />
      <div className="grid md:grid-cols-3 gap-6">
        {plans.map((p) => (
          <Card key={p.name}>
            <div className="text-xs uppercase tracking-widest px-2 py-0.5 rounded-full inline-block border" style={toneToInline(p.tone)}>
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
    <section className="max-w-7xl mx-auto px-6 pb-8">
      <SectionTitle eyebrow="Outcomes" title="Selected Results">
        A few examples of reduced audit risk and smoother delivery.
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
   ABOUT — richer personal page
   ----------------------------------------------- */
function About() {
  return (
    <section className="max-w-7xl mx-auto px-6 pb-12">
      <SectionTitle eyebrow="About" title="Meet APK Resources">
        Founded by {NAME_FULL}. We turn research depth into practical, audit-aware learning resources.
      </SectionTitle>

      <div className="golden-grid">
        <Card>
          <h3 className="font-semibold text-lg">Who we are</h3>
          <p className="mt-2 text-sm text-stone-700">
            We design <strong>editable, audit-ready</strong> training and assessment materials with a modern learner
            experience. We blend instructional design, compliance know-how, and practical delivery (LMS, SCORM/xAPI).
          </p>
          <ul className="mt-3 text-sm text-stone-700 list-disc pl-4 space-y-1">
            <li>Based in {LOCATION}; serving RTOs across Australia</li>
            <li>Focus: Care & Community, IT & Cyber, Business & PM</li>
            <li>Mindset: accessible, plain-language, outcomes-first</li>
          </ul>
        </Card>

        <Card className="soft-sky">
          <h3 className="font-semibold text-lg">About Aman</h3>
          <ul className="mt-2 text-sm text-stone-700 space-y-2">
            <li>PhD researcher in digital trust & identity; applied design thinker.</li>
            <li>Experienced in AI + LMS enablement, change adoption, and trainer support.</li>
            <li>Advocates for accessible design and evidence-based assessment.</li>
          </ul>
          <div className="mt-4 flex flex-wrap gap-3">
            <SocialLink href={`mailto:${EMAIL}`}><Mail className="h-4 w-4" /> Email</SocialLink>
            <SocialLink href={LINKEDIN}><Linkedin className="h-4 w-4" /> LinkedIn</SocialLink>
            {GITHUB && <SocialLink href={GITHUB}><Github className="h-4 w-4" /> GitHub</SocialLink>}
          </div>
        </Card>
      </div>
    </section>
  );
}

/* -----------------------------------------------
   CATALOGUE — dynamic category filter
   ----------------------------------------------- */
function Catalogue() {
  const categories = ["All", ...Array.from(new Set(PACKS.map(p => p.category)))];
  const [active, setActive] = React.useState("All");
  const items = active === "All" ? PACKS : PACKS.filter((p) => p.category === active);

  return (
    <section className="max-w-7xl mx-auto px-6 pb-12">
      <SectionTitle eyebrow="Catalogue" title="Care & Community • IT & Cyber • Business & PM">
        Choose a pack to request a sample and implementation notes.
      </SectionTitle>

      <div className="mb-6 flex flex-wrap gap-2">
        {categories.map((label) => (
          <button
            key={label}
            onClick={() => setActive(label)}
            className={`px-3 py-1.5 rounded-full text-sm border ${
              active === label ? "brand-btn border-0" : "bg-white text-stone-700 border-stone-200 hover:border-stone-300"
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {items.map((p) => (
          <Card key={p.id} className="overflow-hidden">
            <img src={p.image} alt={`${p.category} ${p.level}`} className="w-full h-40 object-cover rounded-lg mb-4" loading="lazy" />
            <div className="flex items-center gap-2 text-xs">
              <TonePill tone="sage">{p.category}</TonePill>
              <TonePill tone="sky">{p.level}</TonePill>
              <TonePill tone="clay">{p.code}</TonePill>
            </div>
            <h3 className="mt-2 font-semibold text-lg">{p.category} — {p.level}</h3>
            <ul className="mt-2 text-sm text-stone-700 list-disc pl-4 space-y-1">
              {p.includes.map((b) => <li key={b}>{b}</li>)}
            </ul>
            <div className="mt-2 text-xs text-stone-600">
              Sample units: {p.sampleUnits.join(", ")}
            </div>
            <div className="mt-4 flex gap-3">
              <a href="#/contact" className="brand-btn inline-flex items-center gap-2 rounded-lg px-4 py-2">
                Request Sample <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#/why-us" className="brand-outline-btn inline-flex items-center gap-2 rounded-lg px-4 py-2">
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
   FAQ — accordion (simple language)
   ----------------------------------------------- */
function FAQ() {
  const [open, setOpen] = React.useState(null);
  const toggle = (idx) => setOpen((o) => (o === idx ? null : idx));

  const tone = (idx) => (idx % 3 === 0 ? "sage" : idx % 3 === 1 ? "clay" : "sky");
  const toneToInline = (t) =>
    t === "clay"
      ? { backgroundColor: "var(--clay-50)", borderColor: "var(--clay-200)", color: "var(--clay-900)" }
      : t === "sky"
      ? { backgroundColor: "var(--sky-50)", borderColor: "var(--sky-200)", color: "var(--sky-900)" }
      : { backgroundColor: "var(--sage-50)", borderColor: "var(--sage-200)", color: "var(--sage-900)" };

  return (
    <section className="max-w-7xl mx-auto px-6 pb-12">
      <SectionTitle eyebrow="Clarity" title="Questions People Ask">
        Simple answers you can act on today.
      </SectionTitle>
      <div className="grid md:grid-cols-2 gap-6">
        {FAQS.map((f, i) => (
          <div key={f.q} className="rounded-xl border border-stone-200 bg-white">
            <button
              className="w-full text-left px-5 py-4 flex items-center justify-between gap-3"
              onClick={() => toggle(i)}
              aria-expanded={open === i}
              aria-controls={`faq-panel-${i}`}
            >
              <span className="font-medium">{f.q}</span>
              {open === i ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
            </button>
            {open === i && (
              <div id={`faq-panel-${i}`} className="px-5 pb-5">
                <div className="inline-block text-xs px-2 py-0.5 rounded-full border mb-2" style={toneToInline(tone(i))}>
                  Good to know
                </div>
                <p className="text-sm text-stone-700">{f.a}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-6 text-sm text-stone-700">
        Still unclear? <a href="#/contact" className="underline">Ask us</a> or book a short call — we’ll point you in the right direction.
      </div>
    </section>
  );
}

/* -----------------------------------------------
   Calendly Inline (embed) — YOUR link
   ----------------------------------------------- */
function CalendlyInline() {
  React.useEffect(() => {
    const linkId = "calendly-css";
    const scriptId = "calendly-js";
    if (!document.getElementById(linkId)) {
      const l = document.createElement("link");
      l.id = linkId;
      l.rel = "stylesheet";
      l.href = "https://assets.calendly.com/assets/external/widget.css";
      document.head.appendChild(l);
    }
    if (!document.getElementById(scriptId)) {
      const s = document.createElement("script");
      s.id = scriptId;
      s.src = "https://assets.calendly.com/assets/external/widget.js";
      s.async = true;
      document.body.appendChild(s);
    }
  }, []);

  return (
    <div className="rounded-xl border border-stone-200 bg-white p-4">
      <div
        className="calendly-inline-widget"
        data-url={CALENDLY}
        style={{ minWidth: "320px", height: "700px" }}
      />
      <div className="mt-2 text-xs text-stone-600">
        Having issues loading?{" "}
        <a className="underline" href={CALENDLY} target="_blank" rel="noreferrer noopener">
          Open Calendly in a new tab
        </a>.
      </div>
    </div>
  );
}

/* -----------------------------------------------
   CTA BAR
   ----------------------------------------------- */
function CtaBar() {
  return (
    <div className="w-full brand-cta-bar">
      <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="text-white">
          <div className="text-sm uppercase tracking-widest opacity-80">Next step</div>
          <div className="text-2xl font-semibold mt-1">Request a sample pack or book a 20-min fit call</div>
        </div>
        <div className="flex gap-3">
          <a href="#/contact" className="brand-btn inline-flex items-center gap-2 rounded-lg px-5 py-3">
            Request Sample <FileText className="h-4 w-4" />
          </a>
          <a href="#/book" className="brand-outline-btn inline-flex items-center gap-2 rounded-lg px-5 py-3">
            Book 20-min Call <PhoneCall className="h-4 w-4" />
          </a>
        </div>
      </div>
      <ThinDivider />
    </div>
  );
}

/* -----------------------------------------------
   ROUTER (hash-based, simple)
   ----------------------------------------------- */
const routes = {
  home: "Home",
  catalogue: "Catalogue",
  solutions: "Solutions",
  "why-us": "Why Us",
  process: "Process",
  pricing: "Pricing",
  results: "Results",
  faq: "FAQ",
  about: "About",
  contact: "Contact",
  book: "Book Call",
};

function useHashRoute(defaultRoute = "home") {
  const [route, setRoute] = React.useState(() => {
    const raw = window.location.hash.replace("#/", "");
    return raw && routes[raw] ? raw : defaultRoute;
  });
  React.useEffect(() => {
    const onHash = () => {
      const raw = window.location.hash.replace("#/", "");
      if (routes[raw]) setRoute(raw);
      window.scrollTo({ top: 0, behavior: "instant" });
    };
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);
  const go = (r) => {
    if (routes[r]) window.location.hash = `/${r}`;
  };
  return [route, go];
}

/* -----------------------------------------------
   PAGE WRAPPERS with transitions
   ----------------------------------------------- */
const pageVariants = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.35, ease: "easeOut" } },
  exit: { opacity: 0, y: -16, transition: { duration: 0.25, ease: "easeIn" } },
};

/* -----------------------------------------------
   HOME PAGE (golden ratio hero)
   ----------------------------------------------- */
function HomePage() {
  return (
    <>
      <section className="max-w-7xl mx-auto px-6 pb-10">
        <div className="golden-grid">
          <div>
            <p className="text-xs uppercase tracking-widest text-stone-600">{LOCATION}</p>
            <h1 className={`text-4xl md:text-6xl font-semibold leading-tight tracking-tight mt-2 ${THEME.brand}`}>
              {BRAND}
            </h1>
            <p className="mt-3 text-lg text-stone-800">{TITLE}</p>
            <p className="mt-3 text-stone-700">
              We create <strong>editable, audit-ready VET resources</strong> and <strong>LMS-ready eLearning</strong>,
              with transparent mapping, version control, and optional AI tools to speed up contextualising.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <SocialLink href={`mailto:${EMAIL}`}><Mail className="h-4 w-4" /> Email</SocialLink>
              <SocialLink href={LINKEDIN}><Linkedin className="h-4 w-4" /> LinkedIn</SocialLink>
              {GITHUB && <SocialLink href={GITHUB}><Github className="h-4 w-4" /> GitHub</SocialLink>}
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {TAGS.map((t) => (
                <span key={t} className={`text-sm px-3 py-1 rounded-full brand-chip`}>
                  {t}
                </span>
              ))}
            </div>

            <div className="mt-8 flex gap-3">
              <a href="#/contact" className="brand-btn inline-flex items-center gap-2 rounded-lg px-6 py-3">
                Request Sample Pack <ExternalLink className="h-4 w-4" />
              </a>
              <a href="#/book" className="brand-outline-btn inline-flex items-center gap-2 rounded-lg px-6 py-3">
                Book 20-min Call <PhoneCall className="h-4 w-4" />
              </a>
            </div>
          </div>

          <HeroMonogram />
        </div>
      </section>

      <CredibilityStrip />
      <CtaBar />
    </>
  );
}

/* -----------------------------------------------
   CONTACT PAGE (form embed placeholder)
   ----------------------------------------------- */
function ContactPage() {
  return (
    <section className="max-w-7xl mx-auto px-6 pb-16">
      <SectionTitle eyebrow="Next Step" title={`Work with ${NAME_SHORT}`}>
        Request a sample pack, book a 20-min fit call, or ask something specific.
      </SectionTitle>
      <Card>
        <div className={`rounded-xl overflow-hidden border ${THEME.border}`}>
          <iframe
            className="w-full h-[900px] md:h-[1000px]"
            src="https://docs.google.com/forms/d/e/1FAIpQLSd0Lr0lRCdfSJeYEplBbO8eokAWYFTYfitfrFNeW5tjPvFT7g/viewform?embedded=true"
            title="Contact Enquiry"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            sandbox="allow-forms allow-scripts allow-same-origin allow-popups"
          />
        </div>
        <div className="mt-3 text-xs text-stone-600">
          Prefer email? <a className="underline" href={`mailto:${EMAIL}`}>Write to us</a>. We keep your details private.
        </div>
      </Card>
    </section>
  );
}

/* -----------------------------------------------
   NAV
   ----------------------------------------------- */
function Nav({ route, go }) {
  const Link = ({ to, children }) => (
    <a
      href={`#/${to}`}
      onClick={(e) => { e.preventDefault(); go(to); }}
      className={`hover:underline ${THEME.brandSubtle} ${route === to ? "font-semibold text-stone-900" : ""}`}
    >
      {children}
    </a>
  );

  return (
    <header className="max-w-7xl mx-auto px-6 pt-8 pb-4">
      <nav className="flex items-center justify-between">
        <a href="#/home" onClick={(e)=>{e.preventDefault();go("home");}} className="flex items-center gap-3">
          <div className={`w-9 h-9 rounded-lg ${THEME.accentBg} ${THEME.accentText} flex items-center justify-center text-sm font-semibold`}>
            {LOGO_MONO}
          </div>
          <div className="leading-tight">
            <div className={`font-semibold tracking-tight ${THEME.brand}`}>{BRAND}</div>
            <div className="text-xs text-stone-600">Editable. LMS-ready. Audit-aware.</div>
          </div>
        </a>
        <div className="hidden md:flex gap-4 text-sm">
          <Link to="home">Home</Link>
          <Link to="about">About</Link>
          <Link to="catalogue">Catalogue</Link>
          <Link to="solutions">Solutions</Link>
          <Link to="why-us">Why Us</Link>
          <Link to="process">Process</Link>
          <Link to="pricing">Pricing</Link>
          <Link to="results">Results</Link>
          <Link to="faq">FAQ</Link>
          <Link to="contact">Contact</Link>
        </div>
      </nav>
    </header>
  );
}

/* -----------------------------------------------
   PAGE SWITCHER
   ----------------------------------------------- */
function PageSwitch({ route }) {
  return (
    <AnimatePresence mode="wait">
      <motion.main
        key={route}
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        {route === "home"      && <HomePage />}
        {route === "about"     && <About />}
        {route === "catalogue" && <Catalogue />}
        {route === "solutions" && <OfferGrid />}
        {route === "why-us"    && <WhyUs />}
        {route === "process"   && <Process />}
        {route === "pricing"   && <Pricing />}
        {route === "results"   && (<><CaseStudies /><Testimonials /></>)}
        {route === "faq"       && <FAQ />}
        {route === "contact"   && <ContactPage />}
        {route === "book"      && (
          <section className="max-w-7xl mx-auto px-6 pb-12">
            <SectionTitle eyebrow="Fast Fit Check" title="Book a 30-minute call">
              Pick a time that suits you. We’ll confirm fit, scope, and next steps.
            </SectionTitle>
            <CalendlyInline />
          </section>
        )}
      </motion.main>
    </AnimatePresence>
  );
}

/* -----------------------------------------------
   FOOTER
   ----------------------------------------------- */
function Footer() {
  return (
    <footer className="max-w-7xl mx-auto px-6 pb-10 text-sm text-stone-700">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className={`w-8 h-8 rounded-lg ${THEME.accentBg} ${THEME.accentText} flex items-center justify-center text-sm font-semibold`}>
            {LOGO_MONO}
          </div>
          <div>
            <div className={`font-semibold ${THEME.brand}`}>{BRAND}</div>
            <div className="text-xs text-stone-600">Editable. LMS-ready. Audit-aware.</div>
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
  );
}

/* -----------------------------------------------
   APP (single export) — avoids extra braces issues
   ----------------------------------------------- */
export default function App() {
  const [route, go] = useHashRoute("home");

  return (
    <div className={`min-h-screen ${THEME.pageBg} ${THEME.text}`}>
      <BrandStyles />

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

      <Nav route={route} go={go} />
      <PageSwitch route={route} />
      <Footer />
    </div>
  );
}
