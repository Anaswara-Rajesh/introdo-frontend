import React from "react";
import { Container } from "react-bootstrap";
import TabItem from "./TabItem";
import { IconOne, IconTwo, MessageIcon } from "./SvgIcons";
import useIsMobile from "../hooks/useIsMobile";

function TabComponent({ activeRole }: { activeRole: string }) {
  const isMobile = useIsMobile();

  console.log(activeRole, "activeRole");
  let color = "";
  if (activeRole === "HR Managers") {
    color = "#3A86FF";
  } else if (activeRole === "Line Managers") {
    color = "#482084";
  } else {
    color = "#FF8100";
  }

  const items: any = {
    "HR Managers": [
      {
        icon: <MessageIcon stroke={color} />,
        text: "Streamline Workforce Management",
        description:
          "Handle employee information digitally on our user-friendly platform. With automation, accuracy is guaranteed for reliable record-keeping.",
      },
      {
        icon: <IconTwo stroke={color} />,
        text: "Smooth Employee Onboarding",
        description:
          "Simplify onboarding, capture essential employee data and automate payroll for seamless employee experiences. ",
      },
      {
        icon: <IconOne stroke={color} />,
        text: "Enhance Internal Communication",
        description:
          "Facilitate company-wide communication, keeping everyone in the loop with important announcements, subsidiary changes and HR policy updates.",
      },
    ],
    "Line Managers": [
      {
        icon: <MessageIcon stroke={color} />,
        text: "Streamline Workforce Management",
        description:
          "Simplify task management for a boost in team productivity. Clear assignments, monitored deadlines and smoother workflows await! ",
      },
      {
        icon: <IconTwo stroke={color} />,
        text: "Smooth Employee Onboarding",
        description:
          "Welcome new team members with ease – our automated workflows minimize admin hassle for quick integration into team dynamics.",
      },
      {
        icon: <IconOne stroke={color} />,
        text: "Enhance Internal Communication",
        description:
          "Keep the team engaged and informed on project milestones, fostering a positive, motivated environment for collaborative success. ",
      },
    ],
    Employees: [
      {
        icon: <MessageIcon stroke={color} />,
        text: "Streamline Workforce Management",
        description:
          "Get clarity on tasks, access key information and perform tasks independently, fostering a culture of trust and ownership.",
      },
      {
        icon: <IconTwo stroke={color} />,
        text: "Smooth Employee Onboarding",
        description:
          "Experience a pain-free onboarding experience with timely and accurate payroll processes – a positive start to your new role! ",
      },
      {
        icon: <IconOne stroke={color} />,
        text: "Enhance Internal Communication",
        description:
          "Stay connected with real-time updates, polls, and surveys through our HRMS for an engaging and informed experience. ",
      },
    ],
  };

  return (
    <Container className="d-flex justify-content-center align-items-center pt-5 tab-view-container">
      <div className="mt-3 d-flex flex-column vertical-container">
        {items[activeRole].map((item: any, index: any) => (
          <React.Fragment key={index}>
            <TabItem icon={item.icon} text={item.text} />
            {index < items[activeRole].length - 1 && (
              <hr
                className="hide-hr"
                style={{
                  width: "90%",
                  color:
                    activeRole === "HR Managers"
                      ? "#A4C7FF"
                      : activeRole === "Line Managers"
                      ? "#AB98C6"
                      : "#FFC58A",
                  border: "1px solid",
                }}
              />
            )}
          </React.Fragment>
        ))}
      </div>

      <div
        className={`tab-description-wrapper 
    ${isMobile && activeRole === "Line Managers" ? "move-left" : ""} 
    ${isMobile && activeRole === "Employees" ? "move-right" : ""} 
    position-relative`}
      >
        <div
          className="tab-description p-sm-5 p-5 position-relative"
          style={{
            border:
              activeRole === "HR Managers"
                ? "1px solid var(--Secondary-Blue---200, #a4c7ff)"
                : activeRole === "Line Managers"
                ? "1px solid var(--Secondary-Violet---200, #AB98C6)"
                : "1px solid var(--Primary-Orange---200, #FFC58A)",
          }}
        >
          {items[activeRole].map((item: any, index: any) => (
            <React.Fragment key={index}>
              <span className="description-text">{item.description}</span>
              {index < items[activeRole].length - 1 && (
                <hr
                  style={{
                    color:
                      activeRole === "HR Managers"
                        ? "#A4C7FF"
                        : activeRole === "Line Managers"
                        ? "#AB98C6"
                        : "#FFC58A",
                    border: "1px solid",
                  }}
                />
              )}
            </React.Fragment>
          ))}
        </div>
        <div
          className={`background-layer ${
            activeRole === "HR Managers"
              ? "bg-layer-1"
              : activeRole === "Line Managers"
              ? "bg-line-manager-layer-1"
              : "bg-employee-layer-1"
          }`}
          style={{
            background:
              activeRole === "HR Managers"
                ? "var(--Secondary-Blue---200, #a4c7ff)"
                : activeRole === "Line Managers"
                ? "var(--Secondary-Violet---300, #8A70B0)"
                : "var(--Primary-Orange---200, #FFC58A)",
          }}
        ></div>
        <div
          className={`background-layer ${
            activeRole === "HR Managers"
              ? "bg-layer-2"
              : activeRole === "Line Managers"
              ? "bg-line-manager-layer-2"
              : "bg-employee-layer-2"
          } `}
          style={{
            background:
              activeRole === "HR Managers"
                ? "var(--Secondary-Blue---300, #81b2ff)"
                : activeRole === "Line Managers"
                ? "var(--Secondary-Violet---400, #69489A)"
                : "var(--Primary-Orange---300, #FFAE5C",
          }}
        ></div>
      </div>
    </Container>
  );
}

export default TabComponent;
