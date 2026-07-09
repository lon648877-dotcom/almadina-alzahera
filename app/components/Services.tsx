"use client";

import React from "react";

export default function Services() {
  const services = [
    {
      icon: "💧",
      title: "Water Transmission Pipelines",
      description:
        "Construction and installation of large-diameter water transmission pipelines with high engineering standards.",
    },
    {
      icon: "🚰",
      title: "Water Distribution Networks",
      description:
        "Reliable potable water distribution networks for residential, commercial, and industrial developments.",
    },
    {
      icon: "🛠️",
      title: "HDPE Pipeline Installation",
      description:
        "Professional HDPE pipe welding, laying, jointing, testing, and installation using modern equipment.",
    },
    {
      icon: "🔧",
      title: "Water Pipeline Maintenance",
      description:
        "Preventive and corrective maintenance for water networks, including repairs and pipeline rehabilitation.",
    },
    {
      icon: "⚙️",
      title: "Valve Chambers & Accessories",
      description:
        "Installation of valves, chambers, hydrants, fittings, and all related water network components.",
    },
    {
      icon: "📋",
      title: "Testing & Commissioning",
      description:
        "Hydrostatic pressure testing, flushing, disinfection, and final commissioning of water networks.",
    },
  ];

  return (
    <section
      style={{
        padding: "100px 24px",
        background: "linear-gradient(180deg, #f8fafc 0%, #ffffff 100%)",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "60px" }}>
          <p
            style={{
              color: "#0f7c8f",
              fontWeight: 800,
              textTransform: "uppercase",
              letterSpacing: "0.14em",
              fontSize: "14px",
              marginBottom: "12px",
            }}
          >
            Our Expertise
          </p>

          <h2
            style={{
              fontSize: "42px",
              fontWeight: 900,
              color: "#102331",
              margin: 0,
            }}
          >
            Professional Water Network Services
          </h2>

          <p
            style={{
              maxWidth: "720px",
              margin: "18px auto 0",
              color: "#475569",
              fontSize: "17px",
              lineHeight: 1.8,
            }}
          >
            We specialize in water infrastructure works including transmission
            pipelines, distribution networks, HDPE installation, maintenance,
            testing, and commissioning.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(310px, 1fr))",
            gap: "28px",
          }}
        >
          {services.map((service, index) => (
            <div
              key={index}
              style={{
                backgroundColor: "#ffffff",
                padding: "38px 34px",
                borderRadius: "20px",
                border: "1px solid #e2e8f0",
                boxShadow: "0 14px 35px rgba(15, 35, 49, 0.08)",
                transition: "all 0.35s ease",
                cursor: "default",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-10px)";
                e.currentTarget.style.boxShadow =
                  "0 24px 50px rgba(15, 124, 143, 0.18)";
                e.currentTarget.style.borderColor = "#0f7c8f";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow =
                  "0 14px 35px rgba(15, 35, 49, 0.08)";
                e.currentTarget.style.borderColor = "#e2e8f0";
              }}
            >
              <div
                style={{
                  width: "70px",
                  height: "70px",
                  borderRadius: "18px",
                  backgroundColor: "#e6f7fa",
                  color: "#0f7c8f",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "34px",
                  marginBottom: "26px",
                }}
              >
                {service.icon}
              </div>

              <h3
                style={{
                  fontSize: "23px",
                  fontWeight: 900,
                  color: "#102331",
                  marginBottom: "14px",
                }}
              >
                {service.title}
              </h3>

              <p
                style={{
                  color: "#475569",
                  fontSize: "16px",
                  lineHeight: 1.8,
                  margin: 0,
                }}
              >
                {service.description}
              </p>

              <div
                style={{
                  marginTop: "24px",
                  color: "#0f7c8f",
                  fontWeight: 800,
                  fontSize: "14px",
                }}
              >
                WATER INFRASTRUCTURE →
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}