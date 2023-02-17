import React from "react";
import ChatUser from "./ChatUser";
import SearchBar from "./SearchBar";
import TopIcon from "./TopIcon";

function UserSection() {
  return (
    <div className="col-md-4">
      <TopIcon />
      <SearchBar />
      <ChatUser />
    </div>
  );
}
export default UserSection;
