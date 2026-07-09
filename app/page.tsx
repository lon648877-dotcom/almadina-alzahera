import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import AboutHome from "./components/AboutHome";
import Stats from "./components/Stats";
import Services from "./components/Services";
import RecentProjects from "./components/RecentProjects";
import WhyChoose from "./components/WhyChoose";
import ValueSection from "./components/ValueSection";
import Clientele from "./components/Clientele";
import Footer from "./components/Footer";
import WhatsApp from "./components/WhatsApp";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <AboutHome />
      <Stats />
      <Services />
      <RecentProjects />
      <WhyChoose />
      <ValueSection />
      <Clientele />
      <Footer />
      <WhatsApp />
    </>
  );
}