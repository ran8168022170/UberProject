import React, { useState } from "react";
import uberCar from "../assets/uberCar.png";
import { Link } from "react-router-dom";

const FinishRide = (props) => {
  return (
    <div>
      <div>
        {" "}
        <div>
          <h5
            onClick={() => {
              props.setFinisRidePanel(false);
            }}
            className="top-0 text-center p-1 absolute w-[93%]"
          >
            <i className=" text-2xl text-black ri-arrow-down-wide-line"></i>
          </h5>
          <h2 className="text-2xl font-bold ">Complete Your Ride</h2>

          <div className="flex items-center justify-between mt-2 bg-yellow-400 rounded-lg p-3 ">
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
            <div className="w-full mt-2">
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

            <div className="mt-6 w-full">
              <Link
                to={"/captain-home"}
                className="mt-2 w-full flex justify-center p-3 rounded-lg bg-emerald-500 "
              >
                Finish Ride
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinishRide;
