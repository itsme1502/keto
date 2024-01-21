import React from "react";
import header from "../assets/images/Header.png";
const HeaderImage = () => {
  return (
    // <div className="flex items-center justify-end h-screen">

    <div
      className="h-[100vh] w-full object-cover bg-no-repeat  relative"
      style={{
        backgroundImage: `url(${header})`,
      }}
    >
      <div className="absolute right-8 top-8 text-black">
        <p className="font-bold text-2xl">Need Funds to Pay For a Medical<br></br> Emergencyor Social Cause?</p>
      </div>
    </div>
    // </div>
  );
};

export default HeaderImage;
