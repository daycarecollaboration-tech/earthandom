import React from 'react';
import { Link } from 'gatsby';

import Layout from '../../components/Layout/Layout';
import Hero from '../../components/Hero';
import * as styles from './index.module.css';
import { toOptimizedImage } from '../../helpers/general';

const BlogPage = () => {
  return (
    <Layout disablePaddingBottom>
      <div className={styles.root}>
        {/* Hero rectangle with "Coming Soon" */}
        <Hero
          maxWidth={'500px'}
          image={toOptimizedImage('/blogCover.png')}
          title={'Coming Soon'}
          subtitle={'Our blog is under construction. In the meantime, explore our yoga offerings.'}
          ctaLink={'Explore Our Classes'}
          ctaTo={'/classes'}
        />
      </div>
    </Layout>
  );
};

export default BlogPage;
