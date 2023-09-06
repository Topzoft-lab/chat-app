const { setStore, compareCode, getConversation, saveMessage } = require("./operations");
const { ipcMain } = require("electron");

//ipc Connections
ipcMain.handle("setUserProfile", (event, args) => {
  // const { name, lastname } = args;
  return setStore(args, "");
});

ipcMain.handle("register", (event, args) => {
  // const { phone } = args;
  return setStore(args);
});

ipcMain.handle("compareCode", (event, args) => {
  return compareCode(args.code);
});

ipcMain.handle("getConversation", (event, args) => {
  return getConversation();
});
// saveMessage
ipcMain.handle("saveMessage", (event, args) => {
  const { id, newMessage } = args;
  return saveMessage(id, newMessage);
});
