import React from "react";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { useSelector } from "react-redux";
import { logout } from "../../store/user";
import { useDispatch } from "react-redux";

const Navigation = () => {
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const onLogOut = () => {
    dispatch(logout());
  };

  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
        <Container>
          <Navbar.Brand href="/">SmartDev</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
              {user ? <Nav.Link href="/list">List User</Nav.Link> : null}
            </Nav>
            {!user ? (
              <Nav>
                <Nav.Link href="/login">Login</Nav.Link>
                <Nav.Link href="/signup">SignUp</Nav.Link>
              </Nav>
            ) : (
              <Nav>
                <NavDropdown
                  title={`welcome, ${user.username}`}
                  id="collasible-nav-dropdown"
                >
                  <NavDropdown.Item href="/profile">Profile</NavDropdown.Item>
                  <NavDropdown.Item onClick={onLogOut}>LogOut</NavDropdown.Item>
                </NavDropdown>
              </Nav>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Navigation;
