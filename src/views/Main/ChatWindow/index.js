import React, { useEffect, useState } from "react";
import "./styles/chatWindow.scss"; // Import your chat window styles if you have them
import { useDataContext } from "../../../data";

const ChatWindow = ({ messages }) => {
  const [profile, setProfile] = useState({ id: 1, name: "Darryl" });
  // Simulated chat messages for a selected chat
  const { sendMessage } = useDataContext();
  const [msg, setMessage] = useState("");
  // Define a CSS class based on the message sender
  const getMessageClass = (message) => {
    console.log(message.sender, "amhere");
    return message.sender == "you" ? "sent-message" : "received-message";
  };

  let chatLists = [{ id: "8329998c-683f-4179-bbff-8757a3e71175", lastMessage: "", name: "Darryl", lastSeen: "10:40 AM", conversations: [{ id: 1, sender: "you", text: "hi" }] }];

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
      <div className="chat-header">
        <div className="profile-pic">
          <img src={`src/assets/profile_pics/profile-pic-${chatLists.length > 0 ? chatLists[0].photo_id : 1}.png`} alt={""} />
        </div>
        <div className="chat-name">{chatLists.length > 0 ? chatLists[0].name : ""}</div>
      </div>

      <div className="chat-messages">
        {chatLists.length > 0 &&
          chatLists[0].conversations &&
          chatLists[0].conversations.map((message) => (
            <div className={`message ${getMessageClass(message)}`} key={message.id}>
              {/* <div className="message-sender">{message.sender}</div> */}
              <div className="message-text">{message.text}</div>
              <div className="message-timestamp">{message.timestamp}</div>
            </div>
          ))}
      </div>

      {/* Message input */}
      <div className="message-input">
        <input type="text" placeholder="Type a message..." value={msg} onChange={handleChange} />
        <div className="pen-icon" onClick={handleClick}>
          <img className="custom-svg" src="src/assets/icons/arrow_upward.svg" />
        </div>
      </div>
    </div>
  );
};

export default ChatWindow;
