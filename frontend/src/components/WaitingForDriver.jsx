import React from "react";
import uberCar from "../assets/uberCar.png";

const WaitingForDriver = () => {
  return (
    <div>
      <h5 className="top-0 text-center p-1 absolute w-[93%]">
        <i className=" text-2xl text-black ri-arrow-down-wide-line"></i>
      </h5>
      <div className="flex items-center justify-between">
        <img className="h-12" src={uberCar} alt="" />
        <div className="text-right ">
          <h2 className="text-lg font-medium  ">Ranjeet</h2>
          <h4 className="text-xl font-semibold">BR32A 3208</h4>
          <p className="text-sm text-gray-600">BMW </p>
        </div>
      </div>

      <div className="flex gap-2 flex-col justify-between  items-center">
        <div className="w-full mt-5">
          <div className="flex items-center   gap-2 p-3 border-b-2 ">
            <i className="ri-map-pin-fill text-2xl"></i>
            <div>
              <h2 className="text-lg font-medium">43/5</h2>
              <p className="text-base text-gray-600 -mt-1">
                kankariatalab udo bopal
              </p>
            </div>
          </div>
          <div className="flex items-center   gap-2 p-3 border-b-2 ">
            <i className="ri-map-pin-fill text-2xl"></i>
            <div>
              <h2 className="text-lg font-medium">43/5</h2>
              <p className="text-base text-gray-600 -mt-1">
                kankariatalab udo bopal
              </p>
            </div>
          </div>
          <div className="flex items-center   gap-2 p-3 border-b-2 ">
            <i className="ri-wallet-2-line text-2xl"></i>
            <div>
              <h2 className="text-lg font-medium"> ₹ 435</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WaitingForDriver;
