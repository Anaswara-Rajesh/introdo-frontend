import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { SlArrowUp, SlArrowDown } from "react-icons/sl";

const FooterContent = ({ products, resources, platforms }: any) => {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section: any) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <Container className="pt-5 mt-5" style={{ color: "white" }}>
      <div className="mb-4">
        <div className="d-flex justify-content-between align-items-center">
          <h3 className="footer-ul-head" style={{ cursor: "pointer" }}>
            Products
          </h3>
          <span onClick={() => toggleSection("products")}>
            {openSection === "products" ? <SlArrowUp /> : <SlArrowDown />}
          </span>
        </div>
        {openSection === "products" && (
          <ul className="no-bullets">
            {products.map((product: any, index: any) => (
              <li key={index} className="pb-2">
                {product}
              </li>
            ))}
          </ul>
        )}
        <hr />
      </div>

      <div className="mb-4">
        <div className="d-flex justify-content-between align-items-center">
          <h3 className="footer-ul-head" style={{ cursor: "pointer" }}>
            Resources
          </h3>
          <span onClick={() => toggleSection("resources")}>
            {openSection === "resources" ? <SlArrowUp /> : <SlArrowDown />}
          </span>
        </div>
        {openSection === "resources" && (
          <ul className="no-bullets">
            {resources.map((resource: any, index: any) => (
              <li key={index} className="pb-2">
                {resource}
              </li>
            ))}
          </ul>
        )}
        <hr />
      </div>

      <div className="mb-4">
        <div className="d-flex justify-content-between align-items-center">
          <h3 className="footer-ul-head" style={{ cursor: "pointer" }}>
            Platform
          </h3>
          <span onClick={() => toggleSection("platforms")}>
            {openSection === "platforms" ? <SlArrowUp /> : <SlArrowDown />}
          </span>
        </div>
        {openSection === "platforms" && (
          <ul className="no-bullets">
            {platforms.map((platform: any, index: any) => (
              <li key={index} className="pb-2">
                {platform}
              </li>
            ))}
          </ul>
        )}
        <hr />
      </div>

      <div className="mb-4">
        <h3 className="footer-ul-head pb-3">Mobile App</h3>
        <ul className="no-bullets d-flex gap-1">
          <li className="pb-2">
            <img src="./play.svg" width={"100%"} alt="Play Store" />
          </li>
          <li className="pb-2">
            <img src="./apple.png" width={"100%"} alt="Apple Store" />
          </li>
        </ul>
      </div>
    </Container>
  );
};

export default FooterContent;
