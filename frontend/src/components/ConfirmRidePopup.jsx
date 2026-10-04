import React, { useState } from "react";
import uberCar from "../assets/uberCar.png";
import { Link } from "react-router-dom";

const ConfirmRidePopup = (props) => {
  console.log("confirm ride panel  ");

  const [otp, setOtp] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      {" "}
      <div>
        <h5
          onClick={() => {
            props.setconfirmRidePopupPanel(false);
          }}
          className="top-0 text-center p-1 absolute w-[93%]"
        >
          <i className=" text-2xl text-black ri-arrow-down-wide-line"></i>
        </h5>
        <h2 className="text-2xl font-bold ">Confirm Your OTP</h2>

        <div className="flex items-center justify-between mt-5  ">
          <h3 className="text-xl font-semibold mb-2 w-[40%] ">PUT OTP HERE </h3>
          <h2 className="text-2xl right-2     ">
            <i className="w-[10%] ri-arrow-right-box-fill "></i>
          </h2>
          <form action="" className="   w-[45%]">
            <input
              className="p-3 border-b-blue-900 border rounded-lg w-[100%]  text-xl "
              type="text"
              placeholder="OTP...."
            />
          </form>
        </div>
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
            <form
              onSubmit={(e) => {
                submitHandler(e);
              }}
              action=""
            >
              <input
                onChange={(e) => {
                  setOtp(e.target.value);
                }}
                value={otp}
                className="border rounded-lg w-full px-6 py-4"
                type="text"
                placeholder="Enter OTP..."
              />
              <Link
                to={"/captain-riding"}
                className="mt-2 w-full flex justify-center p-3 rounded-lg bg-emerald-500 "
              >
                Confirm & Start Ride
              </Link>
              <button
                onClick={() => {
                  props.setconfirmRidePopupPanel(false);
                }}
                className="mt-2 w-full p-3 rounded-lg bg-red-600 "
              >
                Cancel
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmRidePopup;
