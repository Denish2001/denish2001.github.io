// Publications.jsx
import React from 'react';
import { FiArrowUpRight } from 'react-icons/fi';
import articles from '../../utils/Articles.json';
import research from '../../utils/Research.json';
import './Publications.css';

/* Normalise both datasets into one list, tag by kind */
const buildEntries = () => {
  const fromArticles = (articles ?? []).map((a, i) => ({
    kind: 'Article',
    title: a.name || a.title || 'Untitled',
    author: a.by || null,
    date: a.Date || a.date || null,
    url: a.url || null,
    _id: `art-${i}`,
  }));

  const fromResearch = (research ?? []).map((r, i) => ({
    kind: 'Research',
    title: r.name || r.title || 'Untitled',
    author: r.by || null,
    date: r.Date || r.date || null,
    url: r.url || null,
    _id: `res-${i}`,
  }));

  return [...fromArticles, ...fromResearch];
};

export default function Publications() {
  const entries = buildEntries();

  return (
    <section className="pub" id="publications">
      <div className="pub__container">
        <header className="pub__header">
          <h1 className="pub__title">
            Written Works
            <span className="pub__title-period">.</span>
          </h1>
        </header>

        <div className="pub__list">
          {entries.map((entry) => (
            <a
              key={entry._id}
              className="pub__row"
              href={entry.url || '#'}
              target={entry.url ? '_blank' : undefined}
              rel={entry.url ? 'noopener noreferrer' : undefined}
            >
              <span className="pub__kind">{entry.kind}</span>

              <span className="pub__row-main">
                <span className="pub__row-title">{entry.title}</span>
                <span className="pub__row-meta">
                  {entry.author && <span>{entry.author}</span>}
                  {entry.author && entry.date && (
                    <span className="pub__dot" aria-hidden="true">
                      ·
                    </span>
                  )}
                  {entry.date && <span>{entry.date}</span>}
                </span>
              </span>

              <span className="pub__row-arrow" aria-hidden="true">
                <FiArrowUpRight size={16} />
              </span>
            </a>
          ))}

          {entries.length === 0 && <p className="pub__empty">Nothing published yet.</p>}
        </div>
      </div>
    </section>
  );
}
