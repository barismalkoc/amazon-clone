import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { auth } from "./firebase";
import "./Login.css";
import UserService from "./services/userService";
import { useStateValue } from "./StateProvider";
function Login() {
  let userService = new UserService();

  const [userName, dispatch] = useStateValue();
  const [users, setUsers] = useState([]);
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/");
      })
      .catch((error) => alert(error.message));

    users.map((user) => {
      if (user.mail == email) {
        dispatch({
          type: "SET_USER_NAME",
          userName: user.firstName,
        });
        console.log(user.firstName);
      }
    });
  };

  useEffect(() => {
    const getAllUser = async () => {
      try {
        userService.getAll().then((result) => setUsers(result.data.data));
      } catch (error) {
        console.log(error);
      }
    };
    getAllUser();
  }, []);
  return (
    <div className="login">
      <Link to="/">
        <img
          className="login_logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
        ></img>
      </Link>

      <div className="login_container">
        <h1>Sign-In</h1>

        <form>
          <h5>Email</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit" className="login_signInButton" onClick={signIn}>
            Sign In
          </button>
        </form>
        <p>
          By signing-in you agree to Amazon's Conditions of Use & Sale.Please
          see our Privacy Notice, our Cookies Notice and our Interest Based Ads
          Notice.
        </p>

        <Link to="register">
          <button className="login_registerButton">
            Create your Amazon Account
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Login;
