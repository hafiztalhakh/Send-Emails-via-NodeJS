const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const sendGridTransport = require('nodemailer-sendgrid-transport');

const apiKey = require('./emailAPIKey').apkiKey;
const email = require('./emailAPIKey').email;

const app = express();
const port = process.env.port || 8081;

// app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
        'Acces-Control-Allow-Methods',
        'OPTIONS, GET, POST, PUT, PATCH, DELETE'
    );
    res.setHeader(
        'Access-Control-Allow-Headers',
        'Content-Type, Authorization'
    );
    next();
});

//Email Configuration

const transporter = nodemailer.createTransport(sendGridTransport({
    auth: {
        api_key: apiKey
    }
}))


app.post('/email', (req, res, next) => {

    const sender_email = req.body.sender_email;
    const receiver_email = req.body.receiver_email;
    const subject = req.body.subject;
    const messagae = req.body.messagae;

    transporter.sendMail({
        to: receiver_email,
        from: email,
        subject: subject,
        html: `<h1>${messagae}</h1>`
    })
        .then(() => {
            console.log('Email Sent');
        })
        .catch(err => {
            console.log(err);
        })
})

app.listen(port, () => console.log(`Running on Port Number: ${port}`));