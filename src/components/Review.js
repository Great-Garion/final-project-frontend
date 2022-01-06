import React from "react";
import Cookies from "js-cookie";
import axios from "axios";
import ReactStars from "react-rating-stars-component";
import "./review.css";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { FaUserCircle } from "react-icons/fa";

function Review() {
  const [deskripsi, setDeskripsi] = useState([]);
  const [success, setSuccess] = useState();
  const { id } = useParams();

  useEffect(() => {
    const token = Cookies.get("lokaKota");
    console.log(token);
    axios(`http://localhost:4000/comment?wisata=${id}`, {
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
    const result = await axios("http://localhost:4000/comment", {
      headers: { Authorization: `Bearer ${token}` },
      data: input,
      method: "post",
    });
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
          <form
            className="form-column"
            // onSubmit={submidReview}
          >
            <Container>
              <Row>
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
                      <button className="btnrev" onClick={handleReview}>
                        Send Review
                      </button>
                    </Col>
                  </Row>
                </Col>
                <Col>
                  {deskripsi.map((item) => (
                    <Row>
                      <Col>
                        <FaUserCircle size={30} />
                      </Col>
                      <Col className="userCol">
                        <h6>{item.user?.username}</h6>
                      </Col>
                      <Col>
                        <ReactStars
                          count={5}
                          value={item.rating}
                          edit={false}
                        />
                      </Col>
                      <h6>{item.review}</h6>
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
