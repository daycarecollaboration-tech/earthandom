import { Link } from 'gatsby';
import React from 'react';
import * as styles from './Highlight.module.css';
import { toOptimizedImage } from '../../helpers/general';

const Highlight = (props) => {
  const {
    image,
    altImage,
    miniImage,
    miniImageAlt,
    title,
    description,
  } = props;

  return (
    <div className={styles.root}>
      <img
        alt={altImage}
        src={toOptimizedImage(image)}
        className={`${styles.highlightImage} ${styles.fadeIn}`}
      />
      <div className={`${styles.contentContainer} ${styles.fadeInUp}`}>
        <h3>{title}</h3>

        <p className={styles.lead}>
          Yoga is more than movement — it is the art of coming home to yourself. 
          Each breath, each pose, is an invitation to wake up, reconnect, 
          and remember who you truly are.
        </p>

        <p>
          At <strong>Earth & OM</strong>, we believe yoga is not about perfection, 
          but about presence. It’s about slowing down in a world that never stops, 
          and learning to move, act, and breathe with awareness.
        </p>

        <p>
          On the mat, we discover that everything is connected — body, mind, and spirit. 
          Yoga teaches us to live in harmony with ourselves and the world around us.
        </p>

        <p>
          The journey itself is the reward. Every class is a chance to release, restore, 
          and realign with what matters most.
        </p>

        {/* ✅ Hardcoded button instead of pulling from props */}
        <Link to="/classes" className={styles.ctaButton}>
          Explore Classes
        </Link>

        {miniImage && (
          <img
            className={`${styles.miniImage} ${styles.fadeIn}`}
            alt={miniImageAlt || 'mini highlight'}
            src={toOptimizedImage(miniImage)}
          />
        )}
      </div>
    </div>
  );
};

export default Highlight;
