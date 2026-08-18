import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiExternalLink, FiGithub } from 'react-icons/fi';
import projectsData from '../../utils/projects.json';
import designsData from '../../utils/designs.json';
import eduData from '../../utils/Education.json';
import certData from '../../utils/Certifications.json';
import './Work.css';

// Helper to flatten designs (if they are nested under uiux/graphic)
const flattenDesigns = (data) => {
  if (Array.isArray(data)) return data;
  return Object.values(data).flat();
};

// Build full list with category labels
const allItems = [
  ...projectsData.map((p) => ({ ...p, category: 'project' })),
  ...flattenDesigns(designsData).map((d) => ({ ...d, category: 'design' })),
  ...eduData.map((e) => ({ ...e, category: 'education' })),
  ...certData.map((c) => ({ ...c, category: 'certification' })),
];

const categoryLabels = {
  project: 'Projects',
  design: 'Designs',
  education: 'Education',
  certification: 'Certifications',
};

const Work = () => {
  const [filter, setFilter] = useState('all');
  const filters = ['all', 'project', 'design', 'education', 'certification'];

  // Filter items
  const filteredItems = filter === 'all'
    ? allItems
    : allItems.filter((item) => item.category === filter);

  // Group items by category when showing "all"
  const grouped = filter === 'all'
    ? Object.entries(
        allItems.reduce((acc, item) => {
          const cat = item.category;
          if (!acc[cat]) acc[cat] = [];
          acc[cat].push(item);
          return acc;
        }, {})
      )
    : null;

  // Order of categories in "all" view
  const categoryOrder = ['education', 'certification','project', 'design'];

  return (
    <section className="work">
      <div className="work__container">
        <header className="work__header">
          <span className="section-subtitle">Portfolio</span>
          <h2 className="section-title">My Work</h2>
          <p className="section-description">
            A curated selection of my projects, designs, education, and certifications.
          </p>
        </header>

        {/* Filter buttons */}
        <div className="work__filters">
          {filters.map((f) => (
            <button
              key={f}
              className={`work__filter ${filter === f ? 'work__filter--active' : ''}`}
              onClick={() => setFilter(f)}
            >
              {f === 'all' ? 'All' : categoryLabels[f] || f}
            </button>
          ))}
        </div>

        {/* Render content */}
        {filter === 'all' ? (
          // Grouped view with headings
          <div className="work__groups">
            {categoryOrder.map((cat) => {
              const items = grouped?.find(([key]) => key === cat)?.[1] || [];
              if (items.length === 0) return null;
              return (
                <div key={cat} className="work__group">
                  <h3 className="work__group-title">{categoryLabels[cat]}</h3>
                  <div className="work__grid">
                    {items.map((item, idx) => (
                      <WorkCard key={idx} item={item} />
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          // Flat grid for filtered view
          <div className="work__grid">
            {filteredItems.map((item, idx) => (
              <WorkCard key={idx} item={item} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

// Reusable card component
const WorkCard = ({ item }) => (
  <motion.div
    className="work__card"
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.2 }}
  >
    {item.image && (
      <div className="work__image">
        <img src={item.image} alt={item.name || item.title || item.School} />
      </div>
    )}
    <div className="work__content">
      <span className="work__category">{categoryLabels[item.category] || item.category}</span>
      <h3>{item.name || item.title || item.School}</h3>
      {item.detail && <p>{item.detail}</p>}
      {item.period && <p className="work__period">{item.period}</p>}
      {item.by && <p className="work__by"><em>{item.by}</em></p>}
      <div className="work__meta">
        {item.url && (
          <a href={item.url} target="_blank" rel="noopener noreferrer">
            <FiExternalLink /> View
          </a>
        )}
        {item.github && (
          <a href={item.github} target="_blank" rel="noopener noreferrer">
            <FiGithub /> Code
          </a>
        )}
        {item.link && (
          <a href={item.link} target="_blank" rel="noopener noreferrer">
            <FiExternalLink /> Credential
          </a>
        )}
      </div>
    </div>
  </motion.div>
);

export default Work;