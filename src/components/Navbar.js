import Logo from "../Logo.png";
import { Container } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import "../style.css";
import{UserContext} from '../Context/UserProvider'
import {useContext} from 'react'

function Navbar() {
  const history =  useHistory()

  let {isLogin, setIsLogin}=useContext(UserContext)
  
  function logOut(){
    if(isLogin){
      setIsLogin(false)
    }else{
      history.push('/login')
    }

}
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
            <button className="masuk"
            onClick={logOut}
            >
             {isLogin ? " LogOut" : " Login"}
              
              </button>
          </header>
        </div>
      </Container>
    </div>
  );
}

export default Navbar;
