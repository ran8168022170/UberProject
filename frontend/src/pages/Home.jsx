import React, { useState, useRef } from "react";
import uber from "../assets/uber.png";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import "remixicon/fonts/remixicon.css";
import LocationSearchPanel from "../components/LocationSearchPanel";
import VehiclePanel from "../components/VehiclePanel";
import ConfirmRidePanel from "../components/ConfirmRidePanel";
import LookingForDriver from "../components/LookingForDriver";
import WaitingForDriver from "../components/WaitingForDriver";
const Home = () => {
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");
  const panelRef = useRef(null);
  const vehiclePanelRef = useRef(null);
  const confirmRidePanelRef = useRef(null);
  const panelCloseRef = useRef(null);
  const lookingForDriverRef = useRef(null);
  const waitingForDriverRef = useRef(null);

  const [panelOpen, setPanelOpen] = useState(false);

  const [vehiclePanel, setVehiclePanel] = useState(false);
  const [confirmRidePanel, setConfirmRidePanel] = useState(false);
  const [lookingForDriverPanel, setLookingForDriverPanel] = useState(false);
  const [waitingForDriverPanel, setWaitingForDriverPanel] = useState(false);
  const submitHandler = (e) => {
    e.preventDefault();
  };
  console.log(vehiclePanel);

  useGSAP(
    function () {
      if (panelOpen) {
        gsap.to(panelRef.current, {
          height: "70%",
          padding: 24,
        });
        gsap.to(panelCloseRef.current, {
          opacity: 1,
        });
      } else {
        gsap.to(panelRef.current, {
          height: "0%",
          padding: 0,
        });
        gsap.to(panelCloseRef.current, {
          opacity: 0,
        });
      }
    },
    [panelOpen],
  );

  useGSAP(
    function () {
      if (vehiclePanel) {
        gsap.to(vehiclePanelRef.current, {
          transform: "translateY(0)",
        });
      } else {
        gsap.to(vehiclePanelRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [vehiclePanel],
  );

  useGSAP(
    function () {
      if (confirmRidePanel) {
        gsap.to(confirmRidePanelRef.current, {
          transform: "translateY(0)",
        });
      } else {
        gsap.to(confirmRidePanelRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [confirmRidePanel],
  );

  useGSAP(
    function () {
      if (lookingForDriverPanel) {
        gsap.to(lookingForDriverRef.current, {
          transform: "translateY(0)",
        });
      } else {
        gsap.to(lookingForDriverRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [lookingForDriverPanel],
  );

  useGSAP(
    function () {
      if (waitingForDriverPanel) {
        gsap.to(waitingForDriverRef.current, {
          transform: "translateY(0)",
        });
      } else {
        gsap.to(waitingForDriverRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [waitingForDriverPanel],
  );

  return (
    <div className="h-screen relative overflow-hidden">
      <img className="w-20 absolute left-5 top-5 z5-50" src={uber} alt="Uber" />
      <div className="h-screen w-screen ">
        <img
          className="h-full w-full object-cover"
          src="https://www.tecocraft.com/wp-content/uploads/2017/08/Uber-Car-Animation-For-Your-Taxi-App.png"
          alt=""
        />
      </div>
      <div className="bg-white absolute flex flex-col justify-end h-screen top-0 w-full">
        <div className=" bg-white h-[30%] p-5 relative ">
          <h4
            ref={panelCloseRef}
            onClick={() => {
              setPanelOpen(false);
            }}
            className="absolute opacity-0 right-6 top-6 text-2xl"
          >
            <i className="ri-arrow-down-wide-line"></i>
          </h4>
          <h2 className="text-3xl font-semibold ">Find a Trip</h2>
          <form
            onSubmit={(e) => {
              submitHandler(e);
            }}
            action=""
          >
            <div className="line absolute top-[47%] left-10 bg-black h-16 w-1 rounded-lg "></div>
            <input
              onClick={(e) => {
                setPanelOpen(true);
              }}
              className="bg-[#eee] px-8 py-2 text-lg rounded-lg mt-5"
              type="text"
              value={pickup}
              onChange={(e) => {
                setPickup(e.target.value);
              }}
              placeholder="Enter pickup location"
            />
            <input
              onClick={(e) => {
                setPanelOpen(true);
              }}
              className="bg-[#eee] px-8 py-2 text-lg rounded-lg mt-6"
              type="text"
              value={destination}
              onChange={(e) => {
                setDestination(e.target.value);
              }}
              placeholder="Enter Destination"
            />
          </form>
        </div>

        <div ref={panelRef} className="h-0 bg-white  overflow-hidden">
          <LocationSearchPanel
            setPanelOpen={setPanelOpen}
            setVehiclePanel={setVehiclePanel}
          />
        </div>
      </div>

      <div
        ref={vehiclePanelRef}
        className="z-10 fixed  w-full bottom-0 translate-y-full bg-white px-3 py-10 pt-14"
      >
        <VehiclePanel
          vehiclePanel={vehiclePanel}
          setVehiclePanel={setVehiclePanel}
          setConfirmRidePanel={setConfirmRidePanel}
        />
      </div>

      <div
        ref={confirmRidePanelRef}
        className="z-10 fixed  w-full bottom-0 translate-y-full bg-white px-3 py-10 pt-14"
      >
        <ConfirmRidePanel
          setConfirmRidePanel={setConfirmRidePanel}
          setLookingForDriverPanel={setLookingForDriverPanel}
        />
      </div>

      <div
        ref={lookingForDriverRef}
        className="z-10 fixed  w-full bottom-0 translate-y-full bg-white px-3 py-10 pt-14"
      >
        <LookingForDriver
          setWaitingForDriverPanel={setWaitingForDriverPanel}
          lookingForDriverPanel={lookingForDriverPanel}
          setLookingForDriverPanel={setLookingForDriverPanel}
        />
      </div>

      <div
        ref={waitingForDriverRef}
        className="z-10 fixed  w-full bottom-0 translate-y-full    bg-white px-3 py-10 pt-14"
      >
        <WaitingForDriver setWaitingForDriverPanel={setWaitingForDriverPanel} />
      </div>
    </div>
  );
};

export default Home;
