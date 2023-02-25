import React from "react";
import { FaRegUserCircle } from "react-icons/fa";
import { HiOutlineUserGroup } from "react-icons/hi";
import { RiRefreshLine } from "react-icons/ri";
import { BiMessageDetail } from "react-icons/bi";
import { BsThreeDotsVertical } from "react-icons/bs";
import "../styles/App.css";
import SearchBar from "./SearchBar";

function TopIcon() {
  return (
    <div
      className="col-md-5 w-100  d-flex  justify-content-between"
      style={{ height: "73px", backgroundColor: "whitesmoke" }}
    >
      <div className="d-flex  justify-content-between col ">
        <FaRegUserCircle size="40" className="icon m-2" />
      </div>
      <div className="d-flex col ">
        <HiOutlineUserGroup size={35} className="icon m-3" />
        <RiRefreshLine size={35} className="icon m-3" />
        <BiMessageDetail size={35} className="icon m-3" />
        <BsThreeDotsVertical size={35} className="icon m-3" />
      </div>
    </div>
  );
}

export default TopIcon;
