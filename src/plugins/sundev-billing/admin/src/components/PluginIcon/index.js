import React from "react";
import Cloud from "@strapi/icons/Cloud";

function Sun() {
  return (
    <img
      src="https://sundev.vercel.app/ailes.png"
      alt="logo Sur un nuage"
      width={16}
      height={16}
    />
  );
}

const PluginIcon = () => <Cloud />;

export default PluginIcon;
