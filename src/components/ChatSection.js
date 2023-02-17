import React, { useContext } from "react";
import { Image } from "react-bootstrap";
import "../styles/App.css";
import ClickContext from "./Context/ClickContext";

function ChatSection() {
  const { isCLicked, setIsClicked } = useContext(ClickContext);
  return (
    <div className="col-md-7 bg-light w-100 h-100  m-1 ">
      <div id="imagecontainer" className="w-100 ">
        {isCLicked ? <div>hello</div> : <h1>fello</h1>}
      </div>
    </div>
  );
}
export default ChatSection;
