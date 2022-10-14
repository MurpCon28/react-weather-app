import * as React from 'react';
//import Container from 'react-bootstrap/Container';
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavbarCom = () => {
  return (
      <>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand as={Link} to={"/"}>WeatherApp</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link as={Link} to={"/"}>Home</Nav.Link>
              <NavDropdown title="Emergencies" id="navbarScrollingDropdown">
                <NavDropdown.Item as={Link} to={"/heat_emergencies"}>Heatwave</NavDropdown.Item>
                <NavDropdown.Item as={Link} to={"/snow_emergencies"}>Snow</NavDropdown.Item>
                <NavDropdown.Item as={Link} to={"/flood_emergencies"}>
                  Floods
                </NavDropdown.Item>
                {/* <NavDropdown.Divider /> */}
                <NavDropdown.Item as={Link} to={"/thunder_emergencies"}>
                  Lightning & Thunder
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Container>
        </Navbar>
      </>
  );
}

export default NavbarCom;