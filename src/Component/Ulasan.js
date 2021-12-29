import { useState, useEffect } from "react";
import { Button, Col, Container, Form, ListGroup, Row } from "react-bootstrap";
import "./Ulasan.css";

function Ulasan() {
  const [ulasan, setUlasan] = useState([""]);
  const [inputUlasan, setInputUlasan] = useState("");

  const handleChange = (event) => {
    setInputUlasan(event.target.value);
  };

  const addUlasan = (e) => {
    e.preventDefault()
    
    let newUlasan = [...ulasan];
    newUlasan.push(inputUlasan);
    setUlasan(newUlasan);

    setInputUlasan("")
  };


  useEffect(() => {
    console.log("tess");

    return () => {
      console.log("clean up");
    }
  },[ulasan]);

  return (
    <div>
      <Container className="my-4">
        <Form onSubmit={Ulasan}>
          <Form.Group
            className="d-flex mb-3 w-100"
            controlId="exampleForm.ControlInput1"
          >
            <Form.Control
              className="me-3"
              type="text"
              placeholder="new Ulasan"
              value={inputUlasan}
              onChange={handleChange}
              style={{width: '22rem',
                height: '6rem'}}
            />

          
          </Form.Group>
          <Button
              className="flex-shrink-1"
              variant="primary"
              onClick={addUlasan}
              style={{width: '22rem'}}
            >
              Send
            </Button>
            <br/>
        </Form>

        <ListGroup>
          {ulasan.map((ulasan, index) => (
            <ListGroup.Item className="d-flex justify-content-between"  style={{width: '22rem',
            height: '6rem', marginTop:'3px'}} key={index}>
              <h2>{ulasan}</h2>
             
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Container>
    </div>
  );
}

export default Ulasan;