import { Carousel } from "react-bootstrap";

function CarouselRB() {
  return (
      <Carousel>
        {SliderData.map((slide, index) => (
            <Carousel.Item>
            <img
              className="w-80"
              src={slide.image}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>{slide.title}</h3>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
  );
}

export default CarouselRB;
