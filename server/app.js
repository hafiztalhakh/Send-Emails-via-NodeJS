const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.port || 5000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.listen(port, () => console.log(`Running on Port Number: ${port}`));