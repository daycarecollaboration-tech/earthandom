import React from 'react';
import * as styles from './Hero.module.css';
import Button from '../Button';
import { Link } from 'gatsby';
import { toOptimizedImage } from '../../helpers/general';

const Hero = (props) => {
  const {
    title,
    subtitle,
    ctaText,
    ctaAction,
    image,
    maxWidth,
    ctaStyle,
    ctaLink,
    ctaTo,
    header,
  } = props;

  return (
    <div
      className={styles.root}
      style={{ backgroundImage: `url(${toOptimizedImage(image)})` }}
    >
      <div className={styles.content} style={{ maxWidth: maxWidth }}>
        {header && <span className={styles.header}>{header}</span>}
       {title && <h2 className={styles.title} dangerouslySetInnerHTML={{ __html: title }} />}
        {subtitle && <span className={styles.subtitle}>{subtitle}</span>}

        {/* CTA as Button */}
        {ctaText && (
          <Button
            className={`${styles.ctaButton} ${ctaStyle}`}
            level={'primary'}
            onClick={ctaAction}
          >
            {ctaText}
          </Button>
        )}

        {/* CTA as Link (styled same as button) */}
        {ctaLink && (
          <Link
            className={`${styles.ctaButton} ${ctaStyle}`}
            to={ctaTo}
          >
            {ctaLink}
          </Link>
        )}
      </div>
    </div>
  );
};

export default Hero;
