import React from "react";
import { Col, Nav } from "react-bootstrap";

function ListKategori() {
  return (
    <Col md={2}>
      <h5 className="ms-4"><b>KATEGORI</b></h5>
      <Nav className="flex-column ms-4">
        <Nav.Item><Nav.Link>Makanan</Nav.Link></Nav.Item>
        <Nav.Item><Nav.Link>Coffee Series</Nav.Link></Nav.Item>
        <Nav.Item><Nav.Link>Cream Series</Nav.Link></Nav.Item>
        <Nav.Item><Nav.Link>Fresh Series</Nav.Link></Nav.Item>
      </Nav>
    </Col>
  );
}

export default ListKategori;
