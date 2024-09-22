import React from "react";

interface SmallCardProps {
  color: string;
  icon?: string;
  width?: string;
  height?: string;
}

function SmallCard({
  color,
  icon,
  width = "35%",
  height = "30%",
}: SmallCardProps) {
  return (
    <div
      className="small-card-container d-flex justify-content-center align-items-center"
      style={{
        background: color,
        minWidth: width,
        minHeight: height,
        maxHeight: height,
      }}
    >
      {icon && <img src={icon} alt="Icon" />}
    </div>
  );
}

export default SmallCard;
