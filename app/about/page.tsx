"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsApp from "../components/WhatsApp";

export default function AboutPage() {
  return (
    <>
      <Navbar />

      <main style={{ backgroundColor: "#ffffff" }}>
        <section
          style={{
            position: "relative",
            minHeight: "650px",
            display: "flex",
            alignItems: "flex-start",
            overflow: "hidden",
            backgroundColor: "#102331",
            paddingTop: "250px",
          }}
        >
          <Image
            src="/hero-tank.png"
            alt="ALMADINA ALZAHERA water infrastructure"
            fill
            priority
            sizes="100vw"
            style={{ objectFit: "cover" }}
          />

          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(90deg, rgba(16,35,49,0.92), rgba(16,35,49,0.55), rgba(16,35,49,0.25))",
            }}
          />

          <div
            style={{
              position: "relative",
              zIndex: 2,
              maxWidth: "1200px",
              margin: "0 auto",
              padding: "0 24px",
              width: "100%",
            }}
          >
            <p
              style={{
                color: "#0fbdcf",
                fontWeight: 900,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                marginBottom: "14px",
              }}
            >
              About Our Company
            </p>

            <h1
              style={{
                color: "#ffffff",
                fontSize: "58px",
                lineHeight: 1.1,
                fontWeight: 900,
                margin: 0,
                maxWidth: "780px",
              }}
            >
              Built on Trust,
              <br />
              Driven by Water Infrastructure Excellence
            </h1>

            <p
              style={{
                color: "#e2e8f0",
                fontSize: "18px",
                lineHeight: 1.8,
                maxWidth: "650px",
                marginTop: "24px",
              }}
            >
              ALMADINA ALZAHERA specializes in water networks, transmission
              pipelines, HDPE installation, maintenance, testing and
              commissioning across the UAE.
            </p>
          </div>
        </section>

        <section
          style={{
            maxWidth: "1200px",
            margin: "-70px auto 0",
            padding: "0 24px",
            position: "relative",
            zIndex: 3,
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "22px",
            }}
          >
            <Stat number="10+" label="Years of Experience" />
            <Stat number="100%" label="Water Infrastructure Focus" />
            <Stat number="24/7" label="Maintenance Support" />
            <Stat number="UAE" label="Trusted Project Delivery" />
          </div>
        </section>

        <section
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "150px 24px 90px",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "60px",
            alignItems: "center",
          }}
        >
          <div>
            <p
              style={{
                color: "#0f7c8f",
                fontWeight: 900,
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                marginBottom: "14px",
              }}
            >
              Who We Are
            </p>

            <h2
              style={{
                fontSize: "42px",
                lineHeight: 1.2,
                color: "#102331",
                fontWeight: 900,
                margin: 0,
              }}
            >
              A specialized company for water network solutions
            </h2>

            <p
              style={{
                color: "#475569",
                fontSize: "17px",
                lineHeight: 1.9,
                marginTop: "24px",
              }}
            >
              Welcome to <strong>ALMADINA ALZAHERA</strong>, a dedicated water
              infrastructure company delivering reliable pipeline systems,
              distribution networks, HDPE works and maintenance services with
              strong commitment to quality, safety and timely execution.
            </p>

            <p
              style={{
                color: "#475569",
                fontSize: "17px",
                lineHeight: 1.9,
              }}
            >
              Our team combines site experience, technical knowledge and
              practical execution to deliver dependable solutions for water
              infrastructure projects.
            </p>

            <Link
              href="/services"
              style={{
                display: "inline-flex",
                marginTop: "24px",
                backgroundColor: "#0f7c8f",
                color: "#ffffff",
                padding: "16px 32px",
                textDecoration: "none",
                fontWeight: 900,
              }}
            >
              EXPLORE OUR SERVICES
            </Link>
          </div>

          <div
            style={{
              position: "relative",
              height: "300px",
              borderRadius: "24px",
              overflow: "hidden",
              boxShadow: "0 24px 60px rgba(16,35,49,0.18)",
            }}
          >
            <Image
              src="/projects/project1.jpg"
              alt="Water pipeline works"
              fill
              sizes="50vw"
              style={{ objectFit: "cover" }}
            />
          </div>
        </section>

        <section style={{ backgroundColor: "#f8fafc", padding: "90px 24px" }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: "55px" }}>
              <p
                style={{
                  color: "#0f7c8f",
                  fontWeight: 900,
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                }}
              >
                Our Principles
              </p>

              <h2
                style={{
                  fontSize: "42px",
                  color: "#102331",
                  fontWeight: 900,
                  margin: 0,
                }}
              >
                Vision, Mission & Values
              </h2>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                gap: "28px",
              }}
            >
              <Card
                icon="◎"
                title="Our Vision"
                text="To become a trusted name in water infrastructure by delivering reliable, safe and high-quality network solutions across the UAE."
              />
              <Card
                icon="◈"
                title="Our Mission"
                text="To provide professional water pipeline, HDPE, maintenance and commissioning services that support sustainable development."
              />
              <Card
                icon="✓"
                title="Our Values"
                text="Quality, safety, commitment, teamwork and responsibility guide every project we execute."
              />
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsApp />
    </>
  );
}

function Stat({ number, label }: { number: string; label: string }) {
  return (
    <div
      style={{
        backgroundColor: "#ffffff",
        padding: "30px",
        borderRadius: "18px",
        boxShadow: "0 18px 40px rgba(16,35,49,0.12)",
        border: "1px solid #e2e8f0",
        textAlign: "center",
      }}
    >
      <h3
        style={{
          margin: 0,
          color: "#0f7c8f",
          fontSize: "36px",
          fontWeight: 900,
        }}
      >
        {number}
      </h3>
      <p style={{ margin: "10px 0 0", color: "#102331", fontWeight: 800 }}>
        {label}
      </p>
    </div>
  );
}

function Card({
  icon,
  title,
  text,
}: {
  icon: string;
  title: string;
  text: string;
}) {
  return (
    <div
      style={{
        backgroundColor: "#ffffff",
        padding: "38px",
        borderRadius: "22px",
        border: "1px solid #e2e8f0",
        boxShadow: "0 14px 35px rgba(16,35,49,0.08)",
      }}
    >
      <div
        style={{
          width: "68px",
          height: "68px",
          backgroundColor: "#e6f7fa",
          color: "#0f7c8f",
          borderRadius: "18px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "34px",
          fontWeight: 900,
          marginBottom: "24px",
        }}
      >
        {icon}
      </div>

      <h3
        style={{
          color: "#102331",
          fontSize: "25px",
          fontWeight: 900,
          marginBottom: "14px",
        }}
      >
        {title}
      </h3>

      <p style={{ color: "#475569", lineHeight: 1.8, margin: 0 }}>{text}</p>
    </div>
  );
}