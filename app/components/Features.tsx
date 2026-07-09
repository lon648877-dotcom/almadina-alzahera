"use client";

import React from "react";

export default function Features() {
  const features = [
    {
      icon: "✓",
      title: "Safety First",
      text: "We prioritize the safety of our people and the communities we serve.",
    },
    {
      icon: "◎",
      title: "Quality Assured",
      text: "We are committed to delivering the highest standards in every project.",
    },
    {
      icon: "⚙",
      title: "Expert Team",
      text: "Our experienced professionals ensure efficient and reliable solutions.",
    },
    {
      icon: "⌁",
      title: "Sustainable Future",
      text: "We adopt sustainable practices to build a better future.",
    },
  ];

  return (
    <section
      style={{
        backgroundColor: "#ffffff",
        padding: "0 24px",
        position: "relative",
        zIndex: 30,
      }}
    >
      <div
        style={{
          maxWidth: "1320px",
          margin: "-30px auto 0",
          backgroundColor: "#ffffff",
          borderRadius: "12px",
          padding: "34px 28px",
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "24px",
          boxShadow: "0 24px 60px rgba(15, 35, 49, 0.18)",
        }}
      >
        {features.map((item, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              alignItems: "flex-start",
              gap: "18px",
              paddingRight: index !== features.length - 1 ? "22px" : "0",
              borderRight:
                index !== features.length - 1 ? "1px solid #e5e7eb" : "none",
            }}
          >
            <div
              style={{
                minWidth: "70px",
                height: "70px",
                borderRadius: "50%",
                border: "1px solid #dbeafe",
                color: "#0f7c8f",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "32px",
                fontWeight: 900,
              }}
            >
              {item.icon}
            </div>

            <div>
              <h3
                style={{
                  margin: "0 0 8px",
                  color: "#102331",
                  fontSize: "20px",
                  fontWeight: 900,
                }}
              >
                {item.title}
              </h3>

              <p
                style={{
                  margin: 0,
                  color: "#475569",
                  fontSize: "15px",
                  lineHeight: 1.7,
                }}
              >
                {item.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}