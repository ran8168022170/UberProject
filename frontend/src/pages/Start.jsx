import { Link } from "react-router-dom";

const Start = () => {
  return (
    <div className="bg-cover bg-center bg-[url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQR-RxAMJdEQOFacl2Yd_DSEckxqeQNfl5Ok7T7GH9LQg&s=10)] h-screen w-full flex flex-col justify-between bg-red-400 pt-8">
      <img
        className="w-16 ml-8"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHRv5w6VE_23c4b159OlEIBeMX5YJE2iZNBOnJF3G2nA&s=10"
        alt="Uber"
      />

      <div className="bg-white py-5 px-10">
        <h2 className="text-2xl font-bold">Get started with Uber</h2>

        <Link to={"/user-login"}>
          <button className="w-full bg-black text-white py-3">Continue</button>
        </Link>
      </div>
    </div>
  );
};

export default Start;
