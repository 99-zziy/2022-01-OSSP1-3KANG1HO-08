const express = require('express')
const app = express()
const mongoose = require('mongoose')
const port = 4000
const bodyParser = require('body-parser');

mongoose
    .connect('mongodb+srv://rkdgml:choi0730!A@laon.joias.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err))

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
    })   