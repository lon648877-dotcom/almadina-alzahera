"use client";

import React from "react";

export default function WhyChoose() {
  const items = [
    {
      icon: <QualityIcon />,
      title: "QUALITY WORK & PROFESSIONAL SERVICES",
      text: "We deliver high-quality services from planning to final handover, ensuring every project meets strong standards of safety, precision, and reliability.",
    },
    {
      icon: <ClientIcon />,
      title: "CLIENT SATISFACTION THROUGH DEDICATED TEAMS",
      text: "Our team works closely with clients to understand their requirements and provide practical solutions with professionalism and commitment.",
    },
    {
      icon: <TrustIcon />,
      title: "RELIABILITY AND TRANSPARENCY",
      text: "We build trust through clear communication, honest planning, and dependable execution throughout every stage of the project.",
    },
    {
      icon: <SupportIcon />,
      title: "ON-TIME DELIVERY AND TECHNICAL SUPPORT",
      text: "We manage projects with organized schedules, quality control, and technical support to ensure smooth and successful completion.",
    },
  ];

  return (
    <section style={{ backgroundColor: "#ffffff", padding: "110px 24px" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <h2 style={{ fontSize: "30px", fontWeight: "900", color: "#102331", marginBottom: "12px" }}>
          WHY CHOOSE US
        </h2>

        <div style={{ width: "75px", height: "4px", backgroundColor: "#0f7c8f", marginBottom: "70px" }} />

        <div style={{ display: "flex", flexDirection: "column", gap: "45px" }}>
          {items.map((item, index) => (
            <div
              key={index}
              style={{
                display: "grid",
                gridTemplateColumns: "180px 1fr",
                alignItems: "center",
                gap: "35px",
              }}
            >
              <div style={{ position: "relative", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <div
                  style={{
                    width: "75px",
                    height: "6px",
                    backgroundColor: "#0f7c8f",
                    position: "absolute",
                    left: "0",
                  }}
                />

                <div
                  style={{
                    width: "112px",
                    height: "112px",
                    borderRadius: "50%",
                    border: "7px solid #0f7c8f",
                    background: "linear-gradient(145deg, #ffffff, #f1f5f9)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#0f7c8f",
                    zIndex: 2,
                    boxShadow: "0 15px 35px rgba(15,124,143,0.25)",
                  }}
                >
                  {item.icon}
                </div>
              </div>

              <div
                style={{
                  backgroundColor: "#ffffff",
                  padding: "30px 38px",
                  borderRadius: "75px 8px 8px 75px",
                  boxShadow: "-12px 0 30px rgba(0,0,0,0.12)",
                  border: "1px solid #eef2f7",
                }}
              >
                <h3 style={{ fontSize: "18px", fontWeight: "900", color: "#102331", marginBottom: "12px" }}>
                  {item.title}
                </h3>

                <p style={{ color: "#555", fontSize: "16px", lineHeight: "1.8", margin: 0 }}>
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function QualityIcon() {
  return (
    <svg width="54" height="54" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M12 2l2.2 3.6 4.2.9-2.8 3.2.4 4.3-4-1.7-4 1.7.4-4.3-2.8-3.2 4.2-.9L12 2z" />
      <path d="M9 12l2 2 4-5" />
    </svg>
  );
}

function ClientIcon() {
  return (
    <svg width="54" height="54" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M16 11c1.7 0 3-1.3 3-3s-1.3-3-3-3-3 1.3-3 3 1.3 3 3 3z" />
      <path d="M8 11c1.7 0 3-1.3 3-3S9.7 5 8 5 5 6.3 5 8s1.3 3 3 3z" />
      <path d="M2 20c.5-3 2.7-5 6-5s5.5 2 6 5" />
      <path d="M12 20c.5-2.6 2.3-4.3 5-4.3 2.5 0 4.3 1.7 5 4.3" />
    </svg>
  );
}

function TrustIcon() {
  return (
    <svg width="54" height="54" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M8 12l3 3 6-6" />
      <path d="M3 11l4-4 5 5" />
      <path d="M21 11l-4-4-5 5" />
      <path d="M7 15l3 3c1.1 1.1 2.9 1.1 4 0l3-3" />
    </svg>
  );
}

function SupportIcon() {
  return (
    <svg width="54" height="54" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
      <path d="M7 3.5L5 6" />
      <path d="M17 3.5L19 6" />
    </svg>
  );
}