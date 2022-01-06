import Logo from "../Logo.png";
import { Container, Row, Col, Card } from "react-bootstrap";
import { FaJenkins, FaKeybase } from "react-icons/fa";
function About() {
  return (
    <div>
      <Container>
        <Row className="justify-content-md-center">
          <Row style={{ marginBottom: "3rem" }}>
            <Col style={{ marginTop: "4rem" }}>
              <h6 style={{ fontSize: "27px" }}> About Us</h6>

              <p style={{ width: "24rem" }}>
                The standard chunk of Lorem Ipsum used since the 1500s is
                reproduced below for those interested. Sections 1.10.32 and
                1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also
                reproduced in their exact original form, accompanied by English
                versions from the 1914 translation by H. Rackham.
              </p>
            </Col>
            <Col>
              <Card.Img style={{ width: "42rem" }} variant="top" src={Logo} />
            </Col>
          </Row>
        </Row>
        <h6 style={{ fontSize: "22px", marginBottom: "26px" }}>Mentor</h6>
        <Row md={4} style={{ marginBottom: "3rem" }}>
          <Col style={{ textAlign: "center" }}>
            <FaJenkins /> mentorName
          </Col>
          <Col xs={6} style={{ textAlign: "center" }}>
            <FaJenkins /> mentorName
          </Col>
          <Col style={{ textAlign: "center" }}>
            <FaJenkins /> mentorName
          </Col>
          <Col xs={6} style={{ textAlign: "center" }}>
            <FaJenkins /> mentorName
          </Col>
        </Row>
        <h6 style={{ fontSize: "22px", marginBottom: "26px" }}>
          Sisa from Skilvul
        </h6>
        <Row md={4} style={{ marginBottom: "3rem" }}>
          <Col style={{ textAlign: "center" }}>
            <FaKeybase /> siswa Name
          </Col>
          <Col xs={6} style={{ textAlign: "center" }}>
            <FaKeybase /> siswa Name
          </Col>
          <Col style={{ textAlign: "center" }}>
            <FaJenkins /> siswa Name
          </Col>
          <Col xs={6} style={{ textAlign: "center" }}>
            <FaJenkins />
            siswa Name
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;
