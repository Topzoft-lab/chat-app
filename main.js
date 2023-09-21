const { BrowserWindow, app, ipcMain, Notification } = require("electron");
const {  autoUpdater } = require('electron-updater');
const path = require("path");
require("./main/ipc");


app.whenReady().then(createWindow);


// Set the URL for your app's update server
autoUpdater.setFeedURL({
  provider: 'github',
  repo: 'https://github.com/Topzoft-lab/chat-app',
  owner: 'topzoft-lab',
});



autoUpdater.on('update-available', () => {
  dialog.showMessageBox({
    type: 'info',
    title: 'Update Available',
    message: 'A new version of the app is available. Do you want to update now?',
    buttons: ['Update', 'No']
  }, (buttonIndex) => {
    if (buttonIndex === 0) {
      autoUpdater.downloadUpdate();
    }
  });
});

autoUpdater.on('update-downloaded', () => {
  dialog.showMessageBox({
    type: 'info',
    title: 'Update Ready',
    message: 'Install and restart now?',
    buttons: ['Yes', 'Later']
  }, (buttonIndex) => {
    if (buttonIndex === 0) {
      autoUpdater.quitAndInstall(false, true);
    }
  });
});

autoUpdater.on('error', (error) => {
  dialog.showErrorBox('Error: ', error === null ? "unknown" : app.getVersion() + "This is my version" + (error.stack || error).toString());
});
// Your Electron app code...

const isDev = !app.isPackaged;

function createWindow() {
  const win = new BrowserWindow({
    width: 1200,
    height: 800,
    backgroundColor: "white",
    webPreferences: {
      nodeIntegration: false,
      worldSafeExecuteJavaScript: true,
      contextIsolation: true,
      preload: path.join(__dirname, "preload.js"),
    },
  });

  win.loadFile("index.html");
  // Check for updates and notify the user
autoUpdater.checkForUpdatesAndNotify();
}

if (isDev) {
  require("electron-reload")(__dirname, {
    electron: path.join(__dirname, "node_modules", ".bin", "electron"),
  });
}

ipcMain.on("notify", (_, message) => {
  new Notification({ title: "Notifiation", body: message }).show();
});

