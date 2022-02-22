import Image from "next/image";
import React from "react";
const icons = {
  pen: "/icons/pen.svg",
};

function AppIcon({ icon = icons["pen"] }) {
  return (
    <Image
      layout="fixed"
      height={20}
      width={20}
      src={icons[icon]}
      alt="search"
    />
  );
}

export default AppIcon;
