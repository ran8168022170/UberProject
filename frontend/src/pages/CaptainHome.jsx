import flower from "../assets/flower.png";
import React from "react";
import { useGSAP } from "@gsap/react";
import { useState } from "react";
import { useRef } from "react";
import gsap from "gsap";
import { Link } from "react-router-dom";
import uberCar from "../assets/uberCar.png";
import uber from "../assets/uber.png";
import CaptainDetails from "../components/CaptainDetails.jsx";
import RidePopUp from "../components/RidePopUp.jsx";
import ConfirmRidePopup from "../components/ConfirmRidePopup.jsx";

const CaptainHome = () => {
  const [ridePopupPanel, setRidePopupPanel] = useState(true);
  const ridePopuppanelRef = useRef(null);

  const [confirmRidePopupPanel, setconfirmRidePopupPanel] = useState(false);
  const confirmRidePopupRef = useRef(null);

  useGSAP(
    function () {
      if (ridePopupPanel) {
        gsap.to(ridePopuppanelRef.current, {
          transform: "translateY(0)",
        });
      } else {
        gsap.to(ridePopuppanelRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [ridePopupPanel],
  );

  useGSAP(
    function () {
      if (confirmRidePopupPanel) {
        gsap.to(confirmRidePopupRef.current, {
          transform: "translateY(0)",
        });
      } else {
        gsap.to(confirmRidePopupRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [confirmRidePopupPanel],
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
      <div className="h-3/5">
        <img className="h-full w-full object-cover " src={flower} alt="" />
      </div>
      <div className=" h- 2/5 p-6  ">
        <CaptainDetails />
      </div>

      <div
        ref={ridePopuppanelRef}
        className="z-10 fixed  w-full bottom-0  bg-white px-3 py-10 pt-14"
      >
        <RidePopUp
          setRidePopupPanel={setRidePopupPanel}
          setconfirmRidePopupPanel={setconfirmRidePopupPanel}
        />
      </div>

      <div
        ref={confirmRidePopupRef}
        className="z-10 fixed  w-full bottom-0  bg-white px-3 py-10 pt-14"
      >
        <ConfirmRidePopup
          setRidePopupPanel={setRidePopupPanel}
          setconfirmRidePopupPanel={setconfirmRidePopupPanel}
        />
      </div>
    </div>
  );
};

export default CaptainHome;
