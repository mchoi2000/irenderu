import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import AboutSection from "./components/AboutSection";
import StudioSection from "./components/StudioSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

const NAV_ITEMS = [
  { id: "home", label: "HOME" },
  { id: "about", label: "ABOUT" },
  { id: "services", label: "Gallery" },
  { id: "connect", label: "Contact" },
];

function App() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const connectSectionRef = useRef(null);
  const formRef = useRef(null);
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

const handleSendMessage = (e) => {
  e.preventDefault();
  if (!formRef.current) return;

  setStatus("sending");

  emailjs
    .sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      formRef.current,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
    .then(() => {
      setStatus("sent");
      formRef.current.reset();

      // 👇 2초 뒤 자동으로 원래 버튼 텍스트로 복구
      setTimeout(() => {
        setStatus("idle");
      }, 2000);
    })
    .catch((err) => {
      console.error("EmailJS error:", err);
      setStatus("error");

      // 에러 메시지도 몇 초 후 사라지게 하려면:
      setTimeout(() => {
        setStatus("idle");
      }, 3000);
    });
};

  return (
    <div className="app">
      <Header onNavClick={scrollTo} />
      <Hero onContactClick={() => scrollTo("contact")} />
      <main>
        <AboutSection />
        <StudioSection />
        <ContactSection
          sectionRef={connectSectionRef}
          formRef={formRef}
          status={status}
          onSubmit={handleSendMessage}
        />
      </main>
      <Footer />
    </div>
  );
}

export default App;