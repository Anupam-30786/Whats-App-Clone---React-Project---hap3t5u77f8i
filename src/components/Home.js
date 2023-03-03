import React, { useContext, useEffect } from "react";
import ChatSection from "./ChatSection";
import ClickContext from "./Context/ClickContext";
import UserSection from "./UserSection";

function Home() {
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
  const { setProfiles, setSearchArray, searchArray } = useContext(ClickContext);
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
      <div className="d-flex">
        <UserSection />
        <ChatSection />
      </div>
    </div>
  );
}

export default Home;
