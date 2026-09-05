import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import UserLogin from "./pages/UserLogin.jsx";
import UserSignup from "./pages/UserSignup.jsx";
import CaptainLogin from "./pages/CaptainLogin.jsx";
import CaptainSignup from "./pages/CaptainSignup.jsx";
import { useContext } from "react";
import { UserDataContext } from "./context/UserContext.jsx";

function App() {
  const ans = useContext(UserDataContext);
  console.log(ans);
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/user-login" element={<UserLogin />} />
      <Route path="/user-signup" element={<UserSignup />} />
      <Route path="/captain-login" element={<CaptainLogin />} />
      <Route path="/captain-signup" element={<CaptainSignup />} />
    </Routes>
  );
}

export default App;
