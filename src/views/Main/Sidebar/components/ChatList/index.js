import React, { useState } from "react";

export const ChatList = ({ chats, handleChatItemClick, selectedChatId }) => {
  return (
    <div className="chats-list">
      {chats.map((chat) => (
        <div
          className={`chat-item ${chat.id === selectedChatId ? "selected" : ""}`}
          key={chat.id}
          onClick={() => handleChatItemClick(chat.id)} // Handle chat item click
        >
          <div className="profile-pic">
            {/* <img src={} alt={chat.name} /> */}
            <img src={`src/assets/profile_pics/profile-pic-${chat.id}.jpeg`} alt={chat.name} />
          </div>
          <div className="chat-info">
            <div className="row1">
              <div className="chat-name">{chat.name}</div>
              <div className="last-seen">{chat.lastSeen}</div>
            </div>
            <div className="last-message">{chat.lastMessage}</div>
          </div>
          {/* {chat.unreadCount > 0 && <div className="unread-count">{chat.unreadCount}</div>} */}
        </div>
      ))}
    </div>
  );
};
