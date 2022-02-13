import React from "react";
import s from "./Header.module.css";
function Header() {
  return (
    <div className="flex items-center ">
      <div className={s.cricle}>
        <span className={s.plusBtn}> +</span>
      </div>

      <div className={s.cricle}>
        <span className={s.plusBtn}> +</span>
      </div>

      <div className={s.header}>
        <span className={`${s.header_title} text-4xl`}>Fedrasion name</span>
        <span className={`${s.header_title} text-2xl`}>Style</span>
        <span className={`${s.header_title} text-xl`}>
          text for description
        </span>
      </div>

      <div className={s.cricle}>
        <span className={s.plusBtn}> +</span>
      </div>
    </div>
  );
}

export default Header;
