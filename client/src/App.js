import "./App.css";
import TvilaReg from "./pages/TvilaReg";
import Users from "./pages/Users";
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
          <Route path="/" element={<TvilaReg />} />
          <Route path="/users" element={<Users />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/sign-in" element={<SignIn />} />
          {/* <Route path="*" element={<NoPage />} /> */}
        </Routes>
      </Router>
    </MyContext.Provider>
  );
}
