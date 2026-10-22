import React from 'react';
import { FiArrowUpRight, FiArrowDown, FiArrowRight } from 'react-icons/fi';
import './Blog.css';
import blogImage from '/blog.png';
import classPhoto from '/pgd.jpg';

const LIVE_URL = 'https://pgdblog.netlify.app/';

const PALETTE = [
  { name: 'Charcoal black', hex: '#0B0B0B', role: 'Navigation, footer, dark surfaces' },
  { name: 'White', hex: '#FFFFFF', role: 'Main background, cards, text contrast' },
  { name: 'Light grey', hex: '#F5F5F5', role: 'Article pages, topic sections' },
  { name: 'Signal blue', hex: '#0A66C2', role: 'Actions, links, category labels' },
  { name: 'Medium grey', hex: '#777777', role: 'Metadata, dates, author names' },
];

const TYPE_SCALE = [
  {
    label: 'Hero headline',
    size: '28 to 36px',
    weight: '700',
    sample: 'Kibera MP Fined',
    style: 'hero',
  },
  {
    label: 'Page heading',
    size: '24 to 30px',
    weight: '500 to 600',
    sample: 'Recent Stories',
    style: 'heading',
  },
  {
    label: 'Article headline',
    size: '15 to 18px',
    weight: '600 to 700',
    sample: 'Mutai Escapes Ouster as Impeachment Bid Fails',
    style: 'article',
  },
  {
    label: 'Body text',
    size: '14 to 16px',
    weight: '400',
    sample: 'The opening paragraph introduces the main development and its context.',
    style: 'body',
  },
  {
    label: 'Metadata',
    size: '10 to 12px',
    weight: '400 to 500',
    sample: 'Ronny Choge · October 21, 2025 · 2 min read',
    style: 'meta',
  },
];

const BUILDING_BLOCKS = [
  {
    n: '01',
    title: 'Compact dark navigation',
    body: 'Slim header, logo left, links right. A dark bar separates navigation from content.',
  },
  {
    n: '02',
    title: 'Full-width hero story',
    body: 'Large photograph, dark overlay, white headline, author, and call to action. Carousel dots signal more.',
  },
  {
    n: '03',
    title: 'Four column story grid',
    body: 'Consistent cards with image, category, date, headline, and author. Thin borders keep it tidy.',
  },
  {
    n: '04',
    title: 'Topic navigation',
    body: 'Rectangular cards for Politics, Technology, Education, and Human Interest turn topics into navigation.',
  },
  {
    n: '05',
    title: 'About section',
    body: 'Two column layout pairs institutional copy with a visual block, breaking the grid repetition.',
  },
  {
    n: '06',
    title: 'Dark footer',
    body: 'Class information, navigation, and an email subscription form, separated from the copyright line.',
  },
];

const PRINCIPLES = [
  {
    name: 'Hierarchy',
    body: 'Hero headline first, then story headlines, then images, categories, and metadata.',
  },
  {
    name: 'Proximity',
    body: 'Each category, date, and headline sits close to its image so readers can group information.',
  },
  {
    name: 'Repetition',
    body: 'Every story card shares the same structure, so the page becomes predictable and easy to scan.',
  },
  {
    name: 'Contrast',
    body: 'White against charcoal separates structure from content. Blue separates actions from text.',
  },
  {
    name: 'Alignment',
    body: 'Consistent grid columns and headings create order. The large hero balances the denser grid below.',
  },
  {
    name: 'Whitespace',
    body: 'Generous spacing around sections and within article pages gives content room to breathe.',
  },
];

