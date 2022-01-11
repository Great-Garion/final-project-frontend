import { Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

import Logo from "../images/Logo.png";
import Auzan from "../images/auzan.png";
import Thoriq from "../images/thoriq.png";
import Dolton from "../images/doltons.png";
import Luthfi from "../images/luthfi.png";
import Dellila from "../images/dellila.png";
import Yeyen from "../images/yeyen.png";
import Inayat from "../images/inayat.png";
import Ardi from "../images/ardi.png";
import Amman from "../images/amman.png";
import Skilvul from "../images/skilvul.png";

function About() {
  return (
    <div>
      <Container>
        <Row className="justify-content-md-center">
          <Row style={{ marginBottom: "3rem" }}>
            <Col style={{ marginTop: "4rem" }}>
              <h6 style={{ fontSize: "35px", color: "rgb(55, 208, 255)" }}>
                {" "}
                About Us
              </h6>

              <p style={{ textIndent: "45px" }}>
                Lokakota tours menyediakan berbagai jenis media yang dapat
                diaplikasikan untuk mendukung promosi dan pemberian informasi
                penting terkait tempat wisata yang berada di Kabupaten Sumbawa
                dan Sumbawa Barat. Website ini dapat bermanfaat secara
                signifikan dalam mengenalkan tempat-tempat wisata, budaya, serta
                tradisi di Kabupaten Sumbawa dan Sumbawa Barat.
              </p>
              <hr />
              <p>
                Indonesia merupakan negara adikultur dengan berbagai macam
                budaya yang ada di dalamnya. Pengenalan ini dapat dilakukan
                dengan menampilkan video atau gambar terkait sehingga membuat
                visitor menjadi lebih tertarik untuk mengunjungi lokasi-lokasi
                wisata tersebut.
              </p>
              <hr />
            </Col>

            <Col>
              <Card.Img
                style={{
                  width: "40rem",
                  marginTop: "100px",
                  marginRight: "-80px",
                }}
                variant="top"
                src={Logo}
              />
              <Link
                to={{ pathname: "https://www.amman.co.id" }}
                target="_blank"
              >
                <Card.Img
                  style={{
                    width: "11rem",
                    marginLeft: "20px",
                  }}
                  src={Amman}
                />
              </Link>
              <Link to={{ pathname: "https://skilvul.com" }} target="_blank">
                <Card.Img
                  style={{
                    width: "11rem",
                    marginLeft: "20px",
                    marginRight: "150px",
                  }}
                  src={Skilvul}
                />
              </Link>
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
