import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { FcLock } from "react-icons/fc";


function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <div  className="container">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" className={`${props.title === "Thermal Imaging" ? "forBlur" : ""} "bg-Img"`} />
      {props.title === "Thermal Imaging" ?       <div className="icon-cont">
      <FcLock className="over-Img" height="60px" />
      </div> : ""}

      </div>
      <Card.Body className={props.title === "Thermal Imaging" ? "forBlur" : ""}>
        <Card.Title className="purple">{props.title}</Card.Title>
        <Card.Text  style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        {/* <Button variant="primary" href={props.ghLink} target="_blank">
          <BsGithub /> &nbsp;
          {props.isBlog ? "Blog" : "GitHub"}
        </Button> */}
        {"\n"}
        {"\n"}

        {/* If the component contains Demo link and if it's not a Blog then, it will render the below component  */}

        {!props.isBlog && props.demoLink && (
          <Button
            variant="primary"
            href={props.demoLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <CgWebsite /> &nbsp;
            {"Demo"}
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
