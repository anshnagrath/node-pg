import { Server } from "./server";
import http from 'http';
import { normalizePort, onError } from "./serverHandlers";
import fs from 'fs';
import { CONFIG } from "./config/environment";



const SERVER = new Server();

const PORT = normalizePort(process.env.port || 3000);

SERVER.app.set('port', PORT);

let server = http.createServer(SERVER.app);

server.listen(PORT);

// server handlers
server.on("error", error => onError(error, PORT));

server.on("listening", () => {
    const addr: any = server.address();
    const bind: string = (typeof addr === 'string') ? `pipe ${addr}` : `port ${addr.port}`;

    console.log(`Listening on ${bind}`);
});

// Create uploads folder if not exists
console.log(CONFIG.uploadsFolderPath, 'CONFIG.uploadsFolderPath');

if (!fs.existsSync(CONFIG.uploadsFolderPath)) {
    fs.mkdir(CONFIG.uploadsFolderPath, () => {
        console.log('Uploads folder created');

    })
} else {
    console.log('Uploads folders exists');

}

// Intialize socket
// intializeSocket(server);
