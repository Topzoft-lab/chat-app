import React, { useState } from "react";
import "./styles/sidebar.scss";
import { ChatList } from "./components/ChatList";
// import EditFill from "../../../assets/icons/edit_FILL.svg";

const Sidebar = () => {
  const [chats, setChats] = useState([
    {
      id: 1,
      name: "John Doe",
      lastMessage: "but I think mostly they targeting me!",
      lastSeen: "6:41 AM",
    },
    {
      id: 2,
      name: "Jane Smith",
      lastMessage: "How are you?",
      lastSeen: "10:00 AM",
    },
    // Add more chat objects as needed
  ]);

  // Initialize selectedChatId with the ID of the first chat item (1 in this case)
  const [selectedChatId, setSelectedChatId] = useState(chats[0].id);

  const handleChatItemClick = (chatId) => {
    setSelectedChatId(chatId);
  };

  return (
    <div className="sidebar">
      <ChatList chats={chats} handleChatItemClick={handleChatItemClick} selectedChatId={selectedChatId} />
      <div className="footer">
        <div className="pen-icon">
          <img className="custom-svg" src="src/assets/icons/edit_FILL.svg" />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
