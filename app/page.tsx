import Navbar from "./components/Navbar";
import HomeSection from "./components/Home";
import About from "./components/About";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

export default function Home() {
  return (
    <main className="min-h-screen bg-background selection:bg-primary/30 selection:text-primary">
      <Navbar />
      <ScrollToTop />
      <HomeSection />
      <About />
      <Project />
      <Contact />
      <Footer />
    </main>
  );
}
