const http = require('http');

const server = http.createServer((req, res) => {
  const url = new URL(req.url, 'http://localhost');

  if (url.pathname === '/saludo') {
    const nombre = url.searchParams.get('nombre') || 'desconocido';
    
    res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end(`Hola ${nombre}`);
  } 
  
  else {
    res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end('404 - Ruta no encontrada');
  }
});

server.listen(3000, () => {
  console.log('Servidor corriendo en http://localhost:3000');
});