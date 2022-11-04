
const express = require('express');
const app = express();
require("dotenv").config();

const mongoose = require("mongoose");
const port = process.env.PORT;
const api = process.env.API_URL;

// Middleware
app.use(cors());
app.options('*',cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.sendFile('index.html', { root: __dirname });
});

const usersRoutes = require('./routes/users');
app.use(`${api}/users`, usersRoutes);

mongoose.connect(`${process.env.CONNECTION_STRING}/${process.env.DBNAME}`)
    .then(() => {
        console.log('Database connection is ready!')
    })
    .catch(err => {
        console.error(err.message);
    })

app.listen(port, () => {
    console.log(`Now listening on port ${port}`);
});
