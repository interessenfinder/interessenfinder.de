const express = require('express');
const app = express();

const dataRoutes = require('./api/data');

app.get('/', (req, res, next) => {
    res.status(200).json({
        message: "it works"
    });
});

app.use('/data', dataRoutes)

app.listen(3000);