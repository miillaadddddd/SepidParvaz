import React from "react";
import AppCart from "../../AppCart";
import AppText from "../../AppText";

function WinnerPart() {
  return (
    <>
      <div className="flex justify-center mt-10">
        <AppText title="Winner's list" />
      </div>
      <div className="relative flex justify-center mt-10 ">
        <div className="relative mx-1 top-5">
          <AppCart icon="bronzeMedal" border />
        </div>
        <div className="relative mx-5 bottom-10">
          <AppCart border />
        </div>
        <div className="relative mx-1 top-5">
          <AppCart icon="silverMedal" border />
        </div>
      </div>
    </>
  );
}

export default WinnerPart;
