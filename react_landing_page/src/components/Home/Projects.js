import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Recent <strong className="purple"> Videos </strong>
        </h1>
        <p style={{ color: "white" }}>Here are a few Recent youtube Videos .</p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Nft Courses"
              description="his effective video course will help you understand NFTs, and how to Buy, Create and Sell your own NFTs without wasting unnecessary time and money (or rather Ether and cryptocurrency) through trial and error.

You'll learn the key aspects around NFTs, including:

    What are NFTs?

    A brief history of NFTs

    Why you should create NFTs

    NFT blockchain basics

    A six step, easy to follow formula for buying, creating and selling an NFT

    Video  of how to buy, create and sell NFTs

...and much much more!
  "
              ghLink="https://www.youtube.com/@skillscodified"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Smart Contract Development"
              description=" Smart contracts form the basis for all dApps built on the blockchain, and they're typically written in custom languages such as Solidity (for Ethereum) or Cadence (for Flow).
They tend to be much simpler than traditional programs, but the risks are much higher - a single smart contract bug can lead to millions of dollars being drained in minutes!
What skills will you be developing in this course? We'll walk you through the tools you need to code and deploy your first smart contract, including: ."
              ghLink="https://www.youtube.com/@skillscodified"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Dapp Development"
              description="DApps or decentralized applications, are open-source applications that are used to interact with smart contracts (ex. tokens) that run on a peer-to-peer network of servers. These applications can be based on a variety of blockchain platforms such as Ethereum, EOS, Hyperledger, Polkadot, and others. Since dApps don’t rely on central servers, this vastly reduces the risk of failure, making them more reliable than traditional applications. By eliminating the middleman between users and service providers, dApps allow for greater freedom."
              ghLink="https://www.youtube.com/@skillscodified"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Metaverse Masterclass"
              description=" 
Since Facebook rebranded as Meta in late October 2021, you hear about the Metaverse everywhere. However, how many of you actually know what the Metaverse is? Is it just another marketing gimmick for certain big corporations? Or is it going to be the next big thing in human history?
So... What is the Metaverse exactly? What are the technologies behind it? What are the potentials? How could we invest in it?
When we talk about the Metaverse now, it's a bit like discussing what the internet meant in the 1990s. There are so many misunderstandings and misconceptions out there, which you may find yourself really confused about. But, no worries,"
              ghLink="https://www.youtube.com/@skillscodified"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Blockchain Technology"
              description="The Blockchain is an absolutely amazing technology created by Satoshi Nakamoto. It revolutionized the finance industry through the implementation of Bitcoin. But it didnt stop there. Blockchain technology is now evolving into something much greater. It is destined to become the leading platform for digital information and the foundation for a New Internet era.
There is a lot of speculation and misinformation about blockchain technology. While it is a rather technical subject, it can easily be understood if taught by the right way.
This class is aimed at doing exactly that. 
I will take you hand in hand through all the necessary knowledge you need to equip yourself to get a deeper understanding of this technology.
By the end of the class, you'll know everything you need to know about this topic and be ready use that information for future applications and investments. ."
              ghLink="https://www.youtube.com/@skillscodified"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="React.js or Full Web Development"
              description=" ReactJS has emerged as one of the biggest libraries used by developers and businesses in the past few years. Such is its popularity that React web development was the second most-used framework in 2022, with 42.62% of software developers using it as per Statista his course is a complete guide to become an expert front-end web developer. It contains all the tools and technologies that you should be proficient in work as a React Developer.
We will go through the journey of learning HTML5, CSS3, Javascript, ES6, jQuery, and React JS.
Each of these course modules has a project which you can work on.Along with the project problem statement video, you can see the solution video to know what are the best practices and the most optimized way to complete it.
As you keep on creating new projects, start adding them to your GitHub repository so that by the end of the course you will be having a place to showcase all your work.
You will definitely enjoy the journey while completing the course!"
              ghLink="https://www.youtube.com/@skillscodified"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
