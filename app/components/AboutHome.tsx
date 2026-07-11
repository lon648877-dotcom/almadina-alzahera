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
            <strong>ALMADINA ALZAHERA – شركة المدينة الزاهرة</strong> is a
  UAE-based company specialized in General Maintenance, Water
  Distribution Networks, transmission pipelines and HDPE works
  across the United Arab Emirates.
          </p>

          <p className="about-home-text">
            شركة المدينة الزاهرة ملتزمة بتقديم حلول آمنة وموثوقة ومستدامة
  لمشروعات البنية التحتية وشبكات المياه، مع الحفاظ على أعلى معايير
  الجودة والسلامة والتنفيذ.
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