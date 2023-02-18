import React, { useContext } from "react";
import { Card, Image } from "react-bootstrap";
import "../styles/App.css";
import ChatUser from "./ChatUser";
import ClickedUser from "./clickedUser";
import ClickContext from "./Context/ClickContext";

function User({ user, Component }) {
  const istrue = Component.type === ChatUser;
  // console.log("hello", user);

  const { setIsClicked, setCurrentUser, isClicked, currentUser } =
    useContext(ClickContext);
  return (
    <Card
      className="d-flex flex-row h6"
      style={{ objectFit: "none", height: 72 + "px" }}
      onClick={() => {
        setIsClicked(true);
        setCurrentUser(user);
        console.log("currentUser is", currentUser);
        console.log(isClicked, currentUser);
      }}
    >
      <Card.Body className="d-flex flex-row">
        <div
          className={
            istrue
              ? "d-flex  justify-content-center align-items-sm-center "
              : "d-flex  justify-content-center align-items-sm-center"
          }
        >
          <Image
            className="carousel-control-next-icon img icon"
            src="https://www.thefamouspeople.com/profiles/images/ab-de-villiers-1.jpg"
            roundedCircle={true}
          />
        </div>
        <div
          className={
            istrue
              ? " d-flex justify-content-center flex-column w-75 icon"
              : "d-flex justify-content-center flex-column icon ms-4"
          }
        >
          <h5 align="center">{user.name}</h5>
          {istrue ? <p align="center">{user.messages[0].message}</p> : ""}
        </div>
      </Card.Body>
    </Card>
  );
}

export default User;
