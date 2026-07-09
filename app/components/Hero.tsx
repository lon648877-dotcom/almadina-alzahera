"use client";

import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      style={{
        position: "relative",
        minHeight: "760px",
        overflow: "hidden",
        backgroundColor: "#071d2b",
      }}
    >
     <Image
  src="/hero-tank.png"
  alt="ALMADINA ALZAHERA"
  fill
  priority
  quality={100}
  sizes="100vw"
  style={{
    objectFit: "cover",
    objectPosition: "50% 20%",
    filter: "brightness(1.08) contrast(1.08)",
  }}
/>

<div
  style={{
    position: "absolute",
    inset: 0,
    background:
      "linear-gradient(90deg, rgba(5,22,34,.58) 0%, rgba(5,22,34,.22) 45%, rgba(5,22,34,0) 100%)",
    zIndex: 1,
  }}
/>
      <div
        style={{
          position: "relative",
          zIndex: 5,
          maxWidth: "1400px",
          margin: "0 auto",
          padding: "260px 55px 0",
          color: "#ffffff",
        }}
      >
        <p
          style={{
            color: "#12c7d8",
            fontWeight: 900,
            letterSpacing: "1px",
            fontSize: "15px",
            marginBottom: "18px",
          }}
        >
          RELIABLE. SAFE. SUSTAINABLE.
        </p>

        <h1
          style={{
            fontSize: "56px",
            lineHeight: 1.12,
            fontWeight: 900,
            margin: 0,
            color: "#ffffff",
            maxWidth: "680px",
          }}
        >
          Engineering Solutions
          <br />
          for a Better Tomorrow
        </h1>

        <p
          style={{
            marginTop: "24px",
            color: "#e2e8f0",
            fontSize: "18px",
            lineHeight: 1.8,
            maxWidth: "560px",
          }}
        >
          We deliver high-quality general maintenance and water distribution
          solutions across the UAE with commitment, safety, and excellence.
        </p>

        <div
          style={{
            display: "flex",
            gap: "18px",
            marginTop: "34px",
          }}
        >
          <Link href="/services" style={primaryButton}>
            OUR SERVICES →
          </Link>

          <Link href="/contact" style={secondaryButton}>
            GET A QUOTE →
          </Link>
        </div>
      </div>
    </section>
  );
}

const primaryButton: React.CSSProperties = {
  backgroundColor: "#0f7c8f",
  color: "#ffffff",
  padding: "18px 34px",
  textDecoration: "none",
  fontWeight: 900,
  borderRadius: "6px",
};

const secondaryButton: React.CSSProperties = {
  color: "#ffffff",
  padding: "18px 34px",
  textDecoration: "none",
  fontWeight: 900,
  borderRadius: "6px",
  border: "1px solid rgba(255,255,255,0.7)",
};