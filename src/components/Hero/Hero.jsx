// Hero.jsx
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';

const ROLES = ['UX/UI Designer', 'Frontend Engineer', 'Storyteller', 'Researcher'];

const NAME = 'Denish Awajo';

const TYPING_SPEED = 65; // ms per character
const DELETING_SPEED = 35; // ms per character
const HOLD_MS = 1600; // pause when a word is fully typed
const GAP_MS = 350; // pause before the next word starts

const Hero = () => {
  // ---- Name: type once, then stop ----
  const [nameText, setNameText] = useState('');
  const [nameDone, setNameDone] = useState(false);

  useEffect(() => {
    let i = 0;
    const id = setInterval(() => {
      i += 1;
      setNameText(NAME.slice(0, i));
      if (i >= NAME.length) {
        clearInterval(id);
        setNameDone(true);
      }
    }, TYPING_SPEED);
    return () => clearInterval(id);
  }, []);

  // ---- Roles: cycle after the name finishes ----
  const [roleIndex, setRoleIndex] = useState(0);
  const [roleText, setRoleText] = useState('');
  const [phase, setPhase] = useState('waiting'); // waiting | typing | holding | deleting

  useEffect(() => {
    if (!nameDone) return undefined;

    let timer;

    if (phase === 'waiting') {
      timer = setTimeout(() => setPhase('typing'), GAP_MS);
    }

    if (phase === 'typing') {
      const word = ROLES[roleIndex];
      if (roleText.length < word.length) {
        timer = setTimeout(() => setRoleText(word.slice(0, roleText.length + 1)), TYPING_SPEED);
      } else {
        timer = setTimeout(() => setPhase('holding'), HOLD_MS);
      }
    }

    if (phase === 'holding') {
      timer = setTimeout(() => setPhase('deleting'), 200);
    }

    if (phase === 'deleting') {
      if (roleText.length > 0) {
        timer = setTimeout(() => setRoleText(roleText.slice(0, -1)), DELETING_SPEED);
      } else {
        timer = setTimeout(() => {
          setRoleIndex((i) => (i + 1) % ROLES.length);
          setPhase('typing');
        }, GAP_MS);
      }
    }

    return () => clearTimeout(timer);
  }, [nameDone, phase, roleText, roleIndex]);

  return (
    <section className="hero" id="top">
      {/* Background image */}
      <div
        className="hero__bg"
        style={{ backgroundImage: 'url(/Denish.jpg)' }}
        role="img"
        aria-label="Denish Awajo"
      />
      <div className="hero__scrim" aria-hidden="true" />

      {/* Content */}
      <div className="hero__content">
        <h1 className="hero__name">
          {nameText}
          {!nameDone && <span className="hero__caret" aria-hidden="true" />}
        </h1>

        <p className="hero__role" aria-live="polite">
          <span className="hero__role-text">{roleText}</span>
          {nameDone && <span className="hero__caret" aria-hidden="true" />}
        </p>

        <Link to="/work" className="hero__cta">
          View my work
          <span className="hero__cta-arrow" aria-hidden="true">
            →
          </span>
        </Link>
      </div>

      <span className="hero__scroll" aria-hidden="true">
        Scroll
      </span>
    </section>
  );
};

export default Hero;
