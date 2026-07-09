"use client";

import Link from "next/link";

export default function AboutHome() {
  return (
    <section
      style={{
        background: "#ffffff",
        padding: "40px 24px 40px",
      }}
    >
      <div
        style={{
          maxWidth: "1320px",
          margin: "110 auto",
          display: "grid",
          gridTemplateColumns: "420px 1fr",
          gap: "70px",
          alignItems: "start",
        }}
      >
        <div>
          <p
            style={{
              color: "#0f7c8f",
              fontWeight: 900,
              letterSpacing: "2px",
              marginBottom: "18px",
              textTransform: "uppercase",
            }}
          >
            ABOUT US
          </p>

          <h2
            style={{
              margin: 0,
              color: "#102331",
              fontSize: "52px",
              lineHeight: 1.15,
              fontWeight: 900,
            }}
          >
            Building Infrastructure.
            <br />
            Delivering Value.
          </h2>

          <div
            style={{
              width: "80px",
              height: "4px",
              background: "#0f7c8f",
              marginTop: "24px",
            }}
          />
        </div>

        <div>
          <p
            style={{
              color: "#475569",
              fontSize: "18px",
              lineHeight: "1.9",
              marginTop: 0,
            }}
          >
            Almadina Alzahera is a leading company specialized in
            General Maintenance and Water Distribution services
            across the UAE.
          </p>

          <p
            style={{
              color: "#475569",
              fontSize: "18px",
              lineHeight: "1.9",
            }}
          >
            We are committed to delivering innovative, safe and
            sustainable solutions that exceed our clients'
            expectations while maintaining the highest standards
            of quality and workmanship.
          </p>

          <Link
            href="/about"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "14px",
              marginTop: "18px",
              background: "#0f7c8f",
              color: "#ffffff",
              textDecoration: "none",
              padding: "18px 34px",
              fontWeight: 900,
              borderRadius: "5px",
            }}
          >
            READ MORE →
          </Link>
        </div>
      </div>
    </section>
  );
}