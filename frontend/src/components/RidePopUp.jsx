import React from "react";
import uberCar from "../assets/uberCar.png";
import { useState } from "react";

const RidePopUp = (props) => {
  return (
    <div>
      <h5
        onClick={() => {
          props.setRidePopupPanel(false);
        }}
        className="top-0 text-center p-1 absolute w-[93%]"
      >
        <i className=" text-2xl text-black ri-arrow-down-wide-line"></i>
      </h5>
      <h2 className="text-2xl font-semibold mb-2">New Ride Available</h2>
      <div className="flex items-center justify-between mt-5 bg-yellow-400 rounded-lg p-3 ">
        <div className="flex items-center justify-center gap-2">
          <img
            className="w-12 h-12 rounded-full object-cover"
            src={uberCar}
            alt=""
          />
          <h2 className="text-lg font-semibold">Customer Name</h2>
        </div>
        <h3 className="text-2xl font-bold">2.2 km</h3>
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
          <div className="flex items-center   gap-2 p-3 border-b-2   ">
            <i className="ri-wallet-2-line text-2xl"></i>
            <div>
              <h2 className="text-lg font-medium">₹ 435</h2>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between  w-full gap-4">
          <button
            onClick={() => {
              props.setRidePopupPanel(false);
            }}
            className="mt-2 w-full p-3 rounded-lg bg-gray-400 "
          >
            Ignore
          </button>
          <button
            onClick={() => {
              props.setRidePopupPanel(false);
              props.setconfirmRidePopupPanel(true);
            }}
            className="mt-2 w-full p-3 rounded-lg bg-emerald-500 "
          >
            Accept &
          </button>
        </div>
      </div>
    </div>
  );
};

export default RidePopUp;
