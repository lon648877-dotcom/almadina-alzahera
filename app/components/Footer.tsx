"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div className="footer-column">
          <h3>ABOUT US</h3>
          <div className="footer-heading-line" />

          <p className="footer-about-text">
            ALMADINA ALZAHERA is a construction and engineering company
            providing reliable infrastructure, civil contracting, water
            distribution and technical services with a strong focus on quality,
            safety and commitment.
          </p>

          <Link href="/about" className="footer-read-more">
            READ MORE →
          </Link>
        </div>

        <div className="footer-column">
          <h3>CONTACT US</h3>
          <div className="footer-heading-line" />

          <div className="footer-contact-list">
            <div className="footer-contact-item">
              <span className="footer-contact-icon">📍</span>

              <p>
                P.O.Box: 18402
                <br />
                Al Ain, Abu Dhabi, UAE
              </p>
            </div>

            <div className="footer-contact-item">
              <span className="footer-contact-icon">☎</span>

              <a href="tel:+971507605744">+971 50 760 5744</a>
            </div>

            <div className="footer-contact-item">
              <span className="footer-contact-icon">✉</span>

              <a href="mailto:info@almadinaalzahera.com">
                info@almadinaalzahera.com
              </a>
            </div>
          </div>

          <div className="footer-socials">
            <a href="#" aria-label="Facebook">
              f
            </a>

            <a href="#" aria-label="Instagram">
              ◎
            </a>

            <a href="#" aria-label="LinkedIn">
              in
            </a>

            <a href="#" aria-label="YouTube">
              ▶
            </a>
          </div>
        </div>

        <div className="footer-column footer-map-column">
          <h3>LOCATE US</h3>
          <div className="footer-heading-line" />

          <div className="footer-map">
            <iframe
              title="ALMADINA ALZAHERA Location"
              src="https://www.google.com/maps?q=Al%20Ain%20Abu%20Dhabi%20UAE&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} ALMADINA ALZAHERA. All Rights Reserved.
        </p>

        <div className="footer-bottom-links">
          <Link href="/">Home</Link>
          <Link href="/services">Services</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </div>
    </footer>
  );
}