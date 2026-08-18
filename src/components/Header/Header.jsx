// Header.jsx
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BiMenuAltRight, BiX } from 'react-icons/bi';
import './header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => setMenuOpen(false), [location]);

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/work', label: 'Resume' },
    { path: '/publications', label: 'Publications' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <header className={`header ${scrolled ? 'header--scrolled' : ''}`}>
      <div className="header__container">
        <Link to="/" className="header__logo" aria-label="Home">Denish Awajo</Link>

        <nav className="header__nav" aria-label="Main">
          <ul className="header__list">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`header__link ${
                    location.pathname === item.path ? 'header__link--active' : ''
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <button
          className="header__toggle"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <BiX size={28} /> : <BiMenuAltRight size={28} />}
        </button>

        {/* Mobile menu – simple slide */}
        <div className={`header__mobile ${menuOpen ? 'header__mobile--open' : ''}`}>
          <ul className="header__list header__list--mobile">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className="header__link"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;