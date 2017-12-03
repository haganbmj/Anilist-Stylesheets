const fs = require('fs');
const path = require('path');
const https = require('https');
const connect = require('connect');
const serveStatic = require('serve-static');
const sassMiddleware = require('node-sass-middleware');
const WebSocket = require('ws');
const watch = require('glob-watcher');

const ssl = {
  key: fs.readFileSync(path.join(__dirname, 'ssl.key')),
  cert: fs.readFileSync(path.join(__dirname, 'ssl.cert'))
};

const server = connect();

server.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Cache-Control', 'no-cache');
  return next();
});

server.use(
  sassMiddleware({
    src: path.join(__dirname, 'src'),
    dest: path.join(__dirname, 'css'),
    outputStyle: 'compressed',
    debug: true
  })
);

server.use(serveStatic(path.join(__dirname, 'css')));
server.use(serveStatic(path.join(__dirname, 'js')));

const httpsServer = https.createServer(ssl, server).listen(8080, '0.0.0.0');

const ws = new WebSocket.Server({server: httpsServer});

function broadcastUpdate() {
  console.log(`[${Date()}] Broadcasting File Update`);
  ws.clients.forEach(client => {
    if (client.readyState === WebSocket.OPEN) {
      client.send('update');
    }
  });
}

watch(['./src/**/*'], done => {
  broadcastUpdate();
  done();
});
