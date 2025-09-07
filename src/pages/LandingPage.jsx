import React from "react";
import ContentWrapper from "./../components/ContentWrapper";

export default function LandingPage() {
  // Smooth scroll function
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <main
      style={{
        background: "linear-gradient(135deg, #f8fffe 0%, #f1f8f5 100%)",
        color: "#1e3a2e",
        fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
        minHeight: "100vh",
        padding: 0,
        lineHeight: 1.6,
        width: "100%",
        maxWidth: "100vw",
        overflow: "hidden",
      }}
    >
      {/* HERO/INTRO */}
      <section
        style={{
          background: "linear-gradient(135deg, #e8f5e8 0%, #d4f1d4 50%, #c0edc0 100%)",
          position: "relative",
          overflow: "hidden",
          padding: "6rem 0 5rem 0",
          width: "100%",
          maxWidth: "100%",
          margin: "0 auto",
          boxShadow: "0 10px 50px rgba(23, 155, 74, 0.08)",
        }}
      >
        {/* Decorative background elements */}
        <div
          style={{
            position: "absolute",
            top: "-20%",
            right: "-10%",
            width: "400px",
            height: "400px",
            background: "radial-gradient(circle, rgba(23, 155, 74, 0.06) 0%, transparent 70%)",
            borderRadius: "50%",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-15%",
            left: "-5%",
            width: "300px",
            height: "300px",
            background: "radial-gradient(circle, rgba(65, 199, 101, 0.04) 0%, transparent 70%)",
            borderRadius: "50%",
            pointerEvents: "none",
          }}
        />
        
        <ContentWrapper style={{ maxWidth: "900px", textAlign: "center", position: "relative", zIndex: 1 }}>
          <div
            style={{
              display: "inline-block",
              background: "rgba(23, 155, 74, 0.08)",
              color: "#179b4a",
              padding: "0.5rem 1.2rem",
              borderRadius: "25px",
              fontSize: "0.9rem",
              fontWeight: "600",
              marginBottom: "1.5rem",
              border: "1px solid rgba(23, 155, 74, 0.2)",
            }}
          >
            Transform Your Future Today
          </div>
          
          <h1
            style={{
              fontSize: "clamp(2.5rem, 5vw, 3.8rem)",
              fontWeight: "800",
              color: "#179b4a",
              marginBottom: "1rem",
              letterSpacing: "-2px",
              lineHeight: 1.1,
              background: "linear-gradient(135deg, #179b4a 0%, #41c765 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Success Through Training & Transformation
          </h1>
          
          <p
            style={{
              fontSize: "1.25rem",
              maxWidth: "650px",
              margin: "0 auto 3rem auto",
              color: "#2d5a3d",
              fontWeight: "400",
              lineHeight: 1.7,
              opacity: 0.9,
            }}
          >
            Unlock your potential with ST3 – expert-led courses, personalized
            transformation, and career-focused skill-building.
          </p>
          
          {/* Hero Image Placeholder with modern design */}
          <div
            style={{
              width: "300px",
              height: "200px",
              background: "#e5e5e5",
              borderRadius: "20px",
              boxShadow: "0 25px 50px rgba(23, 155, 74, 0.15)",
              margin: "0 auto 3.5rem",
              border: "1px solid rgba(23, 155, 74, 0.1)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: "20px",
                left: "20px",
                right: "20px",
                height: "8px",
                background: "linear-gradient(90deg, #179b4a 0%, #41c765 100%)",
                borderRadius: "4px",
              }}
            />
            <div
              style={{
                fontSize: "1rem",
                color: "#999",
                fontWeight: "500",
              }}
            >
              Hero Image
            </div>
          </div>
          
          <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", justifyContent: "center", alignItems: "center" }}>
            <button
              onClick={() => scrollToSection('courses')}
              style={{
                background: "linear-gradient(135deg, #179b4a 0%, #41c765 100%)",
                color: "#fff",
                padding: "1rem 2.5rem",
                fontWeight: "600",
                borderRadius: "50px",
                border: "none",
                fontSize: "1.1rem",
                boxShadow: "0 10px 30px rgba(23, 155, 74, 0.3)",
                transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                cursor: "pointer",
                transform: "translateY(0)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow = "0 15px 40px rgba(23, 155, 74, 0.4)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 10px 30px rgba(23, 155, 74, 0.3)";
              }}
            >
              Explore Courses
            </button>
            
            <button
              onClick={() => scrollToSection('about')}
              style={{
                background: "transparent",
                color: "#179b4a",
                padding: "1rem 2.5rem",
                fontWeight: "600",
                borderRadius: "50px",
                fontSize: "1.1rem",
                border: "2px solid #179b4a",
                transition: "all 0.3s ease",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#179b4a";
                e.currentTarget.style.color = "#fff";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.color = "#179b4a";
              }}
            >
              Learn More
            </button>
          </div>
        </ContentWrapper>
      </section>

      {/* WHO WE ARE */}
      <section
        id="about"
        style={{
          padding: "6rem 0",
          width: "100%",
          maxWidth: "100%",
          margin: "0 auto",
        }}
      >
        <ContentWrapper>
          <div
            style={{
              background: "#fff",
              borderRadius: "24px",
              boxShadow: "0 5px 40px rgba(23, 155, 74, 0.08)",
              padding: "4rem 3rem",
              border: "1px solid rgba(23, 155, 74, 0.06)",
            }}
          >
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "4rem",
                alignItems: "center",
              }}
            >
              <div style={{ flex: "1 1 400px", minWidth: 0 }}>
                <div
                  style={{
                    display: "inline-block",
                    background: "rgba(23, 155, 74, 0.1)",
                    color: "#179b4a",
                    padding: "0.4rem 1rem",
                    borderRadius: "20px",
                    fontSize: "0.85rem",
                    fontWeight: "600",
                    marginBottom: "1rem",
                  }}
                >
                  ABOUT US
                </div>
                
                <h2
                  style={{
                    color: "#179b4a",
                    fontWeight: 800,
                    fontSize: "2.5rem",
                    marginTop: 0,
                    marginBottom: "1.5rem",
                    letterSpacing: "-1px",
                    lineHeight: 1.2,
                  }}
                >
                  Who We Are
                </h2>
                
                <p style={{ fontSize: "1.15rem", lineHeight: 1.7, color: "#2d5a3d", marginBottom: "2.5rem" }}>
                  We are a team of teachers, career coaches, and advisors passionate
                  about making learning fun and transforming individuals & technology
                  enthusiasts into skilled professionals.
                </p>

                <div style={{ display: "grid", gap: "2rem", marginBottom: "2rem" }}>
                  <div
                    style={{
                      background: "rgba(23, 155, 74, 0.02)",
                      padding: "1.5rem",
                      borderRadius: "16px",
                      borderLeft: "4px solid #179b4a",
                    }}
                  >
                    <h3
                      style={{
                        color: "#179b4a",
                        fontWeight: "700",
                        fontSize: "1.2rem",
                        marginTop: 0,
                        marginBottom: "0.8rem",
                        display: "flex",
                        alignItems: "center",
                        gap: "0.5rem",
                      }}
                    >
                      Mission
                    </h3>
                    <p style={{ marginBottom: 0, color: "#2d5a3d", lineHeight: 1.6 }}>
                      Encouraging individuals to reach their full potential with
                      personalized learning and career growth plans.
                    </p>
                  </div>

                  <div
                    style={{
                      background: "rgba(65, 199, 101, 0.02)",
                      padding: "1.5rem",
                      borderRadius: "16px",
                      borderLeft: "4px solid #41c765",
                    }}
                  >
                    <h3
                      style={{
                        color: "#41c765",
                        fontWeight: "700",
                        fontSize: "1.2rem",
                        marginTop: 0,
                        marginBottom: "0.8rem",
                        display: "flex",
                        alignItems: "center",
                        gap: "0.5rem",
                      }}
                    >
                      Vision
                    </h3>
                    <p style={{ marginBottom: 0, color: "#2d5a3d", lineHeight: 1.6 }}>
                      Creating a thriving space for continuous growth and transformational
                      education.
                    </p>
                  </div>
                </div>
              </div>

              <div
                style={{
                  flex: "1 1 320px",
                  minWidth: "280px",
                  height: "320px",
                  background: "#e5e5e5",
                  borderRadius: "20px",
                  boxShadow: "0 20px 60px rgba(23, 155, 74, 0.12)",
                  flexShrink: 0,
                  position: "relative",
                  overflow: "hidden",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <div
                  style={{
                    fontSize: "1rem",
                    color: "#999",
                    fontWeight: "500",
                  }}
                >
                  About Image
                </div>
              </div>
            </div>

            {/* CORE VALUES */}
            <div style={{ marginTop: "4rem", paddingTop: "3rem", borderTop: "1px solid rgba(23, 155, 74, 0.1)" }}>
              <h3
                style={{
                  color: "#179b4a",
                  fontWeight: 800,
                  fontSize: "2rem",
                  marginBottom: "2rem",
                  textAlign: "center",
                }}
              >
                Core Values
              </h3>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                  gap: "1.5rem",
                  maxWidth: "900px",
                  margin: "0 auto",
                }}
              >
                {[
                  "Authenticity", "Compassion", "Confidentiality", "Empathy", 
                  "Empowerment", "Excellence", "Growth Mindset", "Integrity", "Respect"
                ].map((value, index) => (
                  <div
                    key={value}
                    style={{
                      background: "rgba(23, 155, 74, 0.03)",
                      padding: "1rem 1.5rem",
                      borderRadius: "12px",
                      textAlign: "center",
                      border: "1px solid rgba(23, 155, 74, 0.08)",
                      transition: "all 0.3s ease",
                      cursor: "default",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = "rgba(23, 155, 74, 0.08)";
                      e.currentTarget.style.transform = "translateY(-2px)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = "rgba(23, 155, 74, 0.03)";
                      e.currentTarget.style.transform = "translateY(0)";
                    }}
                  >
                    <span style={{ color: "#179b4a", fontWeight: "600", fontSize: "1.05rem" }}>
                      {value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </ContentWrapper>
      </section>

      {/* WHY ST3 */}
      <section
        style={{
          padding: "6rem 0",
          width: "100%",
          maxWidth: "100%",
          margin: "0 auto",
          background: "rgba(23, 155, 74, 0.02)",
        }}
      >
        <ContentWrapper>
          <div
            style={{
              background: "#fff",
              borderRadius: "24px",
              boxShadow: "0 5px 40px rgba(23, 155, 74, 0.08)",
              padding: "4rem 3rem",
              textAlign: "center",
              border: "1px solid rgba(23, 155, 74, 0.06)",
            }}
          >
            <div
              style={{
                display: "inline-block",
                background: "rgba(23, 155, 74, 0.1)",
                color: "#179b4a",
                padding: "0.4rem 1rem",
                borderRadius: "20px",
                fontSize: "0.85rem",
                fontWeight: "600",
                marginBottom: "1rem",
              }}
            >
              WHY CHOOSE US
            </div>
            
            <h2
              style={{
                color: "#179b4a",
                fontWeight: 800,
                fontSize: "2.5rem",
                marginTop: 0,
                marginBottom: "3rem",
                letterSpacing: "-1px",
              }}
            >
              Why ST3?
            </h2>
            
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                gap: "2rem",
                maxWidth: "900px",
                margin: "0 auto",
              }}
            >
              {[
                { text: "Personalized guidance & career plans" },
                { text: "Hands-on, practical learning" },
                { text: "Mentorship from dedicated educators & advisors" },
                { text: "Focus on both knowledge and personal growth" },
                { text: "Collaboration with schools, colleges, corporates" }
              ].map(({ text }, index) => (
                <div
                  key={index}
                  style={{
                    background: "rgba(23, 155, 74, 0.02)",
                    padding: "2rem 1.5rem",
                    borderRadius: "16px",
                    border: "1px solid rgba(23, 155, 74, 0.08)",
                    transition: "all 0.3s ease",
                    textAlign: "left",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "rgba(23, 155, 74, 0.05)";
                    e.currentTarget.style.transform = "translateY(-3px)";
                    e.currentTarget.style.boxShadow = "0 10px 30px rgba(23, 155, 74, 0.1)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "rgba(23, 155, 74, 0.02)";
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  <p style={{ fontSize: "1.1rem", color: "#2d5a3d", margin: 0, fontWeight: "500" }}>
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </ContentWrapper>
      </section>

      {/* SERVICES */}
      <section
        style={{
          padding: "6rem 0",
          width: "100%",
          maxWidth: "100%",
          margin: "0 auto",
          background: "linear-gradient(135deg, #f8fffe 0%, #f1f8f5 100%)",
        }}
      >
        <ContentWrapper>
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <div
              style={{
                display: "inline-block",
                background: "rgba(23, 155, 74, 0.1)",
                color: "#179b4a",
                padding: "0.4rem 1rem",
                borderRadius: "20px",
                fontSize: "0.85rem",
                fontWeight: "600",
                marginBottom: "1rem",
              }}
            >
              OUR SERVICES
            </div>
            
            <h2
              style={{
                color: "#179b4a",
                fontWeight: 800,
                fontSize: "2.8rem",
                marginBottom: "1.5rem",
                letterSpacing: "-1px",
              }}
            >
              Portfolio of Services Offered
            </h2>
            
            <p
              style={{
                fontSize: "1.2rem",
                color: "#2d5a3d",
                maxWidth: "600px",
                margin: "0 auto",
                opacity: 0.8,
              }}
            >
              Comprehensive educational solutions tailored for different learning stages
            </p>
          </div>
          
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "2.5rem",
              maxWidth: "1200px",
              margin: "0 auto",
            }}
          >
            {[
              {
                title: "School Children",
                description: "Foundation & Skill Courses: Maths, Sciences, English, Abacus, Programming for Kids, Aptitude.",
                color: "#179b4a",
              },
              {
                title: "College Students",
                description: "Technical Skills: Programming, Data Structures, Analytics; Soft Skills: Public Speaking, Aptitude; Project Guidance.",
                color: "#41c765",
              },
              {
                title: "Corporates",
                description: "Skill Enhancement and Team Building Workshops.",
                color: "#2d7a3f",
              },
              {
                title: "Partnerships",
                description: "Collaborate with us to create custom programs for schools and companies.",
                color: "#5dd47b",
              },
            ].map(({ title, description, color }) => (
              <div
                key={title}
                style={{
                  background: "#fff",
                  borderRadius: "20px",
                  padding: "3rem 2.5rem",
                  boxShadow: "0 8px 40px rgba(23, 155, 74, 0.08)",
                  border: "1px solid rgba(23, 155, 74, 0.06)",
                  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                  position: "relative",
                  overflow: "hidden",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-8px)";
                  e.currentTarget.style.boxShadow = "0 20px 60px rgba(23, 155, 74, 0.15)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 8px 40px rgba(23, 155, 74, 0.08)";
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: "-10px",
                    right: "-10px",
                    width: "60px",
                    height: "60px",
                    background: `linear-gradient(135deg, ${color}20, ${color}10)`,
                    borderRadius: "50%",
                  }}
                />
                
                <h3
                  style={{
                    color: color,
                    marginTop: 0,
                    fontWeight: 700,
                    marginBottom: "1.2rem",
                    fontSize: "1.4rem",
                  }}
                >
                  {title}
                </h3>
                
                <p
                  style={{
                    fontSize: "1.1rem",
                    lineHeight: 1.6,
                    color: "#2d5a3d",
                    margin: 0,
                  }}
                >
                  {description}
                </p>
              </div>
            ))}
          </div>
        </ContentWrapper>
      </section>

      {/* COURSES */}
      <section
        id="courses"
        style={{
          padding: "6rem 0 8rem 0",
          background: "rgba(23, 155, 74, 0.02)",
        }}
      >
        <ContentWrapper>
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <div
              style={{
                display: "inline-block",
                background: "rgba(23, 155, 74, 0.1)",
                color: "#179b4a",
                padding: "0.4rem 1rem",
                borderRadius: "20px",
                fontSize: "0.85rem",
                fontWeight: "600",
                marginBottom: "1rem",
              }}
            >
              EXPLORE LEARNING
            </div>
            
            <h2
              style={{
                color: "#179b4a",
                fontWeight: 800,
                fontSize: "3rem",
                marginBottom: "1.5rem",
                letterSpacing: "-1px",
              }}
            >
              Courses
            </h2>
            
            <p
              style={{
                fontSize: "1.2rem",
                color: "#2d5a3d",
                maxWidth: "600px",
                margin: "0 auto",
                opacity: 0.8,
              }}
            >
              Choose from our comprehensive range of courses designed to accelerate your growth
            </p>
          </div>
          
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
              gap: "3rem",
              maxWidth: "1200px",
              margin: "0 auto",
            }}
          >
            {[
              {
                title: "Foundation Courses (School Children)",
                description: "Maths, Physics, Chemistry, Computer Science, Biology, English, and more.",
                gradient: "linear-gradient(135deg, #179b4a, #41c765)",
              },
              {
                title: "Technical (College & Entry Professionals)",
                description: "Software Development, Front-End Development, UI/UX, Data Analytics, Supply Chain.",
                gradient: "linear-gradient(135deg, #41c765, #5dd47b)",
              },
              {
                title: "Soft Skills & Career Development",
                description: "Spoken English, Public Speaking, Aptitude, Projects and Personal Development.",
                gradient: "linear-gradient(135deg, #2d7a3f, #179b4a)",
              },
            ].map(({ title, description, gradient }) => (
              <div
                key={title}
                style={{
                  background: "#fff",
                  borderRadius: "24px",
                  padding: "0",
                  boxShadow: "0 12px 50px rgba(23, 155, 74, 0.12)",
                  overflow: "hidden",
                  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                  border: "1px solid rgba(23, 155, 74, 0.06)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-10px) scale(1.02)";
                  e.currentTarget.style.boxShadow = "0 25px 80px rgba(23, 155, 74, 0.2)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0) scale(1)";
                  e.currentTarget.style.boxShadow = "0 12px 50px rgba(23, 155, 74, 0.12)";
                }}
              >
                <div
                  style={{
                    height: "120px",
                    background: "#e5e5e5",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      fontSize: "1rem",
                      color: "#999",
                      fontWeight: "500",
                    }}
                  >
                    Course Image
                  </div>
                </div>
                
                <div style={{ padding: "2rem 2.5rem 2.5rem" }}>
                  <h3
                    style={{
                      color: "#179b4a",
                      fontSize: "1.4rem",
                      fontWeight: 700,
                      marginTop: 0,
                      marginBottom: "1rem",
                      lineHeight: 1.3,
                    }}
                  >
                    {title}
                  </h3>
                  
                  <p
                    style={{
                      fontSize: "1.1rem",
                      marginTop: 0,
                      marginBottom: 0,
                      color: "#2d5a3d",
                      lineHeight: 1.6,
                    }}
                  >
                    {description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </ContentWrapper>
      </section>
    </main>
  );
}