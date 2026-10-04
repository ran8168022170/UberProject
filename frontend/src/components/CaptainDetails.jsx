import React from "react";
import { Link } from "react-router-dom";
import uberCar from "../assets/uberCar.png";
import uber from "../assets/uber.png";

const CaptainDetails = () => {
  return (
    <div>
      <div className="flex items-center justify-between">
        <div className="flex items-center justify-between gap-4">
          <img className="h-10 w-10 rounded-lg" src={uberCar} alt="" />
          <h4 className="text-lg font-medium">Harshi pateliya</h4>
        </div>
        <div>
          <h4 className="text-xl font-semibold">₹193</h4>
          <p className="text-sm font-medium">Earned</p>
        </div>
      </div>
      <div className="flex justify-center items-start p-3 mt-6 bg-gray-50 rounded-full gap-5">
        <div className="text-center">
          <i className=" text-2xl font-thin mb-2 text-lg font-medium ri-timer-2-line"></i>
          <h5 className="text-lg font-medium">10.2</h5>
          <p className="text-small text-gray-600">Hour online</p>
        </div>
        <div className="text-center">
          <i className=" text-2xl font-thin mb-2 text-lg font-medium ri-speed-up-line"></i>
          <h5 className="text-lg font-medium">10.2</h5>
          <p className="text-small text-gray-600">Hour online</p>
        </div>
        <div className="text-center">
          <i className=" text-2xl font-thin mb-2 text-lg font-medium ri-booklet-line"></i>
          <h5 className="text-lg font-medium">10.2</h5>
          <p className="text-small text-gray-600">Hour online</p>
        </div>
      </div>
    </div>
  );
};

export default CaptainDetails;
