import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import logo from "../../src/assests/garudan_white.png";
import { Link } from "react-router-dom";
import {
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";
import { BiLogOut } from "react-icons/bi";


function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        <Navbar.Brand href="/" className="d-flex">
          <img src={logo} className="img-fluid logo" alt="brand" />
        </Navbar.Brand>
        <Navbar.Toggle
        style={{marginTop:"20px"}}
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto navBarMobile"  defaultActiveKey="#home">
            <Nav.Item>
              <Nav.Link as={Link} to="/home" onClick={() => updateExpanded(false)}>
              <div style={{display:"ruby", alignItems:"center", paddingTop:"25px"}}>

                <AiOutlineHome style={{ marginBottom: "2px" }}  /> <span className="ps-1">Home</span>
              </div>
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/crack"
                onClick={() => updateExpanded(false)}
              >
              <div style={{display:"ruby", alignItems:"center", paddingTop:"25px"}}>

                <AiOutlineUser style={{ marginBottom: "2px" }} /> Crack
              </div>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/damp"
                onClick={() => updateExpanded(false)}
              >
              <div style={{display:"ruby", alignItems:"center", paddingTop:"25px"}}>

                <AiOutlineUser style={{ marginBottom: "2px" }} /> Damp
                </div>
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/project"
                onClick={() => updateExpanded(false)}
              >
              <div style={{display:"ruby", alignItems:"center", paddingTop:"25px"}}>

                <AiOutlineFundProjectionScreen
                  style={{ marginBottom: "2px" }}
                />{" "}
                Services
                </div>
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/"
                onClick={() => updateExpanded(false)}
              >
              <div style={{display:"ruby", alignItems:"center", paddingTop:"25px"}}>
                
                <BiLogOut
                  style={{ marginBottom: "2px" }}
                />{" "}
                LogOut
                </div>
              </Nav.Link>
            </Nav.Item>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
