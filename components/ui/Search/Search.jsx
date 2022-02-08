import React from "react";
import Image from "next/image";

function Search() {
  return (
    <>
      <div className="absolute top-[15px] p-3 w-1/2 bg-white rounded-3xl shadow-2xl outline-0">
        <div className="w-[20px] absolute left-4">
          <Image
            layout="responsive"
            height={15}
            width={15}
            src="/icons/Search.svg"
            alt="search"
          />
        </div>
        <input
          style={{ direction: "ltr", border: "none" }}
          className="w-[95%] placeholder-blue-300"
          type="text"
          placeholder="Search based on: Name, Family, National Code ,Weight ,Age classification"
        />
      </div>
    </>
  );
}

export default Search;
