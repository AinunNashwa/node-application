
const express = require('express');
const app = express();
require("dotenv").config();

const port = process.env.PORT;
const api = process.env.API_URL;

// Middleware
app.use(express.json());

app.get('/', (req, res) => {
    res.sendFile('index.html', { root: __dirname });
});

const usersRoutes = require('./routes/users');
app.use(`${api}/users`, usersRoutes);

app.listen(port, () => {
    console.log(`Now listening on port ${port}`);
});
