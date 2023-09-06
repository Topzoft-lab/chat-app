import React, { useEffect, useState } from "react";
import { useDataContext } from "../../../../../data";

export const ChatList = () => {
  const { chatLists } = useDataContext();
  const [chats, setChats] = useState([]);
  useEffect(() => {
    setChats(chatLists);
    setSelectedChatId(chatLists[0].id);
    console.log("no conditiono", chatLists);
  }, []);

  useEffect(() => {
    setChats(chatLists);
    setSelectedChatId(chatLists[0].id);
    console.log("yes conditiono", chatLists);
  }, [chatLists]);
  // Initialize selectedChatId with the ID of the first chat item (1 in this case)
  const [selectedChatId, setSelectedChatId] = useState(chats.length > 0 ? chats[0].id : 0);

  const handleChatItemClick = (chatId) => {
    setSelectedChatId(chatId);
  };
  return (
    <div className="chats-list">
      {chats &&
        chats.length > 0 &&
        chats.map((chat) => (
          <div
            className={`chat-item ${chat.id === selectedChatId ? "selected" : ""}`}
            key={chat.id}
            onClick={() => handleChatItemClick(chat.id)} // Handle chat item click
          >
            <div className="profile-pic">
              {/* <img src={} alt={chat.name} /> */}
              <img src={`src/assets/profile_pics/profile-pic-${chat.photo_id}.jpeg`} alt={chat.name} />
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
