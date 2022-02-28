// server side API endpoints which connect to Spotify API

const express = require('express');
const path = require('path');

// enable cross origin requests
const cors = require('cors');

// initialise express server
const app = express();

// read environmental variables from config file
const envFilePath = path.resolve(__dirname, '../.env.local');
console.log(envFilePath);
const dotenv = require('dotenv').config({path: envFilePath});
const config = require('app-config');
console.log(config);

// initialise express router
const router = require('router-module');

// use cors
app.use(cors());

// use router
app.use('/api', router);

// use build files from client
app.use(express.static(path.resolve(__dirname, '../../client/build')));

app.get('/', function (req, res) {
    res.render(path.resolve(__dirname, '../../client/build/index.html'));
});

// all remaining requests return the React app
app.get('*', function (response) {
    response.sendFile(path.resolve(__dirname, '/../../client/public', 'index.html'));
});

// make server listen on port
// const PORT = process.env.PORT || 5000;
const PORT = 5000;
app.listen(PORT, () => console.log(`> Listening on port ${PORT}`));