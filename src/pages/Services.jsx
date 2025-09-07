import React from "react";

export default function Services() {
  return (
    <section style={{ padding: "2rem 4vw", margin: "0 auto", maxWidth: "100%" }}>
      <h2>Portfolio of Services Offered</h2>
      <div style={{ backgroundColor: "#e1f5e8", borderRadius: "9px", padding: "1rem", marginBottom: "1rem" }}>
        <h3>School Children</h3>
        <ul>
          <li>Foundation Courses: Maths, Physics, Chemistry, Computer Science, Biology, English, and others</li>
          <li>Skill Development: Abacus, English, Aptitude, Programming for Kids</li>
        </ul>
      </div>
      <div style={{ backgroundColor: "#e1f5e8", borderRadius: "9px", padding: "1rem", marginBottom: "1rem" }}>
        <h3>College Students</h3>
        <ul>
          <li>Technical Skills: Programming, Data Structures & Algorithms, Data Analytics</li>
          <li>Soft Skills: English, Public Speaking, Aptitude for real-world issues</li>
          <li>Projects/Research: Guidance & support on request</li>
        </ul>
      </div>
      <div style={{ backgroundColor: "#e1f5e8", borderRadius: "9px", padding: "1rem", marginBottom: "1rem" }}>
        <h3>Corporates</h3>
        <ul>
          <li>Skill Enhancement Training</li>
          <li>Team Building Workshops</li>
        </ul>
      </div>
      <div style={{ backgroundColor: "#e1f5e8", borderRadius: "9px", padding: "1rem" }}>
        <h3>Partner With ST3</h3>
        <p>
          We collaborate with individuals, educational institutions, and businesses to deliver custom training and workshops.
        </p>
      </div>
    </section>
  );
}
