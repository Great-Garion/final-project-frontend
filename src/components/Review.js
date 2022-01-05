import React from "react";
import Cookies from "js-cookie";
import axios from 'axios'
import ReactStars from "react-rating-stars-component";
import './review.css'
import {useEffect} from 'react'
import {FaStar} from 'react-icons/fa'
import { useState } from "react";
import DropdownItem from "react-bootstrap/esm/DropdownItem";
import { useParams } from "react-router-dom";
import{Container,Row,Col} from 'react-bootstrap'
import {FaUserCircle} from 'react-icons/fa'
function Review() {

  const [star, setStar] = useState();
  const [deskripsi, setDeskripsi] = useState([]);

  useEffect(() => {
    const token = Cookies.get("lokaKota");
    console.log(token)
    axios.get("localhost:4000/comment?wisata=61d1986f97aee5b7d0bc5c5", {
      headers: { Authorization: `Bearer ${token}` },
    }).then((result) =>{
      console.log(result.data);
      setDeskripsi(result.data)
    });
  }, []);
  const [input, setInput] = useState("")
  // const ratingChange = (newRating) => {
  //   setStar(newRating);
  // };
  const addData = () => {
    setDeskripsi([...deskripsi, input])
  }
  const submidReview = (e) => {
    e.preventDefault();
    if (star === null && deskripsi === "") {
      alert("masukkan review");
    }else{

    }
};

return (
  <div className="review-container">
    <div className="main-input">
      <div>
       
        <form className="form-column" 
        // onSubmit={submidReview}
        >
         <Container>
  <Row>
    <Col>
    <Row> 
      <Col className="cardReview"> 
    <div className="cardBintang">
      <ul>
        <li className="lirev"><h6 style={{fontSize:"31px",marginButton:'0px'}}>Review And Rating</h6></li>
        <li style={{marginLeft:'50px'}}> 
      <ReactStars
          classNames="bintang"
          size={30}
          
          activeColor="red"
          count={5}
          // onChange={addData}
          // value={star}
       /></li>
      </ul>
    </div>
        
        <input
            className="input-review"
            type="textarea"
            placeholder="review"
            // value={deskripsi}
            // onChange={(e) => setDeskripsi(e.target.value)}
          />
 <br/> <br/>
 <button className="btnrev"><h6>Send Review</h6></button></Col>

    </Row>
    </Col>
    <Col>
    <Row>
      <Col> <FaUserCircle
       size={30}
      /></Col>
      <Col className="userCol"><h6> User Name</h6></Col>
      <Col> <FaStar style={{ color: 'yellow' }} /></Col>
    </Row>
   
    </Col>
  </Row>
  
</Container>
       
         
         
          {/* <input type="submit" value="Submit" className="btn btn-review" /> */}
       </form> 
      </div>

       {/* <div className="main-review">
         {deskripsi.map((item) => (
           <h6>{item.review}</h6>,
           console.log(item)
         ))} */}
         {/* <div className="user-container">
              <div  className="review-container">
         
                <p className="nama-user">
                5/5 <FaStar style={{ color: 'yellow' }} />
                </p>
                <p className="user-review">hallo</p>
              </div>
        </div> */}
      {/* </div> */}

   </div>
</div> 
);
}

export default Review;
