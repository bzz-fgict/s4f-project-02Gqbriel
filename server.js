const express = require('express');

const app = express();
const port = 8000;

app.get('/', (req, res) => {
    res.status(200).send('du hund');
});

app.listen(port, (e) => {
    if (e) console.log('> [HTTP] Error: ', e);
    console.log('> [HTTP] server listening on http://localhost:' + port);
});