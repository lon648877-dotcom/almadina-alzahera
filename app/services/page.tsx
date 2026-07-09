import Navbar from "../components/Navbar";
import Services from "../components/Services";
import Footer from "../components/Footer";
import WhatsApp from "../components/WhatsApp";

export default function ServicesPage() {
  return (
    <>
      <Navbar />

      <main
        style={{
          backgroundColor: "#ffffff",
          paddingTop: "230px",
        }}
      >
        <Services />
      </main>

      <Footer />
      <WhatsApp />
    </>
  );
}