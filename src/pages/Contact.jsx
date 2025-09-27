import React from "react";
import ContentWrapper from "../components/ContentWrapper";

export default function Contact() {
  return (
    <main
      style={{
        background: "linear-gradient(135deg, #fafbff 0%, #f8fafc 100%)",
        minHeight: "100vh",
        padding: "0",
        fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
      }}
    >
      {/* Hero Section */}
      <section
        style={{
          background: "linear-gradient(135deg, #f0fdf4 0%, #ecfdf5 50%, #f0f9ff 100%)",
          padding: "8rem 0 6rem 0",
          textAlign: "center",
          position: "relative",
          borderBottom: "1px solid rgba(15, 118, 110, 0.08)",
        }}
      >
        {/* Background decoration */}
        <div
          style={{
            position: "absolute",
            top: "20%",
            right: "-5%",
            width: "300px",
            height: "300px",
            background: "radial-gradient(circle, rgba(15, 118, 110, 0.03) 0%, transparent 70%)",
            borderRadius: "50%",
            pointerEvents: "none",
          }}
        />
        
        <ContentWrapper style={{ maxWidth: "800px", position: "relative", zIndex: 1 }}>
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
              <path fillRule="evenodd" d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884zM18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" clipRule="evenodd" />
            </svg>
            Get in Touch
          </div>
          
          <h1
            style={{
              fontFamily: "'Playfair Display', Georgia, 'Times New Roman', serif",
              fontSize: "clamp(2.5rem, 5vw, 3.8rem)",
              fontWeight: "700",
              marginBottom: "1.5rem",
              letterSpacing: "-1.5px",
              lineHeight: 1.1,
              background: "linear-gradient(135deg, #0f766e 0%, #10b981 70%, #22c55e 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Contact Us
          </h1>
          
          <p
            style={{
              fontSize: "1.3rem",
              maxWidth: "600px",
              margin: "0 auto",
              color: "#475569",
              fontWeight: "400",
              lineHeight: 1.65,
              opacity: 0.9,
            }}
          >
            Ready to transform your future? Get in touch with our team to discuss 
            your learning goals and find the perfect program for you.
          </p>
        </ContentWrapper>
      </section>

      {/* Main Content Section */}
      <section style={{ padding: "8rem 0 10rem 0" }}>
        <ContentWrapper>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: window.innerWidth > 1024 ? "1fr 1.2fr" : "1fr",
              gap: window.innerWidth > 1024 ? "6rem" : "4rem",
              alignItems: "start",
              maxWidth: "1200px",
              margin: "0 auto",
            }}
          >
            {/* Contact Information */}
            <div>
              <h2
                style={{
                  fontFamily: "'Playfair Display', Georgia, 'Times New Roman', serif",
                  fontSize: "2.2rem",
                  fontWeight: 600,
                  color: "#1e293b",
                  marginBottom: "2rem",
                  letterSpacing: "-0.5px",
                }}
              >
                Let's Start a Conversation
              </h2>
              
              <p
                style={{
                  fontSize: "1.1rem",
                  color: "#475569",
                  lineHeight: 1.7,
                  marginBottom: "3rem",
                }}
              >
                Whether you're looking to enhance your skills, transform your career, 
                or explore educational opportunities, we're here to help guide your journey.
              </p>

              {/* Contact Cards */}
              <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                {/* Email */}
                <div
                  style={{
                    background: "#ffffff",
                    padding: "2rem",
                    borderRadius: "20px",
                    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.04), 0 1px 3px rgba(0, 0, 0, 0.02)",
                    border: "1px solid rgba(226, 232, 240, 0.8)",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-2px)";
                    e.currentTarget.style.boxShadow = "0 8px 32px rgba(0, 0, 0, 0.06), 0 4px 16px rgba(0, 0, 0, 0.03)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "0 4px 20px rgba(0, 0, 0, 0.04), 0 1px 3px rgba(0, 0, 0, 0.02)";
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", marginBottom: "1rem" }}>
                    <div
                      style={
                        {
                          background: "linear-gradient(135deg, rgba(15, 118, 110, 0.1), rgba(15, 118, 110, 0.05))",
                          padding: "0.75rem",
                          borderRadius: "12px",
                          marginRight: "1rem",
                        }
                      }
                    >
                      <svg
                        style={{ width: "20px", height: "20px", color: "#0f766e" }}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <h3
                      style={{
                        fontFamily: "'Playfair Display', Georgia, 'Times New Roman', serif",
                        fontSize: "1.3rem",
                        fontWeight: 600,
                        color: "#0f766e",
                        margin: 0,
                      }}
                    >
                      Email Us
                    </h3>
                  </div>
                  <p style={{ color: "#64748b", margin: "0 0 0.5rem 0", fontSize: "0.95rem" }}>
                    Send us a message anytime
                  </p>
                  <a
                    href="mailto:info@st3education.com"
                    style={{
                      color: "#0f766e",
                      textDecoration: "none",
                      fontSize: "1.1rem",
                      fontWeight: 500,
                    }}
                  >
                    info@st3education.com
                  </a>
                </div>

                {/* Phone */}
                <div
                  style={{
                    background: "#ffffff",
                    padding: "2rem",
                    borderRadius: "20px",
                    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.04), 0 1px 3px rgba(0, 0, 0, 0.02)",
                    border: "1px solid rgba(226, 232, 240, 0.8)",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-2px)";
                    e.currentTarget.style.boxShadow = "0 8px 32px rgba(0, 0, 0, 0.06), 0 4px 16px rgba(0, 0, 0, 0.03)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "0 4px 20px rgba(0, 0, 0, 0.04), 0 1px 3px rgba(0, 0, 0, 0.02)";
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", marginBottom: "1rem" }}>
                    <div
                      style={{
                        background: "linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(16, 185, 129, 0.05))",
                        padding: "0.75rem",
                        borderRadius: "12px",
                        marginRight: "1rem",
                      }}
                    >
                      <svg
                        style={{ width: "20px", height: "20px", color: "#10b981" }}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <h3
                      style={{
                        fontFamily: "'Playfair Display', Georgia, 'Times New Roman', serif",
                        fontSize: "1.3rem",
                        fontWeight: 600,
                        color: "#10b981",
                        margin: 0,
                      }}
                    >
                      Call Us
                    </h3>
                  </div>
                  <p style={{ color: "#64748b", margin: "0 0 0.5rem 0", fontSize: "0.95rem" }}>
                    Available Monday - Friday, 9AM - 6PM
                  </p>
                  <a
                    href="tel:+1234567890"
                    style={{
                      color: "#10b981",
                      textDecoration: "none",
                      fontSize: "1.1rem",
                      fontWeight: 500,
                    }}
                  >
                    +1 (234) 567-8900
                  </a>
                </div>

                {/* Location */}
                <div
                  style={{
                    background: "#ffffff",
                    padding: "2rem",
                    borderRadius: "20px",
                    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.04), 0 1px 3px rgba(0, 0, 0, 0.02)",
                    border: "1px solid rgba(226, 232, 240, 0.8)",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-2px)";
                    e.currentTarget.style.boxShadow = "0 8px 32px rgba(0, 0, 0, 0.06), 0 4px 16px rgba(0, 0, 0, 0.03)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "0 4px 20px rgba(0, 0, 0, 0.04), 0 1px 3px rgba(0, 0, 0, 0.02)";
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", marginBottom: "1rem" }}>
                    <div
                      style={{
                        background: "linear-gradient(135deg, rgba(34, 197, 94, 0.1), rgba(34, 197, 94, 0.05))",
                        padding: "0.75rem",
                        borderRadius: "12px",
                        marginRight: "1rem",
                      }}
                    >
                      <svg
                        style={{ width: "20px", height: "20px", color: "#22c55e" }}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <h3
                      style={{
                        fontFamily: "'Playfair Display', Georgia, 'Times New Roman', serif",
                        fontSize: "1.3rem",
                        fontWeight: 600,
                        color: "#22c55e",
                        margin: 0,
                      }}
                    >
                      Visit Us
                    </h3>
                  </div>
                  <p style={{ color: "#64748b", margin: "0 0 0.5rem 0", fontSize: "0.95rem" }}>
                    Our main office location
                  </p>
                  <p
                    style={{
                      color: "#22c55e",
                      fontSize: "1.1rem",
                      fontWeight: 500,
                      margin: 0,
                      lineHeight: 1.5,
                    }}
                  >
                    123 Education Street<br />
                    New York, NY 10001
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Form (Tally.so Integration) */}
            <div>
              <div
                style={{
                  background: "#ffffff",
                  padding: "3rem",
                  borderRadius: "24px",
                  boxShadow: "0 8px 40px rgba(0, 0, 0, 0.04), 0 2px 12px rgba(0, 0, 0, 0.02)",
                  border: "1px solid rgba(226, 232, 240, 0.6)",
                  minHeight: "600px",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <div style={{ textAlign: "center", marginBottom: "2rem" }}>
                  <h3
                    style={{
                      fontFamily: "'Playfair Display', Georgia, 'Times New Roman', serif",
                      fontSize: "1.8rem",
                      fontWeight: 600,
                      color: "#1e293b",
                      marginBottom: "0.75rem",
                    }}
                  >
                    Send Us a Message
                  </h3>
                  <p style={{ color: "#64748b", fontSize: "1rem", margin: 0 }}>
                    Fill out the form below and we'll get back to you within 24 hours
                  </p>
                </div>

                {/* Tally.so Form Placeholder */}
                <div
                  style={{
                    flex: 1,
                    background: "linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)",
                    borderRadius: "16px",
                    border: "2px dashed rgba(15, 118, 110, 0.2)",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "3rem",
                    textAlign: "center",
                    minHeight: "400px",
                  }}
                >
                  <div
                    style={{
                      width: "80px",
                      height: "80px",
                      background: "linear-gradient(135deg, rgba(15, 118, 110, 0.1), rgba(34, 197, 94, 0.05))",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: "1.5rem",
                    }}
                  >
                    <svg
                      style={{ width: "40px", height: "40px", color: "#0f766e" }}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  
                  <h4
                    style={{
                      fontSize: "1.3rem",
                      fontWeight: 600,
                      color: "#0f766e",
                      margin: "0 0 1rem 0",
                      fontFamily: "'Playfair Display', Georgia, 'Times New Roman', serif",
                    }}
                  >
                    Tally.so Form Integration
                  </h4>
                  
                  <p style={{ color: "#64748b", fontSize: "1rem", lineHeight: 1.6, marginBottom: "1.5rem" }}>
                    Replace this placeholder with your Tally.so embed code.
                    Your contact form will appear here.
                  </p>
                  
                  <div
                    style={{
                      background: "rgba(15, 118, 110, 0.1)",
                      color: "#0f766e",
                      padding: "0.75rem 1.5rem",
                      borderRadius: "12px",
                      fontSize: "0.9rem",
                      fontWeight: 500,
                      fontFamily: "monospace",
                    }}
                  >
                    &lt;iframe src="your-tally-form-url" /&gt;
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ContentWrapper>
      </section>
    </main>
  );
}
