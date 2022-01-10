import { Form, Row, Col, Button, Container } from "react-bootstrap";
import { useState } from "react";

import "./Contact.css";

function Contact() {
  let [contact, setContact] = useState({
    fistname: "",
    email: "",
    comment: "",
  });
  let handleComent = (e) => {
    const { name, value } = e.target;
    setContact({
      ...contact,
      [name]: value,
    });
  };

  let submitMassage = (e) => {
    e.preventDefault();
    setContact({
      fistname: "",
      email: "",
      comment: "",
    });
  };
  return (
    <div>
      <Container
        className="coun"
        style={{
          width: "27rem",
          marginBottom: "4rem",
          marginTop: "2rem",
          borderRadius: "5px",
        }}
      >
        <Form>
          <h6
            style={{
              textAlign: "center",
              marginBottom: "30px",
              color: "green",
              fontSize: "32px",
            }}
          >
            Contact Us
          </h6>
          <Row>
            <Col>
              <input
                style={{ height: "38px", borderRadius: "5px" }}
                type="text"
                placeholder="     Your name"
                name="fistname"
                onChange={handleComent}
                value={contact.fistname}
              />
            </Col>
            <Col>
              <input
                style={{ height: "38px", borderRadius: "5px" }}
                type="email"
                name="email"
                placeholder="     Your email"
                onChange={handleComent}
                value={contact.email}
              />
            </Col>
          </Row>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <input
              style={{
                width: "25rem",
                marginTop: "20px",
                height: "78px",
                borderRadius: "5px",
              }}
              type="textarea"
              name="comment"
              placeholder="     Add your message"
              onChange={handleComent}
              value={contact.comment}
            />
          </Form.Group>
          <Button
            style={{
              width: "25rem",
              backgroundColor: "green",
              border: "none",
              color: "black",
            }}
            type="submit"
            onClick={submitMassage}
          >
            Send Massage
          </Button>
        </Form>
      </Container>
    </div>
  );
}

export default Contact;
