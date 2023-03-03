import React, { useContext, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import ClickContext from "./Context/ClickContext";

function RegistrationPage() {
  const userRef = useRef("");

  const [userId, setUserId] = useState("");
  const { setCurrentUser } = useContext(ClickContext);
  const navigate = useNavigate();
  const registerUser = () => {
    const user = {
      name: userId,
      profilePic: "xyj.jpg",
      messages: [],
    };
    var storedData = JSON.parse(localStorage.getItem("data"));
    storedData.push(user);
    console.log("the stored data is", storedData);

    localStorage.setItem("data", JSON.stringify(storedData));
    setCurrentUser(user);
    navigate("/");
  };
  return (
    <div>
      <input
        type="text"
        placeholder="userId"
        ref={userRef}
        value={userId}
        onChange={() => {
          setUserId(userRef.current.value);
        }}
      ></input>
      <button onClick={registerUser}>register</button>
    </div>
  );
}

export default RegistrationPage;
