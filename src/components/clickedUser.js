import React, { useContext } from "react";
import ClickContext from "./Context/ClickContext";
import SearchBar from "./SearchBar";
import User from "./User";
import Messages from "./Messages";
function ClickedUser() {
  const { isClicked, currentUser } = useContext(ClickContext);

  return (
    <div
      className="d-flex flex-column justify-content-between"
      style={{ height: 100 + "vh" }}
    >
      {isClicked ? (
        <div className="d-flex flex-column justify-content-between h-100">
          <User user={currentUser} Component={<ClickedUser />} />
          <Messages />
          <div className="d-flex flex-end flex-column">
            <SearchBar Component={<Messages />} />
          </div>
        </div>
      ) : (
        <div className="bg-dark d-flex h2 m-auto p-2">
          Click any user for chat
        </div>
      )}
    </div>
  );
}

export default ClickedUser;
