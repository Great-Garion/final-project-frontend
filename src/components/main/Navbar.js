import Cookies from "js-cookie";
import { Link, useHistory } from "react-router-dom";
import { useContext } from "react";
import { Container } from "react-bootstrap";

import { UserContext } from "../../Context/UserProvider";
import Logo from "../images/Logo.png";
import "../all.css";

function Navbar() {
  const history = useHistory();
  let { isLogin, setIsLogin } = useContext(UserContext);

  function logOut() {
    if (isLogin) {
      Cookies.remove("lokaKota");
      setIsLogin(false);
    }
    history.push("/login");
  }

  return (
    <div>
      <nav className="navMenu">
        <Container>
          <div>
            <header>
              <img
                src={Logo}
                style={{ width: "15%" }}
                alt="logo"
                onClick={() => history.push("/")}
              />
              <ul className="nav__links">
                <li>
                  <Link to="/home" className="nav-btn fs-4">
                    <b>Home</b>
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
              <button className="masuk" onClick={logOut}>
                {isLogin ? " Logout" : " Login"}
              </button>
            </header>
          </div>
        </Container>
      </nav>
    </div>
  );
}

export default Navbar;
