import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import Logo from "../Logo.png";
import {
  FaFacebookF,
  FaWhatsapp,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import "./Footer.css";

function Footer() {
  return (
    <footer>
      <Container className="container">
        <Row xs={1} md={4} className="row g-4">
          <div>
            <img
              src={Logo}
              style={{ width: "130px", height: "70px" }}
              alt="logo"
            />
            <h6>find new tourist spots here and visit with your loved ones</h6>
            <div className="sosmed">
              <Link to="/">
                <FaFacebookF />
              </Link>
              <Link to="/">
                <FaInstagram />
              </Link>
              <Link to="/">
                <FaWhatsapp />
              </Link>
              <Link to="/">
                <FaTwitter />
              </Link>
            </div>
          </div>
          <Col>
            <h4>Company</h4>
            <ul>
              <li>
                <Link to="/">About Us</Link>
              </li>
              <li>
                <Link to="/">Support</Link>
              </li>
              <li>
                <Link to="/">Contact</Link>
              </li>
              <li>
                <Link to="/">Privacy Police</Link>
              </li>
            </ul>
          </Col>
          <Col>
            <h4>Tour</h4>
            <ul>
              <li>
                <Link to="/">Sumbawa</Link>
              </li>
              <li>
                <Link to="/">Sumbawa Barat</Link>
              </li>
            </ul>
          </Col>
          <Col>
            <h4>Referensi</h4>
            <ul>
              <li>
                <Link to="/">Tempat Wisata</Link>
              </li>
              <li>
                <Link to="/">Hotek & Penginapan</Link>
              </li>
              <li>
                <Link to="/">Kuliner</Link>
              </li>
              <li>
                <Link to="/">Belanja</Link>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
