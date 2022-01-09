import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import { Container, Row, Col } from "react-bootstrap";
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
    console.log(token);
    axios(`https://lokakota.herokuapp.com/wisata/comment?wisata=${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    }).then((result) => {
      console.log(result.data);
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
    console.log(`rating : ${rating}`);
    setInput({ ...input, rating });
  };

  const handleReview = async (e) => {
    e.preventDefault();
    const token = Cookies.get("lokaKota");
    console.log(token);
    const result = await axios(
      "https://lokakota.herokuapp.com/wisata/comment",
      {
        headers: { Authorization: `Bearer ${token}` },
        data: input,
        method: "post",
      }
    );
    setSuccess(result.status);
    console.log(success);
    setInput({
      rating: 0,
      review: "",
    });
    console.log(result);
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
                          <li style={{ marginLeft: "50px" }}>
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
                        placeholder="review"
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
                    <Row
                      style={{
                        alignItems: "center",
                        paddingBottom: "13px",
                      }}
                    >
                      <Col xs lg="1">
                        <FaUserCircle size={35} />
                      </Col>
                      <Col xs lg="3" className="userCol">
                        <h6 style={{ marginTop: "-8px" }}>
                          {item.user?.username}
                        </h6>
                      </Col>
                      <Row>
                        <Col
                          style={{ marginTop: "-17px", paddingLeft: "54px" }}
                        >
                          <ReactStars
                            count={5}
                            value={item.rating}
                            edit={false}
                          />
                        </Col>
                      </Row>

                      <h6
                        style={{
                          marginTop: "7px",
                          paddingLeft: "2rem",
                          fontFamily: "Poppins",
                        }}
                      >
                        {item.review}
                      </h6>
                    </Row>
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
