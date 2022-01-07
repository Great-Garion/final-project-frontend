import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import {
  FaFacebookF,
  FaTelegramPlane,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

import Logo from "../images/Logo.png";
import "./Footer.css";

function Footer() {
  return (
    <footer>
      <Container className="container">
        <Row xs={1} md={4} className="row g-4">
          <div>
            <img
              src={Logo}
              style={{ width: "auto", height: "70px" }}
              alt="logo"
            />
            <h6>Find new tourist spots here and visit with your loved ones</h6>
            <div className="sosmed">
              <Link to={{pathname:"https://www.facebook.com/font.artdie"}} target="_blank">
                <FaFacebookF />
              </Link>
              <Link to={{pathname:"https://www.instagram.com/dellila_26"}} target="_blank">
                <FaInstagram />
              </Link>
              <Link to={{pathname:"https://web.telegram.org/z/#-1224624669"}} target="_blank">
                <FaTelegramPlane />
              </Link>
              <Link to={{pathname:"https://www.linkedin.com/in/inayat-rahmat-684380227"}} target="_blank">
                <FaLinkedinIn />
              </Link>
            </div>
          </div>
          <Col>
            <h4 className="judulFooter">Company</h4>
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
          </Col>
          <Col>
            <h4 className="judulFooter">Tour</h4>
              <li>
                <Link to="/">Sumbawa</Link>
              </li>
              <li>
                <Link to="/">Sumbawa Barat</Link>
              </li>
          </Col>
          <Col>
            <h4 className="judulFooter">Reference</h4>
              <li>
                <Link to="/">Tourism resort</Link>
              </li>
              <li>
                <Link to="/">Hotel & Lodging</Link>
              </li>
              <li>
                <Link to="/">Culinary</Link>
              </li>
              <li>
                <Link to="/">Gallery</Link>
              </li>
          </Col>
        </Row>
      </Container>
      <div className="copyright">
        <p style={{textAlign: "center"}}>Copyright © 2022 LokaKota</p>
      </div>
    </footer>
  );
}

export default Footer;
