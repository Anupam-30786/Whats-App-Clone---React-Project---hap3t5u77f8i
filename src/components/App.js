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
  const [notification, setNotification] = useState(0);

  const [Profiles, setProfiles] = useState([]);
  const data = [
    {
      name: "Varun",
      profilePic:
        "https://www.cricbuzz.com/a/img/v1/152x152/i1/c171064/yuvraj-singh.jpg",
      messages: [
        { message: "Hello Friend . How are you ?", from: "self" },
        { message: "I am good how are you ?", from: "me" },
        { message: "Doing Good", from: "self" },
        { message: "When is our Exam ?", from: "self" },
      ],
    },
    {
      name: "Anurag",
      profilePic:
        "https://static.standard.co.uk/s3fs-public/thumbnails/image/2019/02/25/11/ab-de-villiers-2018a.jpg",
      messages: [
        { message: "Where are you?", from: "self" },
        { message: "I am in school", from: "me" },
      ],
    },
  ];

  useEffect(() => {
    if (localStorage.getItem("data")) {
      var storedData = JSON.parse(localStorage.getItem("data"));
      setProfiles(storedData);
    } else {
      localStorage.setItem("data", JSON.stringify(data));
      setProfiles(data);
    }
    setSearchArray(storedData);
  }, []);
  console.log(searchArray);

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
            notification: notification,
            setNotification: setNotification,
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
