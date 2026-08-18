// Publications.jsx (simplified)
import React, { useState } from 'react';
import { FaBookOpen, FaFlask } from 'react-icons/fa';
import { FiExternalLink } from 'react-icons/fi';
import articles from '../../utils/Articles.json'
import research from '../../utils/Research.json';
import './Publications.css';

const Publications = () => {
  const [tab, setTab] = useState('articles');
  const data = tab === 'articles' ? articles : research;

  return (
    <section className="publications">
      <div className="publications__container">
        <header>
          <span className="section-subtitle">Written Works</span>
          <h2 className="section-title">Publications</h2>
        </header>

        <div className="publications__tabs">
          <button
            className={`publications__tab ${tab === 'articles' ? 'active' : ''}`}
            onClick={() => setTab('articles')}
          >
            <FaBookOpen /> Articles
          </button>
          <button
            className={`publications__tab ${tab === 'research' ? 'active' : ''}`}
            onClick={() => setTab('research')}
          >
            <FaFlask /> Research
          </button>
        </div>

        <div className="publications__grid">
          {data.map((item, i) => (
            <div key={i} className="publications__card">
              <h3>{item.name || item.title}</h3>
              <p><em>{item.by}</em> · {item.Date}</p>
              <a href={item.url} target="_blank" rel="noopener noreferrer">
                Read <FiExternalLink />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Publications;