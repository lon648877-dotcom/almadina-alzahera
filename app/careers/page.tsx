import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsApp from "../components/WhatsApp";

const steps = [
  {
    title: "Application Process",
    text: "You can apply online through our website and our team will review your application carefully. You can also contact us by email for available opportunities.",
  },
  {
    title: "Interview",
    text: "A face-to-face interview will be arranged to understand your experience, expectations, communication skills, and suitability for the role.",
  },
  {
    title: "Assessment",
    text: "A simple practical or technical assessment may be conducted to evaluate your basic competency and understanding of the position.",
  },
  {
    title: "Offer",
    text: "Successful candidates will receive an employment offer and will be welcomed into a professional and supportive working environment.",
  },
];

export default function CareersPage() {
  return (
    <>
      <Navbar />

      <main className="careers-page">
        <section className="careers-hero">
          <div className="careers-hero-content">
            <p>JOIN OUR TEAM</p>

            <h1>Build Your Career With Us</h1>

            <span>
              Discover opportunities to grow, contribute and work with a
              professional team.
            </span>
          </div>
        </section>

        <section className="careers-process-section">
          <div className="careers-process-wrapper">
            <div className="careers-heading">
              <p>OUR HIRING PROCESS</p>

              <h2>A Simple and Transparent Journey</h2>

              <div />

              <span>
                Our hiring process helps us identify the right fit for our
                organization and helps you understand how, when and where you
                will fit in. It is a two-way street.
              </span>
            </div>

            <div className="careers-timeline">
              {steps.map((step, index) => (
                <TimelineItem
                  key={step.title}
                  number={index + 1}
                  title={step.title}
                  text={step.text}
                  side={index % 2 === 0 ? "left" : "right"}
                />
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsApp />
    </>
  );
}

function TimelineItem({
  number,
  title,
  text,
  side,
}: {
  number: number;
  title: string;
  text: string;
  side: "left" | "right";
}) {
  return (
    <article
      className={`careers-timeline-item careers-timeline-${side}`}
    >
      <div className="careers-timeline-card">
        <span className="careers-step-number">STEP {number}</span>

        <h3>{title}</h3>

        <p>{text}</p>
      </div>

      <div className="careers-timeline-marker">✓</div>
    </article>
  );
}