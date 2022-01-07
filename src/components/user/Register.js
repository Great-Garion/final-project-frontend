import { useState } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";

import axios from "axios";
import "./login.css";

function Register() {
  let history = useHistory();
  let [user, setUser] = useState({
    fullname: "",
    username: "",
    email: "",
    password: "",
  });

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
              autocomplete="off"
            />
            <label>Fullname</label>
          </div>
          <div className="user-box">
            <input
              type="text"
              value={user.username}
              name="username"
              onChange={handleChangeRegister}
              autocomplete="off"
            />
            <label>Username</label>
          </div>
          <div className="user-box">
            <input
              type="email"
              value={user.email}
              name="email"
              onChange={handleChangeRegister}
              autocomplete="off"
            />
            <label>Email</label>
          </div>
          <div className="user-box">
            <input
              type="password"
              value={user.password}
              name="password"
              onChange={handleChangeRegister}
              autocomplete="off"
            />
            <label>Password</label>
          </div>
          <h6 style={{ color: "white" }}>
            Have Account ?
            <Link to="/login" style={{ textDecoration: "none", color: "green" }}>
              Login
            </Link>
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
