import React from "react";
import { Container, Navbar } from "react-bootstrap";
import logoImage from "../images/logo.jpg";

function NavBar({ search }) {
  const onSearch = (word) => {
    search(word);
  };
  return (
    <Navbar expand="lg" className="bk">
      <Container>
        <Navbar.Brand >
          <a href="/">
            <img src={logoImage} className="logo" alt="logo" />
          </a>
        </Navbar.Brand>

        <Container>
          <div className="form-group has-search">
            <span className="fa-brands fa-searchengin group"></span>
            <input
              onChange={(e) => onSearch(e.target.value)}
              type="text"
              className="form-control input"
              placeholder="ابحث"
            />
          </div>
        </Container>
      </Container>
    </Navbar>
  );
}


export default NavBar;
