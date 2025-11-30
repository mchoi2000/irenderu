// src/components/StudioSection.jsx
import React from "react";

function StudioSection() {
  return (
    <section id="services" className="section section--muted">
      <div className="section__inner">
        <h2 className="section__title">Studio</h2>
        <div className="section__divider section__divider--long" />

        <div className="cards">
          {/* Personal Studio Site 카드 */}
          <article
            className="card card--studio"
            onClick={() =>
              window.open(
                "https://mxcii-site-flgrm52ua-mchoi2000s-projects.vercel.app",
                "_blank",
                "noopener,noreferrer"
              )
            }
          >
            <div className="card__body">
              <h3 className="card__title">Personal Studio Site</h3>
              <p className="card__text">
                A minimal, cinematic homepage where your story, work, and
                contact live in one calm, beautiful space — tailored just for
                you.
              </p>
            </div>

            <div className="card__preview">
              <div className="card__preview-image" />
              <span className="card__preview-label">
                View example · MXCII STUDIO
              </span>
            </div>
          </article>

          <article className="card">
            <h3 className="card__title">Story-driven Portfolio</h3>
            <p className="card__text">
              A flowing narrative of your projects, designed to feel like a
              quiet gallery walk instead of a noisy CV.
            </p>
          </article>

          <article className="card">
            <h3 className="card__title">Calm Learning Space</h3>
            <p className="card__text">
              Custom micro-apps and layouts for studying, journaling or
              reflecting — built around how you think and learn.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}

export default StudioSection;