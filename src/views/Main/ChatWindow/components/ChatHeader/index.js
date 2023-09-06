import React from "react";

export const ChatHeader = ({ chatLists }) => {
  return (
    <div className="chat-header">
      <div className="profile-pic">
        <img src={`src/assets/profile_pics/profile-pic-${chatLists.length > 0 ? chatLists[0].photo_id : 1}.jpeg`} alt={""} />
      </div>
      <div className="chat-name">{chatLists.length > 0 ? chatLists[0].name : ""}</div>
    </div>
  );
};
