import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiExternalLink, FiGithub, FiCalendar, FiAward, FiBookOpen, FiUser } from 'react-icons/fi';
import projectsData from '../../utils/projects.json';
import designsData from '../../utils/designs.json';
//import eduData from '../../utils/Education.json';

import certData from '../../utils/Certifications.json';
import experienceData from '../../utils/Experince.json';
import eduData from '../../utils/Schooling.json';
import './Work.css';

// Helper to flatten designs (if they are nested under uiux/graphic)
const flattenDesigns = (data) => {
  if (Array.isArray(data)) return data;
  return Object.values(data).flat();
};

// Extract the experience array from the JSON object
const experienceItems = experienceData.work_experience || [];

// Build full list with category labels
const allItems = [
  ...experienceItems.map((e) => ({ ...e, category: 'experience' })),
  ...projectsData.map((p) => ({ ...p, category: 'project' })),
  ...flattenDesigns(designsData).map((d) => ({ ...d, category: 'design' })),
  ...eduData.map((e) => ({ ...e, category: 'education' })),
  ...certData.map((c) => ({ ...c, category: 'certification' })),
];

const categoryLabels = {
  experience: 'Experience',
  project: 'Projects',
  design: 'Designs',
  education: 'Education',
  certification: 'Certifications',
};

const Work = () => {
  const [filter, setFilter] = useState('all');
  const filters = ['all', 'experience', 'project', 'design', 'education', 'certification'];

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
  const categoryOrder = [ 'education', 'experience', 'certification', 'project', 'design'];

  return (
    <section className="work">
      <div className="work__container">
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
const WorkCard = ({ item }) => {
  // Determine what fields to display based on category
  const renderCardContent = () => {
    switch (item.category) {
      case 'experience':
        return (
          <>
            <span className="work__category">{item.type || 'Experience'}</span>
            <h3>{item.company}</h3>
            <p className="work__position">{item.position}</p>
            {item.location && <p className="work__location"><FiUser /> {item.location}</p>}
            {item.period && (
              <p className="work__period">
                <FiCalendar /> {item.period}
              </p>
            )}
            {item.description && <p className="work__detail">{item.description}</p>}
          </>
        );

      case 'education':
        return (
          <>
            <span className="work__category">{item.level || 'Education'}</span>
            <h3>{item.School}</h3>
            {item.Major && <p className="work__detail"><FiBookOpen /> {item.Major}</p>}
            {item.Grade && <p className="work__grade"><FiAward /> {item.Grade}</p>}
            {item.Period && (
              <p className="work__period">
                <FiCalendar /> {item.Period}
              </p>
            )}
          </>
        );
      
      case 'certification':
        return (
          <>
            <span className="work__category">Certification</span>
            <h3>{item.name}</h3>
            {item.by && <p className="work__by"><FiUser /> {item.by}</p>}
            {item.date && (
              <p className="work__period">
                <FiCalendar /> {item.date}
              </p>
            )}
            {item.link && (
              <div className="work__meta">
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                  <FiExternalLink /> View Credential
                </a>
              </div>
            )}
          </>
        );
      
      
      
      case 'design':
        return (
          <>
            <span className="work__category">{item.category || 'Design'}</span>
            <h3>{item.title}</h3>
            {item.description && <p className="work__detail">{item.description}</p>}
            {item.year && <p className="work__period"><FiCalendar /> {item.year}</p>}
            {item.tags && (
              <div className="work__tags">
                {item.tags.map((tag, i) => (
                  <span key={i} className="work__tag">{tag}</span>
                ))}
              </div>
            )}
            {item.link && (
              <div className="work__meta">
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                  <FiExternalLink /> View Design
                </a>
              </div>
            )}
          </>
        );
      
      case 'project':
      default:
        return (
          <>
            <span className="work__category">{item.type || 'Project'}</span>
            <h3>{item.name}</h3>
            {item.detail && <p className="work__detail">{item.detail}</p>}
            {item.tech && <p className="work__tech">{item.tech}</p>}
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
            </div>
          </>
        );
    }
  };

  return (
    <motion.div
      className="work__card"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2 }}
    >
      {item.image && (
        <div className="work__image">
          <img src={item.image} alt={item.name || item.title || item.School || item.company} />
        </div>
      )}
      <div className="work__content">
        {renderCardContent()}
      </div>
    </motion.div>
  );
};

export default Work;