"use client";

import React from "react";

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#151515",
        color: "#ffffff",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "70px 24px 55px",
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gap: "55px",
        }}
      >
        <div>
          <FooterTitle title="ABOUT US" />

          <p
            style={{
              color: "#ffffff",
              fontSize: "15px",
              lineHeight: "1.8",
              marginTop: "24px",
              maxWidth: "360px",
            }}
          >
            ALMADINA ALZAHERA is a construction and engineering company
            providing reliable infrastructure, civil contracting, and technical
            services with a strong focus on quality, safety, and commitment.
          </p>

          <div
            style={{
              marginTop: "28px",
              width: "190px",
              height: "58px",
              backgroundColor: "#000000",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#d4af37",
              fontWeight: "800",
              border: "1px solid #333",
            }}
          >
            ALMADINA
          </div>
        </div>

        <div>
          <FooterTitle title="CONTACT US" />

          <div
            style={{
              marginTop: "24px",
              display: "flex",
              flexDirection: "column",
              gap: "18px",
              color: "#0f7c8f",
              fontSize: "15px",
              lineHeight: "1.6",
            }}
          >
            <ContactLine icon="📍" text="P.O.Box: 18402, Al Ain, Abu Dhabi, UAE" />
            <ContactLine icon="☎" text="+971 50 760 5744" />
            <ContactLine icon="✉" text="info@almadinaalzahera.com" />
          </div>

          <div
            style={{
              display: "flex",
              gap: "10px",
              marginTop: "28px",
            }}
          >
            <Social label="f" />
            <Social label="◎" />
            <Social label="in" />
            <Social label="▶" />
          </div>
        </div>

        <div>
          <FooterTitle title="LOCATE US" />

          <div
            style={{
              marginTop: "24px",
              width: "100%",
              height: "170px",
              border: "1px solid #333",
              overflow: "hidden",
              backgroundColor: "#e5e7eb",
            }}
          >
            <iframe
              title="ALMADINA ALZAHERA Location"
              src="https://maps.google.com/maps?q=Abu%20Dhabi%20UAE&t=&z=12&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{
                border: 0,
              }}
              loading="lazy"
            />
          </div>
        </div>
      </div>

      <div
        style={{
          borderTop: "1px solid #2a2a2a",
          padding: "28px 24px",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            color: "#ffffff",
            fontSize: "15px",
          }}
        >
          Copyright © {new Date().getFullYear()} ALMADINA ALZAHERA. All Rights
          Reserved.
        </div>
      </div>
    </footer>
  );
}

function FooterTitle({ title }: { title: string }) {
  return (
    <div>
      <h3
        style={{
          fontSize: "22px",
          fontWeight: "900",
          margin: 0,
          color: "#ffffff",
          textTransform: "uppercase",
        }}
      >
        {title}
      </h3>

      <div
        style={{
          width: "78px",
          height: "4px",
          backgroundColor: "#0f7c8f",
          marginTop: "14px",
        }}
      />
    </div>
  );
}

function ContactLine({ icon, text }: { icon: string; text: string }) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "24px 1fr",
        gap: "12px",
        alignItems: "start",
      }}
    >
      <span>{icon}</span>
      <span>{text}</span>
    </div>
  );
}

function Social({ label }: { label: string }) {
  return (
    <a
      href="#"
      style={{
        width: "34px",
        height: "34px",
        backgroundColor: "#0f7c8f",
        color: "#ffffff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textDecoration: "none",
        borderRadius: "3px",
        fontSize: "14px",
        fontWeight: "800",
      }}
    >
      {label}
    </a>
  );
}