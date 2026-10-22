// Magazine.jsx
import React, { useState } from 'react';
import { FiDownload, FiPlus, FiMinus } from 'react-icons/fi';
import './MagazineShowcase.css';

const DOWNLOAD_URL =
  'https://drive.google.com/file/d/1xX-1NFq3T21pt4pi_2JNgzKtgjmeeGNB/view?usp=drive_link';

const STORIES = [
  {
    id: 1,
    page: '12',
    title: 'The Queen of Dust',
    summary: "Pauline Sheghu's rise in motorsport, from news anchor to champion racer.",
  },
  {
    id: 2,
    page: '20',
    title: 'More Than Life',
    summary: "Sharon's leap from engineering to ballet, defying expectation.",
  },
  {
    id: 3,
    page: '06',
    title: 'From Economist to Media Educator',
    summary: "How Director Peter Wakoli is shaping Kenya's next storytellers.",
  },
  {
    id: 4,
    page: '08',
    title: 'Madam Charity',
    summary: 'One lady, two continents, a lifetime of audacity and grace.',
  },
  {
    id: 6,
    page: '16',
    title: 'Born at KIMC',
    summary: "Paul Nabiswa's journey from hopeful student to broadcast leader.",
  },
  {
    id: 7,
    page: '41',
    title: 'The Toxic Harvest',
    summary: "Why Kenya's farmers won't eat what they grow.",
  },
  {
    id: 8,
    page: '58',
    title: 'Street Lights',
    summary: "The informal runners who keep the city's promises after dark.",
  },
];

const GUIDELINES = [
  {
    number: '01',
    title: 'Grid & rhythm',
    body: 'A modular twelve column grid structures every spread. Margins are generous and content breathes with a consistent vertical rhythm.',
  },
  {
    number: '02',
    title: 'Typography first',
    body: 'A restrained palette of two typefaces. A serif for headlines, a sans for body. Scale is used dramatically to create hierarchy.',
  },
  {
    number: '03',
    title: 'Contrast & restraint',
    body: 'Black, white, and a single accent red. Everything else is texture and negative space, amplifying the emotional weight of stories.',
  },
  {
    number: '04',
    title: 'Image as narrative',
    body: 'Full bleed images open every feature. Portraits are cropped tight, landscapes breathe. Every visual is intentional.',
  },
  {
    number: '05',
    title: 'Accessible & honest',
    body: 'No decoration without function. Every element serves the story. The layout stays clean, direct, and timeless.',
  },
];

const ACCORDIONS = [
  {
    id: 'tech',
    title: 'Technologies used',
    content: (
      <ul>
        <li>
          <strong>Adobe InDesign</strong>: primary layout and typesetting.
        </li>
        <li>
          <strong>Adobe Photoshop</strong>: image editing and colour correction.
        </li>
        <li>
          <strong>Adobe Illustrator</strong>: vector graphics and infographics.
        </li>
        <li>
          <strong>Google Fonts (Inter)</strong>: clean, readable sans serif for body text.
        </li>
        <li>
          <strong>Modular twelve column grid</strong>: consistent structure across spreads.
        </li>
        <li>
          <strong>Style sheets and master pages</strong>: efficient global formatting.
        </li>
      </ul>
    ),
  },
  {
    id: 'steps',
    title: 'Design process',
    content: (
      <ol>
        <li>
          <strong>Empathise</strong>: understood the theme “Becoming” and the audience of
          postgraduate media students, educators, and general readers.
        </li>
        <li>
          <strong>Define</strong>: established core principles of grid, typography, colour, and
          visual hierarchy.
        </li>
        <li>
          <strong>Ideate</strong>: sketched multiple layout concepts, experimented with typographic
          scales, and refined the cover design.
        </li>
        <li>
          <strong>Prototype</strong>: built master pages, applied paragraph and character styles,
          and placed all content iteratively.
        </li>
        <li>
          <strong>Test</strong>: reviewed spreads with editors, adjusted readability, checked colour
          contrast, and made final refinements before export.
        </li>
      </ol>
    ),
  },
  {
    id: 'challenges',
    title: 'Challenges faced',
    content: (
      <ul>
        <li>
          <strong>Late submissions</strong>: compressed the production schedule, requiring rapid
          layout adjustments and last minute reflowing.
        </li>
        <li>
          <strong>Vague requirements</strong>: interpreted ambiguous instructions from writers and
          editors, often needing multiple revisions to align on tone and image placement.
        </li>
        <li>
          <strong>Managing twenty four stories</strong>: maintaining consistent visual rhythm and
          typographic hierarchy across seventy six pages with diverse content types.
        </li>
        <li>
          <strong>Stakeholder coordination</strong>: balancing feedback from multiple lecturers, the
          editorial team, and the printing press.
        </li>
        <li>
          <strong>Technical constraints</strong>: dealing with InDesign file size, image resolution,
          and export settings for print production.
        </li>
        <li>
          <strong>Creativity versus readability</strong>: ensuring that bold design choices never
          compromised legibility or clarity.
        </li>
      </ul>
    ),
  },
];

