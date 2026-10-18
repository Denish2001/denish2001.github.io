import { useEffect, useState } from 'react';
import './SafeMom.css';

/* ------------------------------------------------------------------ */
/* Content                                                             */
/* ------------------------------------------------------------------ */

const EVIDENCE_LABELS = {
  established: 'Established',
  teamReported: 'Team-reported',
  prototype: 'Prototype',
  proposed: 'Proposed',
};

const SECTIONS = [
  { id: 'overview', title: 'Overview' },
  { id: 'problem', title: 'Problem' },
  { id: 'empathize', title: 'Empathize' },
  { id: 'define', title: 'Define' },
  { id: 'ideate', title: 'Ideate' },
  { id: 'prototype', title: 'Prototype' },
  { id: 'test', title: 'Test' },
  { id: 'reflection', title: 'Reflection' },
];

const SECTION_IDS = SECTIONS.map((section) => section.id);

const PROJECT = {
  title: 'SafeMom: an early-warning flow for preeclampsia risk in Kenyan antenatal clinics',
  summary:
    'A clinician-facing web tool that turns routine visit data into a risk flag. I designed it to fit inside a clinic visit instead of interrupting it.',
  facts: [
    { label: 'Role', value: 'Project Lead, UI UX Designer' },
    {
      label: 'Team',
      value:
        'Denish Awajo (lead, engineering), Sebastian Chanzu (data), Eddah Chepchirchir (AI research)',
    },
    { label: 'Programme', value: 'KamiLimu Data Science Group 2' },
    { label: 'Timeline', value: 'July 2024 - December 2024' },
    { label: 'Tools', value: 'Figma, Flask, MySQL, XGBoost' },
    { label: 'Status', value: 'Working prototype. Not clinically validated.' },
  ],
};

const OVERVIEW_CONTEXT = [
  'Preeclampsia is new-onset high blood pressure in pregnancy, usually after 20 weeks. Left unrecognised, it can progress to severe disease for mother and baby.',
  "WHO-led estimates put Kenya's 2020 maternal mortality ratio at 530 per 100,000 live births, against 223 globally. Most Kenyan women attend antenatal care, so the visit already happens. What is missing is a trustworthy way to use it.",
];

const FIVE_WHYS = [
  {
    question: 'Why do at-risk mothers get closer care late?',
    answer: 'Preeclampsia is usually recognised around week 20, after it has appeared.',
    evidence: 'teamReported',
  },
  {
    question: 'Why is it recognised only after it appears?',
    answer:
      'Clinicians judge from blood pressure, urine protein and gestational age. These detect the condition. They do not anticipate it.',
    evidence: 'teamReported',
  },
  {
    question: 'Why do clinics have nothing that anticipates it?',
    answer:
      'Clinicians report no technological support for early risk identification, and no locally validated early-risk model exists for Kenyan antenatal populations.',
    evidence: 'teamReported',
  },
  {
    question: 'Why has no such tool reached the clinic?',
    answer:
      'Published early-prediction models come from hospital records elsewhere. None was built around a Kenyan clinic visit.',
    evidence: 'established',
  },
  {
    question: 'Why has this not been treated as a design problem?',
    answer:
      'Effort goes to the model. The constraints that decide whether a tool gets used are interaction design problems: minutes per visit, data available at the visit, and clinician trust.',
    evidence: 'proposed',
  },
];

const ROOT_CAUSE =
  'No risk tool was designed around the time, data and trust available in an antenatal visit.';

const HOW_MIGHT_WE =
  'How might we give an antenatal clinician an early, trustworthy risk signal inside the visit they are already conducting, without adding work?';

const RESEARCH_METHODS = [
  'Interviews with clinicians in Kenya',
  'Literature review',
  'Consultations with maternal-health, obstetrics and health-technology experts',
];

const RESEARCH_LIMITATION =
  'The number of interviewees, facilities, consent steps and analysis method were not recorded in detail. I treat this as early discovery, not a formal needs assessment.';

const FINDING_COLUMNS = [
  { key: 'finding', label: 'What clinicians reported' },
  { key: 'evidence', label: 'Evidence', render: (status) => <EvidenceTag status={status} /> },
  { key: 'implication', label: 'What it means for the design' },
];

