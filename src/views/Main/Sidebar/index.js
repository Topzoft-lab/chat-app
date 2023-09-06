import React, { useState } from "react";
import "./styles/sidebar.scss";
import { ChatList } from "./components/ChatList";
import { useDataContext } from "../../../data";
// import EditFill from "../../../assets/icons/edit_FILL.svg";

const Sidebar = () => {
  // const [chats, setChats] = useState([
  //   {
  //     id: 1,
  //     name: "John Doe",
  //     lastMessage: "but I think mostly they targeting me!",
  //     lastSeen: "6:41 AM",
  //   },
  //   {
  //     id: 2,
  //     name: "Jane Smith",
  //     lastMessage: "How are you?",
  //     lastSeen: "10:00 AM",
  //   },
  //   // Add more chat objects as needed
  // ]);

  return (
    <div className="sidebar">
      <ChatList />
      <div className="footer">
        <div className="pen-icon">
          <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" fill="white">
            <path d="M200-200h56l345-345-56-56-345 345v56Zm572-403L602-771l56-56q23-23 56.5-23t56.5 23l56 56q23 23 24 55.5T829-660l-57 57Zm-58 59L290-120H120v-170l424-424 170 170Zm-141-29-28-28 56 56-28-28Z" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
