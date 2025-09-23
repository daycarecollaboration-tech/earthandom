import * as React from 'react';

import AttributeGrid from '../components/AttributeGrid';
import Container from '../components/Container';
import Hero from '../components/Hero';
import BlogPreviewGrid from '../components/BlogPreviewGrid';
import Highlight from '../components/Highlight';
import Layout from '../components/Layout/Layout';
import ProductCollectionGrid from '../components/ProductCollectionGrid';
import ProductCardGrid from '../components/ProductCardGrid';
import Quote from '../components/Quote';
import Title from '../components/Title';

import { generateMockBlogData, generateMockProductData } from '../helpers/mock';

import * as styles from './index.module.css';
import { Link } from 'gatsby';

const IndexPage = () => {
  const newArrivals = generateMockProductData(3, 'shirt');
  const blogData = generateMockBlogData(3);

  return (
    <Layout disablePaddingBottom>
      {/* Hero Container */}
      <Hero
        maxWidth={'500px'}
        image={'/my-hero.jpg'}
        title={'Earth&OM <br/> Breathe. Flow. Heal.'}
        subtitle={
          'Practice accessible, all levels classes that will empower you to be your best self on and off the mat. Yoga is more than just a physical practice, it is an experience that opens up a pathway to living a more mindful life.'
        }
        ctaLink={'Browse Classes'}   // ✅ use Link instead of navigate
        ctaTo={'/classes'}           // ✅ will always go to /classes
      />

      {/* Message Container */}
      <div className={styles.messageContainer}>
        <p>"Breathe. Flow. Heal."</p>
        <p>
          Discover the art of slowing down and finding presence — on and off the mat.
        </p>
      </div>

      {/* Highlight  */}
      <div className={styles.highlightContainer}>
        <Container size={'large'} fullMobile>
          <Highlight
            image={'/highlight.png'}
            altImage={'highlight image'}
            title={'Awaken Your True Self'}
            description={`Yoga is more than movement — it is the art of coming home to yourself. Each breath, each pose, is an invitation to wake up, reconnect, and remember who you truly are.

At Earth & OM, we believe yoga is not about perfection, but about presence. It’s about slowing down in a world that never stops, and learning to move, act, and breathe with awareness.

When we step on the mat, we discover that everything is connected — body, mind, and spirit. Yoga teaches us to live in harmony with ourselves and the world around us.

The journey itself is the reward. Every class is a chance to release, restore, and realign with what matters most.`}
            textLink={'shop now'}
            link={'/shop'}
          />
        </Container>
      </div>

      {/* Quote */}
      <Quote
        bgColor={'var(--standard-light-grey)'}
        title={'Earth & OM'}
        quote={
          '“We believe in two things: the pursuit of quality in everything we do, and looking after one another. Everything else should take care of itself.”'
        }
      />

      <AttributeGrid 
      
      items={[
    {
      icon: "🧘‍♀️",
      title: "Yoga for All Levels",
      description: "From beginner to advanced, our classes are designed for everyone."
    },
    {
      icon: "🌿",
      title: "Wellness & Balance",
      description: "Classes that nurture your body, mind, and spirit through holistic practices."
    },
    {
      icon: "🤝",
      title: "Community Connection",
      description: "Build lasting friendships and grow with a supportive yoga community."
    }
  ]}
      
      />
    </Layout>
  );
};

export default IndexPage;