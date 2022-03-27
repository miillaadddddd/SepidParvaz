import React from "react";
import AppButton from "../../AppButton";
import AppText from "../../AppText";
import AppTitleSub from "../../ui/AppTitleSub";

function EnfoPart() {
  return (
    <>
      <div
        style={{ direction: "ltr" }}
        className="p-5 pb-12 my-5 bg-white rounded-lg shadow-2xl "
      >
        <AppButton title="Competion name" color />
        <div className="flex justify-between mt-8">
          <AppTitleSub title="League Name" subTitle="Mahdi Darvishi" />
          <AppTitleSub
            title="Federation Name"
            subTitle="Conmmittee/style name"
          />
          <AppTitleSub title="Committe" subTitle="Fighting" />
          <AppTitleSub title="Staff System" subTitle="Someone" />
          <AppTitleSub title="game style" subTitle="Mahdi Darvishi" />
          <AppTitleSub title="Age range" subTitle="someText" />
          <AppTitleSub title="Weight calassification" subTitle="Fighting" />
        </div>
      </div>
    </>
  );
}

export default EnfoPart;
