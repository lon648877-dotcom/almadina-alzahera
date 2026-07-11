"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "HOME" },
  { href: "/about", label: "ABOUT" },
  { href: "/services", label: "SERVICES" },
  { href: "/qhse", label: "QHSE" },
  { href: "/gallery", label: "GALLERY" },
  { href: "/careers", label: "CAREERS" },
  { href: "/contact", label: "CONTACT" },
];

export default function Navbar() {
  const pathname = usePathname();

  const isHomePage = pathname === "/";

  const [scrolled, setScrolled] = useState(!isHomePage);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(!isHomePage || window.scrollY > 70);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isHomePage]);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const solidHeader = scrolled || menuOpen || !isHomePage;

  return (
    <header
      className={`main-header ${solidHeader ? "main-header-solid" : ""}`}
    >
      <div className="main-header-container">
        <div className="header-top">
          <Link href="/" className="header-brand">
            <Image
              src="/logo.png"
              alt="ALMADINA ALZAHERA"
              width={120}
              height={82}
              priority
              className="header-logo"
            />

            <div className="header-company">
              <p className="header-company-name">ALMADINA ALZAHERA</p>

              <p className="header-company-line">
                GEN.MAINT AND WATER
              </p>

              <p className="header-company-line">
                DISTRIBUTION - L.L.C - S.P.C
              </p>
            </div>
          </Link>

          <div className="header-contact">
            <ContactInfo
              icon="⌂"
              title="P.O.Box: 18402"
              text="Al Ain, Abu Dhabi, UAE"
            />

            <ContactInfo
              icon="✉"
              title="Send us a mail"
              text="info@almadinaalzahera.com"
            />
          </div>

          <button
            type="button"
            className={`menu-toggle ${menuOpen ? "menu-toggle-open" : ""}`}
            onClick={() => setMenuOpen((current) => !current)}
            aria-label="Open navigation menu"
            aria-expanded={menuOpen}
          >
            <span />
            <span />
            <span />
          </button>
        </div>

        <nav className="desktop-navigation">
          <div className="desktop-navigation-links">
            {navLinks.map((link) => (
              <NavigationLink
                key={link.href}
                href={link.href}
                label={link.label}
                active={pathname === link.href}
              />
            ))}
          </div>

          <Link href="/contact" className="desktop-quote-button">
            + GET A QUOTE
          </Link>
        </nav>
      </div>

      <div
        className={`mobile-navigation-overlay ${
          menuOpen ? "mobile-navigation-overlay-open" : ""
        }`}
        onClick={() => setMenuOpen(false)}
      >
        <div
          className={`mobile-navigation ${
            menuOpen ? "mobile-navigation-open" : ""
          }`}
          onClick={(event) => event.stopPropagation()}
        >
          <nav className="mobile-navigation-links">
            {navLinks.map((link) => {
              const active = pathname === link.href;

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`mobile-navigation-link ${
                    active ? "mobile-navigation-link-active" : ""
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="mobile-navigation-contact">
            <p>
              <strong>P.O.Box:</strong> 18402
            </p>

            <p>Al Ain, Abu Dhabi, UAE</p>

            <a href="mailto:info@almadinaalzahera.com">
              info@almadinaalzahera.com
            </a>
          </div>

          <Link href="/contact" className="mobile-quote-button">
            + GET A QUOTE
          </Link>
        </div>
      </div>
    </header>
  );
}

function ContactInfo({
  icon,
  title,
  text,
}: {
  icon: string;
  title: string;
  text: string;
}) {
  return (
    <div className="header-contact-item">
      <div className="header-contact-icon">{icon}</div>

      <div>
        <strong>{title}</strong>
        <p>{text}</p>
      </div>
    </div>
  );
}

function NavigationLink({
  href,
  label,
  active,
}: {
  href: string;
  label: string;
  active: boolean;
}) {
  return (
    <Link
      href={href}
      className={`desktop-navigation-link ${
        active ? "desktop-navigation-link-active" : ""
      }`}
    >
      {label}
    </Link>
  );
}