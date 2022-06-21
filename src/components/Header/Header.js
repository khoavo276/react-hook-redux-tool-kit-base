import React from "react";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { useSelector } from "react-redux";
import { logout } from "store/user";
import { useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import { setLanguage } from "utils/Common";

const Header = () => {
  const { t, i18n } = useTranslation();
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const onLogOut = () => {
    dispatch(logout());
  };

  const onChangeLang = (lang) => {
    i18n.changeLanguage(lang);
    setLanguage(lang);
  };

  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
        <Container>
          <Navbar.Brand href="/">IshikawaRice</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#news">{t("HEADER.NEWS")}</Nav.Link>
              <NavDropdown title={t("HEADER.LANGUAGE")}>
                <NavDropdown.Item onClick={() => onChangeLang("en")}>
                  {t("LANG.EN")}
                </NavDropdown.Item>
                <NavDropdown.Item onClick={() => onChangeLang("vi")}>
                  {t("LANG.VI")}
                </NavDropdown.Item>
              </NavDropdown>
              {user ? (
                <Nav.Link href="/list">{t("HEADER.LIST_USER")}</Nav.Link>
              ) : null}
            </Nav>
            {!user ? (
              <Nav>
                <Nav.Link href="/login">{t("HEADER.LOGIN")}</Nav.Link>
                <Nav.Link href="/signup">{t("HEADER.SIGNUP")}</Nav.Link>
              </Nav>
            ) : (
              <Nav>
                <NavDropdown
                  title={`${t("HEADER.WELCOME")}, ${user.username}`}
                  id="collasible-nav-dropdown"
                >
                  <NavDropdown.Item href="/profile">
                    {t("HEADER.PROFILE")}
                  </NavDropdown.Item>
                  <NavDropdown.Item onClick={onLogOut}>
                    {t("HEADER.LOGOUT")}
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
