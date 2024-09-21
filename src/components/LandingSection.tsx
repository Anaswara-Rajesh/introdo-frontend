import React, { useState, useEffect, useRef } from "react";
import CommonBtn from "./CommonBtn";
import { Container } from "react-bootstrap";
import TabComponent from "./TabComponent";

function LandingSection() {
  const [activeBtn, setActiveBtn] = useState("HR Managers");
  const roles = ["HR Managers", "Line Managers", "Employees"];
  const intervalRef = useRef<NodeJS.Timeout | null>(null); 

  const handleBtnClick = (role: string) => {
    setActiveBtn(role);
    resetAutoSwitch(); // Reset auto-switch timer after manual click
  };

  const autoSwitchTabs = () => {
    setActiveBtn((prevRole) => {
      const currentIndex = roles.indexOf(prevRole);
      const nextIndex = (currentIndex + 1) % roles.length; 
      return roles[nextIndex];
    });
  };

  // Start auto-switching every 5 seconds
  const startAutoSwitch = () => {
    intervalRef.current = setInterval(autoSwitchTabs, 5000);
  };

  // Reset auto-switch timer after manual interaction
  const resetAutoSwitch = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    startAutoSwitch();
  };

  useEffect(() => {
    startAutoSwitch();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <div className="position-relative pb-5">
      <div className="position-absolute top-0 end-0 mt-5 pt-3">
        <CommonBtn btnName={"Schedule Demo"} customStyle={"rotate-btn"} />
      </div>

      <Container className="d-flex flex-column justify-content-center align-items-center pt-5">
        <CommonBtn
          btnName={"EMPOWER EVERY ROLE"}
          customStyle={"empower-btn mt-5"}
        />
        <h1 className="pt-4 pb-5 text-center landing-heading">
          Triple The Benefits!
        </h1>
        <div className="d-flex justify-content-center align-items-center gap-4">
          <CommonBtn
            btnName={"For HR Managers"}
            reactIcon="hr"
            customStyle={
              activeBtn === "HR Managers"
                ? "btn-primary active-btn"
                : "non-active-btn"
            }
            onClick={() => handleBtnClick("HR Managers")}
            isActive={activeBtn === "HR Managers"}
          />
          <CommonBtn
            btnName={"For Line Managers"}
            icon="./user-octagon.svg"
            customStyle={
              activeBtn === "Line Managers"
                ? "line-manager-btn active-btn"
                : "non-active-btn"
            }
            onClick={() => handleBtnClick("Line Managers")}
            isActive={activeBtn === "Line Managers"}
          />
          <CommonBtn
            btnName={"For Employees"}
            reactIcon="employee"
            customStyle={
              activeBtn === "Employees"
                ? "employer-btn active-btn"
                : "non-active-btn"
            }
            onClick={() => handleBtnClick("Employees")}
            isActive={activeBtn === "Employees"}
          />
        </div>

        <TabComponent activeRole={activeBtn} />
      </Container>
    </div>
  );
}

export default LandingSection;
