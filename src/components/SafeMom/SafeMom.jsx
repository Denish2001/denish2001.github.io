import { useState } from 'react';
import { FiArrowUpRight, FiDownload, FiPlus, FiMinus } from 'react-icons/fi';
import './SafeMom.css';

const PROJECT = {
  title: 'SafeMom',
  subtitle: 'An earlier signal for a serious pregnancy complication',
  summary:
    'A clinician-facing web prototype exploring how routine antenatal information might support earlier identification of preeclampsia risk, without confusing a model output with a diagnosis.',
  role: 'Project Lead and UI/UX Designer',
  team: 'KamiLimu Data Science Group 2, 3 members',
  timeline: 'July to December 2024',
  tools: 'Figma, Pen and Paper, Slack',
  status: 'Working prototype',
};

const LINKS = {
  prototype: 'https://safe-mom-7gqn.onrender.com/',
  researchPdf: 'https://drive.google.com/file/d/1uv1L0CJTnPgXL-ctZ6wQrceQRq3ph3RG/view?usp=sharing',
};

const TEAM = [
  {
    name: 'Denish Awajo',
    role: 'Software Engineer, Project Lead',
    initials: 'DA',
    focus: 'Project direction, interface design, front-end build.',
  },
  {
    name: 'Sebastian Chanzu',
    role: 'Data Analyst',
    initials: 'SC',
    focus: 'Data preparation, exploratory analysis, evaluation support.',
  },
  {
    name: 'Eddah Chepchirchir',
    role: 'AI Researcher',
    initials: 'EC',
    focus: 'Model research, literature review, clinical context.',
  },
];

/* ==========================================================
   SHARED
   ========================================================== */

function Section({ id, number, label, title, intro, takeaway, children }) {
  return (
    <section id={id} className="sm-section" aria-labelledby={`${id}-title`}>
      <div className="sm-section-label">
        <span>{number}</span>
        {label}
      </div>

      <div className="sm-section-content">
        <h2 id={`${id}-title`} className="sm-h2">
          {title}
        </h2>
        {intro && <p className="sm-lede">{intro}</p>}
        {takeaway && <p className="sm-takeaway">{takeaway}</p>}
        {children}
      </div>
    </section>
  );
}

function Figure({ src, alt, caption }) {
  const [failed, setFailed] = useState(false);
  return (
    <figure className="sm-figure">
      {src && !failed ? (
        <img src={src} alt={alt} onError={() => setFailed(true)} loading="lazy" decoding="async" />
      ) : (
        <div className="sm-figure-placeholder" role="img" aria-label={alt}>
          <span>IMAGE UNAVAILABLE</span>
          <p>{alt}</p>
        </div>
      )}
      {caption && <figcaption>{caption}</figcaption>}
    </figure>
  );
}

function Insight({ number, title, children }) {
  return (
    <article className="sm-insight">
      <span className="sm-insight-num">{number}</span>
      <div>
        <h3>{title}</h3>
        <p>{children}</p>
      </div>
    </article>
  );
}

function Step({ number, title, children }) {
  return (
    <div className="sm-step">
      <span className="sm-step-num">{number}</span>
      <h3>{title}</h3>
      <p>{children}</p>
    </div>
  );
}

function Decision({ title, children }) {
  return (
    <article className="sm-decision">
      <h3>{title}</h3>
      <p>{children}</p>
    </article>
  );
}

function Source({ children, href }) {
  return (
    <li>
      {href ? (
        <a href={href} target="_blank" rel="noreferrer">
          {children}
        </a>
      ) : (
        children
      )}
    </li>
  );
}

function AccordionItem({ id, title, openId, setOpenId, children }) {
  const open = openId === id;
  return (
    <div className={`sm-acc ${open ? 'is-open' : ''}`}>
      <button
        type="button"
        className="sm-acc__trigger"
        aria-expanded={open}
        onClick={() => setOpenId(open ? null : id)}
      >
        <span>{title}</span>
        <span className="sm-acc__icon" aria-hidden="true">
          {open ? <FiMinus size={14} /> : <FiPlus size={14} />}
        </span>
      </button>
      {open && <div className="sm-acc__body">{children}</div>}
    </div>
  );
}

