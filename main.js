/*
 * @Author: chenxiugen@zuoyebang.com
 * @Date: 2021-06-21 20:42:09
 * @LastEditTime: 2021-06-23 14:27:49
 * @LastEditors: 陈秀根
 * @Description: electron 入口文件
 * 
 */
const { app, BrowserWindow, globalShortcut, Notification, Menu } = require("electron");

const isMac = process.platform === 'darwin'

let timer = null;

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600
  });
  win.loadFile("./dist/index.html");
  win.autoHideMenuBar = true;

  //注册快捷键
  globalShortcut.register("CmdOrCtrl+Shift+I", () => {
    win.webContents.openDevTools();
  });

  let progress = 0;
  timer = setInterval(() => {
    progress = progress >= 2 ? 0 : (progress + 0.03);
    win.setProgressBar(progress);
  }, 100);
}

/** 关闭所有窗口时退出应用 */
app.on('window-all-closed', function() {
  app.quit()
});
/** 关闭是时清理计时器 */
app.on("before-quit", () => {
  timer && clearInterval(timer);
  console.info("即将结束");
})

/**
 * 显示系统通知
 */
function showNotification() {
  new Notification({
    title: "通知标题1121",
    body: "实体内容信息"
  }).show();
}

// 最近打开的文件
app.addRecentDocument("index.html");


// 菜单栏
const template = [
  // { role: 'appMenu' }
  ...(isMac ? [{
    label: app.name,
    submenu: [
      { role: 'about' },
      { type: 'separator' },
      { role: 'services' },
      { type: 'separator' },
      { role: 'hide' },
      { role: 'hideothers' },
      { role: 'unhide' },
      { type: 'separator' },
      { role: 'quit' }
    ]
  }] : []),
  // { role: 'fileMenu' }
  {
    label: 'File',
    submenu: [
      isMac ? { role: 'close' } : { role: 'quit' }
    ]
  },
  // { role: 'editMenu' }
  {
    label: 'Edit',
    submenu: [
      { role: 'undo' },
      { role: 'redo' },
      { type: 'separator' },
      { role: 'cut' },
      { role: 'copy' },
      { role: 'paste' },
      ...(isMac ? [
        { role: 'pasteAndMatchStyle' },
        { role: 'delete' },
        { role: 'selectAll' },
        { type: 'separator' },
        {
          label: 'Speech',
          submenu: [
            { role: 'startSpeaking' },
            { role: 'stopSpeaking' }
          ]
        }
      ] : [
        { role: 'delete' },
        { type: 'separator' },
        { role: 'selectAll' }
      ])
    ]
  },
  // { role: 'viewMenu' }
  {
    label: 'View',
    submenu: [
      { role: 'reload' },
      { role: 'forceReload' },
      { role: 'toggleDevTools' },
      { type: 'separator' },
      { role: 'resetZoom' },
      { role: 'zoomIn' },
      { role: 'zoomOut' },
      { type: 'separator' },
      { role: 'togglefullscreen' }
    ]
  },
  // { role: 'windowMenu' }
  {
    label: 'Window',
    submenu: [
      { role: 'minimize' },
      { role: 'zoom' },
      ...(isMac ? [
        { type: 'separator' },
        { role: 'front' },
        { type: 'separator' },
        { role: 'window' }
      ] : [
        { role: 'close' }
      ])
    ]
  },
  {
    role: 'help',
    submenu: [{
      label: 'Learn More',
      click: async() => {
        const { shell } = require('electron')
        await shell.openExternal('https://electronjs.org')
      }
    }]
  }
]
const menu = Menu.buildFromTemplate(template);



// 进度条



// 启动后创建窗口
app.whenReady().then(() => {
  Menu.setApplicationMenu(menu);
  createWindow();
}).then(showNotification);