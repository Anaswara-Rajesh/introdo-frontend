import React from "react";

function ButtonComponent({
  btnName,
  customStyle,
  icon,
  onClick,
  reactIcon,
}: any) {
  return (
    <button
      type="button"
      className={`btn ${customStyle} d-flex align-items-center justify-content-center position-relative`}
      onClick={onClick}
    >
      <span
        className="btn-text text-start text-sm-center"
        style={{ paddingLeft: icon || reactIcon ? "1rem" : undefined }}
      >
        {btnName}
      </span>
    </button>
  );
}

export default ButtonComponent;
