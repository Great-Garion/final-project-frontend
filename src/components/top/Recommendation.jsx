import { useState, useEffect } from "react";
import axios from "axios";
import "./Recommendation.css";
import { useHistory } from "react-router-dom";
function Recommendation() {
  const history = useHistory();
  const [recom, setRecom] = useState([]);
  useEffect(() => {
    axios(`https://lokakota.herokuapp.com/wisata?kabupaten`).then((result) => {
      setRecom(result.data);
    });
  }, []);

  const handleTop = (id) => {
    history.push(`/wisata/${id}`);
  };
  return (
    <div>
      <h3 style={{ textAlign: "center" }}>Top destinations</h3>
      <br />
      <div className="cover">
        <div className="scroll-images">
          {recom.map((item) => (
            <div className="child">
              <h5 style={{ textAlign: "center" }}>{item.tourism_spot}</h5>
              <img
                className="child-img"
                src={item.image}
                alt="image"
                onClick={() => handleTop(item._id)}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Recommendation;
