import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from "reactstrap";
import { NavLink } from "react-router-dom";

function NavbarComponent(args) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar
        {...args}
        expand="md"
        color="primary"
        dark
        // fixed="top"
        className="bg-primary navbar-dark"
      >
        <NavbarBrand href="/">Jual-in</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavLink className="text-light mx-2 text-decoration-none" to="/">
              Home
            </NavLink>
            <NavLink
              className="text-light mx-2 text-decoration-none"
              to="/dashboard"
            >
              Dashboard
            </NavLink>
            <NavLink
              className="text-light mx-2 text-decoration-none"
              to="/courses"
            >
              Courses
            </NavLink>
          </Nav>
          <NavLink to={"/login"}>
            <button className="button is-light">Login</button>
          </NavLink>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavbarComponent;
