import { Routes, Route } from "react-router-dom";
import Start from "./pages/Start.jsx";
import Home from "./pages/Home.jsx";

import UserLogin from "./pages/UserLogin.jsx";
import UserSignup from "./pages/UserSignup.jsx";
import CaptainLogin from "./pages/CaptainLogin.jsx";
import CaptainSignup from "./pages/CaptainSignup.jsx";
import { useContext } from "react";
import { UserDataContext } from "./context/UserContext.jsx";
import { UserProtectedWrapper } from "./pages/UserProtectedWrapper.jsx";
import UserLogout from "./pages/UserLogout.jsx";
import CaptainHome from "./pages/CaptainHome.jsx";
import { CaptainProtectedWrapper } from "./pages/CaptainProtectWrapper.jsx";
import Riding from "./pages/Riding.jsx";
import CaptainRiding from "./pages/CaptainRiding.jsx";

function App() {
  const ans = useContext(UserDataContext);
  console.log(ans);
  return (
    <Routes>
      <Route path="/" element={<Start />} />
      <Route path="/user-login" element={<UserLogin />} />
      <Route path="/riding" element={<Riding />} />

      <Route path="/user-signup" element={<UserSignup />} />
      <Route
        path="/user/logout"
        element={
          <UserProtectedWrapper>
            <UserLogout />
          </UserProtectedWrapper>
        }
      />
      <Route path="/captain-login" element={<CaptainLogin />} />
      <Route path="/captain-signup" element={<CaptainSignup />} />
      <Route path="/captain-riding" element={<CaptainRiding />} />

      {/* <Route
        path="/home"
        element={
          <UserProtectedWrapper>
            <Home />
          </UserProtectedWrapper>
        }
      /> */}
      <Route path="/home" element={<Home />} />
      <Route path="/captain-home" element={<CaptainHome />} />
    </Routes>
  );
}

export default App;
