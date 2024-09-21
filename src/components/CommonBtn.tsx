import React from "react";
import { IoPersonCircleOutline } from "react-icons/io5";
import DynamicIcon from "./DymanicIcon";

function CommonBtn({
  btnName,
  customStyle,
  icon,
  onClick,
  reactIcon,
  isActive,
}: any) {
  return (
    <button
      type="button"
      className={`btn ${customStyle} d-flex align-items-center justify-content-center position-relative`}
      onClick={onClick}
    >
      {icon && (
        <div className="icon-border position-absolute ms-1 start-0 d-flex justify-content-center align-items-center">
          <img src={icon} alt="icon" className="icon-img" />
        </div>
      )}

      {reactIcon === "hr" && (
        <div className="icon-border position-absolute ms-1 start-0 d-flex justify-content-center align-items-center">
          <DynamicIcon stroke={isActive ? "#3A86FF" : "#241042"} />
        </div>
      )}

      {reactIcon === "employee" && (
        <div className="icon-border position-absolute ms-1 start-0 d-flex justify-content-center align-items-center">
          <IoPersonCircleOutline
            color={isActive ? "#FF8100" : "#241042"}
            size={25}
          />
        </div>
      )}
      <span
        className="btn-text"
        style={{ paddingLeft: icon || reactIcon ? "1rem" : "" }}
      >
        {btnName}
      </span>
    </button>
  );
}

export default CommonBtn;
