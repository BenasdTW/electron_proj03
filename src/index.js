const {app, BrowserWindow} = require('electron');

let mainWindow;

function createWindow () {
    mainWindow = new BrowserWindow({
        width: 550,
        height: 400,
        webPreferences: {
            //nodeIntegration: false
            nodeIntegration: true
        },
        frame: false,
        //resizable: false
    });

    // and load the index.html of the app.
    mainWindow.loadFile('./src/index.html');
    mainWindow.on('closed', () => {
        mainWindow = null;
    });
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
    if(process.platform !== 'darwin') app.quit();
});

app.on('activate', () => {
    if(mainWindow === null) createWindow();
});