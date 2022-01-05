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
import {
  FaBuilding,
  FaAmbulance,
  FaMosque,
  FaCarSide,
  FaHamburger,
  FaUserSecret,
  FaPhoneSquareAlt,
  FaAddressBook,
  FaClock,
} from "react-icons/fa";

import Review from "./Review";
import "./Detail.css";
import { UserContext } from "../Context/UserProvider";
import { useContext } from "react";

function Detail() {
  const { isLogin } = useContext(UserContext);
  const [dataDetail, setDataDetail] = useState({});
  const { id } = useParams();

  useEffect(() => {
    axios(`https://lokakota.herokuapp.com/wisata/${id}`).then((result) => {
      setDataDetail(result.data);
    });
  }, []);

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
                {dataDetail.image?.map((item) => (
                  <Carousel.Item interval={1000}>
                    <img
                      className="d-block w-100"
                      style={{ height: "22rem", borderRadius: "12px" }}
                      src={item}
                      alt="First slide"
                    />
                  </Carousel.Item>
                ))}
              </Carousel>
            </Col>
            <Col xs lg="2">
              <Row>
                <Col>
                  {dataDetail.image?.map((item) => (
                    <Card.Img
                      src={item}
                      style={{
                        borderRadius: "12px",
                        margin: "2px",
                        height: "7rem",
                      }}
                    />
                  ))}
                </Col>
              </Row>
            </Col>
            <Col md="auto" style={{ width: "27rem" }}>
              <h4> {dataDetail.tourism_spot}</h4>
              <h6>
                Masjid Agung Darussalam Sumbawa Barat merupakan sebuah masjid
                yang terletak di Kabupaten Sumbawa Barat, Indonesia. Masjid ini
                dibangun pada tahun 2007 dan selesai pada tahun 2010. Bentuk ini
                pula menjadi ciri khas setiap bangunan dan berbagai aktivitas
                administrasi pemerintah dan masyarakat kabupaten Sumbawa Barat
              </h6>
              <ul>
                <li>
                  <b>
                    <FaAddressBook /> Alamat :{" "}
                  </b>{" "}
                  {dataDetail.address}
                </li>
                <li>
                  <b>
                    <FaPhoneSquareAlt /> Contact Us :{" "}
                  </b>{" "}
                  {dataDetail.contact_us}
                </li>
                <li>
                  <b>
                    <FaClock /> Jam Buka :{" "}
                  </b>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </div>
      <br />
      <div style={{ width: "100%" }}>
        <Container>
          <Row>
            <Col className="cardInfo">
              <h6
                style={{
                  textAlign: "center",
                  fontSize: "25px",
                  marginTop: "10px",
                }}
              >
                Hotel
              </h6>
              <Row>
                <Col className="cardDetail">
                  <ul className="cardUl">
                    {dataDetail.hotel?.map((item) => (
                      <li>
                        <FaBuilding />
                        {item}
                      </li>
                    ))}
                  </ul>
                </Col>
              </Row>
            </Col>

            <Col className="cardInfo">
              <h6
                style={{
                  textAlign: "center",
                  fontSize: "25px",
                  marginTop: "10px",
                }}
              >
                Restoran
              </h6>
              <Row>
                <Col className="cardDetail">
                  <ul className="cardUl">
                    {dataDetail.restaurant?.map((item) => (
                      <li>
                        <FaHamburger /> {item}
                      </li>
                    ))}
                  </ul>
                </Col>
              </Row>
            </Col>
            <Col className="cardInfo">
              <h6
                style={{
                  textAlign: "center",
                  fontSize: "25px",
                  marginTop: "10px",
                }}
              >
                {" "}
                Transportasi
              </h6>
              <Row>
                <Col className="cardDetail">
                  <ul className="cardUl">
                    {dataDetail.transport?.map((item) => (
                      <li>
                        {" "}
                        <FaCarSide />
                        {item}
                      </li>
                    ))}
                  </ul>{" "}
                </Col>
              </Row>
            </Col>
          </Row>
          <br />
          <Row>
            <Col className="cardInfo">
              <h6
                style={{
                  textAlign: "center",
                  fontSize: "25px",
                  marginTop: "10px",
                }}
              >
                {" "}
                Worship
              </h6>
              <Row>
                <Col className="cardDetail">
                  <ul className="cardUl">
                    {dataDetail.worship?.map((item) => (
                      <li>
                        <FaMosque /> {item}
                      </li>
                    ))}
                  </ul>
                </Col>
              </Row>
            </Col>
            <Col className="cardInfo">
              <h6
                style={{
                  textAlign: "center",
                  fontSize: "25px",
                  marginTop: "10px",
                }}
              >
                {" "}
                Polisi
              </h6>
              <Row>
                <Col className="cardDetail">
                  <ul className="cardUl">
                    {dataDetail.police?.map((item) => (
                      <li>
                        <FaUserSecret /> {item}
                      </li>
                    ))}
                  </ul>
                </Col>
              </Row>
            </Col>
            <Col className="cardInfo">
              <h6
                style={{
                  textAlign: "center",
                  fontSize: "25px",
                  marginTop: "10px",
                }}
              >
                {" "}
                Hospital
              </h6>
              <Row>
                <Col className="cardDetail">
                  <ul className="cardUl">
                    <li>
                      {dataDetail.hospital?.map((item) => (
                        <li>
                          <FaAmbulance /> {item}
                        </li>
                      ))}
                    </li>
                  </ul>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
        {isLogin ? <Review/> : "silahkan login"}
        <Review/>
      </div>
    </div>
  );
}

export default Detail;
