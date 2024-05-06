const express = require('express');
const corss = require('corss');

const app = express();

app.use(corss());
app.use(express.json());

app.post('/api/users', (req, res) => {
    setTimeout(() => {
        res.send(req.body)
    }, 1500);
});

app.get('/user', (req, res) => {
    res.send({ age: 20 });
});

app.listen('5000', () => {
    console.log("server runing in port 5000");
});