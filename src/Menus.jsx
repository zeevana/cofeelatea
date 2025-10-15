import React from "react";
import { Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { numberWithCommas } from "./utils/utils";


function Menus({ menu, small, hideDesc }) {

  const colDefault = { xs: 12, sm: 6, md: 4, lg: 3 }; 
  const colSmall   = { xs: 6,  sm: 4, md: 3, lg: 2 };
  const colProps   = small ? colSmall : colDefault;

  return (
    <Col {...colProps} className="mb-4">
      <Card className="shadow border-0 rounded-4 h-100">
        <Card.Img variant="top" src={"/images/"+menu.category.nama.toLowerCase()+"/"+menu.gambar}
          alt={menu.nama}
          style={{ height: 180, objectFit: "cover", width: "100%" }}
        />
        <Card.Body className="pt-2 px-2 pb-3">
          <Card.Title className="fw-semibold">{menu.nama}</Card.Title>

          {/* deskripsi hanya ditampilkan jika tidak di-hide */}
          {!hideDesc && menu.desc && (
            <Card.Text className="text-muted mb-2" style={{ minHeight: 40 }}>
              {menu.desc}
            </Card.Text>
          )}

          <div className="d-flex align-items-center justify-content-between">
            <span className="fw-semibold">Rp. {numberWithCommas(menu.harga)}</span>
            <Button size="sm" variant="outline-secondary" className="rounded-pill">
              Pesan
            </Button>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default Menus;
