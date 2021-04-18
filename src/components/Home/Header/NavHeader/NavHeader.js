import { Button, Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../../App";
import "./NavHeader.css";

const NavHeader = () => {
  const { logInUser } = useContext(UserContext);
  const [loggedIn, setLoggedIn] = logInUser;
  const [userCome, setUserCome] = useState(false);
  const [adminCome, setAdminCome] = useState(false);
  const verifyEmail = loggedIn.email;
  const logOutUser = () => {
    setAdminCome(false);
    setUserCome(false);
    sessionStorage.setItem("token", "");
    const logOutCurrentUser = {
      email: "",
    };
    setLoggedIn(logOutCurrentUser);
  };
  useEffect(() => {
    let isMounted = true;
    verifyEmail &&
      fetch(
        `https://damp-fjord-88036.herokuapp.com/adminCheck/${verifyEmail}`,
        {
          method: "GET",
        }
      )
        .then((res) => res.json())
        .then((data) => {
          if (isMounted) {
            if (data) {
              setAdminCome(true);
            } else {
              setUserCome(true);
            }
          }
        });
    return () => {
      isMounted = false;
    };
  }, [verifyEmail]);
  return (
    <Container>
      <Navbar style={{ background: "transparent" }} expand="sm">
        <Navbar.Brand as={Link} to="/">
          BuildBetter
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            {userCome && (
              <Nav.Link as={Link} to="/userOrders">
                Orders
              </Nav.Link>
            )}
            {adminCome && (
              <Nav.Link as={Link} to="/admin">
                Admin
              </Nav.Link>
            )}
            <Nav.Link as={Link} to="/">
              About us
            </Nav.Link>
            <Button
              style={{
                marginRight: "10px",
                padding: "2px",
                backgroundColor: "rgb(180, 1, 1)",
                border: "none",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {verifyEmail ? (
                <Nav.Link
                  as={Link}
                  to="/"
                  style={{ color: "white", padding: "0%" }}
                >
                  {loggedIn.displayName}
                </Nav.Link>
              ) : (
                <Nav.Link as={Link} to="/login" style={{ color: "white" }}>
                  Login
                </Nav.Link>
              )}
            </Button>
            {verifyEmail && (
              <Button
                className="button-space-mobile"
                style={{
                  padding: "2px",
                  backgroundColor: "rgb(180,1,1)",
                  border: "none",
                }}
              >
                <Nav.Link
                  onClick={logOutUser}
                  as={Link}
                  to="/"
                  style={{ color: "white" }}
                >
                  Logout
                </Nav.Link>
              </Button>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
};

export default NavHeader;
