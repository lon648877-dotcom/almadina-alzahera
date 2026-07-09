"use client";

import React from "react";
import Link from "next/link";

export default function ValueSection() {
  return (
    <section
      style={{
        position: "relative",
        minHeight: "420px",
        backgroundImage: "url('/value-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        color: "#ffffff",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundColor: "rgba(0, 0, 0, 0.65)",
        }}
      />

      <div
        style={{
          position: "relative",
          zIndex: 2,
          maxWidth: "1050px",
          padding: "0 24px",
        }}
      >
        <h2
          style={{
            fontSize: "34px",
            fontWeight: "900",
            marginBottom: "22px",
            textTransform: "uppercase",
            letterSpacing: "0.5px",
          }}
        >
          LEADERS IN THE PROVISION OF VALUE-ADDED CONSTRUCTION SOLUTIONS
        </h2>

        <p
          style={{
            fontSize: "17px",
            lineHeight: "1.8",
            maxWidth: "950px",
            margin: "0 auto 35px",
            color: "#f1f5f9",
          }}
        >
          Whether it is construction, infrastructure, or technical services,
          ALMADINA ALZAHERA is committed to delivering reliable solutions with
          quality, safety, and professionalism for every client.
        </p>

        <Link
          href="/about"
          style={{
            display: "inline-block",
            backgroundColor: "#0f7c8f",
            color: "#ffffff",
            padding: "16px 42px",
            textDecoration: "none",
            fontSize: "17px",
            fontWeight: "700",
          }}
        >
          KNOW MORE
        </Link>
      </div>
    </section>
  );
}