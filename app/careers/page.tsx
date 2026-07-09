import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsApp from "../components/WhatsApp";

export default function CareersPage() {
  return (
    <>
      <Navbar />

      <main style={{ backgroundColor: "#ffffff", paddingTop: "150px" }}>
        <section
          id="hiring-process"
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "90px 24px 90px",
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
            Careers
          </p>

          <h1
            style={{
              fontSize: "42px",
              fontWeight: 900,
              color: "#102331",
              margin: 0,
            }}
          >
            OUR HIRING PROCESS
          </h1>

          <div
            style={{
              width: "70px",
              height: "3px",
              backgroundColor: "#0f7c8f",
              margin: "16px 0 28px",
            }}
          />

          <p
            style={{
              marginBottom: "55px",
              lineHeight: 1.8,
              color: "#475569",
              fontSize: "17px",
              maxWidth: "780px",
            }}
          >
            Our hiring process helps us identify the right fit for our
            organization and helps you understand how, when and where you will
            fit in. It is a two-way street.
          </p>

          <div
            style={{
              position: "relative",
              maxWidth: "900px",
              margin: "0 auto",
              padding: "20px 0",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: 0,
                bottom: 0,
                left: "50%",
                width: "3px",
                backgroundColor: "#0f7c8f",
                transform: "translateX(-50%)",
              }}
            />

            <TimelineItem
              side="left"
              title="Application Process"
              text="You can apply online through our website and our team will review your application carefully."
            />

            <TimelineItem
              side="right"
              title="Interview"
              text="A face-to-face interview will be arranged to understand your experience, expectations and attitude towards work."
            />

            <TimelineItem
              side="left"
              title="Assessment"
              text="A practical assessment may be conducted to evaluate basic competency and technical understanding."
            />

            <TimelineItem
              side="right"
              title="Offer"
              text="Successful candidates will receive an offer and join a committed team working on water infrastructure projects."
            />
          </div>

          <div style={{ textAlign: "center", marginTop: "20px" }}>
            <Link
              href="/apply-online"
              style={{
                display: "inline-flex",
                backgroundColor: "#0f7c8f",
                color: "#ffffff",
                padding: "17px 36px",
                textDecoration: "none",
                fontWeight: 900,
                borderRadius: "6px",
              }}
            >
              APPLY ONLINE →
            </Link>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsApp />
    </>
  );
}

function TimelineItem({
  side,
  title,
  text,
}: {
  side: "left" | "right";
  title: string;
  text: string;
}) {
  const isLeft = side === "left";

  return (
    <div
      style={{
        position: "relative",
        display: "flex",
        justifyContent: isLeft ? "flex-start" : "flex-end",
        marginBottom: "60px",
      }}
    >
      <div
        style={{
          width: "42%",
          backgroundColor: "#ffffff",
          padding: "28px",
          position: "relative",
          borderRadius: "16px",
          border: "1px solid #e2e8f0",
          boxShadow: "0 14px 35px rgba(16,35,49,0.08)",
        }}
      >
        <h2
          style={{
            marginTop: 0,
            color: "#102331",
            fontSize: "24px",
            fontWeight: 900,
          }}
        >
          {title}
        </h2>

        <p style={{ margin: 0, lineHeight: 1.8, color: "#475569" }}>{text}</p>

        <div
          style={{
            position: "absolute",
            top: "28px",
            [isLeft ? "right" : "left"]: "-16px",
            width: 0,
            height: 0,
            borderTop: "16px solid transparent",
            borderBottom: "16px solid transparent",
            ...(isLeft
              ? { borderLeft: "16px solid #ffffff" }
              : { borderRight: "16px solid #ffffff" }),
          }}
        />
      </div>

      <div
        style={{
          position: "absolute",
          left: "50%",
          top: "20px",
          transform: "translateX(-50%)",
          width: "54px",
          height: "54px",
          borderRadius: "50%",
          backgroundColor: "#0f7c8f",
          color: "#ffffff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "28px",
          fontWeight: 900,
          border: "6px solid #ffffff",
          zIndex: 2,
        }}
      >
        ✓
      </div>
    </div>
  );
}