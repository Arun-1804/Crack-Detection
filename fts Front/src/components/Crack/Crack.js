import {React, useState} from "react";
import { Container, Row, Col } from "react-bootstrap";
import crack from "../../assests/crack.jpg";
import Tilt from "react-parallax-tilt";
import Button from "react-bootstrap/Button";
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import preLoader from "../../components/Pre"


function Crack() {
  const [show, setShow] = useState(false);
  const [ip,setIp]=useState("");  
  async function postfunc() {
    <preLoader />
    let ipAddress = ip + "/video"
    // fetch(`http://127.0.0.1:5000/sendIp`, {
    var response = await fetch(`http://127.0.0.1:5000/sendIp?ip=${ipAddress}`, {
      method: "GET",
      mode: "no-cors",
      cache: "no-cache",
      credentials: "include",
      headers: {
        'Content-Type': 'application/json'
      },
      // body:JSON.stringify(json)
    })
    .then(response => response.json())
    .then(data => {
      console.log(data); // Ensure data is valid
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
        console.log(response);
        
  }
  const handleClose = () => {
    setIp("")
    setShow(false); 
  }
  const handleShow = () => {
    setShow(true);
  }
  return (
    <>
    <Container fluid className="about-section">
      <Container>
        
        <Row>
          <Col md={8} className="home-about-description text-start">
            <h1 style={{ fontSize: "2.6em" }}>
              <span className="purple"> CRACK </span> DETECTING
            </h1>
            <p className="home-about-body">
            Cracks in concrete structures are a common phenomenon associated with corrosion, chemical deterioration, and the application of adverse loading. 
              <br />
              <br />Visual inspection is the prevalent form of crack detection, which is a slow, labour-intensive task. The results of these inspections rely on the skill, experience, and subjectivity of the inspector [3,4]. Further, such methods are time-consuming and often result in late assessments of cracks near the unrepairable zone. To address this, modern methods aim to speed up the process by replacing manual processes with more sophisticated, automated crack detection
      
              <br />
              <br />
              <br />
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={crack} className="img-fluid crackDamp" alt="crack" />
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
        <Form.Control id="basic-url" value={ip} onChange={(e)=> {setIp(e.target.value)}} aria-describedby="basic-addon3" />
      </InputGroup>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" className="py-1" onClick={handleClose}>
            Close
          </Button>
          <Button variant="success" className="py-1" onClick={postfunc}>Start</Button>
        </Modal.Footer>
        </div>
      </Modal> 
      </>
  );
}

export default Crack;
