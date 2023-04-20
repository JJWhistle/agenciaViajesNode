import express from 'express';
import rout from './routes/index.js';
import db from './config/db.js';

const app = express();


// Conectar Base de datos

db.authenticate()
    .then( () => console.log('Base de datos conectada'))
    .catch(error => console.log(error));


// Definir puerto
const port = process.env.PORT || 4000;

// Habilitar PUG
app.set('view engine', 'pug');

// Obtener el año actual
app.use((req, res, next) => {
    const year = new Date();

    res.locals.actualYear = year.getFullYear();
    res.locals.nombreSitio = 'Agencia de Viajes';
    next();
});

// Agregar Body parser para leer los datos del formulario

app.use(express.urlencoded({extended: true}));

// Definir carpeta publica
app.use(express.static('public'));

// Agregar Router
app.use('/', rout);


app.listen(port, () => {
    console.log(`El servidor esta funcionando en el puerto ${port}`);
})