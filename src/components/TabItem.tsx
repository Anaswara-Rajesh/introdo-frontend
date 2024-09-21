import React from "react";

function TabItem({ icon, text }: any) {
  return (
    <div className="tab-item d-flex gap-3 align-items-center text-center p-4">
      <span className="tab-icon">{icon}</span>
      <span className="tab-text">{text}</span>
    </div>
  );
}

export default TabItem;