const ARTICLE_STAGES = [
  { n: '01', label: 'Category', sample: 'Category label', style: 'cat' },
  { n: '02', label: 'Headline', sample: 'Article headline with clear hierarchy', style: 'head' },
  {
    n: '03',
    label: 'Byline',
    sample: 'Ronny Choge · October 21, 2025 · 2 min read',
    style: 'meta',
  },
  { n: '04', label: 'Lead image', sample: '', style: 'image' },
  {
    n: '05',
    label: 'Body',
    sample:
      'Opening paragraph introduces the main development and its context. Subsequent paragraphs explain the details in a single, readable column.',
    style: 'body',
  },
  { n: '06', label: 'Next', sample: 'View all stories', style: 'cta' },
];

/* ==========================================================
   SHARED
   ========================================================== */

function Section({ id, number, label, title, intro, takeaway, children }) {
  return (
    <section id={id} className="pgd-section" aria-labelledby={`${id}-title`}>
      <div className="pgd-section-label">
        <span>{number}</span>
        {label}
      </div>
      <div className="pgd-section-content">
        <h2 id={`${id}-title`} className="pgd-h2">
          {title}
        </h2>
        {intro && <p className="pgd-lede">{intro}</p>}
        {takeaway && <p className="pgd-takeaway">{takeaway}</p>}
        {children}
      </div>
    </section>
  );
}

/* ==========================================================
   PAGE
   ========================================================== */

