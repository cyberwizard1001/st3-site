import React from "react";

export default function About() {
  return (
    <section style={{ padding: "2rem 4vw", margin: "0 auto", maxWidth: "100%" }}>
      <h2>Who We Are</h2>
      <div
        style={{
          width: "170px",
          height: "120px",
          background: "#e1f5e8",
          borderRadius: "9px",
          margin: "16px 0"
        }}
      />
      <p>
        We are a team of teachers, career coaches, and advisors with a passion
        for making learning fun and helping transform individuals and technology enthusiasts (students & professionals at the start of their careers) into technology professionals.
      </p>
      <h3>Mission</h3>
      <p>
        To encourage individuals to achieve their full potential by building a
        career and personal brand with clarity and confidence, through
        personalized learning and growth plans.
      </p>
      <h3>Vision</h3>
      <p>
        Creating a place where individuals thrive, grow, and achieve their goals
        through coaching and continuous improvement.
      </p>
      <h3>Core Values</h3>
      <ul>
        <li>Authenticity</li>
        <li>Compassion</li>
        <li>Confidentiality</li>
        <li>Empathy</li>
        <li>Empowerment</li>
        <li>Excellence</li>
        <li>Growth Mindset</li>
        <li>Integrity</li>
        <li>Respect</li>
      </ul>
    </section>
  );
}
