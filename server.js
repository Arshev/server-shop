require('babel-register');

const express = require('express');
const result = require('./render').default

const app = express();

app.get('/', (req, res) => {
    res.send(`
    <!doctype html>
    <html>
    <head>
        <title>Vegitable Shop</title>
    </head>
    <body>
        <div id="app">${result}</div>
    </body>
    </html>`)
});

app.listen(3005);


