// Work.jsx
import React, { useMemo, useState } from 'react';
import { FiExternalLink, FiGithub, FiPlus, FiMinus, FiPlay } from 'react-icons/fi';
import projectsData from '../../utils/projects.json';
import designsData from '../../utils/designs.json';
import certData from '../../utils/Certifications.json';
import experienceData from '../../utils/Experince.json';
import eduData from '../../utils/Schooling.json';
import './Work.css';

/* ------------------------------------------------------------------
   Data normalisation
   ------------------------------------------------------------------ */

const flattenDesigns = (data) => {
  if (Array.isArray(data)) return data;
  return Object.values(data).flat();
};

const experienceItems = experienceData?.work_experience ?? [];

/* ------------------------------------------------------------------
   Motion pictures (videos)
   Add / remove entries here. Supported `source`: 'youtube' | 'drive'.
   ------------------------------------------------------------------ */

const videosData = [
  {
    title: 'Affordable Housing Project',
    role: 'Lighting',
    source: 'drive',
    url: 'https://drive.google.com/file/d/1BJyuvG8gTN2JfmKvW3PMYfB2OjTTdeTh/view?usp=sharing',
    // Optional: set a custom thumbnail in /public to override the fallback
    // thumbnail: '/affordable-housing-thumb.jpg',
    description:
      'A short documentary on affordable housing initiatives. Responsible for lighting design and on-set lighting setup.',
  },
  {
    title: 'The Business of Building Businesses',
    role: 'Producer & Editor',
    source: 'youtube',
    url: 'https://youtu.be/V4cSu5PNTS8?si=UH55IRPP5Z0zYRlv',
    description:
      'Produced and edited this piece on entrepreneurship and business-building. Handled end-to-end production and post-production.',
  },
];

/* Derive an embeddable URL + thumbnail from the raw share link */
const driveIdFromUrl = (url = '') => {
  const m = url.match(/\/d\/([a-zA-Z0-9_-]+)/);
  return m ? m[1] : null;
};

const youtubeIdFromUrl = (url = '') => {
  const m = url.match(/youtu\.be\/([a-zA-Z0-9_-]+)/) || url.match(/[?&]v=([a-zA-Z0-9_-]+)/);
  return m ? m[1] : null;
};

const getVideoEmbed = (video) => {
  if (video.source === 'youtube') {
    const id = youtubeIdFromUrl(video.url);
    if (!id) return null;
    return {
      embed: `https://www.youtube.com/embed/${id}`,
      thumbnail: video.thumbnail || `https://i.ytimg.com/vi/${id}/hqdefault.jpg`,
    };
  }
  if (video.source === 'drive') {
    const id = driveIdFromUrl(video.url);
    if (!id) return null;
    return {
      embed: `https://drive.google.com/file/d/${id}/preview`,
      thumbnail: video.thumbnail || '/Videos.jpg',
    };
  }
  return null;
};

/* ------------------------------------------------------------------
   Stock imagery — one per section.
   ------------------------------------------------------------------ */

const SECTION_STOCK = {
  education: {
    label: 'Education',
    index: '01',
    image: '/grad.jpg',
    alt: 'University library shelves',
  },
  experience: {
    label: 'Experience',
    index: '02',
    image: '/experince.jpg',
    alt: 'Quiet modern workspace',
  },
  certification: {
    label: 'Certifications',
    index: '03',
    image: '/cert.jpg',
    alt: 'Desk with printed certificates',
  },
  project: {
    label: 'Projects',
    index: '04',
    image:
      'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1400&q=70',
    alt: 'Circuit board and code',
  },
  design: {
    label: 'Designs',
    index: '05',
    image: '/design.jpg',
    alt: 'Designer sketching wireframes',
  },
  video: {
    label: 'Motion pictures',
    index: '06',
    image: '/Videos.jpg',
    alt: 'Film production still',
  },
};

const SECTION_ORDER = ['education', 'experience', 'certification', 'project', 'design', 'video'];

const buildItems = () => ({
  education: eduData.map((e, i) => ({
    ...e,
    _id: `edu-${i}-${e.School ?? 'item'}`,
  })),
  experience: experienceItems.map((e, i) => ({
    ...e,
    _id: `exp-${i}-${e.company ?? 'item'}`,
  })),
  certification: certData.map((c, i) => ({
    ...c,
    _id: `crt-${i}-${c.name ?? 'item'}`,
  })),
  project: projectsData.map((p, i) => ({
    ...p,
    _id: `prj-${i}-${p.name ?? 'item'}`,
  })),
  design: flattenDesigns(designsData).map((d, i) => ({
    ...d,
    _id: `dsn-${i}-${d.title ?? 'item'}`,
  })),
  video: videosData.map((v, i) => ({
    ...v,
    _id: `vid-${i}-${v.title ?? 'item'}`,
  })),
});

/* ------------------------------------------------------------------
   Primary link
   ------------------------------------------------------------------ */

function PrimaryLink({ href, label = 'View', icon = 'external' }) {
  if (!href) return null;
  return (
    <a className="item__cta" href={href} target="_blank" rel="noopener noreferrer">
      {label}
      {icon === 'github' ? (
        <FiGithub size={14} aria-hidden="true" />
      ) : (
        <FiExternalLink size={14} aria-hidden="true" />
      )}
    </a>
  );
}

/* ------------------------------------------------------------------
   Accordion row
   ------------------------------------------------------------------ */

