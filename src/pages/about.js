import * as React from "react"
import aboutImage from "../images/about.jpg"
import "../styles/about.css"
import * as styles from "../styles/about.module.css"

import Layout from "../components/Layout/Layout"

const AboutPage = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="about-hero fade-in delay-1">
        <img src={aboutImage} alt="About Us" className="about-image" />
        <h1>About Us</h1>
      </section>

      {/* Main Content */}
      <section className="about-content">
        <h2 className="fade-in delay-1">About Taranbir Kaur</h2>
        <p className="fade-in delay-1">
          With over 10 years of experience in education, I bring a dynamic background
          spanning traditional and progressive learning environments, including
          competency-based education (CBE), adult education, and mental
          health-informed approaches rooted in yoga philosophy.
        </p>

        <p className="fade-in delay-2">
          My passion lies in creating inclusive, student-centered spaces that support
          both academic growth and emotional well-being. I specialize in designing and
          implementing curricula that meet diverse student needs while aligning with
          educational standards. I’ve led and managed diverse teams, collaborating
          with educators, staff, and community stakeholders to bring innovative,
          responsive programs to life.
        </p>

        <p className="fade-in delay-3">
          In 2024, after completing a 500-hour yoga teacher training in Rishikesh,
          India, I founded Yoga with TK to address a growing need I observed during
          my years in education: the lack of accessible wellness tools for children,
          especially in low-income communities.
        </p>

        <p className="fade-in delay-1">
          Through Yoga with TK, I now offer yoga and mindfulness classes for children
          as young as toddlers, focusing on lymphatic massage, breathwork, emotional
          regulation, movement, and sound healing.
        </p>

        <ul className={`${styles.customBullets} fade-in delay-2`}>
          <li>Lymphatic massage</li>
          <li>Breathwork</li>
          <li>Emotional regulation</li>
          <li>Movement</li>
          <li>Sound healing</li>
        </ul>

        <p className="fade-in delay-3">
          I’ve also led wellness workshops for educators and staff, equipping them
          with tools to reduce burnout and foster calm, mindful learning environments.
          My programs have been part of youth summer camps and school partnerships,
          making wellness more inclusive and community-centered.
        </p>

        {/* Section: My Core Focus */}
        <section className="about-section fade-in delay-1">
          <h2>My Core Focus</h2>
          <ul className={styles.customBullets}>
            <li>Designing student-centered, trauma-informed curricula</li>
            <li>Coaching educators on innovative and wellness-integrated instruction</li>
            <li>Leading professional development and team collaboration</li>
            <li>Program development and community engagement</li>
            <li>Building culturally responsive, inclusive learning spaces</li>
            <li>Advocating for equity in access to wellness and education</li>
          </ul>
          <p>
            Being multilingual (English, Punjabi, Hindi) allows me to connect with diverse
            communities in meaningful ways. Whether I’m leading a classroom, a team, or a
            yoga session, my mission remains the same: to empower individuals — especially
            young people — through education, wellness, and human connection.
          </p>
        </section>

        {/* Section: Why Choose Us */}
        <section className="about-section fade-in delay-2">
          <h2>Why Choose Us</h2>
          <p>
            At <strong>Earth & OM</strong>, students often say they arrive as individuals and leave
            as family. We’re more than just a yoga community — we’re a space where friendships
            are built, wellness tools are shared, and transformation begins.
          </p>
          <p>
            Our approach is heart-centered, trauma-informed, and culturally inclusive, making
            yoga and mindfulness accessible to all.
          </p>
        </section>

        {/* Section: Location */}
        <section className="about-section fade-in delay-3">
          <h2>Location</h2>
          <p>
            We are based in Toronto, Ontario, Canada, with classes and workshops offered in community
            spaces, schools, and online. Whether in person or virtual, our goal is to make yoga
            and mindfulness accessible, affordable, and inclusive for everyone.
          </p>
        </section>
      </section>
    </Layout>
  )
}

export default AboutPage