function Accordion({ item, openId, setOpenId }) {
  const open = openId === item.id;
  return (
    <div className={`mag-acc ${open ? 'is-open' : ''}`}>
      <button
        type="button"
        className="mag-acc__trigger"
        aria-expanded={open}
        onClick={() => setOpenId(open ? null : item.id)}
      >
        <span>{item.title}</span>
        <span className="mag-acc__icon" aria-hidden="true">
          {open ? <FiMinus size={14} /> : <FiPlus size={14} />}
        </span>
      </button>
      {open && <div className="mag-acc__body">{item.content}</div>}
    </div>
  );
}

export default function Magazine() {
  const [openId, setOpenId] = useState(null);

  return (
    <section className="mag" id="magazine">
      <div className="mag__container">
        {/* ---------- HERO / SPREAD ---------- */}
        <header className="mag__spread">
          <figure className="mag__cover">
            <a href={DOWNLOAD_URL} target="_blank" rel="noopener noreferrer">
              <img
                src="/trend.jpg"
                alt="Cover of The Trend magazine, 2026 issue"
                loading="eager"
                decoding="async"
              />
            </a>
          </figure>

          <div className="mag__intro">
            <h1 className="mag__title">
              The Trend
              <span className="mag__title-period">.</span>
            </h1>

            <p className="mag__lede">
              The annual magazine of the postgraduate class at the Kenya Institute of Mass
              Communication. Twenty four stories about becoming.
            </p>

            <div className="mag__prose">
              <p>
                Each edition gathers the voices of emerging media practitioners and explores stories
                that challenge, inspire, and provoke thought. For the 2026 issue, I was lead
                designer.
              </p>
              <p>
                I collected and edited stories from more than twenty writers and distilled their
                narratives into a cohesive seventy six page publication. The theme,{' '}
                <em>Becoming</em>, unites every piece: from Pauline Sheghu's rise in motorsport to
                the quiet transformations of ordinary people choosing to keep evolving.
              </p>
              <p>
                I drew on earlier editions, particularly the 2020 issue, for its bold use of
                contrast, typographic restraint, and emotional depth. What I carried forward was a
                simple discipline: let the story lead, and let the design get out of its way.
              </p>
            </div>

            <a
              className="mag__download"
              href={DOWNLOAD_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              Download the issue <FiDownload size={14} aria-hidden="true" />
            </a>
          </div>
        </header>

        {/* ---------- GUIDELINES ---------- */}
        <section className="mag__guidelines" aria-labelledby="mag-guides">
          <h2 id="mag-guides" className="mag__h2">
            Design guidelines
          </h2>

          <div className="mag__guides-list">
            {GUIDELINES.map((g) => (
              <article className="mag__guide" key={g.number}>
                <span className="mag__guide-num">{g.number}</span>
                <div>
                  <h3 className="mag__guide-title">{g.title}</h3>
                  <p className="mag__guide-body">{g.body}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ---------- PROCESS ---------- */}
        <section className="mag__process" aria-labelledby="mag-process">
          <div className="mag__process-head">
            <h2 id="mag-process" className="mag__h2">
              Process and challenges
            </h2>
            <p className="mag__process-lede">
              The tools, workflow, and obstacles encountered while designing the 2026 issue.
            </p>
          </div>

          <div className="mag__accordions">
            {ACCORDIONS.map((item) => (
              <Accordion key={item.id} item={item} openId={openId} setOpenId={setOpenId} />
            ))}
          </div>
        </section>

        {/* ---------- STORIES ---------- */}
        <section className="mag__stories" aria-labelledby="mag-stories">
          <h2 id="mag-stories" className="mag__h2">
            Featured stories
          </h2>

          <ol className="mag__story-list">
            {STORIES.map((story) => (
              <li className="mag__story" key={story.id}>
                <span className="mag__story-page">{story.page}</span>
                <div className="mag__story-body">
                  <h3 className="mag__story-title">{story.title}</h3>
                  <p className="mag__story-summary">{story.summary}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* ---------- CLOSING ---------- */}
        <footer className="mag__footer">
          <p className="mag__footer-title">Designed and laid out by Denish Awajo Otieno.</p>
          <a
            className="mag__footer-link"
            href={DOWNLOAD_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            Open the full issue <FiDownload size={14} aria-hidden="true" />
          </a>
        </footer>
      </div>
    </section>
  );
}
