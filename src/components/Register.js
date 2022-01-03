import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";
import axios from "axios";

import { UserContext } from "../Context/UserProvider";
import "./login.css";
import Cookies from "js-cookie";

function Register() {
  let history = useHistory();
  let { isReg, setIsReg } = useContext(UserContext);
  let [user, setUser] = useState({
    fullname: "",
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

  const submitData = async () => {
    const result = await axios.post(
      "https://lokakota.herokuapp.com/auth/regis",
      user
    );
    console.log(result);
    history.push("/login");
  };

  const handleChangebutton = (e) => {
    e.preventDefault();
    submitData();
  };

  return (
    <div>
      <div className="login-box" style={{marginTop: "50px"}}>
        <h2>Register</h2>
        <form>
          <div className="user-box">
            <input
              type="text"
              value={user.fullname}
              name="fullname"
              onChange={handleChangeRegister}
            />
            <label>Fullname</label>
          </div>
          <div className="user-box">
            <input
              type="text"
              value={user.username}
              name="username"
              onChange={handleChangeRegister}
            />
            <label>Username</label>
          </div>
          <div className="user-box">
            <input
              type="email"
              value={user.email}
              name="email"
              onChange={handleChangeRegister}
            />
            <label>Email</label>
          </div>
          <div className="user-box">
            <input
              type="password"
              value={user.password}
              name="password"
              onChange={handleChangeRegister}
            />
            <label>Password</label>
          </div>
          <h6 style={{ color: "white" }}>
            {" "}
            Have Account ?{" "}
            <Link to="/login" style={{ textDecoration: "none", color: "green" }}>
              Login
            </Link>{" "}
          </h6>
          <button className="bbtnMasuk"
            style={{ border: "none" }}
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