const FINDINGS = [
  {
    finding: 'Judgement rests on blood pressure, urine protein and pregnancy status.',
    evidence: 'teamReported',
    implication:
      'Inputs must be simple and available at routine visits. Any extra test needs a reason.',
  },
  {
    finding: 'Diagnosis happens around week 20.',
    evidence: 'teamReported',
    implication: 'The tool must state when its prediction is made.',
  },
  {
    finding: 'Current methods take time.',
    evidence: 'teamReported',
    implication: 'The tool must save time. A long form works against that.',
  },
  {
    finding: 'No technological support exists.',
    evidence: 'teamReported',
    implication: 'Supports the need. It does not show clinicians will trust a tool.',
  },
  {
    finding: 'Clinicians would adopt a tool that fits their e-medical systems.',
    evidence: 'teamReported',
    implication: 'Integration is a requirement. Nothing is built yet.',
  },
];

const REQUIREMENTS = [
  'Short data entry. Ask only for inputs that exist at the visit.',
  'Plain-language output that says what the estimate means and what it does not.',
  'A visible warning for missing or implausible values, never silent substitution.',
  'Works on low-specification devices and unreliable connections.',
  'A record of who entered what and what the tool returned.',
  'A defined role for community health workers, who may lack laboratory inputs.',
];

const VALUE_PROPOSITION =
  'Safe Mom helps antenatal clinicians identify, at routine visits, which women may need closer monitoring for preeclampsia. It supports clinical judgement and never replaces it.';

const JOURNEY_STEPS = [
  { title: 'Sign in', detail: 'The clinician uses secure credentials.' },
  { title: 'Enter visit data', detail: 'Only values taken at the visit.' },
  { title: 'Read the risk flag', detail: 'A clear flag with the reason behind it.' },
  { title: 'Decide', detail: 'The clinician chooses the next step.' },
];

const DESIGN_DECISIONS = [
  {
    decision: 'Show a flag, not a verdict.',
    reason: 'A model can miss cases, so the screen never says a woman is safe.',
  },
  {
    decision: 'Keep the clinician in charge.',
    reason: 'The tool suggests closer monitoring. The clinician decides.',
  },
  {
    decision: 'Ask only for what the visit provides.',
    reason: 'Fewer fields save time and keep inputs real.',
  },
];

const PROTOTYPE_CAPABILITIES = [
  'Clinician sign-in with hashed passwords',
  'A data-entry form of about two dozen fields',
  'Storage of each entry against the signed-in clinician',
  'A binary risk class from a saved XGBoost model',
  'A result page with advice text',
];

const AUDIT_COLUMNS = [
  { key: 'found', label: 'What I found' },
  { key: 'principle', label: 'Principle' },
  { key: 'change', label: 'Change' },
];

const AUDIT_FINDINGS = [
  {
    found: 'A negative result told the user she was "doing great".',
    principle: 'Error prevention',
    change:
      'Replace with a neutral flag: consider closer monitoring in line with national guidelines.',
  },
  {
    found: 'Wording addressed the mother, but the user is the clinician.',
    principle: 'Match with the real world',
    change: 'Rewrite every line for clinicians.',
  },
  {
    found: 'Treatment advice appeared without clinical review.',
    principle: 'Error prevention',
    change: 'Remove until a clinical panel reviews it against national guidance.',
  },
  {
    found: 'Every positive result showed the same message.',
    principle: 'Visibility of system status',
    change: 'Show the risk level and the inputs that drove it.',
  },
  {
    found: 'Missing values were silently set to zero. No clinical range checks.',
    principle: 'Error prevention',
    change: 'Warn on missing or implausible values and ask for correction.',
  },
  {
    found: 'The entry form had about two dozen fields.',
    principle: 'Flexibility and efficiency',
    change: 'Cut to inputs available at the visit.',
  },
];

const EVIDENCE_GAPS = [
  'The reported accuracy of 0.9875 comes from one test on an undescribed sample. I treat it as a prototype signal, not clinical performance.',
  'The proposed prediction time (week 8) conflicts with the week-20 diagnosis clinicians described. The team must settle this before any claim of early prediction.',
  'No usability sessions with clinicians have taken place yet.',
];

const NEXT_STEPS = [
  'Define the prediction target, time-point and inputs.',
  'Run usability sessions with clinicians on the short-form entry and the neutral flag.',
  'Have a clinical panel review all output text.',
  'Validate the model independently and externally, reported to TRIPOD+AI.',
];

const LESSONS = [
  'Record research method from the first interview, so findings can be defended.',
  'Bring clinicians into co-design earlier, before the form is built.',
  "Treat the model's output as content, and review its words as carefully as its numbers.",
];

const SOURCES = [
  'WHO, UNICEF, UNFPA, World Bank Group, UNDESA. Trends in maternal mortality 2000 to 2020. 2023.',
  'ACOG. Gestational hypertension and preeclampsia. Practice Bulletin No. 222. Obstet Gynecol. 2020.',
  'Jhee et al. Prediction model development of late-onset preeclampsia using machine learning-based methods. PLoS One. 2019.',
  'Collins et al. TRIPOD+AI statement. BMJ. 2024;385:e078378.',
];

