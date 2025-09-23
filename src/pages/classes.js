import * as React from "react";
import { navigate } from "gatsby";  // ✅ import navigate
import Layout from "../components/Layout/Layout";
import "../styles/classes.css";

const membershipData = [
  { label: "Single Class Pass (60–75 mins)", price: "$28", note: "Valid for 1 class" },
  { label: "5 Class Passes", price: "$113", note: "60–75 mins each | 3 Month Expiry, NO Extensions" },
  { label: "10 Class Passes", price: "$218", note: "60–75 mins each | 6 Month Expiry, NO Extensions" },
  { label: "20 Class Passes", price: "$379", note: "60–75 mins each | 12 Month Expiry, NO Extensions" },
  { label: "New Student 1 Month Unlimited", price: "$65", note: "Unlimited regular classes (60–75 mins)" },
  { label: "Student/Senior 1 Month Unlimited", price: "$100", note: "Unlimited regular classes (60–75 mins)" },
  { label: "1 Month Unlimited", price: "$160", note: "Unlimited regular classes (60–75 mins)" },
  { label: "Monthly Unlimited Auto Renew", price: "$140", note: "Unlimited regular classes (60–75 mins) | 4 Month Min. Commitment" },
  { label: "Senior/Student Auto Renew", price: "$85", note: "Unlimited regular classes (60–75 mins) | 4 Month Min. Commitment" },
  { label: "3 Months Unlimited", price: "$440", note: "Unlimited regular classes (60–75 mins)" },
  { label: "Student One Week Pass", price: "$50", note: "Unlimited access for 1 week | Out of town students ONLY" },
  { label: "6 Months Unlimited", price: "$885", note: "Unlimited regular classes (60–75 mins)" },
  { label: "1 Year Unlimited", price: "$1770", note: "Unlimited regular classes (60–75 mins)" }
];

const ClassesPage = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="classes-hero">
        <h1>Classes & Memberships</h1>
        <p>
          Choose the pass that fits your lifestyle. Flexible memberships for every yogi.
        </p>
      </section>

      {/* Membership Grid */}
      <section className="classes-memberships">
        <h2>Passes & Memberships</h2>
        <div className="membership-grid">
          {membershipData.map((item, idx) => (
            <div key={idx} className="membership-card">
              <h3>{item.label}</h3>
              <p className="price">{item.price}</p>
              {item.note && <p className="note">{item.note}</p>}
              {/* ✅ Redirect to Contact Page */}
              <button onClick={() => navigate("/contact")}>
                Buy Now
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Info Section */}
      <section className="classes-info">
        <h2>Important Information</h2>
        <ul>
          <li>All passes are <strong>non-refundable and non-transferable</strong>.</li>
          <li>Prices listed do not include HST (13%).</li>
          <li><strong>Class Duration:</strong> Most classes are 60 minutes, with select evening/weekend sessions at 75–90 minutes.</li>
          <li>Student & Senior discounts available with valid ID.</li>
          <li>Auto-renew memberships require a minimum 4-month commitment.</li>
          <li>Class passes include free mat rentals (first come, first served).</li>
          <li>Please arrive 10 minutes early to settle in before class.</li>
          <li>Late entry is not permitted to maintain a peaceful space.</li>
          <li>Please silence all devices to respect the studio environment.</li>
        </ul>
      </section>
    </Layout>
  );
};

export default ClassesPage;