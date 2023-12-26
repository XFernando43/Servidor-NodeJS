const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3000;
const HOST = '192.168.0.2';

const server = http.createServer((req, res) => {
  const filePath = path.join(__dirname, 'public', req.url === '/' ? 'index.html' : req.url);
  const contentType = getContentType(filePath);

  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      res.writeHead(404, {'Content-Type': 'text/plain'});
      res.end('Not Found');
    } else {
      res.writeHead(200, {'Content-Type': contentType});
      res.end(data);
    }
  });
});

server.listen(PORT, HOST, () => {
  console.log(`Server running at http://${HOST}:${PORT}/`);
});


function getContentType(filePath) {
  const extname = path.extname(filePath);
  switch (extname) {
    case '.html':
      return 'text/html';
    case '.css':
      return 'text/css';
    case '.jpeg':
      return 'image/jpeg'; // Corregido aquí
    case '.js':
      return 'text/javascript'; // Cambiado de 'text/js' a 'text/javascript'
    case '.png':
      return 'image/png+xml'; // Corregido aquí
    case '.svg':
      return 'image/svg+xml';
    default:
      return 'text/plain';
  }
}

