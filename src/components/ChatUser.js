import React, { useContext, useEffect, useState } from "react";
import User from "./User";
import ClickContext from "./Context/ClickContext";
import SearchBar from "./SearchBar";

function ChatUser() {
  const { Profiles, setProfiles, searchArray, setSearchArray } =
    useContext(ClickContext);
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
