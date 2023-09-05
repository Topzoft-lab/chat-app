import React, { useState } from "react";
import "./styles/chatWindow.scss"; // Import your chat window styles if you have them

const ChatWindow = ({ messages }) => {
  const [profile, setProfile] = useState({ id: 1, name: "Darryl" });
  // Simulated chat messages for a selected chat
  const selectedChatMessages = [
    {
      id: 1,
      text: "Hello!",
      sender: "You",
      timestamp: "10:00 AM",
    },
    {
      id: 2,
      text: "Hi, how are you?",
      sender: "Jane Smith",
      timestamp: "10:05 AM",
    },
    // Add more message objects for the selected chat
  ];
  // Define a CSS class based on the message sender
  const getMessageClass = (message) => {
    return message.sender === "You" ? "sent-message" : "received-message";
  };
  return (
    <div className="chat-window">
      {/* Chat header */}
      <div className="chat-header">
        <div className="profile-pic">
          <img src={`src/assets/profile_pics/profile-pic-${profile.id}.png`} alt={profile.name} />
        </div>
        <div className="chat-name">{profile.name}</div>
      </div>

      <div className="chat-messages">
        {selectedChatMessages.map((message) => (
          <div className={`message ${getMessageClass(message)}`} key={message.id}>
            {/* <div className="message-sender">{message.sender}</div> */}
            <div className="message-text">{message.text}</div>
            <div className="message-timestamp">{message.timestamp}</div>
          </div>
        ))}
      </div>

      {/* Message input */}
      <div className="message-input">
        <input type="text" placeholder="Type a message..." />
        <div className="pen-icon">
          <img className="custom-svg" src="src/assets/icons/arrow_upward.svg" />
        </div>
      </div>
    </div>
  );
};

export default ChatWindow;
