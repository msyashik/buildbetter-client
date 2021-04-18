import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { createContext, useState } from "react";
import Home from "./components/Home/Home/Home";
import Admin from "./components/Admin/Admin/Admin";
import Book from "./components/Book/Book/Book";
import Login from "./components/Login/Login";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import SignUp from "./components/SignUp/SignUp";
import UserOrdersList from "./components/Book/UserOrdersList/UserOrdersList";
import NavHeader from "./components/Home/Header/NavHeader/NavHeader";

export const UserContext = createContext();

function App() {
  const [loggedIn, setLoggedIn] = useState({
    displayName: "",
    email: "",
  });
  if (!loggedIn.displayName) {
    sessionStorage.setItem("token", "");
  }
  return (
    <UserContext.Provider
      value={{
        logInUser: [loggedIn, setLoggedIn],
      }}
    >
      <Router>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/signup">
            <SignUp></SignUp>
          </Route>
          <PrivateRoute path="/admin">
            <Admin></Admin>
          </PrivateRoute>
          <PrivateRoute path="/book/:id">
            <Book></Book>
          </PrivateRoute>
          <PrivateRoute path="/userOrders">
            <NavHeader></NavHeader>
            <UserOrdersList></UserOrdersList>
          </PrivateRoute>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;

/* 
https://preview.themeforest.net/item/archies-architect-interior-designer-theme/full_screen_preview/31202939?_ga=2.116809093.2090357268.1618418888-532750535.1618418841
*/
