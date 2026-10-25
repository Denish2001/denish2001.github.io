import { useEffect, useRef, useState } from 'react';
import { FiArrowUpRight } from 'react-icons/fi';
import './BesidesWork.css';

/* ==========================================================
   DATA
   ========================================================== */

const MOVIES = [
  { title: 'The Big Bang Theory', year: 2007 },
  { title: 'Friends', year: 1994 },
  { title: 'Modern Family', year: 2009 },
  { title: 'How I Met Your Mother', year: 2005 },
  { title: 'Arrested Development', year: 2003 },
  { title: 'The Office', year: 2005 },
  { title: 'Parks and Recreation', year: 2009 },
  { title: 'Malcolm in the Middle', year: 2000 },
  { title: 'Curb Your Enthusiasm', year: 2000 },
  { title: 'Silicon Valley', year: 2014 },
  { title: 'Two and a Half Men', year: 2003 },
  { title: 'New Girl', year: 2011 },
  { title: 'Brooklyn Nine-Nine', year: 2013 },
  { title: 'Will & Grace', year: 1998 },
  { title: 'Silo', year: 2023 },
  { title: 'Dark Matter', year: 2024 },
  { title: 'Widow’s Bay', year: 2025 },
  { title: 'Desperate Housewives', year: 2004 },
  { title: 'The Vampire Diaries', year: 2009 },
  { title: 'The Originals', year: 2013 },
  { title: 'Legacies', year: 2018 },
  { title: 'The Boys', year: 2019 },
  { title: 'Reacher', year: 2022 },
  { title: 'Neagley', year: 2025 },
  { title: 'Young Sheldon', year: 2017 },
  { title: "Georgie & Mandy's First Marriage", year: 2024 },
  { title: 'Abbott Elementary', year: 2021 },
  { title: 'Lanterns', year: 2026 },
  { title: 'The Flash', year: 2014 },
  { title: 'Breaking Bad', year: 2008 },
  { title: 'All American', year: 2018 },
  { title: 'Prison Break', year: 2005 },
  { title: 'Scandal', year: 2012 },
  { title: 'Game of Thrones', year: 2011 },
  { title: 'Queen of the South', year: 2016 },
  { title: 'Squid Game', year: 2021 },
  { title: 'Iron Man', year: 2008 },
  { title: 'Deadpool & Wolverine', year: 2024 },
  { title: 'The Fantastic Four: First Steps', year: 2024 },
  { title: 'Spider-Man: Brand New Day', year: 2026 },
  { title: 'Thunderbolts*', year: 2025 },
  { title: 'Spider-Man', year: 2002 },
  { title: 'Spider-Man 2', year: 2004 },
  { title: 'Spider-Man 3', year: 2007 },
  { title: 'The Amazing Spider-Man', year: 2012 },
  { title: 'X-Men: Days of Future Past', year: 2014 },
];

