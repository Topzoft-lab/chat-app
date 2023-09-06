import React, { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const DataContext = createContext();

export const useDataContext = () => useContext(DataContext);

const DataProvider = ({ children }) => {
  const [isSignup, setSignUp] = useState(false);
  const [isRegister, setRegister] = useState(false);
  const [isLogin, setLogin] = useState(false);
  const [otp, setOtp] = useState("");
  const [phone, setPhone] = useState("");
  const [chatLists, setChatList] = useState(false);
  const [isMessageSent, setIsMessageSent] = useState(false);

  //   // Example: Using useHistory for navigation
  const navigate = useNavigate();

  // Example: Redirect to /login when isSignup changes
  React.useEffect(() => {
    console.log("i am here o", isSignup);
    if (isSignup) {
      navigate("/signup");
    }
  }, [isSignup]);

  React.useEffect(() => {
    console.log("i am here o", isRegister);
    if (isRegister) {
      navigate("/login");
    }
  }, [isRegister]);

  // Example: Redirect to /main when isLogin changes
  React.useEffect(() => {
    const fetchData = async () => {
      if (isLogin) {
        let result = await window.api.getConversation();
        // console.log(result);
        setChatList(result);
        navigate("/main");
      }
    };
    fetchData();
  }, [isLogin]);

  React.useEffect(() => {
    const fetchData = async () => {
      if (isMessageSent) {
        let result = await window.api.getConversation();
        // console.log(result, "newData");
        setChatList(result);
        // navigate("/main");
      }
    };
    fetchData();
  }, [isMessageSent]);

  React.useEffect(() => {}, []);
  const registerPhone = (phonenumber) => {
    setPhone(phonenumber);
  };

  const sendMessage = async (text) => {
    console.log("here now, hit", chatLists);
    let length = chatLists.length > 0 ? chatLists[0].conversations.length : 0;
    let lastMessage = length > 0 ? chatLists[0].conversations[length - 1] : "";
    console.log("here now, hit, lastmessage", lastMessage);
    const newMessage = { id: chatLists[0].conversations.length + 1, text, sender: lastMessage.sender === "you" ? chatLists[0].name : "you" };
    console.log("here now, hit newMessage", newMessage);
    let result = await window.api.saveMessage({ newMessage, id: chatLists[0].id });
    // console.log(result, "now here");
    setIsMessageSent(true);
    setChatList(result);
  };

  const value = { isSignup, isLogin, setSignUp, setLogin, sendMessage, chatLists, phone, registerPhone, setRegister, otp, setOtp };

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};

export default DataProvider;
