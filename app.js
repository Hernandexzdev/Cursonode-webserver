import {fileURLToPath} from 'url';
import path from "path";
import express from "express";
import hbs from "hbs";
import * as dotenv from "dotenv";


const app = express();
const port = process.env.PORT;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


//* Configuraciones
dotenv.config();

//? Motor de platillas HBS
app.set('view engine', 'hbs');
hbs.registerPartials( __dirname + '/views/partials');


//* Servir contenido estaticos
app.use( express.static('public') );


app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'Pedro',
        curso: 'NodeJS'
    });
});


app.get('/generic', (req, res) => {
    res.render('generic', {
        nombre: 'Pedro',
        curso: 'NodeJS'
    });
  
});

app.get('/elements', (req, res) => {
    res.render('elements', {
        nombre: 'Pedro',
        curso: 'NodeJS'
    });
});

app.get('*', (req, res) => {
    res.sendFile( __dirname + '/public/404.html');
});

app.listen(port);