import { Col, Container, Row } from "react-bootstrap";
import CommonBtn from "./CommonBtn";
import SmallCard from "./SmallCard";
import CardComponent from "./CardComponent";
import EmployeeCard from "./EmployeeCard";
import { useEffect, useState } from "react";
import ButtonComponent from "./ButtonComponent";
import useIsMobile from "../hooks/useIsMobile";

const UnlockContainer = () => {
  const isMobile = useIsMobile();


  return (
    <Container className="d-flex flex-column justify-content-center align-items-center unlock-container pb-sm-4 pb-3 mb-5">
      <ButtonComponent
        btnName={"WHY INTRODO?"}
        customStyle={"empower-btn mt-sm-5 mt-2"}
      />
      <h1 className="pt-4 pb-5 text-center landing-heading">
        Unlock The Perks!
      </h1>
      <div className="row gap-sm-0 gap-3">
        <div className="col-sm d-flex justify-content-center align-items-center">
          <CardComponent
            className={`initial-card-style`}
            title="Global Payroll Simplicity"
            paddingTitle="pt-3"
            description="Manage multi-currency payroll across the GCC and beyond, in English & Arabic. Seamless onboarding included!"
          >
            <img className="pt-5 pb-5" src="./global.svg" alt="global" width={isMobile? "100%":""} />
          </CardComponent>
        </div>

        <div className=" col-sm d-flex justify-content-center align-items-center flex-column gap-4 pt-sm-0 pt-4">
          <EmployeeCard />
          <CardComponent
            className="small-card-two-style pt-sm-0 pt-4"
            title="Smart Insights"
            description="Craft customized reports and dashboards to steer data-driven decisions. All your historic employee data within one end-to-end solution."
          />
        </div>

        <div className=" col-sm pt-sm-0 pt-4 d-flex justify-content-center align-items-center">
          <CardComponent className="fourth-card-style ">
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
        </div>
      </div>

      <div className="row pt-sm-2 pt-5 gap-sm-0 gap-3">
        <div className="col-sm d-flex justify-content-center align-items-center">
          <div className="card fifth-card-style" style={{ width: isMobile ? "90%" : "" }}>
            <div className="card-body row">
              <div className=" col-sm-6 col-12 d-flex flex-column justify-content-center align-items-center">
                <h2 className="card-title">Rock-Solid Compliance</h2>
                <p className="card-description pt-1">
                  Stay GCC law-aligned amidst changing regulations. Worry-free
                  compliance across locations, preventing penalties and legal
                  hassles.
                </p>
              </div>
              <div className="col-sm-6 col-12 cards-div">
                <div className="d-flex justify-content-sm-end justify-content-start">
                  <SmallCard color={"#F3F3F5"} icon="./logo1.svg" width="45%" />
                </div>

                <div className="d-flex justify-content-sm-end justify-content-start gap-2 pt-2">
                  <SmallCard color={"#F3F3F5"} icon="./logo2.svg" width="50%" />
                  <SmallCard
                    color={
                      !isMobile
                        ? "#CB349A"
                        : "linear-gradient(105.4deg, rgb(253, 107, 168) 2.24%, rgb(160 68 162 / 29%) 96.35%)"
                    }
                    width={!isMobile ? "30%" : "50%"}
                  />
                </div>

                <div className="d-flex justify-content-sm-end justify-content-start pt-2 gap-2">
                  <SmallCard
                    color={"#F3F3F5"}
                    icon="./logo3.jpg"
                    width={isMobile ? "40%" : "50%"}
                  />
                  {isMobile && (
                    <>
                      <SmallCard color={"#F3F3F5"} icon="./logo3.jpg" />
                      <SmallCard
                        color={"var(--Primary-Pink---300, #FD6BA8)"}
                        width="20%"
                      />
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-sm d-flex justify-content-center align-items-center">
          <div className="card sixth-card-style" style={{ width: isMobile ? "90%" : "" }}>
            <div className="card-body row">
              {isMobile ? (
                <img
                  src="./lady.svg"
                  className="card-image order-2 order-sm-1"
                  alt="lady"
                />
              ) : (
                <div className="img-container col-sm-6 col-12 d-flex justify-content-end align-item-sm-end align-items-start order-2 order-sm-1">
                  <img src="./lady.svg" className="card-image" alt="lady" />
                </div>
              )}

              <div className="col-sm-6 col-12 d-flex flex-column justify-content-center align-items-center text-container order-1 order-sm-2">
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
