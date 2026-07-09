"use client";

import React, { useState } from "react";

export default function Clientele() {
  const clients = [
    "/clients/client1.png",
    "/clients/client2.png",
    "/clients/client3.png",
    "/clients/client4.png",
    "/clients/client5.png",
    "/clients/client6.png",
    "/clients/client7.png",
    "/clients/client8.png",
    "/clients/client9.png",
  ];

  const [start, setStart] = useState(0);

  const visible = [
    clients[start % clients.length],
    clients[(start + 1) % clients.length],
    clients[(start + 2) % clients.length],
    clients[(start + 3) % clients.length],
    clients[(start + 4) % clients.length],
  ];

  return (
    <section style={{ backgroundColor: "#ffffff", padding: "90px 24px 80px" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <h2 style={{ fontSize: "34px", fontWeight: "900", color: "#102331", marginBottom: "12px" }}>
          OUR CLIENTELE
        </h2>

        <div style={{ width: "80px", height: "4px", backgroundColor: "#0f7c8f", marginBottom: "45px" }} />

        <div style={{ position: "relative" }}>
          <button
            onClick={() => setStart((start - 1 + clients.length) % clients.length)}
            style={{ ...arrowStyle, left: "-55px" }}
          >
            ‹
          </button>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(5, 1fr)",
              gap: "20px",
              transition: "0.4s",
            }}
          >
            {visible.map((client, index) => (
              <div
                key={`${client}-${index}`}
                style={{
                  height: "145px",
                  backgroundColor: "#ffffff",
                  border: "1px solid #e5e7eb",
                  borderRadius: "8px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "12px",
                  boxShadow: "0 10px 25px rgba(0,0,0,0.07)",
                }}
              >
                <img
                  src={client}
                  alt={`Client ${index + 1}`}
                  style={{
                    width: "190px",
                    height: "105px",
                    objectFit: "contain",
                    display: "block",
                  }}
                />
              </div>
            ))}
          </div>

          <button
            onClick={() => setStart((start + 1) % clients.length)}
            style={{ ...arrowStyle, right: "-55px" }}
          >
            ›
          </button>
        </div>
      </div>
    </section>
  );
}

const arrowStyle: React.CSSProperties = {
  position: "absolute",
  top: "50%",
  transform: "translateY(-50%)",
  width: "42px",
  height: "42px",
  borderRadius: "50%",
  border: "1px solid #0f7c8f",
  backgroundColor: "#ffffff",
  color: "#0f7c8f",
  fontSize: "34px",
  lineHeight: "34px",
  cursor: "pointer",
  zIndex: 10,
  boxShadow: "0 8px 18px rgba(0,0,0,0.15)",
};