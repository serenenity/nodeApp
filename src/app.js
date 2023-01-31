// console.log('hello world!');

// const { v4: uuidv4 } = require('uuid');

// console.log(uuidv4());

const express = require('express');
const app = express();
const port = 3000; 

app.get('/', (req, res) => {
    res.send(`hello world!`);
})

app.post('/', (req,  res) => {
    res.send('This is a POST request');
})

app.listen(port, () => {console.log(`Example of app listening port ${port}`)});