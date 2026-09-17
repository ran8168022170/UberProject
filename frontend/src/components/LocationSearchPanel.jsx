import React from "react";

const LocationSearchPanel = (props) => {
  const location = [
    "shiv sagar road kapileshwar rahika madhubani bihar",
    "shiv sagar road kapileshwar rahika madhubani bihar",
    "shiv sagar road kapileshwar rahika madhubani bihar",
    "shiv sagar road kapileshwar rahika madhubani bihar",
  ];

  return (
    <div>
      {location.map(function (elem, idx) {
        return (
          <div
            key={idx}
            onClick={() => {
              props.setVehiclePanel(true);
              props.setPanelOpen(false);
            }}
            className="flex gap-2 border-2 p-3 rounded-xl border-gray-200 active:border-black items-center my-2 justify-center"
          >
            <h2 className="bg-[#eee] h-10 w-10 flex items-center justify-center">
              <i className="ri-map-pin-fill text-2xl"></i>
            </h2>
            <h4>{elem}</h4>
          </div>
        );
      })}
    </div>
  );
};

export default LocationSearchPanel;
