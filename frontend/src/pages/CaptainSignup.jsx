import React, { useState } from "react";
import { Link } from "react-router-dom";
const CaptainSinup = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [captainData, setCaptainData] = useState({});

  const submitHandler = (e) => {
    e.preventDefault();

    setCaptainData({
      fullName: {
        firstName: firstName,
        lastName: lastName,
      },
      email: email,
      password: password,
    });
    console.log(captainData);
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
  };

  return (
    <div className="p-7 h-screen flex flex-col justify-around">
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
        <div className="gap-2">
          <input
            type="text"
            required
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
            placeholder="First Name"
            className="bg-[#eeeeee] rounded w-1/2 border px-4 py-2 text-lg  mb-7"
          />

          <input
            type="text"
            required
            onChange={(e) => {
              setLastName(e.target.value);
            }}
            placeholder="Last Name"
            className="bg-[#eeeeee] rounded w-1/2 border px-4 py-2 text-lg  mb-7"
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
          className="bg-[#eeeeee] rounded border px-4 py-2 text-lg w-full mb-7"
        />
        <h3 className="text-xl mb-2 ">Captain password</h3>
        <input
          type="password"
          required
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          placeholder="password"
          className="bg-[#eeeeee] rounded border px-4 py-2 text-lg w-full mb-7"
        />
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
          <button className="bg-[#10b461] text-white font-semibold rounded border px-4 py-2 text-lg w-full mb-7">
            SignUp as User
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CaptainSinup;
