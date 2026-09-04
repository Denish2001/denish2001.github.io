// Header.jsx
import React, { useState, useEffect, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BiMenuAltRight, BiX } from 'react-icons/bi';
import './Header.css';

// Navigation configuration — defined outside for purity
const NAV_ITEMS = [
  { path: '/', label: 'Home' },
  { path: '/work', label: 'Resume' },
  { path: '/publications', label: 'Publications' },
  { path: '/contact', label: 'Contact' },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Memoized scroll handler — cleans up on unmount
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  const toggleMenu = useCallback(() => {
    setMenuOpen((prev) => !prev);
  }, []);

  return (
    <header className={`header ${scrolled ? 'header--scrolled' : ''}`}>
      <div className="header__container">
        {/* Logo — links to home */}
        <Link to="/" className="header__logo" aria-label="Home">
          Denish Awajo
        </Link>

        {/* Desktop Navigation */}
        <nav className="header__nav" aria-label="Main navigation">
          <ul className="header__list">
            {NAV_ITEMS.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`header__link ${
                    location.pathname === item.path ? 'header__link--active' : ''
                  }`}
                  aria-current={location.pathname === item.path ? 'page' : undefined}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Toggle Button */}
        <button
          className="header__toggle"
          onClick={toggleMenu}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <BiX size={28} /> : <BiMenuAltRight size={28} />}
        </button>

        {/* Mobile Navigation Overlay */}
        <div className={`header__mobile ${menuOpen ? 'header__mobile--open' : ''}`}>
          <ul className="header__list header__list--mobile">
            {NAV_ITEMS.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`header__link ${
                    location.pathname === item.path ? 'header__link--active' : ''
                  }`}
                  onClick={() => setMenuOpen(false)}
                  aria-current={location.pathname === item.path ? 'page' : undefined}
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