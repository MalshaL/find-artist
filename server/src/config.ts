import dotenv from 'dotenv';


// load the environment variables from .env file
const result = dotenv.config({
    path: '.env.local'
});
module.exports = {
    nodeDev: process.env.NODE_ENV,
    port: process.env.APP_PORT,
    apiUrl: process.env.API_URL,
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    grantType: process.env.GRANT_TYPE
};