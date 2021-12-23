import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { useHistory } from "react-router";

import { UserContext } from "../Context/UserProvider";
import "./login.css";

function Register() {
  let history = useHistory();
  let { isReg, setIsReg } = useContext(UserContext);
  let [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });

  let [dataApiRegis, setDataApiRegis] = useState([]);

  const handleChangeRegister = (event) => {
    const { name, value } = event.target;
    setUser((dataUser) => ({
      ...dataUser,
      [name]: value,
    }));
  };

  const submitData = () => {};

  const handleChangebutton = (e) => {
    e.preventDefault();
    console.log(user);
    submitData();
  };

  return (
    <div>
      <div className="login-box">
        <h2>Register</h2>
        <form>
          <div className="user-box">
            <input
              type="email"
              placeholder="Email "
              value={user.email}
              name="email"
              onChange={handleChangeRegister}
            />
            <label>Email</label>
          </div>
          <div className="user-box">
            <input
              type="text"
              placeholder="Username"
              value={user.username}
              name="username"
              onChange={handleChangeRegister}
            />
            <label>Username</label>
          </div>
          <div className="user-box">
            <input
              type="password"
              value={user.password}
              name="password"
              onChange={handleChangeRegister}
              placeholder="Password"
            />
            <label>Password</label>
          </div>
          <h6 style={{ color: " #03e9f4" }}>
            {" "}
            Have Account ?{" "}
            <Link to="/login" style={{ textDecoration: "none", color: "snow" }}>
              Login
            </Link>{" "}
          </h6>
          <button
            style={{ backgroundColor: "grey", border: "none" }}
            onClick={handleChangebutton}
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
}
export default Register;
