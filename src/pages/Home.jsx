import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <section style={{ padding: "4rem 4vw 2rem", textAlign: "center" }}>
        <h1>Success Through Training & Transformation</h1>
        <p>
          Unlock your potential with ST3 – expert-led courses, personalized transformation, and career-focused skill-building.
        </p>
        <div
          style={{
            width: "180px",
            height: "220px",
            background: "#e1f5e8",
            margin: "2rem auto",
            borderRadius: "12px"
          }}
        />
        <Link
          to="/courses"
          style={{
            background:
              "linear-gradient(90deg, #179b4a 40%, #41c765 100%)",
            color: "#fff",
            padding: "0.8rem 2.2rem",
            fontWeight: "bold",
            borderRadius: "24px",
            textDecoration: "none",
            boxShadow: "0 2px 4px #179b4a26"
          }}
        >
          Explore Courses
        </Link>
      </section>

      <section style={{ backgroundColor: "#214734", color: "#fff", padding: "2.5rem 4vw", textAlign: "center" }}>
        <h2 style={{ marginTop: 0 }}>Our Services</h2>
        <p>
          Empowering school children, college students, and corporates with foundational and advanced skills, plus personal development for real-world success.
        </p>
        <div
          style={{
            display: "flex",
            gap: "1.5rem",
            flexWrap: "wrap",
            justifyContent: "center",
            marginTop: "2rem"
          }}
        >
          {["School Children", "College Students", "Corporates"].map((item) => (
            <div
              key={item}
              style={{
                width: "260px",
                backgroundColor: "#e1f5e8",
                color: "#214734",
                borderRadius: "14px",
                padding: "1.8rem 1.1rem",
                boxShadow: "0 1px 7px #145c2b22"
              }}
            >
              <div
                style={{
                  height: "80px",
                  backgroundColor: "#cbf0d2",
                  borderRadius: "7px",
                  marginBottom: "1.3rem"
                }}
              />
              <strong>{item}</strong>
              <p style={{ fontSize: "0.98rem", marginTop: "0.2rem" }}>
                {item === "School Children" && "Foundation & Skill Courses"}
                {item === "College Students" && "Technical & Soft Skills, Projects"}
                {item === "Corporates" && "Skill Enhancement, Team Building"}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
