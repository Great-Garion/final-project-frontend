import Logo from "../Logo.png";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../style.css";

function Navbar() {
  return (
    <div>
      <Container>
        <div>
          <header>
            <img src={Logo} style={{ width: "15%" }} alt="logo" />
            <nav className="navMenu">
              <ul className="nav__links">
                <li>
                  <Link to="/home" className="nav-btn fs-4">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="nav-btn fs-4">
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="nav-btn fs-4">
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
            <button className="masuk">Login</button>
          </header>
        </div>
      </Container>
    </div>
  );
}

export default Navbar;
