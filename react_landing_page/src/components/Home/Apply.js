import React from "react";
import "../../style.css";
import Button from "react-bootstrap/Button";

function Apply() {
  return (
    <div>
      <Button
        className="btp"
        type="button"
        onClick={(e) => {
          e.preventDefault();
          window.location.href = "http://google.com";
        }}
      >
        {" "}
        Apply Soon..
      </Button>
    </div>
  );
}

export default Apply;
