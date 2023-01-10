/*
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req,res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Olá!!!');
})

server.listen(port,hostname, () => {
    console.log("Servidor rodando!");
});
*/


const express = require('express');
const path = require('path');
const dotenv = require('dotenv');
const connectToDatabase = require('./src/database/connect_mongodb');

const app = express();
const router = express.Router();
dotenv.config();

connectToDatabase();

router.get('/', function(req,res){
    res.sendFile(path.join(__dirname, 'src', 'public', '/index.html'));
});
router.get('/page', function(req,res){
    res.sendFile(path.join(__dirname, 'src', 'public', '/page.html'));
});
router.get('/sobre', function(req,res){
    res.sendFile(path.join(__dirname, 'src', 'public', '/sobre.html'));
});

app.use(express.static(path.join(__dirname, 'src', 'public')));
app.use('/',router);
app.listen(process.env.port || 3000);

console.log("Servidor rodando!");