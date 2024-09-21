import { Container } from "react-bootstrap";
import { FaArrowRight } from "react-icons/fa6";
import DropdoownBtn from "./DropdoownBtn";

function FooterComponent() {
  const products = [
    "Core HR",
    "Employee Management",
    "Leave Management",
    "Time & Attendance ",
    "Payroll Management",
    "People Analytics",
    "Recruitment",
    "Performance Management",
  ];
  const resources = [
    "All Resources",
    "Blogs",
    "Case Studies",
    "Product Videos",
    "HR Glossary",
  ];

  const platforms = [
    "Log In",
    "Schedule a Demo",
    "Use Cases",
    "Integrations",
    "Pricing",
  ];

  const images = [
    "./footer_logo1.svg",
    "./footer_logo1.svg",
    "./footer_logo2.svg",
    "./footer_logo3.svg",
    "./footer_logo4.svg",
  ];

  return (
    <div className="footer-container pt-5 pb-5">
      <Container className="container pt-5">
        <div className="row">
          <div className="col">
            <img src="./introdo-logo.svg" alt="introdo logo" />
          </div>
          <div className="col-5">
            <h5 className="footer-text-head">
              HR Updates, straight to your Inbox - Subscribe Today{" "}
            </h5>

            <div className="position-relative pt-2">
              <input
                className="form-control d-flex justify-content-center align-items-center border rounded-pill"
                type="text"
                placeholder="Enter Work Emails"
                id="example-search-input"
                style={{
                  paddingLeft: "1rem",
                  padding: "0.6rem",
                  color: "var(--Tertiary-AshViolet---200, #9B97A8)",
                }}
              />
              <button
                className="btn outline-btn btn-outline-secondary border-start-0 border rounded-pill position-absolute"
                type="button"
                style={{
                  right: "5px",
                  top: "57%",
                  transform: "translateY(-50%)",
                  backgroundColor: "#482084",
                }}
              >
                <FaArrowRight color="white" />
              </button>
            </div>
          </div>
          <div className="col d-flex flex-column align-items-center justify-content-center gap-3">
            <div
              className="d-flex justify-content-end align-items-end"
              style={{ paddingLeft: "15rem" }}
            >
              <DropdoownBtn customStyle="lang-dropdown-btn" />
            </div>
            <div className="d-flex gap-3">
              <img src="./facebook.svg" />
              <img src="./instagram.svg" />
              <img src="./linkdedin.svg" />
            </div>
          </div>
        </div>

        <Container className="row pt-5 mt-5" style={{ color: "white" }}>
          <div className="col">
            <h3 className="footer-ul-head pb-3">Products</h3>
            <ul className="no-bullets">
              {products.map((product, index) => (
                <li key={index} className="pb-2">
                  {product}
                </li>
              ))}
            </ul>
          </div>
          <div className="col">
            <h3 className="footer-ul-head pb-3">Products</h3>
            <ul className="no-bullets">
              {resources.map((product, index) => (
                <li key={index} className="pb-2">
                  {product}
                </li>
              ))}
            </ul>
          </div>

          <div className="col">
            <h3 className="footer-ul-head pb-3">Platform</h3>
            <ul className="no-bullets">
              {platforms.map((product, index) => (
                <li key={index} className="pb-2">
                  {product}
                </li>
              ))}
            </ul>
          </div>
          <div className="col">
            <h3 className="footer-ul-head pb-3">Mobile App</h3>
            <ul className="no-bullets">
              <li className="pb-2">
                <img src="./play.svg" />
              </li>
              <li className="pb-2">
                <img src="./apple.png" />
              </li>
            </ul>
          </div>
        </Container>

        <div className="d-flex justify-content-center align-items-center gap-5 icons-div-container pt-5 pb-5 mt-5">
          {images.map((img, index) => (
            <img className="pt-2 pb-2" key={index} src={img}></img>
          ))}
        </div>

        <div className="d-flex justify-content-center align-items-center gap-5 pt-3 pb-2 privacy-policy-text">
          <span className="policy-item">Privacy Policy</span>
          <span className="policy-item">Terms of Use</span>
          <span>Cookie Policy</span>
        </div>

        <h5 className="d-flex justify-content-center align-items-center pt-3 copy-right-text">
          Copyright © 2024 KPI Group. All Rights Reserved.
        </h5>

        <div className="d-flex justify-content-end message-icon">
          <img src='./message.png'/>
        </div>
      </Container>
    </div>
  );
}

export default FooterComponent;
