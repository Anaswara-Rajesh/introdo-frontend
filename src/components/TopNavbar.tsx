import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import CloseButton from "react-bootstrap/CloseButton";

function TopNavbar() {
  const [isHidden, setIsHidden] = useState(false);

  const handleClose = () => {
    setIsHidden(true);
  };

  return (
    <Navbar
      className={`d-flex justify-content-center align-items-center top-nav-container ${
        isHidden ? "hide-navbar" : ""
      }`}
    >
      <span className="nav-text">
        Happy Employees, Effortless HR: Experience the introdo Advantage.
        <span className="ps-2 bold-nav-text">Try it for Free!</span>
      </span>
      <CloseButton
        className="d-md-none me-2 close-btn-style"
        onClick={handleClose}
        aria-label="Close"
      />
    </Navbar>
  );
}

export default TopNavbar;
