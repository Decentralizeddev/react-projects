import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Get In Touch For New Courses!",
          "Learn to Earn",
          "Development And Courses",
          "Full Stack Web3 Development ",
          "NFT Designing & Development",
          "Smart Contracts & Minting Websits And Much More..",
          "  Security  ",
          "Smart Contracts Audits",
          "Defi",
          "Protocols",
          "Open Source Contributor",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 200,
      }}
    />
  );
}

export default Type;
