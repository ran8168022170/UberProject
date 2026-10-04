import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import uberCar from "../assets/uberCar.png";
import uber from "../assets/uber.png";
import flower from "../assets/flower.png";
import FinishRide from "../components/FinishRide";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const CaptainRiding = () => {
  const [finisRidePanel, setFinisRidePanel] = useState(false);
  const finisRidePanelRef = useRef(null);

  useGSAP(
    function () {
      if (finisRidePanel) {
        gsap.to(finisRidePanelRef.current, {
          transform: "translateY(0)",
        });
      } else {
        gsap.to(finisRidePanelRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [finisRidePanel],
  );

  return (
    <div className="h-screen  ">
      <div className="p-3 top-0 fixed flex items-center justify-between w-screen">
        <img className="w-16" src={uber} alt="" />
        <Link
          to={"/home"}
          className=" w-20 h-20 rounded-lg  flex items-center justify-center  "
        >
          <i className="text-lg font-medium ri-logout-box-r-line"></i>
        </Link>
      </div>
      <div className="h-4/5">
        <img className="h-full w-full object-cover " src={flower} alt="" />
      </div>
      <div className=" h-1/5  p-2 bg-amber-400   ">
        <div
          onClick={() => {
            setFinisRidePanel(true);
          }}
        >
          <h5 className="top-2 text-center p-1   w-[93%]">
            <i className=" text-2xl text-black ri-arrow-up-wide-line"></i>
          </h5>
          <div className="flex items-center justify-center gap-16  mt-3">
            <h3 className="text-2xl font-semibold">4 km away</h3>
            <button className="mt-2   p-3 rounded-lg bg-emerald-500 ">
              complete Ride
            </button>
          </div>
        </div>
      </div>
      <div
        ref={finisRidePanelRef}
        className="z-10 fixed  w-full bottom-0  translate-y-full bg-white px-3 py-10 pt-14"
      >
        <FinishRide setFinisRidePanel={setFinisRidePanel} />
      </div>
    </div>
  );
};

export default CaptainRiding;
