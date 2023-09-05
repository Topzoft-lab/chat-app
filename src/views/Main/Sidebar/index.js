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
          <img className="custom-svg" src="src/assets/icons/edit_FILL.svg" />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