const FIGURES = {
  hero: {
    alt: 'The SafeMom result screen shown on a laptop.',
    brief:
      'Hero: your final result screen inside a laptop or tablet frame. Show the risk flag clearly.',
    caption: 'The result screen after the redesign.',
    ratio: '16 / 9',
  },
  currentWorkflow: {
    alt: 'Diagram of the current antenatal visit workflow.',
    brief:
      "Diagram of today's visit: blood pressure, urine test, gestational age, judgement, week-20 diagnosis.",
    caption: 'The current visit, as clinicians described it.',
    ratio: '16 / 9',
  },
  researchSynthesis: {
    alt: 'Affinity map from clinician interviews.',
    brief:
      'Photo or screenshot of your interview notes or affinity map. Blur names and clinic details.',
    caption: 'Synthesis of the clinician interviews.',
    ratio: '4 / 3',
  },
  persona: {
    alt: 'Proto-persona of an antenatal clinician.',
    brief:
      'Proto-persona card: role, setting, goals, frustrations, device. Label it as an assumption if not research-backed.',
    caption: 'The primary user: an antenatal clinician.',
    ratio: '4 / 3',
  },
  sketches: {
    alt: 'Low-fidelity sketches of the entry form and result states.',
    brief: 'Photos of your paper sketches or Crazy 8s for the entry form and result states.',
    caption: 'Early sketches of entry and result states.',
    ratio: '16 / 9',
  },
  userJourney: {
    alt: 'Clinician user journey from sign-in to decision.',
    brief:
      'Clinician journey diagram: sign in, enter data, read the flag, decide. Mark which steps exist in the prototype.',
    caption: 'The clinician journey.',
    ratio: '16 / 9',
  },
  loginScreen: {
    alt: 'The SafeMom sign-in screen.',
    brief: 'Sign-in screen. Crop out any credentials or personal data.',
    caption: 'Sign in.',
    ratio: '4 / 3',
  },
  entryForm: {
    alt: 'The SafeMom data-entry form.',
    brief: 'Data-entry form as built. Add a second image of the shortened version if you have one.',
    caption: 'Enter visit data.',
    ratio: '4 / 3',
  },
  resultBefore: {
    alt: 'The original result page with patient-facing advice.',
    brief: 'The original result page, with the reassurance and advice text visible.',
    caption: 'Before: reassurance and unreviewed advice.',
    ratio: '4 / 3',
  },
  resultAfter: {
    alt: 'The redesigned result screen with a neutral risk flag.',
    brief: 'Your redesigned result screen with the neutral flag and the inputs that drove it.',
    caption: 'After: a neutral flag for the clinician.',
    ratio: '4 / 3',
  },
  architecture: {
    alt: 'System architecture of the prototype.',
    brief: 'Simple diagram: browser, Flask app, MySQL, saved model. Do not show credentials.',
    caption: 'How the prototype fits together.',
    ratio: '16 / 9',
  },
};

/* ------------------------------------------------------------------ */
/* Hooks                                                               */
/* ------------------------------------------------------------------ */

const OBSERVER_OPTIONS = { rootMargin: '-20% 0px -70% 0px' };

function reportIntersectingSection(entries, onActive) {
  const visible = entries.find((entry) => entry.isIntersecting);
  if (visible) onActive(visible.target.id);
}

function observeSections(sectionIds, onActive) {
  const observer = new IntersectionObserver(
    (entries) => reportIntersectingSection(entries, onActive),
    OBSERVER_OPTIONS
  );
  sectionIds
    .map((id) => document.getElementById(id))
    .filter(Boolean)
    .forEach((element) => observer.observe(element));
  return () => observer.disconnect();
}

function useActiveSectionId(sectionIds) {
  const [activeId, setActiveId] = useState(sectionIds[0]);
  useEffect(() => observeSections(sectionIds, setActiveId), [sectionIds]);
  return activeId;
}

/* ------------------------------------------------------------------ */
/* Building blocks                                                     */
/* ------------------------------------------------------------------ */

function EvidenceTag({ status }) {
  return (
    <span className="cs-evidence" data-status={status}>
      {EVIDENCE_LABELS[status]}
    </span>
  );
}

function ImagePlaceholder({ brief, ratio }) {
  return (
    <div
      className="cs-placeholder"
      style={{ aspectRatio: ratio }}
      role="img"
      aria-label={`Image placeholder: ${brief}`}
    >
      <strong className="cs-placeholder__label">Add image</strong>
      <span className="cs-placeholder__brief">{brief}</span>
    </div>
  );
}

