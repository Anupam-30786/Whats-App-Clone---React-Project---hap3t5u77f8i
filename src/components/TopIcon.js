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
    <div className="col-md-5 bg-dark w-100 mt-3 d-flex  justify-content-between">
      <div className="d-flex  justify-content-between col">
        <FaRegUserCircle size="40" className="icon m-2" />
      </div>
      <div className="d-flex col ">
        <HiOutlineUserGroup size={30} className="icon m-3" />
        <RiRefreshLine size={30} className="icon m-3" />
        <BiMessageDetail size={30} className="icon m-3" />
        <BsThreeDotsVertical size={30} className="icon m-3" />
      </div>
    </div>
  );
}

export default TopIcon;