function TeamCard({ member }) {
  return (
    <article className="sm-team-card">
      <div className="sm-team-avatar" aria-hidden="true">
        {member.initials}
      </div>
      <div>
        <h3>{member.name}</h3>
        <p className="sm-team-role">{member.role}</p>
        <p className="sm-team-focus">{member.focus}</p>
      </div>
    </article>
  );
}

/* ==========================================================
   PAGE
   ========================================================== */

export default function SafeMom() {
  const [openAcc, setOpenAcc] = useState('form');

  return (
    <main className="sm">
      {/* ============================================================ */}
      {/* HERO                                                          */}
      {/* ============================================================ */}
      <header className="sm-hero">
        <div className="sm-hero-copy">
          <h1 className="sm-hero-title">
            SafeMom
            <span className="sm-hero-period">.</span>
          </h1>
          <p className="sm-hero-sub">{PROJECT.subtitle}</p>
          <p className="sm-hero-desc">{PROJECT.summary}</p>

          <div className="sm-hero-actions">
            <a
              className="sm-btn sm-btn--primary"
              href={LINKS.prototype}
              target="_blank"
              rel="noopener noreferrer"
            >
              View live prototype
              <FiArrowUpRight size={14} aria-hidden="true" />
            </a>
            <a
              className="sm-btn sm-btn--ghost"
              href={LINKS.researchPdf}
              target="_blank"
              rel="noopener noreferrer"
            >
              Read the research report
              <FiDownload size={14} aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="sm-hero-media">
          <Figure
            src="/sm.png"
            alt="SafeMom application interface shown in a product mockup"
            caption="Early-stage clinician-facing prototype"
          />
        </div>
      </header>

      {/* ============================================================ */}
      {/* META STRIP                                                    */}
      {/* ============================================================ */}
      <section className="sm-meta" aria-label="Project overview">
        <div>
          <span>Role</span>
          <strong>{PROJECT.role}</strong>
        </div>
        <div>
          <span>Team</span>
          <strong>{PROJECT.team}</strong>
        </div>
        <div>
          <span>Timeline</span>
          <strong>{PROJECT.timeline}</strong>
        </div>
        <div>
          <span>Tools</span>
          <strong>{PROJECT.tools}</strong>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 01 / PROBLEM                                                  */}
      {/* ============================================================ */}
      <Section
        id="context"
        number="01"
        label="The problem"
        title="A prediction is only useful if it reaches the right decision."
        intro="SafeMom began with a question. Could routine antenatal information help clinicians identify women who may need closer monitoring for preeclampsia, earlier in pregnancy?"
      >
        <p>
          Preeclampsia is a hypertensive disorder of pregnancy that can affect multiple organ
          systems and lead to serious complications for both mother and baby. It usually develops
          after 20 weeks, and earlier identification of risk is an important clinical goal.
        </p>
        <p>
          The burden is severe. The WHO estimates that hypertensive disorders of pregnancy caused
          about 42,000 maternal deaths globally in 2023, roughly 16 percent of all maternal deaths,
          with the highest toll in low and middle income countries. Kenya's estimated maternal
          mortality ratio was approximately 379 per 100,000 live births. But a model can return a
          classification. It cannot, by that act alone, establish whether a patient will develop the
          condition. Its output must be interpreted in context: the population, timing, inputs, and
          evidence behind it.
        </p>

        <div className="sm-question">
          <p>
            How might a risk estimate fit into an antenatal visit without being mistaken for a
            diagnosis?
          </p>
        </div>

        <p>
          This gave the project two connected challenges. Define a meaningful risk prediction at a
          specific point in pregnancy, and make the resulting estimate clear and useful without
          giving it more authority than it deserved.
        </p>
      </Section>

      {/* ============================================================ */}
      {/* DESIGN CHALLENGE BAND                                         */}
      {/* ============================================================ */}
      <section className="sm-band">
        <div className="sm-band-inner">
          <h2 className="sm-band-title">
            How might we help antenatal clinicians identify women who may need closer monitoring
            through a clear, practical risk-assessment workflow, while preserving clinical judgement
            and making the limits of the prediction visible?
          </h2>

          <div className="sm-band-grid">
            <article>
              <span>01</span>
              <h3>Clarity</h3>
              <p>
                The user should understand the result without needing to interpret machine learning
                terminology.
              </p>
            </article>
            <article>
              <span>02</span>
              <h3>Efficiency</h3>
              <p>Data entry should be purposeful, with missing information handled explicitly.</p>
            </article>
            <article>
              <span>03</span>
              <h3>Appropriate authority</h3>
              <p>
                The application should support assessment without presenting its output as a
                diagnosis or a guarantee of safety.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 02 / DISCOVERY                                                */}
      {/* ============================================================ */}
      <Section
        id="discovery"
        number="02"
        label="Discovery"
        title="Understanding the people who would use the system."
        intro="The primary user was the antenatal clinician, not the pregnant woman completing a self-assessment. That choice shaped the task, the language, and the responsibility the interface needed to preserve."
        takeaway="The interface has to protect clinical judgement as carefully as it protects model accuracy."
      >
        <p>
          Our discovery combined interviews with five clinicians working in Kenyan antenatal care, a
          mix of nurses and clinical officers, a literature review, and consultations with people
          working in maternal health, obstetrics, and health technology. We wanted to understand the
          existing workflow, surface barriers to adoption, and decide what a first version needed to
          support.
        </p>
        <p>
          One pattern recurred across interviews. Clinicians described relying on paper or memory to
          spot risk flags, and worried that any new digital step would add time to an already
          crowded visit. A paraphrased observation from one interview:{' '}
          <em>"If it takes longer than the check itself, I won't use it."</em> These are early,
          team-reported findings, not representative evidence across all Kenyan clinics.
        </p>

        <Figure
          src="/int.png"
          alt="Eddah Chepchirchir interviewing a clinician at Bondeni Hospital in Nakuru"
          caption="Field research at Bondeni Hospital, Nakuru. Eddah Chepchirchir interviewing a clinician about the antenatal workflow."
        />

        <div className="sm-insights">
          <Insight
            number="01"
            title="The quality of the output depends on the quality of the input."
          >
            A prediction is only as meaningful as the data supplied to the model. The interface
            needed to make required information clear, surface missing or implausible values, and
            avoid silently substituting values that could change the result.
          </Insight>
          <Insight number="02" title="An extra tool must justify the work it introduces.">
            Clinicians raised concerns about time. A lengthy form could undermine the value of an
            otherwise useful prediction, so fields needed to be reviewed against the model actual
            input requirements.
          </Insight>
          <Insight number="03" title="Clinical trust cannot be designed into existence.">
            A confident-looking result is not proof of accuracy. The product needed neutral
            language, clear limits around intended use, and an interaction that left clinical
            judgement with the clinician.
          </Insight>
          <Insight number="04" title="Adoption depends on the surrounding workflow.">
            Connectivity, device constraints, integration with existing records, staff
            responsibilities, and accountability can all affect feasibility. These became
            requirements to investigate, not capabilities already proven.
          </Insight>
        </div>

        <Figure
          src="/research-map.png"
          alt="SafeMom research synthesis showing clinician interview themes mapped to design requirements"
          caption="Research synthesis. Clinician interview themes on data burden and trust, mapped to the design requirements that shaped the interface."
        />

        <h3 className="sm-h3">From research to design requirements</h3>
        <div className="sm-table-wrap">
          <table className="sm-table">
            <thead>
              <tr>
                <th>Research implication</th>
                <th>Design response</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Missing information can undermine a prediction.</td>
                <td>Make required inputs explicit and flag missing or implausible values.</td>
              </tr>
              <tr>
                <td>Additional data entry can increase workload.</td>
                <td>Review which fields are necessary and remove avoidable entry.</td>
              </tr>
              <tr>
                <td>A risk estimate can be mistaken for a diagnosis.</td>
                <td>Use neutral language and explain the limits of the result.</td>
              </tr>
              <tr>
                <td>Clinicians remain responsible for decisions.</td>
                <td>Present output as decision support, not as a treatment instruction.</td>
              </tr>
              <tr>
                <td>The tool must fit its operating environment.</td>
                <td>Investigate device, connectivity, and integration requirements.</td>
              </tr>
              <tr>
                <td>Patient information requires protection.</td>
                <td>Limit access, protect credentials, and define appropriate data handling.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Section>

      {/* ============================================================ */}
      {/* 03 / DEFINE                                                   */}
      {/* ============================================================ */}
      <Section
        id="define"
        number="03"
        label="Define"
        title="Designing around a clinical decision, not an algorithm."
        intro="The core challenge was to make the output understandable without giving it more authority than it deserved."
        takeaway="The design target was a better clinician decision, not a more confident-looking result."
      >
        <blockquote className="sm-quote">
          How might we help antenatal clinicians identify women who may need closer monitoring
          through a clear, practical risk-assessment workflow, while preserving clinical judgement
          and making the limits of the prediction visible?
        </blockquote>

        <p>
          These priorities could conflict. Simplifying a form should not remove information the
          model requires. Simplifying a result should not conceal uncertainty. And making an
          interface reassuring should never mean reassuring a patient or clinician without evidence.
        </p>
        <p>
          The clinician was the primary user. The pregnant woman was the person most affected by the
          quality of the decision. I used that distinction to guide the language and
          responsibilities represented in the interface.
        </p>

        <Figure
          src="/persona.png"
          alt="Proto-persona of an antenatal clinician using SafeMom"
          caption="Proto-persona of the antenatal clinician, grounded in interview themes of time pressure and reliance on clinical judgement. Not a statistically validated profile."
        />
      </Section>

      {/* ============================================================ */}
      {/* 04 / IDEATION                                                 */}
      {/* ============================================================ */}
      <Section
        id="ideation"
        number="04"
        label="Ideation"
        title="Turning the requirements into a usable workflow."
        intro="I organised the experience around a simple sequence. Access the application, enter visit information, review the classification, and make a clinical decision."
        takeaway="Every screen had to answer a single question. What does the clinician decide next?"
      >
        <div className="sm-steps">
          <Step number="01" title="Access">
            The clinician signs in to the application.
          </Step>
          <Step number="02" title="Record">
            The clinician enters the information required for the assessment.
          </Step>
          <Step number="03" title="Review">
            The application returns a risk classification and the context the prototype can provide.
          </Step>
          <Step number="04" title="Decide">
            The clinician interprets the result alongside clinical assessment and applicable
            guidance.
          </Step>
        </div>

        <Figure
          src="/Journey.png"
          alt="SafeMom clinician journey from sign-in to decision"
          caption="The intended clinician journey. Implemented steps in the prototype, from sign-in through result, versus steps that still require validation: integration with records, clinician handoff."
        />

        <h3 className="sm-h3">Three decisions guided the interface</h3>
        <div className="sm-decisions">
          <Decision title="Show a flag, not a verdict.">
            A negative classification cannot guarantee that a woman is free of risk. The result
            should be neutral and appropriately qualified rather than falsely reassuring.
          </Decision>
          <Decision title="Make data quality visible.">
            Missing values should not be silently converted to zero. The interface should surface
            incomplete or implausible information so that the user can review it.
          </Decision>
          <Decision title="Keep the clinician responsible.">
            The application can communicate the model output, but it should not issue unreviewed
            treatment instructions or replace professional judgement.
          </Decision>
        </div>

        <Figure
          src="/sketches.png"
          alt="Early SafeMom sketches showing the form and result screen layouts"
          caption="Early sketches iterating the data-entry form and result screen, before the working prototype."
        />
      </Section>

      {/* ============================================================ */}
      {/* 05 / PROTOTYPE                                                */}
      {/* ============================================================ */}
      <Section
        id="prototype"
        number="05"
        label="Prototype"
        title="From interface design to a working application."
        intro="SafeMom moved beyond static mockups into a web application connecting authentication, data entry, record storage, and a saved prediction model."
        takeaway="A connected flow exposed problems no static mockup could."
      >
        <p>
          This mattered because the experience depended on more than visual design. The user had to
          authenticate, enter information, submit a record, and receive the output generated by the
          model. Bringing those parts together made it possible to review the experience as a
          connected flow rather than a set of isolated screens.
        </p>

        <div className="sm-capabilities">
          <article>
            <span>01</span>
            <h3>Authentication</h3>
            <p>Clinician sign-in with hashed passwords.</p>
          </article>
          <article>
            <span>02</span>
            <h3>Data entry</h3>
            <p>A form containing approximately two dozen fields.</p>
          </article>
          <article>
            <span>03</span>
            <h3>Record storage</h3>
            <p>Entries stored in association with the signed-in clinician.</p>
          </article>
          <article>
            <span>04</span>
            <h3>Prediction</h3>
            <p>A binary risk classification returned by a saved XGBoost model.</p>
          </article>
          <article>
            <span>05</span>
            <h3>Result display</h3>
            <p>A result page with explanatory text.</p>
          </article>
        </div>

        <Figure src="/login.png" alt="SafeMom sign-in screen" caption="Sign in" />
        <Figure
          src="/dashboard.png"
          alt="SafeMom data-entry form"
          caption="Enter visit information"
        />
        <Figure
          src="/prototype.png"
          alt="SafeMom system architecture linking the web app, database and saved XGBoost model"
          caption="System overview. The clinician-facing web app, record storage, and saved prediction model linked into one flow."
        />

        <div className="sm-note">
          <p>
            <strong>Implementation note.</strong> This describes the documented prototype, not a
            production deployment. It has not undergone a security audit, privacy assessment, or
            clinical certification.
          </p>
        </div>
      </Section>

      {/* ============================================================ */}
      {/* 06 / REVIEW                                                   */}
      {/* ============================================================ */}
      <Section
        id="evaluation"
        number="06"
        label="Review"
        title="When a working result becomes a design problem."
        intro="A review of the result page surfaced issues that went beyond visual polish. The language and behaviour of the interface could affect how users interpreted a model output."
        takeaway="A clearer interface can remove false reassurance, but it cannot prove the model works."
      >
        <p>
          I reviewed the prototype against usability principles and clinical-safety considerations.
          This was an expert review of the interface, not a formal usability study with clinicians.
          The review identified <strong>six problems</strong> where the design could imply more
          certainty than the evidence supported, and I fixed all six in the proposed result page
          below.
        </p>

        <Figure
          src="/result-before.png"
          alt="Original SafeMom result page before review"
          caption="Before. Original result experience."
        />
        <Figure
          src="/result-after.png"
          alt="SafeMom result page after the redesign to reduce false reassurance"
          caption="After. Neutral result experience addressing all six issues."
        />

        <div className="sm-table-wrap">
          <table className="sm-table">
            <thead>
              <tr>
                <th>What I identified</th>
                <th>Why it mattered</th>
                <th>Design response</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>A negative result said the user was doing great.</td>
                <td>It could be interpreted as assurance that no risk remained.</td>
                <td>Use neutral, appropriately qualified language.</td>
              </tr>
              <tr>
                <td>
                  The result addressed the mother, although the intended user was a clinician.
                </td>
                <td>The wording did not match the user role or task.</td>
                <td>Rewrite the interface for clinical use.</td>
              </tr>
              <tr>
                <td>Treatment advice appeared without documented clinical review.</td>
                <td>Users could mistake it for an approved recommendation.</td>
                <td>Remove it until qualified reviewers assess it against relevant guidance.</td>
              </tr>
              <tr>
                <td>Positive results showed the same message.</td>
                <td>The output provided little context about the classification.</td>
                <td>Clarify what the result represents, within the model limits.</td>
              </tr>
              <tr>
                <td>Missing values were silently set to zero.</td>
                <td>Incorrect inputs could appear to be valid observations.</td>
                <td>Flag missing or implausible data and request correction where appropriate.</td>
              </tr>
              <tr>
                <td>The form contained about two dozen fields.</td>
                <td>The entry burden had not been assessed through user testing.</td>
                <td>Review field necessity and test a shorter form against model requirements.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="sm-callout">
          <p>A better interface is not a validated medical tool.</p>
          <small>
            Neutral wording can reduce misleading reassurance, and input validation can expose data
            errors. Neither proves that the model predicts preeclampsia accurately.
          </small>
        </div>
      </Section>

      {/* ============================================================ */}
      {/* 07 / EVIDENCE                                                 */}
      {/* ============================================================ */}
      <Section
        id="evidence"
        number="07"
        label="Evidence"
        title="Separating technical progress from clinical evidence."
        intro="The project documentation records a model accuracy figure of 98.75 percent. Without the evaluation details, that figure cannot establish how the model would perform in a clinical setting."
        takeaway="Technical progress is not clinical evidence, and the case study says so plainly."
      >
        <div className="sm-metric">
          <div className="sm-metric-num">98.75%</div>
          <div>
            <strong>Reported prototype accuracy</strong>
            <p>
              One documented evaluation. Sample and evaluation details are insufficiently described.
            </p>
          </div>
        </div>

        <p>
          Accuracy alone can hide missed cases, especially when outcome classes are imbalanced. A
          credible evaluation needs a clearly defined outcome, a defensible data-splitting strategy,
          class distribution, and appropriate measures such as sensitivity, specificity,
          discrimination, and calibration, ideally on data independent of model development.
        </p>

        <div className="sm-limits">
          <article>
            <span>01</span>
            <div>
              <h3>Prediction timing</h3>
              <p>
                Materials refer to a prediction point around week eight, while the discovery
                narrative discusses recognition later in pregnancy. The target and timing need to be
                reconciled before claiming early prediction.
              </p>
            </div>
          </article>
          <article>
            <span>02</span>
            <div>
              <h3>Generalisation</h3>
              <p>
                The reported accuracy does not establish performance on an independent population of
                pregnant women in Kenyan antenatal clinics.
              </p>
            </div>
          </article>
          <article>
            <span>03</span>
            <div>
              <h3>Clinical usefulness</h3>
              <p>
                No formal clinician usability sessions or prospective clinical evaluation are
                documented.
              </p>
            </div>
          </article>
        </div>

        <h3 className="sm-h3">How I would measure success</h3>
        <div className="sm-steps sm-steps--list">
          <p>
            <b>01</b> Time to complete the form, target set after a baseline usability test.
          </p>
          <p>
            <b>02</b> Rate of missing or implausible values caught before submission.
          </p>
          <p>
            <b>03</b> Share of clinicians who correctly say what the result does <em>not</em> mean.
          </p>
          <p>
            <b>04</b> Sensitivity and specificity on independent data.
          </p>
        </div>

        <h3 className="sm-h3">What would need to happen next</h3>
        <div className="sm-steps sm-steps--list">
          <p>
            <b>01</b> Define the outcome, prediction time, and permissible inputs.
          </p>
          <p>
            <b>02</b> Test the workflow with clinicians using realistic tasks.
          </p>
          <p>
            <b>03</b> Have qualified professionals review the clinical language and warnings.
          </p>
          <p>
            <b>04</b> Independently evaluate the model and report results transparently.
          </p>
        </div>
      </Section>

      {/* ============================================================ */}
      {/* 08 / TEAM                                                     */}
      {/* ============================================================ */}
      <Section
        id="team"
        number="08"
        label="The team"
        title="Three disciplines, one shared research question."
        intro="SafeMom was built by a three-person research group inside KamiLimu's Data Science cohort. Each of us owned a distinct part of the problem: model, data, and interface."
        takeaway="The interface is only as trustworthy as the collaboration that produced it."
      >
        <Figure
          src="/smteam.jpg"
          alt="SafeMom project team: Denish Awajo, Sebastian Chanzu, and Eddah Chepchirchir"
          caption="The SafeMom team. Denish Awajo, Sebastian Chanzu, and Eddah Chepchirchir."
        />

        <div className="sm-team-grid">
          {TEAM.map((member) => (
            <TeamCard key={member.name} member={member} />
          ))}
        </div>

        <div className="sm-research-cta">
          <div>
            <h3>Read the SafeMom research and readiness report.</h3>
            <p>
              A 22-page report covering the maternal-health context, the machine-learning
              methodology, responsible-computing safeguards, the budget, the implementation roadmap,
              and unresolved questions for the team.
            </p>
          </div>
          <a
            className="sm-btn sm-btn--primary"
            href={LINKS.researchPdf}
            target="_blank"
            rel="noopener noreferrer"
          >
            Open the PDF
            <FiDownload size={14} aria-hidden="true" />
          </a>
        </div>
      </Section>

      {/* ============================================================ */}
      {/* OUTCOME BAND                                                  */}
      {/* ============================================================ */}
      <section className="sm-band sm-band--outcome">
        <div className="sm-band-inner">
          <h2 className="sm-band-title">
            A working prototype that surfaced problems static mockups could not.
          </h2>
          <p className="sm-band-lede">
            SafeMom moved from concept to a connected web application. The project's real value
            wasn't a claim of accuracy. It was the discovery that a working interface is where a
            system's assumptions become visible, and where six safety-relevant problems were found
            and addressed.
          </p>

          <div className="sm-band-grid">
            <article>
              <span>01</span>
              <h3>Working prototype</h3>
              <p>A clinician-facing web application connecting authentication, data, and model.</p>
            </article>
            <article>
              <span>02</span>
              <h3>Six issues addressed</h3>
              <p>Safety-relevant interface problems found and resolved during review.</p>
            </article>
            <article>
              <span>03</span>
              <h3>Three roles, one team</h3>
              <p>Model, data, and interface owned by three people who worked in lockstep.</p>
            </article>
          </div>

          <p className="sm-band-note">
            These describe project scope, not measured clinical or user impact. No accuracy claims
            are made here beyond what the research report documents.
          </p>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 09 / REFLECTION                                               */}
      {/* ============================================================ */}
      <Section
        id="reflection"
        number="09"
        label="Reflection"
        title="The interface is where a system's assumptions become visible."
        intro="SafeMom changed how I think about the relationship between product design, software, and evidence."
        takeaway="I turned a working model into a prototype, found six safety-relevant interface problems, and named what those fixes still do not prove."
      >
        <p>
          The initial challenge appeared to be early risk identification. As the work developed, the
          challenge became broader. How could a clinician-facing application present a model output
          without creating false confidence, introducing avoidable data errors, or disrupting
          decisions already being made in a clinical setting?
        </p>
        <p>
          The interface is where a system's assumptions, limitations, and capabilities become
          visible. A model may return a classification, but the product still has to communicate
          what that classification means. The project's value lies in combining technical
          implementation with critical review. SafeMom became a working prototype and helped
          identify weaknesses in the result language, data validation, and assumptions about the
          intended workflow. It did not establish clinical accuracy, improved maternal outcomes, or
          readiness for deployment.
        </p>

        <h3 className="sm-h3">What I would do differently</h3>
        <div className="sm-lessons">
          <article>
            <span>01</span>
            <div>
              <h3>Document discovery from day one.</h3>
              <p>
                Record recruitment, participant characteristics, interview questions, consent
                procedures, and the analysis process so findings can be defended.
              </p>
            </div>
          </article>
          <article>
            <span>02</span>
            <div>
              <h3>Bring clinicians into the design cycle earlier.</h3>
              <p>
                Observe intended users completing realistic tasks before settling the form,
                terminology, and result presentation.
              </p>
            </div>
          </article>
          <article>
            <span>03</span>
            <div>
              <h3>Resolve the prediction question first.</h3>
              <p>
                Agree on the target, prediction time, inputs, and evaluation strategy before making
                claims about early prediction.
              </p>
            </div>
          </article>
          <article>
            <span>04</span>
            <div>
              <h3>Treat clinical language as part of safety.</h3>
              <p>
                Review messages, warnings, and explanations as carefully as model logic and data
                handling.
              </p>
            </div>
          </article>
        </div>
      </Section>

      {/* ============================================================ */}
      {/* SOURCES                                                       */}
      {/* ============================================================ */}
      <footer className="sm-sources">
        <h2 className="sm-h2">Sources and references</h2>
        <p className="sm-lede">
          These references support the clinical context and the discussion of prediction model
          reporting. They do not validate the SafeMom model.
        </p>
        <ol>
          <Source href="https://www.who.int/publications/i/item/9789240069251">
            World Health Organization, UNICEF, UNFPA, World Bank Group, and UNDESA/Population
            Division. (2023). <em>Trends in maternal mortality 2000 to 2020.</em>
          </Source>
          <Source>
            American College of Obstetricians and Gynecologists. (2020). Gestational hypertension
            and preeclampsia. <em>Obstetrics &amp; Gynecology, 135</em>(6), e237 to e260. Practice
            Bulletin No. 222.
          </Source>
          <Source href="https://doi.org/10.1002/uog.27490">
            Tiruneh, S. A., et al. (2024). Externally validated prediction models for pre-eclampsia:
            systematic review and meta-analysis.{' '}
            <em>Ultrasound in Obstetrics &amp; Gynecology, 63</em>(5), 592 to 604.
          </Source>
          <Source href="https://www.bmj.com/content/385/bmj-2023-078378">
            Collins, G. S., et al. (2024). TRIPOD+AI statement: updated guidance for reporting
            clinical prediction models that use regression or machine learning methods.{' '}
            <em>BMJ, 385</em>, e078378.
          </Source>
          <Source href="https://kenyalaw.org/kl/fileadmin/pdfdownloads/Acts/2019/TheDataProtectionAct_No24of2019.pdf">
            Republic of Kenya. (2019). <em>Data Protection Act, No. 24 of 2019.</em>
          </Source>
        </ol>

        <div className="sm-footer">
          <span>SafeMom case study</span>
          <a
            href="#top"
            onClick={(event) => {
              event.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            Back to top
          </a>
        </div>
      </footer>
    </main>
  );
}
