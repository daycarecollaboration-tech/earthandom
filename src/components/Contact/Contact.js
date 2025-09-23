import React, { useState } from 'react';
import Button from '../Button';
import * as styles from './Contact.module.css';

const Contact = () => {
  const initialState = {
    name: '',
    phone: '',
    email: '',
    comment: '',
  };

  const [contactForm, setContactForm] = useState(initialState);

  const handleChange = (id, value) => {
    setContactForm({ ...contactForm, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted:', contactForm);
    setContactForm(initialState);
  };

  return (
    <div className={styles.root}>
      {/* Intro */}
      <div className={styles.section}>
        <h2>Contact Us</h2>
        <p>
          Have questions about classes, memberships, or events? We’d love to hear from you. 
          Reach out directly or use the form below and we’ll get back to you within 24–48 hours.
        </p>
      </div>

      {/* Contact Info */}
      <div className={styles.contactInfo}>
        <p><strong>📞 Phone:</strong> +1 (647) 856-8206</p>
        <p><strong>📧 Email:</strong> k.taranbir@yahoo.com</p>
      </div>

      {/* Contact Card */}
      <div className={styles.contactCard}>
        <form onSubmit={handleSubmit} className={styles.contactForm}>
          {/* Full Name */}
          <div className={styles.inputGroup}>
            <label htmlFor="name">Full Name</label>
            <input
              id="name"
              type="text"
              value={contactForm.name}
              onChange={(e) => handleChange('name', e.target.value)}
              placeholder="Enter your full name"
              required
            />
          </div>

          {/* Phone Number */}
          <div className={styles.inputGroup}>
            <label htmlFor="phone">Phone Number</label>
            <input
              id="phone"
              type="tel"
              value={contactForm.phone}
              onChange={(e) => handleChange('phone', e.target.value)}
              placeholder="Enter your phone number"
              required
            />
          </div>

          {/* Email */}
          <div className={styles.inputGroup}>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              value={contactForm.email}
              onChange={(e) => handleChange('email', e.target.value)}
              placeholder="Enter your email"
              required
            />
          </div>

          {/* Comment */}
          <div className={styles.inputGroup}>
            <label htmlFor="comment">Comments / Questions</label>
            <textarea
              id="comment"
              value={contactForm.comment}
              onChange={(e) => handleChange('comment', e.target.value)}
              placeholder="Write your message..."
              rows="5"
              required
            />
          </div>

          {/* Submit */}
          <Button className={styles.customButton} level={'primary'} type={'submit'}>
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Contact;