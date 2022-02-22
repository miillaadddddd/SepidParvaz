import React from "react";
import s from "./AppCart.module.css";
import AppIcon from "./AppIcon";
import AppText from "./AppText";
function AppCart() {
  return (
    <div className={s.container}>
      <div className={s.icon}>
        <AppIcon icon="goldMedal" size="big" />
      </div>
      <div className={s.nameContainer}>
        <AppText text="Coach Name" />
        <span className={s.name}>Bluefighter</span>
      </div>
    </div>
  );
}

export default AppCart;
