import React from "react";
import "./Header.css";
import MenuIcon from "@material-ui/icons/Menu";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";
import { Avatar } from "@material-ui/core";

const Header = () => {
  return (
    <div className="header">
      <div className="header__left">
        <MenuIcon />
        <img
          className="header__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/800px-YouTube_Logo_2017.svg.png"
          alt=""
        />
      </div>
      <div className="header__input">
        <input type="text" placeholder="Search" />
        <SearchOutlinedIcon className="header__inputButton" />
      </div>
      <div className="header__icons">
        <VideoCallIcon className="header__icon" />
        <AppsIcon className="header__icon" />
        <NotificationsIcon className="header__icon" />
        <Avatar src="https://i.pravatar.cc/300" alt="" />
      </div>
    </div>
  );
};

export default Header;
