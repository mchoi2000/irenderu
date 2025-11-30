import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./ContactSection.css";

function ContactSection() {
  const formRef = useRef(null);
  const [status, setStatus] = useState("idle");

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
        setTimeout(() => setStatus("idle"), 3500);
      })
      .catch(() => {
        setStatus("error");
      });
  };

  return (
    <section id="contact" className="contact">
      <div className="contact__inner">

        <header className="contact__header">
          <p className="contact__eyebrow">CONTACT</p>
          <h2 className="contact__headline">
            Tell us what kind of space you want to render
          </h2>
          <p className="contact__subtitle">
            Bright and joyful, soft and calm, or sharp and minimal—iRenderU
            shapes the web around the way you think, work, and connect.
          </p>
        </header>

        <form
          ref={formRef}
          className="contact-form"
          onSubmit={handleSendMessage}
        >
          <label className="contact-form__field">
            <span>Your name</span>
            <input name="user_name" type="text" required />
          </label>

          <label className="contact-form__field">
            <span>Email</span>
            <input name="user_email" type="email" required />
          </label>

          <label className="contact-form__field">
            <span>What would you like to create?</span>
            <textarea
              name="message"
              rows={4}
              placeholder="A new homepage, a studio site, a learning space, or something else entirely..."
              required
            />
          </label>

          <button
            className="contact-form__button"
            type="submit"
            disabled={status === "sending"}
          >
            {status === "sending"
              ? "Sending…"
              : status === "sent"
              ? "Sent ✓"
              : "Send message"}
          </button>

          {status === "error" && (
            <p className="contact-form__status contact-form__status--error">
              Something went wrong. Please try again.
            </p>
          )}
          {status === "sent" && (
            <p className="contact-form__status contact-form__status--ok">
              Thank you. We'll get back to you soon.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}

export default ContactSection;