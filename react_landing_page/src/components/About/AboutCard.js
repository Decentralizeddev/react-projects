import React from "react";
import Card from "react-bootstrap/Card";
import Contact from "../Home/Contact";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Skill Codified was started with the mission to provide “Economic as
            well as Efficient”. We Are strongly believe in the credibility and
            scalability of Digital Transformation. Get prepared to be digitally
            disrupted! Join the club now to learn about how Blockchain & AI are
            used in the industry, such as healthcare, banking or logistics, and
            see how we as the next generation can benefit from these
            technologies. Guest speakers in our first webinar included the
            Director of Futures Abroad, Board Member of Communications, and the
            Software Solutions Director Many more to follow in our upcoming
            webinars so make sure to follow us and stay on track! At its core,
            <br></br>
            <br></br>
            Skills Codified is about developing and marketing development.
            Solutions that are based on blockchain and AI. Help customers Speed
            ​​up your business processes, achieve maximum productivity, and
            reduce risks.
          </p>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">chzhob</footer>
        </blockquote>
      </Card.Body>
      <h1>CONTACT US </h1>
      <Contact />
    </Card>
  );
}

export default AboutCard;
