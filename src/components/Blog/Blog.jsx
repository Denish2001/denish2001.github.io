import React from 'react';
import './Blog.css';
import blogImage from '/blog.png';

export default function Blog() {
  const liveUrl = 'https://pgdblog.netlify.app/';

  return (
    <main className="pgd-case-study">
      <header className="pgd-hero">
        <div className="pgd-hero-copy">
          <h1>
            PGD Blog<span className="pgd-title-period">.</span>
          </h1>
          <p className="pgd-hero-subtitle">
            Giving student journalism a voice beyond the classroom.
          </p>
          <p className="pgd-hero-description">
            I designed and built a digital publishing platform where journalism students can share
            their news stories online and give their work the chance to reach readers beyond the
            classroom.
          </p>
          <div className="pgd-hero-actions">
            <a
              className="pgd-button pgd-button-dark"
              href={liveUrl}
              target="_blank"
              rel="noreferrer"
            >
              Explore the website <span aria-hidden="true">↗</span>
            </a>
            <a
              className="pgd-text-link"
              href="#pgd-problem"
              onClick={(event) => {
                event.preventDefault();
                document.getElementById('pgd-problem')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Read the case study <span aria-hidden="true">↓</span>
            </a>
          </div>
        </div>

        <div className="pgd-browser" aria-label="Preview of the PGD Blog website">
          <div className="pgd-browser-bar">
            <div className="pgd-window-dots">
              <i />
              <i />
              <i />
            </div>
            <div className="pgd-address">pgdblog.netlify.app</div>
            <span className="pgd-browser-menu" aria-hidden="true">
              •••
            </span>
          </div>

          <div className="pgd-screenshot-viewport">
            <img
              src={blogImage}
              alt="Screenshot of the PGD Blog homepage"
              className="pgd-screenshot"
              loading="eager"
            />
            <div className="pgd-screenshot-fade" aria-hidden="true" />
          </div>

          <div className="pgd-browser-caption">A publishing space for emerging journalists</div>
        </div>
      </header>

      <section className="pgd-meta-strip" aria-label="Project overview">
        <div>
          <span className="pgd-meta-label">MY ROLE</span>
          <strong>UI/UX Designer & Developer</strong>
        </div>
        <div>
          <span className="pgd-meta-label">PROJECT TYPE</span>
          <strong>Independent / Student project</strong>
        </div>
        <div>
          <span className="pgd-meta-label">DELIVERABLE</span>
          <strong>Designed and built website</strong>
        </div>
        <div>
          <span className="pgd-meta-label">LIVE PROJECT</span>
          <strong>
            <a href={liveUrl} target="_blank" rel="noreferrer">
              PGD Blog ↗
            </a>
          </strong>
        </div>
      </section>

      <section className="pgd-section pgd-intro-grid" id="pgd-problem">
        <div className="pgd-section-label">
          <span>01</span> THE CONTEXT
        </div>
        <div className="pgd-section-content">
          <h2>
            We were learning to write news. <em>Where would our stories go?</em>
          </h2>
          <p className="pgd-lead">
            During our newswriting classes, we produced story after story. The assignments helped us
            practise reporting and writing, but we did not have a dedicated place to showcase that
            work publicly.
          </p>
          <p>
            Once a story was submitted for class, its reach often stopped there. Students wanted a
            way to demonstrate their journalism skills to people outside the classroom—potential
            editors, future employers, and readers who might care about the stories we were telling.
          </p>
          <p>
            I saw an opportunity to close that gap by designing and building a public-facing
            publishing platform for student journalism.
          </p>
        </div>
      </section>

      <section className="pgd-problem-band">
        <div className="pgd-problem-band-heading">
          <p className="pgd-eyebrow">THE DESIGN CHALLENGE</p>
          <h2>
            How might we help student journalists publish their work and reach an audience beyond
            the classroom?
          </h2>
        </div>
        <div className="pgd-problem-points">
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
      </section>

      <section className="pgd-section pgd-intro-grid">
        <div className="pgd-section-label">
          <span>02</span> PROJECT GOALS
        </div>
        <div className="pgd-section-content">
          <h2>Turn classroom assignments into public-facing work.</h2>
          <p className="pgd-lead">
            The goal was to make publishing a natural extension of the newswriting experience.
          </p>
          <div className="pgd-goal-grid">
            <article>
              <span className="pgd-goal-icon">↗</span>
              <h3>Enable publishing</h3>
              <p>Give students a way to log in and submit their stories.</p>
            </article>
            <article>
              <span className="pgd-goal-icon">◎</span>
              <h3>Increase discoverability</h3>
              <p>Make published stories accessible to readers beyond the course.</p>
            </article>
            <article>
              <span className="pgd-goal-icon">✳</span>
              <h3>Showcase talent</h3>
              <p>Help students build a collection of work they can share as writing samples.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="pgd-section pgd-tinted-section">
        <div className="pgd-section-label">
          <span>03</span> USERS & NEEDS
        </div>
        <div className="pgd-section-content">
          <h2>Two sides of the same story.</h2>
          <p className="pgd-lead">
            The platform needed to support the people creating the stories and the people coming to
            read them.
          </p>
          <div className="pgd-user-grid">
            <article className="pgd-user-card">
              <div className="pgd-user-number">USER 01 / CONTRIBUTOR</div>
              <div className="pgd-user-symbol" aria-hidden="true">
                ✎
              </div>
              <h3>The student journalist</h3>
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
              <div className="pgd-user-number">USER 02 / READER</div>
              <div className="pgd-user-symbol" aria-hidden="true">
                ⌕
              </div>
              <h3>The public reader</h3>
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
          <p className="pgd-small-note">
            These user needs are based on the project context and intended audience, rather than
            formal persona research.
          </p>
        </div>
      </section>

      <section className="pgd-section pgd-intro-grid">
        <div className="pgd-section-label">
          <span>04</span> DESIGN APPROACH
        </div>
        <div className="pgd-section-content">
          <h2>Design around the two essential actions: publish and read.</h2>
          <p className="pgd-lead">
            I kept the product purpose focused: help students contribute their work, then make that
            work available to a wider audience.
          </p>
          <div className="pgd-process-list">
            <article>
              <span className="pgd-process-index">01</span>
              <div>
                <h3>Identify the gap</h3>
                <p>
                  I started with a problem I had experienced firsthand: our stories were being
                  written, but we had no dedicated public space to showcase them.
                </p>
              </div>
            </article>
            <article>
              <span className="pgd-process-index">02</span>
              <div>
                <h3>Define the core experience</h3>
                <p>
                  I shaped the concept around two main needs—students submitting stories and readers
                  discovering published work.
                </p>
              </div>
            </article>
            <article>
              <span className="pgd-process-index">03</span>
              <div>
                <h3>Design the interface</h3>
                <p>
                  I designed the website as a shared destination for student contributions, with the
                  content and its readability at the centre of the experience.
                </p>
              </div>
            </article>
            <article>
              <span className="pgd-process-index">04</span>
              <div>
                <h3>Build and publish</h3>
                <p>
                  I implemented the website and deployed it online, taking the project from a design
                  idea to a live product.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="pgd-feature-section">
        <div className="pgd-feature-header">
          <div className="pgd-section-label">
            <span>05</span> THE SOLUTION
          </div>
          <div>
            <h2>A digital home for student journalism.</h2>
            <p>
              I designed and built PGD Blog to bring student stories together in a public-facing
              online experience.
            </p>
          </div>
        </div>
        <div className="pgd-feature-grid">
          <article className="pgd-feature-card pgd-feature-card-dark">
            <span className="pgd-feature-count">01 / CONTRIBUTE</span>
            <div className="pgd-feature-illustration pgd-login-illustration">
              <div className="pgd-mini-window">
                <div className="pgd-mini-brand">
                  PGD BLOG<span>.</span>
                </div>
                <div className="pgd-mini-line pgd-mini-line-short" />
                <div className="pgd-mini-field">Email address</div>
                <div className="pgd-mini-field">
                  Password <span>••••••</span>
                </div>
                <div className="pgd-mini-submit">
                  Log in <span>→</span>
                </div>
              </div>
            </div>
            <h3>A route for student contributions</h3>
            <p>
              The publishing concept gives students a login-based entry point to contribute stories
              to the platform.
            </p>
          </article>
          <article className="pgd-feature-card pgd-feature-card-light">
            <span className="pgd-feature-count">02 / DISCOVER</span>
            <div className="pgd-feature-illustration pgd-stories-illustration">
              <div className="pgd-story-sheet">
                <div className="pgd-story-topline">
                  LATEST STORIES <span>VIEW ALL ↗</span>
                </div>
                <div className="pgd-story-row">
                  <i />
                  <div>
                    <b />
                    <small />
                  </div>
                </div>
                <div className="pgd-story-row">
                  <i />
                  <div>
                    <b />
                    <small />
                  </div>
                </div>
                <div className="pgd-story-row">
                  <i />
                  <div>
                    <b />
                    <small />
                  </div>
                </div>
              </div>
            </div>
            <h3>A public space to read</h3>
            <p>
              The reader-facing experience brings student stories into one destination that people
              can visit from beyond the classroom.
            </p>
          </article>
          <article className="pgd-feature-card pgd-feature-card-accent">
            <span className="pgd-feature-count">03 / SHARE</span>
            <div className="pgd-feature-illustration pgd-share-illustration">
              <div className="pgd-share-card">
                <span>STUDENT STORY</span>
                <strong>A story can travel further.</strong>
                <div>pgdblog.netlify.app ↗</div>
              </div>
              <div className="pgd-share-orbit">↗</div>
            </div>
            <h3>Work worth sharing</h3>
            <p>
              Published stories can become shareable writing samples that help students present
              their skills and interests.
            </p>
          </article>
        </div>
        <p className="pgd-small-note pgd-feature-note">
          The mini interface illustrations are conceptual visualisations for this case study, not
          screenshots of the live product.
        </p>
      </section>

      <section className="pgd-section pgd-intro-grid">
        <div className="pgd-section-label">
          <span>06</span> USER JOURNEY
        </div>
        <div className="pgd-section-content">
          <h2>From assignment to audience.</h2>
          <p className="pgd-lead">
            The intended journey connects student publishing with public readership.
          </p>
          <div className="pgd-journey">
            <div className="pgd-journey-lane">
              <span className="pgd-journey-label">WRITER</span>
              <div className="pgd-journey-steps">
                <span>Log in</span>
                <b>→</b>
                <span>Submit story</span>
                <b>→</b>
                <span>Publish</span>
                <b>→</b>
                <span>Share</span>
              </div>
            </div>
            <div className="pgd-journey-lane">
              <span className="pgd-journey-label">READER</span>
              <div className="pgd-journey-steps">
                <span>Visit site</span>
                <b>→</b>
                <span>Discover</span>
                <b>→</b>
                <span>Read story</span>
                <b>→</b>
                <span>Share</span>
              </div>
            </div>
          </div>
          <p className="pgd-small-note">
            Conceptual journey based on the intended product experience. Update the steps if the
            implemented flow differs.
          </p>
        </div>
      </section>

      <section className="pgd-outcome-band">
        <p className="pgd-eyebrow">07 / OUTCOME</p>
        <h2>A classroom need became a live digital product.</h2>
        <p>
          I took the project from identifying a real student need through interface design,
          development, and deployment. PGD Blog now has a public web address that represents the
          idea: student journalism deserves a place to be seen.
        </p>
        <div className="pgd-outcome-stats">
          <div>
            <strong>01</strong>
            <span>Public publishing destination</span>
          </div>
          <div>
            <strong>02</strong>
            <span>Core audiences: writers and readers</span>
          </div>
          <div>
            <strong>End-to-end</strong>
            <span>Design, build, and deployment</span>
          </div>
        </div>
        <p className="pgd-small-note">
          These describe the project scope, not measured user or business impact. No usage metrics
          are claimed here.
        </p>
      </section>

      <section className="pgd-section pgd-intro-grid">
        <div className="pgd-section-label">
          <span>08</span> NEXT STEPS
        </div>
        <div className="pgd-section-content">
          <h2>Where I would take it next.</h2>
          <p className="pgd-lead">
            With more time, I would validate the experience with students and readers, then
            prioritise improvements based on what they need most.
          </p>
          <div className="pgd-next-grid">
            <article>
              <span>01</span>
              <h3>Author profiles</h3>
              <p>
                Collect each writer’s stories in one place, creating a more useful public portfolio.
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
        </div>
      </section>

      <section className="pgd-reflection">
        <p className="pgd-eyebrow">09 / REFLECTION</p>
        <h2>Good design starts by noticing what people are missing.</h2>
        <p>
          PGD Blog began with a familiar experience: writing stories for class and wondering how
          they could reach people beyond it. The project taught me to look at everyday frustrations
          as opportunities to create something useful—and to take responsibility for the full
          journey from the first design decision to a working, deployed website.
        </p>
        <a className="pgd-button pgd-button-light" href={liveUrl} target="_blank" rel="noreferrer">
          Explore PGD Blog <span aria-hidden="true">↗</span>
        </a>
      </section>

      {/* ───────────────────────────────────────────────────────────── */}
      {/* 10 / DESIGN SYSTEM — new section                               */}
      {/* ───────────────────────────────────────────────────────────── */}
      <section className="pgd-design-system">
        <div className="pgd-design-system-header">
          <div className="pgd-section-label">
            <span>10</span> DESIGN SYSTEM
          </div>
          <div>
            <h2>Restrained editorial design, built for reading.</h2>
            <p className="pgd-lead">
              The PGD Blog leans into a digital-newspaper feel: a black navigation bar, a white
              reading surface, compact sans-serif typography, a single functional blue accent, and
              photography that carries the visual weight. It is closer to a publication than a
              conventional blog.
            </p>
            <p>
              Its strength is consistency. The interface supplies order so the stories can carry the
              personality.
            </p>
          </div>
        </div>

        {/* Colour palette */}
        <div className="pgd-ds-block">
          <div className="pgd-ds-block-label">
            <span>01</span> COLOUR PALETTE
          </div>
          <div className="pgd-ds-block-body">
            <h3>Monochromatic surfaces, one functional accent.</h3>
            <p>
              Neutral tones dominate the interface, with blue reserved for actions, links, and
              category labels. The small multicoloured logo is the only other source of colour, and
              photography supplies the rest.
            </p>
            <div className="pgd-swatch-grid">
              <article className="pgd-swatch">
                <span className="pgd-swatch-chip" style={{ background: '#1B1B1B' }} />
                <div>
                  <strong>Charcoal black</strong>
                  <code>#1B1B1B</code>
                  <p>Navigation, footer, dark surfaces</p>
                </div>
              </article>
              <article className="pgd-swatch">
                <span className="pgd-swatch-chip" style={{ background: '#FFFFFF' }} />
                <div>
                  <strong>White</strong>
                  <code>#FFFFFF</code>
                  <p>Main background, cards, text contrast</p>
                </div>
              </article>
              <article className="pgd-swatch">
                <span className="pgd-swatch-chip" style={{ background: '#F5F5F5' }} />
                <div>
                  <strong>Light grey</strong>
                  <code>#F5F5F5</code>
                  <p>Article pages, topic sections, subtle separation</p>
                </div>
              </article>
              <article className="pgd-swatch">
                <span className="pgd-swatch-chip" style={{ background: '#0069D9' }} />
                <div>
                  <strong>Bright blue</strong>
                  <code>#0069D9</code>
                  <p>Subscribe buttons, links, category labels</p>
                </div>
              </article>
              <article className="pgd-swatch">
                <span className="pgd-swatch-chip" style={{ background: '#777777' }} />
                <div>
                  <strong>Medium grey</strong>
                  <code>#777777</code>
                  <p>Metadata, dates, author names, footer copy</p>
                </div>
              </article>
            </div>
          </div>
        </div>

        {/* Typography */}
        <div className="pgd-ds-block">
          <div className="pgd-ds-block-label">
            <span>02</span> TYPOGRAPHY
          </div>
          <div className="pgd-ds-block-body">
            <h3>One clean sans-serif, weighted for hierarchy.</h3>
            <p>
              The interface uses a single neutral sans-serif throughout (Inter, Arial, or a close
              equivalent). Hierarchy comes from size and weight rather than from font changes — a
              heavier headline weight for stories, and regular weight for body copy.
            </p>

            <div className="pgd-type-scale">
              <div className="pgd-type-row pgd-type-hero">
                <span className="pgd-type-meta">HERO HEADLINE · 28–36px · 700</span>
                <span className="pgd-type-sample">Kibera MP Fined</span>
              </div>
              <div className="pgd-type-row pgd-type-heading">
                <span className="pgd-type-meta">PAGE HEADING · 24–30px · 500–600</span>
                <span className="pgd-type-sample">Recent Stories</span>
              </div>
              <div className="pgd-type-row pgd-type-article">
                <span className="pgd-type-meta">ARTICLE HEADLINE · 15–18px · 600–700</span>
                <span className="pgd-type-sample">
                  Mutai Escapes Ouster as Impeachment Bid Fails
                </span>
              </div>
              <div className="pgd-type-row pgd-type-body">
                <span className="pgd-type-meta">BODY TEXT · 14–16px · 400</span>
                <span className="pgd-type-sample">
                  The opening paragraph introduces the main development and its context.
                </span>
              </div>
              <div className="pgd-type-row pgd-type-meta-row">
                <span className="pgd-type-meta">METADATA · 10–12px · 400–500</span>
                <span className="pgd-type-sample">Ronny Choge · October 21, 2025 · 2 min read</span>
              </div>
            </div>
          </div>
        </div>

        {/* Layout & composition */}
        <div className="pgd-ds-block">
          <div className="pgd-ds-block-label">
            <span>03</span> LAYOUT & COMPOSITION
          </div>
          <div className="pgd-ds-block-body">
            <h3>Six building blocks that structure the homepage.</h3>
            <p>
              Each section has a clear job: navigate, feature, browse, classify, contextualise, and
              retain. The homepage optimises for browsing; the article page optimises for reading.
            </p>
            <div className="pgd-layout-grid">
              <article>
                <span>01</span>
                <h4>Compact dark navigation</h4>
                <p>
                  Slim header, logo left, links right. A dark bar separates navigation from content.
                </p>
              </article>
              <article>
                <span>02</span>
                <h4>Full-width hero story</h4>
                <p>
                  Large photograph, dark overlay, white headline, author, and call-to-action.
                  Carousel dots signal more.
                </p>
              </article>
              <article>
                <span>03</span>
                <h4>Four-column story grid</h4>
                <p>
                  Consistent cards with image, category, date, headline, and author. Thin borders
                  keep it tidy.
                </p>
              </article>
              <article>
                <span>04</span>
                <h4>Topic navigation</h4>
                <p>
                  Rectangular cards for Politics, Technology, Education, and Human Interest turn
                  topics into navigation.
                </p>
              </article>
              <article>
                <span>05</span>
                <h4>About section</h4>
                <p>
                  Two-column layout pairs institutional copy with a visual block, breaking the grid
                  repetition.
                </p>
              </article>
              <article>
                <span>06</span>
                <h4>Dark footer</h4>
                <p>
                  Class information, navigation, and an email subscription form, separated from the
                  copyright line.
                </p>
              </article>
            </div>
          </div>
        </div>

        {/* Cards, borders, shapes */}
        <div className="pgd-ds-block">
          <div className="pgd-ds-block-label">
            <span>04</span> CARDS, BORDERS & SHAPES
          </div>
          <div className="pgd-ds-block-body">
            <h3>Simple geometry over decoration.</h3>
            <p>
              Structure comes from thin lines, consistent corners, and spacing — not shadows or
              ornament.
            </p>
            <ul className="pgd-ds-list">
              <li>
                <strong>Corners</strong> — slightly rounded cards and image containers.
              </li>
              <li>
                <strong>Borders</strong> — thin pale-grey outlines instead of heavy shadows.
              </li>
              <li>
                <strong>Buttons</strong> — rectangular with modest rounding; black for about, blue
                for subscriptions.
              </li>
              <li>
                <strong>Images</strong> — consistent card dimensions and cropped thumbnails.
              </li>
              <li>
                <strong>Dividers</strong> — subtle horizontal rules between sections and metadata.
              </li>
              <li>
                <strong>Icons</strong> — small and functional rather than decorative.
              </li>
            </ul>
          </div>
        </div>

        {/* Principles at work */}
        <div className="pgd-ds-block">
          <div className="pgd-ds-block-label">
            <span>05</span> PRINCIPLES AT WORK
          </div>
          <div className="pgd-ds-block-body">
            <h3>Why it reads as a publication.</h3>
            <div className="pgd-principles-grid">
              <article>
                <span>Hierarchy</span>
                <p>
                  Hero headline first, then story headlines, then images, categories, and metadata.
                </p>
              </article>
              <article>
                <span>Proximity</span>
                <p>
                  Each category, date, and headline sits close to its image so readers can group
                  information.
                </p>
              </article>
              <article>
                <span>Repetition</span>
                <p>
                  Every story card shares the same structure, so the page becomes predictable and
                  easy to scan.
                </p>
              </article>
              <article>
                <span>Contrast</span>
                <p>
                  White against charcoal separates structure from content; blue separates actions
                  from text.
                </p>
              </article>
              <article>
                <span>Alignment</span>
                <p>
                  Consistent grid columns and headings create order; the large hero balances the
                  denser grid below.
                </p>
              </article>
              <article>
                <span>Whitespace</span>
                <p>
                  Generous spacing around sections and within article pages gives content room to
                  breathe.
                </p>
              </article>
            </div>
          </div>
        </div>

        {/* Article-page pattern */}
        <div className="pgd-ds-block pgd-ds-block-last">
          <div className="pgd-ds-block-label">
            <span>06</span> ARTICLE-PAGE PATTERN
          </div>
          <div className="pgd-ds-block-body">
            <h3>The homepage browses. The article page reads.</h3>
            <p>
              The article page reuses the same visual language but changes the composition: a narrow
              central reading column, a prominent lead photograph, and generous vertical spacing
              over a light-grey background.
            </p>
            <div className="pgd-article-pattern">
              <div className="pgd-article-stage">
                <span className="pgd-article-stage-meta">STAGE 01</span>
                <div className="pgd-article-stage-sample">Category label</div>
              </div>
              <div className="pgd-article-stage">
                <span className="pgd-article-stage-meta">STAGE 02</span>
                <div className="pgd-article-stage-sample pgd-article-heading-sample">
                  Article headline with clear hierarchy
                </div>
              </div>
              <div className="pgd-article-stage">
                <span className="pgd-article-stage-meta">STAGE 03</span>
                <div className="pgd-article-stage-sample pgd-article-meta-sample">
                  Ronny Choge · October 21, 2025 · 2 min read
                </div>
              </div>
              <div className="pgd-article-stage">
                <span className="pgd-article-stage-meta">STAGE 04</span>
                <div
                  className="pgd-article-stage-sample pgd-article-image-sample"
                  aria-hidden="true"
                />
              </div>
              <div className="pgd-article-stage">
                <span className="pgd-article-stage-meta">STAGE 05</span>
                <div className="pgd-article-stage-sample pgd-article-body-sample">
                  Opening paragraph introduces the main development and its context. Subsequent
                  paragraphs explain the details in a single, readable column.
                </div>
              </div>
              <div className="pgd-article-stage">
                <span className="pgd-article-stage-meta">STAGE 06</span>
                <div className="pgd-article-stage-sample pgd-article-cta-sample">
                  View all stories ↗
                </div>
              </div>
            </div>
          </div>
        </div>

        <p className="pgd-small-note pgd-ds-note">
          Colour and type values are approximate, based on the live implementation. They are a
          starting point for the design system, not measured CSS values.
        </p>
      </section>

      <footer className="pgd-case-footer">
        <span>PGD BLOG / CASE STUDY</span>
        <a
          href="#top"
          onClick={(event) => {
            event.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        >
          Back to top ↑
        </a>
      </footer>
    </main>
  );
}
