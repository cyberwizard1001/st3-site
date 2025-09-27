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
        background: "linear-gradient(135deg, #fafbff 0%, #f8fafc 100%)",
        color: "#334155",
        fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
        minHeight: "100vh",
        padding: 0,
        lineHeight: 1.6,
        width: "100%",
        maxWidth: "100vw",
        overflowX: "hidden",
      }}
    >
      {/* HERO/INTRO */}
      <section
        style={{
          background: "linear-gradient(135deg, #f0fdf4 0%, #ecfdf5 50%, #f0f9ff 100%)",
          position: "relative",
          overflow: "hidden",
          padding: "8rem 0 6rem 0",
          width: "100%",
          maxWidth: "100%",
          margin: "0 auto",
          borderBottom: "1px solid rgba(15, 118, 110, 0.08)",
        }}
      >
        {/* Decorative background elements */}
        <div
          style={{
            position: "absolute",
            top: "-10%",
            right: "-5%",
            width: "500px",
            height: "500px",
            background: "radial-gradient(circle, rgba(15, 118, 110, 0.03) 0%, transparent 60%)",
            borderRadius: "50%",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-20%",
            left: "-10%",
            width: "400px",
            height: "400px",
            background: "radial-gradient(circle, rgba(34, 197, 94, 0.02) 0%, transparent 70%)",
            borderRadius: "50%",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "40%",
            right: "10%",
            width: "100px",
            height: "100px",
            background: "linear-gradient(135deg, rgba(15, 118, 110, 0.1), rgba(34, 197, 94, 0.05))",
            borderRadius: "50%",
            pointerEvents: "none",
            filter: "blur(1px)",
          }}
        />
        
        <ContentWrapper style={{ maxWidth: "1000px", textAlign: "center", position: "relative", zIndex: 1 }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              background: "linear-gradient(135deg, rgba(15, 118, 110, 0.08), rgba(34, 197, 94, 0.06))",
              color: "#0f766e",
              padding: "0.75rem 1.5rem",
              borderRadius: "30px",
              fontSize: "0.875rem",
              fontWeight: "600",
              marginBottom: "2rem",
              border: "1px solid rgba(15, 118, 110, 0.15)",
              letterSpacing: "0.5px",
              textTransform: "uppercase",
              backdropFilter: "blur(10px)",
            }}
          >
            <svg
              style={{ marginRight: "0.5rem", width: "16px", height: "16px" }}
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
            </svg>
            Transform Your Future Today
          </div>
          
          <h1
            style={{
              fontSize: "clamp(2.8rem, 6vw, 4.5rem)",
              fontWeight: "700",
              color: "#1e293b",
              marginBottom: "1.5rem",
              letterSpacing: "-1.5px",
              lineHeight: 1.1,
              background: "linear-gradient(135deg, #0f766e 0%, #10b981 70%, #22c55e 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              fontFamily: "'Playfair Display', Georgia, 'Times New Roman', serif",
            }}
          >
            Success Through Training & Transformation
          </h1>
          
          <p
            style={{
              fontSize: "1.3rem",
              maxWidth: "700px",
              margin: "0 auto 3.5rem auto",
              color: "#475569",
              fontWeight: "400",
              lineHeight: 1.65,
              opacity: 0.9,
              fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
            }}
          >
            Unlock your potential with ST3 – expert-led courses, personalized
            transformation, and career-focused skill-building that drives real results.
          </p>
          
          {/* Hero Image Placeholder */}
          <div
            style={{
              width: "350px",
              height: "220px",
              background: "#f1f5f9",
              borderRadius: "16px",
              boxShadow: "0 8px 32px rgba(15, 118, 110, 0.08)",
              margin: "0 auto 4rem",
              border: "1px solid rgba(226, 232, 240, 0.8)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                fontSize: "1rem",
                color: "#64748b",
                fontWeight: "500",
              }}
            >
              Hero Image
            </div>
          </div>
          
          <div style={{ display: "flex", flexWrap: "wrap", gap: "1.5rem", justifyContent: "center", alignItems: "center" }}>
            <button
              onClick={() => scrollToSection('courses')}
              style={{
                background: "linear-gradient(135deg, #0f766e 0%, #10b981 100%)",
                color: "#ffffff",
                padding: "1.25rem 3rem",
                fontWeight: "600",
                borderRadius: "50px",
                border: "none",
                fontSize: "1.1rem",
                boxShadow: "0 8px 32px rgba(15, 118, 110, 0.3), 0 2px 8px rgba(15, 118, 110, 0.2)",
                transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                cursor: "pointer",
                transform: "translateY(0)",
                fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
                letterSpacing: "0.25px",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-1px)";
                e.currentTarget.style.boxShadow = "0 8px 24px rgba(15, 118, 110, 0.25)";
                e.currentTarget.style.background = "linear-gradient(135deg, #0d9488 0%, #059669 100%)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 8px 32px rgba(15, 118, 110, 0.3), 0 2px 8px rgba(15, 118, 110, 0.2)";
                e.currentTarget.style.background = "linear-gradient(135deg, #0f766e 0%, #10b981 100%)";
              }}
            >
              Explore Courses
            </button>
            
            <button
              onClick={() => scrollToSection('about')}
              style={{
                background: "rgba(15, 118, 110, 0.04)",
                color: "#0f766e",
                padding: "1.25rem 3rem",
                fontWeight: "600",
                borderRadius: "50px",
                fontSize: "1.1rem",
                border: "2px solid rgba(15, 118, 110, 0.2)",
                transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                cursor: "pointer",
                fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
                letterSpacing: "0.25px",
                backdropFilter: "blur(10px)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#0f766e";
                e.currentTarget.style.color = "#ffffff";
                e.currentTarget.style.boxShadow = "0 4px 12px rgba(15, 118, 110, 0.2)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(15, 118, 110, 0.04)";
                e.currentTarget.style.color = "#0f766e";
                e.currentTarget.style.boxShadow = "none";
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
          padding: "8rem 0 10rem 0",
          width: "100%",
          maxWidth: "100%",
          margin: "0 auto",
          background: "linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)",
          position: "relative",
        }}
      >
        {/* Background decoration */}
        <div
          style={{
            position: "absolute",
            bottom: "10%",
            right: "-5%",
            width: "400px",
            height: "400px",
            background: "radial-gradient(circle, rgba(34, 197, 94, 0.02) 0%, transparent 70%)",
            borderRadius: "50%",
            pointerEvents: "none",
          }}
        />
        
        <ContentWrapper>
          <div
            style={{
              background: "#ffffff",
              borderRadius: "24px",
              boxShadow: "0 8px 40px rgba(0, 0, 0, 0.04), 0 2px 12px rgba(0, 0, 0, 0.02)",
              padding: "5rem 4rem",
              border: "1px solid rgba(226, 232, 240, 0.6)",
              position: "relative",
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
              <div style={{ flex: "1 1 450px", minWidth: 0 }}>
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    background: "linear-gradient(135deg, rgba(15, 118, 110, 0.08), rgba(34, 197, 94, 0.06))",
                    color: "#0f766e",
                    padding: "0.75rem 1.5rem",
                    borderRadius: "30px",
                    fontSize: "0.875rem",
                    fontWeight: "600",
                    marginBottom: "2rem",
                    border: "1px solid rgba(15, 118, 110, 0.12)",
                    letterSpacing: "0.5px",
                    textTransform: "uppercase",
                  }}
                >
                  <svg
                    style={{ marginRight: "0.5rem", width: "16px", height: "16px" }}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                  About Us
                </div>
                
                <h2
                  style={{
                    background: "linear-gradient(135deg, #0f766e 0%, #10b981 70%, #22c55e 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    fontWeight: 700,
                    fontSize: "clamp(2rem, 4vw, 3rem)",
                    marginTop: 0,
                    marginBottom: "2rem",
                    letterSpacing: "-1.2px",
                    lineHeight: 1.1,
                    fontFamily: "'Playfair Display', Georgia, 'Times New Roman', serif",
                  }}
                >
                  Who We Are
                </h2>
                
                <p style={{ 
                  fontSize: "1.25rem", 
                  lineHeight: 1.7, 
                  color: "#475569", 
                  marginBottom: "3rem",
                  fontFamily: "'Inter', 'Segoe UI', sans-serif",
                }}>
                  We are a passionate team of educators, career coaches, and advisors dedicated to 
                  making learning engaging while transforming individuals into skilled professionals 
                  ready for tomorrow's challenges.
                </p>

                <div style={{ display: "grid", gap: "1.5rem", marginBottom: "2rem" }}>
                  <div
                    style={{
                      background: "linear-gradient(135deg, rgba(15, 118, 110, 0.04), rgba(15, 118, 110, 0.02))",
                      padding: "2rem",
                      borderRadius: "20px",
                      border: "1px solid rgba(15, 118, 110, 0.12)",
                      position: "relative",
                      overflow: "hidden",
                    }}
                  >
                    <div
                      style={{
                        position: "absolute",
                        top: "-10px",
                        left: "-10px",
                        width: "40px",
                        height: "40px",
                        background: "linear-gradient(135deg, #0f766e, #10b981)",
                        borderRadius: "50%",
                        opacity: 0.1,
                      }}
                    />
                    <h3
                      style={{
                        color: "#0f766e",
                        fontWeight: "700",
                        fontSize: "1.3rem",
                        marginTop: 0,
                        marginBottom: "1rem",
                        display: "flex",
                        alignItems: "center",
                        gap: "0.75rem",
                        fontFamily: "'Playfair Display', Georgia, 'Times New Roman', serif",
                      }}
                    >
                      <span style={{ fontSize: "1.5rem" }}>🎯</span>
                      Mission
                    </h3>
                    <p style={{ 
                      marginBottom: 0, 
                      color: "#475569", 
                      lineHeight: 1.65,
                      fontSize: "1.05rem",
                      fontFamily: "'Inter', 'Segoe UI', sans-serif",
                    }}>
                      Empowering individuals to reach their full potential through personalized learning experiences and comprehensive career development plans.
                    </p>
                  </div>

                  <div
                    style={{
                      background: "linear-gradient(135deg, rgba(16, 185, 129, 0.04), rgba(16, 185, 129, 0.02))",
                      padding: "2rem",
                      borderRadius: "20px",
                      border: "1px solid rgba(16, 185, 129, 0.12)",
                      position: "relative",
                      overflow: "hidden",
                    }}
                  >
                    <div
                      style={{
                        position: "absolute",
                        top: "-10px",
                        left: "-10px",
                        width: "40px",
                        height: "40px",
                        background: "linear-gradient(135deg, #10b981, #22c55e)",
                        borderRadius: "50%",
                        opacity: 0.1,
                      }}
                    />
                    <h3
                      style={{
                        color: "#10b981",
                        fontWeight: "700",
                        fontSize: "1.3rem",
                        marginTop: 0,
                        marginBottom: "1rem",
                        display: "flex",
                        alignItems: "center",
                        gap: "0.75rem",
                        fontFamily: "'Playfair Display', Georgia, 'Times New Roman', serif",
                      }}
                    >
                      <span style={{ fontSize: "1.5rem" }}>🌟</span>
                      Vision
                    </h3>
                    <p style={{ 
                      marginBottom: 0, 
                      color: "#475569", 
                      lineHeight: 1.65,
                      fontSize: "1.05rem",
                      fontFamily: "'Inter', 'Segoe UI', sans-serif",
                    }}>
                      Building a thriving ecosystem for continuous growth and transformational education that prepares learners for future success.
                    </p>
                  </div>
                </div>
              </div>

              <div
                style={{
                  flex: "1 1 320px",
                  minWidth: "280px",
                  height: "320px",
                  background: "#f1f5f9",
                  borderRadius: "20px",
                  boxShadow: "0 8px 32px rgba(15, 118, 110, 0.08)",
                  flexShrink: 0,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  border: "1px solid rgba(226, 232, 240, 0.8)",
                }}
              >
                <div
                  style={{
                    fontSize: "1rem",
                    color: "#64748b",
                    fontWeight: "500",
                  }}
                >
                  About Image
                </div>
              </div>
            </div>

            {/* CORE VALUES */}
            <div style={{ marginTop: "5rem", paddingTop: "3rem", borderTop: "1px solid rgba(226, 232, 240, 0.6)" }}>
              <h3
                style={{
                  background: "linear-gradient(135deg, #0f766e 0%, #10b981 70%, #22c55e 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  fontWeight: 700,
                  fontSize: "2.2rem",
                  marginBottom: "3rem",
                  textAlign: "center",
                  fontFamily: "'Playfair Display', Georgia, 'Times New Roman', serif",
                  letterSpacing: "-0.5px",
                }}
              >
                Core Values
              </h3>
              
              {/* Grid layout for values */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
                  gap: "1rem",
                  maxWidth: "800px",
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
                      background: "linear-gradient(135deg, rgba(15, 118, 110, 0.04), rgba(15, 118, 110, 0.02))",
                      padding: "1.2rem 1rem",
                      borderRadius: "12px",
                      textAlign: "center",
                      border: "1px solid rgba(15, 118, 110, 0.08)",
                      transition: "border-color 0.2s ease",
                      cursor: "default",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = "rgba(15, 118, 110, 0.15)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = "rgba(15, 118, 110, 0.08)";
                    }}
                  >
                    <span style={{ 
                      color: "#0f766e", 
                      fontWeight: "600", 
                      fontSize: "0.95rem",
                      fontFamily: "'Inter', 'Segoe UI', sans-serif",
                    }}>
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
          padding: "8rem 0 10rem 0",
          background: "linear-gradient(135deg, #fafbff 0%, #f1f5f9 100%)",
          position: "relative",
        }}
      >
        {/* Background decoration */}
        <div
          style={{
            position: "absolute",
            top: "10%",
            left: "-5%",
            width: "300px",
            height: "300px",
            background: "radial-gradient(circle, rgba(15, 118, 110, 0.03) 0%, transparent 70%)",
            borderRadius: "50%",
            pointerEvents: "none",
          }}
        />
        
        <ContentWrapper>
          <div style={{ textAlign: "center", marginBottom: "5rem" }}>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                background: "linear-gradient(135deg, rgba(15, 118, 110, 0.08), rgba(34, 197, 94, 0.06))",
                color: "#0f766e",
                padding: "0.75rem 1.5rem",
                borderRadius: "30px",
                fontSize: "0.875rem",
                fontWeight: "600",
                marginBottom: "2rem",
                border: "1px solid rgba(15, 118, 110, 0.12)",
                letterSpacing: "0.5px",
                textTransform: "uppercase",
              }}
            >
              <svg
                style={{ marginRight: "0.5rem", width: "16px", height: "16px" }}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Explore Learning
            </div>
            
            <h2
              style={{
                background: "linear-gradient(135deg, #0f766e 0%, #10b981 70%, #22c55e 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                fontWeight: 700,
                fontSize: "clamp(2.5rem, 5vw, 3.5rem)",
                marginBottom: "2rem",
                letterSpacing: "-1.5px",
                fontFamily: "'Playfair Display', Georgia, 'Times New Roman', serif",
              }}
            >
              Our Courses
            </h2>
            
            <p
              style={{
                fontSize: "1.3rem",
                color: "#475569",
                maxWidth: "700px",
                margin: "0 auto",
                lineHeight: 1.65,
                fontFamily: "'Inter', 'Segoe UI', sans-serif",
              }}
            >
              Choose from our comprehensive range of courses designed to accelerate your professional growth
            </p>
          </div>
          
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(380px, 1fr))",
              gap: "3rem",
              maxWidth: "1400px",
              margin: "0 auto",
            }}
          >
            {[
              {
                title: "Foundation Courses",
                subtitle: "For School Children",
                description: "Comprehensive foundation in Mathematics, Physics, Chemistry, Computer Science, Biology, and English to build strong academic fundamentals.",
                icon: "🎓",
                color: "#0f766e",
                lightColor: "rgba(15, 118, 110, 0.08)",
                features: ["Interactive Learning", "Expert Guidance", "Progress Tracking"]
              },
              {
                title: "Technical Skills",
                subtitle: "For College Students & Professionals",
                description: "Advanced technical training in Software Development, UI/UX Design, Data Analytics, and Supply Chain Management for career advancement.",
                icon: "💻",
                color: "#059669",
                lightColor: "rgba(5, 150, 105, 0.08)",
                features: ["Industry Projects", "Certification", "Job Support"]
              },
              {
                title: "Soft Skills & Leadership",
                subtitle: "For Career Development",
                description: "Professional development in Communication, Public Speaking, Leadership, and Personal Branding to unlock your full potential.",
                icon: "🚀",
                color: "#10b981",
                lightColor: "rgba(16, 185, 129, 0.08)",
                features: ["Personal Coaching", "Practical Workshops", "Networking"]
              },
            ].map(({ title, subtitle, description, icon, color, lightColor, features }) => (
              <div
                key={title}
                style={{
                  background: "#ffffff",
                  borderRadius: "20px",
                  padding: "0",
                  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.04), 0 1px 3px rgba(0, 0, 0, 0.02)",
                  overflow: "hidden",
                  transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                  border: "1px solid rgba(226, 232, 240, 0.8)",
                  position: "relative",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-2px)";
                  e.currentTarget.style.boxShadow = "0 8px 32px rgba(0, 0, 0, 0.06), 0 4px 16px rgba(0, 0, 0, 0.03)";
                  e.currentTarget.style.borderColor = `${color}30`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 4px 20px rgba(0, 0, 0, 0.04), 0 1px 3px rgba(0, 0, 0, 0.02)";
                  e.currentTarget.style.borderColor = "rgba(226, 232, 240, 0.8)";
                }}
              >
                {/* Header with icon and gradient */}
                <div
                  style={{
                    height: "160px",
                    background: `linear-gradient(135deg, ${lightColor} 0%, ${color}08 100%)`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  {/* Decorative elements */}
                  <div
                    style={{
                      position: "absolute",
                      top: "-20px",
                      right: "-20px",
                      width: "80px",
                      height: "80px",
                      background: `${color}10`,
                      borderRadius: "50%",
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      bottom: "-30px",
                      left: "-30px",
                      width: "100px",
                      height: "100px",
                      background: `${color}05`,
                      borderRadius: "50%",
                    }}
                  />
                  
                  <div
                    style={
                      {
                        fontSize: "3.5rem",
                        zIndex: 1,
                        filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.1))",
                      }
                    }
                  >
                    {icon}
                  </div>
                </div>
                
                <div style={{ padding: "2.5rem 2.5rem 2rem" }}>
                  <div style={{ marginBottom: "1.5rem" }}>
                    <h3
                      style={{
                        color: color,
                        fontSize: "1.5rem",
                        fontWeight: 700,
                        marginTop: 0,
                        marginBottom: "0.5rem",
                        lineHeight: 1.2,
                        fontFamily: "'Playfair Display', Georgia, 'Times New Roman', serif",
                      }}
                    >
                      {title}
                    </h3>
                    <div
                      style={{
                        color: "#64748b",
                        fontSize: "0.9rem",
                        fontWeight: 500,
                        marginBottom: "1rem",
                        letterSpacing: "0.25px",
                      }}
                    >
                      {subtitle}
                    </div>
                  </div>
                  
                  <p
                    style={{
                      fontSize: "1.05rem",
                      marginTop: 0,
                      marginBottom: "2rem",
                      color: "#475569",
                      lineHeight: 1.65,
                      fontFamily: "'Inter', 'Segoe UI', sans-serif",
                    }}
                  >
                    {description}
                  </p>
                  
                  {/* Features list */}
                  <div style={{ marginBottom: "1.5rem" }}>
                    {features.map((feature, index) => (
                      <div
                        key={index}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          marginBottom: "0.75rem",
                          fontSize: "0.95rem",
                          color: "#64748b",
                        }}
                      >
                        <div
                          style={{
                            width: "6px",
                            height: "6px",
                            borderRadius: "50%",
                            background: color,
                            marginRight: "0.75rem",
                          }}
                        />
                        {feature}
                      </div>
                    ))}
                  </div>
                  
                  {/* Learn More button */}
                  <button
                    style={{
                      background: `linear-gradient(135deg, ${color} 0%, ${color}dd 100%)`,
                      color: "#ffffff",
                      padding: "0.75rem 1.5rem",
                      borderRadius: "12px",
                      border: "none",
                      fontSize: "0.95rem",
                      fontWeight: 600,
                      cursor: "pointer",
                      transition: "all 0.3s ease",
                      fontFamily: "'Inter', 'Segoe UI', sans-serif",
                      letterSpacing: "0.25px",
                      width: "100%",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.boxShadow = `0 2px 8px ${color}30`;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.boxShadow = "none";
                    }}
                  >
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </ContentWrapper>
      </section>
    </main>
  );
}