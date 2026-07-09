import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsApp from "../components/WhatsApp";

export default function QHSEPage() {
  const items = [
    {
      title: "Quality",
      icon: "✓",
      text: "We deliver water infrastructure works with strict quality control, proper documentation, and reliable execution standards.",
    },
    {
      title: "Health",
      icon: "+",
      text: "We maintain a safe and healthy workplace by applying preventive measures and protecting our workforce on every site.",
    },
    {
      title: "Safety",
      icon: "⚠",
      text: "Safety is our priority. We follow site safety procedures, risk assessments, and continuous supervision during all operations.",
    },
    {
      title: "Environment",
      icon: "♻",
      text: "We are committed to reducing environmental impact through responsible work practices, waste control, and sustainable operations.",
    },
  ];

  return (
    <>
      <Navbar />

      <main style={{ paddingTop: "150px" }}>
        <section
          style={{
            background:
              "linear-gradient(135deg, rgba(16,35,49,0.95), rgba(15,124,143,0.9))",
            color: "#ffffff",
            padding: "120px 24px 100px",
            textAlign: "center",
          }}
        >
          <h1 style={{ fontSize: "52px", fontWeight: 900, margin: 0 }}>
            QHSE
          </h1>

          <p
            style={{
              maxWidth: "760px",
              margin: "22px auto 0",
              fontSize: "18px",
              lineHeight: 1.8,
            }}
          >
            Quality, Health, Safety & Environment are at the core of our water
            infrastructure operations.
          </p>
        </section>

        <section style={{ padding: "90px 24px", backgroundColor: "#f8fafc" }}>
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
                OUR COMMITMENT
              </p>

              <h2
                style={{
                  color: "#102331",
                  fontSize: "40px",
                  fontWeight: 900,
                  margin: 0,
                }}
              >
                Building Safely, Delivering Quality
              </h2>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
                gap: "28px",
              }}
            >
              {items.map((item, index) => (
                <div
                  key={index}
                  style={{
                    backgroundColor: "#ffffff",
                    padding: "36px",
                    borderRadius: "20px",
                    border: "1px solid #e2e8f0",
                    boxShadow: "0 14px 35px rgba(15,35,49,0.08)",
                  }}
                >
                  <div
                    style={{
                      width: "68px",
                      height: "68px",
                      borderRadius: "18px",
                      backgroundColor: "#e6f7fa",
                      color: "#0f7c8f",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "34px",
                      fontWeight: 900,
                      marginBottom: "24px",
                    }}
                  >
                    {item.icon}
                  </div>

                  <h3
                    style={{
                      color: "#102331",
                      fontSize: "25px",
                      fontWeight: 900,
                      marginBottom: "14px",
                    }}
                  >
                    {item.title}
                  </h3>

                  <p
                    style={{
                      color: "#475569",
                      fontSize: "16px",
                      lineHeight: 1.8,
                      margin: 0,
                    }}
                  >
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          style={{
            backgroundColor: "#102331",
            color: "#ffffff",
            padding: "70px 24px",
          }}
        >
          <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
            <h2 style={{ fontSize: "36px", fontWeight: 900, margin: 0 }}>
              Our QHSE Policy
            </h2>

            <p style={{ fontSize: "17px", lineHeight: 1.9, marginTop: "24px" }}>
              ALMADINA ALZAHERA is committed to delivering water network
              projects with the highest standards of quality and safety. We aim
              to protect our employees, clients, communities, and the environment
              while continuously improving our performance across all operations.
            </p>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsApp />
    </>
  );
}