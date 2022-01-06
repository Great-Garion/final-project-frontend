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

  const [input, setInput] = useState({
    rating: 0,
    review: "",
  });

  const addData = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };
  
  const handleRating = (rating) => {
    console.log(`rating : ${rating}`)
    setInput({...input, rating})
  }

  const handleReview = (e) => {
    e.preventDefault();
    console.log(input);
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
              <Row style={{paddingTop:'5rem'}}>
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
                      <button className="btnrev" onClick={handleReview} style={{fontFamily: 'Poppins'}}>
                        Send Review
                      </button>
                    </Col>
                  </Row>
                </Col>
                <Col style={{marginTop: '75px'}}>
                  {deskripsi.map((item) => (
                    <Row style={{  
                      alignItems: 'center',
                      paddingBottom: '13px'}}>
                      <Col xs lg="1">
                        <FaUserCircle size={35} />
                      </Col>
                      <Col xs lg="3" className="userCol">
                        <h6 style={{marginTop: '-8px'}}>{item.user?.username}</h6>
                      </Col>
                      <Row>
                      <Col style={{marginTop: '-17px',paddingLeft:'54px'}} >
                        <ReactStars
                       
                          count={5}
                          value={item.rating}
                          edit={false}
                        />
                         </Col>
                      </Row>
                      
                     
                      <h6 style={{marginTop: '7px',paddingLeft: '2rem',fontFamily: 'Poppins'}}>{item.review}</h6>
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
