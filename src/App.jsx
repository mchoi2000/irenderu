import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ContactForm from "./components/ContactForm";
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
      <main>
        <section id="contact" className="section section--muted">
          <ContactForm />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;