import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import CloseButton from "react-bootstrap/CloseButton";

function TopNavbar() {
  const [visible, setVisible] = useState(true);

  return visible ? (
    <Navbar className="d-flex justify-content-center align-items-center top-nav-container">
      <span className="nav-text">
        Happy Employees, Effortless HR: Experience the introdo Advantage.
        <span className="ps-2 bold-nav-text">Try it for Free!</span>
      </span>
      <CloseButton
        className="d-md-none me-2 close-btn-style"
        onClick={() => setVisible(false)}
        aria-label="Close"
      />
    </Navbar>
  ) : null;
}

export default TopNavbar;
