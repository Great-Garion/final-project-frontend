import { useHistory } from "react-router";
import { Card, Row, Col, Container, Button } from "react-bootstrap";
import "../style.css";

function Object() {
  const history = useHistory()

  const handleObject = (e) => {
    e.preventDefault()
    history.push("/listWisata")
  }
  return (
    <div className="boxWisata">
      <Container>
        <Row style={{ marginTop: "20px" }} xs={1} md={2} className="g-4">
          <Col>
            <Card
              className="cardWisata"
              style={{
                borderRadius: "30px 30px 30px 30px",
                paddingBottom: "10px",
              }}
            >
              <Card.Img
                style={{ borderRadius: "30px 30px 0px 0px" }}
                variant="top"
                src="https://i.ibb.co/ck77bkD/Dalam-Loka.jpg"
              />
              <Card.Body>
                <Card.Title>Sumbawa</Card.Title>
                <Card.Text>
                  Lorem Ipsum has been the industry's standard dummy text ever
                  since the 1500s, when an unknown printer took a galley of type
                  and scrambled it to make a type specimen book.
                </Card.Text>
              </Card.Body>
              <Button onClick={handleObject}
                style={{
                  backgroundColor: "orange",
                  border: "none",
                  borderRadius: "20px",
                  width: "150px",
                  marginLeft: "200px",
                }}
              >
                click here
              </Button>
            </Card>
          </Col>
          <Col>
            <Card
              className="cardWisata"
              style={{
                borderRadius: "30px 30px 30px 30px",
                paddingBottom: "10px",
              }}
            >
              <Card.Img
                style={{ borderRadius: "30px 30px 0px 0px" }}
                variant="top"
                src="https://i.ibb.co/GTjk0dp/Sawah.jpg"
              />
              <Card.Body>
                <Card.Title>Sumbawa Barat</Card.Title>
                <Card.Text>
                  Lorem Ipsum has been the industry's standard dummy text ever
                  since the 1500s, when an unknown printer took a galley of type
                  and scrambled it to make a type specimen book.
                </Card.Text>
              </Card.Body>
              <Button onClick={handleObject}
                style={{
                  backgroundColor: "orange",
                  border: "none",
                  borderRadius: "20px",
                  width: "150px",
                  marginLeft: "200px",
                }} 
              >
                click here
              </Button>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Object;
