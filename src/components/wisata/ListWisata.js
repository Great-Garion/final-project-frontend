import { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { useHistory, useLocation } from "react-router-dom";

import axios from "axios";
import "../all.css";

function ListWisata() {
  const history = useHistory();
  const [listWisata, setListWisata] = useState([]);

  const { search } = useLocation();
  const queryParams = new URLSearchParams(search);
  const kabupaten = queryParams.get("kabupaten");

  useEffect(() => {
    axios(`https://lokakota.herokuapp.com/wisata?kabupaten=${kabupaten}`).then(
      (result) => {
        setListWisata(result.data);
      }
    );
  }, []);

  const handleDetail = (id) => {
    history.push(`/wisata/${id}`);
  };

  return (
    <div className="boxWisata">
      <Container>
        <Row xs={1} md={3} className="g-4" style={{ marginLeft: "50px" }}>
          {listWisata.map((item) => (
            <Col>
              <Card
                className="cardWisata"
                style={{
                  width: "16rem",
                  height: "18rem",
                  alignItems: "center",
                  marginTop: "20px",
                  borderRadius: "15px 15px 15px 15px",
                }}
              >
                <Card.Img
                  style={{ borderRadius: "10px 10px 0px 0px" }}
                  variant="top"
                  src={item.image[0]}
                  alt="wisata"
                />
                <Card.Body>
                  <button
                    className="btnName"
                    onClick={() => handleDetail(item._id)}
                  >
                    {item.tourism_spot}
                  </button>
                  <p style={{ marginTop: "10px", fontSize: "13px" }}>
                    {item.address}
                  </p>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default ListWisata;
