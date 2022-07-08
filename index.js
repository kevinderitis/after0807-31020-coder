const express = require('express');
const app = express();

app.get('/ruta', (req, res) => {
    res.send('Hola mundo');
})

app.get('ruta2', (req, res) => {
    res.send('Chau mundo');
})

app.listen(8080, () => console.log('Server running'))