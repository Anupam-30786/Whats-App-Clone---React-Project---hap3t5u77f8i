import React, { useState, useEffect } from "react";
import "../styles/App.css";
import UserSection from "./UserSection";
import "bootstrap/dist/css/bootstrap.min.css";
import ChatSection from "./ChatSection";
import { useMediaQuery } from "react-responsive";
import ClickContext from "./Context/ClickContext";

const App = () => {
  const [searchArray, setSearchArray] = useState([]);
  const [isClicked, setIsClicked] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [check, setCheck] = useState(0);
  const [Profiles, setProfiles] = useState(
    JSON.parse(localStorage.getItem("data"))
  );

  var storedData = [];

  useEffect(() => {
    setSearchArray(Profiles);
  }, []);

  return (
    <div id="main">
      {" "}
      <div className="d-flex">
        <ClickContext.Provider
          value={{
            isClicked: isClicked,
            setIsClicked: setIsClicked,
            currentUser: currentUser,
            setCurrentUser: setCurrentUser,
            Profiles: Profiles,
            searchArray: searchArray,
            setSearchArray: setSearchArray,
          }}
        >
          <UserSection></UserSection>
          <ChatSection></ChatSection>
        </ClickContext.Provider>
      </div>
    </div>
  );
};

export default App;
