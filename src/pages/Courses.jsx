import React from "react";

export default function Courses() {
  return (
    <section style={{ padding: "2rem 4vw", margin: "0 auto", maxWidth: "100%" }}>
      <h2>Courses</h2>

      <div style={{ backgroundColor: "#e1f5e8", borderRadius: "9px", padding: "1rem", marginBottom: "1rem", display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <div style={{ width: "100px", height: "100px", background: "#cbf0d2", borderRadius: "10px" }} />
        <div>
          <h3>Foundation Courses (School Children)</h3>
          <p>Maths, Physics, Chemistry, Computer Science, Biology, English, and more.</p>
        </div>
      </div>

      <div style={{ backgroundColor: "#e1f5e8", borderRadius: "9px", padding: "1rem", marginBottom: "1rem", display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <div style={{ width: "100px", height: "100px", background: "#cbf0d2", borderRadius: "10px" }} />
        <div>
          <h3>Technical (College & Entry Professionals)</h3>
          <ul>
            <li>Software Development</li>
            <li>Front-End Development</li>
            <li>UI/UX</li>
            <li>Data Analytics</li>
            <li>Supply Chain (Theory & Practice)</li>
          </ul>
        </div>
      </div>

      <div style={{ backgroundColor: "#e1f5e8", borderRadius: "9px", padding: "1rem", marginBottom: "1rem", display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <div style={{ width: "100px", height: "100px", background: "#cbf0d2", borderRadius: "10px" }} />
        <div>
          <h3>Soft Skills & Career Development</h3>
          <p>Spoken English, Public Speaking, Aptitude, Projects/Research guidance, and Personal Development.</p>
        </div>
      </div>
    </section>
  );
}
