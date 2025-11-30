import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Gallery from "./components/Gallery";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

function App() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="app">
      <Header onNavClick={scrollTo} />
      <Hero onContactClick={() => scrollTo("contact")} />
      <Gallery />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;