import { Col, Container, Row } from "react-bootstrap";
import CommonBtn from "./CommonBtn";
import SmallCard from "./SmallCard";
import CardComponent from "./CardComponent";
import EmployeeCard from "./EmployeeCard";

const UnlockContainer = () => {
  return (
    <Container className="d-flex flex-column justify-content-center align-items-center unlock-container pb-4">
      <CommonBtn btnName={"WHY INTRODO?"} customStyle={"empower-btn mt-5"} />
      <h1 className="pt-4 pb-5 text-center landing-heading">
        Unlock The Perks!
      </h1>

      <Row>
        <Col sm>
          <CardComponent
            className="initial-card-style"
            title="Global Payroll Simplicity"
            paddingTitle="pt-3"
            description="Manage multi-currency payroll across the GCC and beyond, in English & Arabic. Seamless onboarding included!"
          >
            <img className="pt-5 pb-5" src="./global.svg" alt="global" />
          </CardComponent>
        </Col>

        <Col sm className="d-flex flex-column gap-4">
          <EmployeeCard />
          <CardComponent
            className="small-card-two-style"
            title="Smart Insights"
            description="Craft customized reports and dashboards to steer data-driven decisions. All your historic employee data within one end-to-end solution."
          />
        </Col>

        <Col sm>
          <CardComponent className="fourth-card-style">
            <div className="p-5">
              <h2 className="card-title">Legacy Harmony</h2>
              <p className="card-description pt-4">
                Maximize operational efficiency with zero data loss. Sync all
                your business tools with an open API for seamless data
                integration.
              </p>
            </div>
            <div className="d-flex justify-content-end gap-2">
              <SmallCard color="#3375DF" />
              <SmallCard color="#F3F3F5" icon="./microsoft.svg" />
            </div>
            <div className="d-flex justify-content-end gap-2 pt-2">
              <SmallCard color="#F3F3F5" icon="./google.svg" />
              <SmallCard color="#F3F3F5" icon="./asure.svg" />
              <SmallCard color="#FC1777" width="25%" />
            </div>
            <Row className="pt-2">
              <Col xs={6}>
                <div className="d-flex gap-2">
                  <SmallCard color="#FF8100" width="35%" />
                  <SmallCard color="#F3F3F5" icon="./oracle.svg" width="70%" />
                </div>
                <div className="d-flex gap-2 pt-2">
                  <SmallCard
                    color="#401D77"
                    icon="./oracle_logo.svg"
                    width="75%"
                  />
                  <SmallCard color="#4442AD" width="100%" />
                </div>
              </Col>
              <Col xs={6}>
                <SmallCard color="#F3F3F5" icon="./introdo.svg" height="100%" />
              </Col>
            </Row>
          </CardComponent>
        </Col>
      </Row>

      <div className="row pt-2">
        <div className="col-sm">
          <div className="card fifth-card-style">
            <div className="card-body row">
              <div className=" col-6 d-flex flex-column justify-content-center align-items-center">
                <h2 className="card-title">Rock-Solid Compliance</h2>
                <p className="card-description pt-1">
                  Stay GCC law-aligned amidst changing regulations. Worry-free
                  compliance across locations, preventing penalties and legal
                  hassles.
                </p>
              </div>
              <div className="col-6 cards-div">
                <div className="d-flex justify-content-end">
                  <SmallCard color={"#F3F3F5"} icon="./logo1.svg" width="45%" />
                </div>

                <div className="d-flex justify-content-end gap-2 pt-2">
                  <SmallCard color={"#F3F3F5"} icon="./logo2.svg" width="50%" />
                  <SmallCard color={"#CB349A"} width="30%" />
                </div>

                <div className="d-flex justify-content-end pt-2">
                  <SmallCard color={"#F3F3F5"} icon="./logo3.jpg" width="50%" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-sm">
          <div className="card sixth-card-style">
            <div className="card-body row">
              <div className="img-container col-6 d-flex justify-content-end align-items-end">
                <img src="./lady.svg" className="card-image" alt="lady" />
              </div>

              <div className="col-6 d-flex flex-column justify-content-center align-items-center text-container">
                <h2 className="card-title">Cloud-Powered Savings</h2>
                <p className="card-description pt-2">
                  Centralize people management with one HR software. Save time
                  and cut costs by leveraging cloud technology.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default UnlockContainer;
