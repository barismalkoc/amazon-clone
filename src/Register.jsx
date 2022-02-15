import React from "react";
import "./Register.css";
import UserService from "./services/userService";

import { Link, useHistory } from "react-router-dom";
import { useState } from "react";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
function Register() {
  const [userName, dispatch] = useStateValue();
  let userService = new UserService();

  const history = useHistory();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");

  const addUser = (e) => {
    e.preventDefault();
    const values = {
      firstName: firstName,
      lastName: lastName,
      mail: mail,
      password: password,
    };
    console.log(values);
    userService.add(values);

    dispatch({
      type: "SET_USER_NAME",
      userName: firstName,
    });

    register();
  };

  const register = () => {
    auth
      .createUserWithEmailAndPassword(mail, password)
      .then((auth) => {
        console.log(auth);

        if (auth) {
          history.push("/");
        }
      })
      .catch((error) => alert(error.message));
  };
  return (
    <div className="register">
      <Link to="/">
        <img
          className="register_logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
        ></img>
      </Link>

      <div className="register_container">
        <h1>Register</h1>

        <form>
          <h5>First Name</h5>
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />

          <h5>Last Name</h5>
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />

          <h5>Mail</h5>
          <input
            type="text"
            value={mail}
            onChange={(e) => setMail(e.target.value)}
          />

          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button className="register_button" type="submit" onClick={addUser}>
            Register
          </button>
        </form>

        <p>
          By signing-in you agree to Amazon's Conditions of Use & Sale.Please
          see our Privacy Notice, our Cookies Notice and our Interest Based Ads
          Notice.
        </p>

        <Link to="login">
          <button className="register_loginButton">
            I already have an account
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Register;
