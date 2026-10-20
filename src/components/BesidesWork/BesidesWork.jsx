import { useEffect, useRef, useState } from 'react';
import './BesidesWork.css';

/* ---------- data ---------- */

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
  { title: 'The Fantastic Four: First Steps ', year: 2024 },
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
    id: 'i-smile',
    author: 'Maya Angelou',
    source: 'I Smile',
    stanzas: [
      // Paste your authorized poem or performance text here.
      // Separate each stanza into its own string.
    ],
  },
];

/* ---------- counter ---------- */

function Counter() {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const raf = useRef(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const total = MOVIES.length;
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
          const t = Math.min((now - start) / 1200, 1);
          const eased = 1 - Math.pow(1 - t, 3);
          setCount(Math.round(eased * total));
          if (t < 1) raf.current = requestAnimationFrame(tick);
        };
        raf.current = requestAnimationFrame(tick);
      },
      { threshold: 0.3 }
    );

    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf.current);
    };
  }, []);

  return (
    <div className="bw-counter" ref={ref}>
      <span className="bw-counter__num">{count}</span>
      <span className="bw-counter__label">films logged</span>
    </div>
  );
}

/* ---------- films ---------- */

const INITIAL_SHOW = 6;

function FilmList() {
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? MOVIES : MOVIES.slice(0, INITIAL_SHOW);
  const hidden = MOVIES.length - INITIAL_SHOW;

  return (
    <>
      <ul className="bw-films">
        {visible.map((m) => (
          <li className="bw-film" key={m.title}>
            <span className="bw-film__title">
              {m.favorite && (
                <span className="bw-film__star" aria-label="favourite">
                  ◆
                </span>
              )}
              {m.title}
            </span>
            <span className="bw-film__year">{m.year}</span>
            {m.note && <span className="bw-film__note">{m.note}</span>}
          </li>
        ))}
      </ul>

      {hidden > 0 && (
        <button
          type="button"
          className="bw-toggle"
          aria-expanded={showAll}
          onClick={() => setShowAll((v) => !v)}
        >
          {showAll ? 'Show less' : `+ ${hidden} more`}
        </button>
      )}
    </>
  );
}

/* ---------- words ---------- */

function WordCard({ item }) {
  const [open, setOpen] = useState(false);
  const long = item.stanzas.length > 2;

  return (
    <article className="bw-word">
      <div className={`bw-word__body${long && !open ? ' bw-word__body--clamped' : ''}`}>
        {item.stanzas.map((s, i) => (
          <p className="bw-word__stanza" key={i}>
            {s}
          </p>
        ))}
      </div>

      {long && (
        <button
          type="button"
          className="bw-toggle"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? 'Show less' : 'Read it all'}
        </button>
      )}

      <p className="bw-word__byline">
        {item.author}
        {item.source && (
          <>
            , <cite>{item.source}</cite>
          </>
        )}
      </p>
    </article>
  );
}

/* ---------- section ---------- */

export default function BesidesWork() {
  return (
    <section className="bw" id="besides-work" aria-labelledby="bw-title">
      <header className="bw__header">
        <h2 className="bw__title" id="bw-title">
          Besides work
        </h2>
        <p className="bw__lede">
          Films I've sat with in the dark, and the lines I keep coming back to.
        </p>
      </header>

      <div className="bw__grid">
        <div className="bw__col bw__col--films">
          <Counter />
          <FilmList />
        </div>

        <div className="bw__col bw__col--words">
          {WORDS.map((item) => (
            <WordCard item={item} key={item.id} />
          ))}
        </div>
      </div>
    </section>
  );
}
