// src/components/ContactForm.jsx
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./ContactForm.css";

function ContactForm() {
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

        // SENT → 3초 후 다시 idle 로 복귀
        setTimeout(() => setStatus("idle"), 3000);
      })
      .catch((err) => {
        console.error("EmailJS error:", err);
        setStatus("error");
      });
  };

  return (
    <form ref={formRef} className="contact-form" onSubmit={handleSendMessage}>
      <label className="contact-form__field">
        <span>Your name</span>
        <input name="user_name" type="text" required />
      </label>

      <label className="contact-form__field">
        <span>Email</span>
        <input name="user_email" type="email" required />
      </label>

      <label className="contact-form__field">
        <span>Message</span>
        <textarea
          name="message"
          rows={4}
          placeholder="Tell me about your idea..."
          required
        />
      </label>

      <button
        className="contact-form__submit"
        type="submit"
        disabled={status === "sending"}
      >
        {status === "sending"
          ? "Sending…"
          : status === "sent"
          ? "Sent ✓"
          : "Send Message"}
      </button>

      {status === "error" && (
        <p className="contact-form__status contact-form__status--error">
          Something went wrong. Please try again.
        </p>
      )}
      {status === "sent" && (
        <p className="contact-form__status contact-form__status--ok">
          Thank you — I'll be in touch soon.
        </p>
      )}
    </form>
  );
}

export default ContactForm;