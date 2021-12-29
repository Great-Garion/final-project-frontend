import React from "react";
import { Button, Container } from "react-bootstrap";
import {
  Card,
  Col,
  Row,
  DropdownButton,
  Dropdown,
  Carousel,
  CarouselItem,
  CarouselCaption,
} from "react-bootstrap";
import { Link } from 'react-router-dom'
import Ulasan from "./Ulasan";

import Hotel from "./hotel";
// import Rating from "./Rating";
function Detail() {
  return (
    <div style={{  height: "100%" }}>
      <div>
        <Container
          style={{
            marginTop: "2rem",
           
            height: "70%",
            display: "grid",
            justifyContent: "center",
            alignContent: "space-evenly;",
            justifyItems: "end",
          }}
        >
          <Row className="justify-content-md-center"
          style={{ paddingTop:'97px' }}>
            <Col xs md="auto">
              <Carousel style={{ height: "22rem", width: "30rem" }}>
                <Carousel.Item interval={1000}>
                  <img
                    className="d-block w-100"
                    style={{ height: "22rem", borderRadius: "12px" }}
                    src="https://lintasntb.com/wp-content/uploads/2021/02/IMG-20210224-WA0017.jpg"
                    alt="First slide"
                  />
                  <Carousel.Caption>
                    <p>Masjid Agung Darussalam Sumbawa Barat</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                  <img
                    className="d-block w-100"
                    style={{ height: "22rem", borderRadius: "12px" }}
                    src="https://lintasntb.com/wp-content/uploads/2021/02/IMG-20210224-WA0017.jpg"
                    alt="Second slide"
                  />
                  <Carousel.Caption>
                    <p>Masjid Agung Darussalam Sumbawa Barat</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    style={{ height: "22rem", borderRadius: "12px" }}
                    src="https://lintasntb.com/wp-content/uploads/2021/02/IMG-20210224-WA0017.jpg"
                    alt="Third slide"
                  />
                  <Carousel.Caption>
                    <p>Masjid Agung Darussalam Sumbawa Barat</p>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </Col>
            <Col xs lg="2">
              <Card.Img
                style={{ borderRadius: "12px", margin: "2px", height: "7rem" }}
                src="https://lintasntb.com/wp-content/uploads/2021/02/IMG-20210224-WA0017.jpg"
              />
              <Card.Img
                style={{ borderRadius: "12px", margin: "2px", height: "7rem" }}
                src="https://lintasntb.com/wp-content/uploads/2021/02/IMG-20210224-WA0017.jpg"
              />
              <Card.Img
                style={{ borderRadius: "12px", margin: "2px", height: "7rem" }}
                src="https://lintasntb.com/wp-content/uploads/2021/02/IMG-20210224-WA0017.jpg"
              />
            </Col>
            <Col md="auto" style={{ width: "27rem" }}>
              <h4>Masjid Agung Darussalam Sumbawa Barat</h4>
              <h6>
                Masjid Agung Darussalam Sumbawa Barat merupakan sebuah masjid
                yang terletak di Kabupaten Sumbawa Barat, Indonesia. Masjid ini
                dibangun pada tahun 2007 dan selesai pada tahun 2010. Bentuk ini
                pula menjadi ciri khas setiap bangunan dan berbagai aktivitas
                administrasi pemerintah dan masyarakat kabupaten Sumbawa Barat
              </h6>
              <ul>
                <li>
                  <b>Alamat : </b> Kuang Taliwang Kabupaten Sumbawa Barat,
                  Sumbawa, Kuang, Taliwang, Kabupaten Sumbawa Barat, Nusa
                  Tenggara Bar. 84455{" "}
                </li>
                <li><Link to="">Contact Us</Link></li>

                <div style={{ marginTop: "20px" }}>
                  <Container>
                    <Row xs="auto">
                      <Col>
                        <DropdownButton
                          id="dropdown-basic-button"
                          title="Jam buka "
                        >
                          <Dropdown.Item>Minggu : 24 jam</Dropdown.Item>
                          <Dropdown.Item>Senin : 24 jam</Dropdown.Item>
                          <Dropdown.Item>Selasa : 24 jam</Dropdown.Item>
                          <Dropdown.Item>Rabu : 24 jam</Dropdown.Item>
                          <Dropdown.Item>Kamis : 24 jam</Dropdown.Item>
                          <Dropdown.Item>Jumat : 24 jam</Dropdown.Item>
                          <Dropdown.Item>Sabtu : 24 jam</Dropdown.Item>
                        </DropdownButton>
                      </Col>


                    </Row>
                  </Container>
                </div>
              </ul>
            </Col>
          </Row>
        </Container>
      </div>
      <div style={{width: "100%" }}>
        <Container >
          <Row style={{ marginTop: "2rem" }}>
            <Col> 
              {/* <Rating /> */}
             
              <Button ><Link to='./hotel'>Hotel</Link> </Button>
              <Button >store</Button>
              <Button >restoran</Button>
              <Button >Transportasi</Button>
             
             
              <DropdownButton
                id="dropdown-basic-button"
                title="emergenci contact "

              >
                <Dropdown.Item><Link to=''>police</Link></Dropdown.Item>
                <Dropdown.Item><Link to=''>hospital</Link></Dropdown.Item>

              </DropdownButton>
            
            </Col>
          <Col>
          <Ulasan />
          </Col>
             
            
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default Detail;
