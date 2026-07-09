"use client";

import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs
      .sendForm(
        "service_4d7vj3c",
        "template_gflurxi",
        form.current,
        "NpUzfTOPnZWR6R-ZY"
      )
      .then(() => {
        alert("Message sent successfully ✅");
        form.current?.reset();
      })
      .catch((error) => {
        console.error(error);
        alert("Failed to send message ❌");
      });
  };

  return (
    <section
      style={{
        backgroundColor: "#0f172a",
        color: "#ffffff",
        padding: "100px 24px",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(350px,1fr))",
          gap: "60px",
          alignItems: "center",
        }}
      >
        <div>
          <p
            style={{
              color: "#0f7c8f",
              textTransform: "uppercase",
              letterSpacing: "2px",
              fontWeight: "700",
              marginBottom: "12px",
            }}
          >
            Contact Us
          </p>

          <h2
            style={{
              fontSize: "44px",
              fontWeight: "800",
              marginBottom: "24px",
              lineHeight: "1.2",
            }}
          >
            Let's Build Something Great Together
          </h2>

          <p
            style={{
              color: "#cbd5e1",
              lineHeight: "1.8",
              fontSize: "18px",
              marginBottom: "35px",
            }}
          >
            Whether you need water network execution, HDPE pipeline works,
            maintenance, or testing and commissioning, our team is ready to
            help.
          </p>

          <div style={{ lineHeight: "2.2", fontSize: "17px" }}>
            <p>📍 Al Ain, United Arab Emirates</p>
            <p>📞 +971 50 760 5744</p>
            <p>✉ info@almadinaalzahera.com</p>
          </div>
        </div>

        <form
          ref={form}
          onSubmit={sendEmail}
          style={{
            backgroundColor: "#ffffff",
            padding: "40px",
            borderRadius: "18px",
            display: "flex",
            flexDirection: "column",
            gap: "18px",
          }}
        >
          <input
            name="from_name"
            type="text"
            placeholder="Full Name"
            required
            style={inputStyle}
          />

          <input
            name="from_email"
            type="email"
            placeholder="Email Address"
            required
            style={inputStyle}
          />

          <input
            name="phone"
            type="text"
            placeholder="Mobile"
            style={inputStyle}
          />

          <textarea
            name="message"
            rows={5}
            placeholder="Your Message"
            required
            style={{
              ...inputStyle,
              resize: "none",
            }}
          />

          <button
            type="submit"
            style={{
              backgroundColor: "#0f7c8f",
              color: "#ffffff",
              border: "none",
              padding: "16px",
              borderRadius: "8px",
              fontSize: "17px",
              fontWeight: "700",
              cursor: "pointer",
            }}
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

const inputStyle: React.CSSProperties = {
  padding: "15px",
  borderRadius: "8px",
  border: "1px solid #cbd5e1",
  fontSize: "16px",
  outline: "none",
  width: "100%",
  boxSizing: "border-box",
};