import React, { useEffect, useState } from "react";
import { IoPersonCircleOutline } from "react-icons/io5";
import DynamicIcon from "./DymanicIcon";
import useIsMobile from "../hooks/useIsMobile";

function CommonBtn({
  btnName,
  customStyle,
  icon,
  onClick,
  reactIcon,
  isActive,
}: any) {
  const isMobile = useIsMobile();

  return (
    <button
      type="button"
      className={`btn ${customStyle} d-flex align-items-center justify-content-center position-relative`}
      onClick={onClick}
    >
      {icon && (
        <div className="icon-border position-absolute ms-1 start-0 d-flex justify-content-center align-items-center">
          <img
            src={isMobile ? "./line_manger.svg" : icon}
            alt="icon"
            className="icon-img"
          />
        </div>
      )}

      {reactIcon === "hr" && (
        <div className="icon-border position-absolute ms-1 start-0 d-flex justify-content-center align-items-center">
          {isMobile ? (
            <img
              src={isActive ? "./hr.svg" : "./non_act_hr.svg"}
              alt="icon"
              className="icon-img"
            />
          ) : (
            <DynamicIcon stroke={isActive ? "#3A86FF" : "#241042"} />
          )}
        </div>
      )}

      {reactIcon === "employee" && (
        <div className="icon-border position-absolute ms-1 start-0 d-flex justify-content-center align-items-center">
          {isMobile ? (
            <img
              src={isActive ? "./employees.svg" : "./employee.svg"}
              alt="icon"
              className="icon-img"
            />
          ) : (
            <IoPersonCircleOutline
              color={isActive ? "#FF8100" : "#241042"}
              size={25}
            />
          )}
        </div>
      )}
      <span
        className="btn-text text-start text-sm-center extra-padding"
        style={{ paddingLeft: icon || reactIcon ? "1rem" : undefined }}
      >
        {btnName}
      </span>
    </button>
  );
}

export default CommonBtn;
