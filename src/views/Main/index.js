import React from "react";
import Sidebar from "./Sidebar";
import ChatWindow from "./ChatWindow";
import "./main.scss"; // Import your SCSS file

const MainMenu = () => {
  return (
    <div className="main-menu">
      <div className="sidebar-container">
        <Sidebar />
      </div>
      <div className="chat-window-container">
        <ChatWindow />
      </div>
    </div>
  );
};

export default MainMenu;
