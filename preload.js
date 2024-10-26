const { contextBridge, ipcRenderer } = require('electron/renderer')

contextBridge.exposeInMainWorld('api', {
   onFullScreenStatus: (callback) => ipcRenderer.on('full-screen-status', callback)
})
