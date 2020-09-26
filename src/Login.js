import React from "react";
import "./Login.css";
import { Link, useHistory } from "react-router-dom";
import { auth } from "./firebase";
function Login() {
  const history = useHistory();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const login = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/");
      })
      .catch((error) => alert(error.message));
  };
  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/");
      })
      .catch((error) => alert(error));
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login_logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/300px-Amazon_logo.svg.png"
          alt=""
        />
      </Link>
      <div className="login_container">
        <h1>Sign-In</h1>
        <form>
          <h5>Email</h5>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={login} className="login_signInButton">
            Sign In
          </button>
        </form>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
          voluptatem corrupti, consectetur fuga aliquam earum! Cupiditate culpa
          odio nisi reprehenderit tenetur iure accusamus repellendus vero alias
          sint optio, ipsam dicta amet doloribus quaerat quas suscipit non et
          dolor, quis esse ea eum? Omnis cum, libero commodi ratione saepe odit
          tempora?
        </p>
        <button onClick={register} className="login_registerButton">
          Create your amazon account
        </button>
      </div>
    </div>
  );
}

export default Login;
