import React from "react";
import AppIcon from "./AppIcon";

function AppButton({ title = "Edit", onClick, color }) {
  return (
    <button onClick={onClick}>
      <div className="relative flex">
        <AppIcon icon="pen" color />
        <span
          style={{ color: color ? "#17d0dd" : "inherit" }}
          className="mx-4 font-black text-gray-700"
        >
          {title}
        </span>
      </div>
    </button>
  );
}

export default AppButton;
