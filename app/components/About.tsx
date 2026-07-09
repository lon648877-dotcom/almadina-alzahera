"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <section
      style={{
        backgroundColor: "#ffffff",
        padding: "10px 24px",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "70px",
          alignItems: "center",
        }}
      >
        {/* Image */}
        <div
          style={{
            position: "relative",
            width: "100%",
            height: "520px",
            overflow: "hidden",
            borderRadius: "6px",
            boxShadow: "0 20px 45px rgba(0,0,0,.15)",
          }}
        >
          <Image
            src="/pics.jpg"
            alt="About Almadina Alzahera"
            fill
            priority
            style={{
              objectFit: "cover",
            }}
          />
        </div>

        {/* Text */}
        <div>
          <p
            style={{
              color: "#0f7c8f",
              fontSize: "15px",
              fontWeight: "800",
              letterSpacing: "2px",
              marginBottom: "12px",
            }}
          >
            ABOUT OUR COMPANY
          </p>

          <h2
            style={{
              fontSize: "44px",
              fontWeight: "900",
              lineHeight: "1.2",
              color: "#102331",
              marginBottom: "18px",
            }}
          >
            Delivering Reliable
            <br />
            Construction &
            <br />
            Engineering Solutions
          </h2>

          <div
            style={{
              width: "80px",
              height: "4px",
              backgroundColor: "#d4af37",
              marginBottom: "28px",
            }}
          />

          <p
            style={{
              color: "#64748b",
              fontSize: "17px",
              lineHeight: "1.9",
              marginBottom: "22px",
            }}
          >
            ALMADINA ALZAHERA is committed to delivering reliable engineering,
            construction, and infrastructure solutions that meet the highest
            standards of quality, safety, and efficiency.
          </p>

          <p
            style={{
              color: "#64748b",
              fontSize: "17px",
              lineHeight: "1.9",
              marginBottom: "35px",
            }}
          >
            Our experienced team works closely with every client from planning
            through project completion, ensuring successful delivery with
            professionalism, transparency, and long-term value.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "18px",
              marginBottom: "35px",
            }}
          >
            <Feature text="Quality Work" />
            <Feature text="Safe Execution" />
            <Feature text="Experienced Team" />
            <Feature text="Trusted Delivery" />
          </div>

          <Link
            href="/about"
            style={{
              display: "inline-block",
              backgroundColor: "#0f7c8f",
              color: "#ffffff",
              padding: "16px 36px",
              textDecoration: "none",
              fontWeight: "700",
              fontSize: "17px",
            }}
          >
            READ MORE
          </Link>
        </div>
      </div>
    </section>
  );
}

function Feature({ text }: { text: string }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "10px",
        fontWeight: "700",
        color: "#102331",
        fontSize: "17px",
      }}
    >
      <span style={{ color: "#0f7c8f", fontSize: "22px" }}>✓</span>
      {text}
    </div>
  );
}