import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CaptainDataContext } from "../context/CaptainContext";
import axios from "axios";

const CaptainSinup = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [captainData, setCaptainData] = useState({});

  const [vehicleColor, setVehicleColor] = useState("");
  const [vehicleplate, setVehicleplate] = useState("");
  const [vehicleCapacity, setVehicleCapacity] = useState("");
  const [vehicleType, setVehicleType] = useState("");

  const { captain, setCaptain } = useContext(CaptainDataContext);
  const navigate = useNavigate();
  const submitHandler = async (e) => {
    e.preventDefault();

    const newCaptain = {
      fullname: {
        firstname: firstName,
        lastname: lastName,
      },
      email,
      password,
      vehicle: {
        color: vehicleColor,
        plate: vehicleplate,
        capacity: Number(vehicleCapacity),
        vehicleType: vehicleType,
      },
    };
    console.log(newCaptain);

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/captains/register`,
        newCaptain,
      );

      console.log("SUCCESS:", response.data);

      if (response.status === 201) {
        setCaptain(response.data.captain);
        localStorage.setItem("captainToken", response.data.token);
        navigate("/captain-home");
      }
    } catch (error) {
      console.log("REGISTER ERROR:", error.response?.data);
      console.log("STATUS:", error.response?.status);
    }
  };

  return (
    <div className="p-7 min-h-screen">
      <img
        className="w-16 mb-3"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLT4jVWIZAHpDUz8SPUemTuatgeYO1SnvIyfKMCZaU_JkLORN-_BoHf6XS&s=10"
        alt=""
      />
      <form
        className="mt-3"
        action=""
        onSubmit={(e) => {
          submitHandler(e);
        }}
      >
        <h3 className="text-xl mb-2 ">Captain Full Name</h3>
        <div className="flex gap-2">
          <input
            type="text"
            required
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
            placeholder="First Name"
            className="bg-[#eeeeee] rounded w-1/2 border px-4 py-2 text-lg  mb-3"
          />

          <input
            type="text"
            required
            onChange={(e) => {
              setLastName(e.target.value);
            }}
            placeholder="Last Name"
            className="bg-[#eeeeee] rounded w-1/2 border px-4 py-2 text-lg  mb-3"
          />
        </div>
        <h3 className="text-xl mb-2 ">Captain email</h3>
        <input
          type="email"
          required
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          placeholder="your email"
          className="bg-[#eeeeee] rounded border px-4 py-2 text-lg w-full mb-3"
        />
        <h3 className="text-xl mb-2 ">Captain password</h3>
        <input
          type="password"
          required
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          placeholder="password"
          className="bg-[#eeeeee] rounded border px-4 py-2 text-lg w-full mb-3"
        />
        <h3 className="text-xl mb-2">Vehicle Information</h3>

        <div className="flex">
          <input
            type="text"
            required
            value={vehicleColor}
            onChange={(e) => {
              setVehicleColor(e.target.value);
            }}
            placeholder="Vehicle Color"
            className="bg-[#eeeeee] rounded border px-4 py-2 text-lg w-1/2 mb-3 mr-2"
          />

          <input
            type="text"
            required
            value={vehicleplate}
            onChange={(e) => {
              setVehicleplate(e.target.value);
            }}
            placeholder="Vehicle Plate"
            className="bg-[#eeeeee] rounded border px-4 py-2 text-lg w-1/2 mb-3"
          />
        </div>

        <div className="flex">
          <input
            type="number"
            required
            value={vehicleCapacity}
            onChange={(e) => {
              setVehicleCapacity(e.target.value);
            }}
            placeholder="Vehicle Capacity"
            className="bg-[#eeeeee] rounded border px-4 py-2 text-lg w-1/2 mb-3 mr-2"
          />

          <select
            required
            value={vehicleType}
            onChange={(e) => {
              setVehicleType(e.target.value);
            }}
            className="bg-[#eeeeee] rounded border px-4 py-2 text-lg w-1/2 mb-3"
          >
            <option value="">Vehicle Type</option>
            <option value="car">car</option>
            <option value="motorcycle">motorcycle</option>
            <option value="auto">auto</option>
          </select>
        </div>
        <button className="bg-[#111] text-white font-semibold rounded border px-4 py-2 text-lg w-full mb-4">
          SignUp as Captain
        </button>
        <p className="text-center mb-4">
          Already signed Up{" "}
          <Link to={"/captain-login"} className="text-blue-500">
            click to login as captain
          </Link>
        </p>
      </form>
      <div>
        <Link to={"/user-signup"}>
          <button className="bg-[#10b461] text-white font-semibold rounded border px-4 py-2 text-lg w-full mb-3">
            SignUp as User
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CaptainSinup;
