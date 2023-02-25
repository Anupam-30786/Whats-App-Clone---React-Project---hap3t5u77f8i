import React, { useContext } from "react";
import ClickContext from "./Context/ClickContext";

function Messages() {
  const { currentUser } = useContext(ClickContext);

  return (
    <>
      {currentUser.messages.map((messages) => {
        return (
          <div
            className={
              messages.from === "me"
                ? "align-self-end bg-gradient m-3 p-2 rounded"
                : "align-self-start bg-gradient m-3 p-2 rounded "
            }
          >
            <p
              className="shadow-sm"
              style={{ fontWeight: "bold", color: "initial" }}
            >
              {" "}
              {messages.message}
            </p>
          </div>
        );
      })}
    </>
  );
}

export default Messages;
