import Recommendation from "../top/Recommendation";
import Object from "../wisata/Object";
import CarouselRB from "./CarouselRB";

function Home() {
  return (
    <div>
      <CarouselRB />
      <Object />
      <Recommendation />
    </div>
  );
}

export default Home;
