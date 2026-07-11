"use client";

import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsApp from "../components/WhatsApp";

const stats = [
  {
    number: "10+",
    label: "Years of Experience",
  },
  {
    number: "100%",
    label: "Water Infrastructure Focus",
  },
  {
    number: "24/7",
    label: "Maintenance Support",
  },
  {
    number: "UAE",
    label: "Trusted Project Delivery",
  },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />

      <main className="about-page">
        <section className="about-hero">
          <Image
            src="/hero-tank.png"
            alt="ALMADINA ALZAHERA water infrastructure"
            fill
            priority
            sizes="100vw"
            className="about-hero-image"
          />

          <div className="about-hero-overlay" />

          <div className="about-hero-content">
            <p className="about-hero-label">ABOUT OUR COMPANY</p>

            <h1>
              Built on Trust,
              <br />
              Driven by Water
              <br />
              Infrastructure Excellence
            </h1>

            <p className="about-hero-description">
              ALMADINA ALZAHERA specializes in water networks, transmission
              pipelines, HDPE installation, maintenance, testing and
              commissioning across the UAE.
            </p>
          </div>
        </section>

        <section className="about-stats-section">
          <div className="about-stats-grid">
            {stats.map((item) => (
              <article key={item.label} className="about-stat-card">
                <h2>{item.number}</h2>
                <p>{item.label}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="about-who-section">
          <div className="about-who-grid">
            <div className="about-who-content">
              <p className="about-section-label">WHO WE ARE</p>

              <h2>A specialized company for water network solutions</h2>

              <p>
                Welcome to <strong>ALMADINA ALZAHERA</strong>, a dedicated water
                infrastructure company delivering reliable pipeline systems,
                distribution networks, HDPE works and maintenance services with
                strong commitment to quality, safety and timely execution.
              </p>

              <p>
                Our team combines site experience, technical knowledge and
                practical execution to deliver dependable solutions for water
                infrastructure projects.
              </p>

              <Link href="/services" className="about-services-button">
                EXPLORE OUR SERVICES
              </Link>
            </div>

            <div className="about-who-image">
              <Image
                src="/projects/project1.jpg"
                alt="Water pipeline works"
                fill
                sizes="(max-width: 900px) 100vw, 50vw"
              />
            </div>
          </div>
        </section>

        <section className="about-principles-section">
          <div className="about-principles-wrapper">
            <div className="about-principles-heading">
              <p className="about-section-label">OUR PRINCIPLES</p>
              <h2>Vision, Mission & Values</h2>
            </div>

            <div className="about-principles-grid">
              <PrincipleCard
                icon="◎"
                title="Our Vision"
                text="To become a trusted name in water infrastructure by delivering reliable, safe and high-quality network solutions across the UAE."
              />

              <PrincipleCard
                icon="◈"
                title="Our Mission"
                text="To provide professional water pipeline, HDPE, maintenance and commissioning services that support sustainable development."
              />

              <PrincipleCard
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

function PrincipleCard({
  icon,
  title,
  text,
}: {
  icon: string;
  title: string;
  text: string;
}) {
  return (
    <article className="about-principle-card">
      <div className="about-principle-icon">{icon}</div>

      <h3>{title}</h3>

      <p>{text}</p>
    </article>
  );
}