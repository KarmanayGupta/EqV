import { useState } from "react";
import { Link } from "react-scroll";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">EquiValic</div>

      {/* NAV LINKS */}
      <div className={`nav-links ${menuOpen ? "active" : ""}`}>
        <Link
          to="home"
          smooth
          duration={500}
          className="nav-btn"
          onClick={() => setMenuOpen(false)}
        >
          Home
        </Link>

        <Link
          to="product"
          smooth
          duration={500}
          className="nav-btn"
          onClick={() => setMenuOpen(false)}
        >
          Product
        </Link>

        <Link
          to="blog"
          smooth
          duration={500}
          className="nav-btn"
          onClick={() => setMenuOpen(false)}
        >
          Blog
        </Link>

        <Link
          to="contact"
          smooth
          duration={500}
          className="nav-btn"
          onClick={() => setMenuOpen(false)}
        >
          Contact
        </Link>
      </div>

      {/* HAMBURGER */}
      <div
        className={`hamburger ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
}
