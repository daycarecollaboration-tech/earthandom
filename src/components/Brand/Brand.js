import React from 'react';
import { navigate } from 'gatsby';
import * as styles from './Brand.module.css';

const Brand = () => {
  return (
    <div
      className={styles.root}
      role="presentation"
      onClick={() => navigate('/')}
      style={{ cursor: 'pointer' }}
    >
      {/* Using static logo */}
      <img 
        src="/logo.png"   // ✅ this comes from static/logo.png
        alt="Earth & Om Logo" 
        style={{ height: '200px' }} // adjust size as needed
      />
    </div>
  );
};

export default Brand;
