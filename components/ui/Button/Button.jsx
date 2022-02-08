import React from "react";

function Button({ type, title, onClick = () => {} }) {
  return (
    <>
      <button
        onClick={onClick}
        style={{
          color: "#fff",
          backgroundColor: type == "reject" ? "#ff4f7d" : "#4f7dff",
        }}
        className="px-8 py-4 ml-2 mr-2 text-xl font-semibold text-white duration-200 shadow-lg rounded-3xl hover:scale-110"
      >
        {title}
      </button>
    </>
  );
}

export default Button;
