import { Container, Row, Col, Card } from "react-bootstrap";

import Logo from "../images/Logo.png";
import Auzan from "../images/auzan.png";
import Thoriq from "../images/thoriq.png";
import Dolton from "../images/doltons.png";
import Luthfi from "../images/luthfi.png";
import Dellila from "../images/dellila.png";
import Yeyen from "../images/yeyen.png";
import Inayat from "../images/inayat.png";
import Ardi from "../images/ardi.png";

function About() {

  return (
    <div>
      <Container>
        <Row className="justify-content-md-center">
          <Row style={{ marginBottom: "3rem" }}>
            <Col style={{ marginTop: "4rem" }}>
              <h6 style={{ fontSize: "27px" }}> About Us</h6>

              <p style={{ width: "24rem" }}>
                Di dalam website lokakota tour, tersedia berbagai jenis media
                dapat diaplikasikan untuk mendukung promosi dan pemberian
                informasi penting tempat wisata yang berada di kabupaten sumbawa
                dan sumbawa barat.
              </p>
              <p>
                Website ini dapat bermanfaat secara signifikan dalam mengenalkan
                budaya serta tradisi setempat yang masih kental. Indonesia
                merupakan negara adikultur dengan berbagai macam budaya yang ada
                di dalamnya.
              </p>
              <p>
                Pengenalan ini dapat dilakukan dengan menampilkan video atau
                gambar terkait sehingga membuat visitor menjadi lebih ingin
                mengunjungi lokasi wisata tersebut.
              </p>
            </Col>

            <Col>
              <Card.Img style={{ width: "42rem" }} variant="top" src={Logo} />
            </Col>
          </Row>
        </Row>

        <h6
          style={{
            fontSize: "22px",
            marginBottom: "26px",
          }}
        >
          Great Garion Mentors
        </h6>
        <Row md={4} style={{ marginBottom: "3rem" }}>
          <Col style={{ textAlign: "center" }}>
            <img src={Auzan} style={{ width: "45px" }} /> Auzan Assidqi
          </Col>

          <Col xs={6} style={{ textAlign: "center" }}>
            <img src={Thoriq} style={{ width: "45px" }} /> Thoriq Nur Faizal
          </Col>

          <Col style={{ textAlign: "center" }}>
            <img src={Dolton} style={{ width: "45px" }} /> Doltons Edward N
            Pabiaran
          </Col>

          <Col xs={6} style={{ textAlign: "center" }}>
            <img src={Luthfi} style={{ width: "45px" }} /> Luthfi Fitra Musyaffa
          </Col>
        </Row>

        <h6
          style={{
            fontSize: "22px",
            marginBottom: "26px",
          }}
        >
          Great Garion Students
        </h6>
        <Row md={4} style={{ marginBottom: "3rem" }}>
          <Col style={{ textAlign: "center" }}>
            <img src={Dellila} style={{ width: "45px" }} /> Dellila Pellokila
          </Col>

          <Col xs={6} style={{ textAlign: "center" }}>
            <img src={Yeyen} style={{ width: "45px" }} /> Yeyen Tri Utami
          </Col>

          <Col style={{ textAlign: "center" }}>
            <img src={Inayat} style={{ width: "45px" }} /> Rahmat Inayat
          </Col>

          <Col xs={6} style={{ textAlign: "center" }}>
            <img src={Ardi} style={{ width: "45px" }} /> Mohammad Sunardi
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;
