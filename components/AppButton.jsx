import React from "react";
import AppIcon from "./AppIcon";

function AppButton({ title = "Edit", onClick }) {
  return (
    <button onClick={onClick}>
      <div className="relative flex">
        <AppIcon icon="pen" />
        <span className="mx-4 font-black text-gray-700">{title}</span>
      </div>
    </button>
  );
}

export default AppButton;