const WORDS = [
  {
    id: 'when-death-comes',
    author: 'Mary Oliver',
    source: 'When Death Comes',
    stanzas: [
      'When death comes\nlike the hungry bear in autumn…',
      'when death comes and takes all the bright coins from his purse\nto buy me, and snaps the purse shut…\nwhen death comes\nlike the measle pox…',
      "when death comes\nlike an iceberg between the shoulder blades…\nI want to step through the door full of curiosity, wondering…\nwhat's it gonna be like, that cottage of darkness?",
      'And therefore I look upon everything\nas a brotherhood and a sisterhood,\nand I look upon time as no more than an idea,\nand I consider eternity as another possibility…',
      'and I think of each life as a flower, as common\nas a field daisy, and as singular.\nAnd each name a comfortable music in the mouth…\ntending, as all music does…\ntowards silence.',
      'And each body a lion of courage…\nand something precious to the earth.',
      "When it's over, I want to say: all my life\nI was a bride married to amazement.\nThat I was the bridegroom, taking the world into my arms.",
      "When it's over, I don't want to wonder\nif I have made of my life something particular… Thank you.\nand real.\nWhen it's over…\nI don't want to find myself sighing.\nAnd frightened… or full of argument.\nI don't want to end up simply having visited this world.",
    ],
  },
  {
    id: 'summer-day',
    author: 'Mary Oliver',
    source: 'The Summer Day',
    stanzas: ['Tell me, what is it you plan to do\nwith your one wild and precious life?'],
  },
  {
    id: 'attention',
    author: 'Mary Oliver',
    source: 'Upstream',
    stanzas: ['Attention is the beginning of devotion.'],
  },
  {
    id: 'still-i-rise',
    author: 'Maya Angelou',
    source: 'Still I Rise',
    stanzas: [
      `You may write me down in history
With your bitter, twisted lies,
You may trod me in the very dirt
But still, like dust, I'll rise.`,
      `Does my sassiness upset you?
Why are you beset with gloom?
'Cause I walk like I've got oil wells
Pumping in my living room.`,
      `Just like moons and like suns,
With the certainty of tides,
Just like hopes springing high,
Still I'll rise.`,
      `Did you want to see me broken?
Bowed head and lowered eyes?
Shoulders falling down like teardrops,
Weakened by my soulful cries?`,
      `Does my haughtiness offend you?
Don't you take it awful hard
'Cause I laugh like I've got gold mines
Diggin' in my own backyard.`,
      `You may shoot me with your words,
You may cut me with your eyes,
You may kill me with your hatefulness,
But still, like air, I'll rise.`,
      `Does my sexiness upset you?
Does it come as a surprise
That I dance like I've got diamonds
At the meeting of my thighs?`,
      `Out of the huts of history's shame
I rise
Up from a past that's rooted in pain
I rise
I'm a black ocean, leaping and wide,
Welling and swelling I bear in the tide.`,
      `Leaving behind nights of terror and fear
I rise
Into a daybreak that's wondrously clear
I rise
Bringing the gifts that my ancestors gave,
I am the dream and the hope of the slave.
I rise
I rise
I rise.`,
    ],
  },
  {
    id: 'i-laugh-at-myself',
    author: 'Maya Angelou',
    source: 'I laugh at myself',
    stanzas: [
      `When I think about myself,
I almost laugh myself to death,
My life has been one great big joke,
A dance that's walked
A song that's spoke,
I laugh so hard I almost choke
When I think about myself.`,
      `Sixty years in these folks' world
The child I works for calls me girl
I say 'Yes ma'am' for working's sake.
Too proud to bend
Too poor to break,
I laugh until my stomach ache,
When I think about myself.`,
      `My folks can make me split my side,
I laughed so hard I nearly died,
The tales they tell, sound just like lying,
They grow the fruit,
But eat the rind,
I laugh until I start to crying,
When I think about my folks.`,
    ],
  },
  {
    id: 'hard-monologue',
    author: 'Deborah Vance',
    source: 'Hard Monologue',
    stanzas: [
      `You have to scratch and claw and it never f*cking ends. And it doesn’t get better, it just gets harder. So don’t complain to me that I’m making your life hard. You don’t even know what that means.`,
    ],
  },
  {
    id: 'experience-learning',
    author: 'Andy Lane',
    source: 'Learning by Experience',
    stanzas: [
      `Learning by experience is a familiar idea but it implies two activities: learning and experiencing. Both activities need to happen if I am to say that learning from experience has happened. Experiencing seems to have two components. The first is the quality of attention that allows me to notice the experience and its components. The second is memory. Calling experience to mind allows me to examine the experience and to think about it in ways that were not possible at the time. Learning is what I take away from that process that influences my behaviour or thinking in the future.

But huge amounts of experience escape without being consciously experienced; I am insufficiently aware at the time to notice what’s going on. Later I am too busy to recall the experience and so little conscious learning takes place. Of course, it’s useful to carry out familiar activities ‘on auto-pilot’ – without conscious attention. It’s easy to miss out on important learning from unfamiliar activities too. I may become wrapped up in the activity itself or simply not notice the range and quality of the experience. Either way, a conscious attempt to recall the experience and to think about it, gives the opportunity to learn from the experience.`,
    ],
  },
];

