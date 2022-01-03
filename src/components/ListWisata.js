import axios from "axios";
import { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import "../style.css"
function ListWisata() {
  const [listWisata, setListWisata] = useState([]);

  useEffect(() => {
    axios("https://lokakota.herokuapp.com/wisata").then((result) => {
      console.log(result.data);
      setListWisata(result.data);
    });
  }, []);
  return (
    <div className="boxWisata">
      <Container>
        <Row xs={1} md={3} className="g-4">
          {listWisata.map((item) => (
            <Col>
              <Card
                style={{
                  width: "16rem",
                  height: "15rem",
                  alignItems: "center",
                  marginTop: "20px",
                  border: "none"
                }}
              >
                <Card.Img
                  style={{ borderRadius: "10px 10px 0px 0px" }}
                  variant="top"
                  src={item.image[0]}
                  alt="wisata"
                />
                <Card.Body>
                  <button className="btnName">{item.tourism_spot}</button>
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
