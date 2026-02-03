const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 8080;

const server = http.createServer((req, res) => {
    
    if (req.url === '/favicon.ico') {
        res.writeHead(204);
        res.end();
        return
    }
    
    let pageName;
    
    switch (req.url) {
        case '/': 
            pageName = 'index.html';
            break;
        case '/about':
            pageName = 'about.html';
            break;
        case '/contact-me':
            pageName = 'contact-me.html';
            break;
        default:
            pageName = '404.html';
            break;
    }
    
    const fullPath = path.join(__dirname, '..', 'html', pageName);
    
    let status = 200;
    if (pageName === '404.html') {
        status = 404
    }
    
    fs.readFile(fullPath, 'utf-8', (err, data) => {
        if (err) {
            console.error('ERREUR :', err);
            res.writeHead(500, {'Content-Type': 'text/html'});
            res.end('<h1>Erreur serveur</h1>');
        } else {
            res.writeHead(status, { 'Content-Type': 'text/html' })
            res.end(data)
        }
    });
});

server.listen(PORT, () => {
    console.log(`Serveur lancé sur http://localhost:${PORT}`)
});