const BOOKS = [
  {
    title: 'On Writing Well',
    by: 'William Zinsser',
    note: 'The clearest book on writing plainly. Everything I know about cutting clutter started here.',
    image:
      'https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=900&q=70',
    alt: 'Open book on a wooden surface',
  },
  {
    title: 'The Design of Everyday Things',
    by: 'Don Norman',
    note: 'Why a door can be wrong. The foundation of my instinct for interface design.',
    image:
      'https://images.unsplash.com/photo-1519682337058-a94d519337bc?auto=format&fit=crop&w=900&q=70',
    alt: 'Minimalist design objects',
  },
  {
    title: 'The Elements of Style',
    by: 'Strunk & White',
    note: 'Small, stern, and still right. Omit needless words.',
    image:
      'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=900&q=70',
    alt: 'Stack of classic books',
  },
  {
    title: 'Thinking, Fast and Slow',
    by: 'Daniel Kahneman',
    note: 'A reminder that the mind takes shortcuts, and interfaces should help it.',
    image:
      'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=900&q=70',
    alt: 'Reading corner with warm light',
  },
];

const SPOTIFY_EMBEDS = [
  {
    id: 'lemonade',
    title: 'Lemonade by Beyoncé',
    src: 'https://open.spotify.com/embed/album/7dK54iZuOxXFarGhXwEXfF?utm_source=generator&si=bf158a9dbc5e445e',
  },
  {
    id: 'tpab',
    title: 'To Pimp a Butterfly by Kendrick Lamar',
    src: 'https://open.spotify.com/embed/album/6FJxoadUE4JNVwWHghBwnb?utm_source=generator&si=221cc495f285499a',
  },
  {
    id: 'beyonce',
    title: 'Beyoncé on Spotify',
    src: 'https://open.spotify.com/embed/artist/310NKKgwvfe3k3nf9ug5TZ?utm_source=generator&si=6dba18a66cdc4a1f',
  },
  {
    id: 'renaissance',
    title: 'Renaissance by Beyoncé',
    src: 'https://open.spotify.com/embed/album/48i37aZTC1prDr4EcpQeEa?utm_source=generator&si=99a16fa690a04645',
  },
];

/* ==========================================================
   COUNTER
   ========================================================== */

function Counter({ total }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const raf = useRef(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        io.disconnect();

        if (reduced) {
          setCount(total);
          return;
        }

        const start = performance.now();
        const tick = (now) => {
          const t = Math.min((now - start) / 1400, 1);
          const eased = 1 - Math.pow(1 - t, 3);
          setCount(Math.round(eased * total));
          if (t < 1) raf.current = requestAnimationFrame(tick);
        };
        raf.current = requestAnimationFrame(tick);
      },
      { threshold: 0.35 }
    );

    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf.current);
    };
  }, [total]);

  return (
    <span className="bw__count" ref={ref}>
      {String(count).padStart(2, '0')}
    </span>
  );
}

/* ==========================================================
   FILMS
   ========================================================== */

const INITIAL_SHOW = 8;

function FilmList() {
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? MOVIES : MOVIES.slice(0, INITIAL_SHOW);
  const hidden = MOVIES.length - INITIAL_SHOW;

  return (
    <div className="bw-films">
      <ul className="bw-films__list">
        {visible.map((m) => (
          <li className="bw-film" key={m.title}>
            <span className="bw-film__title">{m.title}</span>
            <span className="bw-film__year">{m.year}</span>
          </li>
        ))}
      </ul>

      {hidden > 0 && (
        <button
          type="button"
          className="bw-btn"
          aria-expanded={showAll}
          onClick={() => setShowAll((v) => !v)}
        >
          {showAll ? 'Show less' : `Show all ${MOVIES.length}`}
        </button>
      )}
    </div>
  );
}

