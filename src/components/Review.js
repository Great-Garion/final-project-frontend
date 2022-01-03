import React from "react";
import {useEffect} from 'react'
import ReactStars from "react-rating-stars-component";
import {FaStar} from 'react-icons/fa'
import axios from 'axios'
import { useState } from "react";
function Review({ reviews }) {
  const [star, setStar] = useState();
  
  
  const [deskripsi, setDeskripsi] = useState("");

  const ratingChange = (newRating) => {
    setStar(newRating);
  };

  const submidReview = (e) => {
    e.preventDefault();
    if (star === null && deskripsi === "") {
      alert("masukkan review");
    }else
    {
     const data = {
      
       review : deskripsi,
       rating:star,
     }
    }
  //   axios
  //     .post(
  //       'https://movie-app-teamc.herokuapp.com/api/create/review'
        
  //     )
  //     .then((response) => console.log(response))
  //     .catch((err) => err.response.message);

  //   setStar()
  
  //   setDeskripsi('')
  // }
};
useEffect(() => {
  axios('https://movie-app-teamc.herokuapp.com/api/create/review')
  .then((response) => console.log(response))
   .catch((err) => err.response.message)
   
   
}, []);
return (
  <div className="review-container">
    <div className="main-input">
      <div>
       
        <form className="form-column" onSubmit={submidReview}>
        <ReactStars
          classNames="bintang"
          size={30}
          activeColor="red"
          count={5}
          onChange={ratingChange}
          value={star}
        />
          <input
            className="input-review"
            type="text area"
            placeholder="Leave a review"
            value={deskripsi}
            onChange={(e) => setDeskripsi(e.target.value)}
          />
          <input type="submit" value="Submit" className="btn btn-review" />
        </form>
      </div>

       <div className="main-review">
         <div className="user-container">
          {/* {reviews.length > 0
            ? reviews.map((review, index) => ( */}
              <div  className="review-container">
         
                <p className="nama-user">
                5/5 <FaStar style={{ color: 'yellow' }} />
                </p>
                <p className="user-review">hallo</p>
              </div>
            {/* )
            )
            : 'No one review yet'
             } */}
        </div>
      </div>

    </div>
  </div>
);
}

export default Review;
