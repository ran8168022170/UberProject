import React from "react";
import { Link } from "react-router-dom";
import uberCar from "../assets/uberCar.png";

const Riding = () => {
  return (
    <div className="h-screen  ">
      <Link
        to={"/home"}
        className=" w-20 h-20 rounded-lg top-2 right-2 flex items-center justify-center fixed "
      >
        <i class="text-lg font-medium ri-home-4-line"></i>
      </Link>
      <div className="h-1/2">
        <img className="h-full w-full object-cover " src="" alt="" />
      </div>
      <div className=" h-1/2 p-4">
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
              <i className="ri-wallet-2-line text-2xl"></i>
              <div>
                <h2 className="text-lg font-medium"> ₹ 435</h2>
              </div>
            </div>
          </div>
        </div>
        <button
          //   onClick={() => {
          //     props.setConfirmRidePanel(false);
          //     //props.setLookingForDriverPanel(true);
          //   }}
          className="mt-2 mb-4 w-full p-3 rounded-lg bg-emerald-500 "
        >
          Make Payment
        </button>
      </div>
    </div>
  );
};

export default Riding;
