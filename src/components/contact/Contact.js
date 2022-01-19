import { Form, Row, Col, Container } from "react-bootstrap";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import "./Contact.css";

function Contact() {
  let [contact, setContact] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });
  let handleComent = (e) => {
    const { name, value } = e.target;
    setContact({
      ...contact,
      [name]: value,
    });
  };

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    setContact({
      user_name: "",
      user_email: "",
      message: "",
    });

    emailjs
      .sendForm(
        "loka-kota",
        "loka_kota_tours",
        form.current,
        "user_57i5xcjs4eQFjHe8IixWV"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    alert("message sent successfully");
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
        <form ref={form} onSubmit={sendEmail}>
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
                style={{
                  width: "26rem",
                  height: "38px",
                  borderRadius: "5px",
                  padding: "20px",
                  margin: "16px 0px",
                }}
                type="text"
                name="user_name"
                placeholder="Enter Username"
                onChange={handleComent}
                value={contact.user_name}
              />
            </Col>
            <Col>
              <input
                style={{
                  width: "26rem",
                  height: "38px",
                  borderRadius: "5px",
                  padding: "20px",
                }}
                type="email"
                name="user_email"
                placeholder="Enter Email"
                onChange={handleComent}
                value={contact.user_email}
              />
            </Col>
          </Row>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <input
              style={{
                width: "26rem",
                marginTop: "20px",
                height: "78px",
                borderRadius: "5px",
                padding: "20px",
              }}
              type="textarea"
              name="message"
              placeholder="Enter Message"
              onChange={handleComent}
              value={contact.message}
            />
          </Form.Group>
          <button
            style={{
              width: "26rem",
              height: "40px",
              borderRadius: "5px",
              backgroundColor: "green",
              border: "none",
              color: "black",
            }}
            type="submit"
            value="Send"
          >
            Send Massage
          </button>
        </form>
      </Container>
    </div>
  );
}

export default Contact;
