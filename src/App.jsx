import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Navbar";
import { Col, Container, Row } from "react-bootstrap";
import ListKategori from "./ListKategori";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />

        <div className="mt-3">
          <Container fluid>
            <Row className="align-items-start">
              <ListKategori /> 
              <Col md={3}>
                <h5 className="mb-3"><strong>DAFTAR KATEGORI</strong></h5>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}
