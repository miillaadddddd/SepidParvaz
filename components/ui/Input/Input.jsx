import React from "react";

function Input({ title }) {
  return (
    <>
      <div className="flex items-end mb-6">
        <div className="min-w-[190px]">
          <span className="text-xl text-primary ">{title}</span>
        </div>
        <div className="ml-4 grow ">
          <input
            style={{ border: "none", borderBottom: "1px solid #ccc" }}
            className="w-[100%] text-pink-500 rounded focus:outline-none focus:border-sky-500 focus:ring-sky-500 sm:text-sm focus:ring-1"
            type="text"
          />
        </div>
      </div>
    </>
  );
}

export default Input;
