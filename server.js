'use strict';

const express = require('express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
    res.send('Hello World From Node App 1');
});

app.get('/health-check', (req, res) => {
    res.send('Health check passed');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);