import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import damp from "../../assests/damp.jpg";
import Tilt from "react-parallax-tilt";
import Button from "react-bootstrap/Button";
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';


function Damp() {
  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false); 
  }
  const handleShow = () => {
    setShow(true);
  }
  return (
    <>
    <Container fluid className="home-section about-section">
      <Container>
        <Row>
          <Col md={8} className="home-about-description text-start">
            <h1 style={{ fontSize: "2.6em" }}>
              <span className="purple"> DAMP </span> DETECTING
            </h1>
            <p className="home-about-body">
              I fell in love with programming and I have at least learnt
              something, I think… 🤷‍♂️
              <br />
              <br />I am fluent in classics like
              <i>
                <b className="purple"> Java, Javascript and Python. </b>
              </i>
              <br />
              <br />
              My field of Interest's are building new &nbsp;
              <i>
                <b className="purple">Web Technologies and Products </b> and
                also in areas related to{" "}
                <b className="purple">
                  Blockchain.
                </b>
              </i>
              <br />
              <br />
              Whenever possible, I also apply my passion for developing products
              with <b className="purple">Node.js</b> and
              <i>
                <b className="purple">
                  {" "}
                  Modern Javascript Library and Frameworks
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="purple"> React.js and Next.js</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={damp} className="img-fluid crackDamp" alt="damp" />
            </Tilt>
          </Col>
        </Row>

    <Button variant="primary" onClick={handleShow}>
     Click Here...
        </Button>

      </Container>
    </Container>
      
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered
     
      >
        <div    className="modalColor">
        <Modal.Header closeButton>
          <Modal.Title>Enter IP and get started</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form.Label htmlFor="basic-url">Your valid IP</Form.Label>
      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon3">
        http://145.876.21.78:5080
        </InputGroup.Text>
        <Form.Control id="basic-url" aria-describedby="basic-addon3" />
      </InputGroup>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" className="py-1" onClick={handleClose}>
            Close
          </Button>
          <Button variant="success" className="py-1">Start</Button>
        </Modal.Footer>
        </div>
      </Modal> 
      </>
  );
}

export default Damp;
