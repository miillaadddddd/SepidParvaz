import React from "react";
import AppButton from "../../AppButton";
import AppText from "../../AppText";
import s from "./EditPart.module.css";
function EditPart() {
  return (
    <div className={s.container}>
      <div className={s.informationContainer}>
        <div className={s.configurationContainer}>
          <AppText title="Configuration" />
          <AppText text="Weight classification" />
          <AppText text="Age Classification" />
          <AppText text="Judge Count" />
        </div>
        <div className={s.adminContainer}>
          <AppText title="Admins" />
          <AppText text="Registrater name" />
          <AppText text="Registrater name" />
          <AppText text="Registrater name" />
        </div>
      </div>
      <div className={s.buttonContainer}>
        <AppButton />
      </div>
    </div>
  );
}

export default EditPart;
