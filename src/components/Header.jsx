// src/components/Header.jsx
import React from "react";

const NAV_ITEMS = [
  { id: "home", label: "home" },
  { id: "gallery", label: "gallery" },
  { id: "contact", label: "contact" },
];

function Header({ onNavClick }) {
  return (
    <header className="header">
      <div className="header__brand">
        <span className="header__brand-main">Render & You</span>
      </div>

      <nav className="header__nav">
        {NAV_ITEMS.map((item) => (
          <button
            key={item.id}
            className="header__nav-item"
            onClick={() => onNavClick(item.id)}
          >
            {item.label}
          </button>
        ))}
      </nav>
    </header>
  );
}

export default Header;