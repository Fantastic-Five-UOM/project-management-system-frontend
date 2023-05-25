import React, { useState } from "react";

import { Navbar, Nav, Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import NavDropdown from "react-bootstrap/NavDropdown";

function NavbarComponent() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container fluid>
        <Navbar.Brand href="/">G3 Technology</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
            <Nav.Link href="/">Dashboard</Nav.Link>
            <Nav.Link href="/projects-home">Project</Nav.Link>

            <NavDropdown title="Customer" id="collasible-nav-dropdown">
              <NavDropdown.Item href="/companies">Companies</NavDropdown.Item>
              <NavDropdown.Item href="/people">People</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/ourteam">Our Team</Nav.Link>
          </Nav>
          <Nav>
            <Button href="/create">Create</Button>{" "}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
