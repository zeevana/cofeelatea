import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavbarComponent() {
  return (
    <>
      <Navbar expand="lg"style={{backgroundColor: "#580D0D"}}variant="dark"className="py-2">
        <Container fluid className="ms-4">
          <Navbar.Brand href="#home">COFEELATEA</Navbar.Brand>

          <Navbar.Toggle aria-controls="main-nav" />
          <Navbar.Collapse id="main-nav">
            <Nav className="mx-auto fs-5"> 
            <Nav.Link href="#home" className="text-white">Home</Nav.Link>
            <Nav.Link href="#makanan" className="text-white">NavLink</Nav.Link>
            <Nav.Link href="#minuman" className="text-white">NavLink</Nav.Link>
            </Nav>

          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarComponent;
