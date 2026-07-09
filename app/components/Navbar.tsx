"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const isHomePage = pathname === "/";
  const [scrolled, setScrolled] = useState(!isHomePage);

  useEffect(() => {
    function handleScroll() {
      setScrolled(!isHomePage || window.scrollY > 80);
    }

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHomePage]);

  const textColor = scrolled ? "#102331" : "#ffffff";
  const subTextColor = scrolled ? "#475569" : "#e2e8f0";

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 99999,
        backgroundColor: scrolled ? "#ffffff" : "transparent",
        boxShadow: scrolled ? "0 8px 30px rgba(15,35,49,0.12)" : "none",
        transition: "all 0.35s ease",
      }}
    >
      <div
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          padding: scrolled ? "10px 40px" : "22px 40px 14px",
          transition: "all 0.35s ease",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderBottom: scrolled
              ? "1px solid #e5e7eb"
              : "1px solid rgba(255,255,255,0.25)",
            paddingBottom: scrolled ? "10px" : "16px",
          }}
        >
          <Link
            href="/"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "18px",
              textDecoration: "none",
            }}
          >
            <Image
              src="/logo.png"
              alt="ALMADINA ALZAHERA"
              width={scrolled ? 95 : 145}
              height={scrolled ? 62 : 90}
              priority
              style={{
                objectFit: "contain",
                transition: "all 0.35s ease",
              }}
            />

            <div>
              <h1
                style={{
                  margin: 0,
                  color: textColor,
                  fontSize: scrolled ? "20px" : "30px",
                  fontWeight: 900,
                  letterSpacing: "1px",
                  transition: "all 0.35s ease",
                }}
              >
                ALMADINA ALZAHERA
              </h1>

              <p
                style={{
                  margin: "5px 0 0",
                  color: textColor,
                  fontSize: scrolled ? "11px" : "16px",
                  fontWeight: 800,
                  letterSpacing: scrolled ? "2px" : "4px",
                  transition: "all 0.35s ease",
                }}
              >
                GEN.MAINT AND WATER
              </p>

              <p
                style={{
                  margin: "5px 0 0",
                  color: textColor,
                  fontSize: scrolled ? "11px" : "16px",
                  fontWeight: 800,
                  letterSpacing: scrolled ? "2px" : "4px",
                  transition: "all 0.35s ease",
                }}
              >
                DISTRIBUTION - L.L.C - S.P.C
              </p>
            </div>
          </Link>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: scrolled ? "28px" : "48px",
            }}
          >
            <InfoBox
              icon="⌂"
              title="P.O.Box: 18402"
              text="Al Ain, Abu Dhabi, UAE"
              textColor={textColor}
              subTextColor={subTextColor}
              scrolled={scrolled}
            />

            <InfoBox
              icon="✉"
              title="Send us a mail"
              text="info@almadinaalzahera.com"
              textColor={textColor}
              subTextColor={subTextColor}
              scrolled={scrolled}
            />
          </div>
        </div>

        <nav
          style={{
            height: scrolled ? "54px" : "70px",
            display: "flex",
            alignItems: "center",
            gap: scrolled ? "36px" : "48px",
            transition: "all 0.35s ease",
          }}
        >
          <Nav href="/" label="HOME" scrolled={scrolled} active={pathname === "/"} />
          <Nav href="/about" label="ABOUT" scrolled={scrolled} active={pathname === "/about"} />
          <Nav href="/services" label="SERVICES" scrolled={scrolled} active={pathname === "/services"} />
          <Nav href="/qhse" label="QHSE" scrolled={scrolled} active={pathname === "/qhse"} />
          <Nav href="/gallery" label="GALLERY" scrolled={scrolled} active={pathname === "/gallery"} />
          <Nav href="/careers" label="CAREERS" scrolled={scrolled} active={pathname === "/careers"} />
          <Nav href="/contact" label="CONTACT" scrolled={scrolled} active={pathname === "/contact"} />

          <Link
            href="/contact"
            style={{
              marginLeft: "auto",
              backgroundColor: "#0f7c8f",
              color: "#ffffff",
              textDecoration: "none",
              padding: scrolled ? "13px 26px" : "17px 34px",
              borderRadius: "6px",
              fontWeight: 900,
              fontSize: "15px",
              transition: "all 0.35s ease",
            }}
          >
            + GET A QUOTE
          </Link>
        </nav>
      </div>
    </header>
  );
}

function InfoBox({
  icon,
  title,
  text,
  textColor,
  subTextColor,
  scrolled,
}: {
  icon: string;
  title: string;
  text: string;
  textColor: string;
  subTextColor: string;
  scrolled: boolean;
}) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "12px",
      }}
    >
      <div
        style={{
          width: scrolled ? "42px" : "56px",
          height: scrolled ? "42px" : "56px",
          border: scrolled
            ? "1px solid #e5e7eb"
            : "1px solid rgba(255,255,255,0.4)",
          borderRadius: "6px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: scrolled ? "#0f7c8f" : "#ffffff",
          fontSize: scrolled ? "18px" : "24px",
          transition: "all 0.35s ease",
        }}
      >
        {icon}
      </div>

      <div>
        <strong
          style={{
            display: "block",
            color: textColor,
            fontSize: scrolled ? "13px" : "15px",
            fontWeight: 900,
            transition: "all 0.35s ease",
          }}
        >
          {title}
        </strong>

        <p
          style={{
            margin: "5px 0 0",
            color: subTextColor,
            fontSize: scrolled ? "12px" : "14px",
            transition: "all 0.35s ease",
          }}
        >
          {text}
        </p>
      </div>
    </div>
  );
}

function Nav({
  href,
  label,
  scrolled,
  active,
}: {
  href: string;
  label: string;
  scrolled: boolean;
  active: boolean;
}) {
  return (
    <Link
      href={href}
      style={{
        color: active ? "#0f7c8f" : scrolled ? "#102331" : "#ffffff",
        textDecoration: "none",
        fontSize: "15px",
        fontWeight: 900,
        transition: "all 0.25s ease",
        borderBottom: active ? "3px solid #0f7c8f" : "3px solid transparent",
        paddingBottom: "8px",
      }}
    >
      {label}
    </Link>
  );
}