const express = require('express');
const app = express();
const port = 3000;

const recursosHidricosRoutes = require('./routes/recursosHidricos');
const economiaVerdeRoutes = require('./routes/economiaVerde');

app.use(express.json());

app.use('/recursos-hidricos', recursosHidricosRoutes);
app.use('/economia-verde', economiaVerdeRoutes);

app.get('/', (req, res) => {
    res.send('Bem-vindo ao projeto Recurso Hídrico & Economia Verde!');
});

app.listen(port, () => {
    console.log(Servidor rodando em http:localhost:${port});
});