import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/homemainpng.png";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";
import Nav from "react-bootstrap/Nav";
import Apply from "./Apply";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <div style={{ padding: 25, textAlign: "left" }}>
                <Type />
              </div>
              <div>
                <Apply />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "500px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Skills />
      <Projects />
      <Home2 />
      <Contact />
    </section>
  );
}

export default Home;
