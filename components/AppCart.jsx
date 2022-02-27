import React from "react";
import s from "./AppCart.module.css";
import AppIcon from "./AppIcon";
import AppText from "./AppText";
function AppCart({ icon = "goldMedal", border }) {
  return (
    <div
      className={s.container}
      style={{
        borderColor: border ? "#17D0DD" : null,
        borderWidth: "2px",
      }}
    >
      <div className={s.icon}>
        <AppIcon icon={icon} size="big" />
      </div>
      <div className={s.nameContainer}>
        <AppText text="Coach Name" />
        <span className={s.name}>Bluefighter</span>
      </div>
    </div>
  );
}

export default AppCart;
