import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Navbar";
import { Col, Container, Row } from "react-bootstrap";
import axios from "axios";
import Menus from "./Menus";

// gradasi warna
const heroStyle = {
  background: "linear-gradient(180deg, #580D0D 0%, #7B3E3E 50%, #B55A5A 100%)",
  color: "#F8E6D1",
};

// helper kecil untuk menyamakan format teks
const normalize = (v) => (v || "").toString().toLowerCase().trim();

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { menus: [] };
    
  }

  componentDidMount() {
  axios
    .get(process.env.PUBLIC_URL + "/db.json")
    .then((res) => this.setState({ menus: res.data.products }))
    .catch((err) => console.log("error ya", err));
}


  render() {
    const { menus } = this.state;

    const bestSeller = menus.filter(
      (item) => normalize(item.title).includes("best seller")
    );
    const makanan = menus.filter(
      (item) => normalize(item?.category?.nama) === "makanan"
    );
    const coffeSeries = menus.filter(
      (item) => normalize(item?.category?.nama) === "coffe series"
    );
    const freshSeries = menus.filter(
      (item) => normalize(item?.category?.nama) === "fresh series"
    );
    const creamSeries = menus.filter(
      (item) => normalize(item?.category?.nama) === "cream series"
    );

    return (
      <div className="App">
        <Navbar />

        {/* Banner */}
        <section id="home" style={heroStyle} className="py-5">
          <Container className="text-center py-5">
            <div className="text-uppercase fw-semibold mb-2" style={{ letterSpacing: 2 }}>
              COFFELATEA
            </div>
            <h1 className="fw-bold display-4 mb-3">Tempatnya Rasa Ceritanya Kamu</h1>
            {/* <p className="fs-5 mb-4" style={{ color: "#f3dcb6" }}>
              Segarkan harimu, hatimu dengan jus buah pilihan terbaik!
            </p> */}
            <a
              href="#best-seller"
              className="btn btn-lg rounded-pill px-4"
              style={{ backgroundColor: "#D95B43", border: "none", color: "#fff" }}
            >
              Lihat Menu Kami
            </a>
          </Container>
        </section>

        {/* Best Seller */}
        <div className="mt-5 mb-5" id="best-seller">
          <Container fluid className="px-4">
            <h2 className="fw-bold text-center mb-5" style={{ color: "#3a2320" }}>
              Best Seller
            </h2>
              <Row className="g-4 justify-content-start">
                {bestSeller.map((menu) => (
                  <Menus key={menu.id} menu={menu} />
                ))}
              </Row>
          </Container>
        </div>

        {/*Makanan*/}
        <div className="mt-5" id="cat-makanan">
          <Container fluid className="px-4">
            <h3 className="fw-bold mb-5" style={{ color: "#3a2320" }}>
             Makanan
            </h3>
              <Row className="g-4 justify-content-start">
                {makanan.map((menu) => (
                  <Menus key={menu.id} menu={menu} small hideDesc />
                ))}
              </Row>
          </Container>
        </div>

        {/*Cream*/}
        <div className="mt-5" id="cat-coffe">
          <Container fluid className="px-4">
            <h3 className="fw-bold mb-5" style={{ color: "#3a2320" }}>
             Cream Series
            </h3>
              <Row className="g-4 justify-content-start">
                {creamSeries.map((menu) => (
                  <Menus key={menu.id} menu={menu} small hideDesc />
                ))}
              </Row>
          </Container>
        </div>

        {/*Fresh */}
        <div className="mt-5" id="cat-coffe">
          <Container fluid className="px-4">
            <h3 className="fw-bold mb-5" style={{ color: "#3a2320" }}>
             Fresh Series
            </h3>
              <Row className="g-4 justify-content-start">
                {freshSeries.map((menu) => (
                  <Menus key={menu.id} menu={menu} small hideDesc />
                ))}
              </Row>
          </Container>
        </div>

         {/*Coffe*/}
        <div className="mt-5" id="cat-coffe">
          <Container fluid className="px-4">
            <h3 className="fw-bold mb-5" style={{ color: "#3a2320" }}>
            Coffe Series
            </h3>
              <Row className="g-4 justify-content-start">
                {coffeSeries.map((menu) => (
                  <Menus key={menu.id} menu={menu} small hideDesc />
                ))}
              </Row>
          </Container>
        </div>
        {/* About Me & Footer */}
<footer id="tentang" style={{background: "linear-gradient(180deg, #580D0D 0%, #7B3E3E 50%, #B55A5A 100%)",color: "#F8E6D1",marginTop: "5rem",}}>
  <Container className="py-5 text-center">
    <h4 className="fw-bold mb-4">Tentang Kami</h4>

    {/* Foto tempat & pemilik */}
    <Row className="justify-content-center align-items-center mb-4 g-4">
      <Col xs={12} md={3}>
        <img
          src="/images/about/tempat.jpg"
          alt="Tempat CoffeLatea"
          className="rounded-circle shadow-sm"
          style={{ width: 160, height: 160, objectFit: "cover" }}
        />
        <p className="mt-3 fw-semibold">Tempat CoffeLatea</p>
        
      </Col>

      <Col xs={12} md={3}>
        <img
          src="/images/about/owner.jpg"
          alt="Pemilik CoffeLatea"
          className="rounded-circle shadow-sm"
          style={{ width: 160, height: 160, objectFit: "cover" }}
        />
        <p className="mt-3 fw-semibold mb-0">Alex</p>
        <p style={{ fontSize: "0.9rem", color: "#f3dcb6" }}>Owner CoffeLatea</p>
      </Col>
    </Row>

    {/* Deskripsi singkat */}
    <p className="mx-auto" style={{ maxWidth: 700, lineHeight: 1.7 }}>
      <strong>CoffeLatea</strong> menyediakan beragam <strong>makanan</strong> dan
      <strong> minuman</strong> terbaik, mulai dari Coffee Series, Cream Series, hingga Fresh Series.
      Kami percaya setiap sajian membawa cerita, dibuat dari bahan pilihan dan pelayanan ramah.
    </p>

    {/* Kontak & Sosmed: ikon sebaris */}
    <div className="d-flex flex-wrap justify-content-center align-items-center gap-3 mt-4">
      <span className="d-inline-flex align-items-center gap-2">
        <span role="img" aria-label="alamat">📍</span>
        <span>Jl. Amban, Universitas Papua</span>
      </span>

      <span className="d-inline-flex align-items-center gap-2">
        <span role="img" aria-label="telepon">☎️</span>
        <a href="tel: 082198373735" className="link-light text-decoration-none">0821-9837-3735</a>
      </span>

      <span className="d-inline-flex align-items-center gap-2">
        <span role="img" aria-label="email">✉️</span>
        <a href="mailto:coffelatea@gmail.com" className="link-light text-decoration-none">
          coffelatea@gmail.com
        </a>
      </span>

      <a
        href="https://www.instagram.com/coffelatea.id"
        target="_blank"
        rel="noreferrer"
        className="d-inline-flex align-items-center gap-2 link-light text-decoration-none"
      >
        <span role="img" aria-label="instagram">📷</span> Instagram
      </a>

      <a
        href="https://www.tiktok.com/@coffelatea"
        target="_blank"
        rel="noreferrer"
        className="d-inline-flex align-items-center gap-2 link-light text-decoration-none"
      >
        <span role="img" aria-label="tiktok">🎵</span> TikTok
      </a>
    </div>

    {/* Garis pembatas */}
    <hr
      style={{
        border: "none",
        height: "1px",
        backgroundColor: "#f3dcb6",
        margin: "2rem auto",
        width: "80%",
      }}
    />

    <p className="mb-0" style={{ fontSize: "0.9rem", color: "#f3dcb6" }}>
      © {new Date().getFullYear()} CoffeLatea. All Rights Reserved.
    </p>
  </Container>
</footer>

      </div>
    );
  }
}
