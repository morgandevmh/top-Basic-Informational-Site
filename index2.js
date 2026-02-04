const express = require ('express')
const path = require('path')

const app = express();
const PORT = 8080;

app.get("/", (req,res) => res.sendFile(sendpath.join(__dirname, '..', 'html', 'index.html')))

app.get("/about", (req,res) => res.sendFile(sendpath.join(__dirname, '..', 'html', 'about.html')))

app.get("/contact-me", (req,res) => res.sendFile(sendpath.join(__dirname, '..', 'html', 'contact-me.html')))

app.get("/404", (req,res) => res.sendFile(sendpath.join(__dirname, '..', 'html', '404.html')))


app.listen(PORT, (error) => {
    if (error) throw error;
    console.log(`Serveur lancé sur http://localhost:${PORT}`);
  });