import React from "react";

function AppTitleSub({ title = "title", subTitle = "subTitle" }) {
  return (
    <>
      <div className="">
        <span className="block text-xl font-light text-left text-gray-500 myt-4">
          {title}
        </span>
        <span className="block my-2 text-xl font-light font-bold text-left text-black">
          {subTitle}
        </span>
      </div>
    </>
  );
}

export default AppTitleSub;
