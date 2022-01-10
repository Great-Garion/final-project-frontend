import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { FaUserCircle } from "react-icons/fa";

import Cookies from "js-cookie";
import axios from "axios";

import "./review.css";

function Review() {
  const [deskripsi, setDeskripsi] = useState([]);
  const [success, setSuccess] = useState();
  const { id } = useParams();

  useEffect(() => {
    const token = Cookies.get("lokaKota");
    axios(`https://lokakota.herokuapp.com/comment?wisata=${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    }).then((result) => {
      setDeskripsi(result.data);
    });
  }, [success]);

  const [input, setInput] = useState({
    rating: 0,
    review: "",
    wisata: id,
  });

  const addData = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  const handleRating = (rating) => {
    setInput({ ...input, rating });
  };

  const handleReview = async (e) => {
    e.preventDefault();
    const token = Cookies.get("lokaKota");
    const result = await axios("https://lokakota.herokuapp.com/comment", {
      headers: { Authorization: `Bearer ${token}` },
      data: input,
      method: "post",
    });
    setSuccess(result.status);
    setInput({
      rating: 0,
      review: "",
    });
  };

  return (
    <div className="review-container">
      <div className="main-input">
        <div>
          <form className="form-column">
            <Container>
              <Row style={{ paddingTop: "5rem" }}>
                <Col>
                  <Row>
                    <Col className="cardReview">
                      <div className="cardBintang">
                        <ul>
                          <li className="lirev">
                            <h6
                              style={{ fontSize: "31px", marginButton: "0px" }}
                            >
                              Review And Rating
                            </h6>
                          </li>
                          <li>
                            <ReactStars
                              className="rating"
                              size={30}
                              activeColor="red"
                              count={5}
                              onChange={handleRating}
                              value={input.rating}
                            />
                          </li>
                        </ul>
                      </div>
                      <input
                        className="input-review"
                        type="textarea"
                        placeholder="Berikan review tempat wisata ini"
                        name="review"
                        onChange={addData}
                        value={input.review}
                        
                      />
                      <button
                        className="btnrev"
                        onClick={handleReview}
                        style={{ fontFamily: "Poppins" }}
                      >
                        Send Review
                      </button>
                    </Col>
                  </Row>
                </Col>
                <Col style={{ marginTop: "75px" }}>
                  {deskripsi.map((item) => (
                    <Card className="review" style={{ width: "450px", marginTop: "35px" }}>
                      <Row
                        className="g-0"
                        style={{
                          alignItems: "center",
                        }}
                      >
                        <Card.Body>
                          <Card.Title>
                            <Row>
                              <Col xs lg="1">
                                <FaUserCircle size={35} />
                              </Col>{" "}
                              <Col xs lg="3" className="userCol">
                                <h6
                                  style={{
                                    marginTop: "10px",
                                    marginLeft: "10px",
                                  }}
                                >
                                  {item.user?.username}
                                </h6>
                              </Col>
                              <Col
                                style={{
                                  marginTop: "10px",
                                  paddingLeft: "200px",
                                }}
                              >
                                <ReactStars
                                  count={5}
                                  value={item.rating}
                                  edit={false}
                                />
                              </Col>
                            </Row>
                          </Card.Title>
                          <Card.Text>{item.review}</Card.Text>
                          <Button
                            style={{
                              backgroundColor: "greenyellow",
                              border: "none",
                              marginLeft: "340px"
                            }}
                          >
                            Reply
                          </Button>
                        </Card.Body>
                      </Row>
                    </Card>
                  ))}
                </Col>
              </Row>
            </Container>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Review;
