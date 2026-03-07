import { Link } from "react-scroll";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">EquiValic</div>

      <div className="nav-links">
        <Link to="home" smooth duration={500} className="nav-btn">
          Home
        </Link>

        <Link to="product" smooth duration={500} className="nav-btn">
          Product
        </Link>

        <Link to="blog" smooth duration={500} className="nav-btn">
          Blog
        </Link>

        <Link to="contact" smooth duration={500} className="nav-btn">
          Contact
        </Link>
      </div>
    </nav>
  );
}
