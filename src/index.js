import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
//const dotenv = require('dotenv');
//dotenv.config({path: '.env'});

app.set('port', 3000);
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/login.html');
});

app.get('/dashboard', (req, res) => {
  res.sendFile(__dirname + '/public/dashboard.html');
});

app.listen(app.get('port'), () => {
  console.log(`Servidor corriendo en puerto ${app.get('port')}`);
});
