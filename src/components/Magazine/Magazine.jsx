// MagazineShowcase.jsx
import React, { useState } from 'react';
import './MagazineShowcase.css';

const Magazine = () => {
  const downloadUrl =
    'https://drive.google.com/file/d/1xX-1NFq3T21pt4pi_2JNgzKtgjmeeGNB/view?usp=drive_link';

  const stories = [
    {
      id: 1,
      page: 'Pg. 12',
      title: 'The Queen of Dust',
      summary:
        "Pauline Sheghu's rise in motorsport — from news anchor to champion racer.",
    },
    {
      id: 2,
      page: 'Pg. 20',
      title: 'More Than Life',
      summary:
        "Sharon's leap from engineering to ballet, defying expectation.",
    },
    {
      id: 3,
      page: 'Pg. 6',
      title: 'From Economist to Media Educator',
      summary:
        "How Director Peter Wakoli is shaping Kenya's next storytellers.",
    },
    {
      id: 4,
      page: 'Pg. 8',
      title: 'Madam Charity',
      summary:
        'One lady, two continents — a lifetime of audacity and grace.',
    },
    {
      id: 6,
      page: 'Pg. 16',
      title: 'Born at KIMC',
      summary:
        "Paul Nabiswa's journey from hopeful student to broadcast leader.",
    },
    {
      id: 7,
      page: 'Pg. 41',
      title: 'The Toxic Harvest',
      summary: "Why Kenya's farmers won't eat what they grow.",
    },
    {
      id: 8,
      page: 'Pg. 58',
      title: 'Street Lights',
      summary:
        "The informal runners who keep the city's promises after dark.",
    },
  ];

  // Accordion data
  const accordionData = [
    {
      id: 'tech',
      title: 'Technologies Used',
      content: (
        <ul>
          <li>
            <strong>Adobe InDesign</strong> — primary layout and typesetting
          </li>
          <li>
            <strong>Adobe Photoshop</strong> — image editing and colour correction
          </li>
          <li>
            <strong>Adobe Illustrator</strong> — vector graphics and infographics
          </li>
          <li>
            <strong>Google Fonts (Inter)</strong> — clean, readable sans‑serif
            for body text
          </li>
          <li>
            <strong>Modular 12‑column grid</strong> — consistent structure
            across spreads
          </li>
          <li>
            <strong>Style sheets & master pages</strong> — efficient global
            formatting
          </li>
        </ul>
      ),
    },
    {
      id: 'steps',
      title: 'Design Process (Interaction Design Foundation & Nielsen Norman)',
      content: (
        <ol>
          <li>
            <strong>Empathize</strong> — understood the theme ‘Becoming’ and the
            audience: postgraduate media students, educators, and general
            readers.
          </li>
          <li>
            <strong>Define</strong> — established core design principles: grid,
            typography, colour, and visual hierarchy.
          </li>
          <li>
            <strong>Ideate</strong> — sketched multiple layout concepts,
            experimented with typographic scales, and refined the cover design.
          </li>
          <li>
            <strong>Prototype</strong> — built master pages, applied paragraph
            and character styles, and placed all content iteratively.
          </li>
          <li>
            <strong>Test</strong> — reviewed spreads with editors, adjusted
            readability, checked colour contrast, and made final refinements
            before export.
          </li>
        </ol>
      ),
    },
    {
      id: 'challenges',
      title: 'Challenges Faced',
      content: (
        <ul>
          <li>
            <strong>Late submissions</strong> — compressed the production
            schedule, requiring rapid layout adjustments and last‑minute
            reflowing.
          </li>
          <li>
            <strong>Vague requirements</strong> — interpreted ambiguous
            instructions from writers and editors, often needing multiple
            revisions to align on tone and image placement.
          </li>
          <li>
            <strong>Managing 24+ stories</strong> — maintaining consistent
            visual rhythm and typographic hierarchy across 76 pages with diverse
            content types.
          </li>
          <li>
            <strong>Stakeholder coordination</strong> — balancing feedback from
            multiple lecturers, the editorial team, and the printing press.
          </li>
          <li>
            <strong>Technical constraints</strong> — dealing with InDesign file
            size, image resolution, and export settings for print production.
          </li>
          <li>
            <strong>Creativity vs. readability</strong> — ensuring that bold
            design choices never compromised legibility or clarity.
          </li>
        </ul>
      ),
    },
  ];

  // Accordion state
  const [openId, setOpenId] = useState(null);

  const toggleAccordion = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="magazine-showcase">
      <div className="container">
        {/* Header */}
        <header className="showcase-header">
          
          <h1 className="main-title">
            <span className="light">The</span> Trend
            <span className="issue">· 2026</span>
          </h1>
          <p className="subtitle">
            Kenya Institute of Mass Communication · Postgraduate Magazine
          </p>
        </header>

        {/* Cover image */}
        <a
          href={downloadUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="cover-mockup">
            <img
              src="/trend.jpg"
              alt="The Trend Magazine Cover 2026"
              className="cover-image"
            />
          </div>
        </a>

        {/* Introduction */}
        <section className="intro-section">
          <div className="intro-content">
            <span className="intro-label">About the Magazine</span>
            <h2 className="intro-title">
              <span className="light">The</span> Trend
              <span className="intro-year">· 2026</span>
            </h2>
            <p className="intro-text">
              <em>The Trend</em> is an annual magazine curated by the
              Postgraduate class of the Kenya Institute of Mass Communication.
              Each edition brings together the voices of emerging media
              practitioners, exploring stories that challenge, inspire, and
              provoke thought.
            </p>
            <p className="intro-text">
              For the 2026 issue, I was selected as the <strong>Lead Designer</strong>.
              I collected and edited stories from over <strong>20 writers</strong>,
              distilling their narratives into a cohesive 76-page publication.
            </p>
            <p className="intro-text">
              I drew inspiration from previous editions — particularly the 2020
              issue — for its bold use of contrast, typographic restraint, and
              emotional depth. The theme, <strong>Becoming</strong>, unites
              every story: from Pauline Sheghu's rise in motorsport to the quiet
              transformations of everyday people choosing to continuously evolve.
            </p>
            <div className="intro-meta">
              <span>76 pages</span>
              <span className="meta-dot">·</span>
              <span>24 stories</span>
              <span className="meta-dot">·</span>
              <span>Lead Designer</span>
            </div>
          </div>
        </section>

        {/* Design Guidelines */}
        <section className="guidelines">
          <h2>Design Guidelines</h2>
          <div className="guideline-grid">
            <div className="guideline-item">
              <span className="guideline-number">01</span>
              <h3>Grid & Rhythm</h3>
              <p>
                A modular 12‑column grid structures every spread. Margins are
                generous, and content breathes with consistent vertical rhythm.
              </p>
            </div>
            <div className="guideline-item">
              <span className="guideline-number">02</span>
              <h3>Typography-First</h3>
              <p>
                A restrained palette of two typefaces — a serif for headlines
                and a sans‑serif for body. Scale is used dramatically to create
                hierarchy.
              </p>
            </div>
            <div className="guideline-item">
              <span className="guideline-number">03</span>
              <h3>Contrast & Restraint</h3>
              <p>
                Black, white, and a single accent red. Everything else is
                texture and negative space. This palette amplifies the emotional
                weight of stories.
              </p>
            </div>
            <div className="guideline-item">
              <span className="guideline-number">04</span>
              <h3>Image as Narrative</h3>
              <p>
                Full‑bleed images open every feature. Portraits are cropped
                tight, landscapes breathe. Every visual is intentional.
              </p>
            </div>
            <div className="guideline-item">
              <span className="guideline-number">05</span>
              <h3>Accessible & Honest</h3>
              <p>
                No decoration without function. Every element — from pull‑quotes
                to captions — serves the story. The layout is clean, direct, and
                timeless.
              </p>
            </div>
          </div>
        </section>

        {/* Accordion Section: Process & Challenges */}
        <section className="process-section">
          <h2>Process & Challenges</h2>
          <p className="process-intro">
            A behind‑the‑scenes look at the tools, workflow, and obstacles
            encountered during the design of <em>The Trend</em> 2026.
          </p>
          <div className="accordion">
            {accordionData.map((item) => (
              <div key={item.id} className="accordion-item">
                <button
                  className="accordion-header"
                  onClick={() => toggleAccordion(item.id)}
                  aria-expanded={openId === item.id}
                >
                  <span className="accordion-title">{item.title}</span>
                  <span className="accordion-icon">
                    {openId === item.id ? '−' : '+'}
                  </span>
                </button>
                <div
                  className={`accordion-content ${
                    openId === item.id ? 'open' : ''
                  }`}
                >
                  {item.content}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Stories */}
        <section className="stories-section">
          <h2>Featured Stories</h2>
          <p className="stories-intro">
            A selection of narratives from the 2026 edition.
          </p>
          <div className="stories-grid">
            {stories.map((story) => (
              <article key={story.id} className="story-card">
                <span className="story-page">{story.page}</span>
                <h3 className="story-title">{story.title}</h3>
                <p className="story-summary">{story.summary}</p>
              </article>
            ))}
          </div>
        </section>

        {/* Download */}
        <div className="download-section">
          <a
            href={downloadUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="download-button"
          >
            ⬇ Download Full Magazine (PDF)
          </a>
          <p className="download-note">
            76 pages · 24 stories · Designed & laid out by Denish Awajo Otieno
          </p>
        </div>

        {/* Footer */}
        <footer className="showcase-footer">
          <p>
            <span className="dot">●</span> A publication of the Kenya Institute
            of Mass Communication
          </p>
          <p className="footer-credit">© 2026 · All rights reserved</p>
        </footer>
      </div>
    </div>
  );
};

export default Magazine;