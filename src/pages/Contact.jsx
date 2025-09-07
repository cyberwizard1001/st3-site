import React from "react";

export default function Contact() {
  return (
    <section style={{ padding: "2rem 4vw", margin: "0 auto", maxWidth: "100%", textAlign: "center" }}>
      <h2>Contact Us</h2>
      <p>Email: hello@st3.co (example)</p>
      <p>Phone: +44 123 456 7890</p>
      <form style={{ marginTop: "1.5rem" }}>
        <input type="text" placeholder="Your Name" required style={{ width: "90%", padding: "0.7em", margin: "0.4em 0" }} />
        <br />
        <input type="email" placeholder="Your Email" required style={{ width: "90%", padding: "0.7em", margin: "0.4em 0" }} />
        <br />
        <textarea placeholder="Your Message" required style={{ width: "90%", height: "80px", padding: "0.7em", margin: "0.4em 0" }} />
        <br />
        <button
          type="submit"
          style={{
            background: "linear-gradient(90deg, #179b4a 40%, #41c765 100%)",
            color: "#fff",
            padding: "0.7em 2.5em",
            borderRadius: "20px",
            border: "none",
            fontWeight: "bold"
          }}
        >
          Send
        </button>
      </form>
    </section>
  );
}
