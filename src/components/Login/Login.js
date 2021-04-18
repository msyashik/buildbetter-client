import React, { useContext, useState } from "react";
import { Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserFriends } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";

import {
  fbSignIn,
  googleSignIn,
  initializeLoginFramework,
  signInWithEmailAndPassword,
  storeAuthToken,
} from "../LoginManager/LoginManager";
import { Link, useHistory, useLocation } from "react-router-dom";
import "./Login.css";
import NavHeader from "../Home/Header/NavHeader/NavHeader";
import { UserContext } from "../../App";

const Login = () => {
  initializeLoginFramework();
  const { register, errors, handleSubmit } = useForm();
  const { logInUser } = useContext(UserContext);
  const [loggedIn, setLoggedIn] = logInUser;
  let history = useHistory();
  let location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };
  const [userCreated, setUserCreated] = useState("");
  const [googleFbUserCreated, setGoogleFbUserCreated] = useState("");

  //sign in using email and password
  const onSubmit = (data) => {
    signInWithEmailAndPassword(data).then((res) => {
      if (res[1] === true) {
        setLoggedIn(res[0]);
        storeAuthToken();
        history.replace(from);
      } else {
        setUserCreated("*Please give valid email and password");
      }
    });
  };

  //sign in using google
  const googleSignInCalling = () => {
    googleSignIn().then((res) => {
      if (res[1] === true) {
        setLoggedIn(res[0]);
        storeAuthToken();
        history.replace(from);
      } else {
        setGoogleFbUserCreated(
          "*An user has already been created with this email"
        );
      }
    });
  };

  //sign in using facebook
  const fbSignInCalling = () => {
    fbSignIn().then((res) => {
      if (res[1] === true) {
        setLoggedIn(res[0]);
        storeAuthToken();
        history.replace(from);
      } else {
        setGoogleFbUserCreated(
          "*An user has already been created with this email"
        );
      }
    });
  };
  return (
    <div>
      <NavHeader></NavHeader>
      <div className="container">
        <h2>Sign in</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  className="form-control mt-2"
                  placeholder="xyz@abc.com"
                  ref={register({
                    required: "*Email is required",
                    pattern: {
                      value: /\S+@\S+\.\S+/,
                      message: "*Give valid email",
                    },
                  })}
                />
              </div>
              <div style={{ color: "red", fontSize: "15px" }}>
                {errors.email && <p>{errors.email.message}</p>}
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="password" className="mt-2">
                  Password
                </label>
                <input
                  name="password"
                  type="password"
                  className="form-control mt-2"
                  placeholder="Password"
                  ref={register({
                    required: "*Password is required",
                    pattern: {
                      value: /\d{1}/,
                      message: "*Minimum 1 numeric value should be given",
                    },
                    minLength: {
                      value: 6,
                      message: "*Minimum password length is 6",
                    },
                  })}
                />
              </div>
              <div style={{ color: "red", fontSize: "15px" }}>
                {errors.password && <p>{errors.password.message}</p>}
              </div>
            </div>
          </div>
          <div className="row" style={{ color: "red" }}>
            <div className="col-md-6" style={{ fontSize: "15px" }}>
              {userCreated}
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <Button type="Submit" className="btn btn-success mt-2 w-50">
                Sign in
              </Button>
            </div>
          </div>
        </form>
        <div className="mt-2">
          <p>
            Want to create a new account? <Link to="/signup">Register</Link>
          </p>
        </div>
        <div className="row">
          <div className="col-md-6" style={{ fontSize: "15px", color: "red" }}>
            {googleFbUserCreated}
          </div>
        </div>
        <div className="row mt-2">
          <div className="col-md-6 mt-2">
            <Button
              onClick={googleSignInCalling}
              type="Submit"
              className="btn btn-primary w-100"
            >
              <FontAwesomeIcon icon={faGoogle} /> Proceed using Google
            </Button>
          </div>
          <div className="col-md-6 mt-2">
            <button
              onClick={fbSignInCalling}
              type="Submit"
              className="btn btn-danger w-100"
            >
              <FontAwesomeIcon icon={faFacebook} /> Proceed using Facebook
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
