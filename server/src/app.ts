import express from 'express';
import MainRouter from './mainRouter';
const path = require('path');


// read port config variable
const config = require('./config');

// enable cross origin requests
const cors = require('cors');

// initialise express server
const app = express();

// initialise express router
const router = MainRouter;

// use cors
app.use(cors());

// use router
app.use('/api', router);

// make server listen on port
((port = config.port) => app.listen(port, () => console.log(`> Listening on port ${port}`)))();

app.use(express.static(path.resolve(__dirname, '../../client/build')));

// all remaining requests return the React app, so it can handle routing.
app.get('*', function (request, response) {
    response.sendFile(path.resolve(__dirname, '../../client/public', 'index.html'));
});