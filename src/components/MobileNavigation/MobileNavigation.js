import React, { useState } from "react";
import { Link } from "gatsby";
import Config from "../../config.json";
import * as styles from "./MobileNavigation.module.css";

const MobileNavigation = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.root}>
      {/* Hamburger Button */}
      <button
        className={styles.hamburger}
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
      >
        <span className={open ? styles.barOpen : styles.bar}></span>
        <span className={open ? styles.barOpen : styles.bar}></span>
        <span className={open ? styles.barOpen : styles.bar}></span>
      </button>

      {/* Slide Down Menu */}
      {open && (
        <nav className={styles.mobileNavContainer}>
          {Config.headerLinks.map((navObject) => (
            <Link
              key={navObject.menuLink}
              className={styles.mobileLink}
              to={navObject.menuLink}
              onClick={() => setOpen(false)} // close after click
            >
              {navObject.menuLabel}
            </Link>
          ))}
        </nav>
      )}
    </div>
  );
};

export default MobileNavigation;