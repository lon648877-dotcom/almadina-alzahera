import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsApp from "../components/WhatsApp";
import Image from "next/image";

export default function GalleryPage() {
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
    <>
      <Navbar />

      <main style={{ backgroundColor: "#f8fafc", paddingTop: "150px" }}>
        <section style={{ padding: "90px 24px 40px", textAlign: "center" }}>
          <p
            style={{
              color: "#0f7c8f",
              fontWeight: 900,
              letterSpacing: "0.16em",
              marginBottom: "14px",
            }}
          >
            PROJECT GALLERY
          </p>

          <h1
            style={{
              fontSize: "46px",
              fontWeight: 900,
              color: "#102331",
              margin: 0,
            }}
          >
            Our Work in Action
          </h1>
        </section>

        <section
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "30px 24px 100px",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "24px",
          }}
        >
          {images.map((src, index) => (
            <div
              key={index}
              style={{
                position: "relative",
                height: "360px",
                borderRadius: "18px",
                overflow: "hidden",
                backgroundColor: "#ffffff",
                boxShadow: "0 18px 35px rgba(15,35,49,.12)",
              }}
            >
              <Image
                src={src}
                alt={`Water project ${index + 1}`}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                style={{ objectFit: "cover" }}
              />
            </div>
          ))}
        </section>
      </main>

      <Footer />
      <WhatsApp />
    </>
  );
}