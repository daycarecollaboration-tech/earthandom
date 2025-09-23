import * as React from "react";
import Layout from "../components/Layout/Layout";
import "../styles/classes.css"; // optional reuse of styling

const ThanksPage = () => {
  return (
    <Layout>
      <section className="classes-hero">
        <h1>Thank You!</h1>
        <p>
          Your message has been sent successfully. 🙏  
          We’ll get back to you as soon as possible.
        </p>
      </section>

      <section className="classes-info">
        <h2>What’s Next?</h2>
        <ul>
          <li>You’ll receive a confirmation email shortly.</li>
          <li>We usually respond within 24–48 hours.</li>
          <li>
            In the meantime, feel free to explore our{" "}
            <a href="/classes">Classes & Memberships</a>.
          </li>
        </ul>
      </section>
    </Layout>
  );
};

export default ThanksPage;