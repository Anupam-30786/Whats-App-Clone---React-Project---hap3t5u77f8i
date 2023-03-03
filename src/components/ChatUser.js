import React, { useContext, useEffect, useState } from "react";
import User from "./User";
import ClickContext from "./Context/ClickContext";

function ChatUser() {
  const { searchArray } = useContext(ClickContext);
  return (
    <div>
      {searchArray.map((user, i) => {
        //  console.log(i);
        return <User user={user} Component={<ChatUser />} />;
      })}
    </div>
  );
}

export default ChatUser;