export default function Blog() {
  return (
    <main className="pgd">
      {/* ============================================================ */}
      {/* HERO                                                          */}
      {/* ============================================================ */}
      <header className="pgd-hero">
        <div className="pgd-hero-copy">
          <h1 className="pgd-hero-title">
            PGD Blog
            <span className="pgd-hero-period">.</span>
          </h1>
          <p className="pgd-hero-sub">Giving student journalism a voice beyond the classroom.</p>
          <p className="pgd-hero-desc">
            I designed and built a digital publishing platform where journalism students can share
            their news stories online and give their work the chance to reach readers beyond the
            classroom.
          </p>
          <div className="pgd-hero-actions">
            <a
              className="pgd-btn pgd-btn--primary"
              href={LIVE_URL}
              target="_blank"
              rel="noreferrer"
            >
              Explore the website
              <FiArrowUpRight size={14} aria-hidden="true" />
            </a>
            <a
              className="pgd-btn pgd-btn--ghost"
              href="#pgd-problem"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('pgd-problem')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Read the case study
              <FiArrowDown size={14} aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="pgd-hero-media">
          <div className="pgd-browser">
            <div className="pgd-browser-bar">
              <div className="pgd-dots">
                <i />
                <i />
                <i />
              </div>
              <div className="pgd-address">pgdblog.netlify.app</div>
              <span className="pgd-browser-more" aria-hidden="true">
                •••
              </span>
            </div>
            <div className="pgd-browser-screen">
              <img src={blogImage} alt="Screenshot of the PGD Blog homepage" loading="eager" />
              <div className="pgd-browser-fade" aria-hidden="true" />
            </div>
            <div className="pgd-browser-caption">A publishing space for emerging journalists</div>
          </div>
        </div>
      </header>

      {/* ============================================================ */}
      {/* META STRIP                                                    */}
      {/* ============================================================ */}
      <section className="pgd-meta" aria-label="Project overview">
        <div>
          <span>Role</span>
          <strong>UI/UX Designer & Developer</strong>
        </div>
        <div>
          <span>Type</span>
          <strong>Independent, student project</strong>
        </div>
        <div>
          <span>Deliverable</span>
          <strong>Designed and built website</strong>
        </div>
        <div>
          <span>Live</span>
          <strong>
            <a href={LIVE_URL} target="_blank" rel="noreferrer">
              pgdblog.netlify.app
            </a>
          </strong>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 01 / CONTEXT                                                  */}
      {/* ============================================================ */}
      <Section
        id="pgd-problem"
        number="01"
        label="Context"
        title="We were learning to write news. Where would our stories go?"
        intro="During our newswriting classesat The Kenya Institute of Mass Communication (KIMC), we produced story after story. The assignments helped us practise reporting and writing, but we did not have a dedicated place to showcase that work publicly."
      >
        <p>
          Once a story was submitted for class, its reach often stopped there. Students wanted a way
          to demonstrate their journalism skills to people outside the classroom. Potential editors,
          future employers, and readers who might care about the stories we were telling.
        </p>

        <figure className="pgd-figure">
          <img
            src={classPhoto}
            alt="Journalism classmates collaborating in a newsroom setting"
            loading="lazy"
          />
          <figcaption>
            The classmates this project was built for. Future journalists who needed a public home
            for their work.
          </figcaption>
        </figure>

        <p>
          I saw an opportunity to close that gap by designing and building a public-facing
          publishing platform for student journalism.
        </p>
      </Section>

      {/* ============================================================ */}
      {/* DESIGN CHALLENGE BAND                                         */}
      {/* ============================================================ */}
      <section className="pgd-band">
        <div className="pgd-band-inner">
          <h2 className="pgd-band-title">
            How might we help student journalists publish their work and reach an audience beyond
            the classroom?
          </h2>

          <div className="pgd-band-grid">
            <article>
              <span>01</span>
              <h3>Limited visibility</h3>
              <p>Student stories needed a home beyond a classroom submission.</p>
            </article>
            <article>
              <span>02</span>
              <h3>Skills were hard to showcase</h3>
              <p>Students needed a practical way to share real writing samples.</p>
            </article>
            <article>
              <span>03</span>
              <h3>No central destination</h3>
              <p>A shared platform could make stories easier to discover and pass along.</p>
            </article>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 02 / GOALS                                                    */}
      {/* ============================================================ */}
      <Section
        id="pgd-goals"
        number="02"
        label="Goals"
        title="Turn classroom assignments into public-facing work."
        intro="The goal was to make publishing a natural extension of the newswriting experience."
      >
        <div className="pgd-goal-grid">
          <article>
            <span>01</span>
            <h3>Enable publishing</h3>
            <p>Give students a way to log in and submit their stories.</p>
          </article>
          <article>
            <span>02</span>
            <h3>Increase discoverability</h3>
            <p>Make published stories accessible to readers beyond the course.</p>
          </article>
          <article>
            <span>03</span>
            <h3>Showcase talent</h3>
            <p>Help students build a collection of work they can share as writing samples.</p>
          </article>
        </div>
      </Section>

      {/* ============================================================ */}
      {/* 03 / USERS & NEEDS                                            */}
      {/* ============================================================ */}
      <Section
        id="pgd-users"
        number="03"
        label="Users"
        title="Two sides of the same story."
        intro="The platform needed to support the people creating the stories and the people coming to read them."
        takeaway="The interface had to serve both audiences without giving either one primacy."
      >
        <div className="pgd-user-grid">
          <article className="pgd-user-card">
            <div className="pgd-user-head">
              <span>01</span>
              <h3>The student journalist</h3>
            </div>
            <p className="pgd-user-summary">
              Wants their work to be seen, shared, and taken seriously.
            </p>
            <ul>
              <li>Publish completed news stories</li>
              <li>Show evidence of writing ability</li>
              <li>Share published work with others</li>
            </ul>
          </article>
          <article className="pgd-user-card">
            <div className="pgd-user-head">
              <span>02</span>
              <h3>The public reader</h3>
            </div>
            <p className="pgd-user-summary">
              Wants to discover and read stories from emerging journalists.
            </p>
            <ul>
              <li>Find stories in one place</li>
              <li>Read content comfortably online</li>
              <li>Share stories that interest them</li>
            </ul>
          </article>
        </div>

        <p className="pgd-note">
          These user needs are based on the project context and intended audience, rather than
          formal persona research.
        </p>
      </Section>

      {/* ============================================================ */}
      {/* 04 / APPROACH                                                 */}
      {/* ============================================================ */}
      <Section
        id="pgd-approach"
        number="04"
        label="Approach"
        title="Design around the two essential actions: publish and read."
        intro="I kept the product purpose focused. Help students contribute their work, then make that work available to a wider audience."
      >
        <div className="pgd-steps">
          <article>
            <span>01</span>
            <h3>Identify the gap</h3>
            <p>
              I started with a problem I had experienced firsthand. Our stories were being written,
              but we had no dedicated public space to showcase them.
            </p>
          </article>
          <article>
            <span>02</span>
            <h3>Define the experience</h3>
            <p>
              I shaped the concept around two main needs. Students submitting stories, and readers
              discovering published work.
            </p>
          </article>
          <article>
            <span>03</span>
            <h3>Design the interface</h3>
            <p>
              I designed the website as a shared destination for student contributions, with the
              content and its readability at the centre of the experience.
            </p>
          </article>
          <article>
            <span>04</span>
            <h3>Build and publish</h3>
            <p>
              I implemented the website and deployed it online, taking the project from a design
              idea to a live product.
            </p>
          </article>
        </div>
      </Section>

      {/* ============================================================ */}
      {/* 05 / SOLUTION                                                 */}
      {/* ============================================================ */}
      <Section
        id="pgd-solution"
        number="05"
        label="Solution"
        title="A digital home for student journalism."
        intro="I designed and built PGD Blog to bring student stories together in a public-facing online experience."
      >
        <div className="pgd-solution-grid">
          <article className="pgd-solution-card pgd-solution-card--dark">
            <span className="pgd-solution-num">01</span>
            <h3>Contribute</h3>
            <p>
              Students log in and submit completed news stories to the platform through a simple
              publishing flow.
            </p>
          </article>
          <article className="pgd-solution-card pgd-solution-card--light">
            <span className="pgd-solution-num">02</span>
            <h3>Discover</h3>
            <p>
              A reader-facing homepage brings student stories together in one destination, with a
              clear hierarchy that rewards scanning.
            </p>
          </article>
          <article className="pgd-solution-card pgd-solution-card--accent">
            <span className="pgd-solution-num">03</span>
            <h3>Share</h3>
            <p>
              Published stories become shareable writing samples that help students present their
              skills and interests to the world.
            </p>
          </article>
        </div>

        <p className="pgd-note">
          The three cards above describe the core experience, not a screenshot of the live product.
          The homepage, article page, and submission flow are visible at the live URL.
        </p>
      </Section>

      {/* ============================================================ */}
      {/* 06 / JOURNEY                                                  */}
      {/* ============================================================ */}
      <Section
        id="pgd-journey"
        number="06"
        label="Journey"
        title="From assignment to audience."
        intro="The intended journey connects student publishing with public readership."
      >
        <div className="pgd-journey">
          <div className="pgd-journey-row">
            <span className="pgd-journey-label">Writer</span>
            <div className="pgd-journey-steps">
              <span>Log in</span>
              <FiArrowRight aria-hidden="true" size={14} />
              <span>Submit story</span>
              <FiArrowRight aria-hidden="true" size={14} />
              <span>Publish</span>
              <FiArrowRight aria-hidden="true" size={14} />
              <span>Share</span>
            </div>
          </div>
          <div className="pgd-journey-row">
            <span className="pgd-journey-label">Reader</span>
            <div className="pgd-journey-steps">
              <span>Visit site</span>
              <FiArrowRight aria-hidden="true" size={14} />
              <span>Discover</span>
              <FiArrowRight aria-hidden="true" size={14} />
              <span>Read story</span>
              <FiArrowRight aria-hidden="true" size={14} />
              <span>Share</span>
            </div>
          </div>
        </div>

        <p className="pgd-note">
          Conceptual journey based on the intended product experience. The steps should be updated
          if the implemented flow differs.
        </p>
      </Section>

      {/* ============================================================ */}
      {/* OUTCOME BAND                                                  */}
      {/* ============================================================ */}
      <section className="pgd-band pgd-band--outcome">
        <div className="pgd-band-inner">
          <h2 className="pgd-band-title">A classroom need became a live digital product.</h2>
          <p className="pgd-band-lede">
            I took the project from identifying a real student need through interface design,
            development, and deployment. PGD Blog now has a public web address that represents the
            idea. Student journalism deserves a place to be seen.
          </p>

          <div className="pgd-band-grid">
            <article>
              <span>01</span>
              <h3>Public destination</h3>
              <p>A live publishing platform with its own web address.</p>
            </article>
            <article>
              <span>02</span>
              <h3>Two audiences</h3>
              <p>Writers submitting work, readers discovering it.</p>
            </article>
            <article>
              <span>03</span>
              <h3>End to end</h3>
              <p>Design, build, and deployment owned by one person.</p>
            </article>
          </div>

          <p className="pgd-band-note">
            These describe the project scope, not measured user or business impact. No usage metrics
            are claimed here.
          </p>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 07 / NEXT STEPS                                               */}
      {/* ============================================================ */}
      <Section
        id="pgd-next"
        number="07"
        label="Next"
        title="Where I would take it next."
        intro="With more time, I would validate the experience with students and readers, then prioritise improvements based on what they need most."
      >
        <div className="pgd-next-grid">
          <article>
            <span>01</span>
            <h3>Author profiles</h3>
            <p>
              Collect each writer's stories in one place, creating a more useful public portfolio.
            </p>
          </article>
          <article>
            <span>02</span>
            <h3>Editorial workflow</h3>
            <p>Explore drafts, editing, and review states to support responsible publication.</p>
          </article>
          <article>
            <span>03</span>
            <h3>Responsive usability</h3>
            <p>Test reading and submission tasks across mobile, tablet, and desktop screens.</p>
          </article>
          <article>
            <span>04</span>
            <h3>Measure engagement</h3>
            <p>
              Track submissions, article views, sharing, and feedback to evaluate whether the
              platform is working.
            </p>
          </article>
        </div>
      </Section>

      {/* ============================================================ */}
      {/* 08 / REFLECTION                                               */}
      {/* ============================================================ */}
      <Section
        id="pgd-reflection"
        number="08"
        label="Reflection"
        title="Good design starts by noticing what people are missing."
        intro="PGD Blog began with a familiar experience. Writing stories for class and wondering how they could reach people beyond it."
        takeaway="Everyday frustrations are opportunities to create something useful, from the first design decision to a deployed website."
      >
        <p>
          The project taught me to look at common problems as opportunities to create something
          useful, and to take responsibility for the full journey from the first design decision to
          a working, deployed website.
        </p>

        <a className="pgd-btn pgd-btn--primary" href={LIVE_URL} target="_blank" rel="noreferrer">
          Explore PGD Blog
          <FiArrowUpRight size={14} aria-hidden="true" />
        </a>
      </Section>

      {/* ============================================================ */}
      {/* 09 / DESIGN SYSTEM                                            */}
      {/* ============================================================ */}
      <section className="pgd-ds">
        <div className="pgd-ds-inner">
          <div className="pgd-section-label">
            <span>09</span>
            Design system
          </div>

          <div className="pgd-ds-content">
            <h2 className="pgd-h2">Restrained editorial design, built for reading.</h2>
            <p className="pgd-lede">
              The PGD Blog leans into a digital-newspaper feel. A black navigation bar, a white
              reading surface, compact sans-serif typography, a single functional blue accent, and
              photography that carries the visual weight. It is closer to a publication than a
              conventional blog.
            </p>

            {/* Palette */}
            <div className="pgd-ds-block">
              <div className="pgd-ds-label">
                <span>01</span>
                Colour palette
              </div>
              <div className="pgd-ds-body">
                <h3 className="pgd-h3">Monochromatic surfaces, one functional accent.</h3>
                <p>
                  Neutral tones dominate the interface, with blue reserved for actions, links, and
                  category labels. The small multicoloured logo is the only other source of colour,
                  and photography supplies the rest.
                </p>
                <div className="pgd-swatches">
                  {PALETTE.map((sw) => (
                    <article key={sw.hex} className="pgd-swatch">
                      <span
                        className="pgd-swatch-chip"
                        style={{ background: sw.hex }}
                        aria-hidden="true"
                      />
                      <div>
                        <strong>{sw.name}</strong>
                        <code>{sw.hex}</code>
                        <p>{sw.role}</p>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </div>

            {/* Type */}
            <div className="pgd-ds-block">
              <div className="pgd-ds-label">
                <span>02</span>
                Typography
              </div>
              <div className="pgd-ds-body">
                <h3 className="pgd-h3">One clean sans-serif, weighted for hierarchy.</h3>
                <p>
                  The interface uses a single neutral sans-serif throughout. Hierarchy comes from
                  size and weight rather than from font changes. A heavier headline weight for
                  stories, regular weight for body copy.
                </p>
                <div className="pgd-type-scale">
                  {TYPE_SCALE.map((t) => (
                    <div key={t.label} className={`pgd-type-row pgd-type-row--${t.style}`}>
                      <span className="pgd-type-label">
                        {t.label} · {t.size} · {t.weight}
                      </span>
                      <span className="pgd-type-sample">{t.sample}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Layout */}
            <div className="pgd-ds-block">
              <div className="pgd-ds-label">
                <span>03</span>
                Layout
              </div>
              <div className="pgd-ds-body">
                <h3 className="pgd-h3">Six building blocks that structure the homepage.</h3>
                <p>
                  Each section has a clear job. Navigate, feature, browse, classify, contextualise,
                  and retain. The homepage optimises for browsing. The article page optimises for
                  reading.
                </p>
                <div className="pgd-blocks">
                  {BUILDING_BLOCKS.map((b) => (
                    <article key={b.n}>
                      <span>{b.n}</span>
                      <h4>{b.title}</h4>
                      <p>{b.body}</p>
                    </article>
                  ))}
                </div>
              </div>
            </div>

            {/* Principles */}
            <div className="pgd-ds-block">
              <div className="pgd-ds-label">
                <span>04</span>
                Principles
              </div>
              <div className="pgd-ds-body">
                <h3 className="pgd-h3">Why it reads as a publication.</h3>
                <div className="pgd-principles">
                  {PRINCIPLES.map((p) => (
                    <article key={p.name}>
                      <h4>{p.name}</h4>
                      <p>{p.body}</p>
                    </article>
                  ))}
                </div>
              </div>
            </div>

            {/* Article pattern */}
            <div className="pgd-ds-block">
              <div className="pgd-ds-label">
                <span>05</span>
                Article page
              </div>
              <div className="pgd-ds-body">
                <h3 className="pgd-h3">The homepage browses. The article page reads.</h3>
                <p>
                  The article page reuses the same visual language but changes the composition. A
                  narrow central reading column, a prominent lead photograph, and generous vertical
                  spacing over a light grey background.
                </p>
                <div className="pgd-stages">
                  {ARTICLE_STAGES.map((s) => (
                    <div key={s.n} className="pgd-stage">
                      <span className="pgd-stage-num">{s.n}</span>
                      <span className="pgd-stage-label">{s.label}</span>
                      {s.style === 'image' ? (
                        <div className="pgd-stage-image" aria-hidden="true" />
                      ) : (
                        <span className={`pgd-stage-sample pgd-stage-sample--${s.style}`}>
                          {s.sample}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <p className="pgd-note">
              Colour and type values are approximate, based on the live implementation. They are a
              starting point for the design system, not measured CSS values.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* FOOTER                                                        */}
      {/* ============================================================ */}
      <footer className="pgd-footer">
        <span>PGD Blog case study</span>
        <a
          href="#top"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        >
          Back to top
        </a>
      </footer>
    </main>
  );
}
