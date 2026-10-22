// Motivation.jsx
import React, { useEffect, useRef, useState } from 'react';
import './Motivation.css';

export default function Motivation() {
  const cardRef = useRef(null);
  const [expanded, setExpanded] = useState(false);
  const [pinned, setPinned] = useState(false);

  useEffect(() => {
    const node = cardRef.current;
    if (!node) return undefined;

    // Prefer IntersectionObserver: expand when the card has been
    // comfortably in view, then pin so it never collapses.
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > 0.35) {
            setExpanded(true);
            setPinned(true);
          }
        });
      },
      { threshold: [0, 0.35, 0.6, 1] }
    );

    io.observe(node);
    return () => io.disconnect();
  }, []);

  return (
    <section className="motivation" id="motivation" aria-labelledby="motivation-title">
      <div className="motivation__container">
        <article
          ref={cardRef}
          className={`motivation__card ${expanded ? 'is-expanded' : ''} ${
            pinned ? 'is-pinned' : ''
          }`}
        >
          <header className="motivation__header">
            <h2 id="motivation-title" className="motivation__title">
              A brief insistence on being
              <span className="motivation__title-period">.</span>
            </h2>
            <p className="motivation__deck">On making things, and of leaving something behind.</p>
          </header>

          <div className="motivation__body">
            <p>
              I have often wondered what remains of a person when the titles are stripped away. What
              remains when the applause subsides, the screens go dark, and we are left with the
              quiet knowledge that one day we must surrender everything we have spent our lives
              becoming?
            </p>

            <p className="motivation__beat">Perhaps this is why I make things.</p>

            <p>
              I write code to make things work. I design to make them understandable, to give them
              form and grace. I tell stories because even the most ingenious invention is incomplete
              until it has something meaningful to say to the person who encounters it.
            </p>

            <p>
              There is a peculiar intimacy in building something that did not exist before. A blank
              screen becomes an interface. An idea becomes a working application. A problem that
              once seemed impenetrable begins, through patience and experimentation, to yield.
            </p>

            <p>
              Code has taught me precision. Design has taught me restraint. Journalism has taught me
              to pay attention. And storytelling has reminded me that behind every interface, every
              dataset, every carefully arranged pixel, there is a human being trying to make sense
              of something.
            </p>

            <p>
              I am, like everyone, a procession of former selves. Some I remember fondly; others I
              have had to outgrow. Becoming is rarely a straight line. Sometimes we return to the
              same question not because we failed to answer it, but because we have finally become
              capable of hearing it differently.
            </p>

            <p>
              And so I return to the work of making things. Not because technology will save us from
              our mortality, or because beauty can persuade time to stand still. It cannot. But we
              owe the briefness of our lives something more than mere existence: curiosity, the
              courage to begin, the humility to revise, the willingness to make things that serve
              someone beyond ourselves.
            </p>

            <p>When the end comes, I do not wish to discover that I merely visited this world.</p>

            <p className="motivation__beat">I want to have been astonished.</p>

            <p>
              I want to have made something useful, something beautiful, something real. I want the
              things I create to help people understand, to make difficult things a little easier,
              and to leave the world, however modestly, better than I found it.
            </p>

            <p>
              Until then, I will keep asking questions, writing code, shaping experiences, and
              telling stories.
            </p>

            <p className="motivation__beat">There is still so much to make.</p>
          </div>

          {!expanded && <div className="motivation__fade" aria-hidden="true" />}
        </article>
      </div>
    </section>
  );
}
