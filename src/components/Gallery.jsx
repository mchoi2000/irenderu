import React from "react";
import "./Gallery.css";

const PROJECTS = [
  {
    id: "bright-brand-home",
    tag: "Homepage",
    title: "Bright, joyful studio home",
    vibe: "Playful · Clean · Optimistic",
    description:
      "A welcoming landing page for a creative brand that loves color, motion, and clear storytelling.",
    linkLabel: "View concept",
    url: "#"
  },
  {
    id: "calm-coach-space",
    tag: "Personal site",
    title: "Calm space for a modern coach",
    vibe: "Soft · Trustworthy · Minimal",
    description:
      "A focused one-page site for a coach who wanted a safe, serene home to meet their clients online.",
    linkLabel: "View concept",
    url: "#"
  },
  {
    id: "smart-learning",
    tag: "Learning tool",
    title: "Smart micro-learning hub",
    vibe: "Structured · Friendly · Clear",
    description:
      "A small, sharp web app for studying and note-taking without distractions or noisy interfaces.",
    linkLabel: "View concept",
    url: "#"
  },
  {
    id: "product-story",
    tag: "Story page",
    title: "Product story in motion",
    vibe: "Dynamic · Visual · Precise",
    description:
      "A scroll-based story that slowly reveals the heart, function, and personality of a new product.",
    linkLabel: "View concept",
    url: "#"
  },
  {
    id: "studio-portfolio",
    tag: "Portfolio",
    title: "Studio-style portfolio grid",
    vibe: "Neat · Confident · Editorial",
    description:
      "A gallery of projects arranged like a quiet editorial page, with room for imagery and details.",
    linkLabel: "View concept",
    url: "#"
  },
  {
    id: "warm-blog",
    tag: "Journal",
    title: "Warm, conversational journal",
    vibe: "Human · Honest · Simple",
    description:
      "A writing space for sharing thoughts, resources, and stories without feeling like a typical blog.",
    linkLabel: "View concept",
    url: "#"
  }
];

function Gallery() {
  return (
    <section id="gallery" className="gallery">
      <div className="gallery__inner">
        <header className="gallery__header">
          <p className="gallery__eyebrow">GALLERY</p>
          <h2 className="gallery__title">Digital spaces we love to render</h2>
          <p className="gallery__subtitle">
            From bright, joyful homepages to calm learning tools, iRenderU shapes
            the online spaces that feel right for you and your world.
          </p>
        </header>

        <div className="gallery__grid">
          {PROJECTS.map((project) => (
            <article key={project.id} className="gallery-card">
              <div className="gallery-card__tag">{project.tag}</div>

              <h3 className="gallery-card__title">{project.title}</h3>

              <p className="gallery-card__vibe">{project.vibe}</p>

              <p className="gallery-card__desc">{project.description}</p>

              <button
                className="gallery-card__link"
                type="button"
                onClick={() => {
                  if (project.url === "#") return;
                  window.open(project.url, "_blank", "noopener,noreferrer");
                }}
              >
                {project.linkLabel}
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Gallery;