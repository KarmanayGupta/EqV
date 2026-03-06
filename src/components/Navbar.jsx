import { Link } from "react-scroll";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">EquiValic</div>

      <div className="nav-links">
        <Link to="home" smooth duration={500}>
          Home
        </Link>
        <Link to="product" smooth duration={500}>
          Product
        </Link>
        <Link to="blog" smooth duration={500}>
          Blog
        </Link>
        <Link to="contact" smooth duration={500}>
          Contact
        </Link>
      </div>
    </nav>
  );
}
