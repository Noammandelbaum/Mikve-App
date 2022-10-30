import "./App.css";
import TvilaReg from "./pages/TvilaReg";
import Home from "./pages/Home";
import NoPage from "./pages/NoPage";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import DrawerAppBar from "./components/DrawerAppBar";
import MyContext from "./components/MyContext";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Summary from "./pages/Summary";

export default function App() {
  const [countChild, setCountChild] = useState(0);
  const [countAdult, setCountAdult] = useState(0);
  const [user, setUser] = useState();
  const [openOnload, setOpenOnload] = useState(false);

  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser !== "undefined") {
      const foundUser = JSON.parse(loggedInUser);
      setUser(foundUser);
    }
  }, []);

  return (
    <MyContext.Provider
      value={{
        adult: [countAdult, setCountAdult],
        child: [countChild, setCountChild],
        userC: [user, setUser],
        onLoad: [openOnload, setOpenOnload],
      }}
    >
      <Router>
        <DrawerAppBar />
        <Routes>
          <Route path="/api" element={<Home />} />
          <Route path="/api/sign-up" element={<SignUp />} />
          <Route path="/api/sign-in" element={<SignIn />} />
          {user && (
            <>
              <Route path="/api/tvila-reg" element={<TvilaReg />} />
              <Route path="/api/summary" element={<Summary />} />
            </>
          )}
          <Route path="*" element={<NoPage />} />
        </Routes>
      </Router>
    </MyContext.Provider>
  );
}
