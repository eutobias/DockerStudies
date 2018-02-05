'use strict';

const express = require('express');
const fs = require("fs");

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  let data = fs.readFile('test.txt', (err, data) => {
    res.send('Lendo arquivo teste.txt: ' + data);
  })
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);