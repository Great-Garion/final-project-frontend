import { useHistory } from "react-router";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";

import { UserContext } from "../Context/UserProvider";
import "./login.css";

function Login() {
  const history = useHistory();
  const [dataRegister, setDataRegister] = useState([]);
  const { isLogin, setIsLogin } = useContext(UserContext);
  const [dataLogin, setDataLogin] = useState({
    email: "",
    password: "",
  });

  const handleUser = (e) => {
    const { name, value } = e.target;
    setDataLogin({
      ...dataLogin,
      [name]: value,
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const { data } = await axios.post(
      "https://lokakota.herokuapp.com/auth/login",
      dataLogin
    );
 
    if (data.token) {
      Cookies.set("lokaKota", data.token, { expires: 100 });
      setIsLogin(true);
      history.push("/");
    }
  };

  return (
    <div>
      <div className="login-box">
        <h2>Login</h2>
        <form>
          <div className="user-box">
            <input
              type="email"
              name="email"
              className="form-control"
              onChange={handleUser}
              label="username"
              value={dataLogin.email}
              autocomplete="off"
            />
            <label>Email</label>
          </div>
          <div className="user-box">
            <input
              type="password"
              name="password"
              label="password"
              className="form-control"
              onChange={handleUser}
              value={dataLogin.password}
              autocomplete="off"

            />
            <label>Password</label>
          </div>
          <h6 style={{ color: "white" }}>
            Don't Have Account ?{" "}
            <Link
              to="/register"
              style={{ textDecoration: "none", color: "green" }}
            >
              Register
            </Link>
          </h6>
          <button
            className="btnMasuk"
            style={{ border: "none" }}
            onClick={handleLogin}
            type="submit"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
