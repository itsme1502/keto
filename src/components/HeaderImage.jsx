import React from "react";
import header from "../assets/images/Header.png";
const HeaderImage = () => {
  return (
    <div>
      <div
        className="h-[55vh] w-full object-cover bg-no-repeat  relative"
        style={{
          backgroundImage: `url(${header})`,
        }}
      >
        <div className="absolute right-8 top-8 text-black m-8">
          <p className="font-bold text-2xl">
            Need Funds to Pay For a Medical<br></br> Emergency or Social Cause?
          </p>
          <div className="flex place-content-start gap-8 mt-6">
            <p className="text-green-700 font-semibold">
              0%<br></br>
              <span className="text-slate-500 font-medium">PLATFORM FEE</span>
            </p>
            <p className="text-green-700 font-medium">
              72 Lakh+<br></br>
              <span className="text-slate-500 font-medium">DONORS</span>
            </p>
            <p className="text-green-700 font-medium">
              3.2Lakh+<br></br>
              <span className="text-slate-500 font-medium">FUNDRAISERS</span>
            </p>
          </div>
          <div className="text-green-700 mt-6">
            Ketto's <span className="font-bold">0% Platform fees</span> ensures
            maximum funds for you
          </div>
          <button className="shadow-lg p-4 bg-green-700 text-white rounded-md mt-4 font-medium">
            Start a Fundraiser for FREE
          </button>
        </div>
      </div>

      <div className="bg-white pl-4 relative left-1/2 -translate-x-1/2 -translate-y-1/2 flex shadow-black shadow-sm items-center w-fit rounded-md">
        <button className="shadow-lg p-4 bg-green-900 text-white rounded-2xl font-medium h-full max-h-60">
          Donate Now
        </button>
        <div className=" ml-4">
          <div className="text-green-900 font-bold">
            Start Monthly Donation to Save Lives
          </div>
          <div className="font-light text-xs text-slate-500">
            With your support, countless children will receive health<br></br>{" "}
            care and a happy life. Start your monthly donation today.
          </div>
        </div>
        <img
          className="ml-4 h-24 object-cover w-20 rounded-r-md"
          src="src/assets/images/image1.png"
          alt="child image"
        ></img>
      </div>
    </div>
  );
};

export default HeaderImage;
