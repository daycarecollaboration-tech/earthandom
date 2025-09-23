import React from 'react';
import * as styles from './Contact.module.css'; // keep your CSS

const Contact = () => {
  return (
    <div className={styles.root}>
      {/* Top info / intro */}
      <div className={styles.section}>
        <h4>Send Us A Message</h4>
        <p>
          We’d love to hear from you. Questions about classes, private sessions,
          school programs, or workshops—send us a note and we’ll reply soon.
        </p>
        <p><strong>Email:</strong> k.taranbir@yahoo.com</p>
        <p><strong>Phone:</strong> +1 (416) 856-8206</p>
      </div>

      {/* Contact form connected to Formspree */}
      <div className={styles.contactContainer}>
        <form
          action="https://formspree.io/f/xqaykqbj"  // ✅ your Formspree endpoint
          method="POST"
          className={styles.contactForm}
        >
          {/* ✅ Redirect users to thanks.js on your domain */}
          <input type="hidden" name="_redirect" value="https://earthandom.ca/thanks" />

          {/* Subject line for the email */}
          <input
            type="hidden"
            name="_subject"
            value="New message from Earth & OM website"
          />

          {/* Spam honeypot */}
          <input
            type="text"
            name="_gotcha"
            style={{ display: 'none' }}
            tabIndex="-1"
            autoComplete="off"
          />

          <div className={styles.formGrid}>
            <div className={styles.inputGroup}>
              <label htmlFor="name">Full Name</label>
              <input
                id="name"
                name="name"
                type="text"
                required
                placeholder="Your name"
                className={styles.input}
              />
            </div>

            <div className={styles.inputGroup}>
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="you@example.com"
                className={styles.input}
              />
            </div>

            <div className={styles.inputGroup}>
              <label htmlFor="phone">Phone</label>
              <input
                id="phone"
                name="phone"
                type="tel"
                placeholder="Optional"
                className={styles.input}
              />
            </div>

            <div className={`${styles.inputGroup} ${styles.commentInput}`}>
              <label htmlFor="message">Comments / Questions</label>
              <textarea
                id="message"
                name="message"
                required
                placeholder="Tell us a little about what you’re looking for…"
                rows="6"
                className={styles.textarea}
              />
            </div>
          </div>

          <button type="submit" className={styles.customButton}>
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;