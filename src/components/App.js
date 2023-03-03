import React, { useState, useEffect } from "react";
import "../styles/App.css";
import UserSection from "./UserSection";
import "bootstrap/dist/css/bootstrap.min.css";
import ChatSection from "./ChatSection";
import { useMediaQuery } from "react-responsive";
import ClickContext from "./Context/ClickContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RegistrationPage from "./RegistrationPage";
import Home from "./Home";
const App = () => {
  const [searchArray, setSearchArray] = useState([]);
  const [isClicked, setIsClicked] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [notification, setNotification] = useState(0);

  const [Profiles, setProfiles] = useState([]);

  return (
    <>
      <ClickContext.Provider
        value={{
          isClicked: isClicked,
          setIsClicked: setIsClicked,
          currentUser: currentUser,
          setCurrentUser: setCurrentUser,
          Profiles: Profiles,
          searchArray: searchArray,
          setSearchArray: setSearchArray,
          notification: notification,
          setNotification: setNotification,
          setProfiles: setProfiles,
        }}
      >
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/Registration" element={<RegistrationPage />}></Route>
          </Routes>
        </BrowserRouter>
      </ClickContext.Provider>
    </>
  );
};

export default App;
