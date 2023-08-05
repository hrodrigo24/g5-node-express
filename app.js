
// importar el paquete de express para el webserver
const express = require('express');
// inicializar la aplicación con el archivo app.js
const app = express();
// para activar el puerto
const puerto = 7475;

// para mostrar los archivos de la carpeta public, utiliza metodo use

app.use(express.static('public'))

// para crear las rutas de las paginas web, se utiliza el metodo get

app.get('/left-sidebar', (req, res) => {
    // res, para dar una respuesta de petición al usuario 
    res.sendFile(__dirname + '/public/left-sidebar.html');
})
app.get('/no-sidebar', (req, res) => {
    // res, para dar una respuesta de petición al usuario 
    res.sendFile(__dirname + '/public/left-sidebar.html');
})
app.get('/right-sidebar', (req, res) => {
    // res, para dar una respuesta de petición al usuario 
    res.sendFile(__dirname + '/public/left-sidebar.html');
})
app.get('*', (req, res) => {
    // el comodin o *, en este caso, si la pagina no existe, va a retornar 404.html 
    res.sendFile(__dirname + '/public/404.html');
})

// activar el puerto para el webservwr con un listen
app.listen(puerto,()=>{
    // imprimir en la consola, si se activo con éxito el webserver
    console.log(`El webserver esta activo en el puerto ${puerto}`);


})

