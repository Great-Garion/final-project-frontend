import axios from "axios";
import { useState } from "react";
import { Carousel } from "react-bootstrap";

function CarouselRB() {
  const [carousel, setCarousel] = useState([]);
  axios("https://lokakota.herokuapp.com/wisata").then((result) => {
    setCarousel(result.data);
  });
  return (
    <Carousel fade>
      {carousel.map((item) => (
        <Carousel.Item>
          <img
            className="d-block w-70 mx-auto"
            src={item.image}
            alt={item.tourism_spot}
            style={{ borderRadius: "20px" }}
          />
          <Carousel.Caption>
            <h3>{item.tourism_spot}</h3>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default CarouselRB;
