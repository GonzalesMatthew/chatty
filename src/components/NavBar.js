import React from 'react';
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  Button
} from 'reactstrap';

export default function NavBar() {
  return (
    <div>
      <Navbar id="navBar" light expand="md">
        <NavbarBrand href="/">Slacker</NavbarBrand>
          <Nav className="sideNav" navbar>
            <NavItem className="nav-item">Slacker</NavItem>
            <NavItem className="nav-item" id="log-button">
              <Button id="logOutBtn">Sign Out</Button>
              <Button id="logInBtn">Sign In</Button>
            </NavItem>
          </Nav>
      </Navbar>
    </div>
  );
}
