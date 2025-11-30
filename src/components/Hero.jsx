// src/components/Hero.jsx
import React, { useEffect, useState } from "react";
import "../App.css";

function Hero({ onContactClick }) {
  const [videoAvailable, setVideoAvailable] = useState(true);

  useEffect(() => {
    const video = document.createElement("video");
    video.src = "/intro.mp4";

    video.oncanplay = () => setVideoAvailable(true);
    video.onerror = () => setVideoAvailable(false);
  }, []);

  return (
    <section id="home" className="hero">
      {videoAvailable ? (
        <video
          className="hero__bg"
          src="/intro.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
      ) : (
        <img
          className="hero__bg"
          src="/intro.jpg"
          alt="Intro visual"
        />
      )}

      <div className="hero__overlay" />

      <div className="hero__content">
        <p className="hero__eyebrow">TIMELESS Life CHAPTER</p>
        <h1 className="hero__title">
          Uniquely-crafted space
          <br />
          for your authentic self
        </h1>
        <p className="hero__subtitle">
          Build a smart place where feels genuinely you
        </p>
        <button className="hero__button" onClick={onContactClick}>
          Contact
        </button>
      </div>
    </section>
  );
}

export default Hero;