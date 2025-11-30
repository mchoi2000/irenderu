// src/components/Footer.jsx
import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <span>© {new Date().getFullYear()} iRenderU</span>
      <span className="footer__dot">•</span>
      <span>Confidently crafted</span>
    </footer>
  );
}

export default Footer;