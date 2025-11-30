// src/components/AboutSection.jsx
import React from "react";

function AboutSection() {
  return (
    <section id="about" className="section section--light about">

      {/* 🎯 섹션 타이틀: 컬럼 밖! */}
      <div className="about__header">
        <h2 className="section__title">ABOUT</h2>
        <div className="section__divider section__divider--long" />
      </div>

      {/* 🎯 그리드: 왼쪽 텍스트, 오른쪽 이미지 */}
      <div className="about__grid">
        <div className="about__col about__col--left">
          <p className="section__text">
            For years, we've worked where business meets design — helping teams
            build meaningful digital experiences that stay modern, elegant, and grounded.
          </p>
          <p className="section__text">
            At Render & You, we partner with thoughtful individuals and small teams
            to shape a digital presence with quiet cinematic depth — from refined
            landing pages to learning tools and personal portfolios that feel unmistakably you.
          </p>
        </div>

        <div className="about__col about__col--right">
          <div className="about__image">
            <img src="/about-studio.jpg" alt="Render & You studio mood" />
          </div>
        </div>
      </div>

    </section>
  );
}

export default AboutSection;