"use client";

import React from "react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Ahmed Hassan",
      position: "Project Manager",
      comment:
        "Hydrotech exceeded our expectations with outstanding quality and professionalism throughout the project.",
    },
    {
      name: "Sarah Ali",
      position: "Architect",
      comment:
        "Their engineering team delivered innovative solutions while maintaining the highest safety standards.",
    },
    {
      name: "Mohamed Salem",
      position: "Business Owner",
      comment:
        "Excellent communication, timely delivery, and remarkable attention to detail. Highly recommended.",
    },
  ];

  return (
    <section
      style={{
        backgroundColor: "#ffffff",
        padding: "100px 24px",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <div
          style={{
            textAlign: "center",
            marginBottom: "60px",
          }}
        >
          <p
            style={{
              color: "#2563eb",
              textTransform: "uppercase",
              letterSpacing: "2px",
              fontWeight: "700",
              marginBottom: "10px",
            }}
          >
            Testimonials
          </p>

          <h2
            style={{
              fontSize: "42px",
              fontWeight: "800",
              color: "#0f172a",
              margin: 0,
            }}
          >
            What Our Clients Say
          </h2>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))",
            gap: "30px",
          }}
        >
          {testimonials.map((item, index) => (
            <div
              key={index}
              style={{
                backgroundColor: "#f8fafc",
                borderRadius: "20px",
                padding: "35px",
                border: "1px solid #e2e8f0",
                boxShadow: "0 10px 30px rgba(15,23,42,.06)",
              }}
            >
              <div
                style={{
                  fontSize: "55px",
                  color: "#2563eb",
                  lineHeight: 1,
                  marginBottom: "20px",
                }}
              >
                “
              </div>

              <p
                style={{
                  color: "#475569",
                  lineHeight: "1.8",
                  marginBottom: "30px",
                  fontSize: "17px",
                }}
              >
                {item.comment}
              </p>

              <h3
                style={{
                  margin: 0,
                  color: "#0f172a",
                  fontSize: "22px",
                  fontWeight: "700",
                }}
              >
                {item.name}
              </h3>

              <p
                style={{
                  marginTop: "8px",
                  color: "#2563eb",
                  fontWeight: "600",
                }}
              >
                {item.position}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}