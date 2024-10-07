// IMPORT EXPRESS
const express = require('express');
const app = express();

// DEFINE THE PORT
const port = 5000;

// DEFINE A SIMPLE GET ROUTE
app.get('/', (req, res) => {
    res.send('HELLO, THIS IS A GET REQUEST!');
});


app.get('/hello', (req, res) => {
    res.status(200).json('HELLO, THIS IS from a fucker....!');
});

// START THE SERVER
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
