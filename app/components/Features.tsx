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
    <section className="features-section">
      <div className="features-container">
        {features.map((item, index) => (
          <article
            key={item.title}
            className={`feature-card ${
              index !== features.length - 1 ? "feature-card-border" : ""
            }`}
          >
            <div className="feature-icon">{item.icon}</div>

            <div className="feature-content">
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}