const { ipcRenderer, contextBridge } = require("electron");

contextBridge.exposeInMainWorld("api", {
  register: (arg) => ipcRenderer.invoke("register", arg),
  signup: (arg) => ipcRenderer.invoke("setUserProfile", arg),
  compareCode: (arg = "") => ipcRenderer.invoke("compareCode", arg),
  getConversation: (arg = "") => ipcRenderer.invoke("getConversation", arg),
  saveMessage: (arg) => ipcRenderer.invoke("saveMessage", arg),
});
