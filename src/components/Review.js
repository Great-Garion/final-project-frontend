import React from "react";
import Cookies from "js-cookie";
import axios from 'axios'
import ReactStars from "react-rating-stars-component";

import {useEffect} from 'react'
import {FaStar} from 'react-icons/fa'
import { useState } from "react";
import DropdownItem from "react-bootstrap/esm/DropdownItem";
import { useParams } from "react-router-dom";

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
       
        {/* <form className="form-column" onSubmit={submidReview}>
        <ReactStars
          classNames="bintang"
          size={30}
          activeColor="red"
          count={5}
          onChange={addData}
          value={star}
        />
          <input
            className="input-review"
            type="text area"
            placeholder="review"
            value={deskripsi}
            onChange={(e) => setDeskripsi(e.target.value)}
          />
          <input type="submit" value="Submit" className="btn btn-review" />
        </form> */}
      </div>

       <div className="main-review">
         {deskripsi.map((item) => (
           <h6>{item.review}</h6>,
           console.log(item)
         ))}
         {/* <div className="user-container">
              <div  className="review-container">
         
                <p className="nama-user">
                5/5 <FaStar style={{ color: 'yellow' }} />
                </p>
                <p className="user-review">hallo</p>
              </div>
        </div> */}
      </div>

    </div>
  </div>
);
}

export default Review;
