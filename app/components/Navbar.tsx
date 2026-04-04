"use client";

import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navStyle: React.CSSProperties = {
    position: "sticky",
    top: 0,
    width: "100%",
    background: scrolled ? "rgba(255,255,255,0.95)" : "transparent",
    boxShadow: scrolled ? "0 2px 8px rgba(0,0,0,0.1)" : "none",
    transition: "all 0.3s ease",
    zIndex: 1000,
  };

  const ulStyle: React.CSSProperties = {
    display: "flex",
    justifyContent: "center",
    gap: "2rem",
    listStyle: "none",
    margin: 0,
    padding: "1rem 0",
    fontFamily: "sans-serif",
  };

  const linkStyle: React.CSSProperties = {
    textDecoration: "none",
    color: "#333",
    fontWeight: 500,
    transition: "color 0.2s",
  };

  const linkHoverStyle: React.CSSProperties = {
    color: "#d6336c",
  };

  return (
    <nav style={navStyle}>
      <ul style={ulStyle}>
        {[
          { label: "Vigsel", href: "#vigsel" },
          { label: "Festen", href: "#fest" },
          { label: "Bra att veta", href: "#info" },
          { label: "Gåvor", href: "#gavor" },
          { label: "Tal", href: "#tal" },
          { label: "OSA", href: "#osa" },
        ].map((item) => (
          <li key={item.href}>
            <a
              href={item.href}
              style={linkStyle}
              onMouseEnter={(e) =>
                ((e.target as HTMLAnchorElement).style.color =
                  linkHoverStyle.color!)
              }
              onMouseLeave={(e) =>
                ((e.target as HTMLAnchorElement).style.color =
                  linkStyle.color!)
              }
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}