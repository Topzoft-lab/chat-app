const { setStore, compareCode, getConversation } = require("./operations");
const { ipcMain } = require("electron");

//ipc Connections
ipcMain.handle("setUserProfile", (event, args) => {
  const { name, lastname } = args;
  return setStore(name, lastname);
});

ipcMain.handle("compareCode", (event, args) => {
  return compareCode(args.code);
});

ipcMain.handle("getConversation", (event, args) => {
  return getConversation();
});
