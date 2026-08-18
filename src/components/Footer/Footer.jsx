// Footer.jsx
import React from 'react';
import { FiTwitter, FiInstagram, FiLinkedin, FiMail } from 'react-icons/fi';
import './Footer.css';

const Footer = () => {
  const year = new Date().getFullYear();
  const links = [
    { href: 'https://x.com/AwajoOndiegi', icon: FiTwitter, label: 'Twitter' },
    { href: 'https://www.instagram.com/_denish.awajo/', icon: FiInstagram, label: 'Instagram' },
    { href: 'https://www.linkedin.com/in/denish-awajo/', icon: FiLinkedin, label: 'LinkedIn' },
    { href: 'mailto:awajodenish@gmail.com', icon: FiMail, label: 'Email' },
  ];

  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__social">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              className="footer__social-link"
            >
              <link.icon size={20} />
            </a>
          ))}
        </div>
        <p className="footer__copyright">&copy; {year} Denish Awajo</p>
        <a href="#top" className="footer__back">↑ Back to top</a>
      </div>
    </footer>
  );
};

export default Footer;