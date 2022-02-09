import React from "react";

function One() {
  return (
    <div className="min-h-screen bg-slate-200">
      {/* header */}
      <div className="flex items-center ">
        <div className="flex">
          <div className="flex items-center justify-center w-40 h-40 m-8 border-2 rounded-full cursor-pointer border-cyan-600">
            <span className="text-5xl font-black text-cyan-600"> +</span>
          </div>
          <div className="flex items-center justify-center w-40 h-40 my-8 ml-8 border-2 rounded-full cursor-pointer border-cyan-600">
            <span className="text-5xl font-black text-cyan-600"> +</span>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center grow">
          <span className="block mb-2 text-4xl font-black text-primaryb ">
            Fedrasion name
          </span>
          <span className="block mb-2 text-2xl font-black text-primaryb">
            Style
          </span>
          <span className="block mb-2 text-xl font-black text-primaryb">
            text for description
          </span>
        </div>
        <div className="">
          <div className="flex items-center justify-center m-8 border-2 rounded-full cursor-pointer w-52 h-52 border-cyan-600">
            <span className="text-5xl font-black text-cyan-600"> +</span>
          </div>
        </div>
      </div>

      {/* Edit Part */}

      {/* winner List */}

      {/* table games */}

      {/* paginations */}
    </div>
  );
}

export default One;
