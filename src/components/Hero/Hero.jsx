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
          <div className="hero__subtitle">
            <p>
              Software Engineer, Designer, and Storyteller with a First-Class
              Bachelor of Technology in Business Information Technology and
              postgraduate training in Mass Communication. I combine software
              development, UX/UI design, data, and digital storytelling to build
              technology that is functional, intuitive, and meaningful.
              Experienced in developing web applications using React,
              JavaScript, Python, Django, Flask, SQL, and modern development
              tools, alongside designing user experiences and digital products
              using Figma and other creative tools.
            </p>
            <p>
              My experience spans software engineering, UX/UI design, digital
              media, radio production, editorial leadership, and social media
              strategy. I have developed machine-learning applications, asset
              management systems, websites, and data-driven solutions, while
              also leading creative teams, mentoring junior talent, producing
              broadcast content, and managing digital content strategies.
            </p>
            <p>
              As a storyteller, I am particularly interested in how technology
              and design can communicate ideas, create emotional connections,
              and turn complex information into experiences people can
              understand and remember. I bring a multidisciplinary perspective
              that combines technical problem-solving, human-centred design,
              creativity, communication, and storytelling—allowing me to
              approach products not only from the perspective of how they work,
              but also how they feel, communicate, and serve the people who use
              them.
            </p>
          </div>
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
          <img
            src="/contact.jpg"
            alt="Denish Awajo"
            className="hero__image"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;