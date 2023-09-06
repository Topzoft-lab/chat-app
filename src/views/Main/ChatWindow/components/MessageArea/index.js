import React from "react";

export const MessageArea = ({ chatLists }) => {
  const getMessageClass = (message) => {
    console.log(message.sender, "amhere");
    return message.sender == "you" ? "sent-message" : "received-message";
  };
  return (
    <div className="chat-messages">
      {chatLists.length > 0 &&
        chatLists[0].conversations &&
        chatLists[0].conversations.map((message) => (
          <div className={`message ${getMessageClass(message)}`} key={message.id}>
            {/* <div className="message-sender">{message.sender}</div> */}
            <p className="message-text">{message.text}</p>
            <p className="message-timestamp">{message.timestamp}</p>

            {/* <MessageCard sender={message.sender} text={message.text} timestamp={message.timestamp} /> */}
          </div>
        ))}
    </div>
  );
};
