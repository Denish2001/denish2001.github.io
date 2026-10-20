import { useState } from 'react';
import './SafeMom.css';

const SECTIONS = [
  { id: 'overview', title: 'Overview' },
  { id: 'context', title: 'The context' },
  { id: 'discovery', title: 'Discovery' },
  { id: 'define', title: 'Define' },
  { id: 'ideation', title: 'Ideation' },
  { id: 'prototype', title: 'Prototype' },
  { id: 'evaluation', title: 'Review & evaluation' },
  { id: 'evidence', title: 'Evidence & limitations' },
  { id: 'reflection', title: 'Reflection' },
];

const PROJECT = {
  title: 'SafeMom',
  subtitle: 'Designing an earlier signal for a serious pregnancy complication',
  summary:
    "A clinician-facing web prototype exploring how routine antenatal information might support earlier identification of preeclampsia risk—without confusing a model's output with a diagnosis.",
  role: 'Project Lead · UI/UX Designer',
  team: 'KamiLimu Data Science Group 2',
  timeline: 'July–December 2024',
  tools: 'Figma, Pen & Paper, Slack',
  status: 'Working prototype',
};

function Section({ id, eyebrow, title, intro, children }) {
  return (
    <section id={id} className="sm-section" aria-labelledby={`${id}-title`}>
      {eyebrow && <p className="sm-eyebrow">{eyebrow}</p>}
      <h2 id={`${id}-title`}>{title}</h2>
      {intro && <p className="sm-section-intro">{intro}</p>}
      {children}
    </section>
  );
}

function Figure({ src, alt, caption, className = '' }) {
  const [failed, setFailed] = useState(false);
  return (
    <figure className={`sm-figure ${className}`}>
      {src && !failed ? (
        <img src={src} alt={alt} onError={() => setFailed(true)} loading="lazy" />
      ) : (
        <div className="sm-image-placeholder" role="img" aria-label={alt}>
          <span>IMAGE PLACEHOLDER</span>
          <p>{alt}</p>
        </div>
      )}
      {caption && <figcaption>{caption}</figcaption>}
    </figure>
  );
}

function MetaItem({ label, children }) {
  return (
    <div className="sm-meta-item">
      <span>{label}</span>
      <strong>{children}</strong>
    </div>
  );
}

function Insight({ number, title, children }) {
  return (
    <article className="sm-insight">
      <span className="sm-insight-number">{number}</span>
      <div>
        <h3>{title}</h3>
        <p>{children}</p>
      </div>
    </article>
  );
}

function WorkflowStep({ number, title, children }) {
  return (
    <div className="sm-workflow-step">
      <span className="sm-step-number">{number}</span>
      <div>
        <h3>{title}</h3>
        <p>{children}</p>
      </div>
    </div>
  );
}

