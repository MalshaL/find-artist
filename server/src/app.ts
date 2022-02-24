import dotenv from 'dotenv';
import express from 'express';


// load the environment variables from .env file
dotenv.config({
    path: '.env'
});

// initialize express server
const app = express();

// make server listen on port
((port = process.env.APP_PORT || 5000) => {
    app.listen(port, () => console.log(`> Listening on port ${port}`));
})();

