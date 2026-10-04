import React from "react";

const VehiclePanel = (props) => {
  console.log("veicle panel");
  console.log("veicle panel", props.vehiclePanel);

  return (
    <div>
      <h5
        onClick={() => {
          props.setVehiclePanel(false);
        }}
        className="top-0 text-center p-1 absolute w-[93%]"
      >
        <i className=" text-2xl text-black ri-arrow-down-wide-line"></i>
      </h5>
      <h2 className="text-2xl font-semibold mb-5">Choose a vehicle</h2>
      <div
        onClick={() => {
          props.setVehiclePanel(false);
          props.setConfirmRidePanel(true);
        }}
        className="flex items-center justify-between w-full  p-3 mb-2 border-2 border-black rounded-xl"
      >
        <img
          className="h-12 "
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2XWzqxA45cAIidItgvx_a7-eY7lE8Cppn1JjFUTNC8g&s=10"
          alt="car"
        />
        <div className=" w-1/2">
          <h4 className="font-medium text-sm">
            Uber Go
            <span>
              <i className="ri-user-3-fill"></i>4
            </span>
          </h4>
          <h5 className="font-medium text-sm">2 mins away</h5>
          <p className="font-medium text-xs text-gray-600">
            Affordable, compact rides
          </p>
        </div>
        <h2 className="text-2xl font-semibold">₹193</h2>
      </div>
      <div
        onClick={() => {
          props.setVehiclePanel(false);
          props.setConfirmRidePanel(true);
        }}
        className="flex items-center justify-between w-full  p-3 mb-2 border-2 border-black rounded-xl"
      >
        <img
          className="h-12 "
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2XWzqxA45cAIidItgvx_a7-eY7lE8Cppn1JjFUTNC8g&s=10"
          alt="car"
        />
        <div className=" w-1/2">
          <h4 className="font-medium text-xl">
            Uber Go
            <span>
              <i className="ri-user-3-fill"></i>4
            </span>
          </h4>
          <h5 className="font-medium text-sm">2 mins away</h5>
          <p className="font-medium text-xs text-gray-600">
            Affordable, compact rides
          </p>
        </div>
        <h2 className="text-2xl font-semibold">₹193</h2>
      </div>
      <div
        onClick={() => {
          props.setVehiclePanel(false);
          props.setConfirmRidePanel(true);
        }}
        className="flex items-center justify-between w-full  p-3 mb-2 border-2 border-black rounded-xl"
      >
        <img
          className="h-12 "
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2XWzqxA45cAIidItgvx_a7-eY7lE8Cppn1JjFUTNC8g&s=10"
          alt="car"
        />
        <div className=" w-1/2">
          <h4 className="font-medium text-sm">
            Uber Go
            <span>
              <i className="ri-user-3-fill"></i>4
            </span>
          </h4>
          <h5 className="font-medium text-sm">2 mins away</h5>
          <p className="font-medium text-xs text-gray-600">
            Affordable, compact rides
          </p>
        </div>
        <h2 className="text-2xl font-semibold">₹193</h2>
      </div>
    </div>
  );
};

export default VehiclePanel;
