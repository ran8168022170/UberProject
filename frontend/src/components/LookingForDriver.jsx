import React, { useEffect } from "react";
import uberCar from "../assets/uberCar.png";

const LookingForDriver = (props) => {
  return (
    <div>
      <h5
        onClick={() => {
          props.setLookingForDriverPanel(false);
          props.setConfirmRidePanel(false);
        }}
        className="top-0 text-center p-1 absolute w-[93%]"
      >
        <i className=" text-2xl text-black ri-arrow-down-wide-line"></i>
      </h5>
      <h2 className="text-2xl font-semibold mb-5">Looking For Driver</h2>
      <div className="flex ap-2 flex-col justify-between  items-center">
        <img className="h-20" src={uberCar} alt="" />

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

export default LookingForDriver;