/* ==========================================================
   WORDS
   ========================================================== */

function WordCard({ item }) {
  const [open, setOpen] = useState(false);
  const long = item.stanzas.length > 2;

  return (
    <article className="bw-word">
      <div className="bw-word__meta">
        <span className="bw-word__author">{item.author}</span>
        <span className="bw-word__dot" aria-hidden="true">
          ·
        </span>
        <span className="bw-word__source">{item.source}</span>
      </div>

      <div className={`bw-word__body${long && !open ? ' bw-word__body--clamped' : ''}`}>
        {item.stanzas.length > 0 ? (
          item.stanzas.map((s, i) => (
            <p className="bw-word__stanza" key={i}>
              {s}
            </p>
          ))
        ) : (
          <p className="bw-word__empty">Nothing yet.</p>
        )}
      </div>

      {long && (
        <button
          type="button"
          className="bw-btn bw-btn--ghost"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? 'Collapse' : 'Read more'}
        </button>
      )}
    </article>
  );
}

/* ==========================================================
   PANEL
   ========================================================== */

function Panel({ id, title, count, actions, children }) {
  return (
    <section className="bw__panel" aria-labelledby={`bw-${id}`}>
      <header className="bw__panel-head">
        <h3 className="bw__panel-title" id={`bw-${id}`}>
          {title}
        </h3>
        <div className="bw__panel-side">
          {actions}
          {typeof count === 'number' && (
            <span className="bw__count-static">{String(count).padStart(2, '0')}</span>
          )}
        </div>
      </header>
      {children}
    </section>
  );
}

/* ==========================================================
   BOOK TILE
   ========================================================== */

function BookTile({ item }) {
  return (
    <article className="bw-tile">
      <div className="bw-tile__media">
        <img
          src={item.image}
          alt={item.alt}
          loading="lazy"
          decoding="async"
          className="bw-tile__image"
        />
        <span className="bw-tile__arrow" aria-hidden="true">
          <FiArrowUpRight size={14} />
        </span>
      </div>
      <div className="bw-tile__body">
        <h4 className="bw-tile__title">{item.title}</h4>
        {item.by && <p className="bw-tile__meta">{item.by}</p>}
        {item.note && <p className="bw-tile__note">{item.note}</p>}
      </div>
    </article>
  );
}

/* ==========================================================
   PAGE
   ========================================================== */

export default function BesidesWork() {
  return (
    <section className="bw" id="besides-work" aria-labelledby="bw-title">
      <div className="bw__shell">
        <aside className="bw__rail">
          <h1 className="bw__title" id="bw-title">
            Besides work
            <span className="bw__title-period">.</span>
          </h1>
          <p className="bw__lede">
            The films I keep coming back to, the words that stay with me, the books I return to, and
            the records that shaped how I build.
          </p>
        </aside>

        <div className="bw__content">
          <Panel
            id="films"
            title="Films I’ve watched since 2025"
            actions={<Counter total={MOVIES.length} />}
          >
            <FilmList />
          </Panel>
          <Panel id="listening" title="Listening" count={SPOTIFY_EMBEDS.length}>
            <div className="bw-embeds">
              {SPOTIFY_EMBEDS.map((item) => (
                <div className="bw-embed" key={item.id}>
                  <iframe
                    title={item.title}
                    src={item.src}
                    width="100%"
                    height="352"
                    frameBorder="0"
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </Panel>
          <Panel id="words" title="Favorite words" count={WORDS.length}>
            <div className="bw__words">
              {WORDS.map((item) => (
                <WordCard item={item} key={item.id} />
              ))}
            </div>
          </Panel>

          <Panel id="reading" title="Reading" count={BOOKS.length}>
            <div className="bw-tiles bw-tiles--books">
              {BOOKS.map((item) => (
                <BookTile item={item} key={item.title} />
              ))}
            </div>
          </Panel>
        </div>
      </div>
    </section>
  );
}
