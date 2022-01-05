import React from "react";
import Cookies from "js-cookie";
import axios from "axios";
import ReactStars from "react-rating-stars-component";
import "./review.css";
import { useEffect } from "react";
import { FaStar } from "react-icons/fa";
import { useState } from "react";
import DropdownItem from "react-bootstrap/esm/DropdownItem";
import { useParams } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { FaUserCircle } from "react-icons/fa";

function Review() {
  const [star, setStar] = useState();
  const [deskripsi, setDeskripsi] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const token = Cookies.get("lokaKota");
    console.log(token);
    axios(`https://lokakota.herokuapp.com/comment?wisata=${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    }).then((result) => {
      console.log(result.data);
      setDeskripsi(result.data);
    });
  }, []);

  const [input, setInput] = useState("");
  // const ratingChange = (newRating) => {
  //   setStar(newRating);
  // };
  const addData = () => {
    setDeskripsi([...deskripsi, input]);
  };

  const submidReview = (e) => {
    e.preventDefault();
    if (star === null && deskripsi === "") {
      alert("masukkan review");
    } else {
    }
  };
  // for(i = 0; i < 5; i++){
  //   if(i <= )
  // }
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
                              classNames="bintang"
                              size={30}
                              activeColor="red"
                              count={5}
                              // onChange={addData}
                              // value={star}
                            />
                          </li>
                        </ul>
                      </div>
                      <input
                        className="input-review"
                        type="textarea"
                        placeholder="review"
                        // value={deskripsi}
                        // onChange={(e) => setDeskripsi(e.target.value)}
                      />

                      <button className="btnrev">
                        <h6>Send Review</h6>
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

            {/* <input type="submit" value="Submit" className="btn btn-review" /> */}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Review;
