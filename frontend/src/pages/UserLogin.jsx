import React, { useState } from "react";
import { Link } from "react-router-dom";

const UserLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userData, setUserData] = useState({});

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(email);
    setUserData({
      email: email,
      password: password,
    });
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
        <h3 className="text-xl mb-2 ">whats your email</h3>
        <input
          type="email"
          required
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          placeholder="your email"
          className="bg-[#eeeeee] rounded border px-4 py-2 text-lg w-full mb-7"
        />
        <h3 className="text-xl mb-2 ">Enter password</h3>
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
          Login
        </button>
        <p className="text-center mb-4">
          New here!{" "}
          <Link to="/user-signup" className="text-blue-500">
            user signup
          </Link>
        </p>
      </form>
      <div>
        <Link to={"/captain-login"}>
          <button className="bg-[#10b461] text-white font-semibold rounded border px-4 py-2 text-lg w-full mb-7">
            Sign in as captain
          </button>
        </Link>
      </div>
    </div>
  );
};

export default UserLogin;
