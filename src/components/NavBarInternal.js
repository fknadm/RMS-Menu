import React, { useState } from "react";
import { NavLink as RouterNavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import newlogo from "../assets/hlogo.png"
import "../App.css"

import {
  Collapse,
  Container,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
  Button,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

import { useAuth0 } from "@auth0/auth0-react";

const NavBarInt = (test) => {
  const [isOpen, setIsOpen] = useState(false);
  const {
    user,
    isAuthenticated,
    loginWithRedirect,
    logout,
  } = useAuth0();
  const toggle = () => setIsOpen(!isOpen);

  return (
    <>
    {test.route === 'landing' ? '' :  
    <div id="todel" className="nav-container">
    <Navbar color="light" light expand="md">
      <Container style={{}}>
        <Nav className="mr-auto" navbar>
          <NavItem>
            <NavLink
              tag={RouterNavLink}
              to="/home"
              exact
              activeClassName="router-picked"
            >
              <FontAwesomeIcon size="lg" icon="home" className="def-ico" />
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              tag={RouterNavLink}
              to={{
                pathname:'/menu',
                state:{context:'All Items'}
              }}
              exact
              activeClassName="router-picked"
            >
              <FontAwesomeIcon size="lg" icon="hamburger" className="def-ico" />
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              tag={RouterNavLink}
              to="/cart"
              exact
              activeClassName="router-picked"
            >
              {test.data.length > 0 ? <p className="cart-noti">{test.data.length}</p>:''}
              <FontAwesomeIcon size="lg" icon="shopping-cart" className="def-ico" />
            </NavLink>
          </NavItem>

        </Nav>

      </Container>
    </Navbar>
  </div>}
  </>
  );
};

export default NavBarInt; 
