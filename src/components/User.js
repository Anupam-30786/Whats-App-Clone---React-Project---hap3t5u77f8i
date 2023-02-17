import React from "react";
import { Card, Image } from "react-bootstrap";
import "../styles/App.css";

function User({ user }) {
  return (
    <Card
      className="d-flex flex-row h6"
      size={3}
      style={{ objectFit: "none" }}
      onClick={() => {
        console.log("hello");
      }}
    >
      <Card.Body className="d-flex flex-row">
        <div className="d-flex w-25 justify-content-center">
          <Image
            className="carousel-control-next-icon img icon"
            src="https://www.thefamouspeople.com/profiles/images/ab-de-villiers-1.jpg"
            roundedCircle={true}
            style={{ height: "50", width: "50" }}
          />
        </div>
        <div className=" d-flex justify-content-center flex-column w-75 icon">
          <h5 align="center">{user.name}</h5>
          <p align="center">{user.messages[0].message}</p>
        </div>
      </Card.Body>
    </Card>
  );
}

export default User;
