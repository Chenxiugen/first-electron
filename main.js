/*
 * @Author: chenxiugen@zuoyebang.com
 * @Date: 2021-06-21 20:42:09
 * @LastEditTime: 2021-06-22 14:50:58
 * @LastEditors: 陈秀根
 * @Description: electron 入口文件
 * 
 */
const { app, BrowserWindow, globalShortcut } = require("electron");

function createWindow() {
  const win = new BrowserWindow({
    fullscreen: true
  });
  win.loadFile("./dist/index.html");

  //注册快捷键
  globalShortcut.register("CmdOrCtrl+Shift+I", () => {
    win.webContents.openDevTools();
  })
}



// 启动后创建窗口
app.whenReady().then(() => {
  createWindow();
})