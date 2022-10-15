const compression = require('compression');
const express = require('express');
const cors = require('cors');
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use(compression());


app.use('/web', require('../api/index'));


app.use(async (req, res, next) => {
    res.statusCode = 404;
    return res.json({
        status: false,
        msg: 'The url you are trying to reach is not hosted on our server.'
    });
});

module.exports = app;