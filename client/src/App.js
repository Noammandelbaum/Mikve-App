import "./App.css";
import TvilaReg from "./pages/TvilaReg";
import Home from "./pages/Home";
import NoPage from "./pages/NoPage";
import SignUp from "./components/LogInOut/SignUp";
import SignIn from "./components/LogInOut/SignIn";import DrawerAppBar from "./components/DrawerAppBar";
import MyContext from "./components/MyContext";
import { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Summary from "./pages/Summary";
// import { GoogleLogin, GoogleLogout } from "react-google-login";
// import { gapi } from "gapi-script";
// import Logother from "./components/LogInOut/Logother";
// import Login from "./components/LogInOut/Login";
// import LoginR from "./components/LogInOut/LogInR";
// import LogoutR from "./components/LogInOut/LogoutR";

export default function App() {
  const [countChild, setCountChild] = useState(0);
  const [countAdult, setCountAdult] = useState(0);

  return (
    <MyContext.Provider
      value={{
        adult: [countAdult, setCountAdult],
        child: [countChild, setCountChild],
      }}
    >
      <Router>
        <DrawerAppBar />
        <Routes>
          <Route path="/api" element={<Home/>} />
          <Route path="/api/tvila-reg" element={<TvilaReg />} />
          <Route path="/api/sign-up" element={<SignUp />} />
          <Route path="/api/sign-in" element={<SignIn />} />
          <Route path="/api/summary" element={<Summary />} />
          {/* <Route path="*" element={<NoPage />} /> */}
        </Routes>
      </Router>
    </MyContext.Provider>
  );
}
