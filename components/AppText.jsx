import React from "react";

function AppText({ text, title }) {
  return (
    <>
      {title && (
        <span className="block my-4 text-3xl font-black text-left text-gray-700">
          {title}
        </span>
      )}
      {text && (
        <span className="block my-4 text-xl font-light text-left text-gray-500">
          {text}
        </span>
      )}
    </>
  );
}

export default AppText;
