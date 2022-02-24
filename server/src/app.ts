import dotenv from 'dotenv';
import express from 'express';

// load the environment variables from .env file
dotenv.config({
    path: '.env'
});

// Express server
class Server {
    app = express();
}

// initialize server
const server = new Server();

// make server listen on port 5000
((port = process.env.APP_PORT || 5000) => {
    server.app.listen(port, () => console.log(`> Listening on port ${port}`));
})();
