'use strict';

const express = require('express');

// константы
const port = 8080;
const host = '0.0.0.0';

function between(min, max) {
    return Math.floor(
        Math.random() * (max - min) + min
    )
}

// приложение
const app = express();
app.get('/', (req, res) => {
    res.send('Hello World! - ' + between(1,50));
});

app.listen(port, host);
console.log(`running on http://${host}:${port}`);