import Navbar from "../components/Navbar";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import WhatsApp from "../components/WhatsApp";

export default function ContactPage() {
  return (
    <>
      <Navbar />

      <main
        style={{
          backgroundColor: "#f8fafc",
          paddingTop: "150px",
        }}
      >
        <section
          style={{
            textAlign: "center",
            padding: "80px 24px 40px",
          }}
        >
          <p
            style={{
              color: "#0f7c8f",
              fontWeight: 900,
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              marginBottom: "14px",
            }}
          >
            Contact Us
          </p>

          <h1
            style={{
              margin: 0,
              fontSize: "48px",
              color: "#102331",
              fontWeight: 900,
            }}
          >
            Let's Build Something Great Together
          </h1>

          <p
            style={{
              maxWidth: "720px",
              margin: "24px auto 0",
              color: "#475569",
              fontSize: "18px",
              lineHeight: 1.8,
            }}
          >
            Whether you need water network construction, HDPE pipeline
            installation, maintenance, or engineering consultation, our team is
            ready to help you.
          </p>
        </section>

        <Contact />
      </main>

      <Footer />
      <WhatsApp />
    </>
  );
}