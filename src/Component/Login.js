import { useHistory } from "react-router";
import { useState, useEffect, useContext } from "react";
import { UserContext } from "../Context/UserProvider";
import "./login.css";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

function Login() {
  let history = useHistory();
  let [dataRegister, setDataRegister] = useState([]);
  let { isLogin, setIsLogin } = useContext(UserContext);
  let [user, setUser] = useState({
    username: "",
    password: "",
  });

  let handleUser = (e) => {
    let { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  console.log(user);

  console.log(dataRegister);

  let handleLogin = (e) =>{
    e.preventDefault()
    console.log(user)
  }

  return (
    <div>
      <div className="login-box">
        <h2>Login</h2>
        <form>
          <div className="user-box">
            <input
              type="text"
              name="username"
              class="form-control"
              placeholder="username"
              onChange={handleUser}
              label="username"
              value={user.username}
            />
            <label>Username</label>
          </div>
          <div className="user-box">
            <input
              type="password"
              name="password"
              label="password"
              class="form-control"
              placeholder="Password"
              onChange={handleUser}
              value={user.password}
            />
            <label>Password</label>
          </div>
          <h6 style={{ color: " #03e9f4" }}>
            Don't Have Account ?{" "}
            <Link
              to="/register"
              style={{ textDecoration: "none", color: "snow" }}
            >
              Register
            </Link>
          </h6>
          <button
            style={{ backgroundColor: "grey", border: "none" }}
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
