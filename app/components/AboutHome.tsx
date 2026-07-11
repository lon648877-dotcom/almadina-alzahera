"use client";

import Link from "next/link";

export default function AboutHome() {
  return (
    <section className="about-home-section">
      <div className="about-home-grid">
        <div>
          <p className="about-home-subtitle">
            ABOUT US
          </p>

          <h2 className="about-home-title">
            Building Infrastructure.
            <br />
            Delivering Value.
          </h2>

          <div className="about-home-line" />
        </div>

        <div>
          <p className="about-home-text">
            Almadina Alzahera is a leading company specialized in
            General Maintenance and Water Distribution services
            across the UAE.
          </p>

          <p className="about-home-text">
            We are committed to delivering innovative, safe and
            sustainable solutions that exceed our clients'
            expectations while maintaining the highest standards
            of quality and workmanship.
          </p>

          <Link
            href="/about"
            className="about-home-btn"
          >
            READ MORE →
          </Link>
        </div>
      </div>
    </section>
  );
}