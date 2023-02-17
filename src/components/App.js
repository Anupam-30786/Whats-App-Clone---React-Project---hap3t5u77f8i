import React, { useState } from "react";
import "../styles/App.css";
import UserSection from "./UserSection";
import "bootstrap/dist/css/bootstrap.min.css";
import ChatSection from "./ChatSection";
import { useMediaQuery } from "react-responsive";
import ClickContext from "./Context/ClickContext";
const App = () => {
  const [isClicked, setIsClicked] = useState(false);
  return (
    <div id="main">
      {" "}
      <div className="d-flex">
        <ClickContext.Provider
          value={{
            isClicked: isClicked,
            setIsClicked: setIsClicked,
          }}
        >
          <UserSection isClicked></UserSection>
          <ChatSection isClicked></ChatSection>
        </ClickContext.Provider>
      </div>
    </div>
  );
};

export default App;
