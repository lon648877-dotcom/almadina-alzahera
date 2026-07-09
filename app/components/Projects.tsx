"use client";

import React from "react";

export default function Projects() {
  const projects = [
    {
      title: "Commercial Tower",
      category: "Commercial",
      description:
        "Modern office tower designed and executed with high engineering standards.",
    },
    {
      title: "Residential Complex",
      category: "Residential",
      description:
        "Luxury residential community with sustainable infrastructure and smart planning.",
    },
    {
      title: "Infrastructure Project",
      category: "Infrastructure",
      description:
        "Roads, drainage systems and utility networks built with advanced technology.",
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
              fontWeight: "700",
              textTransform: "uppercase",
              letterSpacing: "2px",
              marginBottom: "12px",
            }}
          >
            Recent Projects
          </p>

          <h2
            style={{
              fontSize: "42px",
              fontWeight: "800",
              color: "#0f172a",
              marginBottom: "18px",
            }}
          >
            Our Latest Projects
          </h2>

          <p
            style={{
              color: "#64748b",
              maxWidth: "650px",
              margin: "0 auto",
              lineHeight: "1.8",
            }}
          >
            Every project reflects our commitment to innovation, engineering
            excellence, and client satisfaction.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))",
            gap: "30px",
          }}
        >
          {projects.map((project, index) => (
            <div
              key={index}
              style={{
                backgroundColor: "#f8fafc",
                borderRadius: "20px",
                overflow: "hidden",
                border: "1px solid #e2e8f0",
                transition: "0.3s",
              }}
            >
              <div
                style={{
                  height: "220px",
                  background:
                    "linear-gradient(135deg,#2563eb,#1e3a8a)",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  color: "#fff",
                  fontSize: "30px",
                  fontWeight: "800",
                }}
              >
                {project.category}
              </div>

              <div
                style={{
                  padding: "28px",
                }}
              >
                <h3
                  style={{
                    fontSize: "24px",
                    color: "#0f172a",
                    marginBottom: "14px",
                  }}
                >
                  {project.title}
                </h3>

                <p
                  style={{
                    color: "#64748b",
                    lineHeight: "1.8",
                    marginBottom: "24px",
                  }}
                >
                  {project.description}
                </p>

                <button
                  style={{
                    backgroundColor: "#2563eb",
                    color: "#fff",
                    border: "none",
                    padding: "12px 22px",
                    borderRadius: "8px",
                    cursor: "pointer",
                    fontWeight: "600",
                  }}
                >
                  View Project
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}