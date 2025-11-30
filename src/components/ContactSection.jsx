// src/components/ContactSection.jsx
import React from "react";

function ContactSection({ sectionRef, formRef, status, onSubmit }) {
  return (
    <section
      className="section section--muted"
      id="contact"
      ref={sectionRef}
    >
      <div className="section__inner section__inner--split">
        <div>
          <h2 className="section__title">CONTACT</h2>
          <div className="section__divider section__divider--long" />
          <p className="section__text">
            Tell us a little about your story, your work, or the space you’d
            like to create online. We’ll reply with thoughts on how we could
            quietly build it together.
          </p>
        </div>

        <form ref={formRef} className="connect-form" onSubmit={onSubmit}>
          <label className="connect-form__field">
            <span>Your name</span>
            <input name="user_name" type="text" required />
          </label>

          <label className="connect-form__field">
            <span>Email</span>
            <input name="user_email" type="email" required />
          </label>

          <label className="connect-form__field">
            <span>What would you like to create?</span>
            <textarea
              name="message"
              rows={4}
              placeholder="A personal studio site, a calm learning space, or something entirely different..."
              required
            />
          </label>

          <button
            className="connect-form__submit"
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
            <p className="connect-form__status connect-form__status--error">
              Something went wrong. Please try again.
            </p>
          )}
          {status === "sent" && (
            <p className="connect-form__status connect-form__status--ok">
              Thank you — we’ll get back to you soon.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}

export default ContactSection;