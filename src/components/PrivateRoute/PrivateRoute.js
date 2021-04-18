import React, { useContext } from "react";
import { Redirect, Route } from "react-router-dom";
import { UserContext } from "../../App";
import jwt_decode from "jwt-decode";

const PrivateRoute = ({ children, ...rest }) => {
  const { logInUser } = useContext(UserContext);
  const [loggedIn, setLoggedIn] = logInUser;
  const emailVerify = loggedIn.email;
  // const token = sessionStorage.getItem("token");
  // const loggedInInfo = (token) => {
  //   if (!token) {
  //     return false;
  //   }
  //   const decodedToken = jwt_decode(token);
  //   const { name, email } = decodedToken;
  //   console.log(decodedToken);
  //   const signedInUser = {
  //     displayName: name,
  //     email: email,
  //   };
  //   setLoggedIn(signedInUser);
  //   const currentTime = new Date().getTime() / 1000;
  //   return decodedToken.exp > currentTime;
  // };
  return (
    <Route
      {...rest}
      render={({ location }) =>
        emailVerify || sessionStorage.getItem("token") ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
