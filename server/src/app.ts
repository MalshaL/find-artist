import dotenv from 'dotenv';
import express from 'express';
import MainRouter from './MainRouter';


// load the environment variables from .env file
dotenv.config({
    path: '.env'
});

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
((port = process.env.APP_PORT || 5000) => {
    app.listen(port, () => console.log(`> Listening on port ${port}`));
})();
