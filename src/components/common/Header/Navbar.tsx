import { Navbar as NavbarContainer, Nav, Container } from "react-bootstrap";

export default function Navbar() {
  return (
    <NavbarContainer bg="dark" variant="dark">
      <Container>
        <NavbarContainer.Brand href="#home">Categories</NavbarContainer.Brand>
        <Nav className="ms-auto">
          <Nav.Link href="#home">News feed</Nav.Link>
          <Nav.Link href="#features">Merchant Zoon</Nav.Link>
          <Nav.Link href="#pricing">Help</Nav.Link>
        </Nav>
      </Container>
    </NavbarContainer>
  );
}
