const { PeerServer } = require('peer');

const server = PeerServer({ 
  port: process.env.PORT || 9000,
  path: '/'
});

server.on('connection', (client) => {
  console.log('Client connected:', client.getId());
});

console.log('PeerServer started on port', process.env.PORT || 9000);