"use client";

import Image from "next/image";
import Link from "next/link";

export default function RecentProjects() {
  const images = [
    "/projects/project1.jpg",
    "/projects/project2.jpg",
    "/projects/project3.jpg",
    "/projects/project4.jpg",
    "/projects/project5.jpg",
    "/projects/project6.jpg",
    "/projects/project7.jpg",
    "/projects/project8.jpg",
  ];

  return (
    <section style={{ padding: "100px 24px", backgroundColor: "#ffffff" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "55px" }}>
          <p
            style={{
              color: "#0f7c8f",
              fontWeight: 800,
              letterSpacing: "0.14em",
              fontSize: "14px",
            }}
          >
            OUR WORK
          </p>

          <h2
            style={{
              fontSize: "42px",
              fontWeight: 900,
              color: "#102331",
              margin: 0,
            }}
          >
            Recent Water Network Projects
          </h2>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "22px",
          }}
        >
          {images.map((src, index) => (
            <div
              key={index}
              style={{
                position: "relative",
                height: "330px",
                overflow: "hidden",
                borderRadius: "18px",
                boxShadow: "0 18px 35px rgba(15,35,49,.14)",
              }}
            >
              <Image
                src={src}
                alt={`Project ${index + 1}`}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                style={{ objectFit: "cover" }}
              />
            </div>
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: "45px" }}>
          <Link
            href="/gallery"
            style={{
              display: "inline-flex",
              backgroundColor: "#0f7c8f",
              color: "#ffffff",
              padding: "16px 34px",
              textDecoration: "none",
              fontWeight: 800,
            }}
          >
            VIEW ALL PROJECTS
          </Link>
        </div>
      </div>
    </section>
  );
}