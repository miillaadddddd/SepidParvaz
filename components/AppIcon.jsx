import Image from "next/image";
import React from "react";
const icons = {
  pen: "/icons/pen.svg",
  goldMedal: "/icons/goldMedal.svg",
  silverMedal: "/icons/silverMedal.svg",
  bronzeMedal: "/icons/bronzeMedal.svg",
};

function AppIcon({ icon = icons["pen"], size }) {
  return (
    <Image
      layout="fixed"
      height={size == "big" ? 60 : 20}
      width={size == "big" ? 60 : 20}
      src={icons[icon]}
      alt="search"
    />
  );
}

export default AppIcon;