function Decision({ title, children }) {
  return (
    <article className="sm-decision">
      <span className="sm-decision-line" />
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

export default function SafeMomCaseStudy() {
  return (
    <div className="sm-case-study">
      <main className="sm-main">
        <header className="sm-hero" id="overview">
          <div className="sm-hero-heading">
            <div className="sm-hero-copy">
              <h1>
                {PROJECT.title}
                <span className="sm-title-period">.</span>
              </h1>
              <p className="sm-hero-subtitle">{PROJECT.subtitle}</p>
            </div>
          </div>
          <div className="sm-hero-summary-row">
            <p className="sm-hero-summary">{PROJECT.summary}</p>
            <p className="sm-hero-principle">
              A serious problem deserves a clear interface—and honest limits.
            </p>
          </div>

          <div className="sm-hero-image">
            <Figure
              src="/SafeMom.png"
              alt="SafeMom application interface shown in a product mockup"
              caption="SafeMom · Early-stage clinician-facing prototype"
            />
          </div>

          <div className="sm-meta-grid">
            <MetaItem label="ROLE">{PROJECT.role}</MetaItem>
            <MetaItem label="TEAM">{PROJECT.team}</MetaItem>
            <MetaItem label="TIMELINE">{PROJECT.timeline}</MetaItem>
            <MetaItem label="TOOLS">{PROJECT.tools}</MetaItem>
          </div>
          <div className="sm-status">
            <span className="sm-status-dot" />
            {PROJECT.status}
          </div>
        </header>

        <Section
          id="context"
          eyebrow="01 / THE CONTEXT"
          title="A prediction is only useful if it reaches the right decision."
          intro="SafeMom began with a question: could routine antenatal information help clinicians identify women who may need closer monitoring for preeclampsia, earlier in pregnancy?"
        >
          <div className="sm-prose">
            <p>
              Preeclampsia is a hypertensive disorder of pregnancy that can affect multiple organ
              systems and lead to serious complications for both mother and baby. It usually
              develops after 20 weeks of pregnancy, although its course and severity vary. Earlier
              identification of risk is therefore an important clinical goal.
            </p>
            <p>
              According to the World Health Organization (WHO), the condition affects approximately
              3–8% of women who give birth worldwide, while hypertensive disorders of pregnancy were
              responsible for an estimated 42,000 maternal deaths globally in 2023, accounting for
              about 16% of all maternal deaths. The wider maternal mortality burden remains
              particularly severe in low- and middle-income countries: in 2023, approximately
              260,000 women died from causes related to pregnancy and childbirth, with around 70% of
              these deaths occurring in sub-Saharan Africa.
            </p>
            <p>
              In Kenya, the estimated maternal mortality ratio was approximately 379 deaths per
              100,000 live births in 2023, highlighting the continuing challenge of protecting women
              during pregnancy and childbirth. Preeclampsia can progress to eclampsia, stroke and
              organ failure, making early detection and timely treatment essential. Yet identifying
              women at risk remains a clinical challenge, particularly where access to consistent
              antenatal monitoring and emergency obstetric care is limited. These figures underscore
              the need to strengthen early risk assessment and clinical decision-making to help
              prevent avoidable maternal deaths.
            </p>
            <p>
              But predicting a condition is not the same as diagnosing it. A model can return a
              classification; it cannot, by that act alone, establish that a patient will or will
              not develop the condition. Its output must be interpreted in the context of the
              population, timing, inputs and evidence on which it was developed.
            </p>
            <p>
              This distinction gave the project two connected challenges. The clinical challenge was
              to define a meaningful risk prediction at a specific point in pregnancy. The product
              challenge was to make any resulting estimate clear and useful without adding
              unnecessary work or giving the model more authority than it deserved.
            </p>
          </div>
          <div className="sm-question-panel">
            <span>THE QUESTION</span>
            <p>
              How might a risk estimate fit into an antenatal visit without being mistaken for a
              diagnosis?
            </p>
          </div>
          <h3 className="sm-subheading">The problem we set out to investigate</h3>
          <p className="sm-prose">
            Early project discussions and clinician consultations suggested an opportunity to
            explore technological support for identifying risk. However, our discovery work did not
            establish how widespread the problem was across Kenyan facilities or quantify the time
            spent on existing assessments. I treated the problem as a design hypothesis to
            investigate—not as a universal claim about antenatal care.
          </p>
        </Section>

        <Section
          id="discovery"
          eyebrow="02 / DISCOVERY"
          title="Understanding the people who would use the system."
          intro="The primary user was the antenatal clinician, not the pregnant woman completing a self-assessment. That choice shaped the task, the language and the responsibility the interface needed to preserve."
        >
          <div className="sm-prose">
            <p>
              Our early discovery combined clinician interviews in Kenya, a literature review, and
              consultations with people working in maternal health, obstetrics and health
              technology. We wanted to understand the existing workflow, identify potential barriers
              to adoption, and decide what a first version would need to support.
            </p>
            <p>
              The project records do not contain a complete account of the interview sample,
              recruitment process, consent steps or analysis method. The findings below are
              therefore presented as early, team-reported insights—not representative evidence about
              all Kenyan antenatal clinics.
            </p>
          </div>

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
              The team reported concerns about the time involved in existing assessment processes. A
              lengthy form could undermine the value of an otherwise useful prediction. Fields
              therefore needed to be reviewed against the model's actual input requirements.
            </Insight>
            <Insight number="03" title="Clinical trust cannot be designed into existence.">
              A confident-looking result is not proof of accuracy. The product needed neutral
              language, clear limits around intended use, and an interaction that left clinical
              judgement with the clinician.
            </Insight>
            <Insight number="04" title="Adoption depends on the surrounding workflow.">
              Connectivity, device constraints, integration with existing records, staff
              responsibilities and accountability can all affect whether a new workflow is feasible.
              These became requirements to investigate, not capabilities already proven by the
              prototype.
            </Insight>
          </div>

          <Figure
            src="/review.png"
            alt="SafeMom project workflow or research review"
            caption="Use this space for a real workflow map, interview synthesis or research artefact. Do not present a reconstructed graphic as original interview evidence."
          />

          <h3 className="sm-subheading">From research to design requirements</h3>
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
                  <td>Investigate device, connectivity and integration requirements.</td>
                </tr>
                <tr>
                  <td>Patient information requires protection.</td>
                  <td>Limit access, protect credentials and define appropriate data handling.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Section>

        <Section
          id="define"
          eyebrow="03 / DEFINE"
          title="Designing around a clinical decision, not an algorithm."
          intro="The core challenge was to make the output understandable without giving it more authority than it deserved."
        >
          <blockquote className="sm-pullquote">
            How might we help antenatal clinicians identify women who may need closer monitoring
            through a clear, practical risk-assessment workflow, while preserving clinical judgement
            and making the limits of the prediction visible?
          </blockquote>
          <div className="sm-three-priorities">
            <article>
              <span>01</span>
              <h3>Clarity</h3>
              <p>
                The user should understand the result without needing to interpret machine-learning
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
          <div className="sm-prose">
            <p>
              These priorities could conflict. Simplifying a form should not remove information the
              model requires. Simplifying a result should not conceal uncertainty. And making an
              interface reassuring should never mean reassuring a patient or clinician without
              evidence.
            </p>
            <p>
              The primary user was the clinician entering visit information and reviewing the
              classification. The pregnant woman was the person most affected by the quality of the
              decision. I used that distinction to guide the language and responsibilities
              represented in the interface.
            </p>
          </div>
          <Figure
            src="/persona.png"
            alt="SafeMom intended-user persona"
            caption="Intended user: an antenatal clinician. Label this as a proto-persona unless each attribute is supported by documented research."
          />
        </Section>

        <Section
          id="ideation"
          eyebrow="04 / IDEATION"
          title="Turning the requirements into a usable workflow."
          intro="I organised the experience around a simple sequence: access the application, enter visit information, review the classification and make a clinical decision."
        >
          <div className="sm-workflow">
            <WorkflowStep number="01" title="Access">
              The clinician signs in to the application.
            </WorkflowStep>
            <WorkflowStep number="02" title="Record">
              The clinician enters the information required for the assessment.
            </WorkflowStep>
            <WorkflowStep number="03" title="Review">
              The application returns a risk classification and the context the prototype can
              provide.
            </WorkflowStep>
            <WorkflowStep number="04" title="Decide">
              The clinician interprets the result alongside clinical assessment and applicable
              guidance.
            </WorkflowStep>
          </div>
          <Figure
            src="/Journey.png"
            alt="SafeMom clinician journey from sign-in to decision"
            caption="The intended clinician journey. Distinguish steps implemented in the prototype from steps that still require validation."
          />
          <h3 className="sm-subheading">Three decisions guided the interface</h3>
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
              The application can communicate the model's output, but it should not issue unreviewed
              treatment instructions or replace professional judgement.
            </Decision>
          </div>
          <Figure
            src="/review.png"
            alt="SafeMom early design review"
            caption="Replace with original sketches or iterations if available. This image path is retained from the supplied component."
          />
        </Section>

        <Section
          id="prototype"
          eyebrow="05 / PROTOTYPE"
          title="From interface design to a working application."
          intro="SafeMom moved beyond static mock-ups into a web application connecting authentication, data entry, record storage and a saved prediction model."
        >
          <div className="sm-prose">
            <p>
              This mattered because the experience depended on more than visual design. The user had
              to authenticate, enter information, submit a record and receive the output generated
              by the model. Bringing those parts together made it possible to review the experience
              as a connected flow rather than a set of isolated screens.
            </p>
          </div>
          <div className="sm-capability-grid">
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
          <div className="sm-screen-grid">
            <Figure src="/login.png" alt="SafeMom sign-in screen" caption="01 / Sign in" />
            <Figure
              src="/dashboard.png"
              alt="SafeMom data-entry form"
              caption="02 / Enter visit information"
            />
          </div>
          <Figure
            src="/patient.png"
            alt="SafeMom application or architecture image"
            caption="System overview. If this file is a patient or dashboard screenshot rather than an architecture diagram, replace the caption to match the actual image."
          />
          <div className="sm-note">
            <strong>Implementation note</strong>
            <p>
              This describes the documented prototype, not a production deployment. It does not
              establish that the application has undergone a security audit, privacy assessment or
              clinical certification.
            </p>
          </div>
        </Section>

        <Section
          id="evaluation"
          eyebrow="06 / REVIEW & EVALUATION"
          title="When a working result becomes a design problem."
          intro="A review of the result page surfaced issues that went beyond visual polish. The language and behaviour of the interface could affect how users interpreted a model's output."
        >
          <div className="sm-prose">
            <p>
              I reviewed the prototype against usability principles and clinical-safety
              considerations. This was an expert review of the interface, not a formal usability
              study with clinicians. The review identified several places where the design could
              imply more certainty than the underlying evidence supported.
            </p>
          </div>
          <div className="sm-before-after">
            <Figure
              src="/result-before.png"
              alt="Original SafeMom result page before review"
              caption="BEFORE / Original result experience"
            />
            <Figure
              src="/result-after.png"
              alt="SafeMom result page after proposed redesign"
              caption="AFTER / Proposed neutral result experience"
            />
          </div>
          <p className="sm-image-help">
            If your actual result screenshots use different filenames, update the two
            <code> src</code> values in this section to match your files.
          </p>
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
                  <td>A negative result said the user was “doing great”.</td>
                  <td>It could be interpreted as assurance that no risk remained.</td>
                  <td>Use neutral, appropriately qualified language.</td>
                </tr>
                <tr>
                  <td>
                    The result addressed the mother, although the intended user was a clinician.
                  </td>
                  <td>The wording did not match the user's role or task.</td>
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
                  <td>Clarify what the result represents, within the model's limits.</td>
                </tr>
                <tr>
                  <td>Missing values were silently set to zero.</td>
                  <td>Incorrect inputs could appear to be valid observations.</td>
                  <td>
                    Flag missing or implausible data and request correction where appropriate.
                  </td>
                </tr>
                <tr>
                  <td>The form contained about two dozen fields.</td>
                  <td>The entry burden had not been assessed through user testing.</td>
                  <td>
                    Review field necessity and test a shorter form against model requirements.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="sm-callout">
            <span>THE DISTINCTION</span>
            <p>A better interface is not a validated medical tool.</p>
            <small>
              Neutral wording can reduce misleading reassurance, and input validation can expose
              data errors. Neither proves that the model predicts preeclampsia accurately.
            </small>
          </div>
        </Section>

        <Section
          id="evidence"
          eyebrow="07 / EVIDENCE & LIMITATIONS"
          title="Separating technical progress from clinical evidence."
          intro="The project documentation records a model accuracy figure of 98.75%. Without the evaluation details, that figure cannot establish how the model would perform in a clinical setting."
        >
          <div className="sm-metric-warning">
            <div className="sm-metric-number">98.75%</div>
            <div>
              <strong>Reported prototype accuracy</strong>
              <p>
                One documented evaluation; sample and evaluation details are insufficiently
                described.
              </p>
            </div>
          </div>
          <div className="sm-prose">
            <p>
              Accuracy alone can hide missed cases, especially when outcome classes are imbalanced.
              A credible evaluation needs a clearly defined outcome, a defensible data-splitting
              strategy, class distribution, and appropriate measures such as sensitivity,
              specificity, discrimination and calibration. Performance also needs to be examined on
              data independent of model development before claims about generalisation can be made.
            </p>
          </div>
          <div className="sm-limits">
            <article>
              <span>01</span>
              <div>
                <h3>Prediction timing</h3>
                <p>
                  The project materials refer to a prediction point around week eight, while the
                  discovery narrative discusses recognition later in pregnancy. The target and
                  timing need to be reconciled before claiming early prediction.
                </p>
              </div>
            </article>
            <article>
              <span>02</span>
              <div>
                <h3>Generalisation</h3>
                <p>
                  The reported accuracy does not establish performance on an independent population
                  of pregnant women in Kenyan antenatal clinics.
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
          <h3 className="sm-subheading">What would need to happen next?</h3>
          <div className="sm-next-steps">
            <p>
              <b>01</b> Define the outcome, prediction time and permissible inputs.
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

        <Section
          id="reflection"
          eyebrow="08 / REFLECTION"
          title="The interface is where a system's assumptions become visible."
          intro="SafeMom changed how I think about the relationship between product design, software and evidence."
        >
          <div className="sm-prose">
            <p>
              The initial challenge appeared to be early risk identification. As the work developed,
              the challenge became broader: how could a clinician-facing application present a
              model's output without creating false confidence, introducing avoidable data errors or
              disrupting decisions already being made in a clinical setting?
            </p>
            <p>
              The interface is not a decorative layer placed on top of a technical system. It is
              where the system's assumptions, limitations and capabilities become visible to the
              person using it. A model may return a classification, but the product still has to
              communicate what that classification means. A form may collect information, but the
              team must establish whether the fields are appropriate and whether users can complete
              them reliably.
            </p>
            <p>
              The project's value lies in combining technical implementation with critical review.
              SafeMom became a working prototype and helped identify weaknesses in the result
              language, data validation and assumptions about the intended workflow. It did not
              establish clinical accuracy, improved maternal outcomes or readiness for deployment.
            </p>
          </div>
          <h3 className="sm-subheading">What I would do differently</h3>
          <div className="sm-lessons">
            <article>
              <span>01</span>
              <div>
                <h3>Document discovery from day one.</h3>
                <p>
                  Record recruitment, participant characteristics, interview questions, consent
                  procedures and the analysis process so findings can be defended.
                </p>
              </div>
            </article>
            <article>
              <span>02</span>
              <div>
                <h3>Bring clinicians into the design cycle earlier.</h3>
                <p>
                  Observe intended users completing realistic tasks before settling the form,
                  terminology and result presentation.
                </p>
              </div>
            </article>
            <article>
              <span>03</span>
              <div>
                <h3>Resolve the prediction question first.</h3>
                <p>
                  Agree on the target, prediction time, inputs and evaluation strategy before making
                  claims about early prediction.
                </p>
              </div>
            </article>
            <article>
              <span>04</span>
              <div>
                <h3>Treat clinical language as part of safety.</h3>
                <p>
                  Review messages, warnings and explanations as carefully as model logic and data
                  handling.
                </p>
              </div>
            </article>
          </div>
        </Section>

        <footer className="sm-sources">
          <p className="sm-eyebrow">FURTHER READING</p>
          <h2>Sources & references</h2>
          <p className="sm-sources-intro">
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
              and preeclampsia. <em>Obstetrics &amp; Gynecology, 135</em>(6), e237–e260. Practice
              Bulletin No. 222.
            </Source>
            <Source href="https://doi.org/10.1002/uog.27490">
              Tiruneh, S. A., et al. (2024). Externally validated prediction models for
              pre-eclampsia: Systematic review and meta-analysis.{' '}
              <em>Ultrasound in Obstetrics &amp; Gynecology, 63</em>(5), 592–604.
            </Source>
            <Source href="https://www.bmj.com/content/385/bmj-2023-078378">
              Collins, G. S., et al. (2024). TRIPOD+AI statement: Updated guidance for reporting
              clinical prediction models that use regression or machine learning methods.{' '}
              <em>BMJ, 385</em>, e078378.
            </Source>
          </ol>
          <div className="sm-footer-end">
            <span>SAFEMOM / CASE STUDY</span>
          </div>
        </footer>
      </main>
    </div>
  );
}
