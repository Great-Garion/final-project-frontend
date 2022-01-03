import axios from "axios";
import React, { useEffect, useState } from "react";

import {
  Col,
  Row,
  DropdownButton,
  Dropdown,
  Carousel,
  Button,
  Container,
  Card,
} from "react-bootstrap";

import { Link, useParams } from "react-router-dom";

import Review from "./Review";

function Detail() {
  const [dataDetail, setDataDetail] = useState({})
  const {id} = useParams()

  useEffect(() => {
    axios(`https://lokakota.herokuapp.com/wisata/${id}`).then((result) => {
      setDataDetail(result.data)
    })
  })
  return (
    <div style={{ height: "100%" }}>
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
          <Row
            className="justify-content-md-center"
            style={{ paddingTop: "97px" }}
          >
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
                <li>
                  <Link to="">Contact Us</Link>
                </li>

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
                      <Col>
                        <DropdownButton
                          id="dropdown-basic-button"
                          title="emergenci contact "
                        >
                          <Dropdown.Item>
                            <Link to="">police</Link>
                          </Dropdown.Item>
                          <Dropdown.Item>
                            <Link to="">hospital</Link>
                          </Dropdown.Item>
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
      <div style={{ width: "100%" }}>
        <Container>
          <Row style={{ marginTop: "2rem" }}>
            <Col style={{ display: "flex" }}>
              {/* <Hotel /> */}
              <div>
                <div style={{ width: "29rem" }}>
                  <Carousel>
                    <Carousel.Item>
                      <Container border="light">
                        <Row xs={1} md={1} lg={1}>
                          <Col style={{ width: "10rem" }}>
                            <Card.Img src="https://images.solopos.com/2019/11/Ilustrasi-hotel.-Freepik.jpg" />
                          </Col>
                          <Col style={{ width: "10rem" }}>
                            <h4>Hotel name</h4>
                            <p>Alamat Hotel</p>
                            <p>pasilitas Hotel</p>
                            <p>harga Hotel</p>
                            <Button>booking</Button>
                          </Col>
                        </Row>
                      </Container>
                    </Carousel.Item>

                    <Carousel.Item>
                      <Container border="light">
                        <Row xs={1} md={1} lg={1}>
                          <Col style={{ width: "10rem" }}>
                            <Card.Img src="https://images.solopos.com/2019/11/Ilustrasi-hotel.-Freepik.jpg" />
                          </Col>
                          <Col style={{ width: "10rem" }}>
                            <h4>Hotel name</h4>
                            <p>Alamat Hotel</p>
                            <p>pasilitas Hotel</p>
                            <p>harga Hotel</p>
                            <Button>booking</Button>
                          </Col>
                        </Row>
                      </Container>
                    </Carousel.Item>
                    <Carousel.Item>
                      <Container border="light">
                        <Row xs={1} md={1} lg={1}>
                          <Col style={{ width: "10rem" }}>
                            <Card.Img src="https://images.solopos.com/2019/11/Ilustrasi-hotel.-Freepik.jpg" />
                          </Col>
                          <Col style={{ width: "10rem" }}>
                            <h4>Hotel name</h4>
                            <p>Alamat Hotel</p>
                            <p>pasilitas Hotel</p>
                            <p>harga Hotel</p>
                            <Button>booking</Button>
                          </Col>
                        </Row>
                      </Container>
                    </Carousel.Item>
                  </Carousel>
                </div>
              </div>
              {/* <Store /> */}
              <div>
                <div style={{ width: "29rem" }}>
                  <Carousel>
                    <Carousel.Item>
                      <Container border="light">
                        <Row xs={1} md={1}>
                          <Col style={{ width: "10rem" }}>
                            <Card.Img src="https://images.solopos.com/2019/11/Ilustrasi-hotel.-Freepik.jpg" />
                          </Col>
                          <Col style={{ width: "10rem" }}>
                            <h4>store name</h4>
                            <p>Alamat store</p>
                            <p>pasilitas store</p>
                            <p>harga Hotel</p>
                            <Button>booking</Button>
                          </Col>
                        </Row>
                      </Container>
                    </Carousel.Item>

                    <Carousel.Item>
                      <Container border="light">
                        <Row xs={1} md={1} lg={1}>
                          <Col style={{ width: "10rem" }}>
                            <Card.Img src="https://images.solopos.com/2019/11/Ilustrasi-hotel.-Freepik.jpg" />
                          </Col>
                          <Col style={{ width: "10rem" }}>
                            <h4>store name</h4>
                            <p>Alamat Hotel</p>
                            <p>pasilitas Hotel</p>
                            <p>harga Hotel</p>
                            <Button>booking</Button>
                          </Col>
                        </Row>
                      </Container>
                    </Carousel.Item>
                    <Carousel.Item>
                      <Container border="light">
                        <Row xs={1} md={1} lg={1}>
                          <Col style={{ width: "10rem" }}>
                            <Card.Img src="https://images.solopos.com/2019/11/Ilustrasi-hotel.-Freepik.jpg" />
                          </Col>
                          <Col style={{ width: "10rem" }}>
                            <h4>store name</h4>
                            <p>Alamat Hotel</p>
                            <p>pasilitas Hotel</p>
                            <p>harga Hotel</p>
                            <Button>booking</Button>
                          </Col>
                        </Row>
                      </Container>
                    </Carousel.Item>
                  </Carousel>
                </div>
              </div>

              {/* <Trasport /> */}

              <div>
                <div style={{ width: "29rem" }}>
                  <Carousel>
                    <Carousel.Item>
                      <Container border="light">
                        <Row xs={1} md={1}>
                          <Col style={{ width: "10rem" }}>
                            <Card.Img src="https://images.solopos.com/2019/11/Ilustrasi-hotel.-Freepik.jpg" />
                          </Col>
                          <Col style={{ width: "10rem" }}>
                            <h4>store name</h4>
                            <p>Alamat store</p>
                            <p>pasilitas store</p>
                            <p>harga Hotel</p>
                            <Button>booking</Button>
                          </Col>
                        </Row>
                      </Container>
                    </Carousel.Item>

                    <Carousel.Item>
                      <Container border="light">
                        <Row xs={1} md={1} lg={1}>
                          <Col style={{ width: "10rem" }}>
                            <Card.Img src="https://images.solopos.com/2019/11/Ilustrasi-hotel.-Freepik.jpg" />
                          </Col>
                          <Col style={{ width: "10rem" }}>
                            <h4>Hotel name</h4>
                            <p>Alamat Hotel</p>
                            <p>pasilitas Hotel</p>
                            <p>harga Hotel</p>
                            <Button>booking</Button>
                          </Col>
                        </Row>
                      </Container>
                    </Carousel.Item>
                    <Carousel.Item>
                      <Container border="light">
                        <Row xs={1} md={1} lg={1}>
                          <Col style={{ width: "10rem" }}>
                            <Card.Img src="https://images.solopos.com/2019/11/Ilustrasi-hotel.-Freepik.jpg" />
                          </Col>
                          <Col style={{ width: "10rem" }}>
                            <h4>trasport name</h4>
                            <p>Alamat Hotel</p>
                            <p>pasilitas Hotel</p>
                            <p>harga Hotel</p>
                            <Button>booking</Button>
                          </Col>
                        </Row>
                      </Container>
                    </Carousel.Item>
                  </Carousel>
                </div>
              </div>
              {/* <Restoran /> */}
              <div>
                <div style={{ width: "29rem" }}>
                  <Carousel>
                    <Carousel.Item>
                      <Container border="light">
                        <Row xs={1} md={1} lg={1}>
                          <Col style={{ width: "10rem" }}>
                            <Card.Img src="https://images.solopos.com/2019/11/Ilustrasi-hotel.-Freepik.jpg" />
                          </Col>
                          <Col style={{ width: "10rem" }}>
                            <h4>Hotel name</h4>
                            <p>Alamat Hotel</p>
                            <p>pasilitas Hotel</p>
                            <p>harga Hotel</p>
                            <Button>booking</Button>
                          </Col>
                        </Row>
                      </Container>
                    </Carousel.Item>

                    <Carousel.Item>
                      <Container border="light">
                        <Row xs={1} md={1} lg={1}>
                          <Col style={{ width: "10rem" }}>
                            <Card.Img src="https://images.solopos.com/2019/11/Ilustrasi-hotel.-Freepik.jpg" />
                          </Col>
                          <Col style={{ width: "10rem" }}>
                            <h4>restoran name</h4>
                            <p>Alamat restoran</p>
                            <p>pasilitas Hotel</p>
                            <p>harga Hotel</p>
                            <Button>booking</Button>
                          </Col>
                        </Row>
                      </Container>
                    </Carousel.Item>
                    <Carousel.Item>
                      <Container border="light">
                        <Row xs={1} md={1} lg={1}>
                          <Col style={{ width: "10rem" }}>
                            <Card.Img src="https://images.solopos.com/2019/11/Ilustrasi-hotel.-Freepik.jpg" />
                          </Col>
                          <Col style={{ width: "10rem" }}>
                            <h4>Hotel name</h4>
                            <p>Alamat Hotel</p>
                            <p>pasilitas Hotel</p>
                            <p>harga Hotel</p>
                            <Button>booking</Button>
                          </Col>
                        </Row>
                      </Container>
                    </Carousel.Item>
                  </Carousel>
                </div>
              </div>
            </Col>
          </Row>
          <Review />
        </Container>
      </div>
    </div>
  );
}

export default Detail;
