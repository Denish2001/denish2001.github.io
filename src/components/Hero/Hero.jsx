// Hero.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__container">
        <div className="hero__content">
          <h1 className="hero__title">
            Hi, I’m <span className="hero__accent">Denish Awajo</span>
          </h1>
          <p className="hero__subtitle">
            Creative problem solver · Design & Engineering
          </p>
          <div className="hero__actions">
            <Link to="/work" className="hero__button hero__button--primary">
              View my work
            </Link>
            <Link to="/contact" className="hero__button hero__button--secondary">
              Let’s talk
            </Link>
          </div>
        </div>
        <div className="hero__visual">
          <div className="hero__shape" />
        </div>
      </div>
    </section>
  );
};

export default Hero;