import { Link } from 'gatsby';
import React, { useState } from 'react';

import Accordion from '../Accordion';
import Container from '../Container';
import FormInputField from '../FormInputField/FormInputField';
import Icon from '../Icons/Icon';
import Config from '../../config.json';
import * as styles from './Footer.module.css';

const Footer = () => {
  const [email, setEmail] = useState('');

  const subscribeHandler = (e) => {
    e.preventDefault();
    setEmail('');
    console.log('Subscribe this email: ', email);
  };

  const handleSocialClick = (platform) => {
    window.open(Config.social[platform]);
  };

  const renderLinks = (linkCollection) => {
    return (
      <ul className={styles.linkList}>
        {linkCollection.links.map((link, index) => (
          <li key={index}>
            <Link className={`${styles.link} fancy`} to={link.link}>
              {link.text}
            </Link>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div className={styles.root}>
      <Container size={'large'} spacing={'min'}>
        <div className={styles.content}>
          <div className={styles.contentTop}>
            {Config.footerLinks.map((linkCollection, indexLink) => (
              <div className={styles.footerLinkContainer} key={indexLink}>
                {/* Desktop links */}
                <div className={styles.footerLinks}>
                  <span className={styles.linkTitle}>
                    {linkCollection.subTitle}
                  </span>
                  {renderLinks(linkCollection)}
                </div>

                {/* Mobile links */}
                <div className={styles.mobileFooterLinks}>
                  <Accordion
                    customStyle={styles}
                    type={'add'}
                    title={linkCollection.subTitle}
                  >
                    {renderLinks(linkCollection)}
                  </Accordion>
                </div>
              </div>
            ))}

            {/* Newsletter */}
            <div className={styles.newsLetter}>
              <div className={styles.newsLetterContent}>
                <span className={styles.linkTitle}>Newsletter</span>
                <p className={styles.promoMessage}>
                  Get 15% off your first purchase! Plus, be the first to know
                  about sales, new product launches and exclusive offers!
                </p>
                <form
                  className={styles.newsLetterForm}
                  onSubmit={(e) => subscribeHandler(e)}
                >
                  <FormInputField
                    icon={'arrow'}
                    id={'newsLetterInput'}
                    value={email}
                    placeholder={'Email'}
                    handleChange={(_, e) => setEmail(e)}
                  />
                </form>

                {/* Social Media */}
                <div className={styles.socialContainer}>
                  {Config.social.youtube && (
                    <div
                      onClick={() => handleSocialClick('youtube')}
                      role={'presentation'}
                      className={styles.socialIconContainer}
                    >
                      <Icon symbol={'youtube'} />
                    </div>
                  )}
                  {Config.social.instagram && (
                    <div
                      onClick={() => handleSocialClick('instagram')}
                      role={'presentation'}
                      className={styles.socialIconContainer}
                    >
                      <Icon symbol={'instagram'} />
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
