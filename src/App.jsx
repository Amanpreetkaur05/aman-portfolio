import React from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Linkedin,
  Globe,
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
  Star,
  Sparkles,
  ClipboardList,
  PhoneCall,
  BadgeCheck,
} from "lucide-react";

/* -----------------------------------------------
   THEME — single-colour, neutral, professional
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
};

/* -----------------------------------------------
   BRAND / LINKS
   ----------------------------------------------- */
const NAME_FULL = "Amanpreet Kaur (APK)";
const NAME_SHORT = "Aman";
const LOCATION = "Adelaide, Australia";
const TITLE = "Modern RTO Resources Publisher";
const EMAIL = "amann.preet@outlook.com";
const LINKEDIN = "https://www.linkedin.com/in/aman-p-kaur";
const GITHUB = "https://github.com/amanpreetkaur05";
const WEBSITE = ""; // optional
const LOGO_MONO = "AK"; // simple monogram
const CALENDLY = "https://calendly.com/your-link/intro-20"; // replace with your real link

const TAGS = [
  "Audit-Ready Assessment Design",
  "SCORM/xAPI eLearning",
  "Traceable Mapping",
  "AI Contextualisation (Beta)",
  "Updates & Version Control",
  "Australian VET Standards",
];

/* -----------------------------------------------
   SELLABLE CONTENT
   ----------------------------------------------- */
const OFFERS = [
  {
    icon: <Package className="h-4 w-4" />,
    title: "Qualification & Unit Packs",
    bullets: [
      "Editable Learner & Trainer Guides",
      "Assessment Tools + Marking Guides",
      "Traceable Mapping Matrix",
    ],
    footer: "From $350 per unit · $2.5k per qualification",
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
  },
];

const CASE_STUDIES = [
  {
    title: "Hospitality RTO — Assessment Refresh",
    result:
      "Mapped & modernised 7 units; zero audit findings on follow-up; first-time LMS pass.",
    proof: "Lead trainer testimonial on clarity & mapping traceability.",
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
   PRIMITIVES (no shadows)
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

function Stat({ k, v }) {
  return (
    <div className="text-center">
      <div className="text-3xl font-semibold">{k}</div>
      <div className="text-xs text-stone-600 mt-1">{v}</div>
    </div>
  );
}

/* -----------------------------------------------
   CREDIBILITY STRIP
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
   OFFER GRID — productised services
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
              <div className="inline-flex items-center gap-2 text-xs border rounded-full px-2 py-0.5 bg-stone-100 border-stone-200 text-stone-800">
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
   PROCESS — how you work (clear & reassuring)
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
   PRICING — anchors (transparent)
   ----------------------------------------------- */
function Pricing() {
  const plans = [
    {
      name: "Per-Unit",
      price: "from $350",
      includes: ["Editable source files", "Mapping matrix", "Email support"],
    },
    {
      name: "Qualification Pack",
      price: "from $2,500",
      includes: ["All unit materials", "Trainer & marking guides", "Mapping + implementation notes"],
    },
    {
      name: "Updates (Pro)",
      price: "$599 / month",
      includes: ["Monthly change monitoring", "Versioned updates + diffs", "Priority support"],
    },
  ];
  return (
    <section id="pricing" className="max-w-7xl mx-auto px-6 pb-12">
      <SectionTitle eyebrow="Simple & Clear" title="Pricing Anchors" />
      <div className="grid md:grid-cols-3 gap-6">
        {plans.map((p) => (
          <Card key={p.name}>
            <div className="text-xs uppercase tracking-widest text-stone-500">{p.name}</div>
            <div className="text-2xl font-semibold mt-1">{p.price}</div>
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
   PROOF — case studies & testimonials
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
            name: "APK — RTO Resources Publisher",
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
              <div className={`font-semibold tracking-tight ${THEME.brand}`}>APK — RTO Resources</div>
              <div className="text-xs text-stone-500">Editable. LMS-ready. Audit-aware.</div>
            </div>
          </a>
          <div className="hidden md:flex gap-4 text-sm">
            <a href="#offers" className={`hover:underline ${THEME.brandSubtle}`}>Solutions</a>
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
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 gap-10 items-center"
        >
          <div>
            <p className="text-xs uppercase tracking-widest text-stone-500">{LOCATION}</p>
            <h1 className={`text-4xl md:text-6xl font-semibold leading-tight tracking-tight mt-2 ${THEME.brand}`}>
              {NAME_FULL}
            </h1>
            <p className="mt-3 text-lg text-stone-700">{TITLE}</p>
            <p className="mt-3 text-stone-600">
              We create <strong>editable, audit-ready VET resources</strong> and <strong>LMS-ready eLearning</strong>,
              with transparent mapping, version control, and optional AI tools to speed up contextualisation.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <SocialLink href={`mailto:${EMAIL}`}><Mail className="h-4 w-4" /> Email</SocialLink>
              <SocialLink href={LINKEDIN}><Linkedin className="h-4 w-4" /> LinkedIn</SocialLink>
              {GITHUB && <SocialLink href={GITHUB}><Globe className="h-4 w-4" /> Portfolio</SocialLink>}
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

          <Card className="relative p-0 flex items-center justify-center h-64 md:h-[22rem]">
            <div className={`absolute -top-3 left-6 rounded-full bg-white px-3 py-1 text-xs font-medium text-stone-700 border ${THEME.border}`}>
              <ShieldCheck className="h-3.5 w-3.5 inline-block align-[-2px]" /> Audit-Aware by Design
            </div>
            <div className={`absolute inset-0 ${THEME.pageBg}`} />
            <div className="relative z-10 grid grid-cols-2 gap-3 p-6">
              <Badge icon={<FileText className="h-3.5 w-3.5" />} text="Editable Guides" />
              <Badge icon={<Layers className="h-3.5 w-3.5" />} text="SCORM / xAPI" />
              <Badge icon={<Database className="h-3.5 w-3.5" />} text="Traceable Mapping" />
              <Badge icon={<Bot className="h-3.5 w-3.5" />} text="AI Contextualiser" />
            </div>
          </Card>
        </motion.div>
      </section>

      {/* CREDIBILITY */}
      <CredibilityStrip />

      {/* OFFERS */}
      <OfferGrid />

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
            {/* Keep your Google Form embed – neutral, full-width */}
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
              <div className={`font-semibold ${THEME.brand}`}>APK — RTO Resources</div>
              <div className="text-xs text-stone-500">Editable. LMS-ready. Audit-aware.</div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <a href={LINKEDIN} className={`inline-flex items-center gap-1 hover:underline ${THEME.brandSubtle}`}>
              <Linkedin className="h-4 w-4" /> LinkedIn
            </a>
            {GITHUB && (
              <a href={GITHUB} className={`inline-flex items-center gap-1 hover:underline ${THEME.brandSubtle}`}>
                <Globe className="h-4 w-4" /> GitHub
              </a>
            )}
          </div>
        </div>
        <div className="mt-4">© {new Date().getFullYear()} {NAME_FULL}. All rights reserved.</div>
      </footer>
    </div>
  );
}
