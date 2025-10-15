import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";

function NavbarComponent() {
  return (
    <Navbar
      expand="lg"
      variant="dark"
      className="py-2"
      style={{ backgroundColor: "#580D0D" }}
    >
      <Container fluid className="px-4">
        <Navbar.Brand href="#home" className="fw-bold">COFFELATEA</Navbar.Brand>

        <Navbar.Toggle aria-controls="main-nav" />
        <Navbar.Collapse id="main-nav">
          <Nav className="mx-auto gap-4">
            <Nav.Link href="#home" className="text-white">Home</Nav.Link>
            <Nav.Link href="#best-seller" className="text-white">Produk</Nav.Link>
            <Nav.Link href="#tentang" className="text-white">Tentang Kami</Nav.Link>
          </Nav>

          
          <Form className="d-none d-lg-block">
            <Form.Control type="search" placeholder="Cari minuman..." className="rounded-pill" style={{ width: 240 }}
            />
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default NavbarComponent;
