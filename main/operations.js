const Store = require("electron-store");

const store = new Store();
const { v4: uuidv4 } = require("uuid");

// function to save to store
const setStore = (args, action = "register") => {
  // Create an instance of electron-store
  if (action === "register") {
    let otp = generateOTP();
    store.set("userProfile", { ...args, otp });
    // To retrieve user profile data:
    const userProfile = store.get("userProfile");
    return userProfile ? userProfile.otp : false;
  }
  store.set("userProfile", { ...args });
  return true;
};

//function to generate random numbers
const generateOTP = () => {
  // Generate a random number between 100,000 (inclusive) and 999,999 (inclusive)
  const min = 100000;
  const max = 999999;
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const compareCode = (code) => {
  const userProfile = store.get("userProfile");
  //   console.log({ code, userProfile });
  let response = userProfile.otp === parseInt(code) ? true : false;
  generateUserConversation();
  return response;
};

// function to generate user conversation

const generateUserConversation = () => {
  // Generate a UUID
  const uuid = uuidv4();
  store.set("conversations", [
    {
      id: uuid,
      name: "Darryl",
      photo_id: 1,
      lastMessage: "but I think mostly they targeting parents coos my friend's mother got scammed 20k",
      lastSeen: formatAMPM(new Date()),
      conversations: [
        { id: 1, text: "I saw the most recent scam is the ads on Facebook selling seafood at a cheap price", sender: "you", timestamp: "2:56 PM" },

        { id: 2, text: "but I think mostly they targeting parents coos my friend's mother got scammed 20k", sender: "Darryl", timestamp: "2:57 PM" },
      ],
    },
  ]);
};

const saveMessage = (id, message) => {
  const conversations = store.get("conversations");
  let conv = conversations.find((con) => con.id === id);
  if (message.sender !== "you") {
    conv.lastMessage = message.text;
    conv.lastSeen = formatAMPM(new Date());
  }

  conv.conversations.push({ ...message, timestamp: formatAMPM(new Date()) });
  console.log({ conv });
  store.set("conversations", conversations);
  return conversations;
};

const getConversation = () => {
  return store.get("conversations");
};

const formatAMPM = (date) => {
  let hours = date.getHours();
  let minutes = date.getMinutes();
  const ampm = hours >= 12 ? "PM" : "AM";

  hours = hours % 12 || 12; // Convert to 12-hour format

  // Ensure leading zeros for single-digit minutes
  minutes = minutes < 10 ? "0" + minutes : minutes;

  return `${hours}:${minutes} ${ampm}`;
};
module.exports = { setStore, compareCode, getConversation, saveMessage };
