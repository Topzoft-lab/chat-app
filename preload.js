const { ipcRenderer, contextBridge } = require("electron");

contextBridge.exposeInMainWorld("api", {
  signup: (arg) => ipcRenderer.invoke("setUserProfile", arg),
  compareCode: (arg = "") => ipcRenderer.invoke("compareCode", arg),
  getConversation: (arg = "") => ipcRenderer.invoke("getConversation", arg),
  saveMessage: (arg) => ipcRenderer.invoke("saveMessage", arg),
});
