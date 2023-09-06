import React from "react";

export const MessageInput = ({ handleClick, handleChange, msg }) => {
  return (
    <div className="message-input">
      <input type="text" placeholder="Type a message..." value={msg} onChange={handleChange} />
      <div className="message-button" onClick={handleClick}>
        <svg xmlns="http://www.w3.org/2000/svg" height="18" viewBox="0 -960 960 960" width="18" fill="white">
          <path d="M440-160v-487L216-423l-56-57 320-320 320 320-56 57-224-224v487h-80Z" />
        </svg>
      </div>
    </div>
  );
};
