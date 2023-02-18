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
                ? "bg-dark m-3 p-2 rounded w-25 align-self-end"
                : "bg-dark m-3 p-2 rounded w-25 "
            }
          >
            {messages.message}
          </div>
        );
      })}
    </>
  );
}

export default Messages;
