const express = require('express');
const app = express();
const port = 3000;

const recursosHidricosRoutes = require('./routes/recursosHidricos');
const economiaVerdeRoutes = require('./routes/economiaVerde');

app.use(express.json());