// Header.jsx
import React, { useState, useEffect, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BiMenuAltRight, BiX } from 'react-icons/bi';
import './header.css';

const NAV_ITEMS = [
  { path: '/', label: 'Home' },
  { path: '/work', label: 'Resume' },
  { path: '/publications', label: 'Publications' },
  { path: '/besidework', label: 'Play' },
  { path: '/contact', label: 'Contact' },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // "Over hero" only on the home route AND near the top of the page
  const isHome = location.pathname === '/';
  const overHero = isHome && !scrolled;

  // Toggle the "scrolled" state when we pass a small threshold
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close the mobile menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  // Lock body scroll while the mobile menu is open
  useEffect(() => {
    if (!menuOpen) return undefined;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prev;
    };
  }, [menuOpen]);

  // Escape closes the menu
  useEffect(() => {
    if (!menuOpen) return undefined;
    const onKey = (e) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [menuOpen]);

  const toggleMenu = useCallback(() => setMenuOpen((v) => !v), []);

  return (
    <header
      className={[
        'header',
        scrolled ? 'header--scrolled' : '',
        overHero ? 'header--over-hero' : '',
        menuOpen ? 'header--open' : '',
      ]
        .filter(Boolean)
        .join(' ')}
    >
      <div className="header__inner">
        <Link to="/" className="header__wordmark" aria-label="Denish Awajo — home">
          Denish Awajo
        </Link>

        <nav className="header__nav" aria-label="Primary">
          <ul className="header__list">
            {NAV_ITEMS.map((item) => {
              const active = location.pathname === item.path;
              return (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className={`header__link ${active ? 'is-active' : ''}`}
                    aria-current={active ? 'page' : undefined}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <button
          type="button"
          className="header__toggle"
          onClick={toggleMenu}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
        >
          {menuOpen ? <BiX size={26} /> : <BiMenuAltRight size={26} />}
        </button>
      </div>

      <div
        id="mobile-menu"
        className={`header__mobile ${menuOpen ? 'is-open' : ''}`}
        aria-hidden={!menuOpen}
      >
        <nav aria-label="Mobile navigation">
          <ul className="header__mobile-list">
            {NAV_ITEMS.map((item) => {
              const active = location.pathname === item.path;
              return (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className={`header__mobile-link ${active ? 'is-active' : ''}`}
                    onClick={() => setMenuOpen(false)}
                    aria-current={active ? 'page' : undefined}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