function AccordionRow({ label, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);
  const id = React.useId();

  return (
    <div className={`acc ${open ? 'is-open' : ''}`}>
      <button
        type="button"
        className="acc__trigger"
        aria-expanded={open}
        aria-controls={id}
        onClick={() => setOpen((v) => !v)}
      >
        <span className="acc__label">{label}</span>
        <span className="acc__icon" aria-hidden="true">
          {open ? <FiMinus size={14} /> : <FiPlus size={14} />}
        </span>
      </button>
      <div id={id} className="acc__panel" role="region" aria-hidden={!open} hidden={!open}>
        <div className="acc__inner">{children}</div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------
   Entry body inside an accordion
   ------------------------------------------------------------------ */

function ItemBody({ item, category }) {
  if (category === 'education') {
    return (
      <>
        {item.Major && (
          <p className="item__line">
            <span>Field</span> {item.Major}
          </p>
        )}
        {item.Period && (
          <p className="item__line">
            <span>Period</span> {item.Period}
          </p>
        )}
        {item.Grade && (
          <p className="item__line">
            <span>Grade</span> {item.Grade}
          </p>
        )}
      </>
    );
  }

  if (category === 'experience') {
    return (
      <>
        {item.position && (
          <p className="item__line">
            <span>Role</span> {item.position}
          </p>
        )}
        {item.location && (
          <p className="item__line">
            <span>Location</span> {item.location}
          </p>
        )}
        {item.period && (
          <p className="item__line">
            <span>Period</span> {item.period}
          </p>
        )}
        {item.description && <p className="item__desc">{item.description}</p>}
      </>
    );
  }

  if (category === 'certification') {
    return (
      <>
        {item.by && (
          <p className="item__line">
            <span>Issuer</span> {item.by}
          </p>
        )}
        {item.date && (
          <p className="item__line">
            <span>Issued</span> {item.date}
          </p>
        )}
        {item.link && (
          <div className="item__actions">
            <PrimaryLink href={item.link} label="View credential" />
          </div>
        )}
      </>
    );
  }

  if (category === 'project') {
    return (
      <>
        {item.detail && <p className="item__desc">{item.detail}</p>}
        {item.tech && (
          <p className="item__line">
            <span>Stack</span> {item.tech}
          </p>
        )}
        {(item.url || item.github) && (
          <div className="item__actions">
            <PrimaryLink href={item.url} label="View live site" />
            <PrimaryLink href={item.github} label="View code" icon="github" />
          </div>
        )}
      </>
    );
  }

  if (category === 'video') {
    const media = getVideoEmbed(item);
    return (
      <>
        {item.role && (
          <p className="item__line">
            <span>Role</span> {item.role}
          </p>
        )}
        {item.description && <p className="item__desc">{item.description}</p>}
        {media?.embed && (
          <div className="item__video">
            <iframe
              src={media.embed}
              title={item.title}
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        )}
        <div className="item__actions">
          <PrimaryLink href={item.url} label="Watch film" icon="play" />
        </div>
      </>
    );
  }

  /* design */
  return (
    <>
      {item.description && <p className="item__desc">{item.description}</p>}
      {item.tags?.length > 0 && (
        <p className="item__line">
          <span>Tags</span> {item.tags.join(' · ')}
        </p>
      )}
      {item.year && (
        <p className="item__line">
          <span>Year</span> {item.year}
        </p>
      )}
      {item.link && (
        <div className="item__actions">
          <PrimaryLink href={item.link} label="View design" />
        </div>
      )}
    </>
  );
}

/* ------------------------------------------------------------------
   One zigzag section
   ------------------------------------------------------------------ */

function ZigzagSection({ sectionKey, items, index }) {
  const isEven = index % 2 === 0;
  const meta = SECTION_STOCK[sectionKey];
  const isInteractive = ['project', 'design', 'video'].includes(sectionKey);

  return (
    <section
      className={`zz ${isEven ? 'zz--left' : 'zz--right'}`}
      aria-labelledby={`zz-${sectionKey}`}
    >
      <div className="zz__media">
        <img
          src={meta.image}
          alt={meta.alt}
          loading="lazy"
          decoding="async"
          className="zz__image"
        />
      </div>

      <div className="zz__content">
        <div className="zz__meta">
          <span className="zz__index">{meta.index}</span>
          <span className="zz__type">
            {items.length} entr{items.length === 1 ? 'y' : 'ies'}
          </span>
          {isInteractive && <span className="zz__hint">Tap to open</span>}
        </div>

        <h2 id={`zz-${sectionKey}`} className="zz__title">
          {meta.label}
        </h2>

        <div className="zz__accordions">
          {items.map((item) => {
            const title = item.School || item.company || item.name || item.title || 'Untitled';

            return (
              <AccordionRow key={item._id} label={title}>
                <ItemBody item={item} category={sectionKey} />
              </AccordionRow>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------
   Main
   ------------------------------------------------------------------ */

export default function Work() {
  const itemsBySection = useMemo(() => buildItems(), []);

  return (
    <section className="work" id="work">
      <div className="work__container">
        <header className="work__header">
          <h1 className="work__title">
            Work &amp; archive
            <span className="work__title-period">.</span>
          </h1>
        </header>

        <div className="work__stack">
          {SECTION_ORDER.map((key, i) => {
            const items = itemsBySection[key];
            if (!items?.length) return null;
            return <ZigzagSection key={key} sectionKey={key} items={items} index={i} />;
          })}
        </div>
      </div>
    </section>
  );
}
