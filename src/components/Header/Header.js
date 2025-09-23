import React, { useState } from 'react';
import { Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import * as styles from './Header.module.css';

import logo from '../../images/logo.png'; // adjust path if needed

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  // ✅ closes menu when clicking overlay
  const handleCloseMenu = () => {
    setMobileOpen(false);
  };

  return (
    <header className={styles.root}>
      <div className={styles.header}>
        {/* Navigation Links (Desktop only) */}
        <nav className={styles.navLinks}>
          <Link className={styles.navLink} to="/about">About</Link>
          <Link className={styles.navLink} to="/classes">Classes</Link>
          <Link className={styles.navLink} to="/blog">Blog</Link>
          <Link className={styles.navLink} to="/contact">Contact</Link>
        </nav>

        {/* Logo (centered) */}
        <div className={styles.logoWrapper}>
          <Link to="/">
            <img src={logo} alt="Earth & OM Logo" className={styles.logo} />
          </Link>
        </div>

        {/* Social Icons (Desktop right side) */}
        <div className={styles.socialIcons}>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialIcon}
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a
            href="https://www.youtube.com/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialIcon}
          >
            <FontAwesomeIcon icon={faYoutube} />
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          className={styles.mobileMenuButton}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <FontAwesomeIcon icon={mobileOpen ? faTimes : faBars} />
        </button>
      </div>

      {/* ✅ Overlay (click to close menu) */}
      <div
        className={`${styles.overlay} ${mobileOpen ? styles.active : ''}`}
        onClick={handleCloseMenu}
      ></div>

      {/* Mobile Navigation Drawer */}
      {mobileOpen && (
        <div className={styles.mobileMenu}>
          <Link to="/about" onClick={handleCloseMenu}>About</Link>
          <Link to="/classes" onClick={handleCloseMenu}>Classes</Link>
          <Link to="/blog" onClick={handleCloseMenu}>Blog</Link>
          <Link to="/contact" onClick={handleCloseMenu}>Contact</Link>

          <div className={styles.mobileSocials}>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a
              href="https://www.youtube.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faYoutube} />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;