function Figure({ figure, src = null }) {
  const { alt, brief, caption, ratio } = figure;
  return (
    <figure className="cs-figure">
      {src ? (
        <img className="cs-figure__image" src={src} alt={alt} style={{ aspectRatio: ratio }} />
      ) : (
        <ImagePlaceholder brief={brief} ratio={ratio} />
      )}
      <figcaption className="cs-figure__caption">{caption}</figcaption>
    </figure>
  );
}

function Section({ id, title, children }) {
  const headingId = `${id}-title`;
  return (
    <section id={id} className="cs-section" aria-labelledby={headingId}>
      <h2 id={headingId} className="cs-section__title">
        {title}
      </h2>
      {children}
    </section>
  );
}

function Subheading({ children }) {
  return <h3 className="cs-subheading">{children}</h3>;
}

function BulletList({ items }) {
  return (
    <ul className="cs-list">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

function Paragraphs({ paragraphs }) {
  return paragraphs.map((text) => (
    <p key={text} className="cs-prose">
      {text}
    </p>
  ));
}

function DataTable({ columns, rows }) {
  return (
    <div className="cs-table-scroll">
      <table className="cs-table">
        <thead>
          <tr>
            {columns.map(({ key, label }) => (
              <th key={key} scope="col">
                {label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row[columns[0].key]}>
              {columns.map(({ key, render }) => (
                <td key={key}>{render ? render(row[key]) : row[key]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function preferredScrollBehavior() {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  return prefersReducedMotion ? 'auto' : 'smooth';
}

function scrollToSection(event, sectionId) {
  event.preventDefault();
  document
    .getElementById(sectionId)
    ?.scrollIntoView({ behavior: preferredScrollBehavior(), block: 'start' });
}

function SectionNav({ sections, activeId }) {
  return (
    <nav className="cs-nav" aria-label="Case study sections">
      <ol className="cs-nav__list">
        {sections.map(({ id, title }) => (
          <li key={id}>
            <a
              className="cs-nav__link"
              href={`#${id}`}
              onClick={(event) => scrollToSection(event, id)}
              aria-current={id === activeId ? 'location' : undefined}
            >
              {title}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}

/* ------------------------------------------------------------------ */
/* Problem: the five whys                                              */
/* ------------------------------------------------------------------ */

function WhyStep({ step, depth }) {
  return (
    <li className="cs-why" style={{ '--depth': depth }}>
      <h3 className="cs-why__question">{step.question}</h3>
      <p className="cs-why__answer">{step.answer}</p>
      <EvidenceTag status={step.evidence} />
    </li>
  );
}

function WhyChain({ steps }) {
  return (
    <ol className="cs-whys">
      {steps.map((step, depth) => (
        <WhyStep key={step.question} step={step} depth={depth} />
      ))}
    </ol>
  );
}

function RootCause({ text }) {
  return (
    <p className="cs-root-cause">
      <strong>Root cause.</strong> {text}
    </p>
  );
}

/* ------------------------------------------------------------------ */
/* Sections                                                            */
/* ------------------------------------------------------------------ */

function ProjectFacts({ facts }) {
  return (
    <dl className="cs-facts">
      {facts.map(({ label, value }) => (
        <div key={label} className="cs-facts__item">
          <dt>{label}</dt>
          <dd>{value}</dd>
        </div>
      ))}
    </dl>
  );
}

function OverviewSection() {
  return (
    <Section id="overview" title="Overview">
      <Paragraphs paragraphs={OVERVIEW_CONTEXT} />
      <Figure figure={FIGURES.hero} src="/SafeMom.png" />
    </Section>
  );
}

function ProblemSection() {
  return (
    <Section id="problem" title="Problem">
      <p className="cs-prose">
        Mothers at risk of preeclampsia are identified too late. I asked why, five times.
      </p>
      <WhyChain steps={FIVE_WHYS} />
      <RootCause text={ROOT_CAUSE} />
    </Section>
  );
}

function EmpathizeSection() {
  return (
    <Section id="empathize" title="Empathize">
      <Subheading>How we learned</Subheading>
      <BulletList items={RESEARCH_METHODS} />
      <p className="cs-prose">{RESEARCH_LIMITATION}</p>
      <Figure figure={FIGURES.researchSynthesis} />
      <Subheading>What we heard</Subheading>
      <DataTable columns={FINDING_COLUMNS} rows={FINDINGS} />
      <Figure figure={FIGURES.currentWorkflow} src="/review.png" />
    </Section>
  );
}

function DefineSection() {
  return (
    <Section id="define" title="Define">
      <blockquote className="cs-pull">{HOW_MIGHT_WE}</blockquote>
      <p className="cs-prose">
        The primary user is the antenatal clinician: doctor, nurse, midwife or community health
        worker. These requirements follow from the findings. <EvidenceTag status="proposed" />
      </p>
      <BulletList items={REQUIREMENTS} />
      <Figure figure={FIGURES.persona} src="/persona.png" />
    </Section>
  );
}

function JourneyStep({ step }) {
  return (
    <li className="cs-journey__step">
      <strong>{step.title}</strong>
      <span>{step.detail}</span>
    </li>
  );
}

function DecisionList({ decisions }) {
  return (
    <dl className="cs-decisions">
      {decisions.map(({ decision, reason }) => (
        <div key={decision}>
          <dt>{decision}</dt>
          <dd>{reason}</dd>
        </div>
      ))}
    </dl>
  );
}

function IdeateSection() {
  return (
    <Section id="ideate" title="Ideate">
      <p className="cs-prose">{VALUE_PROPOSITION}</p>
      <Figure figure={FIGURES.sketches} />
      <Subheading>The clinician journey</Subheading>
      <ol className="cs-journey">
        {JOURNEY_STEPS.map((step) => (
          <JourneyStep key={step.title} step={step} />
        ))}
      </ol>
      <Figure figure={FIGURES.userJourney} src="/Journey.png" />
      <Subheading>Three design decisions</Subheading>
      <DecisionList decisions={DESIGN_DECISIONS} />
    </Section>
  );
}

function PrototypeSection() {
  return (
    <Section id="prototype" title="Prototype">
      <p className="cs-prose">
        A working web application runs end to end. <EvidenceTag status="prototype" />
      </p>
      <BulletList items={PROTOTYPE_CAPABILITIES} />
      <div className="cs-figure-row">
        <Figure figure={FIGURES.loginScreen} src="/login.png" />
        <Figure figure={FIGURES.entryForm} src="/dashboard.png" />
      </div>
      <Figure figure={FIGURES.architecture} src="/patient.png" />
    </Section>
  );
}

function TestSection() {
  return (
    <Section id="test" title="Test">
      <p className="cs-prose">
        I reviewed the prototype against usability principles and clinical safety. This was an
        expert review, not a usability test with clinicians.
      </p>
      <DataTable columns={AUDIT_COLUMNS} rows={AUDIT_FINDINGS} />
      <div className="cs-figure-row">
        <Figure figure={FIGURES.resultBefore} />
        <Figure figure={FIGURES.resultAfter} />
      </div>
      <Subheading>What the evidence does not show</Subheading>
      <BulletList items={EVIDENCE_GAPS} />
    </Section>
  );
}

function ReflectionSection() {
  return (
    <Section id="reflection" title="Reflection">
      <Subheading>What I can claim</Subheading>
      <p className="cs-prose">
        A working prototype, six requirements grounded in clinician input, and a result page
        redesigned from an audit. I make no claim about clinical performance.
      </p>
      <Subheading>Next steps</Subheading>
      <BulletList items={NEXT_STEPS} />
      <Subheading>What I would do differently</Subheading>
      <BulletList items={LESSONS} />
    </Section>
  );
}

function SourcesList() {
  return (
    <aside className="cs-sources" aria-labelledby="sources-title">
      <h2 id="sources-title" className="cs-subheading">
        Sources
      </h2>
      <ol>
        {SOURCES.map((source) => (
          <li key={source}>{source}</li>
        ))}
      </ol>
    </aside>
  );
}

/* ------------------------------------------------------------------ */
/* Page                                                                */
/* ------------------------------------------------------------------ */

function CaseStudyHeader() {
  return (
    <header className="cs-header">
      <h1 className="cs-header__title">{PROJECT.title}</h1>
      <p className="cs-header__summary">{PROJECT.summary}</p>
      <ProjectFacts facts={PROJECT.facts} />
    </header>
  );
}

export default function SafeMomCaseStudy() {
  const activeId = useActiveSectionId(SECTION_IDS);

  return (
    <div className="cs-root">
      <SectionNav sections={SECTIONS} activeId={activeId} />
      <main className="cs-main">
        <CaseStudyHeader />
        <OverviewSection />
        <ProblemSection />
        <EmpathizeSection />
        <DefineSection />
        <IdeateSection />
        <PrototypeSection />
        <TestSection />
        <ReflectionSection />
        <SourcesList />
      </main>
    </div>
  );
}
