import React, { useEffect, useState } from "react";
import User from "./User";

function ChatUser() {
  const [Profiles, setProfiles] = useState([
    {
      name: "Varun",
      profilePic: "img1.jpg",
      messages: [
        { message: "Hello Friend . How are you ?", from: "self" },
        { message: "I am good how are you ?", from: "me" },
        { message: "Doing Good", from: "self" },
        { message: "When is our Exam ?", from: "self" },
      ],
    },
    {
      name: "Anurag",
      profilePic: "img2.jpg",
      messages: [
        { message: "Where are you?", from: "self" },
        { message: "I am in school", from: "me" },
      ],
    },
  ]);

  useEffect(() => {
    if (localStorage.getItem("isToken"))
      localStorage.setItem("data", JSON.stringify(Profiles));
    else {
      var storedData = JSON.parse(localStorage.getItem("data"));
    }

    console.log(storedData);
    setProfiles(storedData);
  }, []);
  return (
    <div>
      {Profiles.map((user, i) => {
        //  console.log(i);
        return <User user={user} key={i} />;
      })}
    </div>
  );
}

export default ChatUser;
