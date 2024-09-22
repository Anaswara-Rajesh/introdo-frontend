import React, { useState, useEffect, useRef } from "react";
import CommonBtn from "./CommonBtn";
import { Container } from "react-bootstrap";
import TabComponent from "./TabComponent";
import ButtonComponent from "./ButtonComponent";

function LandingSection() {
  const [activeBtn, setActiveBtn] = useState("Line Managers");
  const roles = ["HR Managers", "Line Managers", "Employees"];
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const handleBtnClick = (role: string) => {
    setActiveBtn(role);
    resetAutoSwitch(); 
  };

  const autoSwitchTabs = () => {
    setActiveBtn((prevRole) => {
      const currentIndex = roles.indexOf(prevRole);
      const nextIndex = (currentIndex + 1) % roles.length;
      return roles[nextIndex];
    });
  };

  const startAutoSwitch = () => {
    intervalRef.current = setInterval(autoSwitchTabs, 5000);
  };

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

  const getUnderlinePosition = () => {
    switch (activeBtn) {
      case "HR Managers":
        return "0%"; 
      case "Line Managers":
        return "33.33%"; 
      case "Employees":
        return "66.66%";
      default:
        return "0%";
    }
  };

  const getUnderlineColor = () => {
    switch (activeBtn) {
      case "HR Managers":
        return "#3A86FF"; 
      case "Line Managers":
        return "#241042"; 
      case "Employees":
        return "#FF8100"; 
      default:
        return "#3A86FF";
    }
  };

  return (
    <div className="position-relative pb-5 landing-container">
      {activeBtn === "HR Managers" && (
        <div className="position-absolute top-0 end-0 mt-5 pt-3 social-icons-div">
          <CommonBtn btnName={"Schedule Demo"} customStyle={"rotate-btn"} />
        </div>
      )}

      <Container className="d-flex flex-column justify-content-center align-items-center pt-5">
        <ButtonComponent
          btnName={"EMPOWER EVERY ROLE"}
          customStyle={"empower-btn mt-5"}
        />
        <h1 className="pt-4 pb-5 text-center landing-heading">
          Triple The Benefits!
        </h1>


        <div className="d-flex justify-content-center align-items-center gap-sm-4 gap-0 w-100 position-relative">
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

          <div
            className="underline-container position-absolute"
            style={{
              bottom: "-10px", 
              left: "0",
              width: "100%",
              height: "4px",
              backgroundColor: "rgb(224 224 224 / 45%)", 
              position: "relative",
            }}
          >

            <div
              className="underline-active"
              style={{
                position: "absolute",
                left: getUnderlinePosition(),
                width: "33.33%",
                height: "100%",
                backgroundColor: getUnderlineColor(), 
                transition: "left 0.3s ease, background-color 0.3s ease",
              }}
            />
          </div>
        </div>
        <TabComponent activeRole={activeBtn} />
      </Container>
    </div>
  );
}

export default LandingSection;
