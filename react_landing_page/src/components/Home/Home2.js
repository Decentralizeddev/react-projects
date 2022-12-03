import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avat.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineYoutube,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              <span className="purple">Blockchain & AI</span> {"\n"}
              Development
            </h1>
            <p className="home-about-body">
              Skills Codified
              <br />
              <br />
              We provided the blockchain core and infrastructure while
              developing the products. In addition to providing open source to
              the Web3 ecosystem Contribution to the blockchain space And We
              build utilitarian products and provide blockchain solutions &
              consultation contributing to the cause of web3. We Have team of
              blockchain experts who understand your project needs and interpret
              your vision aligned with your idealizations. We strive to assist
              you throughout your product development cycle to attain its
              maximum potential. You will get to understand everything about
              Blockchain and related technologies such as Smart Contract,
              Ethereum as well as Blockchain applications in real world &nbsp;
              <i>
                <br></br>
                <br></br>
                <br></br>
                <b className="purple">
                  Decentralizeddev (decentralization Product development) is
                  Comming Soon
                </b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FOLLOW FOR MORE UPDATES</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/chzhob"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.youtube.com/@skillscodified"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour "
                >
                  <AiOutlineYoutube />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/company/skillscodified/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour   "
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/skillscodified"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  "
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
