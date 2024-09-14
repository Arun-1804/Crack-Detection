import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import forCrack from "../../assests/crack.jpg";
import forDamp from "../../assests/damp.jpg";
import forThermal from "../../assests/Thermal-Building.jpg";
// import { FcLock } from "react-icons/fc";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Our <strong className="purple">Services </strong>
        </h1>
        <p style={{ color: "white" }}>
        Here are the services we provide and upcoming features.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={forCrack}
              isBlog={false}
              title="Crack Detecting"
              description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
              // ghLink="https://github.com/s-satyajit/todo-list-app-js"
              // demoLink="todo-list-app-js-five.vercel.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={forDamp}
              isBlog={false}
              title="Damp"
              description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
              // ghLink="https://github.com/s-satyajit/geo-locator-app-js"
              // demoLink="geo-locator-app-js.vercel.app"
            />
          </Col>

          <Col md={4} className="project-card">
          <div style={{height:"100%"}}>
                        <ProjectCard
              imgPath={forThermal}
              isBlog={false}
              title="Thermal Imaging"
              description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
              // ghLink="https://github.com/soumyajit4419/Editor.io"
              // demoLink="currency-converter-reactjs-silk.vercel.app"              
            />

          </div>
            {/* <ProjectCard
              imgPath={forThermal}
              isBlog={false}
              title="Thermal Imaging"
              description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
              // ghLink="https://github.com/soumyajit4419/Editor.io"
              // demoLink="currency-converter-reactjs-silk.vercel.app"              
            /> */}
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
