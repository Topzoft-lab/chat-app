import React, { useEffect, useState } from "react";
import "./styles/chatWindow.scss"; // Import your chat window styles if you have them
import { useDataContext } from "../../../data";
import { ChatHeader } from "./components/ChatHeader";
import { MessageArea } from "./components/MessageArea";
import { MessageInput } from "./components/MessageInput";

const ChatWindow = ({ messages }) => {
  // Simulated chat messages for a selected chat
  const { chatLists, sendMessage } = useDataContext();
  const [msg, setMessage] = useState("");

  const handleChange = async (e) => {
    const { name, value } = e.target;
    setMessage(value);
  };
  const handleClick = () => {
    setMessage("");
    sendMessage(msg);
  };

  return (
    <div className="chat-window">
      {/* Chat header */}
      <ChatHeader chatLists={chatLists} />
      <div className="chat-messages-container">
        <MessageArea chatLists={chatLists} />
      </div>
      <div className="chat-footer">
        {/* Message input */}
        <MessageInput handleClick={handleClick} handleChange={handleChange} msg={msg} />
      </div>
    </div>
  );
};

export default ChatWindow;
